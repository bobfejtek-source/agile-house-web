/* Agile House - i18n translation strings
   EN (default) + CS
   Keep in sync with index.html data-i18n keys
   Core narrative: Every website has a story. We build ones that actually tell it. */

const translations = {
  en: {
    meta: {
      title: "Agile House - Every website has a story",
      description: "We build e-shops, apps and websites that tell your story and actually sell. Small family studio powered by AI. Live in weeks, not months."
    },
    nav: {
      fitnessWebs: "Fitness websites",
      bookCall: "Let's talk"
    },
    pipeline: {
      research: "RESEARCH",
      design: "DESIGN",
      build: "BUILD",
      test: "TEST",
      ship: "SHIP",
      shipped: "SHIPPED"
    },
    hero: {
      tagline: "Small studio. Big AI firepower.",
      title: 'Every website has a <span class="accent">story.</span> We build ones that tell it.',
      subtitle: "E-shops, web apps, learning platforms - built from scratch around your business. No templates, no jargon, no 60-page briefs. Just a website that actually sells, live in weeks.",
      livePrompt: "WHAT WE'RE WORKING ON"
    },
    metrics: {
      productsShipped: "Products shipped",
      roasOnPaid: "Return on ad spend",
      dataPoints: "1,562",
      dataPointsEnriched: "Businesses in our database",
      avgBuild: "<1 wk",
      averageBuildTime: "Average time to launch"
    },
    sections: {
      whatWeBuild: "What we build for you",
      howWeWork: "How we work",
      selectedWork: "Our stories",
      builtNotPitched: "Results speak, not slides",
      pricing: "What it costs",
      whyAgileHouse: "Why us"
    },
    services: {
      commerce: {
        category: "E-shop",
        title: "An e-shop with a story",
        desc: "From the first idea to the first order. We find the product, build the shop, write the copy, launch the ads. You do not get a template - you get a website that tells your brand's story and actually sells."
      },
      product: {
        category: "Web app",
        title: "A custom web app",
        desc: "Got an idea for an app, service or online tool? We build it from zero. Fast, reliable, ready for thousands of users. And done in weeks, not a year."
      },
      education: {
        category: "Online courses",
        title: "A platform for your know-how",
        desc: "You know something people want to learn. We build the place where they pay for it. Courses, lessons, community, memberships - everything under one roof."
      },
      growth: {
        category: "Ads",
        title: "Ads that actually pay back",
        desc: "Meta, Google, testing, tuning. We do not care about spending your budget. We care about every koruna coming back with interest. Numbers over guesses."
      },
      strategy: {
        category: "Strategy",
        title: "Research and a clear plan",
        desc: "Before we build, we look at what your competitors do, what customers actually want, what price they will pay. No 100-page decks. Just a clear decision and a plan you can act on."
      },
      ai: {
        category: "AI",
        title: "AI that works for you",
        desc: "We help you save hours every day. Automated replies, data processing, reports, content. AI does not replace people - it gives you more time for what matters."
      }
    },
    how: {
      step1: {
        num: "01 LISTEN",
        title: "You tell us what you're building",
        desc: "No 60-page briefs. We sit down over coffee or Zoom and you tell us your story. What makes your business different? Who buys from you? What do you want to be known for?"
      },
      step2: {
        num: "02 LOOK AROUND",
        title: "We get to know your market",
        desc: "We check what competitors are doing, what people are searching for, how they behave. With AI we do in hours what takes a traditional agency weeks."
      },
      step3: {
        num: "03 DRAW IT UP",
        title: "We design the whole thing",
        desc: "Look, structure, copy, what goes where. We keep asking the same question: does this help your customer? Does it sell? Does it tell your story?"
      },
      step4: {
        num: "04 BUILD",
        title: "Fast. And properly.",
        desc: "We code, fill in content, tune the details. With AI we build in a week what a traditional agency ships in a quarter. And the result is not worse - it is better."
      },
      step5: {
        num: "05 TEST",
        title: "Nothing ships half-done",
        desc: "Security, speed, how it behaves on mobile and desktop. Everything goes through checks. AI lets us test faster and deeper than manual teams ever could - not instead of people, but alongside them."
      },
      step6: {
        num: "06 LAUNCH",
        title: "Go live and grow",
        desc: "The site is out, ads are running, orders are coming in. We watch what works and what doesn't, and keep tuning. We don't hand you a website and vanish - we stick around until it hums."
      }
    },
    speed: {
      title: "How long does it take?",
      tradLabel: "Traditional agency",
      tradTime: "3-4 months",
      aiLabel: "Agile House with AI",
      aiTime: "2-4 weeks"
    },
    projects: {
      lumiglow: {
        desc: "A beauty-tech brand with an LED mouthpiece for teeth whitening and lip care. We helped with the whole journey: sourcing the product, building the shop, launching Meta ads, and shipping directly to the UK. Shopify with 10 custom sections.",
        metrics: "10 custom sections built in 5 days. Site speed 94 out of 100. Full UK logistics set up.",
        status: "Live"
      },
      zoute: {
        desc: "Men's fashion in the quiet-luxury, Old Money style. For the UK market. We built the full catalogue, wrote SEO descriptions, launched Meta ads and set up payments.",
        metrics: "3x return on ad spend, 4% conversion rate. We learned that static photos outperformed video, and that UK buyers converted 3x more than Benelux.",
        status: "Live"
      },
      iron: {
        desc: "A portal that gathers 1,500+ gyms in Czechia. Our bots pulled data from Firmy.cz and OpenStreetMap, enriched it through Google with photos and ratings. Gym owners can sign up and promote themselves - we get a freemium SaaS business.",
        metrics: "1,562 gyms live, 911 manually reviewed. Google cost us 160 CZK out of a 6,375 CZK budget. The rest goes into growth.",
        status: "Live - growing"
      },
      lipa: {
        desc: "A showcase of what we can do for smaller businesses. A fitness studio in Ceska Lipa got a site with a video intro, services (gym, classes, personal training, wellness), trainer bios and a booking system. And it's a template we can re-colour just as easily for yoga, crossfit or any local brand.",
        metrics: "Ready-made sections easy to adapt. Runs as a live demo next to our fitness template landing.",
        status: "Live demo"
      },
      ecom: {
        desc: "A Czech-language education platform for entrepreneurs going into e-commerce. The full course structure from absolute beginner to advanced, a community, several membership tiers. Currently the only serious resource of its kind in Czech.",
        metrics: "50/50 partnership between Czechia and Dubai. The curriculum covers the journey from idea to a live online shop.",
        status: "Live"
      },
      betting: {
        desc: "A mobile app for people who advise on esports betting. Live odds, portfolio overview, performance over time, tips from the community.",
        metrics: "We're targeting a market growing 40%+ a year with no real tool of its kind yet.",
        status: "Building",
        inDev: "IN DEVELOPMENT"
      },
      visitSite: "Take a look ->"
    },
    results: {
      productsShipped: "Products shipped",
      dataPoints: "1,562",
      dataScraped: "Businesses in our database",
      roasLabel: "Return on ad spend",
      convRateLabel: "Conversion rate",
      avgBuildLabel: "Average time to launch",
      avgBuildNum: "<1 wk",
      note: "We don't have a 'What our clients say' section. We have our own e-shops, apps and websites instead - every one you see above is something we built, funded and run ourselves. When something breaks, we feel it in our own pocket. That's the best proof we know what we're doing."
    },
    pricing: {
      service: "What you need",
      marketAvg: "Usual price",
      agileHouse: "Our price",
      row1: {
        name: "Shopify e-shop (custom design, product pages, Meta Ads setup)",
        market: "70 000 - 165 000 CZK",
        price: "from 35 000 CZK"
      },
      row2: {
        name: "Web or mobile app",
        market: "460 000 - 1 400 000 CZK",
        price: "from 100 000 CZK"
      },
      row3: {
        name: "Market research and strategy",
        market: "115 000 - 690 000 CZK",
        price: "from 50 000 CZK"
      },
      row4: {
        name: "Hourly rate",
        market: "3 000 - 8 000 CZK/hr",
        price: "2 000 CZK/hr"
      },
      note: "Prices are just for orientation. Every project is different - tell us what you need and we'll send a precise quote within 24 hours.",
      bookConsultation: "Book 15 minutes"
    },
    why: {
      i: {
        title: "You save time",
        desc: "With AI we build in 2-4 weeks what other agencies take 3-4 months to deliver. Your product is out in the world before competitors finish their first meeting. Being first is how you win."
      },
      ii: {
        title: "You save money",
        desc: "Big agencies charge you for a big team, long meetings and a lot of paperwork. We put AI where whole departments used to sit - and you get the same result for a fraction of the cost. No filler, no hidden fees."
      },
      iii: {
        title: "You get a partner, not a vendor",
        desc: "We're not the agency that drops a project manager on you, sends an invoice and disappears. We build like founders - every project is treated as if it were ours. You talk directly to the people writing the code and the copy."
      },
      iv: {
        title: "AI is in our spine, not our flyer",
        desc: "Most agencies put 'AI' on their website and call it a day. We actually work with AI every single day. Research, design, code, testing - models like Claude help and check at every step. That's why we're fast and affordable."
      },
      v: {
        title: "Strategy in the same pair of hands",
        desc: "Bohdan spent years helping large companies through big transformations. He now brings that same strategic head to building websites and apps. You don't just get a good-looking site - you get someone who helps you figure out why it should exist in the first place."
      },
      vi: {
        title: "Security is the default, not a line item",
        desc: "Building with AI doesn't mean cutting corners. It means we test faster and deeper. Every project goes through security checks, load tests and code reviews before it ships."
      }
    },
    cta: {
      title: "Let's build",
      subtitle: "Tell us what you're working on. We'll tell you how soon it can be live.",
      bookCall: "Book 15 minutes",
      sendMessage: "Write to us"
    },
    team: {
      tagline: "Small team. Full reach.",
      desc: "Three people. No HR, no marketing department, no account managers. Instead, AI that does the work of whole teams. You talk directly to the people building your site - not to someone whose job is to send you invoices.",
      cred1Role: "Senior Transformation Lead",
      cred1Place: "McKinsey & Company",
      cred1Detail: "200+ global teams, agile maturity frameworks",
      cred2Role: "Director, Strategic Transformation",
      cred2Place: "UBS (Credit Suisse integration)",
      cred2Detail: "75% reduction in product launch cycles",
      cred3Role: "Advanced Management Program",
      cred3Place: "Harvard Business School",
      cred3Detail: ""
    },
    footer: {
      studio: "Digital studio with AI",
      country: "Czech Republic"
    },
    contact: {
      heading: "Write to us",
      namePlaceholder: "What should we call you?",
      emailPlaceholder: "Where should we reply?",
      messagePlaceholder: "What's the project about? What are you trying to do?",
      submit: "Send",
      sending: "Sending...",
      fillAll: "Please fill in all fields.",
      invalidEmail: "That email doesn't look right.",
      success: "Message received. We'll be in touch within 24 hours.",
      error: "Something went wrong. Try writing to bob.fejtek@gmail.com"
    },
    chat: {
      placeholder: "Ask us anything..."
    }
  },

  cs: {
    meta: {
      title: "Agile House - Kazdy web ma svuj pribeh",
      description: "Stavime e-shopy, aplikace a weby, ktere vypravi pribeh vasi znacky a hlavne prodavaji. Male rodinne studio s AI v patere. V provozu za tydny, ne mesice."
    },
    nav: {
      fitnessWebs: "Weby pro fitness",
      bookCall: "Pojďme si promluvit"
    },
    pipeline: {
      research: "ZMAPOVAT",
      design: "NAVRHNOUT",
      build: "POSTAVIT",
      test: "OTESTOVAT",
      ship: "SPUSTIT",
      shipped: "SPUŠTĚNO"
    },
    hero: {
      tagline: "Malé studio. Velká síla AI.",
      title: 'Každý web má svůj <span class="accent">příběh.</span> My ho umíme vyprávět.',
      subtitle: "Stavíme e-shopy, webové aplikace a vzdělávací platformy na míru vašemu podnikání. Žádné šablony, žádné cizí pojmy, žádné 60stránkové dotazníky. Jen web, který opravdu prodává. Spouštíme v řádu týdnů.",
      livePrompt: "PRÁVĚ TEĎ STAVÍME"
    },
    metrics: {
      productsShipped: "Hotových projektů",
      roasOnPaid: "Vrácených korun z reklamy",
      dataPoints: "1\u00a0562",
      dataPointsEnriched: "Firem v naší databázi",
      avgBuild: "<1 týden",
      averageBuildTime: "Průměrná doba do spuštění"
    },
    sections: {
      whatWeBuild: "Co pro vás postavíme",
      howWeWork: "Jak to děláme",
      selectedWork: "Naše příběhy",
      builtNotPitched: "Mluví za nás výsledky, ne prezentace",
      pricing: "Kolik to stojí",
      whyAgileHouse: "Proč my"
    },
    services: {
      commerce: {
        category: "E-shop",
        title: "E-shop s příběhem",
        desc: "Od prvního nápadu až po první objednávku. Najdeme produkt, postavíme e-shop, napíšeme texty, spustíme reklamu. Nedostanete šablonu, ale web, který vypráví příběh vaší značky a opravdu prodává."
      },
      product: {
        category: "Aplikace",
        title: "Webová aplikace na míru",
        desc: "Máte nápad na aplikaci, službu nebo online nástroj? Postavíme ji od nuly. Rychlá, spolehlivá, připravená na tisíce uživatelů. A hotová v řádu týdnů, ne roku."
      },
      education: {
        category: "Online kurzy",
        title: "Platforma pro vaše know-how",
        desc: "Umíte něco, co se lidé chtějí naučit. My postavíme místo, kde vám za to zaplatí. Kurzy, lekce, komunita, členství - všechno pod jednou střechou."
      },
      growth: {
        category: "Reklama",
        title: "Reklama, která vydělává",
        desc: "Meta, Google, testování, ladění. Nejde nám o to utratit váš rozpočet. Jde nám o to, aby se každá koruna vrátila s úrokem. Čísla místo domněnek."
      },
      strategy: {
        category: "Strategie",
        title: "Průzkum trhu a jasný plán",
        desc: "Než něco začneme stavět, podíváme se, co dělá konkurence, co lidé opravdu chtějí, kolik jsou ochotni zaplatit. Žádné stostránkové prezentace. Jen jasné rozhodnutí a plán, podle kterého můžete jednat."
      },
      ai: {
        category: "AI",
        title: "AI, která pracuje pro vás",
        desc: "Pomůžeme vám ušetřit hodiny denně. Automatické odpovědi zákazníkům, zpracování dat, reporty, obsah. AI nenahrazuje lidi - dává vám víc času na to podstatné."
      }
    },
    how: {
      step1: {
        num: "01 POSLOUCHÁME",
        title: "Povíte nám, co stavíte",
        desc: "Žádné 60stránkové dotazníky. Sedneme si nad kávou nebo přes Zoom a vy nám řeknete váš příběh. Čím je vaše podnikání jiné? Kdo u vás kupuje? V čem chcete být ti nejlepší?"
      },
      step2: {
        num: "02 ROZHLÉDNEME SE",
        title: "Poznáme váš trh",
        desc: "Koukneme se, co dělá konkurence, co lidé hledají, jak se chovají. S AI máme za pár hodin to, na co tradiční agentura potřebuje týdny."
      },
      step3: {
        num: "03 NAKRESLÍME TO",
        title: "Navrhneme, jak to bude vypadat",
        desc: "Vzhled, strukturu, texty, co kam patří. Pořád se ptáme jednu a tu samou otázku: pomáhá to vašemu zákazníkovi? Prodává to? Vypráví to váš příběh?"
      },
      step4: {
        num: "04 STAVÍME",
        title: "Rychle. A pořádně.",
        desc: "Kódujeme, plníme obsah, ladíme detaily. S AI stihneme za týden to, co tradiční agentura staví čtvrtletí. A výsledek není horší, naopak."
      },
      step5: {
        num: "05 TESTUJEME",
        title: "Nic nepouštíme napůl",
        desc: "Bezpečnost, rychlost, chování na mobilu i počítači. Všechno projde kontrolou. AI nám umožňuje testovat rychleji a důkladněji, než kdy zvládly ruční týmy. Ne místo lidí, ale vedle nich."
      },
      step6: {
        num: "06 SPOUŠTÍME",
        title: "Jdeme do světa a rosteme",
        desc: "Web je venku, reklama běží, objednávky chodí. Sledujeme, co funguje a co ne, a ladíme dál. Nedáme vám jen klíče a nezmizíme. Zůstáváme s vámi, dokud to neběží jako hodinky."
      }
    },
    speed: {
      title: "Jak dlouho to trvá?",
      tradLabel: "Tradiční agentura",
      tradTime: "3-4 měsíce",
      aiLabel: "Agile House s AI",
      aiTime: "2-4 týdny"
    },
    projects: {
      lumiglow: {
        desc: "Kosmetická značka s LED náústkem na bělení zubů a péči o rty. Pomohli jsme s celou cestou: od výběru produktu přes stavbu e-shopu až po první prodeje ve Velké Británii. Shopify s 10 vlastními sekcemi, reklama na Meta, doručení přímo britskému zákazníkovi.",
        metrics: "10 vlastních sekcí postavených za 5 dní. Rychlost webu 94 ze 100. Kompletní logistika do UK nastavená.",
        status: "V provozu"
      },
      zoute: {
        desc: "Pánská móda ve stylu tiché elegance pro britský trh. Postavili jsme celý katalog produktů, napsali SEO popisy, spustili reklamy na Meta a nastavili platební bránu.",
        metrics: "Třikrát vyšší tržba než náklady na reklamu, 4% konverze. Zjistili jsme, že statické fotky fungují lépe než videa, a že britský zákazník nakupuje třikrát víc než belgický nebo holandský.",
        status: "V provozu"
      },
      iron: {
        desc: "Portál, který sdružuje přes 1\u00a0500 fitness center v České republice. Naši roboti si stáhli data z Firmy.cz a OpenStreetMap, přes Google doplnili fotky a hodnocení. Majitelé fitek se mohou registrovat a propagovat - my tak budujeme freemium byznys.",
        metrics: "1\u00a0562 fitek v provozu, 911 ručně zkontrolovaných. Google nás stál jen 160 Kč z rozpočtu 6\u00a0375 Kč. Zbytek jde do růstu.",
        status: "V provozu - rosteme"
      },
      lipa: {
        desc: "Ukázka toho, co umíme pro menší firmy. Fitness studio v České Lípě dostalo web s video úvodem, přehledem služeb (posilovna, lekce, osobní trenéři, wellness), profily trenérů a rezervacemi. A je to šablona, kterou stejně snadno přebarvíme pro jógu, crossfit nebo kteroukoliv lokální značku.",
        metrics: "Hotové sekce připravené k úpravě. Funguje jako živé demo vedle naší fitness šablony.",
        status: "Živé demo"
      },
      ecom: {
        desc: "Česká vzdělávací platforma pro podnikatele, kteří chtějí vstoupit do e-commerce. Celá struktura kurzů od úplného začátečníka po pokročilého, komunita, několik úrovní členství. Aktuálně jediný seriózní zdroj svého druhu v češtině.",
        metrics: "Partnerství 50/50 mezi Českem a Dubajem. Kurz pokrývá cestu od nápadu až k funkčnímu e-shopu.",
        status: "V provozu"
      },
      betting: {
        desc: "Mobilní aplikace pro lidi, kteří radí při sázení na esports. Aktuální kurzy, přehled portfolia, výkon v čase a tipy od komunity.",
        metrics: "Cílíme na trh, který roste víc než 40 % ročně a zatím tam žádný pořádný nástroj není.",
        status: "Staví se",
        inDev: "VE VÝVOJI"
      },
      visitSite: "Podívat se ->"
    },
    results: {
      productsShipped: "Hotových projektů",
      dataPoints: "1\u00a0562",
      dataScraped: "Firem v naší databázi",
      roasLabel: "Vrácených korun z reklamy",
      convRateLabel: "Lidí, kteří koupí",
      avgBuildLabel: "Průměrná doba do spuštění",
      avgBuildNum: "<1 týden",
      note: "Nemáme sekci 'Co o nás říkají klienti'. Místo toho máme vlastní e-shopy, aplikace a weby. Každý projekt, který tu vidíte, jsme sami postavili, zafinancovali a provozujeme. Když něco nefunguje, cítíme to ve vlastní kapse. To je pro nás nejlepší důkaz, že víme, co děláme."
    },
    pricing: {
      service: "Co potřebujete",
      marketAvg: "Obvyklá cena",
      agileHouse: "U nás",
      row1: {
        name: "E-shop na Shopify (vlastní vzhled, produktové stránky, nastavení reklamy)",
        market: "70\u00a0000 - 165\u00a0000 Kč",
        price: "od 35\u00a0000 Kč"
      },
      row2: {
        name: "Webová nebo mobilní aplikace",
        market: "460\u00a0000 - 1\u00a0400\u00a0000 Kč",
        price: "od 100\u00a0000 Kč"
      },
      row3: {
        name: "Průzkum trhu a strategie",
        market: "115\u00a0000 - 690\u00a0000 Kč",
        price: "od 50\u00a0000 Kč"
      },
      row4: {
        name: "Hodinová sazba",
        market: "3\u00a0000 - 8\u00a0000 Kč/hod",
        price: "2\u00a0000 Kč/hod"
      },
      note: "Ceny jsou jen pro představu. Každý projekt je jiný. Řekněte nám, co potřebujete, a do 24 hodin máte přesnou nabídku.",
      bookConsultation: "Domluvit 15 minut"
    },
    why: {
      i: {
        title: "Ušetříte čas",
        desc: "S AI stihneme za 2-4 týdny to, na co jiné agentury potřebují 3-4 měsíce. Váš produkt je v provozu dřív, než konkurence stihne první poradu. Být první znamená vyhrát."
      },
      ii: {
        title: "Ušetříte peníze",
        desc: "Velké agentury si účtují velký tým, dlouhá jednání a hromady papírů. My místo celých oddělení nasazujeme AI, a vy dostanete stejný výsledek za zlomek ceny. Žádná vata, žádné skryté poplatky."
      },
      iii: {
        title: "Máte partnera, ne dodavatele",
        desc: "Nejsme agentura, která vám posadí projekťáka, pošle fakturu a zmizí. Stavíme jako zakladatelé. Na každý projekt se díváme jako na svůj vlastní. Mluvíte přímo s lidmi, kteří píší kód a texty."
      },
      iv: {
        title: "AI máme v páteři, ne v letáku",
        desc: "Většina agentur napíše 'AI' na web a tím to končí. My s AI pracujeme každý den. Průzkum, návrh, kód, testování - ve všem nám pomáhají a kontrolují modely jako Claude. Proto jsme rychlí a dostupní."
      },
      v: {
        title: "Strategie v jedněch rukou",
        desc: "Bohdan roky pomáhal velkým firmám s transformacemi. Teď stejnou strategickou hlavu dává do webů a aplikací. Nedostanete jen pěkný web. Dostanete někoho, kdo vám pomůže vymyslet, proč vůbec existovat."
      },
      vi: {
        title: "Bezpečnost je samozřejmost, ne nadstavba",
        desc: "To, že něco postavila AI, neznamená, že se na něčem šetřilo. Znamená to, že testujeme rychleji a důkladněji. Každý projekt projde kontrolou bezpečnosti, zátěže i chyb v kódu, než ho pustíme ven."
      }
    },
    cta: {
      title: "Pojďme stavět",
      subtitle: "Povíte nám, na čem pracujete. My vám řekneme, za jak dlouho to bude v provozu.",
      bookCall: "Domluvit 15 minut",
      sendMessage: "Napište nám"
    },
    team: {
      tagline: "Malý tým. Velký záběr.",
      desc: "Tři lidé. Žádné HR, žádný marketing, žádní projekťáci. Místo toho AI, která dělá práci celých týmů. Mluvíte přímo s lidmi, kteří váš web staví. Ne s někým, kdo má za úkol vám posílat faktury.",
      cred1Role: "Vedoucí transformací",
      cred1Place: "McKinsey & Company",
      cred1Detail: "200+ globálních týmů, agilní rámce",
      cred2Role: "Ředitel strategické transformace",
      cred2Place: "UBS (integrace Credit Suisse)",
      cred2Detail: "75 % kratší uvádění produktů na trh",
      cred3Place: "Harvard Business School",
      cred3Detail: ""
    },
    footer: {
      studio: "Digitální studio s AI",
      country: "Česká republika"
    },
    contact: {
      heading: "Napište nám",
      namePlaceholder: "Jak vám máme říkat?",
      emailPlaceholder: "Na jaký e-mail se ozveme?",
      messagePlaceholder: "O čem je váš projekt? O co vám jde?",
      submit: "Odeslat",
      sending: "Odesílám...",
      fillAll: "Prosím vyplňte všechna pole.",
      invalidEmail: "E-mail nevypadá správně.",
      success: "Zpráva dorazila. Ozveme se do 24 hodin.",
      error: "Něco se pokazilo. Zkuste nám napsat na bob.fejtek@gmail.com."
    },
    chat: {
      placeholder: "Zeptejte se nás na cokoliv..."
    }
  }
};

// Ensure global availability regardless of const scoping behaviour
window.translations = translations;
