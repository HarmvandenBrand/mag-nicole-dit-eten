// FODMAP Voedseldatabase - vertaald naar het Nederlands
// Deze database is volledig gebaseerd op, en heeft als enige bron, de Monash University FODMAP Diet Guide Booklet.

// ###   Interpretatie van deze database (en het booklet):   ###

// De food guide in het boekje is een lijst van voedingsmiddelen en ingrediënten die in meer of mindere mate FODMAPs bevatten.
// Bij elk voedingsmiddel staat een portiegrootte aangegeven. Deze portiegrootte heeft NIETS te maken met de hoeveelheid 
// die je wel/niet mag eten, maar is een normale hoeveelheid van dat voedingsmiddel. Dat wil zeggen, dat is de hoeveelheid 
// die je normaal zou eten of zou tegenkomen in een gerecht als je niet op FODMAP zou letten. Dat is dus een beetje natte 
// vingerwerk.
// Vervolgens krijgt elke listing een kleurcode, groen, geel of rood, die aangeeft of het voedingsmiddel veilig is, _geijkt_ 
// op die aangegeven portiegrootte.

// Met andere woorden, De portiegrootte is dus niet de hoeveelheid die je wel/niet mag eten, maar is een soort referentiepunt.
// De kleurcode geeft aan of dat referentiepunt veilig is of niet. Dat betekent dat als een voedingsmiddel groen is bij een 
// bepaalde portiegrootte, dat het ook veilig is bij kleinere porties. En als een voedingsmiddel rood is bij een bepaalde 
// portiegrootte, dat het ook rood zal zijn bij grotere porties. Maar dat betekent niet dat een voedingsmiddel dat rood is 
// bij een bepaalde portiegrootte, automatisch veilig is bij kleinere porties. Het kan nog steeds rood zijn bij kleinere 
// porties, afhankelijk van hoe gevoelig je bent voor FODMAPs.

// Met nog andere woorden, de portiegrootte is de onafhankelijke variabele, en de kleurcode is de afhankelijke variabele.

// ###   Toevoegingen en interpretaties bij verwerking van boekje naar database   ###

// - In het boekje wordt de portiegrootte "a cup" gebruikt. Het is onduidelijk of dat een Amerikaanse cup is (237 ml) of 
//   een metrische cup (250 ml). Voor de vertaling in deze database gaan we uit van een metrische cup van 250 ml. Om verwarring 
//   te voorkomen, wordt de term 'cup' niet gebruikt, maar rekenen we direct om naar ml, bijvoorbeeld: '½ cup' wordt '125 ml'.
// - Sommige voedingsmiddelen hebben in het boekje meerdere listings, met verschillende portiegroottes en kleurcodes. In 
//   deze database is ervoor gekozen om in die gevallen de listings samen te voegen tot één listing, om verwarring en informatie-overload
//   te voorkomen. In dat geval bevat het status-veld meerdere waarden (bijvoorbeeld ['groen', 'geel']),
//   d.m.v. een gespleten cirkel.
// - In het geval van samengevoegde listings, worden beide portiegroottes vermeld in het veld 'portiegrootte', als object 
//   met de portiegrootte per kleurcode als key, bijvoorbeeld: { groen: '1 snede (26g)', geel: '2 sneden (52g)' }.
// - In het geval van samengevoegde listings waarbij het verschil tussen de listings _niet_ alleen uit de portiegrootte en 
//   kleurencodebestaat, maar bijvoorbeeld uit het eten van een ander deel van het voedingsmiddel, wordt het verschil uitgelegd 
//   in het veld 'notitie'.
// - Het veld 'portiegrootte' bevat de referentie-portiegrootte uit het boekje. Dit is NIET de hoeveelheid die je mag eten,
//   maar het referentiepunt waarop de kleurcode is gebaseerd.
// - Betekenis kleurencodes blijft zoals die in boekje: rood= hoog in FODMAP, geel= matig in FODMAP, groen= laag in FODMAP.
//   De kleurencodes voor het gehele voedingsmiddel is leidend, niet de kleurencodes van de individuele FODMAP-soorten.
// - De kleurencodes van de fodmapsoorten worden genoteerd in het veld "fodmapsoort", als object met als sleutels de FODMAP-soorten 
//   en als waarde de kleurcode van die FODMAP-soort in dat voedingsmiddel. Bijvoorbeeld: { fructanen: 'rood', GOS: 'geel' }.
//   In het geval van samengevoegde listings, waarbij de kleurcode van een FODMAP-soort verschilt tussen de listings, worden 
//   de kleurcodes van de "ergste" fodmapsoort vermeld. Bijvoorbeeld, als een voedingsmiddel groen is bij 1 snede (26g) en 
//   geel bij 2 sneden (52g), en de fructanen zijn groen bij 1 snede en geel bij 2 sneden, dan wordt in het veld "fodmapsoort" 
//   vermeld: { fructanen: 'geel' }.


