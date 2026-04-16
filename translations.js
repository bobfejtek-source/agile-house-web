/* Agile House - i18n translation strings
   EN (default) + CS
   Keep in sync with index.html data-i18n keys */

const translations = {
  en: {
    meta: {
      title: "Agile House - AI-First Digital Studio",
      description: "We pair founder ambition with AI-native execution. E-commerce brands, web apps, education platforms built from zero to live in weeks."
    },
    nav: {
      bookCall: "Book a call"
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
      tagline: "AI-first digital studio",
      title: 'We pair founder ambition with <span class="accent">AI-native execution.</span>',
      subtitle: "E-commerce brands, web apps, education platforms, strategic research - built from zero to live. Quarters compressed into weeks.",
      livePrompt: "LIVE PROMPT"
    },
    metrics: {
      productsShipped: "Products shipped",
      roasOnPaid: "ROAS on paid",
      dataPoints: "1,562",
      dataPointsEnriched: "Data points enriched",
      avgBuild: "<1 wk",
      averageBuildTime: "Average build time"
    },
    sections: {
      whatWeBuild: "What we build",
      howWeWork: "How we work",
      selectedWork: "Selected work",
      builtNotPitched: "Built, not pitched",
      pricing: "Pricing",
      whyAgileHouse: "Why Agile House"
    },
    services: {
      commerce: {
        category: "Commerce",
        title: "DTC brand launches",
        desc: "From product sourcing to first sale. Shopify builds with custom Liquid sections, conversion-optimized pages, and international fulfillment."
      },
      product: {
        category: "Product",
        title: "Full-stack web apps",
        desc: "Production-ready SaaS from scratch. Data pipelines, API integrations, SEO architecture, automated testing, and freemium monetization."
      },
      education: {
        category: "Education",
        title: "Learning platforms",
        desc: "End-to-end digital education products. Curriculum architecture, content production, community features, multi-tier monetization."
      },
      growth: {
        category: "Growth",
        title: "Acquisition & CRO",
        desc: "Paid acquisition strategy, Meta Ads campaign management, A/B testing, funnel optimization, and data-driven budget allocation."
      },
      strategy: {
        category: "Strategy",
        title: "Research & intelligence",
        desc: "Deep market research at founder speed. Competitive analysis, business cases, pricing strategy, and go-to-market planning backed by rigorous data."
      },
      ai: {
        category: "AI workflows",
        title: "Automation at scale",
        desc: "Expert-level AI prompting, agent pipelines, automated research synthesis, and content generation. AI as a core team member, not a tool."
      }
    },
    how: {
      step1: {
        num: "01 DISCOVER",
        title: "Understand your ambition",
        desc: "No 60-page briefs. We sit down, understand what you're building and why, and define the fastest path to a live product."
      },
      step2: {
        num: "02 RESEARCH",
        title: "Map the landscape",
        desc: "AI-powered competitive analysis, market sizing, pricing benchmarks, and regulatory checks. Days of research in hours."
      },
      step3: {
        num: "03 ARCHITECT",
        title: "AI-native design",
        desc: "We use AI agents to generate architecture, scaffold themes, and stress-test assumptions before a single line of code is written."
      },
      step4: {
        num: "04 BUILD",
        title: "Ship fast, ship real",
        desc: "Iterative development with AI-assisted coding. Custom Liquid sections, data pipelines, API integrations - all built and tested in parallel."
      },
      step5: {
        num: "05 SECURE & TEST",
        title: "Security first, always",
        desc: "Security audit, penetration testing, OWASP compliance checks, automated Playwright UAT, cross-browser testing, performance audits. AI-built does not mean cutting corners - it means we test faster and deeper than manual teams ever could."
      },
      step6: {
        num: "06 LAUNCH & SCALE",
        title: "Go live and grow",
        desc: "Deploy, launch ads, monitor conversion, optimize. You get a running machine with analytics and security monitoring, not a handoff document."
      }
    },
    speed: {
      title: "Traditional agency vs. Agile House",
      tradLabel: "Traditional agency",
      tradTime: "12-16 weeks",
      aiLabel: "Agile House + AI",
      aiTime: "2-4 weeks"
    },
    projects: {
      lumiglow: {
        desc: "DTC beauty-tech brand selling an LED mouthpiece for teeth whitening and lip therapy. Product sourcing, full Shopify store with 10+ custom sections, conversion-optimized product page, Meta Ads, DDP fulfillment to the UK.",
        metrics: "10 custom Liquid sections built in 5 days. Lighthouse score 94/100. Full DDP fulfillment pipeline configured.",
        status: "Live"
      },
      zoute: {
        desc: "Old Money / quiet luxury men's fashion brand. Full product catalog with SEO descriptions, custom collection grid, Meta Ads with CBO, PayPal checkout.",
        metrics: "3+ ROAS on Meta Ads, 4% conversion rate. Data-driven finding: static imagery outperformed video for cold traffic, UK audience converted 3x vs. Benelux.",
        status: "Live"
      },
      iron: {
        desc: "Full-stack web app aggregating 1,500+ gyms. Custom scraping pipeline (Firmy.cz, OSM), Google Places API enrichment, Cloudflare R2 photos, SEO with JSON-LD and dynamic sitemaps. Freemium SaaS monetization for gym owners.",
        metrics: "1,562 gyms live, 911 manually reviewed, Google Places API enrichment consuming only 160 CZK of 6,375 CZK budget.",
        status: "Live - scaling"
      },
      ecom: {
        desc: "Czech-language e-commerce education platform. Full curriculum architecture, learning paths from beginner to advanced, community features, multi-tier monetization. The go-to resource for Czech-speaking entrepreneurs entering e-commerce.",
        metrics: "50/50 international venture, CZ + Dubai. Full curriculum architecture with learning paths from beginner to advanced.",
        status: "Building",
        inDev: "IN DEVELOPMENT"
      },
      betting: {
        desc: "Data-driven mobile app for esports betting advisors. Real-time odds integration, portfolio tracking, performance analytics, and community-powered tips.",
        metrics: "Targeting a market growing 40%+ YoY with virtually no advisory tooling.",
        status: "Building",
        inDev: "IN DEVELOPMENT"
      }
    },
    results: {
      productsShipped: "Products shipped",
      dataPoints: "1,562",
      dataScraped: "Data points scraped and enriched",
      roasLabel: "ROAS on paid acquisition",
      convRateLabel: "Conversion rate",
      avgBuildLabel: "Average build time",
      avgBuildNum: "<1 wk",
      note: "Every project listed here is something we built, funded, and operate ourselves. No spec documents, no hand-offs - skin in the game from day one. That's the only proof of concept that matters."
    },
    pricing: {
      service: "Service",
      marketAvg: "Market average",
      agileHouse: "Agile House",
      row1: {
        name: "Shopify e-shop (custom theme, product pages, Meta Ads setup)",
        market: "70 000 - 165 000 CZK",
        price: "from 35 000 CZK"
      },
      row2: {
        name: "MVP web app",
        market: "460 000 - 1 400 000 CZK",
        price: "from 100 000 CZK"
      },
      row3: {
        name: "Strategy & research (market analysis, GTM, business case)",
        market: "115 000 - 690 000 CZK",
        price: "from 50 000 CZK"
      },
      row4: {
        name: "Hourly rate",
        market: "3 000 - 8 000 CZK/hr",
        price: "2 000 CZK/hr"
      },
      note: "All prices are indicative. Every project is unique - book a 15-minute call and get a precise quote within 24 hours.",
      bookConsultation: "Book a call"
    },
    why: {
      i: {
        title: "Save time",
        desc: "Our AI-first methodology compresses traditional agency timelines by 4-6x. What takes others a quarter, we ship in weeks. Your product is live while competitors are still in discovery."
      },
      ii: {
        title: "Save money",
        desc: "AI agents replace entire departments. You get top-tier strategy and full-stack development at a fraction of what a traditional agency charges. No bloated teams, no wasted retainers."
      },
      iii: {
        title: "Be ahead of the curve",
        desc: "We operate at the frontier of AI-augmented work. While others are just starting to experiment with AI, we've already shipped 5 products with it. You get a partner who's already where the industry is heading."
      },
      iv: {
        title: "AI-native, not AI-adjacent",
        desc: "Most agencies use AI as a buzzword. We build with AI agents as core team members. Every workflow - research, architecture, coding, testing - runs through frontier models."
      },
      v: {
        title: "Consulting brain, builder hands",
        desc: "Top-tier consulting strategic thinking meets hands-on execution. We don't hand you a PowerPoint and walk away. We build the product, launch the ads, and optimize the funnel."
      },
      vi: {
        title: "Secure by default",
        desc: "AI-built does not mean cutting corners. It means we test faster and deeper than manual teams ever could. OWASP audits, penetration testing, Playwright UAT, and Lighthouse performance checks on every single project."
      }
    },
    cta: {
      title: "Ready to build?",
      subtitle: "Tell us what you're building. We'll tell you how fast we can ship it.",
      bookCall: "Book a call",
      sendMessage: "Send us a message"
    },
    team: {
      tagline: "Built lean. Backed by AI.",
      desc: "Three people. Zero bureaucracy. AI agents that replace entire departments. You talk directly to the people who build. Every conversation is with someone who has skin in the game."
    },
    footer: {
      studio: "AI-first digital studio",
      country: "Czech Republic"
    },
    contact: {
      heading: "Send us a message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Tell us what you're building...",
      submit: "Send message",
      sending: "Sending...",
      fillAll: "Please fill in all fields.",
      invalidEmail: "Please enter a valid email.",
      success: "Message sent! We'll be in touch within 24 hours.",
      error: "Something went wrong. Email us at bohdan@agilehouse.cz"
    },
    chat: {
      placeholder: "Ask us anything..."
    }
  },

  cs: {
    meta: {
      title: "Agile House - AI-First digitální studio",
      description: "Spojujeme ambice zakladatelů s AI-native exekucí. E-commerce značky, webové aplikace a vzdělávací platformy od nuly k provozu v týdnech."
    },
    nav: {
      bookCall: "Domluvit hovor"
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
      tagline: "AI-first digitální studio",
      title: 'Spojujeme ambice zakladatelů s <span class="accent">AI-native exekucí.</span>',
      subtitle: "E-commerce značky, webové aplikace, vzdělávací platformy, strategický výzkum - od nuly k provozu. Čtvrtletí stlačená do týdnů.",
      livePrompt: "LIVE PROMPT"
    },
    metrics: {
      productsShipped: "Dodaných produktů",
      roasOnPaid: "ROAS na placené akvizici",
      dataPoints: "1\u00a0562",
      dataPointsEnriched: "Obohacených datových bodů",
      avgBuild: "<1 týden",
      averageBuildTime: "Průměrná doba vývoje"
    },
    sections: {
      whatWeBuild: "Co stavíme",
      howWeWork: "Jak pracujeme",
      selectedWork: "Vybrané projekty",
      builtNotPitched: "Postaveno, ne naslibováno",
      pricing: "Ceník",
      whyAgileHouse: "Proč Agile House"
    },
    services: {
      commerce: {
        category: "Commerce",
        title: "DTC brand launches",
        desc: "Od sourcingu produktu k první objednávce. Shopify weby s custom Liquid sekcemi, konverzně optimalizovanými stránkami a mezinárodním fulfillmentem."
      },
      product: {
        category: "Product",
        title: "Full-stack web apps",
        desc: "Production-ready SaaS od nuly. Datové pipeliny, API integrace, SEO architektura, automatizované testování a freemium monetizace."
      },
      education: {
        category: "Education",
        title: "Learning platforms",
        desc: "End-to-end digitální vzdělávací produkty. Architektura kurikula, tvorba obsahu, komunitní funkce, vícestupňová monetizace."
      },
      growth: {
        category: "Growth",
        title: "Acquisition & CRO",
        desc: "Strategie placené akvizice, správa Meta Ads kampaní, A/B testování, optimalizace funnelu a data-driven alokace rozpočtu."
      },
      strategy: {
        category: "Strategy",
        title: "Research & intelligence",
        desc: "Hloubkový tržní výzkum v tempu zakladatele. Konkurenční analýza, business case, cenová strategie a go-to-market plánování podložené tvrdými daty."
      },
      ai: {
        category: "AI workflows",
        title: "Automation at scale",
        desc: "Expertní AI prompting, agentové pipeliny, automatizovaná syntéza výzkumu a generování obsahu. AI jako plnohodnotný člen týmu, ne nástroj."
      }
    },
    how: {
      step1: {
        num: "01 POZNAT",
        title: "Pochopíme vaši ambici",
        desc: "Žádné 60stránkové briefy. Sedneme si, pochopíme, co stavíte a proč, a definujeme nejrychlejší cestu k živému produktu."
      },
      step2: {
        num: "02 ZMAPOVAT",
        title: "Zmapujeme terén",
        desc: "AI-poháněná konkurenční analýza, odhad velikosti trhu, cenové benchmarky a regulatorní kontroly. Dny výzkumu v hodinách."
      },
      step3: {
        num: "03 NAVRHNOUT",
        title: "AI-native návrh",
        desc: "Používáme AI agenty k vygenerování architektury, scaffoldingu témat a stress-testování předpokladů dřív, než se napíše první řádek kódu."
      },
      step4: {
        num: "04 POSTAVIT",
        title: "Dodáváme rychle, dodáváme skutečně",
        desc: "Iterativní vývoj s AI-asistovaným kódováním. Custom Liquid sekce, datové pipeliny, API integrace - vše stavěno a testováno paralelně."
      },
      step5: {
        num: "05 ZABEZPEČIT & OTESTOVAT",
        title: "Bezpečnost vždy na prvním místě",
        desc: "Bezpečnostní audit, penetrační testy, OWASP compliance kontroly, automatizované Playwright UAT, cross-browser testování, performance audity. AI-built neznamená šetřit - znamená to, že testujeme rychleji a hlouběji, než kdy dokázaly manuální týmy."
      },
      step6: {
        num: "06 SPUSTIT & ŠKÁLOVAT",
        title: "Spustit a růst",
        desc: "Nasazení, spuštění kampaní, monitoring konverzí, optimalizace. Dostanete funkční stroj s analytikou a bezpečnostním monitoringem, ne předávací dokument."
      }
    },
    speed: {
      title: "Tradiční agentura vs. Agile House",
      tradLabel: "Tradiční agentura",
      tradTime: "12-16 týdnů",
      aiLabel: "Agile House + AI",
      aiTime: "2-4 týdny"
    },
    projects: {
      lumiglow: {
        desc: "DTC beauty-tech značka prodávající LED náústek pro bělení zubů a péči o rty. Sourcing produktu, kompletní Shopify e-shop s 10+ custom sekcemi, konverzně optimalizovaná produktová stránka, Meta Ads, DDP fulfillment do UK.",
        metrics: "10 custom Liquid sekcí postavených za 5 dní. Lighthouse skóre 94/100. Kompletní DDP fulfillment pipeline nakonfigurována.",
        status: "V provozu"
      },
      zoute: {
        desc: "Old Money / quiet luxury pánská módní značka. Kompletní katalog produktů se SEO popisky, custom collection grid, Meta Ads s CBO, PayPal checkout.",
        metrics: "3+ ROAS na Meta Ads, 4% konverzní poměr. Data-driven zjištění: statické vizuály překonaly video na cold traffic, UK publikum konvertovalo 3x lépe než Benelux.",
        status: "V provozu"
      },
      iron: {
        desc: "Full-stack webová aplikace agregující 1\u00a0500+ fitness center. Custom scraping pipeline (Firmy.cz, OSM), obohacení přes Google Places API, fotografie na Cloudflare R2, SEO s JSON-LD a dynamickými sitemapami. Freemium SaaS monetizace pro majitele fitek.",
        metrics: "1\u00a0562 fitek v provozu, 911 ručně zkontrolovaných, Google Places API obohacení spotřebovalo pouze 160 Kč z rozpočtu 6\u00a0375 Kč.",
        status: "V provozu - škálujeme"
      },
      ecom: {
        desc: "Česká e-commerce vzdělávací platforma. Kompletní architektura kurikula, vzdělávací cesty od začátečníka k pokročilému, komunitní funkce, vícestupňová monetizace. Hlavní zdroj pro česky mluvící podnikatele vstupující do e-commerce.",
        metrics: "50/50 mezinárodní joint venture, ČR + Dubaj. Kompletní architektura kurikula se vzdělávacími cestami od začátečníka k pokročilému.",
        status: "Staví se",
        inDev: "VE VÝVOJI"
      },
      betting: {
        desc: "Data-driven mobilní aplikace pro esports betting poradce. Real-time integrace kurzů, sledování portfolia, výkonnostní analytika a community-powered tipy.",
        metrics: "Cílíme na trh rostoucí 40%+ meziročně s prakticky žádnými poradenskými nástroji.",
        status: "Staví se",
        inDev: "VE VÝVOJI"
      }
    },
    results: {
      productsShipped: "Dodaných produktů",
      dataPoints: "1\u00a0562",
      dataScraped: "Obohacených datových bodů",
      roasLabel: "ROAS na placené akvizici",
      convRateLabel: "Konverzní poměr",
      avgBuildLabel: "Průměrná doba vývoje",
      avgBuildNum: "<1 týden",
      note: "Nemáme reference, protože zatím nemáme klienty - máme vlastní produkty. Každý projekt uvedený výše je něco, co jsme sami postavili, zafinancovali a provozujeme. To je ten nejsilnější proof of concept."
    },
    pricing: {
      service: "Služba",
      marketAvg: "Tržní průměr",
      agileHouse: "Agile House",
      row1: {
        name: "Shopify e-shop (custom šablona, produktové stránky, nastavení Meta Ads)",
        market: "70\u00a0000 - 165\u00a0000 Kč",
        price: "od 35\u00a0000 Kč"
      },
      row2: {
        name: "MVP webová aplikace",
        market: "460\u00a0000 - 1\u00a0400\u00a0000 Kč",
        price: "od 100\u00a0000 Kč"
      },
      row3: {
        name: "Strategie & výzkum (tržní analýza, GTM, business case)",
        market: "115\u00a0000 - 690\u00a0000 Kč",
        price: "od 50\u00a0000 Kč"
      },
      row4: {
        name: "Hodinová sazba",
        market: "3\u00a0000 - 8\u00a0000 Kč/hod",
        price: "2\u00a0000 Kč/hod"
      },
      note: "Všechny ceny jsou orientační. Každý projekt je jedinečný - domluvte si 15minutový hovor a dostanete přesnou nabídku do 24 hodin.",
      bookConsultation: "Domluvit hovor"
    },
    why: {
      i: {
        title: "Ušetřete čas",
        desc: "Naše AI-first metodika stlačí tradiční agenturní timeline 4-6x. Co jiným trvá čtvrtletí, my dodáme v týdnech. Váš produkt je živý, zatímco konkurence je stále ve fázi discovery."
      },
      ii: {
        title: "Ušetřete peníze",
        desc: "AI agenti nahrazují celá oddělení. Dostanete špičkovou strategii a full-stack vývoj za zlomek ceny tradiční agentury. Žádné nafouklé týmy, žádné promarněné retainery."
      },
      iii: {
        title: "Buďte napřed",
        desc: "Pohybujeme se na hranici AI-augmented práce. Zatímco ostatní teprve začínají s AI experimentovat, my už s ní dodali 5 produktů. Získáte partnera, který je už tam, kam celý obor směřuje."
      },
      iv: {
        title: "AI-native, ne AI-adjacent",
        desc: "Většina agentur používá AI jako buzzword. My stavíme s AI agenty jako plnohodnotnými členy týmu. Každý workflow - výzkum, architektura, kódování, testování - běží přes frontier modely."
      },
      v: {
        title: "Konzultantská hlava, ruce buildera",
        desc: "Špičkové konzultantské strategické myšlení se potkává s hands-on exekucí. Nepředáme vám PowerPoint a nezmizíme. Postavíme produkt, spustíme kampaně a optimalizujeme funnel."
      },
      vi: {
        title: "Bezpečné z principu",
        desc: "AI-built neznamená šetřit. Znamená to, že testujeme rychleji a hlouběji, než kdy dokázaly manuální týmy. OWASP audity, penetrační testy, Playwright UAT a Lighthouse performance kontroly na každém jednotlivém projektu."
      }
    },
    cta: {
      title: "Připraveni stavět?",
      subtitle: "Řekněte nám, co stavíte. My vám řekneme, jak rychle to dodáme.",
      bookCall: "Domluvit hovor",
      sendMessage: "Napište nám"
    },
    team: {
      tagline: "Štíhlý tým. Pohnáno AI.",
      desc: "Tři lidé. Nulová byrokracie. AI agenti, kteří nahrazují celá oddělení. Mluvíte přímo s lidmi, kteří staví. Každá konverzace je s někým, kdo má vlastní kůži ve hře."
    },
    footer: {
      studio: "AI-first digitální studio",
      country: "Česká republika"
    },
    contact: {
      heading: "Napište nám",
      namePlaceholder: "Vaše jméno",
      emailPlaceholder: "Váš e-mail",
      messagePlaceholder: "Řekněte nám, co stavíte...",
      submit: "Odeslat zprávu",
      sending: "Odesílám...",
      fillAll: "Prosím vyplňte všechna pole.",
      invalidEmail: "Prosím zadejte platný e-mail.",
      success: "Zpráva odeslána! Ozveme se do 24 hodin.",
      error: "Něco se pokazilo. Napište nám na bohdan@agilehouse.cz"
    },
    chat: {
      placeholder: "Zeptejte se nás na cokoliv..."
    }
  }
};
             