// FODMAP Voedselendatabase - vertaald naar het Nederlands
// Status: 'groen' = veilig eten, 'geel' = met mate eten, 'rood' = beter vermijden
const voedingsmiddelen = [

  // ─── GROEN: Veilig eten ───────────────────────────────────────────────────


  // TEMPLATE
  // { naam: '', emoji: '', status: '', engelsNaam: '', zoektermen: [''], notitie: 'Veilig in normale hoeveelheden.' },

  // Groenten
  { naam: 'Bamboescheut', emoji: '', status: 'groen', engelsNaam: 'bamboo shoot', zoektermen: ['bamboe', 'bamboescheuten'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Taugé', emoji: '', status: 'groen', engelsNaam: 'mung bean sprout', zoektermen: ['tauge', 'sojascheuten', 'gropesi', 'tjapar'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Kool', emoji: '', status: 'groen', engelsNaam: 'cabbage', zoektermen: ['rodekool', 'rode kool'], notitie: 'Veilig tot 200g. Niet te verwarren met savooiekool.' },
  { naam: 'Selderij', emoji: '', status: 'geel', engelsNaam: 'celery', zoektermen: ['selderie', 'selder'], notitie: 'Veilig in kleine hoeveelheden (max 5cm steel). Blaadjes zijn wel veilig.' },
  { naam: 'Bieslook', emoji: '🌿', status: 'groen', engelsNaam: 'chive', zoektermen: ['look', 'chive'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Wortel', emoji: '🥕', status: 'groen', engelsNaam: 'carrot', zoektermen: ['worteltje', 'winterwortel', 'wortelen', 'peen'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Courgette', emoji: '🥒', status: 'groen', engelsNaam: 'zucchini', zoektermen: ['zucchini', 'zukini', 'courget'], notitie: 'Veilig tot ca. 65 gram per portie.' },
  { naam: 'Komkommer', emoji: '🥒', status: 'groen', engelsNaam: 'cucumber', zoektermen: ['komkommers'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Groene paprika', emoji: '🫑', status: 'groen', engelsNaam: 'green bell pepper', zoektermen: ['paprika', 'groene peper'], notitie: 'Veilig in normale hoeveelheden (max 75g).' },
  { naam: 'Sla', emoji: '🥬', status: 'groen', engelsNaam: 'lettuce', zoektermen: ['slablaadjes', 'salade', 'ijsbergsla', 'rucola', 'latuw', 'botersla'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Spinazie', emoji: '🥬', status: 'groen', engelsNaam: 'spinach', zoektermen: ['spinazieblaadjes', 'baby spinazie'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Boerenkool', emoji: '🥬', status: 'groen', engelsNaam: 'kale', zoektermen: ['kale', 'boerenkoolstamppot', 'krulkool', 'krolkool'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Aardappel', emoji: '🥔', status: 'groen', engelsNaam: 'potato', zoektermen: ['aardappelen', 'patat', 'friet', 'frites', 'chips'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Sperzieboon', emoji: '🫛', status: 'groen', engelsNaam: 'green bean', zoektermen: ['boontje', 'boontjes', 'haricots verts', 'snijboon', 'prinsessenboon', 'slaboon', 'herenboon', 'breekboon'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Paksoi', emoji: '🥬', status: 'groen', engelsNaam: 'bok choy', zoektermen: ['bok choy', 'pak choi', 'chinese kool'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Pastinaak', emoji: '🥕', status: 'groen', engelsNaam: 'parsnip', zoektermen: ['pastinaken', 'pinksternakel', 'witte wortel'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Witlof', emoji: '🥬', status: 'groen', engelsNaam: 'belgian endive', zoektermen: ['witloof', 'belgian endive'], notitie: 'Veilig in normale hoeveelheden. De wortel is echter niet veilig. De wortel wordt soms als vezel verwerkt in vezelrijke producten.' },


  // Fruit
  { naam: 'Bosbes', emoji: '🫐', status: 'groen', engelsNaam: 'blueberry', zoektermen: ['bosbessen', 'blauwe bes', 'blueberry'], notitie: 'Veilig (max ca. 28 g of ¼ kopje).' },
  { naam: 'Aardbei', emoji: '🍓', status: 'groen', engelsNaam: 'strawberry', zoektermen: ['aardbeien', 'strawberry'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Kiwi', emoji: '🥝', status: 'groen', engelsNaam: 'kiwifruit', zoektermen: ['kiwifruit', 'kiwis'], notitie: 'Veilig (max 2 kleine stuks).' },
  { naam: 'Cantaloupe', emoji: '🍈', status: 'groen', engelsNaam: 'cantaloupe', zoektermen: ['rockmeloen', 'oranje meloen'], notitie: 'Veilig (max ¾ kopje).' },
  { naam: 'Ananas', emoji: '🍍', status: 'groen', engelsNaam: 'pineapple', zoektermen: ['ananasschijf', 'verse ananas'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Druif', emoji: '🍇', status: 'groen', engelsNaam: 'grape', zoektermen: ['druiven', 'groene druiven', 'rode druiven', 'grapes'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Citroen', emoji: '🍋', status: 'groen', engelsNaam: 'lemon', zoektermen: ['citroensap', 'lemon', 'citroen'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Limoen', emoji: '🍋', status: 'groen', engelsNaam: 'lime', zoektermen: ['limoensap', 'lime'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Sinaasappel', emoji: '🍊', status: 'groen', engelsNaam: 'orange', zoektermen: ['sinaasappels', 'sinasappel', 'appelsien', "jus d'orange"], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Clementine', emoji: '🍊', status: 'groen', engelsNaam: 'clementine', zoektermen: ['mandarijn', 'tangerine', 'satsuma'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Onrijpe banaan', emoji: '🍌', status: 'groen', engelsNaam: 'banana', zoektermen: ['groene banaan', 'banana'], notitie: 'Veilig als de banaan nog groen/geel en onrijp is (max 1 middelgrote).' },
  { naam: 'Framboos', emoji: '🍓', status: 'groen', engelsNaam: 'raspberry', zoektermen: ['frambozen', 'raspberry'], notitie: 'Veilig in kleine hoeveelheden (max 30 stuks).' },

  // Granen & Brood
  { naam: 'Witte rijst', emoji: '🍚', status: 'groen', engelsNaam: 'white rice', zoektermen: ['rijst', 'basmati', 'jasmijnrijst'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Bruine rijst', emoji: '🍚', status: 'groen', engelsNaam: 'brown rice', zoektermen: ['volkoren rijst', 'zilvervliesrijst'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Quinoa', emoji: '🌾', status: 'groen', engelsNaam: 'quinoa', zoektermen: ['quinoa'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Havermout', emoji: '🥣', status: 'groen', engelsNaam: 'oatmeal', zoektermen: ['oatmeal', 'oats', 'haver', 'pap', 'havergrut'], notitie: 'Veilig in kleine porties.' },
  { naam: 'Boekweit', emoji: '🌾', status: 'groen', engelsNaam: 'buckwheat', zoektermen: ['buckwheat', 'boekweitpannenkoek', 'boekweitmeel'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Glutenvrij brood', emoji: '🍞', status: 'groen', engelsNaam: 'gluten-free bread', zoektermen: ['glutenvrij', 'glutenvrij brood', 'rijstbrood'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Glutenvrije pasta', emoji: '🍝', status: 'groen', engelsNaam: 'gluten-free pasta', zoektermen: ['glutenvrije pasta', 'rijstpasta', 'maïspasta'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Cornflakes', emoji: '🥣', status: 'groen', engelsNaam: 'cornflakes', zoektermen: ['corn flakes', 'maïsvlokken', 'ontbijtgranen'], notitie: 'Veilig – controleer op toegevoegde honing of hoog fructose siroop.' },
  { naam: 'Polenta', emoji: '🌽', status: 'groen', engelsNaam: 'polenta', zoektermen: ['maïsgries', 'polenta'], notitie: 'Veilig in normale hoeveelheden.' },

  // Noten & Zaden
  { naam: 'Amandel', emoji: '🌰', status: 'groen', engelsNaam: 'almond', zoektermen: ['amandelen', 'amandelmelk', 'amandelmeel'], notitie: 'Veilig (max 10 stuks per portie).' },
  { naam: 'Pinda', emoji: '🥜', status: 'groen', engelsNaam: 'peanut', zoektermen: ["pinda's", 'peanut', 'peanuts', 'pindakaas'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Walnoot', emoji: '🌰', status: 'groen', engelsNaam: 'walnut', zoektermen: ['walnoten', 'walnut'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Pecan', emoji: '🌰', status: 'groen', engelsNaam: 'pecan', zoektermen: ['pecannoot', 'pecan noot', 'pecannoten'], notitie: 'Veilig (max 10 halve noten).' },
  { naam: 'Chiazaad', emoji: '🌱', status: 'groen', engelsNaam: 'chia seed', zoektermen: ['chia zaad', 'chia seeds', 'chiazaden'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Zonnebloempit', emoji: '🌻', status: 'groen', engelsNaam: 'sunflower seed', zoektermen: ['zonnebloempitjes', 'sunflower seed', 'zonnebloem'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Pompoenpit', emoji: '🌱', status: 'groen', engelsNaam: 'pumpkin seed', zoektermen: ['pompoenpitten', 'pumpkin seed', 'pitten'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Macadamia', emoji: '🌰', status: 'groen', engelsNaam: 'macadamia', zoektermen: ['macadamianoot'], notitie: 'Veilig in normale hoeveelheden.' },

  // Zuivel & Alternatieven
  { naam: 'Lactosevrije melk', emoji: '🥛', status: 'groen', engelsNaam: 'lactose-free milk', zoektermen: ['lactosevrij', 'lactose-free milk', 'lactosevrije melk'], notitie: 'Veilig – gebruik dit in plaats van gewone melk.' },
  { naam: 'Cheddar', emoji: '🧀', status: 'groen', engelsNaam: 'cheddar cheese', zoektermen: ['cheddar kaas', 'harde kaas'], notitie: 'Harde kazen zijn bijna lactosevrij en veilig.' },
  { naam: 'Parmezaan', emoji: '🧀', status: 'groen', engelsNaam: 'parmesan', zoektermen: ['parmesan', 'parmigiano', 'parmezaanse kaas'], notitie: 'Harde kazen zijn bijna lactosevrij en veilig.' },
  { naam: 'Feta', emoji: '🧀', status: 'groen', engelsNaam: 'feta cheese', zoektermen: ['fetakaas', 'feta'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Mozzarella', emoji: '🧀', status: 'groen', engelsNaam: 'mozzarella', zoektermen: ['mozzarella kaas', 'buffelmozzarella'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Boter', emoji: '🧈', status: 'groen', engelsNaam: 'butter', zoektermen: ['roomboter', 'butter', 'margarine'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Amandelmelk', emoji: '🥛', status: 'groen', engelsNaam: 'almond milk', zoektermen: ['almond milk', 'amandeldrank'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Rijstmelk', emoji: '🥛', status: 'groen', engelsNaam: 'rice milk', zoektermen: ['rice milk', 'rijstdrank'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Kokosmelk', emoji: '🥛', status: 'groen', engelsNaam: 'coconut milk', zoektermen: ['coconut milk', 'kokos', 'kokosroom'], notitie: 'Veilig in kleine hoeveelheden (max 125 ml).' },

  // Vlees, Vis & Eieren
  { naam: 'Ei', emoji: '🥚', status: 'groen', engelsNaam: 'egg', zoektermen: ['eieren', 'egg', 'omelet', 'roerei'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Kip', emoji: '🍗', status: 'groen', engelsNaam: 'chicken', zoektermen: ['kipfilet', 'kipstukjes', 'kippendij', 'chicken'], notitie: 'Veilig – zorg dat het onbewerkt is (zonder ui/knoflook marinade).' },
  { naam: 'Rundvlees', emoji: '🥩', status: 'groen', engelsNaam: 'beef', zoektermen: ['rund', 'biefstuk', 'gehakt', 'hamburger', 'beef'], notitie: 'Veilig – onbewerkt en zonder ui/knoflook.' },
  { naam: 'Varkensvlees', emoji: '🥩', status: 'groen', engelsNaam: 'pork', zoektermen: ['varkenshaas', 'karbonade', 'spek', 'pork'], notitie: 'Veilig – onbewerkt en zonder ui/knoflook.' },
  { naam: 'Lam', emoji: '🥩', status: 'groen', engelsNaam: 'lamb', zoektermen: ['lamsvlees', 'lamskoteletten', 'lamb'], notitie: 'Veilig – onbewerkt.' },
  { naam: 'Zalm', emoji: '🐟', status: 'groen', engelsNaam: 'salmon', zoektermen: ['zalmfilet', 'gerookte zalm', 'salmon'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Tonijn', emoji: '🐟', status: 'groen', engelsNaam: 'tuna', zoektermen: ['tonijn blik', 'tuna', 'verse tonijn'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Kabeljauw', emoji: '🐟', status: 'groen', engelsNaam: 'cod fish', zoektermen: ['kabeljauw', 'cod', 'visfilet', 'vis'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Garnaal', emoji: '🍤', status: 'groen', engelsNaam: 'shrimp', zoektermen: ['garnalen', 'shrimp', 'prawns', "gamba's"], notitie: "Veilig – onbewerkt en zonder knoflooksaus." },

  // Overig
  { naam: 'Mayonaise', emoji: '🫙', status: 'groen', engelsNaam: 'mayonnaise', zoektermen: ['mayo', 'helmanns'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Mosterd', emoji: '🫙', status: 'groen', engelsNaam: 'mustard', zoektermen: ['dijon mosterd', 'tafelzout mosterd'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Sojasaus', emoji: '🫙', status: 'groen', engelsNaam: 'soy sauce', zoektermen: ['ketjap', 'tamari', 'soya sauce'], notitie: 'Veilig in kleine hoeveelheden (gewone of tamari sojasaus).' },
  { naam: 'Olijfolie', emoji: '🫒', status: 'groen', engelsNaam: 'olive oil', zoektermen: ['olie', 'extra vergine olijfolie'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Suiker', emoji: '🍬', status: 'groen', engelsNaam: 'sugar', zoektermen: ['basterdsuiker', 'kristalsuiker', 'rietsuiker'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Ahornsiroop', emoji: '🍁', status: 'groen', engelsNaam: 'maple syrup', zoektermen: ['maple syrup', 'esdoornsiroop'], notitie: 'Veilig als alternatief voor honing.' },
  { naam: 'Gember', emoji: '🫚', status: 'groen', engelsNaam: 'ginger', zoektermen: ['gemberwortel', 'gemberpoeder', 'ginger'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Rijpe olijf', emoji: '🫒', status: 'groen', engelsNaam: 'olive', zoektermen: ['olijven', 'groene olijven', 'zwarte olijven', 'olive'], notitie: 'Veilig in normale hoeveelheden.' },
  { naam: 'Tofu', emoji: '🧱', status: 'groen', engelsNaam: 'tofu', zoektermen: ['stevige tofu', 'silken tofu'], notitie: 'Vaste/stevige tofu is veilig. Vermijd zachte/zijdeachtige tofu.' },

  // ─── GEEL: Met mate eten ─────────────────────────────────────────────────

  { naam: 'Aubergine', emoji: '🍆', status: 'geel', engelsNaam: 'eggplant', zoektermen: ['eggplant', 'melanzaan'], notitie: 'Veilig tot ca. 75g.' },
  { naam: 'Broccoli', emoji: '🥦', status: 'geel', engelsNaam: 'broccoli', zoektermen: ['broccolikoppen', 'brocolli'], notitie: 'Kleine hoeveelheden (max 200g roosjes). De stengels bevatten meer FODMAP (max 80g steel).' },
  { naam: 'Maïs', emoji: '🌽', status: 'geel', engelsNaam: 'corn', zoektermen: ['mais', 'suikermaïs', 'maïskolf', 'sweetcorn', 'corn'], notitie: 'Kleine hoeveelheden (max ½ maïskolf of 100g).' },
  { naam: 'Kikkererwten', emoji: '🫘', status: 'geel', engelsNaam: 'chickpeas', zoektermen: ['kikkererwt', 'chickpeas', 'hummus', 'garbanzo'], notitie: 'Kleine hoeveelheden (max 50g, ingeblikt en afgespoeld).' },
  { naam: 'Havermelk', emoji: '🥛', status: 'geel', engelsNaam: 'oat milk', zoektermen: ['oatmilk', 'oat milk', 'haverdrink'], notitie: 'Kleine hoeveelheden (max 30 ml) vanwege fructanen.' },
  { naam: 'Honingmeloen', emoji: '🍈', status: 'geel', engelsNaam: 'honeydew melon', zoektermen: ['meloen', 'groene meloen', 'honeydew'], notitie: 'Kleine hoeveelheden (max ½ kopje of 90 g).' },
  { naam: 'Rijpe banaan', emoji: '🍌', status: 'geel', engelsNaam: 'ripe banana', zoektermen: ['banaan', 'gele banaan', 'vlekkerige banaan'], notitie: 'Kleine hoeveelheden (max ⅓ middelgrote rijpe banaan).' },
  { naam: 'Avocado', emoji: '🥑', status: 'geel', engelsNaam: 'avocado', zoektermen: ['avocados', 'guacamole'], notitie: 'Kleine hoeveelheden (max ⅛ van een avocado of 30 g).' },
  { naam: 'Rode biet', emoji: '🫚', status: 'geel', engelsNaam: 'beetroot', zoektermen: ['bietjes', 'bieten', 'beetroot', 'biet', 'kroot'], notitie: 'Normaliter is rode biet hoog in FODMAP. Maar in blik lossen de FODMAPs op in het vocht. Afgegoten ingeblikte rode biet is dus in kleine hoeveelheden (max 3 plakjes ingeblikt) veilig.' },
  { naam: 'Erwt', emoji: '🫘', status: 'geel', engelsNaam: 'pea', zoektermen: ['erwten', 'erwt', 'erwtjes', 'doperwt', 'pea', 'green pea', 'blauwschokker', 'kapucijner', 'grauwe erwt', 'rozijnerwt', 'ronde groene erwt'], notitie: 'Alleen veilig in hele kleine porties (max 20g).' },
  { naam: 'Goudse kaas', emoji: '🧀', status: 'geel', engelsNaam: 'gouda cheese', zoektermen: ['gouda', 'goudse', 'jonge kaas', 'jonge gouda'], notitie: 'Bevat iets meer lactose dan harde kazen – kleine porties zijn meestal goed.' },
  { naam: 'Brie', emoji: '🧀', status: 'geel', engelsNaam: 'brie cheese', zoektermen: ['brie kaas', 'camembert'], notitie: 'Kleine hoeveelheden zijn doorgaans goed te verdragen.' },
  { naam: 'Rode paprika', emoji: '🫑', status: 'geel', engelsNaam: 'red bell pepper', zoektermen: ['paprika', 'rode paprika', 'peper'], notitie: 'Veilig in matige hoeveelheden (max 45g).' },
  { naam: 'Gele paprika', emoji: '🫑', status: 'geel', engelsNaam: 'yellow bell pepper', zoektermen: ['paprika', 'gele paprika', 'peper'], notitie: 'Veilig in matige hoeveelheden (max 35g).' },
  { naam: 'Pompoen', emoji: '🎃', status: 'geel', engelsNaam: 'pumpkin', zoektermen: ['butternut pompoen', 'flespompoen', 'kabocha', 'squash', 'kalebas'], notitie: 'Veilig in kleine hoeveelheden (max 60g).' },
  { naam: 'Lente-ui', emoji: '🌿', status: 'geel', engelsNaam: 'scallion', zoektermen: ['lente-ui', 'lente ui', 'bosui', 'sla-ui', 'pijpajuin', 'schalulleke', 'stengelui', 'spring onion'], notitie: 'Het groene deel is veilig, de witte stronk vermijden.' },
  { naam: 'Zoete aardappel', emoji: '🍠', status: 'geel', engelsNaam: 'sweet potato', zoektermen: ['bataat', 'sweet potato'], notitie: 'Veilig in kleine hoeveelheden (max 75 g).' },
  { naam: 'Tomaat', emoji: '🍅', status: 'geel', engelsNaam: 'tomato', zoektermen: ['tomaatje', 'cherry tomaat', 'roma tomaat', 'tomaten'], notitie: 'Veilig (max 1 kleine of 65g).' },
  { naam: 'Raap', emoji: '🥕', status: 'geel', engelsNaam: 'turnip', zoektermen: ['rapen', 'knolraap', 'meiraap', 'meiknolletje', 'consumptieraap', 'herfstknol', 'herfstraap', 'tol', 'knol'], notitie: 'Veilig in kleine hoeveelheden (max ½ stuks).' },
  { naam: 'Prei', emoji: '🌿', status: 'geel', engelsNaam: 'leek', zoektermen: ['preistengel', 'leek', 'preiblad'], notitie: 'Het groene deel is veilig, de witte stronk vermijden.' },

  // ─── ROOD: Beter vermijden ───────────────────────────────────────────────

  // Groenten
  { naam: 'Knoflook', emoji: '🧄', status: 'rood', engelsNaam: 'garlic', zoektermen: ['knoflookteen', 'knoflookpoeder', 'knoflooksaus', 'garlic'], notitie: 'Hoog FODMAP (fructanen) – vermijden, ook knoflookpoeder. Gebruik knoflookolie als alternatief.' },
  { naam: 'Ui', emoji: '🧅', status: 'rood', engelsNaam: 'onion', zoektermen: ['uien', 'gele ui', 'witte ui', 'rode ui', 'sjalot', 'onion'], notitie: 'Hoog FODMAP (fructanen) – vermijden, ook uienpoeder en gedroogde ui.' },
  { naam: 'Bloemkool', emoji: '🥦', status: 'rood', engelsNaam: 'cauliflower', zoektermen: ['cauliflower', 'bloemkool'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Asperge', emoji: '🌱', status: 'rood', engelsNaam: 'asparagus', zoektermen: ['asperges', 'witte asperge', 'groene asperge', 'asparagus'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Champignon', emoji: '🍄', status: 'rood', engelsNaam: 'mushroom', zoektermen: ['paddenstoel', 'paddestoelen', 'mushroom', 'shiitake', 'oesterzwam', 'champignonnetjes'], notitie: 'Hoog FODMAP (polyolen) – vermijden.' },
  { naam: 'Artisjok', emoji: '🌿', status: 'rood', engelsNaam: 'artichoke', zoektermen: ['artisjokhart', 'artichoke', 'globe artisjok'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Groenekool', emoji: '🥬', status: 'rood', engelsNaam: 'savoy cabbage', zoektermen: ['savooiekool', 'savooikool', 'groene savooiekool', 'gele savooiekool', 'butterkohl', 'groene spitskool', 'groene kool', 'witte kool'], notitie: 'Hoog FODMAP – vermijden. Niet te verwarren met gewone kool of rodekool.' },

  // Fruit
  { naam: 'Appel', emoji: '🍎', status: 'rood', engelsNaam: 'apple', zoektermen: ['appels', 'apple', 'appelmoes', 'appelsap'], notitie: 'Hoog FODMAP (fructose en polyolen) – vermijden.' },
  { naam: 'Peer', emoji: '🍐', status: 'rood', engelsNaam: 'pear', zoektermen: ['peren', 'pear'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Perzik', emoji: '🍑', status: 'rood', engelsNaam: 'peach', zoektermen: ['perziken', 'peach'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Abrikoos', emoji: '🍑', status: 'rood', engelsNaam: 'apricot', zoektermen: ['abrikozen', 'apricot', 'gedroogde abrikoos'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Nectarine', emoji: '🍑', status: 'rood', engelsNaam: 'nectarine', zoektermen: ['nectarines'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Mango', emoji: '🥭', status: 'rood', engelsNaam: 'mango', zoektermen: ["mango's", 'verse mango'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Watermeloen', emoji: '🍉', status: 'rood', engelsNaam: 'watermelon', zoektermen: ['watermeloen', 'watermelon'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Braam', emoji: '🫐', status: 'rood', engelsNaam: 'blackberry', zoektermen: ['bramen', 'blackberry', 'blackberries'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Kers', emoji: '🍒', status: 'rood', engelsNaam: 'cherry', zoektermen: ['kersen', 'cherry', 'cherries', 'zure kers'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Pruim', emoji: '🍑', status: 'rood', engelsNaam: 'plum', zoektermen: ['pruimen', 'plum', 'pruimedant', 'gedroogde pruim'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Rozijn', emoji: '🍇', status: 'rood', engelsNaam: 'raisin', zoektermen: ['rozijnen', 'raisin', 'sultana', 'krent', 'krenten'], notitie: 'Hoog FODMAP – vermijden.' },

  // Granen & Brood
  { naam: 'Tarwebrood', emoji: '🍞', status: 'rood', engelsNaam: 'wheat bread', zoektermen: ['brood', 'witbrood', 'volkorenbrood', 'broodjes', 'baguette', 'wheat bread'], notitie: 'Hoog FODMAP (fructanen) – gebruik glutenvrij brood als alternatief.' },
  { naam: 'Tarwepasta', emoji: '🍝', status: 'rood', engelsNaam: 'pasta', zoektermen: ['pasta', 'spaghetti', 'penne', 'fusilli', 'linguine', 'macaroni'], notitie: 'Hoog FODMAP – gebruik glutenvrije pasta als alternatief.' },
  { naam: 'Roggebrood', emoji: '🍞', status: 'rood', engelsNaam: 'rye bread', zoektermen: ['rogge', 'donker brood', 'pumpernickel', 'rye bread'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Couscous', emoji: '🌾', status: 'rood', engelsNaam: 'couscous', zoektermen: ['couscous'], notitie: 'Hoog FODMAP – gebruik quinoa of rijst als alternatief.' },
  { naam: 'Bulgur', emoji: '🌾', status: 'rood', engelsNaam: 'bulgur', zoektermen: ['bulgur', 'bulgurtarwe'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Gerst', emoji: '🌾', status: 'rood', engelsNaam: 'barley', zoektermen: ['gerstkorrels', 'barley', 'gerstenat'], notitie: 'Hoog FODMAP – vermijden.' },

  // Zuivel
  { naam: 'Gewone melk', emoji: '🥛', status: 'rood', engelsNaam: 'cow milk', zoektermen: ['volle melk', 'halfvolle melk', 'koemelk', 'milk', 'karnemelk'], notitie: 'Hoog FODMAP (lactose) – gebruik lactosevrije melk als alternatief.' },
  { naam: 'Slagroom', emoji: '🥛', status: 'rood', engelsNaam: 'heavy cream', zoektermen: ['room', 'cream', 'double cream', 'koffieroom'], notitie: 'Hoog FODMAP (lactose) – vermijden.' },
  { naam: 'IJs', emoji: '🍦', status: 'rood', engelsNaam: 'ice cream', zoektermen: ['roomijs', 'ice cream', 'ijsje', 'ijsschep'], notitie: 'Hoog FODMAP – gebruik lactosevrij ijs als alternatief.' },
  { naam: 'Gewone yoghurt', emoji: '🥛', status: 'rood', engelsNaam: 'yogurt', zoektermen: ['yoghurt', 'yogurt', 'griekse yoghurt', 'kwark'], notitie: 'Hoog FODMAP (lactose) – gebruik lactosevrije yoghurt als alternatief.' },
  { naam: 'Roomkaas', emoji: '🧀', status: 'rood', engelsNaam: 'cream cheese', zoektermen: ['smeerkaas', 'philadelphia', 'cream cheese', 'mascarpone'], notitie: 'Hoog FODMAP (lactose) – vermijden.' },

  // Peulvruchten
  // TODO: alle bonen gewoon samenvoegen?
  { naam: 'Kidneyboon', emoji: '🫘', status: 'rood', engelsNaam: 'kidney bean', zoektermen: ['kidneybonen', 'rode bonen', 'kidney beans'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Tuinboon', emoji: '🫘', status: 'rood', engelsNaam: 'broad bean', zoektermen: ['labboon', 'fava bean', 'veldboon', 'broad bean', 'duivenboon'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Zwarte boon', emoji: '🫘', status: 'rood', engelsNaam: 'black bean', zoektermen: ['zwarte bonen', 'black beans'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Limaboon', emoji: '🫘', status: 'rood', engelsNaam: 'lima bean', zoektermen: ['limabonen', 'butter beans', 'witte bonen'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Sojaboon', emoji: '🫘', status: 'rood', engelsNaam: 'soybean', zoektermen: ['sojabonen', 'soybeans', 'edamame'], notitie: 'Hoog FODMAP – vermijden. Tofu (stevige) is wél veilig.' },
  { naam: 'Linze', emoji: '🫘', status: 'rood', engelsNaam: 'lentil', zoektermen: ['linzen', 'lentil', 'rode linzen', 'groene linzen'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Falafel', emoji: '🧆', status: 'rood', engelsNaam: 'falafel', zoektermen: ['falafel'], notitie: 'Hoog FODMAP (bevat kikkererwten en knoflook) – vermijden.' },
  { naam: 'Peultje', emoji: '🫛', status: 'rood', engelsNaam: 'snow pea', zoektermen: ['peultjes', 'peulen', 'snow pea', 'mange tout'], notitie: 'Hoog FODMAP – vermijden.' },
  { naam: 'Sugarsnap', emoji: '🫛', status: 'rood', engelsNaam: 'snap pea', zoektermen: ['sugar snap', 'suikererwt', 'suikerpeul', 'vleeserwt', 'vleespeul'], notitie: 'Hoog FODMAP – vermijden.' },

  // Overig
  { naam: 'Honing', emoji: '🍯', status: 'rood', engelsNaam: 'honey', zoektermen: ['vloeibare honing', 'honey', 'manuka honing'], notitie: 'Hoog FODMAP (fructose) – gebruik ahornsiroop als alternatief.' },
  { naam: 'Worst', emoji: '🌭', status: 'rood', engelsNaam: 'sausage', zoektermen: ['worstje', 'sausage', 'rookworst', 'salami', 'chorizo', 'knakworst'], notitie: 'Hoog FODMAP (bevat ui en knoflook) – vermijden.' },
  { naam: 'Ketchup', emoji: '🫙', status: 'rood', engelsNaam: 'ketchup', zoektermen: ['tomatenketchup', 'ketjap', 'tomatensaus'], notitie: 'Hoog FODMAP (bevat hoog fructose maïsstroop of ui) – kleine hoeveelheden kunnen OK zijn.' },
  { naam: 'BBQ saus', emoji: '🫙', status: 'rood', engelsNaam: 'barbecue sauce', zoektermen: ['bbq saus', 'barbecuesaus', 'grilsaus'], notitie: 'Hoog FODMAP (bevat ui, knoflook en honing) – vermijden.' },

  // Meme
  { naam: 'Baksteen', emoji: '🧱', status: 'rood', engelsNaam: 'brick', zoektermen: [], notitie: 'Maat, nee.' },
];
