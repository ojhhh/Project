if (!localStorage.getItem("THEMESIMG")) {
  // COLLECTIONS THEMES create localstorage

  function createcollections(img, title) {
    this.img = img;
    this.title = title;
  }

  let themes01 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/50549683_115085609593916_1961797280330727974_n-800x721.jpg?lossy=1&strip=1&webp=1",
    "CABLE CARS"
  );

  let themes02 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/23595073_1689113034433739_1346042720501628928_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "CLASSIC FACADES"
  );

  let themes03 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/75332701_230779857889483_5510500287028109061_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "DOORS"
  );

  let themes04 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/24838759_1472570436193554_2246699917978370048_n.jpg?lossy=1&strip=1&webp=1",
    "EDUCATIONAL INSTITUTIONS"
  );

  let themes05 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/Woolwich-Town-Hall-800x800.jpg?lossy=1&strip=1&webp=1",
    "GOVERNMENT BUILDINGS"
  );

  let themes06 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/52971076_362331887706134_7874578816021381623_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "HIDDEN WONDERS"
  );
  let themes07 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/GeorgianHotelInsta-e1639517535615-800x800.jpg?lossy=1&strip=1&webp=1",
    "HOTEL / MOTEL"
  );
  let themes08 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/81568047_2525170487764187_4233101169430985574_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "INTERIORS"
  );
  let themes09 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/30078104_1018261411661558_7719167807102910464_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "LIBRARY"
  );
  let themes10 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/50244801_101488410904785_7804855446322858810_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "LIGHTHOUSE"
  );
  let themes11 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/83189714_217009689337787_2795983043365829945_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "MUSEUM"
  );
  let themes12 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/29094918_469293313486226_3318233948399599616_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "NATURE"
  );

  let themes = [themes01, themes02, themes03, themes04, themes05, themes06, themes07, themes08, themes09, themes10, themes11, themes12];

  let color01 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/22429704_133661504049431_4455231951950839808_n-800x699.jpg?lossy=1&strip=1&webp=1",
    "BLACK"
  );

  let color02 = new createcollections("https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/8d06ca59-720x800.jpeg?lossy=1&strip=1&webp=1", "BLUE");

  let color03 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/53160753_2586675204695201_169043630707039832_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "BROWN"
  );

  let color04 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/73424608_163722738053249_2535030130848005948_n-800x633.jpg?lossy=1&strip=1&webp=1",
    "GRAY"
  );
  let color05 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/90086492_938096936642763_5437379437826734322_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "GREEN"
  );
  let color06 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/64961088_951069728396673_7248425327418930885_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "ORANGE"
  );
  let color07 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/26070394_131546737646213_8637264551781335040_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "PINK"
  );
  let color08 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/73028543_453227532066373_1231545041706789610_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "PURPLE"
  );
  let color09 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/25012177_139998783366969_1630418964800602112_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "RED"
  );
  let color10 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/78918357_454329888812771_7390690440755563381_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "TURQUOISE"
  );
  let color11 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/89472049_642389713161510_3722994410821832422_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "WHITE"
  );
  let color12 = new createcollections(
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/38897517_895384273978891_3221638390155837440_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "YELLOW"
  );

  let colorpalette = [color01, color02, color03, color04, color05, color06, color07, color08, color09, color10, color11, color12];

  localStorage.setItem("THEMES", JSON.stringify(themes));
  localStorage.setItem("COLORPALETTE", JSON.stringify(colorpalette));

  // stories content creaete localstorage
  function createcard(mainimg, logoimg, title, text, tab) {
    this.mainimg = mainimg;
    this.logoimg = logoimg;
    this.title = title;
    this.text = text;
    this.tab = tab;
  }

  function createcard2(mainimg, title, text, tab) {
    this.mainimg = mainimg;
    this.title = title;
    this.text = text;
    this.tab = tab;
  }

  // create ADVENTURE CURIOUSLY
  let adventurelogo = "https://accidentallywesanderson.com/wp-content/uploads/2022/07/hendricks-bug-new.png";
  let adventuretab = "ADVENTURE CURIOUSLY";

  let adventure01 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/11/DSC_5029-small-800x800.jpg",
    adventurelogo,
    "The Scottish “White House”",
    "While many a castle have cost a pretty penny, very few get to be featured on a pound sterling.",
    adventuretab
  );
  let adventure02 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/10/Anatomical-Museum-In-Editted-800x800.jpg",
    adventurelogo,
    "Sinister Science Snatchers",
    'A new meaning behind a body being "snatched."',
    adventuretab,
    "https://accidentallywesanderson.com/wp-content/uploads/2022/10/Anatomical-Museum-In-Editted-800x800.jpg",
    adventurelogo
  );

  let adventure03 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/09/DSC_8149-e1663092265914-800x800.jpg",
    adventurelogo,
    "Sturdy Scottish Spuds",
    "Home to the Edinburgh Potato.",
    adventuretab
  );

  let adventure04 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/08/cruise-room-full-res-1-e1660744567820-800x800.jpg",
    adventurelogo,
    "Initiate Cruise Control",
    "For a taste of luxurious libation inspired by one of history’s most celebrated ships, you’ll need to travel far, far away from the ocean…",
    adventuretab
  );

  let adventure05 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/07/DSC_7600-edited-e1658335316229-800x800.jpg",
    adventurelogo,
    "Bows Versus Bogeys",
    "The Old Course is enshrined in golf lore not only for being the oldest golf course in the world, but a site that also had a major impact on the modern game.",
    adventuretab
  );

  let adventure06 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_6102_Final_3-800x800.jpg",
    adventurelogo,
    "One Man, Many Mountains",
    "Following in the footsteps of your heroes is never easy.",
    adventuretab
  );

  let adventure07 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_8543-1-e1636563095613-800x800.jpeg",
    adventurelogo,
    "Tartans, Tailors, & Orphan Phone Boxes",
    "The oldest tailor in Scotland is a marvelous shop of mystery and master-crafted bespoke suits.",
    adventuretab
  );

  let adventure08 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/10/DSC_6382-e1635282693698-800x731.jpg",
    adventurelogo,
    "Please Barter Responsibly",
    "Before you know it, you’ve lost your clan’s castle in a drunken bet.",
    adventuretab
  );

  let adventure = [adventure01, adventure02, adventure03, adventure04, adventure05, adventure06, adventure07, adventure08];

  // create IN THE DETAILS
  let itdlogo = "https://accidentallywesanderson.com/wp-content/uploads/2021/12/dlr-group_bug1.png";
  let itdtab = "IN THE DETAILS";

  let itd01 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2023/04/catbirrd-800x800.jpg",
    itdlogo,
    "Modular Accommodations",
    "Rising above Denver’s flourishing RiNo neighborhood, the Catbird Hotel is playful and eccentric.",
    itdtab
  );

  let itd02 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2023/03/surety-Hotel-4-800x800.jpg",
    itdlogo,
    "Hip in Heritage",
    "Once the tallest building in the state, the Surety Hotel was constructed during an economic boom for the city of Des Moines, but it would cycle through a rolodex of names before finding the most befitting title.",
    itdtab
  );

  let itd03 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/25_12038_00_st-800x800.jpg",
    itdlogo,
    "Contentious Liturgical Tunes",
    "There once was a time when musical instruments were an unwelcome sound in this conservatory of music.",
    itdtab
  );

  let itd04 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2023/01/DLR-Photo-e1674002172157-800x800.jpg",
    itdlogo,
    "Humble Beginnings",
    "It began in a basement, hatched from a plan made on Thanksgiving weekend, there's been a lot to feel thankful for. ",
    itdtab
  );

  let itd05 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/09/75_22700_00_N8_st-800x800.jpg",
    itdlogo,
    "Academy Award-Winning Apartments",
    "Golden Age of Hollywood apartments that once housed a speakeasy.",
    itdtab
  );

  let itd06 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/10/30_12116_03_N4_weblg-2140x1427-1-800x800.jpeg",
    itdlogo,
    "Eternal Encores",
    "A theater restoration even it's ghosts can appreciate.",
    itdtab
  );

  let itd07 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/07/masstimber2-800x800.jpg",
    itdlogo,
    "Timber’s Triumphant Return",
    "AWA explores how timber is once again making a comeback as an essential construction element in the modern world.",
    itdtab
  );

  let itd08 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/05/DSC_7201-e1652207438495-800x800.jpg",
    itdlogo,
    "Playhouse Preservation",
    '"Pave paradise and put up a parking lot"',
    itdtab
  );

  let itd09 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/04/IS-featureimage-800x499.jpg",
    itdlogo,
    "Glimpse of Gold Fever",
    "Discover the mountain treasures of the birthplace of the Colorado Gold Rush and home of the first hot springs in America.",
    itdtab
  );

  let itd10 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/04/Avalon-chairs-800x800.jpg",
    itdlogo,
    "Pitstops to Playbills",
    "The small, rugged town of Grand Junction was once no more than a pit stop along the train route between Denver and Salt Lake City. Then came the Avalon.",
    itdtab
  );

  let itd11 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/03/DSC_4279-1-2-800x800.jpg",
    itdlogo,
    "A History Set in Stone",
    "A new hotel named after the Mother of Fort Collins...or is it Auntie?",
    itdtab
  );

  let itd12 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/02/cottonwood-2-800x800.jpeg",
    itdlogo,
    "We’ll Take A Room & A Reuben, Please!",
    "Gracing the old Lincoln Highway, this old hotel was famous for celebrities, Jazz Age luxury, and a deliciously iconic sandwich.",
    itdtab
  );

  let itd13 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2020/04/55_13090_00_N38_st-e1639493114590-800x800.jpg",
    itdlogo,
    "Past Pursuits of Female Artists",
    "A truly surprising sight awaited visitors of the Pennsylvania Academy of the Fine Arts in the mid-1800s: female students.",
    itdtab
  );

  let itd14 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_6403-e1637701573363-800x800.jpg",
    itdlogo,
    "No Need For Sneaky Snacks",
    "Though bringing your own food into a movie theater is typically frowned upon, owner Jerry Steel encouraged it.",
    itdtab
  );

  let itd15 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/09/30_09081_00_N3_st-1-e1639496896952-800x800.jpg",
    itdlogo,
    "Restoring More Than Comic Relief",
    "Bob Hope once pledged “if I have to lay an egg for my country, I’ll do it.”",
    itdtab
  );

  let itd16 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/09/55_10074_00_N29_st-e1631734716972-800x800.jpg",
    itdlogo,
    "Mysterious Case of a Missing Masterpiece",
    "A painting removed for a routine cleaning disappeared for decades.",
    itdtab
  );

  let itd17 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/08/DSC_8250-e1628175635716-800x800.jpg",
    itdlogo,
    "The Orchestra’s Big Secret",
    "At center stage, Severance Hall's organ has more of a story than you think.",
    itdtab
  );

  let itd18 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/03/capitolhillbooks_web-thumb-640xauto-1022159-e1614819707789.jpg",
    itdlogo,
    "The Caring Curmudgeon Of Capitol Hill",
    "Capitol Hill Books isn't here for your crap.",
    itdtab
  );

  let itd = [itd01, itd02, itd03, itd04, itd05, itd06, itd07, itd08, itd09, itd10, itd11, itd12, itd13, itd14, itd15, itd16, itd17, itd18];

  // create WHALEBONE
  let whalelogo = "https://accidentallywesanderson.com/wp-content/uploads/2020/06/wb-long-logo.png";
  let whaletab = "WHALEBONE";

  let whale01 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2023/02/photo-Headliner-800x600.png",
    whalelogo,
    "The Annual Photo Contest",
    "Whalebone Magazine's 2023 Photo Contest is about to begin!",
    whaletab
  );

  let whale02 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/01/awa-france-hero-1050x558-1-800x558.jpg",
    whalelogo,
    "On Location: The French Dispatch",
    "Wes creates fictional stories that take place in real places. Here, we visit the real places of The French Dispatch.",
    whaletab
  );

  let whale03 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_1635-1050x700-1-800x700.jpg",
    whalelogo,
    "A Long Strange Trip",
    "AWA packed into a van and drove to Vermont. Things got weird.",
    whaletab
  );

  let whale04 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/flower-wall-window-800x667.jpg",
    whalelogo,
    "A Sip in Time",
    "An AWA Adventure in Florence, Italy",
    whaletab
  );

  let whale05 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/11/wes-revised-1050x600-1-800x600.jpg",
    whalelogo,
    "AWA Interviews Wes",
    "Pinch us: AWA sits down with our inspiration, Wes Anderson, for a lovely chat.",
    whaletab
  );

  let whale06 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/07/photo-wb-header-800x547.jpg",
    whalelogo,
    "East of Eastman",
    "An AWA Adventure in Rochester, NY, Home of Kodak",
    whaletab
  );

  let whale07 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2020/09/weatherboat-e1636748960323-800x800.png",
    whalelogo,
    "Air, Land and Sea Adventures in Observation",
    "An attempt to understand and predict the forces of nature",
    whaletab
  );

  let whale08 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2020/06/hot-sauce-header-800x460.jpg",
    whalelogo,
    "In Search of Surprising Scovilles",
    "We discover a cold concoction that is so hot no one younger than 18 is even allowed to try it.",
    whaletab
  );

  let whale09 = new createcard(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-15-at-4.15.18-PM-800x761.png",
    whalelogo,
    "The story of Accidentally Wes Anderson",
    "Our first adventure (in print) with Whalebone. An origin story?",
    whaletab
  );

  let whale = [whale01, whale02, whale03, whale04, whale05, whale06, whale07, whale08, whale09];

  // create ARCHITECTURAL WONDERS
  let archtab = "ARCHITECTURAL WONDERS";

  let arch01 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2023/02/ASTURIAS-2-2-small-800x800.jpg",
    "What’s a Palace with no Throne",
    `"The first building in Spain with electrical light was a "plug" that "sparked" Gaudi's career."`,
    archtab
  );

  let arch02 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2023/01/4F8D0B2D-A777-4796-A19B-5DD8FCF98259-e1672778377914-800x628.jpeg",
    "Modern Mining Marvels",
    "A fanciful doorway hides a masterpiece of engineering.",
    archtab
  );

  let arch03 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/08/35B0B8B5-8E29-4234-A3CA-4E5D999B27CE-800x800.jpeg",
    "Candy Colored Community",
    "Vibrant district home to Peranakan shophouses -- a taste of history & culture on the edge of Singapore's futuristic city-center.",
    archtab
  );

  let arch04 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/07/featured-image-seoul-gate-1-800x400.jpg",
    "A Case of the Nosy Neighbor",
    "This beloved gateway to the South Korean palace, has endured several rounds of damage and restorations over its first 600 years of existence.",
    archtab
  );

  let arch05 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/05/Pisa-800x800.jpg",
    "New Perspectives For A Piazza",
    "The imperfect history of how the Leaning Tower of Pisa--and the attempts (failures) to fix its tilt.",
    archtab
  );

  let arch06 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/04/2020-05-07-20.53.19-800x655.jpg",
    "Antwerp’s Alternative Walkway",
    "Upon entry to the subterranean tunnel, commuters travel through a 572 meter tiled passage under the river Scheldt and emerge via the world's first wooden escalator.",
    archtab
  );

  let arch07 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/09/IMG_2072-1-800x800.jpg",
    "Not Your Average Leggings",
    `"This 5km canal tunnel once required 4 hours-worth of "leg-power."`,
    archtab
  );

  let arch08 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/08/Duval-Benjamin_Antwerpen-Centraal_awa-1-e1630369581248-800x800.jpg",
    "The ‘Slow Style’ Station of Antwerp",
    "One of the most eclectic train stations in the world.",
    archtab
  );

  let arch09 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/08/D0AB9E7D-5CBD-4114-B462-8A10E254D0E8-e1628096364769-800x800.jpeg",
    "A Mansion That Measures Time",
    "One of the few ‘calendar houses’ in the world with 365 windows, 52 chimneys, 12 doors, and 4 towers representing the days, weeks, months, and seasons in a year.",
    archtab
  );

  let arch10 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/04/DSC02424-800x800.jpg",
    "The Petite Parish",
    `The self-proclaimed Guinness World Record holder for "Smallest Chapel in the World" is contested only by the Guinness World Record Organization itself.`,
    archtab
  );

  let arch11 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/03/DSC_9951-2-e1616708973325-800x800.jpg",
    "Take It To The Bridge",
    `“In bridge designing, the aesthetics are quite as important as engineering details. It is a crime to build an ugly bridge.”`,
    archtab
  );

  let arch12 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/02/Teatro-Amazonas-_-Alfredo-Nugent-Setubal-_-@alfredoset-800x800.jpeg",
    "The Rainforest Theater’s Second Act",
    "This grandiose opera arena has been declared one of the most beautiful opera houses in the world.",
    archtab
  );

  let arch13 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2020/09/inbound6146002644208888679-e1598977981202-700x800.jpg",
    "The Art Deco Capital of the World",
    "The inner city of Napier is now recognized as having one of the largest and most beautiful concentrations of Art Deco buildings in the world.",
    archtab
  );

  let arch14 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2020/05/DSC_0116a-800x800.jpg",
    "The Abandoned Mansions of Sidhpur",
    "In the now-empty homes, delicate detail can still be found in the doorways, staircases, floors, and ceilings.",
    archtab
  );

  let arch = [arch01, arch02, arch03, arch04, arch05, arch06, arch07, arch08, arch09, arch10, arch11, arch12, arch13, arch14];

  // create SKILLED ARTISANS
  let skilledtab = "SKILLED ARTISANS";

  let skill01 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/08/161278243_905815743550373_2448195589618884147_n-e1629318995167-800x669.jpg",
    "Community Creators",
    "The number of amazing artists that exist in this Community continues to astonish us!",
    skilledtab
  );

  let skill02 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/02/948C06E2-C1B4-41FA-B455-CE7C55F3D73B-800x800.jpeg",
    "Masterpieces Mimicking Moments",
    "A museum tributed to a legendary Balinese painter.",
    skilledtab
  );

  let skill03 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/12/DSC_2143-2-800x800.jpg",
    "Finding Art Amongst The Feathers",
    "It’s not everyday you come across a library with no books.",
    skilledtab
  );

  let skill04 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/10/DSC_4109-e1639496791752-800x800.jpg",
    "From Rags To Rich Stationery",
    "The age of papermaking may be widely waning, but master paper-maker Jacques Bréjoux continues to keep the art alive.",
    skilledtab
  );

  let skill05 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/04/3806EB2B-8BB9-463A-AB89-930981E99296-750x800.jpg",
    "Creative Cartelismo Of Queens",
    "Brothers & artists who have been hand-painting signs for businesses in New York City for more than 40 years",
    skilledtab
  );

  let skill06 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/01/Matthijs-Van-Mierlo_-@matthijsvmierlo-1-800x800.jpeg",
    "Antwerp Was Made For Glovers",
    "Antwerp’s last remaining store dedicated to handmade leather gloves, this family operated store boasts 120 years of exclusively selling craft gloves.",
    skilledtab
  );

  let skilled = [skill01, skill02, skill03, skill04, skill05, skill06];

  // creaete QUALITY QUIRKS
  let qualitytab = "QUALITY QUIRKS";

  let qual01 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/11/DSC_1009-scaled-e1667558463609-800x800.jpg",
    "Clashing Coffee Houses",
    "A rivalry as bitter as a coffee bean.",
    qualitytab
  );

  let qual02 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/09/TAROT-featured-img-800x500.jpg",
    "Message in a Barrel",
    "Since 2004, Ivor Fireman has read fortunes on England's most visited attraction outside of London.",
    qualitytab
  );

  let qual03 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/06/DSC_1995-scaled-e1655825489537-800x800.jpg",
    "Wacky Quacky Traditions",
    "This college is virtually unchanged since its opening in 1438, whispering centuries of stories to its visitors. The most famous tale of all? A Duck on Parade.",
    qualitytab
  );

  let qual04 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/03/7944BDE5-A4E2-4DA4-B1EC-D11C41A5358D-1-800x800.jpeg",
    "A Lifesize Dollhouse",
    "We're not sure where you'll be able to fit your Queen-sized bed.",
    qualitytab
  );

  let qual05 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2022/01/7EDCEDBF-8D4F-4B7C-A196-FF61EC0CEA49-e1642551780259-800x800.jpg",
    "Buttering up to the Boss",
    `This community staple was without a "movie staple" in its first decade.`,
    qualitytab
  );

  let qual06 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/06/DSC_0668-1-1-e1624559618938-800x800.jpeg",
    "The Lettuce Of Cabbage Key",
    `A small island where tips are taped to the walls of the bar, and perhaps one of the most famous "Cheeseburgers in Paradise" is served.`,
    qualitytab
  );

  let qual07 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/05/9986ECD1-943E-4B89-8DF7-657C34475BF1-e1620851027230-800x770.jpeg",
    "The Pasta King And His Spaghetti Palace",
    "Royal Rigatoni",
    qualitytab
  );

  let qual08 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/01/Hilite-News-_-@Hilitenews-1-e1611186816735-800x415.jpg",
    "Finding Faulkner In The Frozen Food Aisle",
    "During the renovation of the local library in Carmel, Indiana all the books are conveniently relocated to the nearest supermarket.",
    qualitytab
  );

  let qual09 = new createcard2(
    "https://accidentallywesanderson.com/wp-content/uploads/2021/01/7605484290_808346e0dc_b-2-e1611767801612-800x506.jpg",
    "Celebrating A Chic Shetland Shelter",
    "Cold and unforgiving Shetland weather inspired a young schoolboy to write the local paper to build a new bus shelter for him and his classmates, but it ended up becoming more than a bus stop.",
    qualitytab
  );

  let quality = [qual01, qual02, qual03, qual04, qual05, qual06, qual07, qual08, qual09];

  // create localstorage

  localStorage.setItem("ADVENTURE CURIOUSLY", JSON.stringify(adventure));

  localStorage.setItem("IN THE DETAILS", JSON.stringify(itd));

  localStorage.setItem("WHALEBONE", JSON.stringify(whale));

  localStorage.setItem("ARCHITECTURAL WONDERS", JSON.stringify(arch));

  localStorage.setItem("SKILLED ARTISANS", JSON.stringify(skilled));

  localStorage.setItem("QUALITY QUIRKS", JSON.stringify(quality));

  // card 생성자
  function createcollectcard(catagory, img, country, location, description, name) {
    this.catagory = catagory;
    this.img = img;
    this.country = country;
    this.location = location;
    this.description = description;
    this.name = name;
  }

  // THEMES IMGS

  //////////////////////////////////////////////////
  // create CABLE CARS

  let cable01 = new createcollectcard(
    "CABLE CARS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/03/IMG_8088-800x800.jpg",
    "ANON CITY, COLORADO, UNITED STATES",
    "Royal Gorge Bridge & Park",
    "Once the world's highest suspension bridge. Don't look down.",
    "system"
  );
  let cable02 = new createcollectcard(
    "CABLE CARS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/10/DSC_6102_Final_3-800x800.jpg",
    "Fort William, Scotland",
    "The Nevis Range Mountain Gondola",
    "Following in the footsteps of your heroes is never easy, but if your hero is Sir Hugh Munro you’ve got a tough mountain to climb to reach your goal.",
    "system"
  );
  let cable03 = new createcollectcard(
    "CABLE CARS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/08/224-finicular-800x800.jpg",
    "Tbilisi, Georgia",
    "Finicular Tbilisi",
    "A beloved symbol of Tbilisi whose popularity increased when a grand leisure park was constructed on the plateau in the 1930s.",
    "system"
  );
  let cable04 = new createcollectcard(
    "CABLE CARS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/07/225651493_572220817131126_7887283526794437294_n-800x800.jpg",
    "Beatenberg, Switzerland",
    "Beatenberg – Niederhorn Cable Car",
    "This Swiss Cable Car is located in a town with medieval origins - and an origin story that involves slaying a dragon.",
    "system"
  );

  // create CLASSIC FACADES

  let classic01 = new createcollectcard(
    "CLASSIC FACADES",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/AWA-800x800.jpg",
    "PORTO ALEGRE, BRAZIL",
    "Palácio do Comércio",
    "Palácio do Comércio is not just a source of “architectural pride”, but a historical city-wide landmark.",
    "system"
  );
  let classic02 = new createcollectcard(
    "CLASSIC FACADES",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7A89E35B-5BCB-4C2B-9DC2-B15A28F8D8CD-800x800.jpg",
    "EL PASO, TEXAS, UNITED STATES",
    "The Plaza Hotel Pioneer Park",
    "In the 1950s, both a wealthy hotelier and a Hollywood legend called this towering hotel home.",
    "system"
  );
  let classic03 = new createcollectcard(
    "CLASSIC FACADES",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/villa-empain-insta-1-800x800.jpg",
    "BRUSSELS, BELGIUM",
    "Villa Empain",
    "Let us explain the style of Emplain.",
    "system"
  );
  let classic04 = new createcollectcard(
    "CLASSIC FACADES",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/336819521_118907344440832_351575098074494538_n-800x800.jpg",
    "PARIS, FRANCE",
    "Place Vendôme",
    "The site of some of the most luxurious brands is also the site of some of the most unusual ... recycling.",
    "system"
  );

  // create DOORS

  let door01 = new createcollectcard(
    "DOORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/5800546B-AD10-407F-AFEF-3A7C4F0DF5EA-800x800.jpeg",
    "PHILADELPHIA, PENNSYLVANIA, UNITED STATES",
    "Horace Jayne House",
    "This building which drew inspiration from the battlefield is the missing link from Thomas Jefferson's Monticello to Frank Lloyd Wright's organic architecture.",
    "system"
  );
  let door02 = new createcollectcard(
    "DOORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/03/156448714_781545412470577_5889255509518121176_n-800x800.jpg?lossy=1&strip=1&webp=1",
    "AGRA, INDIA",
    "Agra Fort",
    "Totaling 94 acres, this massive fortress made of red sandstone was the former residence and capital city of India's medieval Mughal Dynasty.",
    "system"
  );
  let door03 = new createcollectcard(
    "DOORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/08/296096599_441339587721502_9000750911016865526_n-800x800.jpg",
    "LONDON, UNITED KINGDOM",
    "The Mildmay Club",
    `"One of the last "Working Men's Clubs" in London, Mildmay is a testament to Community and belonging."`,
    "system"
  );
  let door04 = new createcollectcard(
    "DOORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/295617042_5562616073773094_7564432010437480444_n-800x800.jpg",
    "CLEVELAND, OHIO, UNITED STATES",
    "Cleveland Institute of Music",
    "Like the best compositions, this conservatory's story began with the humility of a single note, then built and built until something truly beautiful was born…",
    "system"
  );

  // create EDUCATIONAL INSTITUTIONS

  let edu01 = new createcollectcard(
    "EDUCATIONAL INSTITUTIONS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/20220124_104522-800x800.jpg",
    "DEBRECEN, HUNGARY",
    "University of Debrecen",
    "This university is celebrated for its academic programs -- and its cactus collection.",
    "system"
  );
  let edu02 = new createcollectcard(
    "EDUCATIONAL INSTITUTIONS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/294554016_185299867253649_1417697834781966114_n-800x800.jpg",
    "LUGO, SPAIN",
    "The Círculo de las Artes",
    "The only city in the world to be completely surrounded by intact Roman walls.",
    "system"
  );
  let edu03 = new createcollectcard(
    "EDUCATIONAL INSTITUTIONS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/inbound2161675608016262826-800x800.jpg",
    "CASSOPOLIS, MICHIGAN, UNITED STATES",
    "Geneva School",
    "The county and a story about one of it's most famous citizens will lure you in.",
    "system"
  );
  let edu04 = new createcollectcard(
    "EDUCATIONAL INSTITUTIONS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/295617042_5562616073773094_7564432010437480444_n-800x800.jpg",
    "CLEVELAND, OHIO, UNITED STATES",
    "Cleveland Institute of Music",
    "Like the best compositions, this conservatory's story began with the humility of a single note, then built and built until something truly beautiful was born…",
    "system"
  );

  // create GOVERNMENT BUILDINGS

  let gove01 = new createcollectcard(
    "GOVERNMENT BUILDINGS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/04/279000231_528048965549113_3734253335068831328_n-800x720.jpg",
    "HANOI, VIETNAM",
    "Presidential Palace",
    "A symbol of when it was a French colony, the presidential palaces offers a glimpse into the storied history of Vietnam.",
    "system"
  );
  let gove02 = new createcollectcard(
    "GOVERNMENT BUILDINGS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/03/DSC_6071-1-800x800.jpg",
    "GRAND JUNCTION, COLORADO, UNITED STATES",
    "Wayne N. Aspinall Federal Building and Courthouse",
    "A painting removed for a routine cleaning disappeared for decades.",
    "system"
  );
  let gove03 = new createcollectcard(
    "GOVERNMENT BUILDINGS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/04/277603393_506043934413764_4578293418272300498_n-800x800.jpg",
    "SARAJEVO, BOSNIA AND HERZEGOVINA",
    "Vijećnica",
    "Playing host to the killing that sparked WWI was only the beginning of this heralded hall’s story — it’s one of triumph, tragedy, and a tantalizing return to glory.",
    "system"
  );
  let gove04 = new createcollectcard(
    "GOVERNMENT BUILDINGS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/02/273174039_1043305403066496_3991599836811027518_n-800x800.jpg",
    "LANGLEY, BRITISH COLUMBIA, CANADA",
    "Fort Langley Community Hall",
    "In 1924, the construction of this town hall was funded for a total of $137.13.",
    "system"
  );

  // create HIDDEN WONDERS

  let hidden01 = new createcollectcard(
    "HIDDEN WONDERS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/4F8D0B2D-A777-4796-A19B-5DD8FCF98259-1-800x800.jpeg",
    "SOUTH SARDINIA, ITALY",
    "Porto Flavia",
    "A fanciful doorway hides a masterpiece of engineering.",
    "system"
  );
  let hidden02 = new createcollectcard(
    "HIDDEN WONDERS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/05/DSC_4147-800x800.jpg",
    "NEW YORK, NEW YORK, UNITED STATES",
    "American Museum of Natural History",
    "That spirit of exploration is shared by museum goers, as they’re invited to observe 45 permanent exhibition halls—including one dedicated to the extraordinary achievements of intrepid polar explorer.",
    "system"
  );
  let hidden03 = new createcollectcard(
    "HIDDEN WONDERS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/126231979_131777811752478_3368863512616670864_n-800x800.jpg",
    "DAYTONA BEACH, FLORIDA, UNITED STATES",
    "Daytona International Speedway",
    "If Daytona was going to be the world capital for competitive speed, it was going to need a precise timer.",
    "system"
  );
  let hidden04 = new createcollectcard(
    "HIDDEN WONDERS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/05/DSC_3980copy-1-800x800.jpg",
    "NEW YORK, NEW YORK, UNITED STATES",
    "The Metropolitan Museum of Art",
    "David Webb found his muse by frequenting the Met.",
    "system"
  );

  // create HOTEL / MOTEL

  let hm01 = new createcollectcard(
    "HOTEL / MOTEL",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
    "RACHEL, NEVADA, UNITED STATES",
    "Little A’Le’Inn",
    "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO.",
    "system"
  );
  let hm02 = new createcollectcard(
    "HOTEL / MOTEL",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7A89E35B-5BCB-4C2B-9DC2-B15A28F8D8CD-800x800.jpg",
    "EL PASO, TEXAS, UNITED STATES",
    "The Plaza Hotel Pioneer Park",
    "In the 1950s, both a wealthy hotelier and a Hollywood legend called this towering hotel home.",
    "system"
  );
  let hm03 = new createcollectcard(
    "HOTEL / MOTEL",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/DSC_3529-800x800.jpg",
    "SAWTOOTH CITY, IDAHO, UNITED STATES",
    "Smiley Creek Lodge",
    "The best darn milkshakes in the valley.",
    "system"
  );
  let hm04 = new createcollectcard(
    "HOTEL / MOTEL",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/IMG_4619-800x800.jpg",
    "LONDON, UNITED KINGDOM",
    "The Connaught Bar",
    "Enjoy a long list of libations at what was voted the world's greatest bar.",
    "system"
  );

  // create INTERIORS

  let inter01 = new createcollectcard(
    "INTERIORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/image-800x800.jpeg",
    "VICHY, FRANCE",
    "Hall des Sources",
    "Water with some healing powers.",
    "system"
  );
  let inter02 = new createcollectcard(
    "INTERIORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/0152E625-B2A2-462D-8DA4-4AB2B6FB3BA1_1_102_a-1-800x800.jpeg",
    "SAN FRANCISCO, CALIFORNIA, UNITED STATES",
    "Olympic Club",
    `"A club that's earned the title "Olympic" with some medal-winning members."`,
    "system"
  );
  let inter03 = new createcollectcard(
    "INTERIORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7CBB507E-A4D0-4107-81F0-E8B2441F6541-800x800.jpeg",
    "MONTREAL, CANADA",
    "Notre-Dame Basilica",
    "Not only was Notre-Dame the largest place of worship in North America for a half-decade (before New York’s St. Patrick’s Cathedral), it is perhaps (still) the most impressive church on the continent.",
    "system"
  );
  let inter04 = new createcollectcard(
    "INTERIORS",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/LGP_6250-69-800x800.jpeg",
    "SAN JOSE, COSTA RICA",
    "National Theatre of Costa Rica",
    "A theatre built by the coffee bean.",
    "system"
  );

  // create LIBRARY

  let lib01 = new createcollectcard(
    "LIBRARY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/89EC38C4-BA20-4DA3-827F-8994A720BA16-800x800.jpeg",
    "PUHOI, NEW ZEALAND",
    "Puhoi Town Library",
    "In a country known for exemplifying the phrase “tiny-but-mighty,” one of the most delightful, and heroic, little buildings belongs to a small river-front community.",
    "system"
  );
  let lib02 = new createcollectcard(
    "LIBRARY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/11/Library2-800x800.jpg",
    "DERBY LINE, VERMONT, UNITED STATES",
    "Haskell Free Library & Opera House",
    "Purposely built to pledge allegiance to two flags, this structure automatically enrolls performers into an international tour.",
    "system"
  );
  let lib03 = new createcollectcard(
    "LIBRARY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/08/DSCF7611-Edited-800x800.jpg",
    "KETCHUM, IDAHO, UNITED STATES",
    "Community Library",
    "Located all around the world. Founded by a group of 17 enterprising women from the Sun Valley area, the Community Library holds a unique chapter in the region’s history.",
    "system"
  );
  let lib04 = new createcollectcard(
    "LIBRARY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/291342886_574273087651240_2828036662521882592_n-800x800.jpg",
    "KESZTHELY, HUNGARY",
    "Festetics Palace",
    "Some of us are just late bloomers, but this hulking Hungarian palace had a bit longer of an awkward phase than we're used to.",
    "system"
  );

  // create LIGHTHOUSE

  let light01 = new createcollectcard(
    "LIGHTHOUSE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/255260CE-78EB-48CE-B285-50DC8F343532-800x800.jpeg",
    "ALMADA, PORTUGAL",
    "Farol de Cacilhas",
    "A lighthouse comes back home.",
    "system"
  );
  let light02 = new createcollectcard(
    "LIGHTHOUSE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/CD94C6BA-4198-4401-AF3C-5647729AF1B2-800x800.jpeg",
    "ANATOLIKI MANI, GREECE",
    "Lighthouse Tenaro",
    "If you’re an Ancient Greek, though, you’d give this abyss a more… creative description: the gate to the Underworld.",
    "system"
  );
  let light03 = new createcollectcard(
    "LIGHTHOUSE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/09/IMG_3846-720x800.jpg",
    "NEWFOUNDLAND AND LABRADOR, CANADA",
    "Cape Spear Lighthouse",
    "It was a foggy morning on the easternmost point of North America. The route to the wharf was primed for celebration — but disaster was about to strike.",
    "system"
  );
  let light04 = new createcollectcard(
    "LIGHTHOUSE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/08/DSC_3335-Edited-800x800.jpg",
    "BRISTOL, MAINE, UNITED STATES",
    "Pemaquid Point Lighthouse",
    "A former Keeper of this lighthouse is the only person to be awarded both the Medal of Honor and the Gold Lifesaving Medal–America’s highest military and civilian decorations.",
    "system"
  );

  // create MUSEUM

  let museum01 = new createcollectcard(
    "MUSEUM",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/villa-empain-insta-1-800x800.jpg",
    "BRUSSELS, BELGIUM",
    "Villa Empain",
    "Let us explain the style of Emplain.",
    "system"
  );
  let museum02 = new createcollectcard(
    "MUSEUM",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/Sir-John-Soanes-Museum-800x800.jpg",
    "LONDON, UNITED KINGDOM",
    "Sir John Soane’s Museum",
    "Sir John Soane was attempting to collect everything during his lifetime - paintings, sculptures, even sarcophagi. By the end of his life, Parliament had no other choice but to turn his collection into a museum.",
    "system"
  );
  let museum03 = new createcollectcard(
    "MUSEUM",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/Schlosspark-Hellbrunn-800x800.jpg",
    "SALZBURG, AUSTRIA",
    "Schloss Hellbrunn",
    "This Austrian palace is celebrated for its fountains and water tricks.",
    "system"
  );
  let museum04 = new createcollectcard(
    "MUSEUM",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/07/211307432_4366960029992302_3165379696640939529_n.jpg",
    "KRASNODAR, RUSSIA",
    "The Krasnodar State Historic and Archaeological Museum-Reserve of Felitsyn E.D.",
    "This Museum goes on underwater archeological expeditions to gather artifacts for its exhibits.",
    "system"
  );

  // create NATURE

  let nature01 = new createcollectcard(
    "NATURE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/White-Sands-National-Park-_-Tyshaia-Earnest-_-@_tyshaia-800x800.jpg",
    "DOÑA ANA COUNTY, NEW MEXICO, UNITED STATES",
    "White Sands National Park",
    "This illusion of a winter wonderland is located within the hot deserts of New Mexico.",
    "system"
  );
  let nature02 = new createcollectcard(
    "NATURE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/DSC_6329-800x800.jpg",
    "GRAND JUNCTION, COLORADO, UNITED STATES",
    "Colorado National Monument",
    "Imagine taking care of 32 square miles for one dollar a year.",
    "system"
  );
  let nature03 = new createcollectcard(
    "NATURE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/mairead-bolger_awa-submission-ireland-eye-howth-800x800.jpg",
    "DUBLIN, IRELAND",
    "Ireland’s Eye",
    "Sometimes you trade in fishing for tourism.",
    "system"
  );
  let nature04 = new createcollectcard(
    "NATURE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/DSC_3717-800x800.jpg",
    "SUN VALLEY, IDAHO, UNITED STATES",
    "Sun Valley Ski Patrol",
    "These pups know snow.",
    "system"
  );

  // content별 배열에 저장
  let cablecarss = [cable01, cable02, cable03, cable04];
  let classics = [classic01, classic02, classic03, classic04];
  let doors = [door01, door02, door03, door04];
  let edus = [edu01, edu02, edu03, edu04];
  let goves = [gove01, gove02, gove03, gove04];
  let hiddens = [hidden01, hidden02, hidden03, hidden04];
  let hms = [hm01, hm02, hm03, hm04];
  let inters = [inter01, inter02, inter03, inter04];
  let libs = [lib01, lib02, lib03, lib04];
  let lights = [light01, light02, light03, light04];
  let museums = [museum01, museum02, museum03, museum04];
  let natures = [nature01, nature02, nature03, nature04];

  // localstorage에 배열로 객체 생성
  localStorage.setItem(
    "THEMESIMG",
    `[{ "CABLE CARS" : ${JSON.stringify(cablecarss)} },{ "CLASSIC FACADES" : ${JSON.stringify(classics)} },{ "DOORS" : ${JSON.stringify(
      doors
    )} },{ "EDUCATIONAL INSTITUTIONS" : ${JSON.stringify(edus)}},{ "GOVERNMENT BUILDINGS" : ${JSON.stringify(goves)}},{ "HIDDEN WONDERS" : ${JSON.stringify(
      hiddens
    )}},{ "HOTEL / MOTEL" : ${JSON.stringify(hms)}},{ "INTERIORS" : ${JSON.stringify(inters)}},{ "LIBRARY" : ${JSON.stringify(
      libs
    )}},{ "LIGHTHOUSE" : ${JSON.stringify(lights)}},{ "MUSEUM" : ${JSON.stringify(museums)}},{ "NATURE" : ${JSON.stringify(natures)}}]`
  );

  ////////////////////////////////////////////////////////////////

  // COLOR PALETTE IMGS

  ////////////////////////////////////////////////////////////////

  let black01 = new createcollectcard(
    "BLACK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/IMG_4619-800x800.jpg",
    "LONDON, UNITED KINGDOM",
    "The Connaught Bar",
    "Enjoy a long list of libations at what was voted the world's greatest bar.",
    "system"
  );
  let black02 = new createcollectcard(
    "BLACK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/DSC_7804-800x800.jpg",
    "MILTON, DELAWARE, UNITED STATES",
    "King’s Ice Cream",
    "An ice cream shop that serves up the royal treatment.",
    "system"
  );
  let black03 = new createcollectcard(
    "BLACK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/05/DSC_4221-Retouched-650x800.jpg",
    "CAMBRIDGE, UNITED KINGDOM",
    "Queens’ College",
    "Owing its name to two Queens, this hall is located in one of the oldest colleges at Cambridge University.",
    "system"
  );
  let black04 = new createcollectcard(
    "BLACK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/272002569_2716402315329780_4598027038124583783_n-800x800.jpg",
    "COMO, COLORADO, UNITED STATES",
    "Como Depot",
    "Likely took its name from a large group Italian immigrants who named the Depot after Como, Italy.",
    "system"
  );

  // create BLUE

  let blue01 = new createcollectcard(
    "BLUE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/White-Sands-National-Park-_-Tyshaia-Earnest-_-@_tyshaia-800x800.jpg",
    "DOÑA ANA COUNTY, NEW MEXICO, UNITED STATES",
    "White Sands National Park",
    "This illusion of a winter wonderland is located within the hot deserts of New Mexico.",
    "system"
  );
  let blue02 = new createcollectcard(
    "BLUE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
    "RACHEL, NEVADA, UNITED STATES",
    "Little A’Le’Inn",
    "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO.",
    "system"
  );
  let blue03 = new createcollectcard(
    "BLUE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/0152E625-B2A2-462D-8DA4-4AB2B6FB3BA1_1_102_a-1-800x800.jpeg",
    "SAN FRANCISCO, CALIFORNIA, UNITED STATES",
    "Olympic Club",
    `"A club that's earned the title "Olympic" with some medal-winning members."`,
    "system"
  );
  let blue04 = new createcollectcard(
    "BLUE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7CBB507E-A4D0-4107-81F0-E8B2441F6541-800x800.jpeg",
    "MONTREAL, CANADA",
    "Notre-Dame Basilica",
    "Not only was Notre-Dame the largest place of worship in North America for a half-decade (before New York’s St. Patrick’s Cathedral), it is perhaps (still) the most impressive church on the continent.",
    "system"
  );

  // create BROWN

  let brown01 = new createcollectcard(
    "BROWN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/04/Copy-of-Crescent-Moon-Theater-_-Kanab-UT-800x800.jpeg",
    "KANAB, UTAH, UNITED STATES",
    "Crescent Moon Theater",
    "This theater, celebrated for its Western culture, was built in memory of a real life Utah cowboy.",
    "system"
  );
  let brown02 = new createcollectcard(
    "BROWN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/DSC_6329-800x800.jpg",
    "GRAND JUNCTION, COLORADO, UNITED STATES",
    "Colorado National Monument",
    "Imagine taking care of 32 square miles for one dollar a year.",
    "system"
  );
  let brown03 = new createcollectcard(
    "BROWN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7A89E35B-5BCB-4C2B-9DC2-B15A28F8D8CD-800x800.jpg",
    "EL PASO, TEXAS, UNITED STATES",
    "The Plaza Hotel Pioneer Park",
    "In the 1950s, both a wealthy hotelier and a Hollywood legend called this towering hotel home.",
    "system"
  );
  let brown04 = new createcollectcard(
    "BROWN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/mairead-bolger_awa-submission-ireland-eye-howth-800x800.jpg",
    "DUBLIN, IRELAND",
    "Ireland’s Eye",
    "Sometimes you trade in fishing for tourism.",
    "system"
  );

  // create gray

  let gray01 = new createcollectcard(
    "GRAY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/AWA-800x800.jpg",
    "PORTO ALEGRE, BRAZIL",
    "Palácio do Comércio",
    "Palácio do Comércio is not just a source of “architectural pride”, but a historical city-wide landmark.",
    "system"
  );
  let gray02 = new createcollectcard(
    "GRAY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/villa-empain-insta-1-800x800.jpg",
    "BRUSSELS, BELGIUM",
    "Villa Empain",
    "Let us explain the style of Emplain.",
    "system"
  );
  let gray03 = new createcollectcard(
    "GRAY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/CD94C6BA-4198-4401-AF3C-5647729AF1B2-800x800.jpeg",
    "ANATOLIKI MANI, GREECE",
    "Lighthouse Tenaro",
    "If you’re an Ancient Greek, though, you’d give this abyss a more… creative description: the gate to the Underworld.",
    "system"
  );
  let gray04 = new createcollectcard(
    "GRAY",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/E0EF83D6-F2C6-4931-BC79-C36E787FB4E6-800x800.jpeg",
    "SCHWENDE, SWITZERLAND",
    "Aescher Berg Gasthaus",
    "Welcome to the guesthouse with a built-in rock wall, a 100-foot vertical drop below the patio, and nowhere to actually spend the night.",
    "system"
  );

  // create green

  let green01 = new createcollectcard(
    "GREEN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/Lindsey-Velde_Gulfport-Casino-FL-800x800.jpg",
    "GULFPORT, FLORIDA, UNITED STATES",
    "Gulfport Casino",
    "The $10 price of admission includes a free dance lesson, proving that at Gulfport Casino, everyone’s a winner.",
    "system"
  );
  let green02 = new createcollectcard(
    "GREEN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/mairead-bolger_awa-submission-ireland-eye-howth-800x800.jpg",
    "DUBLIN, IRELAND",
    "Ireland’s Ey",
    "Sometimes you trade in fishing for tourism.",
    "system"
  );
  let green03 = new createcollectcard(
    "GREEN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/image-800x800.jpeg",
    "BOYERTOWN, PENNSYLVANIA, UNITED STATES",
    "The Colebrookedale Railroad",
    "All aboard an old American pastime.",
    "system"
  );
  let green04 = new createcollectcard(
    "GREEN",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/292601982_145317784771524_8699380577223449671_n-800x800.jpg",
    "LONDON, UNITED KINGDOM",
    "Wimbledon Court 18",
    "This pitch witnessed the longest match in tennis history.",
    "system"
  );

  // create ORANGE

  let orange01 = new createcollectcard(
    "ORANGE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/Lindsey-Velde_Gulfport-Casino-FL-800x800.jpg",
    "GULFPORT, FLORIDA, UNITED STATES",
    "Gulfport Casino",
    "The $10 price of admission includes a free dance lesson, proving that at Gulfport Casino, everyone’s a winner.",
    "system"
  );
  let orange02 = new createcollectcard(
    "ORANGE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/336819521_118907344440832_351575098074494538_n-800x800.jpg",
    "PARIS, FRANCE",
    "Place Vendôme",
    "The site of some of the most luxurious brands is also the site of some of the most unusual ... recycling.",
    "system"
  );
  let orange03 = new createcollectcard(
    "ORANGE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/10/249504219_125015146582690_3068292557799564609_n-800x800.jpg",
    "LA CHAUX-DE-FONDS, SWITZERLAND",
    "Salle de Musique",
    "This theatre is a perfect reflection of the precise nature of it's watch-making patrons.",
    "system"
  );
  let orange04 = new createcollectcard(
    "ORANGE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/03/156448714_781545412470577_5889255509518121176_n-800x800.jpg",
    "AGRA, INDIA",
    "Agra Fort",
    "Totaling 94 acres, this massive fortress made of red sandstone was the former residence and capital city of India's medieval Mughal Dynasty.",
    "system"
  );

  // create PINK

  let pink01 = new createcollectcard(
    "PINK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/DSC_6488-2-e1639497801962-800x800.jpg",
    "CLEVELAND, OHIO, UNITED STATES",
    "Malley’s Chocolates",
    "Each 88-foot silo could contain ~100,000 pounds of its respective raw ingredient.",
    "system"
  );
  let pink02 = new createcollectcard(
    "PINK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/23595073_1689113034433739_1346042720501628928_n-800x800.jpg",
    "PRAGUE, CZECH REPUBLIC",
    "Hotel Opera",
    "A hot-pink confection of Bohemian Neo-Renaissance style, the Hotel Opera stands in the less touristy Nové Město, or “New Town,” quarter of storied Prague.",
    "system"
  );
  let pink03 = new createcollectcard(
    "PINK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/07/211307432_4366960029992302_3165379696640939529_n.jpg",
    "KRASNODAR, RUSSIA",
    "The Krasnodar State Historic and Archaeological Museum-Reserve of Felitsyn E.D.",
    "This Museum goes on underwater archeological expeditions to gather artifacts for its exhibits.",
    "system"
  );
  let pink04 = new createcollectcard(
    "PINK",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/09/242114715_540655170523429_7934170419823120741_n-800x800.jpg",
    "HELSINKI, FINLAND",
    "Ihantola",
    "Ihantola translates to “Wonderful Place” and oh, what a wonder it is!",
    "system"
  );

  // create PURPLE

  let purple01 = new createcollectcard(
    "PURPLE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/11/25_00062_00_N2_st-e1639495838116-800x800.jpg",
    "SAN DIEGO, CALIFORNIA, UNITED STATES",
    "Balboa Theater",
    "Built in 1924, this storied theater was slated for demolition just three decades later.",
    "system"
  );
  let purple02 = new createcollectcard(
    "PURPLE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/05/189913045_920095848844858_3774646512706581676_n-800x800.jpg",
    "WASHINGTON DC, UNITED STATES",
    "Fellows Building – Dumbarton Oaks",
    "Intellectual debates and lively parties were enjoyed at this residence for Harvard research fellows.",
    "system"
  );
  let purple03 = new createcollectcard(
    "PURPLE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/02/128453505_502322554059835_3181569347249400351_n-800x800.jpg",
    "RYDE, UNITED KINGDOM",
    "Ryde Pier Head Railway Station",
    "This railroad pier transports visitors traveling by sea to the town of Ryde on the Isle of Wight.",
    "system"
  );
  let purple04 = new createcollectcard(
    "PURPLE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/104111916_3183897281687968_1202839659952370745_n-800x800.jpg",
    "DERBYSHIRE, UNITED KINGDOM",
    "East Midlands Trains",
    "Established in 2007, East Midlands Trains (EMT) provided train services to the East Midlands area of England for twelve years and are now known as East Midlands Railway.",
    "system"
  );

  // create RED

  let red01 = new createcollectcard(
    "RED",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
    "RACHEL, NEVADA, UNITED STATES",
    "Little A’Le’Inn",
    "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO.",
    "system"
  );
  let red02 = new createcollectcard(
    "RED",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/255260CE-78EB-48CE-B285-50DC8F343532-800x800.jpeg",
    "ALMADA, PORTUGAL",
    "Farol de Cacilhas",
    "A lighthouse comes back home.",
    "system"
  );
  let red03 = new createcollectcard(
    "RED",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/JanneMonard-AWAII-800x800.jpg",
    "GHENT, BELGIUM",
    "UGent Sports Centre / Ghent University",
    "Ghent's hero scored big points in the industrial game against England.",
    "system"
  );
  let red04 = new createcollectcard(
    "RED",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/image-1-1-800x800.jpeg",
    "AMSTERDAM, NETHERLANDS",
    "Pathe Tuschinski",
    "One man's dream to create one of the most beautiful cinema's in the world.",
    "system"
  );

  // create TURQUOISE

  let turquoise01 = new createcollectcard(
    "TURQUOISE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/image-800x800.jpeg",
    "VICHY, FRANCE",
    "Hall des Sources",
    "Water with some healing powers.",
    "system"
  );
  let turquoise02 = new createcollectcard(
    "TURQUOISE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/3F186F56-62A8-4FCA-AF45-1ED217EBC733-800x800.jpeg",
    "WOODSTOCK, ILLINOIS, UNITED STATES",
    "Sunnyside Farms",
    "Woodstock would forever be changed by playing the part of a village over 500 miles away—Punxsutawney, Pennsylvania.",
    "system"
  );
  let turquoise03 = new createcollectcard(
    "TURQUOISE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/Story-clun-800x800.jpg",
    "CLUN, UNITED KINGDOM",
    "Clun Post Office",
    "A peaceful town that wasn't always so tranquil.",
    "system"
  );
  let turquoise04 = new createcollectcard(
    "TURQUOISE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/289629751_715387973050315_1441269879910284433_n-800x800.jpg",
    "TUSCANY, ITALY",
    "Versilia",
    "During Roman times, Versilia was not an area where the Emperor was known to roam. A few centuries later, the Tuscans had a holiday hotspot on their hands.",
    "system"
  );

  // create WHITE

  let white01 = new createcollectcard(
    "WHITE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/White-Sands-National-Park-_-Tyshaia-Earnest-_-@_tyshaia-800x800.jpg",
    "DOÑA ANA COUNTY, NEW MEXICO, UNITED STATES",
    "White Sands National Park",
    "This illusion of a winter wonderland is located within the hot deserts of New Mexico.",
    "system"
  );
  let white02 = new createcollectcard(
    "WHITE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
    "RACHEL, NEVADA, UNITED STATES",
    "Little A’Le’Inn",
    "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO.",
    "system"
  );
  let white03 = new createcollectcard(
    "WHITE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/image-800x800.jpeg",
    "VICHY, FRANCE",
    "Hall des Sources",
    "Water with some healing powers.",
    "system"
  );
  let white04 = new createcollectcard(
    "WHITE",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/0152E625-B2A2-462D-8DA4-4AB2B6FB3BA1_1_102_a-1-800x800.jpeg",
    "SAN FRANCISCO, CALIFORNIA, UNITED STATES",
    "Olympic Club",
    `"A club that's earned the title "Olympic" with some medal-winning members."`,
    "system"
  );

  // create YELLOW

  let yellow01 = new createcollectcard(
    "YELLOW",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/01/Lemon-Dome-800x800.jpg",
    "CARTAGO, CALIFORNIA, UNITED STATES",
    "The Lemon House",
    "Squeeze the day!",
    "system"
  );
  let yellow02 = new createcollectcard(
    "YELLOW",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7CBB507E-A4D0-4107-81F0-E8B2441F6541-800x800.jpeg",
    "MONTREAL, CANADA",
    "Notre-Dame Basilica",
    "Not only was Notre-Dame the largest place of worship in North America for a half-decade (before New York’s St. Patrick’s Cathedral), it is perhaps (still) the most impressive church on the continent.",
    "system"
  );
  let yellow03 = new createcollectcard(
    "YELLOW",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/D29BB590-4E16-4121-B206-8F04F0F8A0B1-800x800.jpeg",
    "MILAN, ITALY",
    "Yellow Line",
    "Would you like to sit down?",
    "system"
  );
  let yellow04 = new createcollectcard(
    "YELLOW",
    "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/image-1-800x800.jpeg",
    "ALPE DEVERO, ITALY",
    "Bar Pensione Fattorini",
    "The only place in the world one can find Bettelmatt cheese.",
    "system"
  );

  // contect save arr
  let blacks = [black01, black02, black03, black04];
  let blues = [blue01, blue02, blue03, blue04];
  let browns = [brown01, brown02, brown03, brown04];
  let grays = [gray01, gray02, gray03, gray04];
  let greens = [green01, green02, green03, green04];
  let oranges = [orange01, orange02, orange03, orange04];
  let pinks = [pink01, pink02, pink03, pink04];
  let purples = [purple01, purple02, purple03, purple04];
  let reds = [red01, red02, red03, red04];
  let turquoises = [turquoise01, turquoise02, turquoise03, turquoise04];
  let whites = [white01, white02, white03, white04];
  let yellows = [yellow01, yellow02, yellow03, yellow04];

  localStorage.setItem(
    "COLORIMG",
    `[{ "BLACK" : ${JSON.stringify(blacks)} },{ "BLUE" : ${JSON.stringify(blues)} },{ "BROWN" : ${JSON.stringify(browns)} },{ "GRAY" : ${JSON.stringify(
      grays
    )}},{ "GREEN" : ${JSON.stringify(greens)}},{ "ORANGE" : ${JSON.stringify(oranges)}},{ "PINK" : ${JSON.stringify(pinks)}},{ "PURPLE" : ${JSON.stringify(
      purples
    )}},{ "RED" : ${JSON.stringify(reds)}},{ "TURQUOISE" : ${JSON.stringify(turquoises)}},{ "WHITE" : ${JSON.stringify(whites)}},{ "YELLOW" : ${JSON.stringify(
      yellows
    )}}]`
  );
}
////////////////////////////////////////////////////////////////