const voedingsmiddelen = [

  // TEMPLATE
  // { naam: '', emoji: '', status: ['rood'/'geel'/'groen'], engelsNaam: '', zoektermen: [''], fodmapsoort: ['fructanen'/'GOS'/'fructose'/'sorbitol'/'mannitol'/'lactose'], portiegrootte: '', notitie: ''},
  //
  // naam:          naam van het voedingsmiddel (string)
  // emoji:         emoji die het voedingsmiddel representeert (string van 1 karakter)
  // status:        lijst van 1 of meer van: 'rood', 'geel', 'groen'
  // engelsNaam:    naam van het voedingsmiddel in het Engels, voor Wikipedia-zoekopdracht (string)
  // zoektermen:    lijst van alternatieve zoektermen, die ook herkend worden als de gebruiker die intypt (string)
  // fodmapsoort:   object met als sleutels 0 of meer van: 'fructanen', 'GOS', 'fructose', 'sorbitol', 'mannitol', 'lactose'. De waarde per sleutel is dan een string met kleurcode, die aangeeft of dat specifieke FODMAP-soort aanwezig is in dat voedingsmiddel. Bijvoorbeeld: { fructanen: 'rood', GOS: 'geel' }.
  // portiegrootte: referentie-portiegrootte uit het boekje (string)
  // notitie:       extra toelichting, bijv. bij gecombineerde listings

  // Broden
  { naam: 'Maïsbrood', emoji: '🍞', status: ['groen'], engelsNaam: 'Corn bread', zoektermen: ['mais', 'brood'], fodmapsoort: {}, portiegrootte: '2 sneden, 70g', notitie: '' },
  { naam: 'Glutenvrij witbrood', emoji: '🍞', status: ['groen'], engelsNaam: 'Gluten free bread, white', zoektermen: ['glutenvrij', 'wit'], fodmapsoort: {}, portiegrootte: '2 sneden, 64g', notitie: '' },
  { naam: 'Naanbrood / Roti', emoji: '🫓', status: ['geel'], engelsNaam: 'Naan / Roti', zoektermen: ['naan', 'roti', 'naanbrood'], fodmapsoort: { fructanen: 'geel' }, portiegrootte: '100g', notitie: '' },
  { naam: 'Glutenvrij meergranen brood', emoji: '🍞', status: ['groen', 'geel'], engelsNaam: 'Gluten free bread, multigrain', zoektermen: ['glutenvrij', 'meergranen'], fodmapsoort: { fructanen: 'geel', fructose: 'geel' }, portiegrootte: { groen: '1 snede, 26g', geel: '2 sneden, 52g' }, notitie: 'Geel bij 2 sneden (52g), groen bij 1 snede (26g).' },
  { naam: 'Pompernikkel', emoji: '🍞', status: ['rood'], engelsNaam: 'Pumpernickel', zoektermen: ['pumpernickel'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '2 sneden, 100g', notitie: '' },
  { naam: 'Roggebrood, zuurdesem', emoji: '🍞', status: ['rood'], engelsNaam: 'Rye bread, sourdough', zoektermen: ['rogge', 'zuurdesem', 'roggebrood'], fodmapsoort: { fructanen: 'rood'}, portiegrootte: '2 sneden, 50g', notitie: '' },
  { naam: 'Roggebrood, donker', emoji: '🍞', status: ['rood'], engelsNaam: 'Rye bread, Dark', zoektermen: ['rogge', 'donker', 'roggebrood'], fodmapsoort: { fructanen: 'rood', GOS: 'rood', fructose: 'rood' }, portiegrootte: '2 sneden, 86g', notitie: '' },
  { naam: 'Rozijnenbrood', emoji: '🍞', status: ['rood'], engelsNaam: 'Raisin bread', zoektermen: ['rozijnen', 'rozijnenbrood'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '2 sneden, 75g', notitie: '' },
  { naam: 'Speltbrood, zuurdesem', emoji: '🍞', status: ['groen'], engelsNaam: 'Spelt, sourdough', zoektermen: ['spelt', 'zuurdesem', 'speltbrood'], fodmapsoort: {}, portiegrootte: '2 sneden, 52g', notitie: '' },
  { naam: "Maïstortillas", emoji: '🫓', status: ['groen'], engelsNaam: 'Tortillas, corn', zoektermen: ['tortilla', 'mais', 'maistortilla'], fodmapsoort: {}, portiegrootte: "2 tortilla's, 47g", notitie: '' },
  { naam: 'Tarwebrood, meergranen', emoji: '🍞', status: ['rood'], engelsNaam: 'Wheat bread, multigrain', zoektermen: ['tarwe', 'meergranen', 'tarwebrood'], fodmapsoort: { fructanen: 'rood', GOS: 'rood' }, portiegrootte: '2 sneden, 68g', notitie: '' },
  { naam: 'Tarwebrood, wit', emoji: '🍞', status: ['rood'], engelsNaam: 'Wheat bread, white', zoektermen: ['tarwe', 'wit', 'witbrood'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '2 sneden, 49g', notitie: '' },
  { naam: 'Tarwebrood, volkoren', emoji: '🍞', status: ['rood'], engelsNaam: 'Wheat bread, wholemeal', zoektermen: ['tarwe', 'volkoren', 'volkorenbrood'], fodmapsoort: { fructanen: 'rood' , GOS: 'rood'}, portiegrootte: '2 sneden, 48g', notitie: '' },


  // Ontbijtgranen
  { naam: 'Cornflakes', emoji: '🥣', status: ['geel'], engelsNaam: 'Corn flakes', zoektermen: ['mais', 'vlokken', 'cornflakes', 'maïsvlokken'], fodmapsoort: { fructanen: 'geel' }, portiegrootte: '250ml, 30g', notitie: '' },
  { naam: 'Cornflakes, glutenvrij', emoji: '🥣', status: ['groen'], engelsNaam: 'Corn flakes, gluten free', zoektermen: ['cornflakes', 'glutenvrij', 'maïsvlokken'], fodmapsoort: {}, portiegrootte: '250ml', notitie: '' },
  { naam: 'Vlokken van tarwe, maïs, fruit & noten', emoji: '🥣', status: ['rood'], engelsNaam: 'Flakes of wheat, corn, fruit, nuts', zoektermen: ['tarwe', 'vlokken', 'fruit', 'noten'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '125ml', notitie: '' },
  { naam: 'Vlokken van quinoa of rijst', emoji: '🥣', status: ['groen'], engelsNaam: 'Flakes, quinoa or rice', zoektermen: ['quinoa', 'rijst', 'vlokken'], fodmapsoort: {}, portiegrootte: '250ml', notitie: '' },
  { naam: 'Muesli, glutenvrij', emoji: '🥣', status: ['rood'], engelsNaam: 'Muesli, gluten free', zoektermen: ['muesli', 'glutenvrij'], fodmapsoort: { fructanen: 'rood', GOS: 'geel', sorbitol: 'rood' }, portiegrootte: '125ml', notitie: '' },
  { naam: 'Muesli, naturel', emoji: '🥣', status: ['rood'], engelsNaam: 'Muesli, plain', zoektermen: ['muesli', 'naturel'], fodmapsoort: { fructose: 'rood' }, portiegrootte: '125ml', notitie: '' },
  { naam: 'Havermout', emoji: '🥣', status: ['groen', 'geel'], engelsNaam: 'Oats', zoektermen: ['havermout', 'haver', 'snelkokend', 'oats'], fodmapsoort: { GOS: 'geel', fructanen: 'geel' }, portiegrootte: { groen: '63ml', geel: '125ml' }, notitie: 'Geel bij gewone havermout, groen bij 63g droge havermout.' },
  { naam: 'Havermout, gewalst', emoji: '🥣', status: ['groen'], engelsNaam: 'Oats, rolled', zoektermen: ['havermout', 'haver', 'gewalst', 'rolled oats'], fodmapsoort: {}, portiegrootte: '125ml', notitie: '' },
  { naam: 'Gepofte of gepopte rijst', emoji: '🥣', status: ['geel'], engelsNaam: 'Rice, puffed or popped', zoektermen: ['gepofte rijst', 'gepopte rijst', 'pufrijst'], fodmapsoort: { fructanen: 'geel' }, portiegrootte: '250ml', notitie: '' },
  { naam: 'Tarwezemelen pellets', emoji: '🥣', status: ['rood'], engelsNaam: 'Wheat bran, pellets', zoektermen: ['tarwezemelen', 'zemelen', 'bran'], fodmapsoort: { fructanen: 'rood', GOS: 'rood', fructose: 'geel' }, portiegrootte: '125ml', notitie: '' },
  { naam: 'Volkoren haverkoekjes', emoji: '🥣', status: ['groen'], engelsNaam: 'Wholegrain oat cereal biscuit', zoektermen: ['haverkoekjes', 'biscuit', 'volkoren'], fodmapsoort: {}, portiegrootte: '2 biscuits, 50g', notitie: '' },

  // Granen & Graanproducten
  { naam: 'Couscous', emoji: '🍚', status: ['rood'], engelsNaam: 'Couscous', zoektermen: ['couscous'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '250ml, gekookt', notitie: '' },
  { naam: 'Couscous, glutenvrij (maïs)', emoji: '🍚', status: ['groen'], engelsNaam: 'Couscous, gluten free (maize / corn)', zoektermen: ['couscous', 'glutenvrij', 'mais'], fodmapsoort: {}, portiegrootte: '125ml, gekookt', notitie: '' },
  { naam: 'Gnocchi, tarwe', emoji: '🍝', status: ['rood'], engelsNaam: 'Gnocchi, wheat', zoektermen: ['gnocchi', 'malloreddus'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '250m), gekookt', notitie: '' },
  { naam: 'Noedels, rijst', emoji: '🍜', status: ['groen'], engelsNaam: 'Noodles, rice', zoektermen: ['noedels', 'rijst', 'rijstnoedels'], fodmapsoort: {}, portiegrootte: '250ml, gekookt', notitie: '' },
  { naam: 'Noedels, tarwe', emoji: '🍜', status: ['rood'], engelsNaam: 'Noodles, wheat', zoektermen: ['noedels', 'tarwe', 'tarwenoedels'], fodmapsoort: { fructanen: 'rood', fructose: "rood" }, portiegrootte: '250ml, gekookt', notitie: '' },
  { naam: 'Haverzemelen', emoji: '🌾', status: ['groen'], engelsNaam: 'Oat bran', zoektermen: ['haverzemelen', 'haver', 'zemelen'], fodmapsoort: {}, portiegrootte: '2 eetl.', notitie: '' },
  { naam: 'Pasta, glutenvrij', emoji: '🍝', status: ['groen'], engelsNaam: 'Pasta, gluten free', zoektermen: ['pasta', 'glutenvrij'], fodmapsoort: {}, portiegrootte: '250ml, gekookt', notitie: '' },
  { naam: 'Pasta, quinoa', emoji: '🍝', status: ['groen'], engelsNaam: 'Pasta, quinoa', zoektermen: ['pasta', 'quinoa'], fodmapsoort: {}, portiegrootte: '250ml, gekookt', notitie: '' },
  { naam: 'Pasta, spelt', emoji: '🍝', status: ['rood'], engelsNaam: 'Pasta, spelt', zoektermen: ['pasta', 'spelt'], fodmapsoort: { fructanen: 'rood' }, portiegrootte: '250ml, gekookt', notitie: '' },


  // Meme
  { naam: 'Baksteen', emoji: '🧱', status: ['rood'], engelsNaam: 'brick', zoektermen: [], notitie: 'Maat, nee.' },
];
