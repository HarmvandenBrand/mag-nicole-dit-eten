/* ============================================================
   Mag Nicole dit eten? – App-logica
   Pure JavaScript, geen frameworks
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // ── DOM-verwijzingen ─────────────────────────────────────────
  const zoekbalk           = document.getElementById('zoekbalk');
  const suggestiesEl       = document.getElementById('suggesties');
  const resultaatEl        = document.getElementById('resultaat');
  const geenResultaatEl    = document.getElementById('geen-resultaat');
  const voedselEmojiEl     = document.getElementById('voedsel-emoji');
  const voedselFotoEl      = document.getElementById('voedsel-foto');
  const voedselNaamEl      = document.getElementById('voedsel-naam');
  const statusBadgeEl      = document.getElementById('status-badge');
  const voedselNotitieEl   = document.getElementById('voedsel-notitie');

  // ── Toestand ─────────────────────────────────────────────────
  let gevondenSuggesties = [];
  let actieveIndex       = -1;

  // ── Zoeklogica ───────────────────────────────────────────────
  function zoekVoedsel(invoer) {
    const q = invoer.toLowerCase().trim();
    if (!q) return [];

    const resultaten = [];

    voedingsmiddelen.forEach(item => {
      const naam    = item.naam.toLowerCase();
      const termen  = item.zoektermen.map(t => t.toLowerCase());

      if (naam.startsWith(q) || termen.some(t => t.startsWith(q))) {
        resultaten.push({ item, prioriteit: 1 });
      } else if (naam.includes(q) || termen.some(t => t.includes(q))) {
        resultaten.push({ item, prioriteit: 2 });
      }
    });

    return resultaten
      .sort((a, b) =>
        a.prioriteit - b.prioriteit ||
        a.item.naam.localeCompare(b.item.naam, 'nl')
      )
      .map(r => r.item);
  }

  // ── Suggesties weergeven ─────────────────────────────────────
  function toonSuggesties(items) {
    suggestiesEl.innerHTML = '';
    if (!items.length) return;

    const stipKlasse = { groen: 'stip-groen', geel: 'stip-geel', rood: 'stip-rood' };

    items.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'suggestie-item';
      el.setAttribute('role', 'option');
      el.setAttribute('data-index', idx);

      el.innerHTML =
        `<span class="suggestie-emoji">${item.emoji}</span>` +
        `<span class="suggestie-naam">${escapeHtml(item.naam)}</span>` +
        `<span class="suggestie-stip ${stipKlasse[item.status]}"></span>`;

      el.addEventListener('click', () => kiesVoedsel(item));
      el.addEventListener('mouseenter', () => {
        actieveIndex = idx;
        markeerActief();
      });

      suggestiesEl.appendChild(el);
    });
  }

  function verbergSuggesties() {
    suggestiesEl.innerHTML = '';
    gevondenSuggesties = [];
    actieveIndex = -1;
  }

  function markeerActief() {
    suggestiesEl.querySelectorAll('.suggestie-item').forEach((el, i) => {
      el.classList.toggle('actief', i === actieveIndex);
    });
  }

  // ── Resultaat weergeven ──────────────────────────────────────
  function kiesVoedsel(item) {
    zoekbalk.value = item.naam;
    verbergSuggesties();
    geenResultaatEl.classList.remove('zichtbaar');
    toonResultaat(item);
  }

  function toonResultaat(item) {
    // Achtergrondthema wisselen
    document.body.className = `thema-${item.status}`;

    // Emoji tonen (foto verbergen totdat die geladen is)
    voedselEmojiEl.textContent   = item.emoji;
    voedselEmojiEl.style.display = '';
    voedselFotoEl.classList.add('verborgen');
    voedselFotoEl.src = '';

    // Tekst invullen
    voedselNaamEl.textContent = item.naam;

    const statusInfo = {
      groen: { tekst: '✅ Mag je eten',        klasse: 'badge-groen' },
      geel:  { tekst: '⚠️ Met mate eten',      klasse: 'badge-geel'  },
      rood:  { tekst: '❌ Beter vermijden',    klasse: 'badge-rood'  },
    };

    const info = statusInfo[item.status];
    statusBadgeEl.textContent = info.tekst;
    statusBadgeEl.className   = `status-badge ${info.klasse}`;
    voedselNotitieEl.textContent = item.notitie;

    // Resultaatkaart tonen
    resultaatEl.classList.remove('verborgen');
    // Herstart de animatie
    void resultaatEl.querySelector('.resultaat-kaart').offsetWidth;
    resultaatEl.querySelector('.resultaat-kaart').style.animation = 'none';
    requestAnimationFrame(() => {
      resultaatEl.querySelector('.resultaat-kaart').style.animation = '';
    });

    // Wikipedia-afbeelding ophalen (indien beschikbaar)
    if (item.engelsNaam) {
      laadWikipediaAfbeelding(item);
    }

    // Scroll naar resultaat op mobiel
    setTimeout(() => {
      resultaatEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  // ── Wikipedia-afbeelding ──────────────────────────────────────
  async function laadWikipediaAfbeelding(item) {
    const naamOpgeslagen = item.naam; // bewaar voor check na async
    try {
      const url =
        'https://en.wikipedia.org/api/rest_v1/page/summary/' +
        encodeURIComponent(item.engelsNaam);
      const res = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!res.ok) return;

      const data = await res.json();
      const afbeeldingUrl = data.thumbnail ? data.thumbnail.source : null;
      if (!afbeeldingUrl) return;

      // Controleer of de gebruiker nog hetzelfde voedsel bekijkt
      if (voedselNaamEl.textContent !== naamOpgeslagen) return;

      voedselFotoEl.alt = item.naam;
      voedselFotoEl.src = afbeeldingUrl;
      voedselFotoEl.onload = () => {
        voedselEmojiEl.style.display = 'none';
        voedselFotoEl.classList.remove('verborgen');
      };
      voedselFotoEl.onerror = () => {
        // Emoji blijft zichtbaar
      };
    } catch (_) {
      // Netwerk niet beschikbaar – emoji blijft zichtbaar
    }
  }

  // ── Toetsenbordnavigatie ──────────────────────────────────────
  zoekbalk.addEventListener('keydown', e => {
    if (!gevondenSuggesties.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      actieveIndex = Math.min(actieveIndex + 1, gevondenSuggesties.length - 1);
      markeerActief();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      actieveIndex = Math.max(actieveIndex - 1, -1);
      markeerActief();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const keuze = actieveIndex >= 0
        ? gevondenSuggesties[actieveIndex]
        : gevondenSuggesties[0];
      if (keuze) kiesVoedsel(keuze);
    } else if (e.key === 'Escape') {
      verbergSuggesties();
    }
  });

  // ── Invoer-event ──────────────────────────────────────────────
  zoekbalk.addEventListener('input', () => {
    const invoer = zoekbalk.value.trim();
    actieveIndex = -1;
    geenResultaatEl.classList.remove('zichtbaar');

    if (invoer.length === 0) {
      verbergSuggesties();
      resultaatEl.classList.add('verborgen');
      document.body.className = '';
      return;
    }

    gevondenSuggesties = zoekVoedsel(invoer).slice(0, 7);
    toonSuggesties(gevondenSuggesties);

    if (!gevondenSuggesties.length) {
      geenResultaatEl.classList.add('zichtbaar');
      resultaatEl.classList.add('verborgen');
      document.body.className = '';
    }
  });

  // ── Klik buiten lijst ─────────────────────────────────────────
  document.addEventListener('click', e => {
    if (!zoekbalk.contains(e.target) && !suggestiesEl.contains(e.target)) {
      verbergSuggesties();
    }
  });

  // ── Hulpfunctie: HTML-escaping ─────────────────────────────────
  function escapeHtml(tekst) {
    return tekst
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