// 넘어갈 키워드 배열
// 팝업창에 있는 Collections의 이미지를 눌렀을 때 이동하기 위한 객체 생성
const gotocolor = [
  {
    name: "BLACK",
    sub: "blacks",
    group: "COLORS",
    cnt: 0,
    desc: "Occasionally darkness is required to bring out the pops of color in contrast. Black. The opposite of White.",
  },
  {
    name: "BLUE",
    sub: "blues",
    group: "COLORS",
    cnt: 1,
    desc: "Blue has been an important color since ancient times. Often associated with peace and harmony, explore our collection for calm vibes.",
  },
  {
    name: "BROWN",
    sub: "browns",
    group: "COLORS",
    cnt: 2,
    desc: "Wood, brick, and a variety of construction materials often employ brown as a base color. This collection showcases some of the best browns around.",
  },
  {
    name: "GRAY",
    sub: "grays",
    group: "COLORS",
    cnt: 3,
    desc: "Gray doesn't have to equate to drab. This collection features a wide array of images and locations that are, upon closer inspection, anything but!",
  },
  {
    name: "GREEN",
    sub: "greens",
    group: "COLORS",
    cnt: 4,
    desc: "Lush natural scenery, fields of clover, sporting pitches, and brilliant emeralds - all green. Dive in to a collection filled with green goodness.",
  },
  {
    name: "ORANGE",
    sub: "oranges",
    group: "COLORS",
    cnt: 5,
    desc: "The color and name of a popular fruit. You won't find any citrus in this colorful collection, but it is a tasty one nonetheless.",
  },
  {
    name: "PINK",
    sub: "pinks",
    group: "COLORS",
    cnt: 6,
    desc: `"A "pop of pink" is a quintessential element of the AWA aesthetic. This popular collection provides a feast for the eyes that upon further inspection sets up some equally enchanting stories."`,
  },
  {
    name: "PURPLE",
    sub: "purples",
    group: "COLORS",
    cnt: 7,
    desc: "Royal and regal, Purple has long been associated with the finer things in life. This petite collection is so lush that you can almost feel the velvet through the screen.",
  },
  {
    name: "RED",
    sub: "reds",
    group: "COLORS",
    cnt: 8,
    desc: "Is it warm in here? Red, often associated with love, passion, and all things hot, you might need to cool off after exploring this collection.",
  },
  {
    name: "TURQUOISE",
    sub: "turquoises",
    group: "COLORS",
    cnt: 9,
    desc: "Ahhh... Take a dip in this refreshing collection dominated by aquatic tones of turquoise and teal.",
  },
  {
    name: "WHITE",
    sub: "whites",
    group: "COLORS",
    cnt: 10,
    desc: "Similar to the Black collection, White often serves as a contrast that allows other pops of color to take center stage. One thing is for certain, these snaps & stories aren't vanilla.",
  },
  {
    name: "YELLOW",
    sub: "yellows",
    group: "COLORS",
    cnt: 11,
    desc: "An underrated color in the AWA universe, yellow has a lot to offer. We find that there is a lot to love when yellow appears as a pop of color and hope that you'll be delighted, too.",
  },
];

