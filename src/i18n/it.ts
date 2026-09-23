const it = {
  // Navbar
  nav_about:      'Chi sono',
  nav_skills:     'Competenze',
  nav_experience: 'Esperienza',
  nav_projects:   'Progetti',
  nav_contact:    'Contatti',
  nav_theme_dark:  'Passa alla modalità scura',
  nav_theme_light: 'Passa alla modalità chiara',
  nav_menu_toggle: 'Apri menu',

  // Hero
  hero_label:    'Sviluppatore frontend · Palermo, Italia',
  hero_tagline1: 'React e React Native, dal web al telefono.',
  hero_cta:      'Parliamo di un ruolo',
  hero_cta_work: 'Guarda i lavori',

  // About
  about_label: 'Chi sono',
  about_quote: '"Se non posso misurarlo, non lo dichiaro."',
  about_bio_1: "Sono un frontend engineer a Palermo. Costruisco le cose che la gente apre ogni giorno — un pianificatore di studio, una piattaforma di telemedicina, un'interfaccia di ricerca AI per commercialisti — soprattutto in React e TypeScript, sempre più in React Native.",
  about_bio_2: 'Cinque anni tra travel tech, sanità, fintech e web consumer. Il lavoro di cui vado più fiero è di solito la parte che nessuno nota: una pagina che ha smesso di rifare le stesse richieste, un componente che ne ha sostituiti sedici scritti a mano, una sessione d\'esame che sopravvive a una',
  about_bio_2_em: 'scheda chiusa',
  about_location: 'Palermo, Italia',
  about_stat_experience: 'Anni di frontend',
  about_stat_companies:  'Aziende',
  about_stat_projects:   'Progetti realizzati',
  about_stat_platforms:  'Piattaforme: web, iOS, Android',

  // Skills
  skills_label: 'Competenze',
  skills_also:  'Anche',

  // Experience
  experience_label:       'Esperienza',
  experience_roles:       'ruoli',
  exp_tuimusement_role: "Software Engineer",
  exp_tuimusement_date:   'Giu 2021 – Presente',
  exp_tuimusement_b1: "Sviluppo e mantengo un'app mobile cross-platform in Flutter; ho contribuito a portare una nuova app a un rilascio pronto per la produzione in pochi mesi.",
  exp_tuimusement_b2: "Sviluppo frontend web con Vue.js, React e Next.js, e ho progettato un motore di template per le email transazionali.",
  exp_tuimusement_b3: "Contribuisco alle pipeline CI/CD GitLab e ai deploy su AWS S3, in sprint agile con i team di design e backend.",
  exp_9000_role: "Software Engineer & UI/UX Designer · Contratto",
  exp_9000_date: "2024 – 2026",
  exp_9000_b1: "Unico frontend engineer e designer: un'app web Next.js e un'app iOS/Android in React Native ed Expo, su un unico dominio condiviso.",
  exp_9000_b2: "Due design system, web e nativo, con temi chiaro e scuro generati da un’unica sorgente di token.",

  exp_yuxme_role:         'Frontend Engineer · Contratto',
  exp_yuxme_date:         'Nov 2025 – Apr 2026',
  exp_yuxme_b1:           "Ho sviluppato l'interfaccia React di SEIA, il motore di ricerca AI di una piattaforma di automazione contabile: si interroga l'AI su documenti e fatturato in forma conversazionale e le fatture si compilano da sole.",
  exp_yuxme_b2:           "Ho sviluppato l'onboarding multi-step che si sincronizza in modo sicuro con il cassetto fiscale, e rivisto pagine ad alto traffico per un rendering più veloce.",  exp_govisit_role: "Software Engineer & UI/UX Designer · Contratto",
  exp_govisit_date:       'Gen 2025 – Mar 2026',
  exp_govisit_b1: "Progetto e sviluppo il frontend di una piattaforma di telemedicina per consulti medici urgenti e programmati.",
  exp_govisit_b2: "Flussi di prenotazione, pagamenti Stripe e videoconsulti in tempo reale con lo SDK Stream.io, in Next.js e TypeScript.",
  // Projects
  projects_label:        'Progetti',
  projects_header_index: '#',
  projects_header_name:  'Progetto',
  projects_header_stack: 'Stack',
  projects_header_year:  'Anno',

  // Projects accordion labels
proj_label_role:      'Ruolo',
  proj_label_duration:  'Durata',
  proj_label_stack:     'Stack',
  proj_label_learnings: 'Cosa ho imparato',
  proj_label_visit:     'Visita il Progetto',
  proj_label_private:   'Nessun link pubblico',
  proj_label_this_site: 'Lo stai guardando',
  contact_copy:         'Copia indirizzo',
  contact_copied:       'Copiato',
  proj_label_code:      'Vedi il Codice',

  // Project 01 — TuiMusement
  proj_01_desc: "Lavoro mobile e web in TuiMusement, la piattaforma di prenotazione di tour e attività, in un team di prodotto cross-funzionale: l'app mobile in Flutter, i frontend web e gli strumenti di rilascio che li accompagnano.",
  proj_01_role: "Software Engineer",
  proj_01_duration: "Giu 2021 – oggi",
  proj_01_highlights: [
    "Sviluppo e mantengo un'app mobile cross-platform in Flutter; ho contribuito a portare una nuova app a un rilascio pronto per la produzione in pochi mesi",
    "Frontend web scalabili e performanti con Vue.js, React e Next.js",
    "Progettato e implementato un motore di template per le email transazionali, automatizzandone la produzione",
    "Pipeline CI/CD GitLab e deploy su AWS S3; code review in sprint agile con i team di design e backend",
  ],
  proj_01_learnings: "Un lungo periodo sullo stesso prodotto, in un team grande, mi ha insegnato quanto la consegna dipenda dalle parti meno appariscenti: una pipeline di cui tutti si fidano, review che trovano i problemi presto, e lavorare a stretto contatto con i designer e gli sviluppatori backend che condividono il lavoro.",
  proj_01_url: 'https://tuimusement.com',
  proj_01_url_code: '',

  // Project 02 — GoVisit
  proj_02_desc: "GoVisit è una piattaforma di telemedicina che consente consulti medici urgenti e programmati interamente online. La sfida principale è stata orchestrare due distinti flussi di prenotazione multi-step — cure urgenti immediate e appuntamenti programmati — integrandoli con disponibilità in tempo reale, pagamenti Stripe e videochiamate live, mantenendo un'esperienza fluida anche su mobile.",
  proj_02_role: "Software Engineer & UI/UX Designer (contratto)",
  proj_02_duration: "Gen 2025 – Mar 2026",
  proj_02_highlights: [
    "Due flussi di prenotazione completi (urgente 3 step, programmato 5 step) con logica di pagamento condivisa via hook useRecapPayment",
    "Stream.io Video SDK per videoconsulti in tempo reale con accesso token-based e UI personalizzata",
    "Pagamenti Stripe con codici promozionali (sconti % e fissi) e short-circuit per prenotazioni gratuite",
    "Layer di caching Zustand con TTL per tipi di documento, che elimina le chiamate API ridondanti in sessione",
  ],
  proj_02_learnings: "Lavorare in un dominio delicato come quello sanitario mi ha insegnato quanto la fiducia dell'utente dipenda da piccole decisioni UX — uno step confuso nel flusso di prenotazione non è solo un bug, è un paziente che non riceve assistenza. Ho anche affinato la capacità di progettare hook condivisi che riducono davvero la duplicazione senza diventare astrazioni aggrovigliate.",
  proj_02_url: 'https://app.govisit.it',
  proj_02_url_code: '',

  // Project 03 — Design System

  // Project 04 — Portfolio
  proj_04_desc: 'Questo portfolio. React e Vite, nessuna libreria UI, nessun framework CSS — ogni regola scritta a mano. Tre caratteri, un accento, una lista progetti impaginata come un registro invece che come una griglia di card.',
  proj_04_role:     'Designer & Developer',
  proj_04_duration: '~3 settimane',
  proj_04_highlights: [
    'CSS scritto a mano, nessun framework UI — 34 kB di stili, 7 kB gzipped',
    'Zero dipendenze oltre React e Vite',
    'i18n EN/IT completo con persistenza in localStorage',
    'Animazioni CSS pure + mouse parallax RAF — nessuna libreria',
  ],
  proj_04_learnings: 'Costruire il proprio portfolio è la valutazione più onesta che puoi fare di te stesso. Ogni decisione è tua. Ho riscoperto quanto ami i vincoli del CSS vanilla e fin dove puoi spingerlo.',
  proj_04_url: '#',
  proj_04_url_code: 'https://github.com/salvatoreviscode/portfolio',

  // Project 05 — Blokko
  proj_05_desc: "Blokko è un editor di preventivi basato su blocchi per freelance e agenzie, dove le proposte professionali vengono costruite trascinando e riordinando 11 tipi di blocchi strutturati — da tabelle prezzi a scadenze di pagamento fino ai blocchi firma. La sfida principale è stata progettare un sistema di blocchi fluido da modificare nel browser che generasse anche PDF puliti, il tutto all'interno di un rigoroso linguaggio visivo Swiss brutalist.",
  proj_05_role:     'Sviluppatore Full-Stack',
  proj_05_duration: '~1 settimana (feb 2026)',
  proj_05_highlights: [
    'Progettati e implementati 11 tipi di blocchi distinti con un canvas drag-and-drop unificato tramite dnd-kit',
    'Store Zustand con auto-salvataggio a debounce di 1s e feedback visivo in tempo reale idle/saving/saved/error',
    'Layer di sicurezza completo nel middleware Next.js: rate limiting per IP, blocco bot, CSRF, CSP dettagliata',
    'Export PDF via jsPDF + autotable che riproduce fedelmente il design system Swiss brutalist',
  ],
  proj_05_learnings: "Costruire un editor a blocchi per la modifica interattiva e l'output PDF mi ha costretto a ragionare su come i design token si traducono tra contesti di rendering. Ho scoperto che centralizzare la sicurezza nel middleware — invece di distribuire i controlli tra le route — rende il modello di autenticazione molto più semplice da gestire.",
  proj_05_url: '#',
  proj_05_url_code: '',

  // Project 06 — 9000ABCD
  proj_06_desc: "Un metodo di studio per i concorsi pubblici italiani, disegnato come un orario letto sotto una sola lampada. Il metodo è del cliente, che lo insegna; io ho costruito il prodotto che lo fa girare — un'app web Next.js dal 2024 e, dal 2026, un'app Expo che ne condivide il dominio riga per riga. Entrambe solo frontend: tutta la logica di business sta dietro un'API REST esterna.",
  proj_06_role: 'Unico frontend engineer e designer, su brief del cliente',
  proj_06_duration: '2024–2026 · web, iOS, Android',
  proj_06_highlights: [
    'Web: 27 rotte in 3 gruppi App Router, un solo layout force-dynamic come varco d\'accesso — 464 commit, 28.366 righe',
    'Mobile: 11 schermate, 5 tab, iOS e Android da un solo codebase Expo — 178 commit, 17.454 righe in tre mesi',
    'Dominio portato su React Native invariato: 7 store Zustand, 0 regole di business riscritte',
    'Due design system, una sola disciplina: 43 primitive web su token OKLCH, 33 primitive native, entrambi i temi generati da un\'unica sorgente',
    'Fetch della landing da no-store a revalidate: 300; licenze richieste 3 volte per pagina → 1',
    'Card scritte a mano inline 16 volte → 1 primitiva; ~15 #000 hardcoded → 1 token onAccent',
    'Sessioni d\'esame compresse con lz-string prima del salvataggio — una scheda chiusa non è una mattina persa',
  ],
  proj_06_learnings: 'Portare un prodotto su una seconda piattaforma è soprattutto una verifica: il primo aveva davvero un dominio separato? Store, modelli e aggregazioni sono passati a Expo invariati; tutto ciò che ho dovuto riscrivere — sessione, storage, navigazione, grafici — era la parte che avevo lasciato toccare la piattaforma. La seconda lezione non è mia, me l\'ha data il cliente: mi aveva spiegato subito che l\'app si usa prima dell\'alba, da persone che preparano un concorso da cui dipende il loro lavoro. L\'ho preso per contesto. Era una specifica, e le modifiche più difficili sono state quelle che hanno tolto una funzione che mi piaceva per accorciare la mattina di qualcun altro.',
  proj_06_url: '#',
  proj_06_url_code: '',

  // Project 06 — percorso di prodotto
  proj_journey_label: 'Percorso di prodotto',
  proj_journey_intro: 'Otto inquadrature, nell\'ordine in cui un candidato le incontra. Lo stesso motore in due corpi.',
  proj_journey_pending: 'Inquadratura da girare',
  proj_journey_alt_web: 'schermata dell\'app web',
  proj_journey_alt_app: 'schermata dell\'app mobile',

  j06_01_title: 'L\'arrivo',
  j06_01_cap: 'Ogni numero di questa pagina è reale e arriva dall\'API. Nessun dato di marketing.',
  j06_01_note: 'La pagina era no-store: chi arrivava pagava due round-trip prima del primo pixel.',

  j06_02_title: 'L\'elenco',
  j06_02_cap: 'Tredici concorsi attivi, ognuno con la sua banca dati ufficiale — le domande da cui usciranno quelle d\'esame. L\'elenco vive in un solo posto, dove la domanda viene davvero posta.',
  j06_02_note: 'Ogni arma ha un segno e una tinta, mai testo colorato: la categoria non è mai affidata al solo colore.',

  j06_03_title: 'Il varco',
  j06_03_cap: 'Un solo varco per tutta l\'app privata: un layout che legge il JWT, reindirizza al login se manca e al rinnovo se la licenza è scaduta. Ogni pagina aggiunta nel gruppo lo eredita.',
  j06_03_note: 'Niente middleware. Nessun controllo per pagina. Niente da dimenticare.',

  j06_04_title: 'La mattina',
  j06_04_cap: 'Lo stesso account su entrambi, nello stesso ordine di lettura: saluto, compito di oggi, poi come sta andando. Una colonna più stretta sul telefono, e l\'azione principale è l\'unica superficie piena di entrambi gli schermi.',
  j06_04_note: 'Nessuno dei due ha un piano in corso, e lo dicono nello stesso punto in cui starebbe il piano. Lo stato vuoto è retto dal testo, non da un secondo layout.',

  j06_05_title: 'Dove nasce un piano',
  j06_05_cap: 'Un piano si costruisce da una banca dati e poi si spende giorno per giorno. Una giornata di studio non è un passaggio solo: sono n cicli sullo stesso blocco, e le domande sbagliate passano al ciclo successivo.',

  j06_06_title: 'La sessione',
  j06_06_cap: 'Un solo orchestratore, tre sorgenti: una giornata pianificata, un intervallo della banca dati, o una configurazione libera. La sessione viene compressa e salvata a ogni passo: un\'app chiusa non è una mattina persa.',
  j06_06_note: 'La fase cambia le regole, quindi lo schermo dice quale sta girando: in Studio una risposta sbagliata non diventa una critica, e la domanda te lo dice prima che tu risponda.',

  j06_07_title: 'Scegliere le domande',
  j06_07_cap: 'Quattro strade: un intervallo della banca dati, le domande che continui a sbagliare, un singolo argomento, o l\'esame completo col suo cronometro. Il wizard è l\'unico punto del prodotto in cui la macchina è visibile.',

  j06_08_title: 'Il residuo',
  j06_08_cap: 'Le risposte sbagliate non si buttano. Diventano un insieme personale — qui 138, su diciassette materie — che puoi studiare come una banca dati a sé.',
  j06_08_note: 'Indovinane una quattro volte di fila ed esce dalla lista da sola. Niente da riordinare.',

  // Featured — 9000ABCD, estratto dall'elenco progetti
  featured_label: 'Lavori scelti',
  featured_lede: 'Una piattaforma di studio per i concorsi pubblici italiani. Ho progettato e sviluppato entrambi i prodotti: l\'app web Next.js e l\'app Expo per iOS e Android, su un unico dominio condiviso.',
  featured_proof: [
    'Dominio portato su React Native invariato: 7 store Zustand, 0 regole di business riscritte',
    'Mobile: 11 schermate, iOS e Android da un solo codebase Expo, in tre mesi',
    'Sessioni d\'esame compresse prima del salvataggio: una scheda chiusa non è una mattina persa',
  ],
  featured_more_open: 'Leggi il caso completo · 8 inquadrature',
  featured_more_close: 'Chiudi il caso',

  // Contact
  contact_label:       'Contatti',
  contact_title_1:     'Dimmi cosa stai',
  contact_title_em:    'costruendo.',
  contact_footer_made: 'Fatto con cura a Palermo.',
}

export default it
