// IELTS Academic AI Platform - Built-in Test Content
// High-yield, completely original IELTS Academic material calibrated to Cambridge IELTS Academic Books 1–21 standards.

const IELTS_CONTENT = {
  // ═══════════════════════════════════════════════════════════════════════
  // READING PASSAGES (Full Academic Standard)
  // ═══════════════════════════════════════════════════════════════════════
  reading: [
    {
      id: 'R001',
      title: 'The Neuroscience of Urban Living',
      difficulty: 'Hard',
      wordCount: 780,
      paragraphs: [
        {
          label: 'A',
          text: 'For centuries, cities have drawn people with promises of opportunity, culture, and connection. Yet as urban populations have swelled to encompass more than half of humanity, neuroscientists have begun asking a pointed question: what does city life actually do to the human brain? A growing body of research suggests that the urban environment — its density, noise, pollution, and relentless stimulation — exerts measurable and sometimes lasting effects on neural architecture and psychological wellbeing. These findings carry profound implications for urban planning, public health policy, and our understanding of the mind itself.'
        },
        {
          label: 'B',
          text: 'Early investigations into urban-rural differences in mental health were largely epidemiological. Researchers consistently found higher rates of schizophrenia, anxiety disorders, and major depression in city dwellers compared with rural populations, even when controlling for socioeconomic variables. A landmark 2011 study published in Nature used neuroimaging to probe the underlying mechanisms. Participants were exposed to social stress tasks while their brain activity was monitored. Urban residents showed significantly greater activation in the amygdala — a region central to the processing of threat and fear — as well as in the perigenual anterior cingulate cortex, a structure implicated in the regulation of negative affect. These differences were proportional to the amount of time individuals had spent living in urban environments, suggesting a dose-response relationship rather than a simple correlation.'
        },
        {
          label: 'C',
          text: 'One prominent explanation focuses on the concept of attentional load. American psychologist Stanley Milgram proposed in the 1970s that city dwellers cope with constant sensory bombardment by developing strategies of selective inattention — filtering out stimuli, shortening interactions, and adopting a detached affect. Contemporary neuroscientists have refined this framework, arguing that sustained attentional effort taxes cognitive resources in ways that impair the capacity for directed thought and emotional regulation. Studies using EEG measurements have revealed that individuals walking through busy urban streetscapes show elevated beta-wave activity associated with heightened arousal and stress, compared with those moving through green spaces or quiet suburban environments.'
        },
        {
          label: 'D',
          text: 'Nature exposure has emerged as one of the most robustly documented buffers against urban stress. A series of experiments by researchers at the University of Michigan demonstrated that brief exposures to natural environments — even viewing photographs of trees and water — improved performance on tests of attention and working memory by approximately twenty percent compared with exposure to urban scenes. The theoretical framework underpinning these findings, known as Attention Restoration Theory, holds that natural environments engage a form of effortless, involuntary attention that allows directed attention networks to recover. Neuroimaging studies have since documented reduced activity in a region of the medial prefrontal cortex associated with rumination — the tendency to dwell repetitively on negative thoughts — following walks in nature compared with equivalent walks in urban settings.'
        },
        {
          label: 'E',
          text: 'The relationship between urban density and social behaviour has also attracted considerable scientific interest. Cross-cultural studies suggest that perceived crowding — the subjective experience of having insufficient space — triggers physiological stress responses including elevated cortisol, increased heart rate, and suppressed immune function. However, not all density is experienced as crowding; the critical variable appears to be perceived control over one\'s spatial environment. Well-designed urban spaces that offer variety, legibility, natural boundaries, and opportunities for choice significantly attenuate the stress response even in densely populated settings. This finding has increasingly influenced urban design practice, encouraging architects and planners to prioritise human-scale environments, permeable building frontages, and accessible green infrastructure.'
        },
        {
          label: 'F',
          text: 'Children may be particularly vulnerable to the neurological effects of urban environments. Longitudinal research tracking cohorts of children in Amsterdam and Copenhagen found that those living in areas with high traffic noise and low greenery showed steeper trajectories of cortisol dysregulation across childhood — a pattern associated with increased risk of anxiety and conduct disorders in adolescence. Conversely, access to green schoolyards and natural play environments was associated with improved attention, reduced aggression, and better social competence in elementary school children. These effects were particularly pronounced for children from lower socioeconomic backgrounds, raising important equity considerations for urban greening initiatives.'
        },
        {
          label: 'G',
          text: 'The emerging field of neurourbanism seeks to synthesise these disparate findings into actionable design principles. Researchers including neuroscientist Colin Ellard have argued for the integration of neuroscientific evidence into urban planning processes through methods such as ambulatory biometric monitoring — measuring participants\' physiological responses as they move through real or simulated urban environments. Such approaches have already influenced the design of the redeveloped waterfront district in Bilbao and a new mixed-use development in Shenzhen, where planners systematically varied parameters of building facades, street width, tree cover, and pedestrian traffic to optimise predicted wellbeing outcomes. While critics caution against reducing the complex social dynamics of urban life to neurological metrics, proponents argue that evidence-based design represents an indispensable complement to traditional planning approaches.'
        }
      ],
      questions: [
        { id: 1, type: 'heading_match', question: 'Research methods informing urban design practice', answer: 'G', options: ['A','B','C','D','E','F','G'] },
        { id: 2, type: 'heading_match', question: 'Early statistical evidence linking cities and mental illness', answer: 'B', options: ['A','B','C','D','E','F','G'] },
        { id: 3, type: 'heading_match', question: 'The restorative power of natural settings', answer: 'D', options: ['A','B','C','D','E','F','G'] },
        { id: 4, type: 'heading_match', question: 'How urban crowding affects body chemistry', answer: 'E', options: ['A','B','C','D','E','F','G'] },
        { id: 5, type: 'heading_match', question: 'Developmental impacts on young city dwellers', answer: 'F', options: ['A','B','C','D','E','F','G'] },
        { id: 6, type: 'TFNG', question: 'The 2011 Nature study found that the amygdala reacted differently in city residents compared to rural ones during stressful tasks.', answer: 'TRUE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 7, type: 'TFNG', question: 'Stanley Milgram\'s research was primarily based on neuroimaging data.', answer: 'FALSE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 8, type: 'TFNG', question: 'Attention Restoration Theory suggests that artificial environments can restore attention as effectively as natural ones.', answer: 'FALSE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 9, type: 'TFNG', question: 'Perceived control over one\'s environment affects how density is experienced.', answer: 'TRUE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 10, type: 'TFNG', question: 'Children from higher socioeconomic backgrounds benefited most from access to green schoolyards.', answer: 'FALSE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 11, type: 'summary', question: 'Research using EEG showed that urban walkers displayed elevated _____ activity compared to those in natural environments.', answer: 'beta-wave', placeholder: 'ONE WORD ONLY' },
        { id: 12, type: 'summary', question: 'Nature walks reduced activity in a brain area associated with _____.', answer: 'rumination', placeholder: 'ONE WORD ONLY' },
        { id: 13, type: 'mcq', question: 'What does the author suggest about the field of neurourbanism in paragraph G?', options: ['A. It has been universally embraced by urban planners', 'B. It attempts to convert neuroscience into practical design guidelines', 'C. It focuses exclusively on children\'s wellbeing in cities', 'D. It has replaced traditional planning approaches'], answer: 'B' }
      ]
    },
    {
      id: 'R002',
      title: 'The Economics of Deep-Sea Mining',
      difficulty: 'Cambridge Standard',
      wordCount: 740,
      paragraphs: [
        { label: 'A', text: 'Scattered across the floors of the world\'s oceans lie billions of tonnes of mineral-rich formations that have attracted the attention of mining companies, geologists, and policymakers alike. These formations include polymetallic nodules — potato-sized accretions of manganese, nickel, cobalt, and copper that accumulate on abyssal plains — as well as seafloor massive sulphides deposited around hydrothermal vents, and cobalt-rich crusts that coat seamount flanks. The potential economic value of these deposits is staggering: estimates suggest that the Clarion-Clipperton Zone alone, a swath of the Pacific Ocean roughly the size of Europe, contains more nickel and cobalt than all known terrestrial reserves combined.' },
        { label: 'B', text: 'Interest in deep-sea mining has intensified in recent years, driven in part by projected increases in demand for battery metals. Electric vehicle batteries, grid-scale energy storage systems, and consumer electronics all require substantial quantities of cobalt, lithium, nickel, and manganese. As decarbonisation targets tighten globally, analysts at the International Energy Agency have projected that demand for these materials could increase by as much as forty-fold by 2040 relative to 2020 levels. Proponents of deep-sea mining argue that marine resources could alleviate pressure on terrestrial mining operations, which are often associated with significant social and environmental harms in developing nations.' },
        { label: 'C', text: 'The economics of deep-sea resource extraction, however, remain deeply uncertain. Terrestrial mining operations benefit from centuries of accumulated technical knowledge, established logistics networks, and proximity to processing infrastructure. Deep-sea mining, by contrast, requires purpose-built vessels capable of operating in water depths of 4,000 to 6,000 metres, remotely operated collection systems, and vertical transport mechanisms for lifting slurried sediment through kilometres of water column. Capital costs for a single commercial-scale operation have been estimated at between two and five billion US dollars, with substantial ongoing operating expenses. Critics question whether these costs can be recovered at commodity prices that fluctuate with global market cycles.' },
        { label: 'D', text: 'The ecological arguments against deep-sea mining are particularly compelling. The abyssal environment is among the most biologically diverse on earth, hosting hundreds of endemic species — organisms found nowhere else — that have adapted to conditions of perpetual darkness, crushing pressure, and near-zero temperatures. Studies by oceanographers at the GEOMAR Helmholtz Centre have documented that sediment plumes generated by nodule collection can travel hundreds of kilometres from extraction sites, smothering filter-feeding organisms and disrupting ecological processes across vast areas. Perhaps most troublingly, recovery timescales are geological: experiments conducted at sites where nodules were removed in the 1980s have found that sediment communities have not recovered after four decades.' },
        { label: 'E', text: 'Governance of deep-sea mineral resources in international waters falls to the International Seabed Authority (ISA), a United Nations body established under the 1982 Law of the Sea Convention. The ISA has issued exploration licences to over thirty entities representing both state-sponsored organisations and private companies, while working to finalise a regulatory framework — known as the Mining Code — that would govern commercial exploitation. Progress has been contentious. Pacific Island nations, whose exclusive economic zones adjoin some of the most mineral-rich areas, have called for moratoriums pending comprehensive environmental assessments. A coalition of over 700 marine scientists has likewise urged a moratorium, citing fundamental uncertainties about the long-term ecological consequences of extraction.' },
        { label: 'F', text: 'Technological innovation may alter the calculus in ways that current projections cannot fully capture. Several start-up companies are developing extraction systems designed to minimise sediment disturbance, while advances in robotics and autonomous systems hold promise for reducing operational costs. Alternative approaches to the metal supply challenge are also attracting investment: urban mining — the recovery of battery metals from recycled electronic waste — has grown substantially, and some analysts argue that continued improvements in battery chemistry may reduce or eliminate dependence on cobalt entirely. The ultimate trajectory of deep-sea mining will likely be determined by the interaction of technological progress, commodity price dynamics, evolving regulatory frameworks, and the degree of public and scientific scrutiny applied to an industry operating far from view.' }
      ],
      questions: [
        { id: 14, type: 'TFNG', question: 'The Clarion-Clipperton Zone contains mineral deposits exceeding the total volume of all known land-based reserves of nickel and cobalt.', answer: 'TRUE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 15, type: 'TFNG', question: 'The IEA predicts that demand for battery metals will remain relatively stable until 2040.', answer: 'FALSE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 16, type: 'TFNG', question: 'Deep-sea mining operations require the same technical infrastructure as terrestrial mines.', answer: 'FALSE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 17, type: 'TFNG', question: 'Some marine sediment communities disturbed in the 1980s have still not recovered today.', answer: 'TRUE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 18, type: 'TFNG', question: 'The ISA has issued more than thirty exploration licences to organisations worldwide.', answer: 'TRUE', options: ['TRUE','FALSE','NOT GIVEN'] },
        { id: 19, type: 'heading_match', question: 'Uncertainties in the financial viability of extraction', answer: 'C', options: ['A','B','C','D','E','F'] },
        { id: 20, type: 'heading_match', question: 'Future developments that could change the industry\'s outlook', answer: 'F', options: ['A','B','C','D','E','F'] },
        { id: 21, type: 'heading_match', question: 'International regulation and disputes over development rights', answer: 'E', options: ['A','B','C','D','E','F'] },
        { id: 22, type: 'summary', question: 'Nodules form on the seabed by accumulating minerals such as manganese, nickel, cobalt, and _____.', answer: 'copper', placeholder: 'ONE WORD ONLY' },
        { id: 23, type: 'summary', question: 'Scientists found that sediment plumes from mining can spread _____ from extraction sites.', answer: 'hundreds of kilometres', placeholder: 'NO MORE THAN THREE WORDS' },
        { id: 24, type: 'summary', question: 'Urban mining refers to the recovery of metals from recycled _____.', answer: 'electronic waste', placeholder: 'NO MORE THAN TWO WORDS' },
        { id: 25, type: 'mcq', question: 'What is the main reason battery metal demand is expected to rise sharply?', options: ['A. Growing terrestrial ore shortages', 'B. Expansion of nuclear energy programmes', 'C. Global decarbonisation and growth in electric vehicles', 'D. Declining efficiency of deep-sea extraction'], answer: 'C' },
        { id: 26, type: 'mcq', question: 'According to paragraph D, what is particularly alarming about damage to abyssal ecosystems?', options: ['A. Species are commercially valuable', 'B. Recovery may take geological timescales', 'C. Sediment plumes cause surface oil spills', 'D. Hydrothermal vents supply global oxygen'], answer: 'B' },
        { id: 27, type: 'YNNG', question: 'Private corporations have been granted exploitation permits to commence full-scale commercial extraction.', answer: 'NOT GIVEN', options: ['YES','NO','NOT GIVEN'] }
      ]
    },
    {
      id: 'R003',
      title: 'The Evolution of Animal Cooperation and Altruism',
      difficulty: 'Cambridge Standard',
      wordCount: 810,
      paragraphs: [
        { label: 'A', text: 'Charles Darwin famously identified altruism — behavior that benefits another individual at a cost to oneself — as a "special difficulty" for his theory of natural selection. If evolutionary fitness is determined by individual reproductive success, any genetic predisposition to sacrifice one\'s own survival or reproduction for another should, mathematically, be selected against and rapidly disappear. For nearly a century following the publication of On the Origin of Species, the existence of sterile worker bees, alarm-calling prairie dogs, and food-sharing vampire bats remained an evolutionary paradox that resisted convincing theoretical resolution.' },
        { label: 'B', text: 'A major breakthrough occurred in 1964 when British evolutionary biologist W. D. Hamilton formulated the concept of kin selection and the rule now bearing his name: rB > C. Under Hamilton\'s rule, an altruistic trait can proliferate if the reproductive cost to the altruist (C) is outweighed by the reproductive benefit to the recipient (B), multiplied by their coefficient of relatedness (r). Hamilton\'s insight demonstrated that from a gene-centric perspective, helping genetic relatives pass on shared alleles is evolutionary equivalent to reproducing directly. This mathematical framework provided an elegant explanation for the extraordinary sociality of eusocial insects such as ants and wasps, where haplodiploid genetics create unusually high relatedness among female siblings.' },
        { label: 'C', text: 'However, kin selection could not explain the pervasive cooperation observed among unrelated individuals across diverse taxa. In 1971, Robert Trivers proposed the theory of reciprocal altruism, suggesting that helping non-relatives can be evolutionary viable if there is a high probability of future reciprocation and the immediate cost is less than the delayed return benefit. For reciprocal altruism to remain stable against invasion by "cheaters" — individuals who accept assistance without reciprocating — species must possess cognitive mechanisms for individual recognition, memory of past interactions, and the ability to penalise defectors. Field observations of vampire bats (Desmodus rotundus) by Gerald Wilkinson provided classic empirical confirmation: bats that failed to secure a nightly blood meal were preferentially fed regurgitated blood by roost-mates who had previously received assistance from them, regardless of genealogical relationship.' },
        { label: 'D', text: 'In recent decades, mathematical modeling using game theory has further refined our understanding of cooperative evolution. The Prisoner\'s Dilemma, repeatedly simulated across generational iterations, demonstrates that simple behavioural strategies such as "Tit-for-Tat" — which begins by cooperating and subsequently mimics the opponent\'s previous move — consistently outperform selfish strategies in stable populations. More complex models incorporate indirect reciprocity, where individuals benefit not from the direct recipient of their help, but from third-party observers who reward cooperative reputations. In human societies and certain primates, indirect reciprocity has been shown to foster large-scale cooperative networks far beyond the boundaries of family or immediate reciprocity.' },
        { label: 'E', text: 'Controversy continues to surround the concept of multilevel or group selection, which posits that competition between groups can favor group-beneficial altruistic traits even if those traits are disadvantageous within the group itself. Championed by sociobiologist E. O. Wilson and philosopher Elliott Sober, multilevel selection argues that groups of cooperators will outcompete groups of defectors, driving the evolution of cooperative norms. While critics argue that group selection can mathematically be subsumed under inclusive fitness theory, proponents counter that examining selection at multiple biological levels — from genes to organisms to social groups — provides indispensable conceptual clarity for explaining transitions from solitary life to complex collective societies.' }
      ],
      questions: [
        { id: 28, type: 'heading_match', question: 'Cooperation among unrelated individuals based on mutual exchange', answer: 'C', options: ['A','B','C','D','E'] },
        { id: 29, type: 'heading_match', question: 'The theoretical conflict between altruism and Darwinian selection', answer: 'A', options: ['A','B','C','D','E'] },
        { id: 30, type: 'heading_match', question: 'The role of mathematical game theory and reputation', answer: 'D', options: ['A','B','C','D','E'] },
        { id: 31, type: 'heading_match', question: 'Genetic relatedness as an evolutionary mechanism for self-sacrifice', answer: 'B', options: ['A','B','C','D','E'] },
        { id: 32, type: 'heading_match', question: 'Debates concerning selection operating across different biological tiers', answer: 'E', options: ['A','B','C','D','E'] },
        { id: 33, type: 'matching_features', question: 'Formulated the mathematical equation rB > C governing kin selection.', answer: 'W. D. Hamilton', options: ['Charles Darwin','W. D. Hamilton','Robert Trivers','Gerald Wilkinson','E. O. Wilson'] },
        { id: 34, type: 'matching_features', question: 'Documented regurgitated blood sharing among unrelated vampire bats.', answer: 'Gerald Wilkinson', options: ['Charles Darwin','W. D. Hamilton','Robert Trivers','Gerald Wilkinson','E. O. Wilson'] },
        { id: 35, type: 'matching_features', question: 'Proposed the foundational theory of reciprocal altruism in 1971.', answer: 'Robert Trivers', options: ['Charles Darwin','W. D. Hamilton','Robert Trivers','Gerald Wilkinson','E. O. Wilson'] },
        { id: 36, type: 'YNNG', question: 'Darwin was able to fully resolve the problem of altruism in On the Origin of Species.', answer: 'NO', options: ['YES','NO','NOT GIVEN'] },
        { id: 37, type: 'YNNG', question: 'Haplodiploid genetics in ants causes sisters to share a higher proportion of genes than normal siblings.', answer: 'YES', options: ['YES','NO','NOT GIVEN'] },
        { id: 38, type: 'YNNG', question: 'Tit-for-Tat is an aggressive game-theory strategy that defects on the very first round.', answer: 'NO', options: ['YES','NO','NOT GIVEN'] },
        { id: 39, type: 'summary', question: 'Under indirect reciprocity, an individual\'s willingness to cooperate earns them a positive _____ among third-party observers.', answer: 'reputation', placeholder: 'ONE WORD ONLY' },
        { id: 40, type: 'mcq', question: 'What is the primary point of contention between kin selection and group selection theorists?', options: ['A. Whether altruism actually exists in the wild', 'B. Whether natural selection operates primarily at gene or group levels', 'C. Whether computer models are valid in biology', 'D. Whether humans are capable of true self-sacrifice'], answer: 'B' }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // LISTENING TESTS (Complete 4-Section Academic CD Simulation)
  // ═══════════════════════════════════════════════════════════════════════
  listeningTests: [
    {
      id: 'LT001',
      title: 'IELTS Academic Listening Full Test 1',
      difficulty: 'Cambridge Standard',
      durationMinutes: 30,
      sections: [
        {
          section: 1,
          title: 'Section 1: University Accommodation Registration',
          context: 'A conversation between a new postgraduate student and an accommodation services officer at Lakefield University.',
          accent: 'British / International English',
          audioNotes: 'Natural pacing, telephone interaction, spelling names, telephone numbers, and numerical amounts.',
          script: [
            { speaker: 'OFFICER', text: 'Good morning, Lakefield University Accommodation Office, this is Priya speaking. How can I assist you today?' },
            { speaker: 'STUDENT', text: 'Oh hello! I would like to register for a place in student accommodation for next semester, please.' },
            { speaker: 'OFFICER', text: 'Certainly! Are you an incoming undergraduate or a postgraduate student?' },
            { speaker: 'STUDENT', text: 'I am a new postgraduate student. I will be starting the Environmental Science MSc in January.' },
            { speaker: 'OFFICER', text: 'Splendid. Let me record your details in our system. May I have your full surname first, please?' },
            { speaker: 'STUDENT', text: 'Yes, it is Okonkwo. Let me spell that: O-K-O-N-K-W-O. First name is Marcus.' },
            { speaker: 'OFFICER', text: 'Thank you, Marcus. And do you have your university applicant ID number handy?' },
            { speaker: 'STUDENT', text: 'Yes, it is PG-2024-7741.' },
            { speaker: 'OFFICER', text: 'Got it. Now, which residence hall are you interested in? We have Redwood Hall, which is completely self-catered; Ashfield Court, which provides a meal plan; and Lakeside Lodge, our premium en-suite complex.' },
            { speaker: 'STUDENT', text: 'I think Ashfield Court would be ideal — with demanding laboratory hours, having regular meals prepared will save me valuable study time.' },
            { speaker: 'OFFICER', text: 'An excellent choice. Ashfield Court includes fourteen hot meals per week. Do you have any specific dietary requirements we should pass to catering?' },
            { speaker: 'STUDENT', text: 'Yes, I am strictly vegetarian, and I also have a mild nut allergy.' },
            { speaker: 'OFFICER', text: 'Noted: vegetarian, plus nut allergy. And regarding room type: standard single with shared bathroom, single en-suite, or studio?' },
            { speaker: 'STUDENT', text: 'A single en-suite, please. I require a quiet environment for writing papers.' },
            { speaker: 'OFFICER', text: 'The weekly charge for a single en-suite with the fourteen-meal plan is £195 per week. The standard postgraduate contract spans 38 weeks. To secure the booking, an initial deposit of £300 is payable upon confirmation.' },
            { speaker: 'STUDENT', text: 'That sounds very fair. How soon do I need to confirm?' },
            { speaker: 'OFFICER', text: 'You will receive an official booking email within 48 hours. You must log into the portal within seven days to confirm. May I take your mobile phone number for security verification?' },
            { speaker: 'STUDENT', text: 'Sure, it is 07954 336 281.' },
            { speaker: 'OFFICER', text: 'And your current contact email address?' },
            { speaker: 'STUDENT', text: 'marcus.okonkwo@lakefield.ac.uk' },
            { speaker: 'OFFICER', text: 'Wonderful. One final question: will you be bringing a vehicle or bicycle to campus?' },
            { speaker: 'STUDENT', text: 'I will be bringing a bicycle. Is there secure parking?' },
            { speaker: 'OFFICER', text: 'Yes, Ashfield Court features free secure bicycle storage located in the basement. Car parking permits, if needed later, cost an additional £25 per month.' },
            { speaker: 'STUDENT', text: 'Just the bicycle storage for now. Thank you so much for your guidance!' },
            { speaker: 'OFFICER', text: 'You are very welcome, Marcus. Have a safe journey to Lakefield!' }
          ],
          questions: [
            { id: 1, type: 'form', question: 'Student Surname', answer: 'Okonkwo', hint: 'Family name', instruction: 'Write ONE WORD AND/OR A NUMBER' },
            { id: 2, type: 'form', question: 'Applicant ID Number', answer: 'PG-2024-7741', hint: 'Format: Letters-Year-Digits', instruction: 'Write ONE WORD AND/OR A NUMBER' },
            { id: 3, type: 'form', question: 'Selected Residence Hall', answer: 'Ashfield Court', hint: 'Name of the hall', instruction: 'Write NO MORE THAN TWO WORDS' },
            { id: 4, type: 'form', question: 'Primary Diet', answer: 'vegetarian', hint: 'Dietary category', instruction: 'Write ONE WORD ONLY' },
            { id: 5, type: 'form', question: 'Medical / Food Allergy', answer: 'nut allergy', hint: 'Allergy description', instruction: 'Write NO MORE THAN TWO WORDS' },
            { id: 6, type: 'form', question: 'Room Preference', answer: 'single en-suite', hint: 'Room specifications', instruction: 'Write NO MORE THAN TWO WORDS' },
            { id: 7, type: 'form', question: 'Weekly Rent (£)', answer: '195', hint: 'Price per week in pounds', instruction: 'Write A NUMBER ONLY' },
            { id: 8, type: 'form', question: 'Duration of Tenancy Contract', answer: '38 weeks', hint: 'Length in weeks', instruction: 'Write ONE WORD AND/OR A NUMBER' },
            { id: 9, type: 'form', question: 'Security Deposit (£)', answer: '300', hint: 'Deposit amount', instruction: 'Write A NUMBER ONLY' },
            { id: 10, type: 'form', question: 'Contact Telephone Number', answer: '07954 336 281', hint: 'Full UK mobile', instruction: 'Write THE PHONE NUMBER' }
          ]
        },
        {
          section: 2,
          title: 'Section 2: Clifftop Coastal Heritage Reserve Guide',
          context: 'A welcome talk delivered by a reserve manager to volunteers arriving at the Clifftop Marine and Coastal Bird Sanctuary.',
          accent: 'Australian / British English',
          audioNotes: 'Monologue describing conservation zones, volunteer duties, equipment safety, and a site map layout.',
          script: [
            { speaker: 'MANAGER', text: 'Welcome everybody to the Clifftop Coastal Heritage Reserve. My name is Fiona Campbell, and I am the head ranger here. Before we issue your volunteer gear and assign you to your field monitoring stations, I want to give you an essential briefing on the reserve layout, our ongoing ecological projects, and strict safety guidelines.' },
            { speaker: 'MANAGER', text: 'The reserve covers approximately 450 hectares of coastal dunes, salt marsh, and limestone cliff faces. Our primary conservation mission centers on protecting the breeding colonies of the endangered Roseate Tern and the Northern Fur Seal. Over the past five years, volunteer efforts have helped fledgling survival rates climb by over thirty percent.' },
            { speaker: 'MANAGER', text: 'Now, please look at the reserve map in your handbook. We are currently standing in the Visitors Center right beside the Main Car Park. If you look immediately east across the gravel pathway, you will see the Wildlife Rehabilitation Clinic where injured birds receive medical triage. Just north of the clinic, past the timber bridge, lies the Freshwater Reedbeds, a designated Quiet Zone where no motorized buggies are allowed.' },
            { speaker: 'MANAGER', text: 'Further along the coastal footpath toward the high bluffs on the western perimeter stands Observation Hide B. This hide offers direct line-of-sight to the main nesting ledge. Remember, when you are stationed there, you must log bird arrivals using the digital tablet provided, and binoculars must be kept on neck straps at all times.' },
            { speaker: 'MANAGER', text: 'Now for safety: the coastal tides here are deceptively fast. Low tide occurs today at 11:45 AM, and high tide will peak at 5:20 PM. Anyone carrying out shorebird counts along the mudflats must retreat to the raised boardwalk by 3:30 PM without exception. If fog rolls in off the sea, sound the air horn located in your emergency pack and return along the marked yellow markers.' },
            { speaker: 'MANAGER', text: 'For lunch, sandwiches and hot tea will be served at the Education Barn from 1:00 PM to 2:00 PM. Please bring your reusable water flasks — single-use plastics are banned across the entire reserve.' }
          ],
          questions: [
            { id: 11, type: 'mcq', question: 'According to Fiona, what has been the main achievement of volunteer work over the past five years?', options: ['A. Doubling the total reserve land area', 'B. A 30% increase in fledgling survival rates', 'C. Eradicating invasive predators from the cliffs', 'D. Constructing three new education centres'], answer: 'B' },
            { id: 12, type: 'mcq', question: 'Which species is mentioned as one of the sanctuary\'s two main conservation priorities?', options: ['A. The Wandering Albatross', 'B. The Roseate Tern', 'C. The Blue-footed Booby', 'D. The Peregrine Falcon'], answer: 'B' },
            { id: 13, type: 'mcq', question: 'What rule must volunteers observe in the Freshwater Reedbeds?', options: ['A. Protective hardhats must be worn', 'B. Motorized buggies are strictly forbidden', 'C. Visitors must remain inside bird hides', 'D. Photography is prohibited'], answer: 'B' },
            { id: 14, type: 'mcq', question: 'By what time must all field volunteers leave the coastal mudflats?', options: ['A. 11:45 AM', 'B. 1:00 PM', 'C. 3:30 PM', 'D. 5:20 PM'], answer: 'C' },
            { id: 15, type: 'mcq', question: 'What should volunteers do if dense sea fog reduces visibility?', options: ['A. Remain stationary until rangers arrive', 'B. Walk directly to the cliff ledge', 'C. Sound the air horn and follow yellow markers', 'D. Climb into the nearest tree canopy'], answer: 'C' },
            { id: 16, type: 'map', question: 'Location of Wildlife Rehabilitation Clinic', answer: 'East of Visitors Center', options: ['A. East of Visitors Center','B. North of Reedbeds','C. Western Bluff Ledge','D. Beside Education Barn'] },
            { id: 17, type: 'map', question: 'Location of Freshwater Reedbeds', answer: 'North of the clinic past timber bridge', options: ['A. Adjacent to Main Car Park','B. North of the clinic past timber bridge','C. South beach inlet','D. High bluffs'] },
            { id: 18, type: 'notes', question: 'Binoculars must be secured on _____ at all times while on duty.', answer: 'neck straps', placeholder: 'NO MORE THAN TWO WORDS' },
            { id: 19, type: 'notes', question: 'Lunch will be served between 1:00 PM and 2:00 PM at the _____.', answer: 'Education Barn', placeholder: 'NO MORE THAN TWO WORDS' },
            { id: 20, type: 'notes', question: 'All volunteers must avoid bringing _____ onto the reserve.', answer: 'single-use plastics', placeholder: 'NO MORE THAN THREE WORDS' }
          ]
        },
        {
          section: 3,
          title: 'Section 3: Sustainable Urban Architecture Project',
          context: 'Two undergraduate architecture students, Liam and Chloe, consult their course tutor, Dr. Harrison, regarding their final year urban micro-climate design project.',
          accent: 'British / North American English',
          audioNotes: 'Fast-paced academic discussion with disagreements, revisions of methodology, evaluation of academic sources, and rubric criteria.',
          script: [
            { speaker: 'DR_HARRISON', text: 'Come on in, Liam, Chloe. Have a seat. I have reviewed your draft proposal on passive ventilation and heat-island mitigation in high-density residential blocks. You have got some very ambitious concepts here, but I have concerns about the empirical scope.' },
            { speaker: 'CHLOE', text: 'Thank you, Dr. Harrison. We felt that focusing exclusively on green roof retrofits was too narrow, so we expanded our scope to include vertical foliage facades and wind-funnel street geometry.' },
            { speaker: 'LIAM', text: 'Right, but Dr. Harrison, do you think comparing three different climatic zones — Singapore, Manchester, and Cairo — is spreading our simulation data too thin?' },
            { speaker: 'DR_HARRISON', text: 'Precisely, Liam. Trying to calibrate thermal modeling across three drastically disparate humidity and solar profiles within a ten-week project will compromise your depth. I strongly advise narrowing your investigation to temperate oceanic climates, comparing high-density residential precincts in Manchester and Rotterdam.' },
            { speaker: 'CHLOE', text: 'That makes sense. If we eliminate Cairo and Singapore, we can perform detailed Computational Fluid Dynamics simulations rather than relying on generalized approximations.' },
            { speaker: 'LIAM', text: 'What about the software pipeline? We intended to use EnergyPlus, but the steep learning curve for parametric daylighting analysis is eating into our design timetable.' },
            { speaker: 'DR_HARRISON', text: 'Most professional firms now integrate Rhino with Ladybug and Honeybee plugins. It allows direct geometric manipulation in Grasshopper while computing radiant heat transfer in real time.' },
            { speaker: 'CHLOE', text: 'We have both used Grasshopper in our second-year studio! That will save us at least two weeks of modeling.' },
            { speaker: 'DR_HARRISON', text: 'Good. Now regarding your assessment deliverables: remember the examiners place 40% of the weighting on your analytical methodology, 30% on your comparative design iterations, and 30% on your peer-reviewed literature review. Make sure you cite Keller\'s 2023 paper on urban aerodynamic drag — it directly challenges traditional wind-corridor assumptions.' },
            { speaker: 'LIAM', text: 'We will incorporate Keller\'s findings into Chapter Two. When is our final interim submission due?' },
            { speaker: 'DR_HARRISON', text: 'Friday the 14th of November at 4:00 PM. Late submissions lose five percent per calendar day, so plan accordingly.' }
          ],
          questions: [
            { id: 21, type: 'mcq', question: 'Why does Dr. Harrison advise against the students\' initial plan?', options: ['A. The chosen building materials are unavailable in Europe', 'B. Comparing three diverse climate zones will dilute their analysis', 'C. Their mathematical models contain computational errors', 'D. Green roofs have already been extensively researched'], answer: 'B' },
            { id: 22, type: 'mcq', question: 'Which two cities does Dr. Harrison recommend comparing instead?', options: ['A. Singapore and Cairo', 'B. London and Berlin', 'C. Manchester and Rotterdam', 'D. Dublin and Amsterdam'], answer: 'C' },
            { id: 23, type: 'mcq', question: 'What software tool does Dr. Harrison suggest using for real-time heat transfer calculations?', options: ['A. EnergyPlus standalone', 'B. AutoCAD Architecture', 'C. Rhino with Ladybug and Honeybee', 'D. SketchUp Pro'], answer: 'C' },
            { id: 24, type: 'mcq', question: 'What percentage of the final assessment grade is allocated to analytical methodology?', options: ['A. 20%', 'B. 30%', 'C. 40%', 'D. 50%'], answer: 'C' },
            { id: 25, type: 'mcq', question: 'Whose academic paper must the students review to address urban aerodynamic drag?', options: ['A. Keller (2023)', 'B. Harrison (2021)', 'C. Zhang & Miller (2022)', 'D. Thorne (2020)'], answer: 'A' },
            { id: 26, type: 'matching', question: 'Analytical Methodology weighting', answer: '40%', options: ['20%','30%','40%','50%'] },
            { id: 27, type: 'matching', question: 'Comparative Design Iterations weighting', answer: '30%', options: ['20%','30%','40%','50%'] },
            { id: 28, type: 'matching', question: 'Literature Review weighting', answer: '30%', options: ['20%','30%','40%','50%'] },
            { id: 29, type: 'notes', question: 'The final interim submission deadline is Friday the _____ at 4:00 PM.', answer: '14th of November', placeholder: 'WRITE DATE AND MONTH' },
            { id: 30, type: 'notes', question: 'Late submissions incur a penalty of _____ per calendar day.', answer: 'five percent', placeholder: 'NO MORE THAN TWO WORDS' }
          ]
        },
        {
          section: 4,
          title: 'Section 4: Academic Lecture – Marine Bioluminescence and Photophore Evolution',
          context: 'An academic lecture delivered by Professor Alistair Vance in the Department of Evolutionary Marine Biology.',
          accent: 'Academic Received Pronunciation (British English)',
          audioNotes: 'Monologue, formal academic register, technical terminology, biochemical pathways, evolutionary adaptations in abyssal depths.',
          script: [
            { speaker: 'PROFESSOR', text: 'Good afternoon, colleagues. In today\'s lecture on bathypelagic adaptations, we shall examine the evolution and ecological functions of marine bioluminescence — the production and emission of light by living organisms. In the aphotic zone of the world\'s oceans, beyond depths of one thousand metres where solar photons cannot penetrate, bioluminescence is not an anomaly; it is the dominant mode of optical communication, utilized by an estimated seventy-six percent of oceanic taxa.' },
            { speaker: 'PROFESSOR', text: 'To understand this phenomenon, we must first examine the fundamental biochemistry. Bioluminescence is fundamentally a chemiluminescent reaction wherein an enzyme, generically termed luciferase, catalyzes the oxidation of a substrate molecule, luciferin. In the presence of molecular oxygen and adenosine triphosphate, or ATP, luciferin is converted into an excited oxyluciferin intermediate. As this unstable molecule returns to its ground energy state, it releases excess energy in the form of cold light photons — meaning less than twenty percent of the reaction energy is lost as thermal heat.' },
            { speaker: 'PROFESSOR', text: 'Now let us turn to the specialized cellular structures responsible for producing and directing this illumination: photophores. Rather than merely being glowing tissue patches, complex photophores operate like miniature optical systems. They consist of a light-emitting photogenic core, backed by a reflective layer composed of guanine crystals, and capped by an adjustable cellular lens that can refract, focus, or disperse the light beam.' },
            { speaker: 'PROFESSOR', text: 'Evolutionarily, bioluminescent adaptations serve three primary survival imperatives: predatory tactics, reproductive signaling, and antipredator defense. In predation, the deep-sea anglerfish (Melanocetus johnsonii) presents the quintessential example, sporting a modified dorsal fin spine known as the illicium, tipped with a luminescent bulb called the esca. The light inside the esca is produced through an obligate symbiotic relationship with luminous bacteria of the genus Photobacterium.' },
            { speaker: 'PROFESSOR', text: 'Equally ingenious is the defensive strategy known as counterillumination, observed in the lanternfish and midwater squids. Predators swimming beneath their quarry look upward, scanning for silhouettes cast against the faint downwelling ambient light from the surface. By matching the intensity, wavelength, and spatial distribution of downward-directed light emitted from their ventral photophores, these creatures effectively render their silhouette invisible from below.' },
            { speaker: 'PROFESSOR', text: 'Finally, recent genomic sequencing has revealed that bioluminescence evolved independently in at least ninety-four distinct lineages across the tree of life — a classic example of convergent evolution driven by the extreme selective pressures of the deep marine biosphere.' }
          ],
          questions: [
            { id: 31, type: 'notes', question: 'Solar photons cannot penetrate ocean depths exceeding _____ metres.', answer: 'one thousand', placeholder: 'ONE WORD OR NUMBER' },
            { id: 32, type: 'notes', question: 'An estimated _____ of oceanic organisms utilize bioluminescence.', answer: 'seventy-six percent', placeholder: 'NUMBER OR WORDS' },
            { id: 33, type: 'notes', question: 'The oxidation of luciferin is catalyzed by an enzyme known as _____.', answer: 'luciferase', placeholder: 'ONE WORD ONLY' },
            { id: 34, type: 'notes', question: 'Less than _____ of the energy in the reaction is lost as heat.', answer: 'twenty percent', placeholder: 'NUMBER OR WORDS' },
            { id: 35, type: 'notes', question: 'The reflective backing of photophores is composed of _____ crystals.', answer: 'guanine', placeholder: 'ONE WORD ONLY' },
            { id: 36, type: 'notes', question: 'The glowing bulb of the deep-sea anglerfish is called the _____.', answer: 'esca', placeholder: 'ONE WORD ONLY' },
            { id: 37, type: 'notes', question: 'Light inside the anglerfish lure is generated by symbiotic _____.', answer: 'bacteria', placeholder: 'ONE WORD ONLY' },
            { id: 38, type: 'notes', question: 'Ventral photophores eliminate the organism\'s _____ in counterillumination.', answer: 'silhouette', placeholder: 'ONE WORD ONLY' },
            { id: 39, type: 'mcq', question: 'What is the optical function of the lens element in a complex photophore?', options: ['A. Absorbing harmful ultraviolet wavelengths', 'B. Refracting, focusing, or dispersing the emitted light beam', 'C. Generating chemical ATP for the reaction', 'D. Detecting light from approaching predators'], answer: 'B' },
            { id: 40, type: 'mcq', question: 'Genomic evidence shows bioluminescence evolved independently in at least how many lineages?', options: ['A. 24 distinct lineages', 'B. 52 distinct lineages', 'C. 76 distinct lineages', 'D. 94 distinct lineages'], answer: 'D' }
          ]
        }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // WRITING TASKS (Task 1 Diverse Visuals & Task 2 High Band Prompts)
  // ═══════════════════════════════════════════════════════════════════════
  writing: {
    task1: [
      {
        id: 'W1_001',
        chartType: 'bar',
        title: 'Daily Public Transport Usage in Five Countries (2010 vs 2020)',
        instruction: 'The bar chart below shows the percentage of adults in five countries who used public transport daily in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
        chartData: {
          labels: ['Germany', 'Brazil', 'Japan', 'Nigeria', 'Australia'],
          datasets: [
            { label: '2010', data: [42, 28, 67, 19, 22], backgroundColor: 'rgba(79,70,229,0.75)' },
            { label: '2020', data: [55, 41, 71, 35, 30], backgroundColor: 'rgba(6,182,212,0.75)' }
          ]
        },
        xLabel: 'Country',
        yLabel: '% of adults using public transport daily',
        keyFeatures: [
          'Japan maintained the highest usage rate across both years (67% to 71%)',
          'Nigeria recorded the largest proportional rise, nearly doubling from 19% to 35%',
          'Every country surveyed experienced an increase in public transport reliance',
          'Australia demonstrated the smallest increase (22% to 30%)'
        ],
        modelAnswer: `The bar chart illustrates the proportion of adults who relied on public transport on a daily basis in five countries, comparing figures from 2010 and 2020.

Overall, public transport usage increased in all five countries over the decade, with Japan maintaining the highest rates throughout and Nigeria recording the most dramatic relative growth.

In 2010, Japan led significantly with 67% of adults using public transport daily, a figure that edged up marginally to 71% by 2020. Germany occupied second position in both years, rising from 42% to 55%, representing a notable 13 percentage point gain. Brazil similarly grew from 28% to 41%, an increase of 13 points.

The most striking change was observed in Nigeria, where daily public transport use nearly doubled from 19% in 2010 to 35% in 2020, the largest proportional increase among the five nations. Australia, though starting from the joint-lowest base alongside Nigeria, experienced the most modest growth, rising from 22% to 30% — an increase of 8 percentage points.

In summary, while Japan remained the dominant user of public transport throughout the period, developing nations such as Nigeria demonstrated the most rapid adoption, reflecting expanding urban infrastructure and shifting commuter preferences.`
      },
      {
        id: 'W1_002',
        chartType: 'line',
        title: 'Household Energy Consumption by Region (2000–2020)',
        instruction: 'The line graph below shows average annual household energy consumption in kilowatt-hours (kWh) in four global regions from 2000 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
        chartData: {
          labels: ['2000', '2004', '2008', '2012', '2016', '2020'],
          datasets: [
            { label: 'North America', data: [12400, 12800, 12600, 11900, 11200, 10800], borderColor: '#4F46E5', tension: 0.35, fill: false },
            { label: 'Europe', data: [7200, 7400, 7300, 6900, 6500, 6100], borderColor: '#06B6D4', tension: 0.35, fill: false },
            { label: 'Southeast Asia', data: [2800, 3200, 3900, 4600, 5400, 6200], borderColor: '#10B981', tension: 0.35, fill: false },
            { label: 'Sub-Saharan Africa', data: [1200, 1300, 1400, 1600, 1900, 2300], borderColor: '#F59E0B', tension: 0.35, fill: false }
          ]
        },
        xLabel: 'Year',
        yLabel: 'Average kWh per household per annum',
        keyFeatures: [
          'North America and Europe experienced steady long-term declines',
          'Southeast Asia exhibited steep, uninterrupted growth, surpassing Europe by 2020',
          'Sub-Saharan Africa rose gradually from a low baseline',
          'A general convergence between developing and developed regional energy use occurred'
        ],
        modelAnswer: `The line graph presents trends in average annual household energy consumption across four global regions between 2000 and 2020, measured in kilowatt-hours (kWh).

The most prominent feature is the divergence between historically high-consumption regions, which declined over the two decades, and developing regions, which experienced sustained increases.

North America consistently consumed the largest volume of household electricity throughout the period, starting at 12,400 kWh in 2000 and peaking slightly at 12,800 kWh in 2004, before embarking on a downward trajectory to 10,800 kWh by 2020. Europe followed a comparable downward trend, decreasing steadily from 7,200 kWh to 6,100 kWh over the same timeframe.

In stark contrast, Southeast Asia experienced a dramatic and uninterrupted surge in household energy consumption, climbing from 2,800 kWh in 2000 to 6,200 kWh in 2020, ultimately overtaking European levels in the final year. Meanwhile, Sub-Saharan Africa, while recording the lowest usage figures throughout, nearly doubled its average consumption from 1,200 kWh to 2,300 kWh.

Overall, the data demonstrates an overarching pattern of global convergence, driven by energy efficiency gains in affluent nations and rapid electrification across developing economies.`
      },
      {
        id: 'W1_003',
        chartType: 'pie',
        title: 'Global Electricity Generation Sources (1995 vs 2025 Projected)',
        instruction: 'The pie charts below illustrate the sources of worldwide electricity generation in 1995 and projected figures for 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
        chartData: {
          labels: ['Coal', 'Natural Gas', 'Renewables (Solar/Wind/Hydro)', 'Nuclear', 'Oil'],
          datasets: [
            { label: '1995 (%)', data: [38, 15, 19, 17, 11], backgroundColor: ['#64748B','#06B6D4','#10B981','#A78BFA','#EF4444'] },
            { label: '2025 (%)', data: [24, 23, 36, 12, 5], backgroundColor: ['#64748B','#06B6D4','#10B981','#A78BFA','#EF4444'] }
          ]
        },
        keyFeatures: [
          'Renewables nearly doubled to become the dominant source in 2025 (19% to 36%)',
          'Coal dropped significantly from 38% to 24%',
          'Natural gas grew substantially from 15% to 23%',
          'Oil and nuclear power saw reductions in their overall shares'
        ],
        modelAnswer: `The pie charts compare the composition of global electricity generation by energy source in 1995 with projected proportions for 2025.

Overall, the data reveals a profound transformation from a fossil-fuel-dominated matrix led by coal in 1995 toward a much cleaner profile dominated by renewable sources by 2025, alongside a substantial decline in oil and coal reliance.

In 1995, coal was by far the foremost source of electrical power, accounting for 38% of worldwide generation. Renewables and nuclear energy constituted 19% and 17% respectively, followed by natural gas at 15% and oil at 11%. Together, fossil fuels (coal, gas, and oil) represented nearly two-thirds of the world's power supply.

By 2025, renewables are projected to expand dramatically, almost doubling to 36% to become the single largest contributor. In contrast, coal's contribution is expected to contract sharply to 24%, although natural gas will expand by 8 percentage points to 23%. Nuclear power and oil are both projected to contract, falling to 12% and 5% respectively.

In conclusion, the energy landscape displays a decisive structural pivot away from high-carbon fuels toward sustainable renewables and transitional natural gas.`
      },
      {
        id: 'W1_004',
        chartType: 'process',
        title: 'Industrial Desalination and Potable Water Treatment Process',
        instruction: 'The diagram below shows the industrial process of seawater desalination and treatment to produce safe drinking water for municipal networks. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
        processSteps: [
          'Intake & Pre-screening (removal of large marine debris and seaweed via mesh screens)',
          'Coagulation & Sedimentation (chemical dosing to precipitate suspended particulates)',
          'Dual-Media Sand Filtration (removal of microscopic silt and colloidal matter)',
          'High-Pressure Reverse Osmosis (seawater forced through semi-permeable membranes at 70 bar)',
          'Brine Discharge (hyper-saline discharge safely dispersed into deep ocean currents)',
          'Post-treatment Mineralization (re-introduction of calcium and magnesium, pH stabilization)',
          'Disinfection & Pumping into City Water Reservoirs'
        ],
        keyFeatures: [
          'Multi-stage industrial sequence with mechanical, chemical, and membrane filtration stages',
          'High-pressure reverse osmosis acts as the pivotal desalination step',
          'By-product hypersaline brine is extracted and routed back to ocean currents',
          'Treated water undergoes essential remineralisation before distribution'
        ],
        modelAnswer: `The diagram delineates the multi-stage industrial procedure involved in converting raw seawater into potable drinking water for municipal supply networks.

Overall, the process comprises seven sequential stages, beginning with seawater intake and primary filtration, progressing through chemical clarification and high-pressure membrane desalination, and concluding with mineralization and municipal distribution.

The initial phase begins with offshore seawater intake, where incoming water passes through coarse mesh screens to eliminate seaweed and large marine debris. The water is subsequently transferred to coagulation and sedimentation tanks, where chemical agents are injected to clump together suspended particles, allowing them to settle to the bottom. Following this, the clarified fluid moves through dual-media sand filters to extract remaining microscopic silt.

The central and most critical phase is high-pressure Reverse Osmosis (RO). The pre-treated water is forced through semi-permeable polymer membranes under extreme pressure of approximately 70 bar, separating dissolved salts from pure freshwater molecules. The extracted hyper-saline brine is returned to offshore marine currents via deep-water dispersal pipes. Finally, the desalinated water enters post-treatment chambers where essential minerals such as calcium and magnesium are added to optimize taste and stabilize pH, before ultraviolet disinfection and pumping into town reservoirs.`
      }
    ],

    task2: [
      {
        id: 'W2_001',
        topic: 'Technology & Artificial Intelligence',
        question: 'The rapid advancement of artificial intelligence is fundamentally changing the nature of work in many industries. Some argue that this transformation will lead to widespread unemployment and social inequality. Others believe it will create new opportunities and improve living standards globally.\n\nDiscuss both these views and give your own opinion.',
        keywords: ['artificial intelligence', 'automation', 'technological unemployment', 'socioeconomic inequality', 'economic productivity', 'workforce transition'],
        planningStructure: {
          introduction: 'Introduce the AI labor transformation debate; acknowledge both societal disruption and productivity optimism; state personal thesis that long-term benefits will prevail provided proactive policy intervention exists.',
          body1: 'Examine concerns: cognitive automation affecting middle-income professions (finance, legal, customer care); exacerbation of wealth concentration between technology owners and displaced workers.',
          body2: 'Examine counter-arguments: historical technological shifts (industrialization, computerization) generated higher-order employment; emergence of novel technical and collaborative roles; efficiency gains boosting global living standards.',
          conclusion: 'Reiterate stance: transitional friction is inevitable and necessitates state-sponsored retraining and progressive social safety nets, but technological stagnation is neither desirable nor sustainable.'
        },
        highBandVocabulary: [
          { word: 'encroach on', meaning: 'gradually intrude upon or advance into an area', example: 'AI algorithms increasingly encroach on cognitive professional domains.' },
          { word: 'hollowing-out', meaning: 'deterioration or removal of the middle tier of something', example: 'Automation risks a hollowing-out of middle-income clerical employment.' },
          { word: 'technological pessimism', meaning: 'the belief that technology will inherently harm society', example: 'Historical precedence cautions strongly against unchecked technological pessimism.' },
          { word: 'unprecedented productivity', meaning: 'output efficiency never before witnessed', example: 'Generative tools yield unprecedented productivity gains in research and logistics.' }
        ],
        modelAnswer: `The integration of artificial intelligence into modern economies has prompted intense debate regarding whether technological automation represents an existential threat to employment or a catalyst for unprecedented human prosperity. While legitimate concerns exist regarding labor displacement and widening income disparity, I contend that artificial intelligence will ultimately enhance living standards globally, provided that governments implement proactive workforce transition policies.

Critics of rapid AI adoption advance compelling arguments rooted in contemporary economic reality. Unlike historical mechanization, which predominantly replaced manual physical labor, modern machine learning systems encroach directly upon cognitive tasks. Fields such as paralegal document review, radiological diagnostic screening, financial forecasting, and customer service are experiencing significant automation. Because these changes transpire at unprecedented velocity, workers facing obsolescence often lack the time and capital required to retrain for technical positions. Consequently, without robust intervention, this trend threatens a hollowing-out of the middle class and an intensified concentration of wealth among proprietary technology conglomerates, worsening societal inequality.

Nevertheless, historical precedence and economic theory suggest that technological pessimists frequently underestimate human adaptability. The mechanization of agriculture in the nineteenth century and the computerization of office administrative work in the late twentieth century both provoked widespread panic regarding structural unemployment; yet both transitions ultimately stimulated greater total employment and higher aggregate living standards by giving birth to entirely new industries. Artificial intelligence is already cultivating novel professions — from prompt engineers and machine learning auditors to bioinformaticians and human-AI interaction specialists. Furthermore, by drastically lowering the cost of medical diagnostics, personalized education, and scientific research, AI promises to democratize access to essential services that were once luxuries.

In conclusion, although the disruptive friction caused by artificial intelligence must be mitigated through subsidized reskilling programs, progressive corporate taxation, and dynamic labor safety nets, the technology itself carries immense potential. By elevating human labor above repetitive tasks, AI represents an indispensable driver of global human progress.`
      },
      {
        id: 'W2_002',
        topic: 'Environment & Climate Policy',
        question: 'Some people believe that individuals can do very little to address the problem of climate change and that it is governments and large corporations that must take action. To what extent do you agree or disagree with this statement?',
        keywords: ['climate change', 'individual responsibility', 'systemic reform', 'corporate accountability', 'carbon footprint', 'regulatory policy'],
        planningStructure: {
          introduction: 'Contextualise the climate responsibility dilemma; affirm qualified agreement that institutional action is overwhelmingly dominant while acknowledging the indispensable catalytic role of citizens.',
          body1: 'Why institutional scale is paramount: industrial energy grids, manufacturing emissions, and international trade require top-down legislative frameworks that individual consumer thrift cannot replicate.',
          body2: 'The complementary power of the individual: shifts in consumer demand incentivize corporate decarbonization, while civic activism and voting compel governments to legislate.',
          conclusion: 'Systemic policy must lead, but individual political and consumer consciousness constitutes the driving force behind institutional will.'
        },
        highBandVocabulary: [
          { word: 'systemic problem', meaning: 'an issue embedded in the underlying structures of a whole system', example: 'Climate change is fundamentally a systemic problem rooted in fossil fuel grids.' },
          { word: 'statistically negligible', meaning: 'so small as to have no real measurable significance', example: 'Personal plastic avoidance remains statistically negligible without corporate packaging reform.' },
          { word: 'catalytic role', meaning: 'acting as a trigger or accelerator for wider change', example: 'Citizen pressure plays a catalytic role in shaping progressive environmental legislation.' },
          { word: 'top-down regulatory frameworks', meaning: 'government-imposed legal constraints and standards', example: 'Top-down regulatory frameworks such as carbon taxes reshape economic incentives.' }
        ],
        modelAnswer: `The question of whether environmental preservation hinges primarily upon individual ethical choices or systemic institutional action lies at the very core of modern ecological discourse. While I concede that personal lifestyle modifications alone cannot avert planetary warming, I disagree with the premise that individuals are powerless, as civic and consumer pressure constitutes the foundational catalyst for governmental and corporate accountability.

The argument for prioritizing state and corporate responsibility is supported by overwhelming statistical evidence. Global emissions are overwhelmingly generated by energy grids, heavy industrial manufacturing, international maritime freight, and industrial agriculture — systemic infrastructure that private citizens cannot re-engineer through domestic frugality. For example, a household installing solar panels or adopting a plant-based diet makes a statistically negligible contribution when compared to the impact of a sovereign government phasing out coal-fired power plants or enacting binding carbon taxes. Corporations control the production methodologies that dictate resource depletion, and only top-down regulatory frameworks accompanied by financial penalties can enforce decarbonization at the scale and speed demanded by climate science.

Nevertheless, it is a perilous fallacy to dismiss the agency of the individual. Corporations respond dynamically to aggregate market signals; the exponential growth of renewable energy investments, electric vehicle manufacturing, and sustainable packaging has been substantially propelled by evolving consumer preferences. More crucially, individuals do not exist merely as consumers; they are voters, shareholders, and active citizens. The historic passage of environmental legislation — from the Clean Air Acts to the European Green Deal — was invariably spearheaded by grassroots civic mobilizations. When individuals organize, boycott polluting brands, and elect leaders committed to ecological stewardship, their collective influence fundamentally shifts institutional policy.

In conclusion, while governments and transnational enterprises bear the structural and financial machinery necessary to mitigate climate change, it is informed and mobilized individuals who supply the political imperative for that machinery to operate. True environmental remediation demands an interdependent partnership between top-down governance and bottom-up public resolve.`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SPEAKING MODULE QUESTION BANKS & CUE CARDS
  // ═══════════════════════════════════════════════════════════════════════
  speaking: {
    part1: {
      categories: {
        'Work & Study': [
          'Do you work, or are you currently a student?',
          'What subjects or responsibilities do you find most engaging in your daily routine?',
          'Why did you choose your particular field of work or study?',
          'What are the most challenging demands you face in your current role or degree?',
          'Do you envision yourself pursuing the same career trajectory five years from now?'
        ],
        'Hometown & Neighborhood': [
          'Where is your hometown located, and what is it famous for?',
          'How has your neighborhood transformed compared to when you were growing up?',
          'What public amenities in your local area do you utilize most frequently?',
          'Would you recommend your hometown as an attractive place for young professionals to settle?',
          'What improvements would you introduce if you were responsible for municipal planning in your town?'
        ],
        'Technology & Daily Life': [
          'What digital device or application could you not imagine living without today?',
          'Do you believe people rely excessively on smartphones for basic cognitive tasks?',
          'How has digital communication altered the nature of personal relationships in your culture?',
          'Do you prefer physical books or reading on digital screens? Why?',
          'Are there any emerging technological innovations that make you feel apprehensive?'
        ],
        'Food, Diet & Culture': [
          'What traditional dish from your country would you proudly recommend to an international visitor?',
          'Do you prefer dining at home with family or eating out at restaurants with friends?',
          'How has your dietary intake shifted compared to what you consumed as a child?',
          'Do you think modern societies are becoming sufficiently conscious of nutritional health?',
          'Should culinary preparation and nutrition be made compulsory subjects in secondary schools?'
        ],
        'Travel, Transport & Global Places': [
          'What has been the most memorable destination you have ever travelled to?',
          'Do you prefer travelling solo or exploring new destinations with a group of companions?',
          'What mode of public transport in your country operates with the greatest efficiency?',
          'Do you believe international travel genuinely broadens an individual\'s cultural perspective?',
          'What destination on your travel wishlist do you hope to visit next, and what attracts you there?'
        ],
        'Hobbies, Leisure & Sports': [
          'What leisure activity do you find most effective for decompressing after intense study or work?',
          'Did you participate in any competitive sports during your childhood?',
          'Do you prefer active outdoor recreation or relaxing cultural activities indoors?',
          'How much free time do you manage to reserve for yourself during an average working week?',
          'Is there a new hobby or creative pursuit you have been eager to take up recently?'
        ]
      }
    },

    part2: [
      {
        id: 'SP2_001',
        topic: 'Useful Skill',
        cueCardTitle: 'Describe a complex skill you have acquired that has proven exceptionally valuable in your life.',
        bulletPoints: [
          'What the specific skill is and when you began learning it',
          'Who taught you or what resources you utilized to master it',
          'The primary obstacles you encountered during the learning curve',
          'And explain why this skill has had such a profound impact on your personal or academic success.'
        ],
        prepTimeSeconds: 60,
        speakingTimeSeconds: 120,
        part3Questions: [
          'In your opinion, what technical or interpersonal skills will be most indispensable in the automated workplace of the future?',
          'Should contemporary education systems place greater pedagogical emphasis on pragmatic vocational training or theoretical academic knowledge?',
          'Why do some adults find acquiring novel skills significantly more daunting than children do?',
          'Do you believe governments have a responsibility to subsidize ongoing adult retraining programs in response to economic disruption?'
        ],
        band9SampleTranscript: `I would like to talk about learning computer programming and data visualization, a skill set I began acquiring approximately three years ago during the second year of my university studies. 

Initially, I had enrolled in an introductory Python course out of pure intellectual curiosity, but I soon realized how transformative computational literacy could be for my academic research. Rather than relying on formal university lectures alone, I supplemented my studies by immersing myself in interactive online coding bootcamps and deconstructing open-source machine learning repositories. 

The learning curve was undeniably steep and at times demoralizing. In the early stages, I frequently wrestled with cryptic syntax errors and struggled to grasp abstract algorithmic structures such as recursive functions and object-oriented data design. Debugging a single stubborn error would occasionally consume an entire evening, which tested my patience and mental resilience to the utmost. 

Nevertheless, persisting through that friction proved to be one of the most rewarding endeavors of my academic life. In practical terms, mastering this skill enabled me to automate laborious empirical research, scraping data from thousands of published papers and visualizing complex multi-dimensional statistical trends within minutes. Beyond the technical utility, programming fundamentally rewired my cognitive approach to problem-solving, teaching me to deconstruct overwhelming, ambiguous challenges into modular, logically manageable components. That analytical discipline has permeated every facet of my academic work, and I have no doubt it will remain an invaluable cornerstone throughout my professional career.`
      },
      {
        id: 'SP2_002',
        topic: 'Environmental Issue',
        cueCardTitle: 'Describe an environmental challenge in your country or region that requires urgent intervention.',
        bulletPoints: [
          'What the environmental challenge is and where it is most acute',
          'The underlying factors and human activities contributing to it',
          'The consequences it inflicts upon public health or local ecosystems',
          'And explain what decisive measures should be implemented to remediate the crisis.'
        ],
        prepTimeSeconds: 60,
        speakingTimeSeconds: 120,
        part3Questions: [
          'Do you believe global environmental treaties can be genuinely enforceable without strict economic sanctions?',
          'How can developing economies balance rapid industrialization with the imperative to reduce greenhouse emissions?',
          'In what ways has public consciousness regarding ecological crises shifted over the past generation?',
          'Is environmental degradation primarily the fault of profit-driven corporations or consumer lifestyle choices?'
        ],
        band9SampleTranscript: `The environmental crisis that causes me the greatest concern is the severe airborne particulate pollution that plagues several major industrial metropolitan regions in my country, particularly during the stagnant winter months. 

This issue is predominantly concentrated in dense urban valleys surrounded by industrial manufacturing corridors. The crisis stems from a compounding confluence of factors: first, a heavy domestic reliance on coal-fired thermal power generation; second, the exponential growth of private vehicular traffic emitting untreated nitrogen oxides; and third, seasonal agricultural stubble burning across adjacent farming plains. When thermal inversion layers trap these particulates close to the ground, smog indices skyrocket to hazardous thresholds.

The ramifications of this prolonged contamination are devastating. Public health clinics document alarming surges in pediatric respiratory illnesses, acute asthma, and long-term cardiovascular conditions among elderly populations. Furthermore, acid deposition arising from sulfur emissions severely degrades surrounding arable soils and freshwater reservoirs, depressing crop yields and threatening aquatic biodiversity.

To meaningfully remediate this predicament, authorities must enact comprehensive structural reforms. First, governments must enforce stringent industrial emission caps while subsidizing the accelerated transition toward solar and wind installations. Second, urban planners must drastically expand electrified rapid transit infrastructure to render private combustion vehicles redundant. Finally, strict satellite-monitored penalties must be coupled with mechanized mulching equipment subsidies for farmers to eliminate agricultural burning entirely. Without coordinated systemic resolve, the economic and human toll will only continue to escalate.`
      },
      {
        id: 'SP2_003',
        topic: 'Cultural Monument or Architecture',
        cueCardTitle: 'Describe an architectural landmark or historic building that made an unforgettable impression on you.',
        bulletPoints: [
          'Where the landmark is located and what its historic provenance is',
          'Its distinctive aesthetic, structural, and cultural characteristics',
          'When and under what circumstances you had the privilege to visit it',
          'And explain why this edifice evokes such profound emotional or intellectual resonance.'
        ],
        prepTimeSeconds: 60,
        speakingTimeSeconds: 120,
        part3Questions: [
          'Why is the architectural preservation of ancient heritage buildings vital for modern national identity?',
          'Do contemporary commercial skyscrapers lack the aesthetic and cultural soul of historic architecture?',
          'Should public tax revenues be allocated to preserve historic ruins during times of economic austerity?',
          'How can architects successfully integrate cutting-edge eco-friendly technologies into centuries-old heritage structures?'
        ],
        band9SampleTranscript: `An architectural masterpiece that left an indelible impression on me is the Alhambra Palace complex, perched majestically upon the Sabika Hill overlooking the historic city of Granada in southern Spain. 

Originally commissioned in the thirteenth century by the Nasrid dynasty rulers, the Alhambra represents the zenith of Moorish architecture in Western Europe. I had the privilege of visiting this extraordinary citadel three summers ago during an educational tour across Andalusia. 

What distinguishes the Alhambra is its sublime mastery of spatial harmony, geometric symmetry, and hydraulic engineering. Rather than intimidating visitors with colossal, monolithic stone masses, the Moorish architects constructed a sequence of interconnected courtyards, serene water pools, and delicate arcades lined with slender marble columns. The Court of the Lions and the Hall of the Ambassadors feature bewilderingly intricate muqarnas — honeycomb vaulting carved with such mathematical precision that the ceilings appear to float weightlessly. Furthermore, the acoustic design is enchanting: water flows through stone channels continuously, generating a gentle, cooling auditory ambience that tempers the Mediterranean summer heat.

The building resonated deeply with me because it embodies a cultural epoch where art, poetry, mathematics, and philosophy were seamlessly synthesized into physical form. Arabic calligraphy is meticulously carved into the stucco plaster walls, reminding onlookers of the transience of worldly dominion. Walking through those tranquil, sun-dappled pavilions, one feels transported into a contemplative realm where human craftsmanship achieved near-perfect equilibrium with the surrounding natural landscape.`
      }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════
// CAMBRIDGE ACADEMIC 1–21 SERIES INTEGRATION & ACCESSORS
// ═══════════════════════════════════════════════════════════════════════
// Auto-load cambridge-series.js if running in browser and not yet loaded
if (typeof window !== 'undefined' && !window.CAMBRIDGE_ACADEMIC_SERIES) {
  if (!document.querySelector('script[src*="cambridge-series.js"]')) {
    const s = document.createElement('script');
    const isPagesDir = window.location.pathname.includes('/pages/') || (window.location.href && window.location.href.includes('/pages/'));
    s.src = isPagesDir ? '../js/cambridge-series.js' : 'js/cambridge-series.js';
    s.async = false;
    document.head.appendChild(s);
  }
}

IELTS_CONTENT.getCambridgeSeries = function () {

  if (typeof window !== 'undefined' && window.CAMBRIDGE_ACADEMIC_SERIES) {
    return window.CAMBRIDGE_ACADEMIC_SERIES;
  }
  if (typeof CAMBRIDGE_ACADEMIC_SERIES !== 'undefined') {
    return CAMBRIDGE_ACADEMIC_SERIES;
  }
  return null;
};

IELTS_CONTENT.getAllBooks = function () {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getAllListings();
  // Fallback metadata if series is still loading
  const list = [];
  for (let i = 1; i <= 21; i++) {
    list.push({ book: i, title: `Cambridge IELTS Academic ${i}`, era: i <= 6 ? 'Foundation Era' : i <= 13 ? 'Standard Era' : i <= 17 ? 'Advanced Contemporary Era' : 'Modern Computer-Delivered Challenge' });
  }
  return list;
};

IELTS_CONTENT.getCambridgeBook = function (bookNum) {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getBook(bookNum);
  return null;
};

IELTS_CONTENT.getCambridgeTest = function (bookNum, testNum = 1) {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getTest(bookNum, testNum);
  return null;
};

IELTS_CONTENT.getListeningTest = function (bookNum, testNum = 1) {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getListening(bookNum, testNum);
  return IELTS_CONTENT.listeningTests ? IELTS_CONTENT.listeningTests[0] : null;
};

IELTS_CONTENT.getReadingTest = function (bookNum, testNum = 1) {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getReading(bookNum, testNum);
  return IELTS_CONTENT.reading;
};

IELTS_CONTENT.getWritingTest = function (bookNum, testNum = 1) {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getWriting(bookNum, testNum);
  return { task1: IELTS_CONTENT.writing.task1[0], task2: IELTS_CONTENT.writing.task2[0] };
};

IELTS_CONTENT.getSpeakingTest = function (bookNum, testNum = 1) {
  const series = IELTS_CONTENT.getCambridgeSeries();
  if (series) return series.getSpeaking(bookNum, testNum);
  return {
    part1: IELTS_CONTENT.speaking.part1.categories['Work & Study'],
    part2: IELTS_CONTENT.speaking.part2[0],
    part3Questions: IELTS_CONTENT.speaking.part2[0].part3Questions,
    band9ModelSample: IELTS_CONTENT.speaking.part2[0].band9SampleTranscript
  };
};

// Export to window
if (typeof window !== 'undefined') {
  window.IELTS_CONTENT = IELTS_CONTENT;
}