const gotothemes = [
  {
    name: "CABLE CARS",
    sub: "cablecars",
    group: "THEMES",
    cnt: 0,
    desc: "Aerial lifts, tramways, cableways... Occasionally the best way to get from point A to B is on a wire. Cable Cars were first pioneered for human transportation at the end of the 19th century and have maintained their value and charm with unique variations on the mode of transport across the globe.",
  },
  {
    name: "CLASSIC FACADES",
    sub: "classics",
    group: "THEMES",
    cnt: 1,
    desc: `"The stunners contained within this theme scream AWA. Guess what, they are all real places, each with a story to tell. We invite you to explore some of the most "classic" spots around the globe."`,
  },
  {
    name: "DOORS",
    sub: "doors",
    group: "THEMES",
    cnt: 2,
    desc: `"Many times a door is just a door, but sometimes the door represents passage to a new, fantastical place. Other times, the doors themselves have a certain charm, an undeniable "it factor". This collection contains doors of all kinds. Step through and discover something new."`,
  },
  {
    name: "EDUCATIONAL INSTITUTIONS",
    sub: "edus",
    group: "THEMES",
    cnt: 3,
    desc: "Spanning all cultures and eras, Humanity's quest for knowledge is a constant from time immemorial. Each of the places and spaces within this theme have a connection to learning. Some formal, others less so.",
  },
  {
    name: "GOVERNMENT BUILDINGS",
    sub: "goves",
    group: "THEMES",
    cnt: 4,
    desc: "The thought of a government building might bring to mind drab, unimaginative hallways and unmarked doors. It does not need to be so! These places represent the opposite of that aesthetic.",
  },
  {
    name: "HIDDEN WONDESRS",
    sub: "hiddens",
    group: "THEMES",
    cnt: 5,
    desc: "A collection the most unusual places and things with deeper meanings and untold stories. Let's explore together!",
  },
  {
    name: "HOTEL / MOTEL",
    sub: "hms",
    group: "THEMES",
    cnt: 6,
    desc: "Weary travelers have found unique places to lay their head since the beginning of human travel. The locations contained within the collection represent some of the more... extravagant, beautiful, and history-laden options.",
  },
  {
    name: "INTERIORS",
    sub: "inters",
    group: "THEMES",
    cnt: 7,
    desc: "Who doesn't love an immaculately designed interior? It's where we spend most of our waking hours, at least for many of us. This collection represents the best of the best when you need a little inspiration for your own inside spaces.",
  },
  {
    name: "LIBRARY",
    sub: "libs",
    group: "THEMES",
    cnt: 8,
    desc: "To get lost in a book is one of life's simple pleasures. To get lost in one of these libraries, well, you can let us know what you think!",
  },
  {
    name: "LIGHTHOUSE",
    sub: "lights",
    group: "THEMES",
    cnt: 9,
    desc: "Beacons, most often situated on a coast, help watercraft avoid disaster while also guiding them to a friendly port. They come in all shapes and sizes, and each has a story to tell. Learn about these iconic sentinels of the sea (and lakes).",
  },
  {
    name: "MUSEUM",
    sub: "museums",
    group: "THEMES",
    cnt: 10,
    desc: "A night at the museum? We'd need YEARS of exploration to get through all of these lovely homes of art, antiquity and ingenuity.",
  },
  {
    name: "NATURE",
    sub: "natures",
    group: "THEMES",
    cnt: 11,
    desc: "The great outdoors. Sights, sounds, smells. Nature is a wonderful spot to get lost.",
  },
];

localStorage.setItem("gotothemes", JSON.stringify(gotothemes));
localStorage.setItem("gotocolor", JSON.stringify(gotocolor));
