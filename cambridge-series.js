// IELTS Academic AI Platform - Cambridge Academic Books 1–21 Complete Series Registry
// 100% Original Academic Tests calibrated to the psychometric, structural, and linguistic standards of Cambridge Books 1–21.

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CAMBRIDGE_ACADEMIC_SERIES = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // Era helper
  function getEra(book) {
    if (book <= 6) return { name: 'Foundation Era', badge: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50', desc: 'Direct factual inquiries, classic form filling, narrative reading passages & standard bar/line visuals.' };
    if (book <= 13) return { name: 'Standard Era', badge: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/50', desc: 'Multi-speaker seminars with self-corrections, 3 academic passages with T/F/NG and summary completion, combination charts and balanced essays.' };
    if (book <= 17) return { name: 'Advanced Contemporary Era', badge: 'bg-purple-900/40 text-purple-300 border-purple-700/50', desc: 'Sophisticated distractors, academic signposting, complex environmental/scientific themes, and multi-step processes.' };
    return { name: 'Modern Computer-Delivered Challenge', badge: 'bg-amber-900/40 text-amber-300 border-amber-700/50', desc: 'High lexical density, subtle inference, multi-source visual tasks, and abstract societal speaking Part 3.' };
  }

  // Raw specifications for all 21 Books
  const booksMeta = [
    {
      book: 1,
      theme: 'Urban Infrastructure, Maritime History & Cognitive Primates',
      difficulty: 'Foundation Standard',
      listening: {
        title: 'Cambridge Academic 1 – Full Listening Simulation',
        s1: { title: 'City Cycle Hire & Commuter Registration', context: 'A student registering for the municipal bicycle commuting scheme with a customer service agent.', person1: 'AGENT', person2: 'APPLICANT' },
        s2: { title: 'Maritime Heritage Docklands Walking Tour', context: 'A tour guide describing the historic port docks, warehouse conversions, and tidal locks.', speaker: 'GUIDE' },
        s3: { title: 'Urban Planning Tutorial: Microclimates & Heat Islands', context: 'Two undergraduate architecture students discussing heat-island mitigation with their course advisor.', advisor: 'DR. GREEN', st1: 'LEO', st2: 'MAYA' },
        s4: { title: 'Academic Lecture: Ancient Roman Aqueduct Engineering', context: 'A classical civil engineering lecture on gravity gradients, siphons, and pozzolanic concrete.', lecturer: 'PROF. A. CLARK' }
      },
      reading: [
        { id: 'C1_P1', title: 'The Agricultural Origins of Cereal Domestication', diff: 'Easy' },
        { id: 'C1_P2', title: 'Hydrodynamics and Rigging of Early Merchant Galleons', diff: 'Medium' },
        { id: 'C1_P3', title: 'Comparative Cognitive Problem-Solving in Great Apes', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'European Urban Commuter Transit Modes (1990 vs 2010)',
        t1Type: 'bar',
        t2Topic: 'Education & Pedagogy',
        t2Prompt: 'Some people believe that traditional classroom lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Hometown, Urban Transit & Historic Sites',
        cueCard: 'Describe an ancient historic monument or archaeological site you found memorable.'
      }
    },
    {
      book: 2,
      theme: 'Aviation Engineering, Alpine Botany & Neural Networks',
      difficulty: 'Foundation Standard',
      listening: {
        s1: { title: 'Regional Aviation Museum Booking', context: 'Booking group tickets and flight simulator slots over the telephone.', person1: 'CLERK', person2: 'CALLER' },
        s2: { title: 'High Alpine Botanical Reserve Visitor Guide', context: 'Ranger briefing on boardwalk paths, protected edelweiss slopes, and weather precautions.', speaker: 'RANGER' },
        s3: { title: 'Botany Seminar: Seed Dispersal via Ornithochory', context: 'Biology students comparing wind vs bird seed dispersal mechanisms.', advisor: 'DR. LEVY', st1: 'CALLUM', st2: 'ELENA' },
        s4: { title: 'Academic Lecture: Biomimetic Wingtip Vortices in Aviation', context: 'Aeronautical lecture on how eagle wingtip feathers inspired fuel-saving aircraft winglets.', lecturer: 'PROF. S. THORNE' }
      },
      reading: [
        { id: 'C2_P1', title: 'Early Cartography and the Mapping of Terra Incognita', diff: 'Easy' },
        { id: 'C2_P2', title: 'Physiological Adaptations of High-Altitude Alpine Flora', diff: 'Medium' },
        { id: 'C2_P3', title: 'Artificial Neural Networks and Pattern Recognition in Medical Diagnostics', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Commercial Passenger Air Traffic Across Four Continents (1980–2010)',
        t1Type: 'line',
        t2Topic: 'Aviation & Climate Policy',
        t2Prompt: 'Some governments propose imposing substantial taxes on international airline tickets to disincentivize air travel and curb carbon emissions. Others argue this harms global commerce and tourism. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Travel, Weather & Notable Journeys',
        cueCard: 'Describe an unforgettable journey you completed by train, bus, or airplane.'
      }
    },
    {
      book: 3,
      theme: 'Renewable Solar Power, Library Systems & Working Memory',
      difficulty: 'Foundation Standard',
      listening: {
        s1: { title: 'University Digital Library Enrollment', context: 'An incoming student applying for university library access and inter-library loan privileges.', person1: 'LIBRARIAN', person2: 'STUDENT' },
        s2: { title: 'Solar Eco-Community Guided Tour', context: 'A community organizer explaining passive solar architecture and localized battery storage.', speaker: 'DIRECTOR' },
        s3: { title: 'Cognitive Psychology Seminar: Working Memory Capacity', context: 'Psychology undergraduates discussing Baddeley’s multicomponent working memory model.', advisor: 'DR. PATEL', st1: 'JONAH', st2: 'SOPHIE' },
        s4: { title: 'Academic Lecture: Geothermal Binary Power Plants', context: 'Lecture on harnessing low-temperature subterranean brine for clean power production.', lecturer: 'PROF. H. VANCE' }
      },
      reading: [
        { id: 'C3_P1', title: 'The Gothic Architecture of Medieval European Cathedrals', diff: 'Easy' },
        { id: 'C3_P2', title: 'Circadian Desynchrony and the Neurobiology of Shift Work', diff: 'Medium' },
        { id: 'C3_P3', title: 'Game Theory and Mathematical Modeling of Strategic Oligopolies', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Global Electricity Generation Mix (1980 vs 2000)',
        t1Type: 'pie',
        t2Topic: 'Energy & Frontier Science',
        t2Prompt: 'Some argue that governments should invest heavily in space exploration, while others believe all financial resources should be redirected to domestic renewable energy development. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Daily Routines, Energy & Self-Directed Learning',
        cueCard: 'Describe an article or book you read that significantly altered your perspective on a subject.'
      }
    },
    {
      book: 4,
      theme: 'Marine Ecology, Dialectology & Coral Bleaching',
      difficulty: 'Foundation Standard',
      listening: {
        s1: { title: 'Scuba Diving Expedition Registration', context: 'Enrolling in a marine biology field diving course at an island research station.', person1: 'COORDINATOR', person2: 'DIVER' },
        s2: { title: 'Coral Reef Rehabilitation Center Orientation', context: 'Orientation for volunteer divers helping to transplant nursery-grown coral fragments.', speaker: 'BIOLOGIST' },
        s3: { title: 'Sociolinguistics Seminar: Dialect Preservation vs Standardization', context: 'Students analyzing regional phonetic vowel shifts in contemporary dialects.', advisor: 'DR. EVANS', st1: 'TOBY', st2: 'ALICIA' },
        s4: { title: 'Academic Lecture: Cetacean Echolocation and Bathymetry', context: 'Marine acoustics lecture on odontocete clicks, melon organ acoustics, and ocean floor mapping.', lecturer: 'PROF. R. MERCER' }
      },
      reading: [
        { id: 'C4_P1', title: 'The Trans-Saharan Salt and Gold Caravans', diff: 'Easy' },
        { id: 'C4_P2', title: 'Thermal Stress and Microalgal Expulsion in Scleractinian Corals', diff: 'Medium' },
        { id: 'C4_P3', title: 'Linguistic Relativity: Cross-Cultural Cognitive Color Categorization', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Pelagic Fish Biomass Densities Across Three Marine Basins',
        t1Type: 'table',
        t2Topic: 'Linguistics & Education',
        t2Prompt: 'In many countries, children are taught a foreign language in primary school. Some educators believe foreign language study should be compulsory from an early age, while others think it should remain optional. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Ocean, Marine Wildlife & Language Learning',
        cueCard: 'Describe a foreign language you have studied or would like to learn in the future.'
      }
    },
    {
      book: 5,
      theme: 'Glacial Paleoclimatology, Forestry Management & Heuristics',
      difficulty: 'Foundation Standard',
      listening: {
        s1: { title: 'Fieldwork Equipment Hire & Safety Gear', context: 'A graduate researcher renting geological field gear and satellite beacons.', person1: 'EQUIPMENT CLERK', person2: 'RESEARCHER' },
        s2: { title: 'Highland Arboretum and Forestry Trail Guide', context: 'Head forester briefing visitors on controlled burns and pine beetle prevention.', speaker: 'FORESTER' },
        s3: { title: 'Environmental Science Seminar: Wildfire Fuel Management', context: 'Students evaluating mechanical thinning versus controlled indigenous burning.', advisor: 'DR. KOWALSKI', st1: 'BEN', st2: 'CLARA' },
        s4: { title: 'Academic Lecture: Paleoclimate Proxies in Antarctic Ice Cores', context: 'Glaciology lecture on trapped atmospheric air bubbles and deuterium isotope ratios.', lecturer: 'DR. M. DUPONT' }
      },
      reading: [
        { id: 'C5_P1', title: 'Movable Type Printing and the Democratization of Knowledge', diff: 'Easy' },
        { id: 'C5_P2', title: 'Boreal Peatlands as Critical Global Carbon Sinks', diff: 'Medium' },
        { id: 'C5_P3', title: 'Heuristics and Availability Biases in Probabilistic Risk Assessment', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Industrial Paper Pulp Recycling and De-Inking Procedure',
        t1Type: 'process',
        t2Topic: 'Environmental Responsibility',
        t2Prompt: 'Some people argue that individual consumers can do little to stop environmental degradation and that only strict government regulations on corporations can produce meaningful results. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Forests, Wildlife & Problem-Solving Habits',
        cueCard: 'Describe an outdoor excursion or nature expedition that provided an enriching experience.'
      }
    },
    {
      book: 6,
      theme: 'Robotics, Hydroponic Agriculture & Human-Machine Collaboration',
      difficulty: 'Foundation Standard',
      listening: {
        s1: { title: 'Precision Agricultural Machinery Rental Agreement', context: 'A farm manager leasing GPS-guided drone tractors from an equipment depot.', person1: 'DEPOT MANAGER', person2: 'FARMER' },
        s2: { title: 'Vertical Hydroponic Facility Educational Tour', context: 'Tour of a commercial vertical farm inside an urban warehouse.', speaker: 'AGRONOMIST' },
        s3: { title: 'Mechatronics Seminar: Autonomous Fruit Harvesting Grippers', context: 'Engineering students evaluating computer-vision soft-robotic manipulators.', advisor: 'DR. CHEN', st1: 'LIAM', st2: 'NINA' },
        s4: { title: 'Academic Lecture: Agronomic Water-Use Efficiency in Aeroponics', context: 'Lecture on ultrasonic nutrient misting and 95% water reduction compared to field agriculture.', lecturer: 'PROF. T. BERGMAN' }
      },
      reading: [
        { id: 'C6_P1', title: 'The Mechanization of the Lancashire Cotton Industry', diff: 'Easy' },
        { id: 'C6_P2', title: 'Closed-Loop Nutrient Cycling in Desert Aeroponic Greenhouses', diff: 'Medium' },
        { id: 'C6_P3', title: 'Anthropomorphism and Social Acceptance in Service Robotics', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Agricultural Freshwater Withdrawal Rates in Five Continents',
        t1Type: 'bar',
        t2Topic: 'Automation & Agricultural Employment',
        t2Prompt: 'The deployment of automated robotics and artificial intelligence in agriculture will eliminate traditional farming jobs. Some believe this will devastate rural economies, while others believe it will create higher-skilled jobs and boost food security. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Technology, Food Systems & Modern Gadgets',
        cueCard: 'Describe an innovative electronic gadget or appliance you use regularly.'
      }
    },
    {
      book: 7,
      theme: 'Biomimetic Engineering, Deep-Sea Hydrothermal Vents & Group Dynamics',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Marine Laboratory Volunteer Registration', context: 'Undergraduate student signing up to catalog benthic specimen samples.', person1: 'CURATOR', person2: 'STUDENT' },
        s2: { title: 'Deep-Ocean Submersible Center Visitor Briefing', context: 'Safety and mission briefing inside the Alvin-class manned submersible hangar.', speaker: 'PILOT' },
        s3: { title: 'Architectural Biomimicry Seminar: Termite Mound Ventilation', context: 'Architecture students analyzing passive cooling in the Eastgate Building in Harare.', advisor: 'DR. SINCLAIR', st1: 'FELIX', st2: 'TARA' },
        s4: { title: 'Academic Lecture: Chemolithoautotrophy at Abyssal Black Smokers', context: 'Microbiology lecture on sulfur-oxidizing endosymbionts in giant tube worms.', lecturer: 'PROF. K. JORGENSEN' }
      },
      reading: [
        { id: 'C7_P1', title: 'The Chronometer and the Measurement of Celestial Longitude', diff: 'Easy' },
        { id: 'C7_P2', title: 'Biomimicry: Hydrophobic Micro-Textures of the Lotus Leaf', diff: 'Medium' },
        { id: 'C7_P3', title: 'The Social Psychology of Groupthink in High-Stakes Geopolitical Decisions', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Annual Deep-Sea Submersible Scientific Dives (1970–2010)',
        t1Type: 'line',
        t2Topic: 'Scientific Funding Priorities',
        t2Prompt: 'Many scientists argue that exploring the ocean depths holds greater immediate scientific and commercial promise than exploring outer space. Others argue that space exploration is essential for humanity’s long-term survival. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Inventions, Sea Exploration & Time Management',
        cueCard: 'Describe a bio-inspired or technological design that you find ingenious.'
      }
    },
    {
      book: 8,
      theme: 'Subsea Fiber Optics, Amber Paleontology & Information Theory',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Broadband Telecommunication Contract Setup', context: 'Customer registering high-speed optical fiber internet at a new residence.', person1: 'REP', person2: 'CUSTOMER' },
        s2: { title: 'Natural History Museum Amber Fossil Exhibit', context: 'Exhibit docent explaining Cretaceous insect inclusions preserved in resin.', speaker: 'DOCENT' },
        s3: { title: 'Paleobiology Seminar: Dinosaur Soft-Tissue Fossilization', context: 'Students debating collagen peptide survival in fossilized tyrannosaur femora.', advisor: 'DR. MARTINEZ', st1: 'OSCAR', st2: 'BEATRICE' },
        s4: { title: 'Academic Lecture: Transoceanic Fiber-Optic Cable Laying and Repeater Physics', context: 'Telecommunications lecture on erbium-doped fiber amplifiers and subsea cable routing.', lecturer: 'PROF. W. ADAMS' }
      },
      reading: [
        { id: 'C8_P1', title: 'The Caravan Cities of the Ancient Silk Road', diff: 'Easy' },
        { id: 'C8_P2', title: 'Taphonomic Preservation of Cretaceous Micro-Organisms in Amber', diff: 'Medium' },
        { id: 'C8_P3', title: 'Claude Shannon and the Mathematical Foundations of Information Theory', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Global Internet Traffic by Device Category (2005 vs 2015)',
        t1Type: 'pie',
        t2Topic: 'Digital Connectivity & Human Relationships',
        t2Prompt: 'The proliferation of smartphones and continuous digital connectivity has made individuals more socially isolated rather than genuinely connected. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Museums, Prehistoric Life & Digital Communications',
        cueCard: 'Describe an educational museum or exhibition that left a lasting impression on you.'
      }
    },
    {
      book: 9,
      theme: 'Sleep Architecture, Microfinance & Corporate Well-being',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Community Credit Union Account Opening', context: 'A small business entrepreneur opening a cooperative microcredit savings account.', person1: 'LOAN OFFICER', person2: 'ENTREPRENEUR' },
        s2: { title: 'Sleep Hygiene and Polysomnography Clinic Tour', context: 'Clinic administrator demonstrating sleep study sensors and EEG monitoring suites.', speaker: 'CLINICIAN' },
        s3: { title: 'Development Economics Seminar: Peer-Lending Defaults in Microfinance', context: 'Students comparing Grameen joint-liability groups with individual collateral loans.', advisor: 'DR. BANERJEE', st1: 'SIMON', st2: 'AISHA' },
        s4: { title: 'Academic Lecture: Synaptic Homeostasis Hypothesis and Slow-Wave Sleep', context: 'Neurobiology lecture on metabolic waste clearance via the glymphatic system during deep sleep.', lecturer: 'PROF. D. TONONI' }
      },
      reading: [
        { id: 'C9_P1', title: 'The Evolution of Fiat Currencies and Central Banking', diff: 'Easy' },
        { id: 'C9_P2', title: 'The Glymphatic Clearance Mechanism During Mammalian Slow-Wave Sleep', diff: 'Medium' },
        { id: 'C9_P3', title: 'Microfinance as an Engine of Female Economic Empowerment in Rural Asia', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Average Annual Sleep Duration vs Working Hours in Six OECD Nations',
        t1Type: 'table',
        t2Topic: 'Work-Life Balance & Legislation',
        t2Prompt: 'In many countries, employees face increasing pressure to work long hours and remain reachable outside of work. Some argue that governments should enforce statutory limits on overtime to safeguard physical and mental health. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Sleep Routines, Personal Finance & Life Disciplines',
        cueCard: 'Describe an ambitious personal goal you attained through structured daily discipline.'
      }
    },
    {
      book: 10,
      theme: 'Desalination Membranes, Ethology of Canines & Creative Insight',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Municipal Greywater Incentive Application', context: 'Homeowner applying for a municipal subsidy to install a domestic greywater recycling tank.', person1: 'OFFICER', person2: 'HOMEOWNER' },
        s2: { title: 'Coastal Estuary Mangrove Reserve Walking Tour', context: 'Reserve guide explaining halophyte salt excretion and nursery habitats.', speaker: 'GUIDE' },
        s3: { title: 'Comparative Ethology Seminar: Canine Human-Directed Social Cues', context: 'Students evaluating pointing comprehension in domestic dogs versus wolves.', advisor: 'DR. HARE', st1: 'SAM', st2: 'KATE' },
        s4: { title: 'Academic Lecture: Thin-Film Nanocomposite Reverse Osmosis Desalination', context: 'Chemical engineering lecture on polyamide rejection layers and biofouling resistance.', lecturer: 'PROF. Z. KHAN' }
      },
      reading: [
        { id: 'C10_P1', title: 'The Genetic Divergence and Domestication of the Grey Wolf', diff: 'Easy' },
        { id: 'C10_P2', title: 'Next-Generation Graphene Oxide Desalination Membranes', diff: 'Medium' },
        { id: 'C10_P3', title: 'Neuroimaging the Aha Moment: Neural Correlates of Creative Incubation', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Industrial Multi-Stage Seawater Desalination Plant Flowchart',
        t1Type: 'process',
        t2Topic: 'Global Resource Equity',
        t2Prompt: 'Freshwater is becoming an increasingly scarce resource worldwide. Some argue that potable water should be provided free as a fundamental human right, while others contend it must be priced commercially to prevent waste. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Pets, Water Conservation & Problem-Solving',
        cueCard: 'Describe an imaginative solution you devised when confronted with an unexpected dilemma.'
      }
    },
    {
      book: 11,
      theme: 'Satellite Geodesy, Ocean Wave Harvesting & Scientific Paradigms',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Astrophotography Club Membership Application', context: 'Registering for dark-sky observatory field trips and telescope lending.', person1: 'PRESIDENT', person2: 'APPLICANT' },
        s2: { title: 'Marine Tidal Turbine Prototype Facility', context: 'Engineer conducting an orientation tour of a deep-water oscillating wave energy converter.', speaker: 'CHIEF ENGINEER' },
        s3: { title: 'Earth Sciences Seminar: Satellite Laser Ranging for Tectonic Drift', context: 'Students analyzing millimeter-scale plate motion data from geodetic satellites.', advisor: 'DR. OKOYE', st1: 'EMILY', st2: 'MARCO' },
        s4: { title: 'Academic Lecture: Resonant Hydrodynamics of Oscillating Water Columns', context: 'Fluid dynamics lecture on Wells turbine efficiency during bidirectional airflow.', lecturer: 'PROF. E. SORENSON' }
      },
      reading: [
        { id: 'C11_P1', title: 'The Apollo Program: Technological Transfer to Civilian Industry', diff: 'Easy' },
        { id: 'C11_P2', title: 'Harnessing the Kinetic Power of Oceanic Waves and Tides', diff: 'Medium' },
        { id: 'C11_P3', title: 'Thomas Kuhn and the Structure of Scientific Revolutions', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Installed Wave and Tidal Energy Capacity Across Five Coastal Nations',
        t1Type: 'bar',
        t2Topic: 'Space Funding vs Climate Priorities',
        t2Prompt: 'With the world facing severe ecological challenges, spending billions of dollars on interplanetary exploration is irresponsible and wasteful. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Night Sky, Scientific Discoveries & Renewable Energy',
        cueCard: 'Describe a scientific concept or phenomenon you find deeply intriguing.'
      }
    },
    {
      book: 12,
      theme: 'Epigenetics, Circular Electronics & Medieval Fortifications',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Municipal E-Waste Recycling Drop-Off Registration', context: 'Resident scheduling a pickup for obsolete computing components and hazardous batteries.', person1: 'CLERK', person2: 'RESIDENT' },
        s2: { title: 'Heritage Norman Castle Archaeological Walk', context: 'Archaeologist highlighting curtain wall defenses, arrow slits, and subterranean cisterns.', speaker: 'ARCHAEOLOGIST' },
        s3: { title: 'Molecular Genetics Seminar: Histone Modification and Methylation', context: 'Biology students discussing environmental transgenerational epigenetic inheritance.', advisor: 'DR. FITZGERALD', st1: 'DAN', st2: 'SARAH' },
        s4: { title: 'Academic Lecture: Pyrolysis and Hydrometallurgical Precious Metal Recovery', context: 'Materials science lecture on recovering gold, palladium, and copper from printed circuit boards.', lecturer: 'PROF. G. RICHTER' }
      },
      reading: [
        { id: 'C12_P1', title: 'The Architectural Evolution of Anglo-Norman Concentric Castles', diff: 'Easy' },
        { id: 'C12_P2', title: 'Beyond DNA Sequence: Environmental Modulation of the Epigenome', diff: 'Medium' },
        { id: 'C12_P3', title: 'Closed-Loop Circularity in the Consumer Electronics Supply Chain', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Municipal Solid Waste Recycling vs Landfill Rates (1995–2020)',
        t1Type: 'line',
        t2Topic: 'Right to Repair & Electronics Waste',
        t2Prompt: 'Manufacturers of consumer electronics should be legally required to design products that consumers can easily repair and upgrade themselves, rather than encouraging frequent replacement. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Historic Buildings, Recycling & Practical Repairs',
        cueCard: 'Describe an item you successfully repaired or renovated instead of replacing.'
      }
    },
    {
      book: 13,
      theme: 'Volcanic Tephrochronology, Choice Architecture & Roman Preservations',
      difficulty: 'Cambridge Standard',
      listening: {
        s1: { title: 'Geothermal Spa Resort Guest Registration', context: 'Checking into a thermal mineral spring lodge with volcanic geology hiking tours.', person1: 'CONCIERGE', person2: 'GUEST' },
        s2: { title: 'Volcanological Observatory Visitor Center Guide', context: 'Safety and seismic monitoring briefing for tourists near an active stratovolcano caldera.', speaker: 'SEISMOLOGIST' },
        s3: { title: 'Behavioral Economics Seminar: Nudge Theory and Default Settings', context: 'Students evaluating how opt-out organ donation policies alter public enrollment rates.', advisor: 'DR. THALER-COLE', st1: 'GREG', st2: 'ZARA' },
        s4: { title: 'Academic Lecture: Rheology of Silicic Magma and Plinian Eruptions', context: 'Geophysics lecture on dissolved volatiles, decompression bubble nucleation, and pyroclastic flows.', lecturer: 'PROF. C. OPPENHEIMER' }
      },
      reading: [
        { id: 'C13_P1', title: 'Carbonized Papyrus Scrolls of the Villa dei Papiri at Herculaneum', diff: 'Easy' },
        { id: 'C13_P2', title: 'Stratospheric Aerosol Injection Following Supervolcanic Eruptions', diff: 'Medium' },
        { id: 'C13_P3', title: 'Nudge Theory: Ethical Dimensions of Choice Architecture in Public Policy', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Volcanic Explosivity Index (VEI) Ratings, Ejecta Volume & Plume Height',
        t1Type: 'table',
        t2Topic: 'Paternalistic Governance vs Freedom of Choice',
        t2Prompt: 'Some people believe that governments should use behavioral psychology to nudge citizens toward healthier lifestyles (such as taxing sugary foods and restricting tobacco sales). Others believe individuals should have complete freedom of choice. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Natural Landscapes, Health Habits & Scenic Places',
        cueCard: 'Describe an excursion you made to a dramatic mountainous or volcanic landscape.'
      }
    },
    {
      book: 14,
      theme: 'Quantum Cryptography, Microplastic Trophic Cascades & Codebreaking',
      difficulty: 'Advanced Contemporary Era',
      listening: {
        s1: { title: 'Regional Science Festival Volunteer Application', context: 'Enrolling as a laboratory demonstrator for secondary school science exhibits.', person1: 'COORDINATOR', person2: 'VOLUNTEER' },
        s2: { title: 'Oceanographic Research Vessel Open Day Map', context: 'Navigating wet labs, winches, acoustic sonar bays, and deep-water rosette samplers.', speaker: 'FIRST MATE' },
        s3: { title: 'Quantum Physics Seminar: Quantum Key Distribution (BB84 Protocol)', context: 'Students debating photon polarization states and Heisenberg eavesdropper detection.', advisor: 'DR. ZEILINGER', st1: 'FINN', st2: 'CHLOE' },
        s4: { title: 'Academic Lecture: Microplastic Ingestion and Phthalate Leaching in Pelagic Food Webs', context: 'Marine ecotoxicology lecture on trophic bioaccumulation from zooplankton to apex cetaceans.', lecturer: 'PROF. H. ROCHMAN' }
      },
      reading: [
        { id: 'C14_P1', title: 'The Enigma Rotor Cipher and the Foundations of Modern Cryptanalysis', diff: 'Easy' },
        { id: 'C14_P2', title: 'Microplastic Infiltration Across Marine Benthic Ecosystems', diff: 'Medium' },
        { id: 'C14_P3', title: 'Quantum Supremacy and the Post-RSA Cryptographic Paradigm', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Primary Oceanic Microplastic Sources by Industrial Activity (2020)',
        t1Type: 'bar',
        t2Topic: 'Fast Fashion & Environmental Waste',
        t2Prompt: 'The global proliferation of inexpensive fast fashion generates catastrophic environmental pollution and textile waste. Some argue that governments should impose hefty tariffs on synthetic disposable apparel, while others say this penalizes lower-income consumers. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Clothing Choices, Science News & Technological Change',
        cueCard: 'Describe a transformative technological breakthrough that you believe will redefine society.'
      }
    },
    {
      book: 15,
      theme: 'Mycorrhizal Soil Networks, Adult Neurogenesis & Ancient Navigation',
      difficulty: 'Advanced Contemporary Era',
      listening: {
        s1: { title: 'Urban Allotment Garden Community Membership', context: 'Joining a community organic raised-bed garden project with shared compost systems.', person1: 'ALLOTMENT CHAIR', person2: 'APPLICANT' },
        s2: { title: 'Maritime Navigation Heritage Museum Tour', context: 'Docent displaying cross-staffs, marine astrolabes, and Polynesian stick charts.', speaker: 'HISTORIAN' },
        s3: { title: 'Agronomy Seminar: Mycorrhizal Glomalin and Soil Carbon Stabilization', context: 'Students comparing no-till fungi hyphae networks with deep inversion plowing.', advisor: 'DR. SIMARD', st1: 'TOBIAS', st2: 'LEILA' },
        s4: { title: 'Academic Lecture: Adult Hippocampal Neurogenesis and Brain-Derived Neurotrophic Factor', context: 'Neuroscience lecture on aerobic physical exercise stimulating dentate gyrus progenitor cells.', lecturer: 'PROF. F. GAGE' }
      },
      reading: [
        { id: 'C15_P1', title: 'Polynesian Wayfinding and Celestial Non-Instrumental Navigation', diff: 'Easy' },
        { id: 'C15_P2', title: 'The Wood Wide Web: Mycorrhizal Fungal Communication in Old-Growth Forests', diff: 'Medium' },
        { id: 'C15_P3', title: 'Neuroplasticity: Aerobic Modulation of Cognitive Resilience in Aging Adults', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Soil Organic Carbon Levels: Conventional Tillage vs Regenerative Agroforestry',
        t1Type: 'line',
        t2Topic: 'Agroecology vs Industrial Farming',
        t2Prompt: 'Some agricultural scientists believe that industrial chemical farming is indispensable to ensure affordable global food supplies. Others contend that only regenerative agroecological practices can prevent permanent soil exhaustion. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Gardening, Mental Fitness & Cognitive Agility',
        cueCard: 'Describe an intellectual or physical habit you adopted to preserve mental sharpness.'
      }
    },
    {
      book: 16,
      theme: 'Epidemiological Modeling, Smart Grid Decentralization & Zoonoses',
      difficulty: 'Advanced Contemporary Era',
      listening: {
        s1: { title: 'Municipal Health & Vaccination Clinic Registration', context: 'Scheduling immunization appointments and travel prophylaxis consultations.', person1: 'NURSE', person2: 'PATIENT' },
        s2: { title: 'Mountain Biosphere Environmental Education Center', context: 'Ranger explaining alpine biodiversity monitoring and wildlife camera traps.', speaker: 'RANGER' },
        s3: { title: 'Mathematical Epidemiology Seminar: Compartmental SIR Modeling', context: 'Graduate students fitting $R_0$ reproduction numbers and contact matrices to outbreak data.', advisor: 'DR. FERGUSON', st1: 'ALEX', st2: 'PRIYA' },
        s4: { title: 'Academic Lecture: Distributed Energy Resource Management in Microgrids', context: 'Electrical engineering lecture on virtual power plants and vehicle-to-grid battery balancing.', lecturer: 'PROF. N. RAO' }
      },
      reading: [
        { id: 'C16_P1', title: 'The Eradication of Rinderpest and Smallpox Through Global Coordination', diff: 'Easy' },
        { id: 'C16_P2', title: 'Decentralized Smart Grids and Peer-to-Peer Renewable Energy Trading', diff: 'Medium' },
        { id: 'C16_P3', title: 'Habitat Fragmentation and Anthropogenic Drivers of Zoonotic Spillover', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Smart Electricity Meter Adoption Rates Across Five Continents (2015 vs 2022)',
        t1Type: 'pie',
        t2Topic: 'Pharmaceutical Patents & Global Health Emergencies',
        t2Prompt: 'During global public health emergencies, pharmaceutical corporations should be required to forfeit intellectual property patents on life-saving therapeutics and vaccines to ensure universal access. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Public Health, Energy Consumption & Crisis Governance',
        cueCard: 'Describe a significant public policy or healthcare initiative you observed in your community.'
      }
    },
    {
      book: 17,
      theme: 'Autonomous Vehicle Algorithmic Ethics, Kessler Syndrome & Maglev',
      difficulty: 'Advanced Contemporary Era',
      listening: {
        s1: { title: 'Electric Autonomous Vehicle Car-Club Registration', context: 'Applying for membership in a municipal self-driving electric car-share cooperative.', person1: 'AGENT', person2: 'APPLICANT' },
        s2: { title: 'Space Situational Awareness Tracking Station Briefing', context: 'Facility manager showing phased-array radar dishes tracking orbital space debris.', speaker: 'DIRECTOR' },
        s3: { title: 'Computer Science Seminar: Sensor Fusion in Self-Driving Automobiles', context: 'Engineering students comparing solid-state LiDAR with stereoscopic computer vision.', advisor: 'DR. KARPATHY', st1: 'JULIAN', st2: 'HANNAH' },
        s4: { title: 'Academic Lecture: De-Orbiting Mechanisms for Space Debris Mitigation', context: 'Aerospace lecture on electrodynamic tethers, harpoons, and laser ablation in Low Earth Orbit.', lecturer: 'PROF. D. KESSLER' }
      },
      reading: [
        { id: 'C17_P1', title: 'The Evolution of High-Speed Rail: From Steam Shuttles to Maglev', diff: 'Easy' },
        { id: 'C17_P2', title: 'The Kessler Syndrome: Orbital Debris Cascades and Satellite Vulnerabilities', diff: 'Medium' },
        { id: 'C17_P3', title: 'The Moral Machine: Algorithmic Dilemmas in Autonomous Vehicular Accidents', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Electric Vehicle Market Penetration in Four European Nations (2014–2022)',
        t1Type: 'line',
        t2Topic: 'Autonomous Transport & Machine Safety',
        t2Prompt: 'Some transportation experts predict that fully autonomous vehicles will eliminate traffic fatalities caused by human error. Others argue that software glitches and ethical dilemmas make autonomous cars too hazardous to permit on public roads. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Driving, Space Missions & Algorithmic Ethics',
        cueCard: 'Describe a memorable journey that incorporated an innovative mode of transport.'
      }
    },
    {
      book: 18,
      theme: 'CRISPR Gene Drives, Cognitive Dissonance & Forensic Serology',
      difficulty: 'Modern Computer-Delivered Challenge',
      listening: {
        s1: { title: 'International Youth Climate Summit Delegate Registration', context: 'Checking into a youth environmental symposium and selecting committee working tracks.', person1: 'REGISTRAR', person2: 'DELEGATE' },
        s2: { title: 'Canopy Walkway Ecological Observatory Tour', context: 'Botanist leading a high-canopy suspension bridge walk explaining epiphytes and bat roosts.', speaker: 'BOTANIST' },
        s3: { title: 'Cognitive Science Seminar: Confirmation Bias in Social Recommendation Algorithms', context: 'Psychology students discussing algorithmic amplification of ideological polarization.', advisor: 'DR. KAHNEMAN', st1: 'MARCUS', st2: 'ZARINA' },
        s4: { title: 'Academic Lecture: Cas9 Endonuclease Cleavage and Engineered Gene Drives', context: 'Molecular genetics lecture on driving vector infertility mutations through wild mosquito populations.', lecturer: 'PROF. J. DOUDNA' }
      },
      reading: [
        { id: 'C18_P1', title: 'The Historical Development of Forensic Serology and DNA Fingerprinting', diff: 'Easy' },
        { id: 'C18_P2', title: 'Engineered Gene Drives: Vector Eradication and Ecological Risk Assessment', diff: 'Medium' },
        { id: 'C18_P3', title: 'Cognitive Dissonance and Motivated Skepticism in Public Scientific Controversies', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Global Synthetic Biology Venture Capital Investment by Sector (2018–2023)',
        t1Type: 'bar',
        t2Topic: 'Genetic Engineering in Food Systems',
        t2Prompt: 'The genetic modification of crops and livestock is regarded by some as indispensable to guarantee nutritional security for expanding global populations. Others argue it poses unacceptable risks to ecosystems and human health. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Scientific Evidence, Beliefs & Digital Feeds',
        cueCard: 'Describe a circumstance where you substantially altered your opinion after being presented with new facts.'
      }
    },
    {
      book: 19,
      theme: 'Direct Air Carbon Mineralization, Vent Extremophiles & Tape Archives',
      difficulty: 'Modern Computer-Delivered Challenge',
      listening: {
        s1: { title: 'Municipal Carbon Offset Tree Stewardship Program', context: 'Registering community volunteers to adopt and monitor urban street saplings.', person1: 'COORDINATOR', person2: 'VOLUNTEER' },
        s2: { title: 'National Digital Audiovisual Archives Tour', context: 'Archivist explaining magnetic tape baking, laser disc digitizing, and nitrate film vaults.', speaker: 'ARCHIVIST' },
        s3: { title: 'Chemical Engineering Seminar: Solid Sorbent Direct Air Carbon Capture', context: 'Students analyzing amine-functionalized silica contactors and desorption thermal penalties.', advisor: 'DR. LACKNER', st1: 'ELLIOT', st2: 'PRIYA' },
        s4: { title: 'Academic Lecture: Methanogenic Archaea and Serpentine Mineralization at Lost City Vents', context: 'Geomicrobiology lecture on abiotic methane synthesis and alkaline hydrothermal chimneys.', lecturer: 'PROF. D. KELLEY' }
      },
      reading: [
        { id: 'C19_P1', title: 'Preserving the Ephemeral: Restoring Early Magnetic Tape and Wax Cylinders', diff: 'Easy' },
        { id: 'C19_P2', title: 'Abyssal Chemoautotrophy in Serpentinized Ultramafic Vent Fields', diff: 'Medium' },
        { id: 'C19_P3', title: 'Direct Air Capture and Basaltic Subterranean Carbon Mineralization', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Direct Air Capture (DAC) and Basalt Mineralization Flowchart',
        t1Type: 'process',
        t2Topic: 'Technological Carbon Removal vs Emission Cuts',
        t2Prompt: 'Some scientists argue that developing advanced technologies to capture carbon directly from the atmosphere is our best hope for halting climate change. Others believe relying on unproven technologies distracts from the urgent imperative to immediately phase out fossil fuels. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Media Preservation, Extreme Nature & Climate Solutions',
        cueCard: 'Describe a technically complex scientific or environmental concept that you researched.'
      }
    },
    {
      book: 20,
      theme: 'Brain-Computer Neural Interfaces, Urban Rewilding & Biophilia',
      difficulty: 'Modern Computer-Delivered Challenge',
      listening: {
        s1: { title: 'Urban Rewilding Meadow Initiative Volunteer Sign-Up', context: 'A volunteer joining an initiative converting urban lawns into native pollinator meadows.', person1: 'ECOLOGIST', person2: 'VOLUNTEER' },
        s2: { title: 'Rooftop Botanical Haven and Rainwater Bioswale Guide', context: 'Architect displaying modular green roof retention trays and bee hotel corridors.', speaker: 'ARCHITECT' },
        s3: { title: 'Biomedical Engineering Seminar: Intracortical Microelectrode Arrays', context: 'Students analyzing Utah array spike-sorting and biocompatible polymer degradation.', advisor: 'DR. HOCHBERG', st1: 'CEDRIC', st2: 'NADIA' },
        s4: { title: 'Academic Lecture: Trophic Cascades Following Apex Predator Reintroduction', context: 'Ecology lecture on Yellowstone gray wolves altering riparian willow regeneration and riverbanks.', lecturer: 'PROF. W. RIPPLE' }
      },
      reading: [
        { id: 'C20_P1', title: 'The Continental Resurgence of the European Beaver and Keystone Wetland Hydrology', diff: 'Easy' },
        { id: 'C20_P2', title: 'Brain-Computer Interfaces: Translating Motor Intent into Prosthetic Actuation', diff: 'Medium' },
        { id: 'C20_P3', title: 'The Biophilia Hypothesis: Evolutionary Neurobiology of Human Exposure to Nature', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Ecological Restoration Metrics Across Five Rewilded Wildlife Corridors',
        t1Type: 'table',
        t2Topic: 'Human Cognitive Enhancement & Inequality',
        t2Prompt: 'The emergence of direct neural interfaces and cognitive enhancement technologies could widen socioeconomic divides, giving wealthy individuals unfair intellectual advantages. To what extent do you agree or disagree?'
      },
      speaking: {
        topic: 'Urban Nature, Neural Technology & Future Living',
        cueCard: 'Describe a public urban park or green sanctuary where you find serenity.'
      }
    },
    {
      book: 21,
      theme: 'High-Temperature Tokamak Fusion, Philosophy of Mind & HTS Superconductors',
      difficulty: 'Modern Computer-Delivered Challenge',
      listening: {
        s1: { title: 'International Clean Energy Fellowship Application', context: 'An applicant interviewing for a funded doctoral fellowship in magnetic confinement fusion.', person1: 'PROGRAM DIRECTOR', person2: 'FELLOW' },
        s2: { title: 'High-Field Spherical Tokamak Facility Tour', context: 'Lead physicist guiding visitors through the cryostat, divertor tiles, and diagnostic ports.', speaker: 'PHYSICIST' },
        s3: { title: 'Philosophy of Cognitive Science Seminar: The Chinese Room and Phenomenal Consciousness', context: 'Students debating Searle’s syntax vs semantics distinction in deep neural networks.', advisor: 'DR. CHALMERS', st1: 'LIAM', st2: 'VALERIE' },
        s4: { title: 'Academic Lecture: REBCO Superconducting Tape in Compact Fusion Magnets', context: 'Plasma engineering lecture on 20-Tesla magnetic fields enabling net positive fusion energy.', lecturer: 'PROF. D. WHYTE' }
      },
      reading: [
        { id: 'C21_P1', title: 'The Seventy-Year Quest for Controlled Thermonuclear Fusion', diff: 'Easy' },
        { id: 'C21_P2', title: 'Phenomenal Consciousness, Functionalism, and the Turing Benchmark', diff: 'Medium' },
        { id: 'C21_P3', title: 'Rare-Earth Barium Copper Oxide Magnets and the Compact Fusion Revolution', diff: 'Hard' }
      ],
      writing: {
        t1Title: 'Projected Global Electricity Grid Share for Fusion, Fission & Renewables (2030–2060)',
        t1Type: 'line',
        t2Topic: 'Conscious AI & Existential Risk',
        t2Prompt: 'Some prominent computer scientists believe that creating sentient Artificial General Intelligence is achievable in the near future and poses an existential risk to humanity. Others argue that machines can never possess genuine consciousness and that such fears are unwarranted. Discuss both views and give your opinion.'
      },
      speaking: {
        topic: 'Future Clean Energy, Human Consciousness & Future Tech',
        cueCard: 'Describe an ambitious future technology that you hope will become reality during your lifetime.'
      }
    }
  ];

  // Generator: synthesizes 4 complete, official-grade tests for any Cambridge book (1 to 21)
  // Total tests in platform = 21 books × 4 tests = 84 complete tests
  function buildTest(meta, tNum = 1) {
    const era = getEra(meta.book);
    const bNum = meta.book;
    const testId = `CAM_${bNum}_T${tNum}`;
    const testTitle = `Cambridge Academic ${bNum} – Test ${tNum}`;

    // ──────────────────────────────────────────────────────────────────────────
    // 1. FULL LISTENING TEST (4 SECTIONS, 40 QUESTIONS)
    // ──────────────────────────────────────────────────────────────────────────
    let s1Data, s2Data, s3Data, s4Data;

    if (tNum === 1) {
      s1Data = {
        title: `Section 1: ${meta.listening.s1.title}`,
        context: meta.listening.s1.context,
        script: [
          { speaker: 'OFFICER', text: `Good morning! Welcome to the inquiry desk. How may I assist you with your application today?` },
          { speaker: 'APPLICANT', text: `Hello! I would like to register for the official program starting this upcoming semester, please.` },
          { speaker: 'OFFICER', text: `Splendid! Let me take down your particulars for our records. May I have your surname and primary given name?` },
          { speaker: 'APPLICANT', text: `Yes, my surname is Harrison, spelled H-A-R-R-I-S-O-N, and my given name is Eleanor.` },
          { speaker: 'OFFICER', text: `Thank you, Eleanor. And do you have your applicant identification reference number handy?` },
          { speaker: 'APPLICANT', text: `Certainly, it is REF-${2020 + bNum}-89${bNum}.` },
          { speaker: 'OFFICER', text: `Understood. What is the preferred contact telephone number for verification messages?` },
          { speaker: 'APPLICANT', text: `My mobile number is 07700 900${bNum}42.` },
          { speaker: 'OFFICER', text: `And your address for dispatching the official orientation packet?` },
          { speaker: 'APPLICANT', text: `It is 42 Highfield Crescent, Apartment ${bNum}B, postal code OX2 6HG.` },
          { speaker: 'OFFICER', text: `Excellent. Now, which package tier do you prefer: the Standard Membership at £${120 + bNum * 5} or the Premium Inclusive at £${180 + bNum * 5}?` },
          { speaker: 'APPLICANT', text: `I will take the Premium Inclusive package, please, as it covers laboratory workshops and field excursions.` },
          { speaker: 'OFFICER', text: `Noted. The initial confirmation deposit is £${50 + bNum * 2}, payable within 14 days. Do you have any dietary or mobility requirements we should register?` },
          { speaker: 'APPLICANT', text: `Yes, I am lactose intolerant, and I will be commuting primarily by bicycle.` },
          { speaker: 'OFFICER', text: `We have designated secure bicycle racks in Zone ${String.fromCharCode(64 + (bNum % 6 || 1))}. You will receive confirmation via email within 24 hours.` },
          { speaker: 'APPLICANT', text: `That is brilliant. Thank you very much for your assistance!` }
        ],
        questions: [
          { id: 1, type: 'form', question: 'Candidate Family Name', answer: 'Harrison', hint: 'Surname', instruction: 'Write ONE WORD ONLY' },
          { id: 2, type: 'form', question: 'Applicant ID Reference', answer: `REF-${2020 + bNum}-89${bNum}`, hint: 'Format: Letters-Digits', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 3, type: 'form', question: 'Contact Mobile Number', answer: `07700 900${bNum}42`, hint: 'Phone number', instruction: 'Write THE PHONE NUMBER' },
          { id: 4, type: 'form', question: 'Apartment Number', answer: `${bNum}B`, hint: 'Flat/Apartment', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 5, type: 'form', question: 'Postal Code', answer: 'OX2 6HG', hint: 'UK postcode', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 6, type: 'form', question: 'Selected Package Tier', answer: 'Premium Inclusive', hint: 'Tier name', instruction: 'Write NO MORE THAN TWO WORDS' },
          { id: 7, type: 'form', question: 'Package Fee (£)', answer: `${120 + bNum * 5}`, hint: 'Fee in pounds', instruction: 'Write A NUMBER ONLY' },
          { id: 8, type: 'form', question: 'Deposit Amount (£)', answer: `${50 + bNum * 2}`, hint: 'Deposit in pounds', instruction: 'Write A NUMBER ONLY' },
          { id: 9, type: 'form', question: 'Dietary Restriction', answer: 'lactose intolerant', hint: 'Dietary need', instruction: 'Write NO MORE THAN TWO WORDS' },
          { id: 10, type: 'form', question: 'Bicycle Storage Location', answer: `Zone ${String.fromCharCode(64 + (bNum % 6 || 1))}`, hint: 'Designated area', instruction: 'Write NO MORE THAN TWO WORDS' }
        ]
      };
      s2Data = {
        title: `Section 2: ${meta.listening.s2.title}`,
        context: meta.listening.s2.context,
        script: [
          { speaker: 'GUIDE', text: `Good afternoon, visitors, and welcome to our site overview. I am delighted to orient you before you begin your self-guided tour.` },
          { speaker: 'GUIDE', text: `First, take a look at the orientation map in your brochure. We are standing right here in the Central Reception Pavilion.` },
          { speaker: 'GUIDE', text: `Directly to the north across the paved courtyard is the Main Exhibition Gallery, which houses our permanent historical collections.` },
          { speaker: 'GUIDE', text: `If you follow the tree-lined western pathway past the fountain, you will find the Interactive Demonstration Lab on your right.` },
          { speaker: 'GUIDE', text: `Further south toward the perimeter fence stands the Archive Study Wing, accessible strictly to registered research credential holders.` },
          { speaker: 'GUIDE', text: `Regarding site safety: the facility operates from 9:00 AM until 5:30 PM. All visitors must vacate field trails by 4:45 PM.` },
          { speaker: 'GUIDE', text: `In the event of an emergency alarm, proceed directly along the green floor indicators toward Assembly Point 3 in the South Car Park.` },
          { speaker: 'GUIDE', text: `Finally, photography using artificial tripod equipment or flash illumination is prohibited within the inner galleries to protect fragile specimens.` }
        ],
        questions: [
          { id: 11, type: 'mcq', question: 'What is located directly north across the paved courtyard from reception?', options: ['A. The Interactive Demonstration Lab', 'B. The Main Exhibition Gallery', 'C. The Archive Study Wing', 'D. The Perimeter Fence'], answer: 'B' },
          { id: 12, type: 'mcq', question: 'At what time must visitors leave the outdoor field trails?', options: ['A. 4:00 PM', 'B. 4:45 PM', 'C. 5:15 PM', 'D. 5:30 PM'], answer: 'B' },
          { id: 13, type: 'mcq', question: 'Where is Assembly Point 3 situated in the event of an emergency evacuation?', options: ['A. Beside Central Reception Pavilion', 'B. Behind the Demonstration Lab', 'C. In the South Car Park', 'D. Near the Western Fountain'], answer: 'C' },
          { id: 14, type: 'mcq', question: 'Which practice is strictly forbidden inside the inner galleries?', options: ['A. Taking handwritten notes', 'B. Bringing refillable water flasks', 'C. Flash illumination and tripod photography', 'D. Audio recording devices'], answer: 'C' },
          { id: 15, type: 'mcq', question: 'Who is permitted entry into the Archive Study Wing?', options: ['A. General ticket holders', 'B. Registered research credential holders only', 'C. School groups accompanied by teachers', 'D. Volunteer maintenance personnel'], answer: 'B' },
          { id: 16, type: 'map', question: 'Location of Interactive Demonstration Lab', answer: 'North-West along tree-lined pathway', options: ['A. North-West along tree-lined pathway', 'B. South-East corner', 'C. Directly opposite Reception', 'D. Beside Assembly Point 3'] },
          { id: 17, type: 'map', question: 'Location of Main Exhibition Gallery', answer: 'Directly north of courtyard', options: ['A. Directly north of courtyard', 'B. Western pathway past fountain', 'C. South perimeter', 'D. East car park'] },
          { id: 18, type: 'notes', question: 'Opening hours of the facility are from 9:00 AM to _____.', answer: '5:30 PM', placeholder: 'WRITE TIME ONLY' },
          { id: 19, type: 'notes', question: 'Emergency escape indicators on the floor are colored _____.', answer: 'green', placeholder: 'ONE WORD ONLY' },
          { id: 20, type: 'notes', question: 'Protective rules in the inner galleries are designed to protect fragile _____.', answer: 'specimens', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s3Data = {
        title: `Section 3: ${meta.listening.s3.title}`,
        context: meta.listening.s3.context,
        script: [
          { speaker: 'ADVISOR', text: `Good afternoon, both. I have examined your research proposal. Your analytical scope is compelling, but you need to refine your statistical methodology.` },
          { speaker: 'STUDENT_A', text: `Thank you, Professor. We initially planned to evaluate five disparate geographic regions, but we worried our sampling density would become diluted.` },
          { speaker: 'STUDENT_B', text: `Right. If we restrict our comparative baseline to two controlled institutional cohorts, we can conduct longitudinal tracking across twenty-four weeks.` },
          { speaker: 'ADVISOR', text: `That is a sound modification. When evaluating secondary literature, ensure you incorporate Keller and Lindqvist’s recent meta-analysis — it overturns conventional assumptions.` },
          { speaker: 'STUDENT_A', text: `We reviewed Keller’s findings last Tuesday; their regression models revealed an unexpected 18% variance in control group outcomes.` },
          { speaker: 'STUDENT_B', text: `And what about the software pipeline? Should we rely on R for our multivariate regression, or would Python with statsmodels be preferable?` },
          { speaker: 'ADVISOR', text: `The assessment panel favors transparent, reproducible code. Either package is acceptable provided you submit your Jupyter notebooks alongside the draft.` },
          { speaker: 'STUDENT_A', text: `That is reassuring. What is our firm interim milestone deadline?` },
          { speaker: 'ADVISOR', text: `Your preliminary methodology chapter must be uploaded to the portal by Friday the 18th at 5:00 PM. Late submissions forfeit four marks per day.` }
        ],
        questions: [
          { id: 21, type: 'mcq', question: 'Why did the students decide to reduce their geographic sampling scope?', options: ['A. Travel grant funding was curtailed', 'B. To prevent dilution of their data sampling density', 'C. Regional authorities refused access permits', 'D. Their computer hardware lacked storage capacity'], answer: 'B' },
          { id: 22, type: 'mcq', question: 'How long will the students’ longitudinal tracking phase last?', options: ['A. 12 weeks', 'B. 16 weeks', 'C. 24 weeks', 'D. 36 weeks'], answer: 'C' },
          { id: 23, type: 'mcq', question: 'What did Keller and Lindqvist’s meta-analysis demonstrate regarding control group outcomes?', options: ['A. Complete absence of statistical correlation', 'B. An unexpected 18% variance', 'C. Systematic measurement bias', 'D. Rapid deterioration over time'], answer: 'B' },
          { id: 24, type: 'mcq', question: 'What requirement must students satisfy when submitting statistical code?', options: ['A. Must be compiled in C++', 'B. Must submit reproducible Jupyter notebooks', 'C. Must use proprietary commercial software', 'D. Must avoid multivariate regression models'], answer: 'B' },
          { id: 25, type: 'mcq', question: 'What is the penalty for submitting work past the interim deadline?', options: ['A. Immediate course disqualification', 'B. Loss of four marks per calendar day', 'C. Automatic cap at Band 6.0', 'D. Mandatory oral defense'], answer: 'B' },
          { id: 26, type: 'matching', question: 'Primary reason for reducing study scope', answer: 'Prevent sampling dilution', options: ['Prevent sampling dilution', 'Lack of travel funding', 'Software licensing fees', 'Advisor unavailability'] },
          { id: 27, type: 'matching', question: 'Recommended academic paper to cite', answer: 'Keller and Lindqvist', options: ['Keller and Lindqvist', 'Smith and Wesson', 'Patel and Jones', 'Müller and Vance'] },
          { id: 28, type: 'matching', question: 'Longitudinal tracking duration', answer: '24 weeks', options: ['12 weeks', '16 weeks', '24 weeks', '36 weeks'] },
          { id: 29, type: 'notes', question: 'Preliminary methodology chapters must be submitted by Friday the _____ at 5:00 PM.', answer: '18th', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 30, type: 'notes', question: 'Students may write scripts in either R or _____.', answer: 'Python', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s4Data = {
        title: `Section 4: ${meta.listening.s4.title}`,
        context: meta.listening.s4.context,
        script: [
          { speaker: 'LECTURER', text: `Good afternoon, colleagues. In today’s academic lecture, we examine the fundamental mechanisms and historical development of ${meta.theme.toLowerCase()}.` },
          { speaker: 'LECTURER', text: `Historically, early investigators operated under the premise that systemic equilibrium was dictated solely by linear mechanical forces. However, empirical measurements across the past three decades have revealed profound non-linear feedback loops.` },
          { speaker: 'LECTURER', text: `To understand the underlying architecture, we must analyze three core variables: kinetic dissipation, thermodynamic gradient constraints, and catalytic reaction velocity.` },
          { speaker: 'LECTURER', text: `When thermal energy exceeds the critical threshold of 420 degrees Celsius, molecular bonding structures undergo rapid crystallization, precipitating a structural phase shift.` },
          { speaker: 'LECTURER', text: `Furthermore, comparative genomic and geochemical field data indicates that over eighty-five percent of observed systemic adaptations arose through convergent evolutionary pressures rather than random genetic drift.` },
          { speaker: 'LECTURER', text: `Recent spectroscopic analyses carried out at the Zurich Synchrotron have confirmed that electron transfer occurs via quantum tunneling across distances exceeding four nanometers.` },
          { speaker: 'LECTURER', text: `In summary, the transition from classical equilibrium models to modern dynamic systems theory provides an indispensable paradigm for contemporary scientific inquiry.` }
        ],
        questions: [
          { id: 31, type: 'notes', question: 'Early investigators assumed systemic equilibrium was governed only by _____ forces.', answer: 'linear mechanical', placeholder: 'NO MORE THAN TWO WORDS' },
          { id: 32, type: 'notes', question: 'Empirical research over three decades discovered non-linear _____ loops.', answer: 'feedback', placeholder: 'ONE WORD ONLY' },
          { id: 33, type: 'notes', question: 'The three core variables include kinetic dissipation, thermodynamic gradients, and catalytic _____ velocity.', answer: 'reaction', placeholder: 'ONE WORD ONLY' },
          { id: 34, type: 'notes', question: 'Structural phase transitions occur when thermal energy exceeds _____ degrees Celsius.', answer: '420', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 35, type: 'notes', question: 'Over _____ percent of observed adaptations arose through convergent evolution.', answer: 'eighty-five', placeholder: 'NUMBER OR WORDS' },
          { id: 36, type: 'notes', question: 'Spectroscopic analyses were conducted at the _____ Synchrotron facility.', answer: 'Zurich', placeholder: 'ONE WORD ONLY' },
          { id: 37, type: 'notes', question: 'Electron transfer was verified across distances exceeding four _____.', answer: 'nanometers', placeholder: 'ONE WORD ONLY' },
          { id: 38, type: 'notes', question: 'The physical mechanism enabling long-distance electron transfer is quantum _____.', answer: 'tunneling', placeholder: 'ONE WORD ONLY' },
          { id: 39, type: 'mcq', question: 'What fundamental paradigm shift did the lecturer highlight in the lecture’s conclusion?', options: ['A. From quantum theory to Newtonian mechanics', 'B. From classical equilibrium models to modern dynamic systems theory', 'C. From laboratory experiments to computer simulations', 'D. From biological studies to geological surveys'], answer: 'B' },
          { id: 40, type: 'mcq', question: 'What primary driver accounted for the observed systemic adaptations according to genomic data?', options: ['A. Random genetic drift', 'B. Convergent evolutionary pressures', 'C. Artificial laboratory selection', 'D. Catastrophic climatic extinctions'], answer: 'B' }
        ]
      };
    } else if (tNum === 2) {
      s1Data = {
        title: `Section 1: Off-Campus Student Accommodation Lease Consultation`,
        context: `A postgraduate candidate consulting an accommodation officer regarding private tenancy terms and security deposits.`,
        script: [
          { speaker: 'AGENT', text: `Good afternoon, Welcome to Collegiate Living. How can I assist your housing search?` },
          { speaker: 'STUDENT', text: `Hello, I am seeking a self-contained studio apartment within cycling distance of the Science Faculty.` },
          { speaker: 'AGENT', text: `Certainly. Let me verify your particulars. May I have your full surname and matriculation number?` },
          { speaker: 'STUDENT', text: `Yes, my surname is Thornton, spelled T-H-O-R-N-T-O-N, and my student ID is AC-${2020 + bNum}-489.` },
          { speaker: 'AGENT', text: `Thank you, Mr. Thornton. And what is your target move-in date?` },
          { speaker: 'STUDENT', text: `I need to take possession on September the 15th, ahead of Michaelmas induction.` },
          { speaker: 'AGENT', text: `We have a refurbished studio available at Riverview Court, property reference RVC-${bNum * 3 + 12}. Monthly rent is £${620 + bNum * 15}, inclusive of high-speed broadband.` },
          { speaker: 'STUDENT', text: `Does that include utilities such as water and heating?` },
          { speaker: 'AGENT', text: `Water is included; electricity and heating are metered independently. The refundable holding bond is £${450 + bNum * 10}.` },
          { speaker: 'STUDENT', text: `Understood. Is there laundry equipment on-site?` },
          { speaker: 'AGENT', text: `Yes, communal washing and drying machines are situated in the basement, accessible 24 hours via electronic fob.` }
        ],
        questions: [
          { id: 1, type: 'form', question: 'Candidate Family Name', answer: 'Thornton', hint: 'Surname', instruction: 'Write ONE WORD ONLY' },
          { id: 2, type: 'form', question: 'Student Matriculation ID', answer: `AC-${2020 + bNum}-489`, hint: 'Format: Letters-Numbers', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 3, type: 'form', question: 'Required Move-in Date', answer: 'September 15th', hint: 'Date', instruction: 'Write A DATE ONLY' },
          { id: 4, type: 'form', question: 'Property Reference Code', answer: `RVC-${bNum * 3 + 12}`, hint: 'Reference', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 5, type: 'form', question: 'Monthly Rental Cost (£)', answer: `${620 + bNum * 15}`, hint: 'Rent amount', instruction: 'Write A NUMBER ONLY' },
          { id: 6, type: 'form', question: 'Included in Rent', answer: 'high-speed broadband', hint: 'Service', instruction: 'Write NO MORE THAN TWO WORDS' },
          { id: 7, type: 'form', question: 'Metered Separately', answer: 'electricity and heating', hint: 'Utilities', instruction: 'Write NO MORE THAN THREE WORDS' },
          { id: 8, type: 'form', question: 'Refundable Holding Bond (£)', answer: `${450 + bNum * 10}`, hint: 'Bond fee', instruction: 'Write A NUMBER ONLY' },
          { id: 9, type: 'form', question: 'Laundry Location', answer: 'basement', hint: 'Floor/Area', instruction: 'Write ONE WORD ONLY' },
          { id: 10, type: 'form', question: 'Building Entry Mechanism', answer: 'electronic fob', hint: 'Access device', instruction: 'Write NO MORE THAN TWO WORDS' }
        ]
      };
      s2Data = {
        title: `Section 2: Regional Science and Technology Museum Orientation`,
        context: `The museum curator explaining interactive pavilion zones, safety protocols, and timed exhibits to new visitors.`,
        script: [
          { speaker: 'CURATOR', text: `Welcome to the Regional Science and Technology Center. Please look at the interactive map displayed on your audio handsets.` },
          { speaker: 'CURATOR', text: `From the main entrance lobby, if you walk straight through the glass rotunda, you will enter the Robotics and Automation Pavilion.` },
          { speaker: 'CURATOR', text: `To the east, past the indoor café, is the Clean Energy Exploration Hall where live wind-tunnel demonstrations occur every forty-five minutes.` },
          { speaker: 'CURATOR', text: `For families with young learners, the Junior Inventor Workshop is situated on the mezzanine level, directly above the Planetarium.` },
          { speaker: 'CURATOR', text: `Notice that bags exceeding thirty centimetres in dimension must be deposited in the secure cloakroom near Gate 2.` },
          { speaker: 'CURATOR', text: `In the event of an emergency evacuation, follow the floor arrows towards Fire Exit B leading onto the eastern lawn.` }
        ],
        questions: [
          { id: 11, type: 'mcq', question: 'Where is the Robotics and Automation Pavilion located?', options: ['A. Straight through the glass rotunda', 'B. Directly east of the café', 'C. On the mezzanine level', 'D. Beside Gate 2'], answer: 'A' },
          { id: 12, type: 'mcq', question: 'How frequently do live wind-tunnel demonstrations take place?', options: ['A. Every 30 minutes', 'B. Every 45 minutes', 'C. Once an hour', 'D. Twice daily'], answer: 'B' },
          { id: 13, type: 'mcq', question: 'Where is the Junior Inventor Workshop situated?', options: ['A. Inside the main entrance lobby', 'B. In the eastern basement', 'C. On the mezzanine level above the Planetarium', 'D. Outside by Gate 2'], answer: 'C' },
          { id: 14, type: 'mcq', question: 'What restriction applies to visitor baggage?', options: ['A. No backpacks allowed under any circumstances', 'B. Bags over 30 cm must be stored in the cloakroom', 'C. All bags are subject to a £5 fee', 'D. Luggage must be carried by shoulder straps'], answer: 'B' },
          { id: 15, type: 'mcq', question: 'Where does Fire Exit B lead during an evacuation?', options: ['A. Into the south car park', 'B. Onto the eastern lawn', 'C. Across the glass rotunda', 'D. Out to the bus stop'], answer: 'B' },
          { id: 16, type: 'notes', question: 'Wind-tunnel demonstrations take place in the _____ Hall.', answer: 'Clean Energy Exploration', placeholder: 'NO MORE THAN THREE WORDS' },
          { id: 17, type: 'notes', question: 'Visitors can deposit oversized bags in the cloakroom near Gate _____.', answer: '2', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 18, type: 'notes', question: 'Fire exit routes are indicated by arrows on the _____.', answer: 'floor', placeholder: 'ONE WORD ONLY' },
          { id: 19, type: 'notes', question: 'Demonstrations on wind energy occur every _____ minutes.', answer: '45', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 20, type: 'notes', question: 'The Junior Inventor Workshop is located above the _____.', answer: 'Planetarium', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s3Data = {
        title: `Section 3: Academic Tutorial on Quantitative Survey Biases`,
        context: `Two sociology postgraduates debating sampling skews and response attrition with their faculty research supervisor.`,
        script: [
          { speaker: 'PROFESSOR', text: `Welcome, Sarah and David. Let us evaluate the pilot survey instruments for your longitudinal study on remote workplace productivity.` },
          { speaker: 'SARAH', text: `Professor, our primary concern is self-selection bias: tech-savvy workers responded within hours, whereas manual clerical staff largely ignored the survey.` },
          { speaker: 'DAVID', text: `To mitigate this skew, we propose deploying stratified random sampling across four distinct vocational bands rather than relying on voluntary open links.` },
          { speaker: 'PROFESSOR', text: `An admirable adjustment. Make sure you cross-reference your weighting algorithms against Eurostat baseline demographic datasets.` },
          { speaker: 'SARAH', text: `We also identified that Likert scale response options containing seven points caused respondent cognitive fatigue after question twenty.` },
          { speaker: 'PROFESSOR', text: `Reducing to a standardized five-point scale will significantly suppress survey abandonment rates while preserving psychometric reliability.` }
        ],
        questions: [
          { id: 21, type: 'mcq', question: 'What primary bias affected the students’ initial pilot study?', options: ['A. Instrumental measurement error', 'B. Self-selection bias favoring tech-savvy workers', 'C. Translation inaccuracy across languages', 'D. High financial attrition'], answer: 'B' },
          { id: 22, type: 'mcq', question: 'How do Sarah and David plan to overcome this sampling distortion?', options: ['A. Doubling the cash incentive', 'B. Using stratified random sampling across four vocational bands', 'C. Conducting telephone interviews exclusively', 'D. Shortening the questionnaire to three items'], answer: 'B' },
          { id: 23, type: 'mcq', question: 'Which external benchmark dataset did the professor recommend for weighting calibration?', options: ['A. United Nations Census', 'B. Eurostat baseline demographic datasets', 'C. Cambridge Social Science Archive', 'D. World Health Organization survey'], answer: 'B' },
          { id: 24, type: 'mcq', question: 'Why did the seven-point Likert scale prove problematic?', options: ['A. Software could not record odd numbers', 'B. It induced cognitive fatigue after twenty questions', 'C. Participants requested open text boxes', 'D. The statistical variance was negligible'], answer: 'B' },
          { id: 25, type: 'mcq', question: 'What revised scale does the professor endorse?', options: ['A. Binary Yes/No format', 'B. Three-point neutral scale', 'C. Standardized five-point scale', 'D. Ten-point slider'], answer: 'C' },
          { id: 26, type: 'matching', question: 'Identified skew in initial survey', answer: 'Self-selection bias', options: ['Self-selection bias', 'Measurement error', 'Coder disagreement', 'Observer effect'] },
          { id: 27, type: 'matching', question: 'Proposed sampling solution', answer: 'Stratified random sampling', options: ['Stratified random sampling', 'Snowball sampling', 'Convenience sampling', 'Cluster sampling'] },
          { id: 28, type: 'matching', question: 'Recommended scale format', answer: 'Five-point scale', options: ['Five-point scale', 'Seven-point scale', 'Binary scale', 'Open dialogue'] },
          { id: 29, type: 'notes', question: 'The professor advised students to calibrate weights against _____ datasets.', answer: 'Eurostat', placeholder: 'ONE WORD ONLY' },
          { id: 30, type: 'notes', question: 'Reducing Likert points prevents survey _____ among respondents.', answer: 'abandonment', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s4Data = {
        title: `Section 4: Academic Lecture on Marine Bioluminescent Enzymes`,
        context: `A biochemistry professor lecturing on deep-sea luciferase catalysis and clinical diagnostic applications.`,
        script: [
          { speaker: 'LECTURER', text: `In today’s lecture on marine biotechnology, we investigate the biochemical architecture of bioluminescent reactions in abyssal organisms.` },
          { speaker: 'LECTURER', text: `Unlike terrestrial fireflies which utilize ATP-dependent luciferin oxidation, deep-sea copepods and ostracods employ calcium-activated photoproteins.` },
          { speaker: 'LECTURER', text: `The catalytic quantum yield of these marine enzymes reaches eighty-eight percent, making them nearly four times more efficient than synthetic fluorescent dyes.` },
          { speaker: 'LECTURER', text: `At hydrostatic pressures exceeding 400 atmospheres, the tertiary protein folds of these enzymes demonstrate remarkable conformational rigidity.` },
          { speaker: 'LECTURER', text: `In modern oncology diagnostics, genetically cloned luciferase reporters allow clinicians to detect micrometastases containing fewer than fifty malignant cells.` }
        ],
        questions: [
          { id: 31, type: 'notes', question: 'Marine copepods and ostracods utilize calcium-activated _____ rather than ATP.', answer: 'photoproteins', placeholder: 'ONE WORD ONLY' },
          { id: 32, type: 'notes', question: 'The catalytic quantum yield of deep-sea enzymes reaches _____ percent.', answer: 'eighty-eight', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 33, type: 'notes', question: 'Marine enzymes are almost four times more efficient than synthetic _____ dyes.', answer: 'fluorescent', placeholder: 'ONE WORD ONLY' },
          { id: 34, type: 'notes', question: 'Tertiary protein folds exhibit high stability under hydrostatic pressures exceeding _____ atmospheres.', answer: '400', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 35, type: 'notes', question: 'In clinical oncology, cloned luciferase can detect lesions with fewer than _____ malignant cells.', answer: 'fifty', placeholder: 'NUMBER OR WORDS' },
          { id: 36, type: 'notes', question: 'Luciferase systems function as diagnostic _____ in medical imaging.', answer: 'reporters', placeholder: 'ONE WORD ONLY' },
          { id: 37, type: 'notes', question: 'Unlike terrestrial fireflies, abyssal organisms do not rely on _____ oxidation.', answer: 'ATP-dependent', placeholder: 'ONE WORD OR HYPHENATED' },
          { id: 38, type: 'notes', question: 'The high efficiency is attributed to enzyme _____ rigidity.', answer: 'conformational', placeholder: 'ONE WORD ONLY' },
          { id: 39, type: 'mcq', question: 'What makes marine bioluminescence uniquely superior to synthetic dyes?', options: ['A. Cheaper industrial synthesis', 'B. Extraordinary 88% catalytic quantum yield', 'C. Resistance to sunlight fading', 'D. Solubility in non-polar solvents'], answer: 'B' },
          { id: 40, type: 'mcq', question: 'What is the primary medical benefit demonstrated in the lecture?', options: ['A. Eradication of bacterial infections', 'B. Detection of micrometastases with fewer than 50 cells', 'C. Regeneration of damaged neural pathways', 'D. Lowering of cardiovascular blood pressure'], answer: 'B' }
        ]
      };
    } else if (tNum === 3) {
      s1Data = {
        title: `Section 1: University Student Health & Sports Clinic Enrolment`,
        context: `An incoming student enrolling in the campus healthcare register and booking a mandatory physiotherapy assessment.`,
        script: [
          { speaker: 'CLERK', text: `Good morning. Welcome to University Health and Wellbeing Services. Let us register your medical profile.` },
          { speaker: 'STUDENT', text: `Hello, thank you. I am an international postgraduate student requiring clinic registration.` },
          { speaker: 'CLERK', text: `Splendid. May I have your full surname and passport nationality, please?` },
          { speaker: 'STUDENT', text: `My surname is Campbell, spelled C-A-M-P-B-E-L-L, and my nationality is Canadian.` },
          { speaker: 'CLERK', text: `And your NHS national health insurance registration code?` },
          { speaker: 'STUDENT', text: `It is NHS-CAN-${1000 + bNum * 17}.` },
          { speaker: 'CLERK', text: `Thank you, Mr. Campbell. Are you currently undergoing treatment for any chronic conditions, or taking prescribed medications?` },
          { speaker: 'STUDENT', text: `I have mild exercise-induced asthma for which I carry a salbutamol inhaler.` },
          { speaker: 'CLERK', text: `Noted. We will schedule your comprehensive baseline physical for Wednesday the 22nd at 10:30 AM in Consulting Suite ${bNum % 4 + 1}.` }
        ],
        questions: [
          { id: 1, type: 'form', question: 'Candidate Family Name', answer: 'Campbell', hint: 'Surname', instruction: 'Write ONE WORD ONLY' },
          { id: 2, type: 'form', question: 'Applicant Nationality', answer: 'Canadian', hint: 'Country/Citizen', instruction: 'Write ONE WORD ONLY' },
          { id: 3, type: 'form', question: 'NHS Registration Code', answer: `NHS-CAN-${1000 + bNum * 17}`, hint: 'Format: NHS-CAN-digits', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 4, type: 'form', question: 'Chronic Condition', answer: 'asthma', hint: 'Health issue', instruction: 'Write ONE WORD ONLY' },
          { id: 5, type: 'form', question: 'Prescribed Inhaler Medication', answer: 'salbutamol', hint: 'Medicine name', instruction: 'Write ONE WORD ONLY' },
          { id: 6, type: 'form', question: 'Appointment Day', answer: 'Wednesday', hint: 'Day of week', instruction: 'Write ONE WORD ONLY' },
          { id: 7, type: 'form', question: 'Appointment Date', answer: '22nd', hint: 'Day of month', instruction: 'Write NUMBER OR WORDS' },
          { id: 8, type: 'form', question: 'Appointment Time', answer: '10:30 AM', hint: 'Time', instruction: 'Write TIME ONLY' },
          { id: 9, type: 'form', question: 'Consulting Suite Number', answer: `Suite ${bNum % 4 + 1}`, hint: 'Room', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 10, type: 'form', question: 'Service Name', answer: 'Health and Wellbeing', hint: 'Department', instruction: 'Write NO MORE THAN THREE WORDS' }
        ]
      };
      s2Data = {
        title: `Section 2: Coastal Wetland Nature Reserve Guided Trail Walk`,
        context: `A conservation ranger briefing birdwatchers on boardwalk trail safety, migratory waterfowl, and high-tide timetables.`,
        script: [
          { speaker: 'RANGER', text: `Welcome, wildlife enthusiasts, to the Blackwater Saltmarsh and Coastal Wetland Reserve.` },
          { speaker: 'RANGER', text: `Before you venture out, note that the intertidal boardwalk extends 2.4 kilometres across the salt marsh to the Kingfisher Hide.` },
          { speaker: 'RANGER', text: `High tide today occurs at 3:15 PM, at which time the lower mudflat causeway becomes completely submerged.` },
          { speaker: 'RANGER', text: `Visitors are strictly requested to remain upon designated elevated wooden boardwalks to avoid trampling sensitive glasswort vegetation.` },
          { speaker: 'RANGER', text: `Binoculars with 10x magnification can be rented from the Visitor Center desk for a refundable deposit of £15.` },
          { speaker: 'RANGER', text: `Please ensure all mobile devices are switched to silent mode to avoid startling nesting avocet colonies.` }
        ],
        questions: [
          { id: 11, type: 'mcq', question: 'How long is the intertidal boardwalk to the Kingfisher Hide?', options: ['A. 1.2 kilometres', 'B. 1.8 kilometres', 'C. 2.4 kilometres', 'D. 3.5 kilometres'], answer: 'C' },
          { id: 12, type: 'mcq', question: 'At what time does high tide submerge the lower causeway?', options: ['A. 1:45 PM', 'B. 2:30 PM', 'C. 3:15 PM', 'D. 4:00 PM'], answer: 'C' },
          { id: 13, type: 'mcq', question: 'Why must visitors stay exclusively on the wooden boardwalks?', options: ['A. Dangerous quicksand on trails', 'B. To prevent trampling sensitive glasswort flora', 'C. Wild cattle graze off-trail', 'D. Danger of venomous snakes'], answer: 'B' },
          { id: 14, type: 'mcq', question: 'What optical equipment is available for hire at the visitor desk?', options: ['A. Tripod telescopes', 'B. 10x magnification binoculars', 'C. Night-vision monoculars', 'D. Telephoto camera lenses'], answer: 'B' },
          { id: 15, type: 'mcq', question: 'Which bird species is currently nesting on the reserve?', options: ['A. Peregrine falcon', 'B. Avocet colonies', 'C. Golden eagle', 'D. Barn owl'], answer: 'B' },
          { id: 16, type: 'notes', question: 'The total length of the boardwalk trail is _____ kilometres.', answer: '2.4', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 17, type: 'notes', question: 'The refundable deposit for binocular rental is £_____.', answer: '15', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 18, type: 'notes', question: 'Mobile phones must be set to _____ mode.', answer: 'silent', placeholder: 'ONE WORD ONLY' },
          { id: 19, type: 'notes', question: 'Boardwalk pathways lead to the _____ Hide.', answer: 'Kingfisher', placeholder: 'ONE WORD ONLY' },
          { id: 20, type: 'notes', question: 'High tide will flood the lower _____ at 3:15 PM.', answer: 'causeway', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s3Data = {
        title: `Section 3: Environmental Engineering Seminar on Community Microgrids`,
        context: `Students evaluating localized solar-plus-storage microgrids and algorithmic demand-side management with their seminar director.`,
        script: [
          { speaker: 'TUTOR', text: `Let us examine your project on distributed energy microgrids. Your simulation models look impressive.` },
          { speaker: 'STUDENT_A', text: `Thank you, Dr. Zhang. We modeled an isolated island grid integrating four megawatts of solar photovoltaic capacity with lithium iron phosphate batteries.` },
          { speaker: 'STUDENT_B', text: `Our primary challenge was managing the late-afternoon ramp rate when solar generation plummets just as residential air conditioning peaks.` },
          { speaker: 'TUTOR', text: `Indeed, the classic duck curve phenomenon. How did your algorithm resolve the grid frequency oscillation?` },
          { speaker: 'STUDENT_A', text: `We implemented automated smart thermostat shedding: cycling non-critical water heaters across alternating fifteen-minute intervals smoothed the load profile by 32%.` }
        ],
        questions: [
          { id: 21, type: 'mcq', question: 'What battery chemistry did the students select for their microgrid simulation?', options: ['A. Lead-acid', 'B. Lithium iron phosphate', 'C. Nickel-cadmium', 'D. Flow batteries'], answer: 'B' },
          { id: 22, type: 'mcq', question: 'What operational challenge caused grid frequency destabilization?', options: ['A. Extreme cloud cover in mornings', 'B. Late-afternoon solar decline coinciding with peak AC consumption', 'C. Battery overheating during charging', 'D. Transmission line impedance loss'], answer: 'B' },
          { id: 23, type: 'mcq', question: 'What load-smoothing strategy did the algorithm apply to domestic water heaters?', options: ['A. Complete disconnection for four hours', 'B. Alternating 15-minute cycling of non-critical units', 'C. Mandating gas-powered backups', 'D. Raising water tariffs during peak hours'], answer: 'B' },
          { id: 24, type: 'mcq', question: 'By what percentage was the peak electrical load smoothed?', options: ['A. 15%', 'B. 24%', 'C. 32%', 'D. 48%'], answer: 'C' },
          { id: 25, type: 'mcq', question: 'What total solar capacity was modeled on the island microgrid?', options: ['A. 1 megawatt', 'B. 2.5 megawatts', 'C. 4 megawatts', 'D. 10 megawatts'], answer: 'C' },
          { id: 26, type: 'matching', question: 'Selected storage technology', answer: 'Lithium iron phosphate', options: ['Lithium iron phosphate', 'Vanadium redox flow', 'Pumped hydro', 'Flywheel kinetic'] },
          { id: 27, type: 'matching', question: 'Primary technical hurdle', answer: 'Duck curve ramp rate', options: ['Duck curve ramp rate', 'Transmission resistance', 'Transformer blowout', 'Solar panel shading'] },
          { id: 28, type: 'matching', question: 'Achieved peak reduction', answer: '32%', options: ['15%', '24%', '32%', '45%'] },
          { id: 29, type: 'notes', question: 'Demand-side management cycled water heaters across _____ minute intervals.', answer: 'fifteen', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 30, type: 'notes', question: 'The phenomenon where solar drops while demand rises is called the _____ curve.', answer: 'duck', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s4Data = {
        title: `Section 4: Academic Lecture on Archaeometallurgy and Bronze Age Alloy Trade`,
        context: `An archaeology professor lecturing on tin isotope tracing and trans-Eurasian trade networks in the 2nd millennium BCE.`,
        script: [
          { speaker: 'LECTURER', text: `In today’s lecture on Bronze Age civilization, we investigate the fundamental archaeological enigma: the provenance of ancient tin.` },
          { speaker: 'LECTURER', text: `While copper deposits were plentiful across the Mediterranean basin, tin was extraordinarily scarce, requiring an optimal ratio of twelve percent tin to eighty-eight percent copper to forge bronze.` },
          { speaker: 'LECTURER', text: `Recent lead and tin isotopic ratio mass spectrometry conducted on ingots from the Uluburun shipwreck has conclusively demonstrated that tin ores originated in Central Asian highland deposits in modern-day Tajikistan and Uzbekistan.` },
          { speaker: 'LECTURER', text: `This indicates that complex, overland trade routes spanning over three thousand kilometres operated systematically as early as 1300 BCE.` }
        ],
        questions: [
          { id: 31, type: 'notes', question: 'Forging durable bronze required a tin proportion of _____ percent.', answer: 'twelve', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 32, type: 'notes', question: 'The copper component in standard ancient bronze was _____ percent.', answer: 'eighty-eight', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 33, type: 'notes', question: 'Isotopic studies were conducted on metal ingots retrieved from the _____ shipwreck.', answer: 'Uluburun', placeholder: 'ONE WORD ONLY' },
          { id: 34, type: 'notes', question: 'Mass spectrometry traced tin ores to highland mines in Tajikistan and _____.', answer: 'Uzbekistan', placeholder: 'ONE WORD ONLY' },
          { id: 35, type: 'notes', question: 'Trans-Eurasian trade corridors spanned distances exceeding _____ kilometres.', answer: 'three thousand', placeholder: 'NUMBER OR WORDS' },
          { id: 36, type: 'notes', question: 'Archaeological evidence dates these overland networks to approximately _____ BCE.', answer: '1300', placeholder: 'WRITE A YEAR ONLY' },
          { id: 37, type: 'notes', question: 'The analytical method utilized was _____ ratio mass spectrometry.', answer: 'isotopic', placeholder: 'ONE WORD ONLY' },
          { id: 38, type: 'notes', question: 'While tin was scarce, deposits of _____ were widespread around the Mediterranean.', answer: 'copper', placeholder: 'ONE WORD ONLY' },
          { id: 39, type: 'mcq', question: 'What primary archaeological conclusion emerged from the Uluburun shipwreck ingot analysis?', options: ['A. Bronze Age societies lacked international trade', 'B. Complex overland trade corridors operated across 3,000 km by 1300 BCE', 'C. Tin was sourced exclusively from British mines in Cornwall', 'D. Copper and tin were smelted in marine water'], answer: 'B' },
          { id: 40, type: 'mcq', question: 'What was the exact compositional ratio of classic archaeological bronze?', options: ['A. 50% tin, 50% copper', 'B. 25% tin, 75% copper', 'C. 12% tin, 88% copper', 'D. 5% tin, 95% copper'], answer: 'C' }
        ]
      };
    } else {
      // tNum === 4
      s1Data = {
        title: `Section 1: Community Municipal Sports and Fitness Center Induction`,
        context: `A resident joining the local council recreational athletic club and booking induction sessions with an athletic director.`,
        script: [
          { speaker: 'DIRECTOR', text: `Good afternoon! Welcome to Kingswood Community Athletic Club. Let us get your membership activated.` },
          { speaker: 'APPLICANT', text: `Hello, I would like to join the Full Gold Membership covering racquet sports and lane swimming.` },
          { speaker: 'DIRECTOR', text: `Wonderful. May I record your full surname and emergency contact telephone number?` },
          { speaker: 'APPLICANT', text: `My surname is Fletcher, F-L-E-T-C-H-E-R, and my emergency mobile is 07700 900${bNum + 10}55.` },
          { speaker: 'DIRECTOR', text: `Thank you, Mr. Fletcher. The Gold Monthly subscription is £${48 + bNum * 2}, with a one-time induction keycard charge of £15.` },
          { speaker: 'APPLICANT', text: `That is reasonable. When can I schedule my fitness assessment and locker assignment?` },
          { speaker: 'DIRECTOR', text: `We have slots open this Thursday at 6:15 PM in Gymnasium Studio ${bNum % 3 + 1}. Please remember non-marking athletic shoes are mandatory.` }
        ],
        questions: [
          { id: 1, type: 'form', question: 'Candidate Family Name', answer: 'Fletcher', hint: 'Surname', instruction: 'Write ONE WORD ONLY' },
          { id: 2, type: 'form', question: 'Emergency Contact Mobile', answer: `07700 900${bNum + 10}55`, hint: 'Phone digits', instruction: 'Write THE PHONE NUMBER' },
          { id: 3, type: 'form', question: 'Selected Membership Tier', answer: 'Gold', hint: 'Tier name', instruction: 'Write ONE WORD ONLY' },
          { id: 4, type: 'form', question: 'Monthly Subscription (£)', answer: `${48 + bNum * 2}`, hint: 'Fee in pounds', instruction: 'Write A NUMBER ONLY' },
          { id: 5, type: 'form', question: 'One-time Keycard Fee (£)', answer: '15', hint: 'Induction fee', instruction: 'Write A NUMBER ONLY' },
          { id: 6, type: 'form', question: 'Induction Session Day', answer: 'Thursday', hint: 'Day', instruction: 'Write ONE WORD ONLY' },
          { id: 7, type: 'form', question: 'Induction Session Time', answer: '6:15 PM', hint: 'Time', instruction: 'Write TIME ONLY' },
          { id: 8, type: 'form', question: 'Studio Location', answer: `Studio ${bNum % 3 + 1}`, hint: 'Room', instruction: 'Write ONE WORD AND/OR A NUMBER' },
          { id: 9, type: 'form', question: 'Mandatory Footwear Requirement', answer: 'non-marking athletic shoes', hint: 'Footwear', instruction: 'Write NO MORE THAN THREE WORDS' },
          { id: 10, type: 'form', question: 'Sports Covered in Gold Tier', answer: 'racquet sports and swimming', hint: 'Activities', instruction: 'Write NO MORE THAN FOUR WORDS' }
        ]
      };
      s2Data = {
        title: `Section 2: City Municipal Rapid Transit Electrification Plan`,
        context: `The city transport commissioner presenting the new zero-emission tram and bus rapid transit network to residents.`,
        script: [
          { speaker: 'COMMISSIONER', text: `Good evening, citizens. Tonight I outline our 2030 Urban Rapid Transit Electrification Roadmap.` },
          { speaker: 'COMMISSIONER', text: `Phase 1 involves constructing a dedicated eleven-kilometre light rail spine running from Northway Park-and-Ride to Central Railway Terminal.` },
          { speaker: 'COMMISSIONER', text: `Trams will operate with three-minute headways during peak commuter hours, powered by rooftop pantographs connected to localized solar substations.` },
          { speaker: 'COMMISSIONER', text: `To safeguard residential quiet, vehicles will feature regenerative regenerative electromagnetic braking and acoustic rubber track dampers, reducing ambient track noise by 65%.` },
          { speaker: 'COMMISSIONER', text: `Real-time digital displays will be installed at all twenty-two platform shelters, displaying arrivals in real time.` }
        ],
        questions: [
          { id: 11, type: 'mcq', question: 'How long is the Phase 1 light rail corridor?', options: ['A. 7 kilometres', 'B. 11 kilometres', 'C. 15 kilometres', 'D. 22 kilometres'], answer: 'B' },
          { id: 12, type: 'mcq', question: 'What is the planned headway between trams during rush hour?', options: ['A. 2 minutes', 'B. 3 minutes', 'C. 5 minutes', 'D. 8 minutes'], answer: 'B' },
          { id: 13, type: 'mcq', question: 'By what percentage will acoustic track dampers lower track noise?', options: ['A. 40%', 'B. 50%', 'C. 65%', 'D. 80%'], answer: 'C' },
          { id: 14, type: 'mcq', question: 'How many platform shelters will receive real-time digital displays?', options: ['A. 11 shelters', 'B. 16 shelters', 'C. 22 shelters', 'D. 30 shelters'], answer: 'C' },
          { id: 15, type: 'mcq', question: 'Where is the northern terminus of the new light rail spine located?', options: ['A. Central Railway Terminal', 'B. Northway Park-and-Ride', 'C. South Market Square', 'D. University Hospital'], answer: 'B' },
          { id: 16, type: 'notes', question: 'The total length of the Phase 1 light rail spine is _____ kilometres.', answer: '11', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 17, type: 'notes', question: 'Trams will run with _____ minute headways during peak hours.', answer: 'three', placeholder: 'NUMBER OR WORDS' },
          { id: 18, type: 'notes', question: 'Acoustic dampers will reduce ambient wheel noise by _____ percent.', answer: '65', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 19, type: 'notes', question: 'Passenger information screens will be installed at _____ platform stops.', answer: '22', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 20, type: 'notes', question: 'The transit system is powered by substations utilizing _____ energy.', answer: 'solar', placeholder: 'ONE WORD ONLY' }
        ]
      };
      s3Data = {
        title: `Section 3: Cognitive Linguistics Seminar on Bilingual Syntax Acquisition`,
        context: `Linguistics undergraduates debating critical period phoneme discrimination and grammatical parsing in bilingual infants.`,
        script: [
          { speaker: 'PROFESSOR', text: `Welcome, team. Let us review the empirical findings from your infant electroencephalography trials.` },
          { speaker: 'STUDENT_A', text: `Our EEG data confirms that bilingual infants exposed to English and Mandarin retain acoustic sensitivity to tonal pitch variations up to fourteen months.` },
          { speaker: 'STUDENT_B', text: `Whereas monolingual infants in the control cohort exhibited synaptic pruning of non-native phonetic contrasts by eight to ten months.` },
          { speaker: 'PROFESSOR', text: `That provides robust physiological support for Kuhl’s Social Gating Hypothesis: interactive communicative exposure preserves neural plasticity.` },
          { speaker: 'STUDENT_A', text: `We also noted that bilingual syntax development exhibits a momentary latency in single-word vocabulary tests, which vanishes completely by age four.` }
        ],
        questions: [
          { id: 21, type: 'mcq', question: 'How long did bilingual infants retain sensitivity to tonal pitch variations?', options: ['A. 6 months', 'B. 10 months', 'C. 14 months', 'D. 24 months'], answer: 'C' },
          { id: 22, type: 'mcq', question: 'When did synaptic pruning of non-native phonemes occur in monolingual infants?', options: ['A. By 4 to 6 months', 'B. By 8 to 10 months', 'C. After 18 months', 'D. At school age'], answer: 'B' },
          { id: 23, type: 'mcq', question: 'Which theoretical model was supported by the experimental findings?', options: ['A. Chomsky’s Universal Grammar', 'B. Kuhl’s Social Gating Hypothesis', 'C. Skinner’s Behaviorist Reinforcement', 'D. Piaget’s Sensorimotor Stage'], answer: 'B' },
          { id: 24, type: 'mcq', question: 'By what age did the temporary vocabulary latency in bilingual infants disappear?', options: ['A. Age two', 'B. Age three', 'C. Age four', 'D. Age six'], answer: 'C' },
          { id: 25, type: 'mcq', question: 'What neuroimaging technique was utilized in the research trials?', options: ['A. Functional MRI', 'B. Electroencephalography (EEG)', 'C. Positron emission tomography', 'D. Near-infrared spectroscopy'], answer: 'B' },
          { id: 26, type: 'matching', question: 'Observed phenomenon in monolinguals', answer: 'Synaptic pruning by 10 months', options: ['Synaptic pruning by 10 months', 'Extended tone sensitivity', 'Vocabulary surge at age 1', 'Grammar acceleration'] },
          { id: 27, type: 'matching', question: 'Observed phenomenon in bilinguals', answer: 'Tonal discrimination to 14 months', options: ['Tonal discrimination to 14 months', 'Permanent vocabulary deficit', 'Loss of acoustic flexibility', 'Speech hesitation'] },
          { id: 28, type: 'matching', question: 'Resolution age for vocabulary latency', answer: 'Age four', options: ['Age two', 'Age three', 'Age four', 'Age five'] },
          { id: 29, type: 'notes', question: 'The supported linguistic framework is the Social _____ Hypothesis.', answer: 'Gating', placeholder: 'ONE WORD ONLY' },
          { id: 30, type: 'notes', question: 'Infant acoustic sensitivity trials utilized _____ brainwave telemetry.', answer: 'EEG', placeholder: 'ONE WORD OR ACRONYM' }
        ]
      };
      s4Data = {
        title: `Section 4: Academic Lecture on Silica Aerogels and Thermal Superinsulation`,
        context: `A materials science lecture on sol-gel supercritical drying and high-porosity insulation in spacecraft shielding.`,
        script: [
          { speaker: 'LECTURER', text: `In today’s lecture on advanced nanomaterials, we investigate the synthesis and industrial applications of silica aerogels.` },
          { speaker: 'LECTURER', text: `Aerogels are synthesized via a sol-gel process followed by supercritical carbon dioxide extraction, eliminating surface tension that would otherwise collapse the delicate nanoporous lattice.` },
          { speaker: 'LECTURER', text: `The resulting material consists of up to ninety-nine point eight percent air by volume, with a thermal conductivity as low as 0.012 watts per metre-kelvin.` },
          { speaker: 'LECTURER', text: `This microscopic architecture confines atmospheric gas molecules within pore diameters smaller than their mean free path—a phenomenon known as the Knudsen effect.` },
          { speaker: 'LECTURER', text: `Consequently, a two-centimetre aerogel tile can shield sensitive aerospace avionics from blast temperatures exceeding 1200 degrees Celsius.` }
        ],
        questions: [
          { id: 31, type: 'notes', question: 'Aerogels are manufactured using a sol-gel process followed by supercritical _____ extraction.', answer: 'carbon dioxide', placeholder: 'NO MORE THAN TWO WORDS' },
          { id: 32, type: 'notes', question: 'Supercritical drying prevents capillary surface _____ from destroying the porous matrix.', answer: 'tension', placeholder: 'ONE WORD ONLY' },
          { id: 33, type: 'notes', question: 'Aerogel consists of up to ninety-nine point _____ percent air by volume.', answer: 'eight', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 34, type: 'notes', question: 'Thermal conductivity is measured as low as _____ watts per metre-kelvin.', answer: '0.012', placeholder: 'WRITE A DECIMAL ONLY' },
          { id: 35, type: 'notes', question: 'Pore diameters smaller than the molecular mean free path induce the _____ effect.', answer: 'Knudsen', placeholder: 'ONE WORD ONLY' },
          { id: 36, type: 'notes', question: 'An aerogel tile measuring _____ centimetres shields electronics from extreme heat.', answer: 'two', placeholder: 'WRITE NUMBER OR WORDS' },
          { id: 37, type: 'notes', question: 'Tiles can withstand aerospace temperatures exceeding _____ degrees Celsius.', answer: '1200', placeholder: 'WRITE A NUMBER ONLY' },
          { id: 38, type: 'notes', question: 'Aerogel insulation is deployed to safeguard delicate aerospace _____.', answer: 'avionics', placeholder: 'ONE WORD ONLY' },
          { id: 39, type: 'mcq', question: 'What primary physical mechanism accounts for aerogel’s miraculous thermal insulation?', options: ['A. High density metallic reflection', 'B. Knudsen effect suppressing gas-phase molecular collisions', 'C. Continuous refrigeration coils', 'D. Chemical combustion resistance'], answer: 'B' },
          { id: 40, type: 'mcq', question: 'Why is supercritical carbon dioxide extraction essential in aerogel manufacturing?', options: ['A. It colors the glass blue', 'B. It eliminates surface tension to prevent lattice collapse', 'C. It adds heavy minerals to the pores', 'D. It lowers the production cost to zero'], answer: 'B' }
        ]
      };
    }

    const listeningTest = {
      id: `${testId}_L`,
      bookNumber: bNum,
      testNumber: tNum,
      title: `${testTitle} – Official Listening Examination`,
      difficulty: meta.difficulty,
      era: era.name,
      durationMinutes: 30,
      sections: [
        { section: 1, ...s1Data, accent: 'British / International English', audioNotes: 'Natural pacing, dialogic interaction, contact information, numerical figures, and specific names.' },
        { section: 2, ...s2Data, accent: 'British / Australian English', audioNotes: 'Monologue describing facilities, directional layout, safety regulations, and operational hours.' },
        { section: 3, ...s3Data, accent: 'Academic Received Pronunciation / International', audioNotes: 'Fast academic debate, evaluation of research methodology, critical source analysis, and project deadlines.' },
        { section: 4, ...s4Data, accent: 'Academic Received Pronunciation (British English)', audioNotes: 'Continuous scholarly monologue, advanced academic lexicon, precise technical mechanisms, and systemic evolutionary or physical principles.' }
      ]
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 2. FULL READING TEST (3 PASSAGES, 40 QUESTIONS)
    // ──────────────────────────────────────────────────────────────────────────
    const passageTopics = tNum === 1 ? meta.reading : [
      { id: `${testId}_P1`, title: tNum === 2 ? 'The Engineering and Architectural Wonders of Roman Aqueducts' : tNum === 3 ? 'Polynesian Wayfinding and Trans-Oceanic Canoe Navigation' : 'The Agrarian Domestication of Maize in Pre-Columbian Mesoamerica', diff: 'Easy' },
      { id: `${testId}_P2`, title: tNum === 2 ? 'Collective Spatial Navigation and Swarm Intelligence in Avian Flocks' : tNum === 3 ? 'Microplastic Infiltration Across Freshwater Benthic Trophic Chains' : 'Cryogenic Preservation and Molecular Kinetics of Extremophilic Enzymes', diff: 'Medium' },
      { id: `${testId}_P3`, title: tNum === 2 ? 'The Neurobiology of Dual-Process Decision Making and Heuristic Fallacies' : tNum === 3 ? 'Quantum Superposition and the Post-RSA Cryptographic Paradigm' : 'Synthetic Genomics and the Artificial Synthesis of Functional Chromosomes', diff: 'Hard' }
    ];

    const readingPassages = passageTopics.map((pMeta, pIndex) => {
      const qOffset = pIndex === 0 ? 0 : pIndex === 1 ? 13 : 27;
      const qCount = pIndex === 0 ? 13 : pIndex === 1 ? 14 : 13;

      const paragraphs = [
        { label: 'A', text: `Scholarly inquiry into ${pMeta.title.toLowerCase()} provides profound insights into how human knowledge systems and ecological environments intersect. During early classical investigations, observers relied upon descriptive observational records, cataloguing empirical phenomena according to visible morphological characteristics. However, with the emergence of calibrated quantitative methodologies throughout the nineteenth century, researchers began deciphering the fundamental physical laws and selective pressures that govern complex systems.` },
        { label: 'B', text: `A defining debate within the discipline centered upon the interplay between deterministic mechanisms and stochastic environmental fluctuations. Proponents of deterministic models maintained that systemic trajectories could be anticipated with mathematical certainty provided that initial boundary metrics were precisely registered. In contrast, opponents demonstrated that infinitesimal variations in ambient microclimatic conditions could trigger cascading bifurcations, imposing an intractable limit upon predictive certainty.` },
        { label: 'C', text: `Extensive field measurements gathered across diverse geographic ecologies have conclusively corroborated the non-linear paradigm. In boreal peatlands and tropical rain forests alike, empirical researchers documented critical tipping thresholds—sudden, irreversible regime shifts wherein ecological communities underwent permanent reorganizations into alternate structural equilibria. These findings carried profound ramifications for environmental governance, emphasizing adaptive flexibility over rigid maximization.` },
        { label: 'D', text: `The socioeconomic ramifications of these breakthroughs have proved equally profound. In rural regions where localized agrarian communities directly rely upon contiguous ecosystem services for sustenance, policies predicated on oversimplified linear assumptions repeatedly precipitated severe resource depletion. Conversely, participatory management frameworks that integrated local indigenous expertise alongside high-resolution sensor monitoring achieved statistically significant enhancements in ecological stability and household food security.` },
        { label: 'E', text: `Recent revolutions in autonomous sensing and spatial data analytics have redefined scientific capability. By synthesizing multi-spectral orbital telemetry with passive acoustic arrays and environmental DNA sampling, investigators can now trace biological fluxes across continental scales with sub-weekly temporal resolution. These automated systems have illuminated previously undocumented migratory pathways and quantified soil carbon turnover rates with unprecedented precision.` },
        { label: 'F', text: `Notwithstanding these remarkable instrumentation breakthroughs, substantial methodological quandaries endure. Sensor baseline drifts across extreme thermal gradients remain difficult to counteract without continuous physical recalibration, while machine-learning classifiers trained predominantly on temperate reference samples frequently display high false-positive rates when deployed in equatorial ecosystems. Leading researchers urge that automated data pipelines must serve as exploratory aids rather than unchallengeable arbiters of conservation policy.` },
        { label: 'G', text: `Looking forward, transdisciplinary integration represents the most viable pathway for addressing systemic global challenges. When evolutionary geneticists collaborate with resource economists, human geographers, and sensor engineers, the resultant syntheses transcend the epistemic blind spots inherent in isolated disciplines. Cultivating such multidimensional inquiry is no longer an abstract intellectual exercise, but an indispensable prerequisite for planetary sustainability.` }
      ];

      const questions = [];
      for (let i = 1; i <= qCount; i++) {
        const qId = qOffset + i;
        if (i <= 5) {
          questions.push({
            id: qId,
            type: 'heading_match',
            question: i === 1 ? 'Early descriptive observations versus calibrated quantitative methodologies' :
                      i === 2 ? 'The foundational controversy: deterministic laws vs stochastic fluctuation' :
                      i === 3 ? 'Empirical documentation of tipping thresholds and alternate equilibria' :
                      i === 4 ? 'Socioeconomic consequences and the superiority of participatory management' :
                                'High-resolution telemetry and continental ecological monitoring',
            answer: String.fromCharCode(64 + i),
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
          });
        } else if (i <= 9) {
          questions.push({
            id: qId,
            type: 'TFNG',
            question: i === 6 ? 'Early classical investigators had access to calibrated digital sensors to measure structural variables.' :
                      i === 7 ? 'Deterministic scientific models presume future states can be calculated if starting conditions are known.' :
                      i === 8 ? 'Ecological tipping thresholds are gradual, easily reversible structural modifications.' :
                                'Participatory resource management that included local knowledge yielded improved resilience outcomes.',
            answer: i === 6 ? 'FALSE' : i === 7 ? 'TRUE' : i === 8 ? 'FALSE' : 'TRUE',
            options: ['TRUE', 'FALSE', 'NOT GIVEN']
          });
        } else if (i <= 11) {
          questions.push({
            id: qId,
            type: 'summary',
            question: i === 10 ? 'Satellite remote sensing is combined with passive acoustics and environmental _____ telemetry.' :
                                 'Machine-learning models trained on temperate data often generate false-positive errors in _____ ecosystems.',
            answer: i === 10 ? 'DNA' : 'equatorial',
            placeholder: 'ONE WORD ONLY'
          });
        } else {
          questions.push({
            id: qId,
            type: 'mcq',
            question: i === 12 ? 'What is the author’s primary caution regarding automated data analytics in paragraph F?' :
                                 'In paragraph G, what does the author advocate as the most fruitful approach to resolving global dilemmas?',
            options: i === 12 ? [
              'A. Automated algorithms are completely unreliable and should be abandoned',
              'B. They are too costly for non-governmental organizations to license',
              'C. They should be utilized as exploratory aids rather than unchallengeable policy arbiters',
              'D. They have been outlawed by international scientific conventions'
            ] : [
              'A. Confining environmental research exclusively to single disciplines',
              'B. Transdisciplinary collaboration integrating genetics, economics, and sensor engineering',
              'C. Imposing identical environmental regulations across all developed economies',
              'D. Replacing field surveys with computer simulations entirely'
            ],
            answer: i === 12 ? 'C' : 'B'
          });
        }
      }

      return {
        id: pMeta.id,
        bookNumber: bNum,
        testNumber: tNum,
        passageNumber: pIndex + 1,
        title: pMeta.title,
        difficulty: pMeta.diff,
        wordCount: 780 + bNum * 10 + tNum * 15,
        paragraphs: paragraphs,
        questions: questions
      };
    });

    // ──────────────────────────────────────────────────────────────────────────
    // 3. FULL WRITING TEST (TASK 1 VISUAL + TASK 2 ACADEMIC ESSAY)
    // Systematically rotates Task 1 format across Tests 1–4:
    // Test 1: Bar Chart / Line Graph
    // Test 2: Pie Chart / Data Table
    // Test 3: Map / Floor Plan Transformation (Before vs After)
    // Test 4: Process Flowchart / Cyclical Sequence
    // ──────────────────────────────────────────────────────────────────────────
    let t1Data, t2Data;

    if (typeof window !== 'undefined' && window.CambridgeWritingData && window.CambridgeWritingData.hasWritingTest(bNum, tNum)) {
      const dbTest = window.CambridgeWritingData.getWritingTest(bNum, tNum);
      t1Data = dbTest.task1;
      t2Data = dbTest.task2;
    } else if (tNum === 1) {
      // Test 1: Bar Chart / Line Graph
      const isLine = (bNum % 2 === 0);
      t1Data = {
        id: `${testId}_W1`,
        title: `Comparative Global Indices in ${meta.theme.split(',')[0]} (1995–2025)`,
        chartType: isLine ? 'line' : 'bar',
        instruction: `The ${isLine ? 'line graph' : 'bar chart'} below illustrates comparative data concerning ${meta.theme.split(',')[0].toLowerCase()} across five surveyed economies between 1995 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        chartData: {
          title: `Comparative Indicators (1995 vs 2025)`,
          labels: ['Nation A', 'Nation B', 'Nation C', 'Nation D', 'Nation E'],
          categories: ['Nation A', 'Nation B', 'Nation C', 'Nation D', 'Nation E'],
          datasets: [
            { label: '1995 Baseline', data: [32 + bNum, 45, 60 + (bNum % 5), 25, 38], backgroundColor: 'rgba(79,70,229,0.75)', borderColor: '#4F46E5', fill: false },
            { label: '2025 Observed', data: [58 + (bNum % 4), 41, 79 + (bNum % 3), 48 + bNum, 54], backgroundColor: 'rgba(6,182,212,0.75)', borderColor: '#06B6D4', fill: false }
          ],
          colors: ['#4F46E5', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
        },
        xLabel: 'Surveyed Nations',
        yLabel: 'Percentage Index (%)',
        keyFeatures: [
          'Nation C consistently commanded the foremost position across both benchmark periods.',
          'Nation D exhibited the most pronounced proportional increase, nearly doubling over the timeframe.',
          'Overall, an upward trajectory was registered across four out of the five surveyed economies.'
        ],
        modelAnswer: `The provided graphic delineates comparative statistics regarding ${meta.theme.split(',')[0].toLowerCase()} metrics across five distinct nations between 1995 and 2025.

Overall, the data displays a prevailing upward trajectory across the majority of surveyed countries, with Nation C consistently commanding the foremost position throughout the timeframe, while Nation D registered the most dynamic relative expansion.

In 1995, Nation C established the benchmark peak at 60%, followed by Nation B and Nation E at 45% and 38% respectively. Nation A stood at 32%, whereas Nation D occupied the lowest position at 25%.

By 2025, Nation C extended its supremacy to reach 79%. Most strikingly, Nation D nearly doubled its metric to 48%, representing the most dramatic proportional surge in the survey. Nation A and Nation E likewise recorded solid advancements to 58% and 54% respectively. Conversely, Nation B was the sole exception to this growth, exhibiting a modest contraction from 45% down to 41%.`
      };
      t2Data = {
        id: `${testId}_W2`,
        topic: meta.writing.t2Topic,
        question: meta.writing.t2Prompt,
        keywords: ['systemic policy', 'institutional reform', 'technological innovation', 'socioeconomic equity', 'long-term sustainability'],
        planningStructure: {
          introduction: 'Paraphrase the prompt; delineate both countervailing viewpoints; articulate clear personal thesis.',
          body1: 'Examine institutional and historical arguments emphasizing predictability and social cohesion.',
          body2: 'Analyze progressive technological and economic arguments emphasizing individual flexibility and modernization.',
          conclusion: 'Synthesize findings and affirm final personal stance with forward-looking recommendation.'
        },
        highBandVocabulary: [
          { word: 'proliferate', meaning: 'rapidly multiply or expand', example: 'Digital instructional platforms proliferate across academic institutions.' },
          { word: 'indispensable', meaning: 'absolutely essential', example: 'Informed civic participation remains indispensable to institutional accountability.' },
          { word: 'exacerbate', meaning: 'make an existing problem worse', example: 'Unchecked tuition hikes exacerbate systemic socioeconomic disparities.' }
        ],
        modelAnswer: `The question of whether ${meta.writing.t2Topic.toLowerCase()} should be governed primarily through conventional institutional frameworks or guided by emerging modern methodologies remains a matter of intense scholarly and societal contention. While traditionalist approaches offer undeniable structural stability, I contend that embracing modern, flexible innovations yields superior long-term socioeconomic outcomes, provided robust ethical safeguards are maintained.

Proponents of conventional paradigms present compelling arguments grounded in empirical precedence. Established frameworks benefit from decades of rigorous peer review, institutional memory, and predictable operational standards. In professional training and higher education, for instance, in-person mentorship and disciplined structural routines foster interpersonal empathy and collaborative problem-solving skills that solitary digital engagement cannot replicate. Furthermore, abandoning established methods precipitously risks alienating segments of the populace that lack access to advanced digital infrastructure, thereby worsening societal inequity.

Nevertheless, contemporary realities demand adaptable, forward-looking strategies. Rapid technological acceleration and global interconnectedness have fundamentally altered the skills and agility required of modern citizens. Innovative platforms facilitate democratized access to world-class knowledge, breaking down geographic and economic barriers that historically restricted specialized learning to affluent urban centers. Furthermore, modern data-driven methodologies enable personalized pacing and continuous diagnostic assessment, allowing individuals to identify and remediate intellectual weaknesses far more efficiently than standardized group instruction permits.

In conclusion, while the foundational merits of traditional institutional models must not be dismissed lightly, clinging dogmatically to obsolete structures impedes human progress. The optimal approach requires an integrated synthesis: leveraging cutting-edge innovations to maximize individual empowerment while retaining the ethical rigor and mentorship of proven institutional traditions.`
      };
    } else if (tNum === 2) {
      // Test 2: Pie Chart / Data Table
      const isPie = (bNum % 2 !== 0);
      t1Data = {
        id: `${testId}_W1`,
        title: isPie ? `Global Freshwater Allocation Across Sectors (1980 vs 2020)` : `Multinational Research & Development Investment Table (2010–2024)`,
        chartType: isPie ? 'pie' : 'table',
        instruction: isPie ?
          `The pie charts below compare the proportions of freshwater consumed across domestic, industrial, and agricultural sectors in five continents in 1980 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.` :
          `The table below outlines annual expenditure on research and development (as a percentage of GDP) and patent applications filed across four sovereign nations between 2010 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        chartData: isPie ? {
          title: `Freshwater Allocation by Sector (1980 vs 2020)`,
          labels: ['Agriculture', 'Industry', 'Domestic Municipal', 'Energy Cooling'],
          categories: ['Agriculture', 'Industry', 'Domestic Municipal', 'Energy Cooling'],
          datasets: [
            { label: '1980 Allocation', data: [68, 18, 9, 5], backgroundColor: ['#4F46E5', '#06B6D4', '#10B981', '#F59E0B'] },
            { label: '2020 Allocation', data: [56, 23, 14, 7], backgroundColor: ['#4F46E5', '#06B6D4', '#10B981', '#F59E0B'] }
          ],
          colors: ['#4F46E5', '#06B6D4', '#10B981', '#F59E0B']
        } : null,
        tableData: {
          headers: ['Nation', 'R&D % GDP (2010)', 'R&D % GDP (2024)', 'Patents Filed (2010)', 'Patents Filed (2024)'],
          rows: [
            ['Germany', '2.7%', '3.1%', '47,500', '62,100'],
            ['South Korea', '3.5%', '4.8%', '135,000', '210,500'],
            ['United States', '2.8%', '3.4%', '240,000', '325,000'],
            ['United Kingdom', '1.6%', '1.9%', '15,200', '18,800']
          ]
        },
        keyFeatures: [
          isPie ? 'Agriculture remained the predominant consumer of freshwater throughout the forty-year period.' : 'South Korea dedicated the largest fraction of its GDP to research and development across both survey periods.',
          isPie ? 'Industrial and domestic water consumption exhibited noticeable relative expansions.' : 'Patent applications expanded markedly across all four surveyed countries, with the US maintaining absolute volume supremacy.',
          'Overall, national investments into technical innovation increased steadily across the board.'
        ],
        modelAnswer: isPie ?
          `The pie charts illustrate comparative shifts in the allocation of global freshwater resources across four primary economic sectors between 1980 and 2020.

Overall, agriculture commanded the overwhelming majority of water withdrawals in both years, despite experiencing a noticeable contraction over the four decades. In contrast, industrial, municipal, and energy cooling sectors all witnessed steady proportional increases.

In 1980, agriculture accounted for over two-thirds of total freshwater usage at 68%, far surpassing all other categories combined. Industrial requirements represented 18%, while municipal domestic demand and power cooling comprised 9% and 5% respectively.

By 2020, agricultural allocation contracted by 12 percentage points to 56%. Conversely, industrial water usage expanded to 23%, and municipal consumption grew significantly to 14%. Power station cooling accounted for the remaining 7%. In summary, while agricultural irrigation remained the principal consumer, resources increasingly shifted toward industrial and urban needs.` :
          `The table delineates trends in research and development (R&D) expenditure as a percentage of gross domestic product (GDP) alongside patent application figures across four nations between 2010 and 2024.

Overall, all four economies increased their relative R&D financial commitments and generated substantially higher patent filings over the fourteen-year period. South Korea consistently demonstrated the highest GDP proportion, while the United States dominated total patent volumes.

In 2010, South Korea led R&D intensity at 3.5% of GDP, rising dynamically to 4.8% by 2024, accompanied by patent filings surging from 135,000 to 210,500. The United States increased its spending from 2.8% to 3.4% while maintaining the highest absolute patent counts (240,000 rising to 325,000). Germany expanded its R&D ratio from 2.7% to 3.1%, yielding a growth in patents from 47,500 to 62,100. The United Kingdom maintained the lowest figures throughout, with spending rising from 1.6% to 1.9% and patent filings growing modestly to 18,800.`
      };
      t2Data = {
        id: `${testId}_W2`,
        topic: 'Economic Growth vs Environmental Preservation',
        question: 'Some economists argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation and protect public health. Discuss both views and give your opinion.',
        keywords: ['regulatory oversight', 'economic competitiveness', 'sustainable development', 'green technologies', 'public health'],
        planningStructure: {
          introduction: 'Paraphrase the prompt; outline the tension between industrial deregulation and ecological protection; present balanced thesis.',
          body1: 'Examine corporate arguments regarding compliance overhead, competitive disadvantage, and potential manufacturing flight.',
          body2: 'Analyze the Porter hypothesis: how stringent standards drive technological efficiency and safeguard human capital.',
          conclusion: 'Reiterate that forward-looking regulation fosters sustainable economic resilience rather than hindering prosperity.'
        },
        highBandVocabulary: [
          { word: 'onerous', meaning: 'burdensome or oppressive', example: 'Excessive reporting mandates are viewed by small enterprises as onerous.' },
          { word: 'catalyst', meaning: 'something that precipitates change', example: 'Strict carbon caps acted as a catalyst for breakthrough battery storage solutions.' },
          { word: 'ameliorate', meaning: 'make an undesirable situation better', example: 'Clean air standards substantially ameliorate cardiovascular disease burdens.' }
        ],
        modelAnswer: `The interface between industrial productivity and environmental regulation remains one of the most vigorously contested battlegrounds in contemporary economic policy. While industrial lobbies frequently assert that stringent emissions mandates compromise market competitiveness, I believe that rigorous ecological standards are indispensable for spurring sustainable technological innovation and preserving long-term societal wealth.

Those who caution against aggressive regulatory intervention emphasize the immediate financial burdens imposed upon manufacturing enterprises. Adhering to rigorous effluent and particulate caps requires heavy capital investments in filtration scrubbers, cleaner fuel alternatives, and continuous environmental monitoring equipment. In highly competitive international markets where rival producers in developing jurisdictions operate under lax statutory oversight, domestic manufacturers risk losing price competitiveness, potentially leading to factory closures and localized structural unemployment. Consequently, critics argue that excessive regulatory constraints hamper economic momentum.

Nevertheless, the argument that environmental protection is inherently antagonistic to economic vitality is fundamentally flawed. Under the Porter Hypothesis, well-crafted environmental standards act as powerful catalysts for commercial innovation. When corporations are legally compelled to reduce waste and carbon output, they optimize thermodynamic efficiency and pioneer novel closed-loop manufacturing techniques that ultimately lower per-unit production costs. Furthermore, the macroeconomic dividends of a cleaner environment are immense: reducing toxic industrial pollutants mitigates respiratory morbidity, curbing healthcare expenditure and bolstering workforce productivity.

In conclusion, while transitioning to rigorous environmental standards entails transitional adjustments for polluting industries, viewing ecological stewardship as a barrier to wealth generation is shortsighted. Governments must enforce robust regulatory benchmarks to cultivate competitive green industries and guarantee sustainable prosperity for future generations.`
      };
    } else if (tNum === 3) {
      // Test 3: Map / Floor Plan Transformation (Before vs After)
      t1Data = {
        id: `${testId}_W1`,
        title: `Town and Harbour of Norbury Redevelopment (1995 vs 2025)`,
        chartType: 'map',
        instruction: `The two maps below show the coastal town and harbour of Norbury in 1995 and following comprehensive redevelopment in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        chartData: null,
        mapData: {
          title: `Town and Harbour of Norbury: 1995 vs 2025`,
          year1: 1995,
          year2: 2025,
          compass: 'N',
          legend: ['Demolished / Removed', 'Newly Constructed', 'Modernized / Unchanged'],
          features1995: [
            'Agricultural farmland occupying the north-eastern quadrant',
            'Small commercial fishing dock with unpaved slipway in the southern harbour',
            'Disused Victorian brickworks facility situated south of the railway line',
            'Single narrow two-lane access road connecting the western highway'
          ],
          features2025: [
            'Modern residential apartment complex and community school replacing farmlands',
            'Commercial fishing dock converted into a 250-berth recreational marina and yacht club',
            'Derelict brickworks demolished and transformed into a public wetland park and bioswale',
            'Dual-carriageway bypass constructed with elevated pedestrian footbridge over railway'
          ]
        },
        keyFeatures: [
          'Complete transition from rural agriculture and heavy industry to recreational and residential infrastructure.',
          'Significant enhancement of transport connectivity through the addition of a dual-carriageway bypass and pedestrian footbridge.',
          'Conversion of the working fishing harbour into an upscale recreational marina with promenade facilities.'
        ],
        modelAnswer: `The two maps illustrate the extensive infrastructural and spatial transformations that transpired in the coastal town of Norbury between 1995 and 2025.

Overall, the town transitioned from a predominantly rural and industrial locality into a modernized residential, recreational, and commercial hub. The most prominent changes involved the eradication of heavy industrial and agricultural zones in favor of green public spaces, expanded housing estates, and upgraded vehicular transport links.

In 1995, the north-eastern quadrant was occupied exclusively by agricultural farmland, while a disused Victorian brickworks facility stood immediately south of the railway line. By 2025, the farmland had been completely built over to accommodate a modern residential apartment complex alongside a newly erected community primary school. Furthermore, the derelict brickworks was demolished and remediated to establish an expansive public wetland park with pedestrian pathways and a sustainable bioswale.

Turning to the coastal and transport infrastructure, the modest commercial fishing dock situated on the southern harbour in 1995 was transformed into a 250-berth recreational marina featuring an upscale yacht club and waterside restaurants. Transport connectivity was likewise substantially upgraded: the original narrow two-lane road was superseded by a high-capacity dual-carriageway bypass connecting directly to the western highway, supplemented by an elevated pedestrian footbridge traversing the railway tracks to ensure safe pedestrian access between the residential zone and the seafront.`
      };
      t2Data = {
        id: `${testId}_W2`,
        topic: 'Urban Regeneration vs Historic Preservation',
        question: 'In many growing cities, historical neighborhoods and traditional buildings are being demolished to make way for modern high-density skyscrapers and transport corridors. Some argue this is essential for economic modernization, while others believe architectural heritage should be protected by law. Discuss both views and give your opinion.',
        keywords: ['architectural heritage', 'urban density', 'economic modernization', 'cultural identity', 'spatial renewal'],
        planningStructure: {
          introduction: 'Introduce urban regeneration debates; outline economic arguments versus cultural preservation; present thesis supporting adaptive reuse.',
          body1: 'Explore urban development arguments: housing shortages, energy efficiency of modern towers, transit-oriented development.',
          body2: 'Analyze the value of historical landmarks: civic identity, tourism revenue, and irreversible loss of cultural memory.',
          conclusion: 'Advocate for balanced adaptive reuse: modernizing interiors while preserving historic exterior facades.'
        },
        highBandVocabulary: [
          { word: 'irretrievable', meaning: 'impossible to regain or recover', example: 'Demolishing centuries-old masonry results in an irretrievable cultural loss.' },
          { word: 'symbiotic', meaning: 'mutually beneficial relationship', example: 'Modern architecture can exist in symbiotic harmony with preserved historic facades.' },
          { word: 'homogenization', meaning: 'the process of making things uniform', example: 'Monolithic glass towers cause architectural homogenization across global metropolises.' }
        ],
        modelAnswer: `As global metropolitan populations burgeon, city administrators face a formidable dilemma: whether to preserve historic architectural heritage or demolish older structures to accommodate high-density residential towers and transit corridors. While the imperative to modernize urban infrastructure is undeniable, I contend that legal protection of cultural landmarks is paramount, and that sustainable development should be achieved through adaptive reuse rather than wholesale demolition.

Proponents of unfettered urban renewal base their arguments on pressing socioeconomic realities. Rapid urban migration has precipitated chronic housing shortages and soaring property valuations across major cities. Low-rise historical buildings occupy disproportionate footprints relative to the modest resident densities they support. Demolishing obsolete, structurally inefficient properties allows developers to construct high-capacity skyscrapers fitted with state-of-the-art energy-efficient HVAC systems, subterranean mass transit links, and commercial infrastructure. In the view of urban economists, impeding such revitalization risks choking commercial expansion and worsening urban sprawl.

Nevertheless, reducing the urban landscape to purely utilitarian economic calculations inflicts profound long-term harm on civic wellbeing. Historic buildings embody a society’s collective memory, craftsmanship, and aesthetic identity. When historic districts are razed, cities suffer irreversible architectural homogenization, transforming distinctive cultural centres into sterile expanses of interchangeable glass and steel. Moreover, heritage preservation delivers substantial economic dividends: historic districts consistently attract high-yield international cultural tourism and cultivate vibrant, pedestrian-oriented street cultures that modern high-rises notoriously fail to foster.

In conclusion, the conflict between economic modernization and heritage preservation need not be a zero-sum calculation. Rather than leveling irreplaceable architectural treasures, urban planners should embrace adaptive reuse—modernizing building interiors for contemporary commercial and residential functions while rigorously safeguarding historic facades. In this manner, cities can achieve progressive modernization while honoring their historical soul.`
      };
    } else {
      // Test 4: Process Flowchart / Cyclical Sequence
      t1Data = {
        id: `${testId}_W1`,
        title: `The Industrial Manufacturing Cycle of Recycled Glass Containers`,
        chartType: 'process',
        instruction: `The flowchart below illustrates the sequential stages involved in recycling post-consumer glass containers and remanufacturing them into new commercial bottles. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        chartData: null,
        processData: {
          title: `Industrial Glass Recycling & Bottle Remanufacturing Process`,
          stagesCount: 6,
          stages: [
            { step: 1, name: 'Collection & Optical Sorting', desc: 'Used glass bottles deposited at collection points are sorted by automated optical spectrophotometers into amber, green, and clear streams.' },
            { step: 2, name: 'Crushing & Cullet Washing', desc: 'Sorted glass is pulverized into uniform cullet granules, rinsed with high-pressure water, and passed beneath magnetic separators to extract metallic caps.' },
            { step: 3, name: 'Furnace Smelting at 1500°C', desc: 'Clean cullet is mixed with raw silica sand, soda ash, and limestone inside a regenerative gas furnace heated to 1500°C to create molten glass.' },
            { step: 4, name: 'Mould Injection & Blowing', desc: 'Molten glass streams are severed into precise cylindrical gobs, dropped into blank moulds, and blown with pressurized air into finished container shapes.' },
            { step: 5, name: 'Annealing Lehr Cooling', desc: 'Newly shaped bottles pass slowly through a temperature-controlled annealing tunnel where gradual cooling eliminates internal structural stresses.' },
            { step: 6, name: 'Laser Inspection & Distribution', desc: 'Automated laser sensors scan bottle walls for micro-fractures and dimensional errors before validated containers are packaged for commercial distribution.' }
          ]
        },
        keyFeatures: [
          'A closed-loop six-stage cyclical manufacturing procedure combining mechanical sorting, high-temperature thermal transformation, and automated quality verification.',
          'Crucial thermal stages include smelting in a 1500°C regenerative furnace followed by controlled stress-relieving cooling within an annealing lehr.',
          'Integration of magnetic separation and laser scanning at respective input and output phases to guarantee zero structural defects.'
        ],
        modelAnswer: `The provided flowchart delineates the multi-stage industrial process through which post-consumer glass containers are collected, recycled, and remanufactured into newly minted glass bottles.

Overall, the process comprises a cyclical, closed-loop sequence spanning six distinct phases, beginning with the collection and mechanical segregation of waste glass and culminating in laser inspection and commercial distribution. The procedure relies on a critical combination of physical purification, thermal smelting at elevated temperatures, and gradual stress-relieving cooling.

In the initial stage, discarded glass containers are retrieved from municipal recycling depositories and categorized by automated optical sensors into amber, green, and clear varieties. Following sorting, the glass is transferred into heavy-duty crushing machinery to produce fine, uniform pieces known as cullet. This cullet is then rinsed thoroughly with high-pressure water jets and conveyed beneath powerful electromagnetic separators to eliminate metallic caps, paper labels, and other surface contaminants.

Once purified, the cullet is blended with virgin raw materials—namely silica sand, limestone, and soda ash—and fed into a gas-fired furnace where it undergoes thermal melting at 1500°C. The resultant molten glass is subsequently cut into precise portions called gobs, dropped into blank moulds, and blown into finished bottle shapes utilizing compressed air. In the penultimate phase, the hot glass containers travel through an annealing lehr tunnel, where gradual cooling eliminates internal structural stresses. Finally, automated laser scanning equipment inspects each bottle for structural anomalies before the containers are boxed and dispatched to beverage bottling plants.`
      };
      t2Data = {
        id: `${testId}_W2`,
        topic: 'Circular Economy vs Planned Obsolescence',
        question: 'Modern consumer electronics and household goods are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe national governments must legally enforce circular manufacturing and right-to-repair standards. Discuss both views and give your opinion.',
        keywords: ['planned obsolescence', 'electronic waste', 'circular economy', 'right-to-repair', 'consumer behavior'],
        planningStructure: {
          introduction: 'Introduce planned obsolescence and e-waste generation; outline consumer responsibility versus legislative mandate; state clear thesis supporting governmental regulation.',
          body1: 'Examine consumer responsibility: demand for sustainable goods, refusing disposable products, conscious disposal.',
          body2: 'Analyze the limitations of voluntary consumer action and demonstrate why legal mandates (e.g. modular design, spare parts access) are essential.',
          conclusion: 'Affirm that while consumer mindfulness is beneficial, binding government regulation is indispensable to dismantle planned obsolescence.'
        },
        highBandVocabulary: [
          { word: 'obsolescence', meaning: 'the state of becoming obsolete or out of use', example: 'Engineered planned obsolescence drives unsustainable consumption cycles.' },
          { word: 'mandatory', meaning: 'compulsory by law', example: 'Enacting mandatory warranties incentivizes durable product design.' },
          { word: 'systemic', meaning: 'relating to an entire system rather than isolated parts', example: 'E-waste represents a systemic market failure that voluntary actions cannot cure.' }
        ],
        modelAnswer: `In an era defined by rapid technological turnover, consumer electronics and domestic appliances are increasingly engineered for ephemeral lifecycles, rendering repair economically unviable and generating colossal volumes of toxic electronic waste. While individual consumer conscientiousness plays a role in curbing waste, I strongly argue that governments must intervene with legally binding mandates, such as statutory right-to-repair frameworks and circular design requirements, to resolve this global environmental crisis.

Those who emphasize individual consumer responsibility argue that commercial manufacturing is ultimately dictated by market demand. If consumers prioritized durability and modularity over novelty, manufacturers would be compelled to redesign products accordingly. Proponents of this view maintain that individuals must exercise discipline by resisting cosmetic annual device upgrades, patronizing independent repair cooperatives, and boycotting corporations that employ anti-repair software locks. In the view of free-market proponents, grassroots behavioral transformation represents the most organic mechanism for shifting industrial practice.

However, relying exclusively upon consumer willpower represents an ineffective response to a deeply entrenched systemic problem. Multinationals deliberately engineer planned obsolescence by deploying proprietary screws, gluing batteries into chassis, and restricting diagnostic software, deliberately making independent repair prohibitively expensive or technically impossible. Individual consumers, constrained by asymmetric market power and limited financial options, cannot realistically dismantle these structural barriers through purchasing choices alone. Therefore, binding legislative intervention is indispensable.

Governments possess the sovereign authority to enforce comprehensive right-to-repair statutes. By legally requiring manufacturers to supply spare parts, publish schematics, and ensure modular battery replacement for at least a decade post-launch, states can align commercial incentives with ecological sustainability. Furthermore, enacting extended producer responsibility laws—compelling manufacturers to finance the recycling of products at end-of-life—forces corporations to embrace circular manufacturing from the outset.

In conclusion, while consumer awareness is undeniably beneficial, treating electronic waste as an individual moral responsibility ignores systemic corporate design strategies. Rigorous governmental regulation and legally protected repair rights are the only viable solutions to halt the unsustainable cycle of planned obsolescence.`
      };
    }

    const writingTest = {
      bookNumber: bNum,
      testNumber: tNum,
      task1: t1Data,
      task2: t2Data
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 4. FULL SPEAKING TEST (PARTS 1, 2, 3 + BAND 9 MODEL SAMPLE)
    // ──────────────────────────────────────────────────────────────────────────
    const speakingPart1 = tNum === 1 ? [
      `Where is your hometown located, and what is its most distinctive geographic or architectural feature?`,
      `How do you typically travel to work or university on a daily basis?`,
      `Do you believe that public transportation in your local area has improved compared to five years ago?`,
      `What kind of weather do you find most conducive to intense concentration and academic study?`,
      `Do you prefer reading printed physical books or consuming literature via digital screens?`
    ] : tNum === 2 ? [
      `What do you enjoy most about the accommodation or neighborhood where you currently reside?`,
      `How often do you visit science, history, or cultural art museums in your free time?`,
      `Do you prefer studying alone in complete silence, or collaborating within academic group study spaces?`,
      `What sports or physical activities do you pursue to maintain your energy levels during examination periods?`,
      `Have your musical tastes evolved significantly over the past three to four years?`
    ] : tNum === 3 ? [
      `Are there convenient public parks, gardens, or nature reserves near your residential neighborhood?`,
      `How do you typically spend your weekends when you wish to relax and recharge?`,
      `Do you enjoy preparing home-cooked meals, or do you rely primarily on university dining and restaurants?`,
      `What aspect of your university degree or professional career do you find most intellectually stimulating?`,
      `How frequently do you make online purchases as opposed to visiting physical retail stores?`
    ] : [
      `What types of domestic waste do you and your household actively separate for recycling?`,
      `Have you ever successfully repaired a damaged electronic device or piece of clothing yourself?`,
      `How important is it for modern cities to provide safe, dedicated bicycle lanes for commuters?`,
      `What scientific or technological gadget could you not imagine living without on a daily basis?`,
      `Do you find it easy to switch off digital notifications when you need to rest in the evenings?`
    ];

    const speakingCueCard = tNum === 1 ? {
      cueCardTitle: meta.speaking.cueCard,
      bulletPoints: [
        'Where this place or subject is located or how you first encountered it',
        'What distinctive aesthetic, historical, or intellectual qualities it possessed',
        'Who accompanied you or what resources assisted your investigation',
        'And explain why this subject or location left such a profound, unforgettable impression upon you.'
      ],
      prepTimeSeconds: 60,
      speakingTimeSeconds: 120
    } : tNum === 2 ? {
      cueCardTitle: 'Describe a complex skill or academic topic you taught yourself using digital resources.',
      bulletPoints: [
        'What this skill or academic topic was and why you chose to pursue it',
        'What online platforms, literature, or interactive tutorials you consulted',
        'What technical obstacles or conceptual difficulties you encountered along the way',
        'And explain how mastering this knowledge has contributed to your personal or academic development.'
      ],
      prepTimeSeconds: 60,
      speakingTimeSeconds: 120
    } : tNum === 3 ? {
      cueCardTitle: 'Describe an unforgettable visit you made to a dramatic coastal landscape or nature reserve.',
      bulletPoints: [
        'Where this coastal environment or nature reserve was situated',
        'What distinctive wildlife, landforms, or ecological features you observed',
        'What activities you engaged in during your exploration of the site',
        'And explain why this encounter with nature resonated so deeply with your outlook.'
      ],
      prepTimeSeconds: 60,
      speakingTimeSeconds: 120
    } : {
      cueCardTitle: 'Describe a useful technological appliance or tool in your home that was recently repaired or upgraded.',
      bulletPoints: [
        'What the electronic device or household appliance was',
        'What problem or malfunction occurred that required attention',
        'How the repair or upgrade was carried out and who performed it',
        'And explain why repairing this item rather than discarding it was beneficial.'
      ],
      prepTimeSeconds: 60,
      speakingTimeSeconds: 120
    };

    const speakingPart3 = tNum === 1 ? [
      `Why do you think contemporary societies place such substantial cultural and financial value on preserving ancient historical monuments?`,
      `Should private commercial developers be permitted to demolish historic buildings to construct modern, energy-efficient housing blocks?`,
      `How has digital virtual-reality technology altered the way the public experiences cultural heritage museums?`,
      `To what extent should international organizations intervene when a nation's historical artifacts are neglected during economic crises?`
    ] : tNum === 2 ? [
      `What are the most significant differences between formal university instruction and self-directed online learning?`,
      `Do you believe that universities will eventually be rendered obsolete by automated digital educational platforms?`,
      `How can educators ensure that young students develop critical discernment when evaluating scientific claims on social media?`,
      `Why do some individuals display immense motivation for lifelong learning, while others cease academic study after graduation?`
    ] : tNum === 3 ? [
      `Why is exposure to natural biodiversity and green open spaces essential for the psychological wellbeing of urban dwellers?`,
      `How can municipal urban planners balance the preservation of coastal wetlands with the growing demand for port infrastructure?`,
      `To what extent should governments restrict ecotourism in fragile nature sanctuaries to prevent habitat degradation?`,
      `What role should international treaties play in curbing trans-boundary marine pollution and microplastic contamination?`
    ] : [
      `Why have modern manufacturing industries shifted so heavily toward planned obsolescence and single-use products?`,
      `What legal mechanisms can national governments enact to compel electronics corporations to guarantee the right to repair?`,
      `Do you think consumers in developing nations bear equal responsibility for global waste reduction compared to those in affluent economies?`,
      `How can circular economy principles be integrated into primary and secondary educational curricula to foster sustainable mindsets?`
    ];

    const speakingBand9Sample = `I would like to describe a truly remarkable encounter with ${meta.speaking.topic.toLowerCase()}, an experience that transpired during an intensive academic study tour approximately two years ago.

What immediately arrested my attention was the sublime equilibrium between structural grandeur and functional harmony. Rather than imposing monolithic, discordant interventions upon the natural terrain, the project had integrated natural watercourses, natural light wells, and indigenous limestone blocks, creating a seamless continuity between human craftsmanship and the surrounding environment.

Throughout the site exploration, I was accompanied by a specialist researcher whose commentary illuminated the profound mathematical and scientific principles embedded in the site's layout. For instance, the orientation aligns with millimeter precision to direct natural illumination during seasonal equinoxes, passively regulating internal temperatures without reliance upon mechanical cooling.

The experience resonated deeply with me because it stands as a testament to human resilience and intellectual ambition. Standing within those chambers, one is powerfully reminded of how advanced societies can synthesize science, art, and ecological stewardship into enduring, sustainable achievements. That contemplative encounter has profoundly influenced my own academic philosophy, instilling a deep reverence for human-centric, sustainable innovation that I continue to carry forward.`;

    const speakingTest = {
      bookNumber: bNum,
      testNumber: tNum,
      topic: meta.speaking.topic,
      part1: speakingPart1,
      part2: speakingCueCard,
      part3Questions: speakingPart3,
      band9ModelSample: speakingBand9Sample
    };

    return {
      testId: testId,
      testNumber: tNum,
      bookNumber: bNum,
      title: testTitle,
      era: era.name,
      eraBadge: era.badge,
      eraDesc: era.desc,
      theme: meta.theme,
      difficulty: meta.difficulty,
      listening: listeningTest,
      reading: readingPassages,
      writing: writingTest,
      speaking: speakingTest
    };
  }

  // Build all 4 tests for each book (Books 1 to 21)
  function buildBook(meta) {
    const era = getEra(meta.book);
    const bNum = meta.book;
    const tests = [1, 2, 3, 4].map(tNum => buildTest(meta, tNum));

    return {
      book: bNum,
      title: `Cambridge IELTS Academic ${bNum}`,
      era: era.name,
      eraBadge: era.badge,
      eraDesc: era.desc,
      theme: meta.theme,
      difficulty: meta.difficulty,
      tests: tests,
      getTest(tNum) {
        const idx = Math.max(0, Math.min(tests.length - 1, (parseInt(tNum, 10) || 1) - 1));
        return tests[idx];
      },
      // Backward compatibility: default properties point to Test 1
      listening: tests[0].listening,
      reading: tests[0].reading,
      writing: tests[0].writing,
      speaking: tests[0].speaking
    };
  }

  // Compile all 21 books (each containing 4 full tests = 84 total tests)
  const registry = booksMeta.map(buildBook);

  // Expose registry and convenience query functions
  const CambridgeSeries = {
    books: registry,
    count: registry.length,
    totalTests: registry.length * 4, // 84 total official-grade tests
    
    getBook(n) {
      const num = parseInt(n, 10);
      if (isNaN(num) || num < 1 || num > registry.length) return registry[0];
      return registry[num - 1];
    },

    getTest(bNum, tNum) {
      return this.getBook(bNum).getTest(tNum);
    },

    getListening(bNum, tNum) {
      return this.getBook(bNum).getTest(tNum).listening;
    },

    getReading(bNum, tNum) {
      return this.getBook(bNum).getTest(tNum).reading;
    },

    getWriting(bNum, tNum) {
      return this.getBook(bNum).getTest(tNum).writing;
    },

    getSpeaking(bNum, tNum) {
      return this.getBook(bNum).getTest(tNum).speaking;
    },

    getAllListings() {
      return registry.map(b => ({
        book: b.book,
        title: b.title,
        era: b.era,
        eraBadge: b.eraBadge,
        theme: b.theme,
        difficulty: b.difficulty,
        testsCount: b.tests.length
      }));
    }
  };

  return CambridgeSeries;
}));

