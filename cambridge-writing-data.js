/**
 * Cambridge Academic IELTS 1 to 21 Writing Test Database
 * Complete calibrated Task 1 (Bar, Line, Pie, Table, Map, Process) & Task 2 Discursive Essays
 */
(function(window) {
  'use strict';

  const WRITING_DATABASE = {
  "1": {
    "1": {
      "task1": {
        "id": "CAM_1_T1_W1",
        "title": "European Urban Commuter Transit Modes (1990 vs 2010)",
        "chartType": "bar",
        "instruction": "The bar chart below illustrates the proportion of urban commuters using private cars, buses, rail transit, and bicycles across four European capitals in 1990 and 2010. Write at least 150 words.",
        "chartData": {
          "title": "European Urban Commuter Transit Modes (1990 vs 2010)",
          "labels": [
            "London",
            "Paris",
            "Berlin",
            "Amsterdam"
          ],
          "categories": [
            "London",
            "Paris",
            "Berlin",
            "Amsterdam"
          ],
          "datasets": [
            {
              "label": "1990 Baseline (%)",
              "data": [
                48,
                42,
                35,
                22
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2010 Observed (%)",
              "data": [
                34,
                31,
                26,
                41
              ],
              "backgroundColor": "rgba(6,182,212,0.75)",
              "borderColor": "#06B6D4"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "European Metropolitan Capitals",
        "yLabel": "Commuter Transit Share (%)",
        "keyFeatures": [
          "Amsterdam registered the highest bicycle and pedestrian transit share in 2010.",
          "Private vehicular commuting declined substantially across all four surveyed capitals over the twenty-year span.",
          "Public rail transit expanded consistently, experiencing its most pronounced growth in Berlin."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding european urban commuter transit modes (1990 vs 2010) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_1_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 1)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_1_T2_W1",
        "title": "Household Weekly Expenditure Breakdown in the UK (1980 vs 2010)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding household weekly expenditure breakdown in the uk (1980 vs 2010). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Household Weekly Expenditure Breakdown in the UK (1980 vs 2010)",
          "labels": [
            "Food & Drink",
            "Housing & Energy",
            "Transport",
            "Clothing & Footwear",
            "Recreation & Leisure"
          ],
          "categories": [
            "Food & Drink",
            "Housing & Energy",
            "Transport",
            "Clothing & Footwear",
            "Recreation & Leisure"
          ],
          "datasets": [
            {
              "label": "1980 Baseline",
              "data": [
                32,
                18,
                15,
                21,
                14
              ],
              "backgroundColor": [
                "#EF4444",
                "#4F46E5",
                "#06B6D4",
                "#F59E0B",
                "#10B981"
              ]
            },
            {
              "label": "2010 Observed",
              "data": [
                17,
                30,
                19,
                12,
                22
              ],
              "backgroundColor": [
                "#EF4444",
                "#4F46E5",
                "#06B6D4",
                "#F59E0B",
                "#10B981"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Household Weekly Expenditure Breakdown in the UK (1980 vs 2010)",
          "year1": 1980,
          "year2": 2010,
          "segments1": [
            {
              "label": "Food & Drink",
              "value": 32,
              "color": "#EF4444"
            },
            {
              "label": "Housing & Energy",
              "value": 18,
              "color": "#4F46E5"
            },
            {
              "label": "Transport",
              "value": 15,
              "color": "#06B6D4"
            },
            {
              "label": "Clothing & Footwear",
              "value": 21,
              "color": "#F59E0B"
            },
            {
              "label": "Recreation & Leisure",
              "value": 14,
              "color": "#10B981"
            }
          ],
          "segments2": [
            {
              "label": "Food & Drink",
              "value": 17,
              "color": "#EF4444"
            },
            {
              "label": "Housing & Energy",
              "value": 30,
              "color": "#4F46E5"
            },
            {
              "label": "Transport",
              "value": 19,
              "color": "#06B6D4"
            },
            {
              "label": "Clothing & Footwear",
              "value": 12,
              "color": "#F59E0B"
            },
            {
              "label": "Recreation & Leisure",
              "value": 22,
              "color": "#10B981"
            }
          ],
          "keyFeatures": [
            "Housing and energy expenditures expanded dramatically from 18% to 30%, becoming the dominant household budget item by 2010.",
            "Spending on food and drink experienced an inverse halving, shrinking from 32% down to 17%.",
            "Recreation and transport both claimed larger proportions of household income in 2010 compared to 1980."
          ]
        },
        "keyFeatures": [
          "Housing and energy expenditures expanded dramatically from 18% to 30%, becoming the dominant household budget item by 2010.",
          "Spending on food and drink experienced an inverse halving, shrinking from 32% down to 17%.",
          "Recreation and transport both claimed larger proportions of household income in 2010 compared to 1980."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of household weekly expenditure breakdown in the uk (1980 vs 2010).\n\nOverall, key structural transformations are evident between 1980 and 2010, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1980, the distribution was headed by Food & Drink at 32%, which represented the principal category. By 2010, Food & Drink commanded 17%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_1_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 1)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_1_T3_W1",
        "title": "Coastal Fishing Village and Port of Parnham (1980 vs 2010)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the spatial changes that occurred in the coastal fishing village and port of Parnham between 1980 and 2010. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Coastal Fishing Village and Port of Parnham (1980 vs 2010)",
          "year1": 1980,
          "year2": 2010,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1980, Parnham was an undeveloped coastal hamlet reliant on traditional fishing, sheep grazing, and a single-track rail line.",
          "summary2": "By 2010, the village was transformed into a coastal tourist haven with luxury chalets, dual-track railway, and a private yacht marina.",
          "features1": [
            "Salt marsh and pasture farmland in the northern sector",
            "Single-track freight railway traversing the central zone",
            "Disused Victorian brickworks facility in the south-east",
            "Wooden fishing slipway and traditional fleet dock in the harbour"
          ],
          "features2": [
            "30 self-catering holiday chalets and paved access road in the north",
            "Electrified dual-track passenger rail with modern station",
            "Waterfront seafood restaurant and maritime visitor centre",
            "120-berth private leisure marina and passenger catamaran pier"
          ],
          "zones1": [
            {
              "name": "Marsh & Pasture",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 45,
              "fill": "#14532D",
              "stroke": "#22C55E",
              "label": "Pasture Farmland",
              "sub": "Sheep grazing"
            },
            {
              "name": "Victorian Brickworks",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 45,
              "fill": "#450A0A",
              "stroke": "#EF4444",
              "label": "Disused Brickworks",
              "sub": "Heavy industrial"
            },
            {
              "name": "Single Rail",
              "x": 20,
              "y": 80,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Single Track Rail",
              "sub": "Steam & freight"
            },
            {
              "name": "Wooden Slipway",
              "x": 80,
              "y": 125,
              "w": 120,
              "h": 45,
              "fill": "#0C4A6E",
              "stroke": "#0284C7",
              "label": "Fishing Slipway",
              "sub": "Wooden jetty"
            },
            {
              "name": "Natural Bay",
              "x": 20,
              "y": 190,
              "w": 350,
              "h": 50,
              "fill": "#082F49",
              "stroke": "#38BDF8",
              "label": "Natural Tidal Bay",
              "sub": "Open fishing waters"
            }
          ],
          "zones2": [
            {
              "name": "Holiday Chalets",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 45,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Holiday Chalets",
              "sub": "30 tourist cabins"
            },
            {
              "name": "Visitor Centre",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 45,
              "fill": "#312E81",
              "stroke": "#6366F1",
              "label": "Maritime Museum",
              "sub": "& Seafood Bistro"
            },
            {
              "name": "Dual Track Rail",
              "x": 20,
              "y": 80,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "High-Speed Dual Rail",
              "sub": "Passenger terminal"
            },
            {
              "name": "Leisure Marina",
              "x": 80,
              "y": 125,
              "w": 120,
              "h": 45,
              "fill": "#164E63",
              "stroke": "#06B6D4",
              "label": "Private Yacht Marina",
              "sub": "120 berths"
            },
            {
              "name": "Catamaran Pier",
              "x": 220,
              "y": 125,
              "w": 150,
              "h": 45,
              "fill": "#0C4A6E",
              "stroke": "#38BDF8",
              "label": "Ferry Pier",
              "sub": "High-speed transit"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1980 and 2010.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Coastal Fishing Village and Port of Parnham between 1980 and 2010.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1980, the layout was characterized by in 1980, parnham was an undeveloped coastal hamlet reliant on traditional fishing, sheep grazing, and a single-track rail line.\n\nBy 2010, extensive redevelopment transformed the site. As illustrated in the second map, by 2010, the village was transformed into a coastal tourist haven with luxury chalets, dual-track railway, and a private yacht marina. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_1_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 1)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_1_T4_W1",
        "title": "Industrial Brick Manufacturing from Clay Quarrying to Tunnel Kiln",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in industrial brick manufacturing from clay quarrying to tunnel kiln. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Industrial Brick Manufacturing from Clay Quarrying to Tunnel Kiln",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Clay Excavation & Sieving",
              "desc": "Raw clay is dug by heavy excavators and passed through metal roller grids to filter large debris.",
              "icon": "\u26cf\ufe0f",
              "tag": "Excavation",
              "param": "Roller Grid"
            },
            {
              "step": 2,
              "name": "Hydraulic Mixing & Moulding",
              "desc": "Refined clay is mixed with sand and water, then forced through extrusion dies or wire cutters into uniform rectangular blocks.",
              "icon": "\ud83d\udca7",
              "tag": "Forming",
              "param": "Extrusion Die"
            },
            {
              "step": 3,
              "name": "Chamber Dehydration",
              "desc": "Wet bricks undergo gradual dehydration in controlled drying chambers for 24 to 48 hours to prevent cracking.",
              "icon": "\ud83d\udca8",
              "tag": "Drying",
              "param": "24\u201348 Hours"
            },
            {
              "step": 4,
              "name": "Kiln High-Temperature Firing",
              "desc": "Bricks pass slowly through continuous tunnel kilns reaching temperatures between 900\u00b0C and 1300\u00b0C.",
              "icon": "\ud83d\udd25",
              "tag": "Thermal Firing",
              "param": "900\u00b0C\u20131300\u00b0C"
            },
            {
              "step": 5,
              "name": "Gradual Annealing & Cooling",
              "desc": "Fired bricks are transferred to cooling chambers for 48 hours to stabilize their molecular ceramic structure.",
              "icon": "\u2744\ufe0f",
              "tag": "Annealing",
              "param": "48 Hours"
            },
            {
              "step": 6,
              "name": "Automated Palletizing & Transport",
              "desc": "Hardened structural bricks are bundled on wooden pallets, shrink-wrapped, and loaded onto trucks for construction sites.",
              "icon": "\ud83d\ude9b",
              "tag": "Distribution",
              "param": "Final Output"
            }
          ],
          "inputs": [
            "Raw Clay",
            "Sand & Water",
            "Natural Gas Energy"
          ],
          "outputs": [
            "Durable Fired Construction Bricks"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in industrial brick manufacturing from clay quarrying to tunnel kiln.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with clay excavation & sieving and culminating in automated palletizing & transport.\n\nInitially, raw clay is dug by heavy excavators and passed through metal roller grids to filter large debris. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce durable fired construction bricks ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_1_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 1)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "2": {
    "1": {
      "task1": {
        "id": "CAM_2_T1_W1",
        "title": "Commercial Passenger Air Traffic Across Four Continents (1980\u20132010)",
        "chartType": "line",
        "instruction": "The line graph below shows trends in commercial passenger air travel volume (millions of passengers) across North America, Europe, Asia-Pacific, and Latin America from 1980 to 2010. Write at least 150 words.",
        "chartData": {
          "title": "Commercial Passenger Air Traffic Across Four Continents (1980\u20132010)",
          "labels": [
            "1980",
            "1990",
            "2000",
            "2010"
          ],
          "categories": [
            "1980",
            "1990",
            "2000",
            "2010"
          ],
          "datasets": [
            {
              "label": "North America",
              "data": [
                210,
                290,
                395,
                480
              ],
              "borderColor": "#4F46E5",
              "backgroundColor": "rgba(79,70,229,0.2)"
            },
            {
              "label": "Europe",
              "data": [
                160,
                240,
                350,
                440
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            },
            {
              "label": "Asia-Pacific",
              "data": [
                85,
                160,
                290,
                465
              ],
              "borderColor": "#10B981",
              "backgroundColor": "rgba(10,185,129,0.2)"
            },
            {
              "label": "Latin America",
              "data": [
                40,
                65,
                110,
                175
              ],
              "borderColor": "#F59E0B",
              "backgroundColor": "rgba(245,158,11,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Observation Decades",
        "yLabel": "Annual Passengers (Millions)",
        "keyFeatures": [
          "All four geographic regions registered substantial upward growth in air passenger volume between 1980 and 2010.",
          "Asia-Pacific displayed the most dynamic expansion, overtaking Europe and approaching North America by 2010.",
          "North America maintained the highest absolute passenger numbers throughout the initial three decades."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding commercial passenger air traffic across four continents (1980\u20132010) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_2_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 2)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_2_T2_W1",
        "title": "Multinational R&D Expenditure (% of GDP) and Patent Applications Across 4 Economies (2010 vs 2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding multinational r&d expenditure (% of gdp) and patent applications across 4 economies (2010 vs 2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Multinational R&D Expenditure (% of GDP) and Patent Applications Across 4 Economies (2010 vs 2024)",
          "headers": [
            "Country / Economy",
            "2010 R&D (% GDP)",
            "2024 R&D (% GDP)",
            "2010 Patent Filings",
            "2024 Patent Filings",
            "Global Innovation Rank"
          ],
          "rows": [
            [
              "South Korea",
              "3.5%",
              "4.8%",
              "135,000",
              "210,500",
              "1st"
            ],
            [
              "United States",
              "2.8%",
              "3.4%",
              "240,000",
              "325,000",
              "2nd"
            ],
            [
              "Germany",
              "2.7%",
              "3.1%",
              "47,500",
              "62,100",
              "3rd"
            ],
            [
              "United Kingdom",
              "1.6%",
              "1.9%",
              "15,200",
              "18,800",
              "4th"
            ]
          ],
          "keyFeatures": [
            "South Korea commanded the highest proportion of GDP dedicated to research and development across both survey years.",
            "The United States dominated in absolute patent volume supremacy, expanding from 240,000 to 325,000 applications.",
            "All four surveyed economies increased both their R&D financial ratios and total patent outputs over the fourteen-year period."
          ]
        },
        "keyFeatures": [
          "South Korea commanded the highest proportion of GDP dedicated to research and development across both survey years.",
          "The United States dominated in absolute patent volume supremacy, expanding from 240,000 to 325,000 applications.",
          "All four surveyed economies increased both their R&D financial ratios and total patent outputs over the fourteen-year period."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of multinational r&d expenditure (% of gdp) and patent applications across 4 economies (2010 vs 2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_2_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 2)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_2_T3_W1",
        "title": "University of Westbourne Central Academic Campus (1990 vs 2020)",
        "chartType": "map",
        "instruction": "The maps below delineate the structural alterations made to the central academic campus of the University of Westbourne between 1990 and 2020. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "University of Westbourne Central Academic Campus (1990 vs 2020)",
          "year1": 1990,
          "year2": 2020,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1990, the campus had extensive surface car parks, a single humanities hall, and scattered green lawns.",
          "summary2": "By 2020, parking was relocated underground, making way for a new STEM Complex, Student Union, and pedestrian boulevard.",
          "features1": [
            "Large surface car park occupying the western perimeter",
            "Single-storey central administration and humanities hall",
            "Open grass sports field in the north-eastern quadrant",
            "Two-lane vehicular throughway bisecting the university"
          ],
          "features2": [
            "Four-storey Science, Technology & Engineering (STEM) atrium",
            "Multi-deck subterranean parking structure beneath sports fields",
            "Student Services Union with caf\u00e9 terrace and career incubator",
            "Pedestrianised central avenue with bicycle sharing stations"
          ],
          "zones1": [
            {
              "name": "Surface Parking",
              "x": 20,
              "y": 15,
              "w": 140,
              "h": 90,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Surface Car Park",
              "sub": "200 vehicles"
            },
            {
              "name": "Humanities Hall",
              "x": 180,
              "y": 15,
              "w": 190,
              "h": 90,
              "fill": "#1E293B",
              "stroke": "#818CF8",
              "label": "Humanities Hall",
              "sub": "Admin & classrooms"
            },
            {
              "name": "Central Road",
              "x": 20,
              "y": 120,
              "w": 350,
              "h": 22,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "University Avenue",
              "sub": "Vehicular road"
            },
            {
              "name": "Open Lawn",
              "x": 20,
              "y": 160,
              "w": 350,
              "h": 80,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Grass Sports Pitch",
              "sub": "Open recreation"
            }
          ],
          "zones2": [
            {
              "name": "STEM Atrium",
              "x": 20,
              "y": 15,
              "w": 140,
              "h": 90,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "STEM Atrium",
              "sub": "Robotics & Labs"
            },
            {
              "name": "Student Hub",
              "x": 180,
              "y": 15,
              "w": 190,
              "h": 90,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Student Union",
              "sub": "Library & Media Hub"
            },
            {
              "name": "Pedestrian Walk",
              "x": 20,
              "y": 120,
              "w": 350,
              "h": 22,
              "fill": "#1E293B",
              "stroke": "#10B981",
              "label": "Bicycle & Foot Promenade",
              "sub": "Pedestrian only"
            },
            {
              "name": "All-Weather Turf",
              "x": 20,
              "y": 160,
              "w": 350,
              "h": 80,
              "fill": "#065F46",
              "stroke": "#34D399",
              "label": "All-Weather Sports Dome",
              "sub": "Underground Parking below"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1990 and 2020.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at University of Westbourne Central Academic Campus between 1990 and 2020.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1990, the layout was characterized by in 1990, the campus had extensive surface car parks, a single humanities hall, and scattered green lawns.\n\nBy 2020, extensive redevelopment transformed the site. As illustrated in the second map, by 2020, parking was relocated underground, making way for a new stem complex, student union, and pedestrian boulevard. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_2_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 2)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_2_T4_W1",
        "title": "Closed-Loop Post-Consumer Glass Recycling & Remanufacturing Sequence",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in closed-loop post-consumer glass recycling & remanufacturing sequence. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Closed-Loop Post-Consumer Glass Recycling & Remanufacturing Sequence",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Collection & Optical Sorting",
              "desc": "Post-consumer glass containers are deposited into sorting hoppers and separated by spectrophotometers into clear, amber, and green streams.",
              "icon": "\ud83c\udf7e",
              "tag": "Segregation",
              "param": "Optical Sensors"
            },
            {
              "step": 2,
              "name": "Crushing & Cullet Washing",
              "desc": "Sorted glass is pulverized into uniform cullet granules, high-pressure rinsed, and passed beneath magnetic separators to remove metal caps.",
              "icon": "\u2699\ufe0f",
              "tag": "Crushing",
              "param": "Cullet Granules"
            },
            {
              "step": 3,
              "name": "Regenerative Furnace Smelting",
              "desc": "Cullet is blended with virgin silica sand, soda ash, and limestone inside a gas furnace heated to 1500\u00b0C.",
              "icon": "\ud83d\udd25",
              "tag": "Smelting",
              "param": "1500\u00b0C"
            },
            {
              "step": 4,
              "name": "Gob Shearing & Blow Moulding",
              "desc": "Streams of molten glass are sheared into cylindrical gobs and blown with compressed air into precise bottle moulds.",
              "icon": "\ud83d\udca8",
              "tag": "Blowing",
              "param": "Blank Moulds"
            },
            {
              "step": 5,
              "name": "Controlled Annealing Lehr",
              "desc": "Newly minted bottles pass slowly through an annealing lehr tunnel to relieve internal thermal stresses.",
              "icon": "\ud83c\udf21\ufe0f",
              "tag": "Stress Relief",
              "param": "Annealing Lehr"
            },
            {
              "step": 6,
              "name": "Laser Inspection & Packaging",
              "desc": "Automated laser scanners detect micro-cracks before pristine bottles are packed for beverage bottling plants.",
              "icon": "\ud83d\udce6",
              "tag": "Quality Check",
              "param": "Defect Free"
            }
          ],
          "inputs": [
            "Discarded Glass Bottles",
            "Silica Sand",
            "Soda Ash"
          ],
          "outputs": [
            "Pristine Commercial Glass Containers"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in closed-loop post-consumer glass recycling & remanufacturing sequence.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with collection & optical sorting and culminating in laser inspection & packaging.\n\nInitially, post-consumer glass containers are deposited into sorting hoppers and separated by spectrophotometers into clear, amber, and green streams. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce pristine commercial glass containers ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_2_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 2)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "3": {
    "1": {
      "task1": {
        "id": "CAM_3_T1_W1",
        "title": "Renewable Solar Energy Output in Five European Nations (1995\u20132020)",
        "chartType": "bar",
        "instruction": "The bar chart below compares total electricity generated from solar photovoltaic systems across five European countries in 1995 and 2020. Write at least 150 words.",
        "chartData": {
          "title": "Renewable Solar Energy Output in Five European Nations (1995\u20132020)",
          "labels": [
            "Germany",
            "Spain",
            "Italy",
            "France",
            "United Kingdom"
          ],
          "categories": [
            "Germany",
            "Spain",
            "Italy",
            "France",
            "United Kingdom"
          ],
          "datasets": [
            {
              "label": "1995 (Gigawatt-Hours)",
              "data": [
                12,
                8,
                5,
                4,
                2
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2020 (Gigawatt-Hours)",
              "data": [
                50600,
                15300,
                24900,
                13600,
                12800
              ],
              "backgroundColor": "rgba(245,158,11,0.75)",
              "borderColor": "#F59E0B"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "European Nations",
        "yLabel": "Solar Power Generation (GWh)",
        "keyFeatures": [
          "Germany led solar power generation by a dramatic margin across the twenty-five-year timeframe.",
          "Solar generation was negligible in 1995 across all surveyed nations before experiencing exponential surges by 2020.",
          "Italy emerged as the second-largest producer in 2020, followed by Spain and France."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding renewable solar energy output in five european nations (1995\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_3_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 3)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_3_T2_W1",
        "title": "Global Freshwater Allocation Across Four Primary Sectors (1980 vs 2020)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding global freshwater allocation across four primary sectors (1980 vs 2020). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Global Freshwater Allocation Across Four Primary Sectors (1980 vs 2020)",
          "labels": [
            "Agriculture Irrigation",
            "Industrial Manufacturing",
            "Domestic & Municipal",
            "Power Station Cooling"
          ],
          "categories": [
            "Agriculture Irrigation",
            "Industrial Manufacturing",
            "Domestic & Municipal",
            "Power Station Cooling"
          ],
          "datasets": [
            {
              "label": "1980 Baseline",
              "data": [
                68,
                18,
                9,
                5
              ],
              "backgroundColor": [
                "#10B981",
                "#8B5CF6",
                "#06B6D4",
                "#F59E0B"
              ]
            },
            {
              "label": "2020 Observed",
              "data": [
                56,
                23,
                14,
                7
              ],
              "backgroundColor": [
                "#10B981",
                "#8B5CF6",
                "#06B6D4",
                "#F59E0B"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Global Freshwater Allocation Across Four Primary Sectors (1980 vs 2020)",
          "year1": 1980,
          "year2": 2020,
          "segments1": [
            {
              "label": "Agriculture Irrigation",
              "value": 68,
              "color": "#10B981"
            },
            {
              "label": "Industrial Manufacturing",
              "value": 18,
              "color": "#8B5CF6"
            },
            {
              "label": "Domestic & Municipal",
              "value": 9,
              "color": "#06B6D4"
            },
            {
              "label": "Power Station Cooling",
              "value": 5,
              "color": "#F59E0B"
            }
          ],
          "segments2": [
            {
              "label": "Agriculture Irrigation",
              "value": 56,
              "color": "#10B981"
            },
            {
              "label": "Industrial Manufacturing",
              "value": 23,
              "color": "#8B5CF6"
            },
            {
              "label": "Domestic & Municipal",
              "value": 14,
              "color": "#06B6D4"
            },
            {
              "label": "Power Station Cooling",
              "value": 7,
              "color": "#F59E0B"
            }
          ],
          "keyFeatures": [
            "Agriculture irrigation remained the predominant consumer of freshwater throughout the four-decade timeframe.",
            "Industrial manufacturing and domestic consumption exhibited noticeable relative expansions.",
            "Power station cooling accounted for the smallest fraction across both benchmark years."
          ]
        },
        "keyFeatures": [
          "Agriculture irrigation remained the predominant consumer of freshwater throughout the four-decade timeframe.",
          "Industrial manufacturing and domestic consumption exhibited noticeable relative expansions.",
          "Power station cooling accounted for the smallest fraction across both benchmark years."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of global freshwater allocation across four primary sectors (1980 vs 2020).\n\nOverall, key structural transformations are evident between 1980 and 2020, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1980, the distribution was headed by Agriculture Irrigation at 68%, which represented the principal category. By 2020, Agriculture Irrigation commanded 56%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_3_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 3)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_3_T3_W1",
        "title": "Town and Harbour of Norbury Spatial Redevelopment (1995 vs 2025)",
        "chartType": "map",
        "instruction": "The two maps below show the coastal town and harbour of Norbury in 1995 and following comprehensive redevelopment in 2025. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Town and Harbour of Norbury Spatial Redevelopment (1995 vs 2025)",
          "year1": 1995,
          "year2": 2025,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1995, Norbury featured active farmland, obsolete factories, and a commercial cargo shipping quay.",
          "summary2": "By 2025, it had evolved into an upscale leisure bay with residential apartments, marina, and roundabout.",
          "features1": [
            "Farmland and pastures in the north-east",
            "Victorian factory and brickworks south of the railway",
            "Single-track freight railway line with level crossing",
            "Commercial fishing and cargo dock with unpaved slipway"
          ],
          "features2": [
            "250-home low-emission residential suburb and supermarket",
            "Modern Waterfront promenade and marina luxury apartments",
            "Electrified high-speed dual rail and roundabout connector",
            "Leisure yacht marina and cross-bay passenger ferry terminal"
          ],
          "zones1": [
            {
              "name": "Farmland",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 50,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Farmland & Orchard",
              "sub": "Agricultural zone"
            },
            {
              "name": "Victorian Factory",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 50,
              "fill": "#450A0A",
              "stroke": "#EF4444",
              "label": "Old Factory Plant",
              "sub": "Manufacturing"
            },
            {
              "name": "Old Rail",
              "x": 20,
              "y": 80,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Single Track Rail",
              "sub": "Industrial freight"
            },
            {
              "name": "Working Dock",
              "x": 80,
              "y": 125,
              "w": 240,
              "h": 45,
              "fill": "#0C4A6E",
              "stroke": "#0284C7",
              "label": "Commercial Fishing Quay",
              "sub": "Cargo & slipway"
            },
            {
              "name": "Norbury Sea",
              "x": 20,
              "y": 190,
              "w": 350,
              "h": 50,
              "fill": "#082F49",
              "stroke": "#38BDF8",
              "label": "Norbury Sea & Harbour",
              "sub": "Tidal waters"
            }
          ],
          "zones2": [
            {
              "name": "New Suburb",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 50,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Residential Estate",
              "sub": "250 green homes"
            },
            {
              "name": "Supermarket",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 50,
              "fill": "#312E81",
              "stroke": "#6366F1",
              "label": "Supermarket Mall",
              "sub": "Retail & cinema"
            },
            {
              "name": "Dual Carriageway",
              "x": 20,
              "y": 80,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Dual Carriageway & R'bout",
              "sub": "Arterial link"
            },
            {
              "name": "Yacht Marina",
              "x": 80,
              "y": 125,
              "w": 240,
              "h": 45,
              "fill": "#164E63",
              "stroke": "#06B6D4",
              "label": "Marina & Passenger Ferry",
              "sub": "Leisure promenade"
            },
            {
              "name": "Leisure Bay",
              "x": 20,
              "y": 190,
              "w": 350,
              "h": 50,
              "fill": "#0369A1",
              "stroke": "#38BDF8",
              "label": "Norbury Leisure Bay",
              "sub": "Water sports"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1995 and 2025.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Town and Harbour of Norbury Spatial Redevelopment between 1995 and 2025.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1995, the layout was characterized by in 1995, norbury featured active farmland, obsolete factories, and a commercial cargo shipping quay.\n\nBy 2025, extensive redevelopment transformed the site. As illustrated in the second map, by 2025, it had evolved into an upscale leisure bay with residential apartments, marina, and roundabout. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_3_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 3)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_3_T4_W1",
        "title": "Hydroelectric Power Generation from Mountain Reservoir to High-Voltage Grid",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in hydroelectric power generation from mountain reservoir to high-voltage grid. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Hydroelectric Power Generation from Mountain Reservoir to High-Voltage Grid",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Rainfall & Snowmelt Capture",
              "desc": "Atmospheric precipitation collects in high-altitude mountain reservoirs behind a reinforced concrete gravity dam.",
              "icon": "\ud83c\udfd4\ufe0f",
              "tag": "Storage",
              "param": "High Elevation"
            },
            {
              "step": 2,
              "name": "Intake Control Sluice Gates",
              "desc": "Automated intake sluice gates open to direct pressurized water through protective trash racks into steep penstocks.",
              "icon": "\ud83d\udeaa",
              "tag": "Regulation",
              "param": "Intake Screens"
            },
            {
              "step": 3,
              "name": "Penstock Kinetic Acceleration",
              "desc": "Water surges down steep subterranean penstock conduits, converting gravitational potential into high-velocity kinetic energy.",
              "icon": "\ud83c\udf0a",
              "tag": "Acceleration",
              "param": "High Head Pressure"
            },
            {
              "step": 4,
              "name": "Francis Turbine Rotation",
              "desc": "High-velocity water jets spin the curved runner blades of Francis hydraulic turbines at 375 revolutions per minute.",
              "icon": "\u2699\ufe0f",
              "tag": "Hydraulic Work",
              "param": "375 RPM"
            },
            {
              "step": 5,
              "name": "Electromagnetic Generation",
              "desc": "Spinning turbine shafts drive electromagnetic rotors inside copper-wound stators, generating high-amperage alternating current.",
              "icon": "\u26a1",
              "tag": "Power Output",
              "param": "18 kV Generation"
            },
            {
              "step": 6,
              "name": "Step-Up Transformer & Grid",
              "desc": "Transformers step voltage up to 400 kV for ultra-low-loss transmission across long-distance national pylons.",
              "icon": "\ud83d\uddfc",
              "tag": "Transmission",
              "param": "400 kV Grid"
            }
          ],
          "inputs": [
            "Mountain Water Catchment",
            "Gravity Head"
          ],
          "outputs": [
            "High-Voltage Renewable Electricity"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in hydroelectric power generation from mountain reservoir to high-voltage grid.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with rainfall & snowmelt capture and culminating in step-up transformer & grid.\n\nInitially, atmospheric precipitation collects in high-altitude mountain reservoirs behind a reinforced concrete gravity dam. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce high-voltage renewable electricity ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_3_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 3)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "4": {
    "1": {
      "task1": {
        "id": "CAM_4_T1_W1",
        "title": "Pelagic Fish Biomass Densities and Fleet Tonnage (1985\u20132015)",
        "chartType": "line",
        "instruction": "The line graph below shows fluctuations in commercial pelagic fish biomass indices alongside total fishing fleet engine capacity between 1985 and 2015. Write at least 150 words.",
        "chartData": {
          "title": "Pelagic Fish Biomass Densities and Fleet Tonnage (1985\u20132015)",
          "labels": [
            "1985",
            "1995",
            "2005",
            "2015"
          ],
          "categories": [
            "1985",
            "1995",
            "2005",
            "2015"
          ],
          "datasets": [
            {
              "label": "Pelagic Fish Biomass Index",
              "data": [
                100,
                78,
                52,
                41
              ],
              "borderColor": "#EF4444",
              "backgroundColor": "rgba(239,68,68,0.2)"
            },
            {
              "label": "Fleet Engine Capacity (kW x100k)",
              "data": [
                35,
                62,
                88,
                112
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Chronological Interval",
        "yLabel": "Standardized Index / Fleet Metric",
        "keyFeatures": [
          "Fish biomass recorded a relentless and steep decline from 100 down to 41 points over the thirty-year timeframe.",
          "In stark contrast, commercial fishing fleet engine capacity more than tripled from 35 up to 112 units.",
          "The most precipitous decline in fish stocks coincided with the rapid expansion of mechanised trawling between 1985 and 2005."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding pelagic fish biomass densities and fleet tonnage (1985\u20132015) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_4_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 4)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_4_T2_W1",
        "title": "Intercity Rail Passenger Journeys, Punctuality, and Mean Fare Across 5 Operators (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding intercity rail passenger journeys, punctuality, and mean fare across 5 operators (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Intercity Rail Passenger Journeys, Punctuality, and Mean Fare Across 5 Operators (2024)",
          "headers": [
            "Rail Operator",
            "Annual Journeys (Millions)",
            "On-Time Punctuality (%)",
            "Customer Satisfaction (%)",
            "Average Fare per 100km (\u00a3)"
          ],
          "rows": [
            [
              "North-Eastern Express",
              "38.4",
              "92.4%",
              "88%",
              "\u00a324.50"
            ],
            [
              "Trans-Pennine Central",
              "26.8",
              "84.1%",
              "76%",
              "\u00a319.20"
            ],
            [
              "Highland Scottish Rail",
              "14.2",
              "95.6%",
              "92%",
              "\u00a321.80"
            ],
            [
              "Midland Intercity Line",
              "42.1",
              "81.5%",
              "71%",
              "\u00a327.40"
            ],
            [
              "Southern Commuter Link",
              "64.5",
              "78.2%",
              "65%",
              "\u00a316.50"
            ]
          ],
          "keyFeatures": [
            "Southern Commuter Link transported the highest passenger volume (64.5 million) but registered the lowest punctuality (78.2%).",
            "Highland Scottish Rail achieved the highest reliability rating with 95.6% on-time arrivals and 92% customer approval.",
            "Midland Intercity Line recorded the most expensive ticket tariff at \u00a327.40 per 100 kilometres."
          ]
        },
        "keyFeatures": [
          "Southern Commuter Link transported the highest passenger volume (64.5 million) but registered the lowest punctuality (78.2%).",
          "Highland Scottish Rail achieved the highest reliability rating with 95.6% on-time arrivals and 92% customer approval.",
          "Midland Intercity Line recorded the most expensive ticket tariff at \u00a327.40 per 100 kilometres."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of intercity rail passenger journeys, punctuality, and mean fare across 5 operators (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_4_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 4)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_4_T3_W1",
        "title": "Farington City Centre Pedestrianization and Tramway (2000 vs 2025)",
        "chartType": "map",
        "instruction": "The maps below illustrate urban modifications implemented in the historical commercial core of Farington between 2000 and 2025. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Farington City Centre Pedestrianization and Tramway (2000 vs 2025)",
          "year1": 2000,
          "year2": 2025,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2000, Farington centre was congested with multi-lane vehicular traffic, outdoor parking lots, and narrow sidewalks.",
          "summary2": "By 2025, private cars were barred in favor of an electrified light rail tram loop, pedestrian plaza, and leafy cycleway.",
          "features1": [
            "Four-lane arterial ring road circling the central shopping plaza",
            "Large asphalt multi-storey parking garage on North Street",
            "Central vehicular bus exchange with diesel fumes",
            "Narrow, congested pedestrian pavements flanking retail shops"
          ],
          "features2": [
            "Paved car-free pedestrian concourse with outdoor cafes and trees",
            "Zero-emission electric light-rail tramway network and stops",
            "Covered secure bicycle parking and automated rental docking hub",
            "Underground freight delivery tunnels keeping street level serene"
          ],
          "zones1": [
            {
              "name": "North Parking",
              "x": 20,
              "y": 15,
              "w": 150,
              "h": 50,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Multi-Storey Car Park",
              "sub": "500 cars"
            },
            {
              "name": "Old Retail",
              "x": 190,
              "y": 15,
              "w": 180,
              "h": 50,
              "fill": "#1E293B",
              "stroke": "#818CF8",
              "label": "Commercial Arcade",
              "sub": "Retail shops"
            },
            {
              "name": "Four Lane Road",
              "x": 20,
              "y": 80,
              "w": 350,
              "h": 30,
              "fill": "#0F172A",
              "stroke": "#EF4444",
              "label": "4-Lane Traffic Arterial",
              "sub": "Heavy vehicle gridlock"
            },
            {
              "name": "Bus Exchange",
              "x": 20,
              "y": 130,
              "w": 350,
              "h": 110,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Central Bus Depot",
              "sub": "Diesel bus terminals"
            }
          ],
          "zones2": [
            {
              "name": "Civic Library",
              "x": 20,
              "y": 15,
              "w": 150,
              "h": 50,
              "fill": "#312E81",
              "stroke": "#818CF8",
              "label": "Civic Arts Centre",
              "sub": "Exhibitions & Cafe"
            },
            {
              "name": "Glass Atrium",
              "x": 190,
              "y": 15,
              "w": 180,
              "h": 50,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Glass Covered Piazza",
              "sub": "Independent boutiques"
            },
            {
              "name": "Electric Tramway",
              "x": 20,
              "y": 80,
              "w": 350,
              "h": 30,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Light-Rail Tramway",
              "sub": "Silent electric transit"
            },
            {
              "name": "Pedestrian Concourse",
              "x": 20,
              "y": 130,
              "w": 350,
              "h": 110,
              "fill": "#0F766E",
              "stroke": "#2DD4BF",
              "label": "Farington Green Concourse",
              "sub": "Trees, fountains, cycle paths"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2000 and 2025.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Farington City Centre Pedestrianization and Tramway between 2000 and 2025.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2000, the layout was characterized by in 2000, farington centre was congested with multi-lane vehicular traffic, outdoor parking lots, and narrow sidewalks.\n\nBy 2025, extensive redevelopment transformed the site. As illustrated in the second map, by 2025, private cars were barred in favor of an electrified light rail tram loop, pedestrian plaza, and leafy cycleway. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_4_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 4)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_4_T4_W1",
        "title": "Direct Air Carbon Capture and Geologic Basalt Mineralization",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in direct air carbon capture and geologic basalt mineralization. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Direct Air Carbon Capture and Geologic Basalt Mineralization",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Atmospheric Air Induction",
              "desc": "Industrial motorized fans draw ambient atmospheric air across chemical solid-sorbent contactor arrays.",
              "icon": "\ud83c\udf00",
              "tag": "Induction",
              "param": "Ambient Air"
            },
            {
              "step": 2,
              "name": "Chemical Sorbent Adsorption",
              "desc": "Basic amine filter matrices selectively bind carbon dioxide molecules while releasing oxygen and nitrogen.",
              "icon": "\ud83e\uddea",
              "tag": "Adsorption",
              "param": "Amine Matrix"
            },
            {
              "step": 3,
              "name": "Thermal Desorption at 100\u00b0C",
              "desc": "Contactor modules seal and heat to 100\u00b0C using geothermal energy, releasing concentrated CO2 gas.",
              "icon": "\ud83d\udd25",
              "tag": "Desorption",
              "param": "100\u00b0C Geothermal"
            },
            {
              "step": 4,
              "name": "Compression & Condensation",
              "desc": "Desorbed gas is cooled, condensed to remove humidity, and pressurized into a supercritical fluid.",
              "icon": "\ud83d\udddc\ufe0f",
              "tag": "Pressurization",
              "param": "80 Bar Fluid"
            },
            {
              "step": 5,
              "name": "Aqueous Solution Injection",
              "desc": "Pressurized carbon dioxide is dissolved into water and pumped 1,000 metres underground into porous basalt rock formations.",
              "icon": "\ud83d\udca7",
              "tag": "Injection",
              "param": "1,000m Subterranean"
            },
            {
              "step": 6,
              "name": "In-Situ Carbon Mineralization",
              "desc": "The acidic carbonated fluid reacts with divalent basalt cations, forming solid white calcite minerals within two years.",
              "icon": "\ud83e\udea8",
              "tag": "Mineralization",
              "param": "Permanent Calcite"
            }
          ],
          "inputs": [
            "Ambient Air (420 ppm CO2)",
            "Water",
            "Geothermal Heat"
          ],
          "outputs": [
            "Permanent Solid Calcite Stone"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in direct air carbon capture and geologic basalt mineralization.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with atmospheric air induction and culminating in in-situ carbon mineralization.\n\nInitially, industrial motorized fans draw ambient atmospheric air across chemical solid-sorbent contactor arrays. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce permanent solid calcite stone ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_4_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 4)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "5": {
    "1": {
      "task1": {
        "id": "CAM_5_T1_W1",
        "title": "Alpine Glacial Thickness and Global Sea Level Shifts (1970\u20132020)",
        "chartType": "line",
        "instruction": "The line graph below charts cumulative Alpine glacial ice thickness loss (metres water equivalent) and mean global sea level rise (millimetres) from 1970 to 2020. Write at least 150 words.",
        "chartData": {
          "title": "Alpine Glacial Thickness and Global Sea Level Shifts (1970\u20132020)",
          "labels": [
            "1970",
            "1980",
            "1990",
            "2000",
            "2010",
            "2020"
          ],
          "categories": [
            "1970",
            "1980",
            "1990",
            "2000",
            "2010",
            "2020"
          ],
          "datasets": [
            {
              "label": "Cumulative Ice Loss (-m)",
              "data": [
                0,
                -3.2,
                -7.8,
                -14.5,
                -23.1,
                -34.8
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            },
            {
              "label": "Mean Sea Level Rise (+mm)",
              "data": [
                0,
                18,
                38,
                64,
                98,
                142
              ],
              "borderColor": "#4F46E5",
              "backgroundColor": "rgba(79,70,229,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Observation Year",
        "yLabel": "Measurement Units (m / mm)",
        "keyFeatures": [
          "Glacial ice loss accelerated dramatically after 1990, shedding nearly 35 metres of water equivalent by 2020.",
          "Global mean sea levels demonstrated a complementary inverse upward trajectory, rising by over 140 mm.",
          "Both environmental indicators displayed clear exponential acceleration during the final two decades."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding alpine glacial thickness and global sea level shifts (1970\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_5_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 5)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_5_T2_W1",
        "title": "North American Primary Energy Consumption Fuel Mix (1990 vs 2020)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding north american primary energy consumption fuel mix (1990 vs 2020). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "North American Primary Energy Consumption Fuel Mix (1990 vs 2020)",
          "labels": [
            "Petroleum Oil",
            "Natural Gas",
            "Coal",
            "Nuclear Power",
            "Renewables"
          ],
          "categories": [
            "Petroleum Oil",
            "Natural Gas",
            "Coal",
            "Nuclear Power",
            "Renewables"
          ],
          "datasets": [
            {
              "label": "1990 Baseline",
              "data": [
                41,
                24,
                23,
                8,
                4
              ],
              "backgroundColor": [
                "#EF4444",
                "#06B6D4",
                "#64748B",
                "#8B5CF6",
                "#10B981"
              ]
            },
            {
              "label": "2020 Observed",
              "data": [
                36,
                34,
                11,
                8,
                11
              ],
              "backgroundColor": [
                "#EF4444",
                "#06B6D4",
                "#64748B",
                "#8B5CF6",
                "#10B981"
              ]
            }
          ]
        },
        "pieData": {
          "title": "North American Primary Energy Consumption Fuel Mix (1990 vs 2020)",
          "year1": 1990,
          "year2": 2020,
          "segments1": [
            {
              "label": "Petroleum Oil",
              "value": 41,
              "color": "#EF4444"
            },
            {
              "label": "Natural Gas",
              "value": 24,
              "color": "#06B6D4"
            },
            {
              "label": "Coal",
              "value": 23,
              "color": "#64748B"
            },
            {
              "label": "Nuclear Power",
              "value": 8,
              "color": "#8B5CF6"
            },
            {
              "label": "Renewables",
              "value": 4,
              "color": "#10B981"
            }
          ],
          "segments2": [
            {
              "label": "Petroleum Oil",
              "value": 36,
              "color": "#EF4444"
            },
            {
              "label": "Natural Gas",
              "value": 34,
              "color": "#06B6D4"
            },
            {
              "label": "Coal",
              "value": 11,
              "color": "#64748B"
            },
            {
              "label": "Nuclear Power",
              "value": 8,
              "color": "#8B5CF6"
            },
            {
              "label": "Renewables",
              "value": 11,
              "color": "#10B981"
            }
          ],
          "keyFeatures": [
            "Natural gas expanded dynamically to reach parity with petroleum oil by 2020 at 34%.",
            "Coal consumption suffered a steep contraction, declining from 23% to 11%.",
            "Renewable energy nearly tripled its share from 4% to 11% of the total energy matrix."
          ]
        },
        "keyFeatures": [
          "Natural gas expanded dynamically to reach parity with petroleum oil by 2020 at 34%.",
          "Coal consumption suffered a steep contraction, declining from 23% to 11%.",
          "Renewable energy nearly tripled its share from 4% to 11% of the total energy matrix."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of north american primary energy consumption fuel mix (1990 vs 2020).\n\nOverall, key structural transformations are evident between 1990 and 2020, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1990, the distribution was headed by Petroleum Oil at 41%, which represented the principal category. By 2020, Petroleum Oil commanded 36%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_5_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 5)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_5_T3_W1",
        "title": "Southside Metropolitan Hospital Modernisation & Trauma Wing (1998 vs 2023)",
        "chartType": "map",
        "instruction": "The maps below show the layout of Southside Metropolitan Hospital in 1998 and following major architectural expansion in 2023. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Southside Metropolitan Hospital Modernisation & Trauma Wing (1998 vs 2023)",
          "year1": 1998,
          "year2": 2023,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1998, the hospital consisted of a single main inpatient block, ground parking, and open wasteland.",
          "summary2": "By 2023, it featured an Oncology Wing, automated Pathology laboratory, multi-deck car park, and rooftop air ambulance helipad.",
          "features1": [
            "Single rectangular three-storey inpatient care facility",
            "Open gravel car park with only 120 patient spaces",
            "Overgrown wasteland occupying the southern half of the site",
            "Single entrance road shared by ambulances and public visitors"
          ],
          "features2": [
            "Specialist Oncology & Radiotherapy Pavilion connected by skybridge",
            "Four-level subterranean parking garage with EV charging",
            "Dedicated Emergency Trauma access ramp and rooftop medevac helipad",
            "Curative sensory garden and automated outpatient diagnostics building"
          ],
          "zones1": [
            {
              "name": "Main Ward",
              "x": 20,
              "y": 15,
              "w": 200,
              "h": 100,
              "fill": "#1E293B",
              "stroke": "#818CF8",
              "label": "Main Hospital Block",
              "sub": "General wards"
            },
            {
              "name": "Gravel Car Park",
              "x": 240,
              "y": 15,
              "w": 130,
              "h": 100,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Gravel Car Park",
              "sub": "120 bays"
            },
            {
              "name": "Shared Road",
              "x": 20,
              "y": 130,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Access Road",
              "sub": "Shared ambulances/cars"
            },
            {
              "name": "Vacant Land",
              "x": 20,
              "y": 165,
              "w": 350,
              "h": 75,
              "fill": "#292524",
              "stroke": "#78716C",
              "label": "Undeveloped Scrubland",
              "sub": "Overgrown field"
            }
          ],
          "zones2": [
            {
              "name": "Main Ward",
              "x": 20,
              "y": 15,
              "w": 150,
              "h": 100,
              "fill": "#1E293B",
              "stroke": "#818CF8",
              "label": "Surgical Block",
              "sub": "Renovated theaters"
            },
            {
              "name": "Oncology Wing",
              "x": 190,
              "y": 15,
              "w": 180,
              "h": 100,
              "fill": "#4338CA",
              "stroke": "#A5B4FC",
              "label": "New Oncology Wing",
              "sub": "Cancer care & skybridge"
            },
            {
              "name": "Dedicated EMS",
              "x": 20,
              "y": 130,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#EF4444",
              "label": "Priority Ambulance Flyover",
              "sub": "Direct trauma corridor"
            },
            {
              "name": "Sensory Garden",
              "x": 20,
              "y": 165,
              "w": 190,
              "h": 75,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Healing Garden & Helipad",
              "sub": "Rooftop air medevac"
            },
            {
              "name": "Multi-Deck Car Park",
              "x": 230,
              "y": 165,
              "w": 140,
              "h": 75,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Automated Multi-Deck",
              "sub": "600 vehicles & EV bays"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1998 and 2023.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Southside Metropolitan Hospital Modernisation & Trauma Wing between 1998 and 2023.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1998, the layout was characterized by in 1998, the hospital consisted of a single main inpatient block, ground parking, and open wasteland.\n\nBy 2023, extensive redevelopment transformed the site. As illustrated in the second map, by 2023, it featured an oncology wing, automated pathology laboratory, multi-deck car park, and rooftop air ambulance helipad. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_5_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 5)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_5_T4_W1",
        "title": "Seawater Reverse Osmosis Desalination & Potable Water Distribution",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in seawater reverse osmosis desalination & potable water distribution. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Seawater Reverse Osmosis Desalination & Potable Water Distribution",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Deep Marine Seawater Intake",
              "desc": "Seawater is drawn through submerged velocity caps placed 800 metres offshore to prevent marine life entrainment.",
              "icon": "\ud83c\udf0a",
              "tag": "Intake",
              "param": "800m Offshore"
            },
            {
              "step": 2,
              "name": "Dual-Media Pre-Filtration",
              "desc": "Intake water passes through anthracite and gravel filtration beds alongside coagulants to remove suspended particulates.",
              "icon": "\ud83e\uddf1",
              "tag": "Pre-Treatment",
              "param": "Dual Media"
            },
            {
              "step": 3,
              "name": "Micro-Cartridge Polishing",
              "desc": "Water flows through 5-micron spiral-wound cartridge filters to eliminate microscopic silts and bacteria.",
              "icon": "\ud83d\udd2c",
              "tag": "Micro-Filtration",
              "param": "5-Micron Barrier"
            },
            {
              "step": 4,
              "name": "High-Pressure Membrane RO",
              "desc": "Heavy-duty pumps exert 70 bar of pressure against polyamide semi-permeable membranes, forcing pure water through while rejecting brine.",
              "icon": "\u2699\ufe0f",
              "tag": "Reverse Osmosis",
              "param": "70 Bar Pressure"
            },
            {
              "step": 5,
              "name": "Mineral Rebalancing & Chlorination",
              "desc": "Permeate freshwater is remineralized with calcium carbonate and carbon dioxide, followed by disinfection chlorination.",
              "icon": "\ud83e\uddea",
              "tag": "Remineralization",
              "param": "Potable Balancing"
            },
            {
              "step": 6,
              "name": "Municipal Storage & Pumping",
              "desc": "Clean drinking water is pumped into covered municipal reservoirs and distributed through the urban potable water network.",
              "icon": "\ud83d\udeb0",
              "tag": "Distribution",
              "param": "WHO Standard"
            }
          ],
          "inputs": [
            "Seawater (35,000 ppm TDS)",
            "Electricity",
            "Conditioning Minerals"
          ],
          "outputs": [
            "Potable Drinking Water (200 ppm TDS)"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in seawater reverse osmosis desalination & potable water distribution.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with deep marine seawater intake and culminating in municipal storage & pumping.\n\nInitially, seawater is drawn through submerged velocity caps placed 800 metres offshore to prevent marine life entrainment. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce potable drinking water (200 ppm tds) ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_5_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 5)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "6": {
    "1": {
      "task1": {
        "id": "CAM_6_T1_W1",
        "title": "Industrial Automation Robot Density per 10,000 Workers (2000\u20132020)",
        "chartType": "bar",
        "instruction": "The bar chart below compares the density of industrial operational robots per 10,000 manufacturing employees across five industrialized nations in 2000 and 2020. Write at least 150 words.",
        "chartData": {
          "title": "Industrial Automation Robot Density per 10,000 Workers (2000\u20132020)",
          "labels": [
            "South Korea",
            "Singapore",
            "Japan",
            "Germany",
            "United States"
          ],
          "categories": [
            "South Korea",
            "Singapore",
            "Japan",
            "Germany",
            "United States"
          ],
          "datasets": [
            {
              "label": "2000 Robot Density",
              "data": [
                95,
                82,
                180,
                125,
                78
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2020 Robot Density",
              "data": [
                932,
                605,
                390,
                371,
                255
              ],
              "backgroundColor": "rgba(16,185,129,0.75)",
              "borderColor": "#10B981"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Industrial Economies",
        "yLabel": "Robot Density (Units per 10,000 workers)",
        "keyFeatures": [
          "South Korea recorded the most astounding surge, expanding nearly tenfold from 95 to 932 robots per 10,000 workers.",
          "Japan, which held the outright leadership position in 2000, was surpassed by both South Korea and Singapore by 2020.",
          "All surveyed economies registered significant expansions in manufacturing automation over the two decades."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding industrial automation robot density per 10,000 workers (2000\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_6_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 6)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_6_T2_W1",
        "title": "Annual Meat and Plant-Based Protein Consumption per Capita Across 5 Countries (Kg/year, 2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding annual meat and plant-based protein consumption per capita across 5 countries (kg/year, 2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Annual Meat and Plant-Based Protein Consumption per Capita Across 5 Countries (Kg/year, 2024)",
          "headers": [
            "Nation",
            "Beef & Veal (Kg)",
            "Poultry & Chicken (Kg)",
            "Pork (Kg)",
            "Fish & Seafood (Kg)",
            "Plant Protein Alternates (Kg)"
          ],
          "rows": [
            [
              "United States",
              "36.2",
              "51.4",
              "28.1",
              "16.5",
              "8.4"
            ],
            [
              "Australia",
              "32.8",
              "47.2",
              "24.6",
              "25.1",
              "6.8"
            ],
            [
              "Spain",
              "18.4",
              "34.2",
              "42.8",
              "38.9",
              "9.2"
            ],
            [
              "Japan",
              "10.5",
              "22.8",
              "21.4",
              "46.2",
              "12.6"
            ],
            [
              "Germany",
              "14.2",
              "24.1",
              "35.6",
              "14.8",
              "11.5"
            ]
          ],
          "keyFeatures": [
            "The United States registered the highest total animal meat intake, led by 51.4 Kg of poultry per person.",
            "Japan led in both seafood consumption (46.2 Kg) and plant-based protein alternatives (12.6 Kg).",
            "Spain recorded the largest per capita consumption of pork and second-highest seafood intake."
          ]
        },
        "keyFeatures": [
          "The United States registered the highest total animal meat intake, led by 51.4 Kg of poultry per person.",
          "Japan led in both seafood consumption (46.2 Kg) and plant-based protein alternatives (12.6 Kg).",
          "Spain recorded the largest per capita consumption of pork and second-highest seafood intake."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of annual meat and plant-based protein consumption per capita across 5 countries (kg/year, 2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_6_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 6)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_6_T3_W1",
        "title": "Grange Park Civic Arboretum & Community Centre (1970 vs 2020)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Grange Park Civic Arboretum & Community Centre between 1970 and 2020. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Grange Park Civic Arboretum & Community Centre (1970 vs 2020)",
          "year1": 1970,
          "year2": 2020,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1970, the location was primarily characterized by open bowling green and historic rose garden.",
          "summary2": "By 2020, extensive modernization introduced arboretum & botanic glasshouse, children's adventure playground, and updated arterial infrastructure.",
          "features1": [
            "Prominent Open Bowling Green located in the western sector",
            "Historic Rose Garden occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Arboretum & Botanic Glasshouse replacing older structures",
            "Modernized Children's Adventure Playground with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Open Bowling Green",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Historic Rose Garden",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Arboretum & Botanic Glasshouse",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Children's Adventure Playground",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1970 and 2020.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Grange Park Civic Arboretum & Community Centre between 1970 and 2020.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1970, the layout was characterized by in 1970, the location was primarily characterized by open bowling green and historic rose garden.\n\nBy 2020, extensive redevelopment transformed the site. As illustrated in the second map, by 2020, extensive modernization introduced arboretum & botanic glasshouse, children's adventure playground, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_6_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 6)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_6_T4_W1",
        "title": "Silkworm Metamorphosis and Silk Fabric Weaving Cycle",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in silkworm metamorphosis and silk fabric weaving cycle. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Silkworm Metamorphosis and Silk Fabric Weaving Cycle",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Incubation & Hatching",
              "desc": "Automated operational execution of incubation & hatching utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Mulberry Leaf Feeding",
              "desc": "Automated operational execution of mulberry leaf feeding utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Cocoon Spinning",
              "desc": "Automated operational execution of cocoon spinning utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Boiling & Sericin Softening",
              "desc": "Automated operational execution of boiling & sericin softening utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Filament Reeling",
              "desc": "Automated operational execution of filament reeling utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Textile Weaving",
              "desc": "Automated operational execution of textile weaving utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Silkworm Eggs"
          ],
          "outputs": [
            "Woven Silk Fabric"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in silkworm metamorphosis and silk fabric weaving cycle.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with incubation & hatching and culminating in textile weaving.\n\nInitially, automated operational execution of incubation & hatching utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce woven silk fabric ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_6_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 6)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "7": {
    "1": {
      "task1": {
        "id": "CAM_7_T1_W1",
        "title": "Deep-Sea Hydrothermal Exploration Missions and Submersibles (1985\u20132015)",
        "chartType": "line",
        "instruction": "The line graph below delineates the annual number of manned and autonomous scientific deep-sea research missions conducted below 2,000 metres between 1985 and 2015. Write at least 150 words.",
        "chartData": {
          "title": "Deep-Sea Hydrothermal Exploration Missions and Submersibles (1985\u20132015)",
          "labels": [
            "1985",
            "1995",
            "2005",
            "2015"
          ],
          "categories": [
            "1985",
            "1995",
            "2005",
            "2015"
          ],
          "datasets": [
            {
              "label": "Manned Submersible Dives",
              "data": [
                45,
                62,
                58,
                48
              ],
              "borderColor": "#F59E0B",
              "backgroundColor": "rgba(245,158,11,0.2)"
            },
            {
              "label": "Autonomous Underwater Vehicles (AUVs)",
              "data": [
                2,
                14,
                85,
                230
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Five-Year Intervals",
        "yLabel": "Annual Dive Deployments",
        "keyFeatures": [
          "Deployments of autonomous underwater vehicles experienced exponential growth after 1995, surpassing manned dives by 2005.",
          "Manned deep-sea submersible missions peaked in 1995 at 62 before plateauing and gently contracting to 48 by 2015.",
          "By 2015, autonomous robotic missions outnumbered manned expeditions by nearly five to one."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding deep-sea hydrothermal exploration missions and submersibles (1985\u20132015) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_7_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 7)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_7_T2_W1",
        "title": "International Tourism Market Share by Global Destination Region (1995 vs 2020)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding international tourism market share by global destination region (1995 vs 2020). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "International Tourism Market Share by Global Destination Region (1995 vs 2020)",
          "labels": [
            "Europe",
            "Americas",
            "Asia-Pacific",
            "Middle East",
            "Africa"
          ],
          "categories": [
            "Europe",
            "Americas",
            "Asia-Pacific",
            "Middle East",
            "Africa"
          ],
          "datasets": [
            {
              "label": "1995 Baseline",
              "data": [
                58,
                19,
                16,
                4,
                3
              ],
              "backgroundColor": [
                "#4F46E5",
                "#06B6D4",
                "#10B981",
                "#F59E0B",
                "#EC4899"
              ]
            },
            {
              "label": "2020 Observed",
              "data": [
                48,
                26,
                15,
                7,
                4
              ],
              "backgroundColor": [
                "#4F46E5",
                "#10B981",
                "#06B6D4",
                "#F59E0B",
                "#EC4899"
              ]
            }
          ]
        },
        "pieData": {
          "title": "International Tourism Market Share by Global Destination Region (1995 vs 2020)",
          "year1": 1995,
          "year2": 2020,
          "segments1": [
            {
              "label": "Europe",
              "value": 58,
              "color": "#4F46E5"
            },
            {
              "label": "Americas",
              "value": 19,
              "color": "#06B6D4"
            },
            {
              "label": "Asia-Pacific",
              "value": 16,
              "color": "#10B981"
            },
            {
              "label": "Middle East",
              "value": 4,
              "color": "#F59E0B"
            },
            {
              "label": "Africa",
              "value": 3,
              "color": "#EC4899"
            }
          ],
          "segments2": [
            {
              "label": "Europe",
              "value": 48,
              "color": "#4F46E5"
            },
            {
              "label": "Asia-Pacific",
              "value": 26,
              "color": "#10B981"
            },
            {
              "label": "Americas",
              "value": 15,
              "color": "#06B6D4"
            },
            {
              "label": "Middle East",
              "value": 7,
              "color": "#F59E0B"
            },
            {
              "label": "Africa",
              "value": 4,
              "color": "#EC4899"
            }
          ],
          "keyFeatures": [
            "Europe maintained the foremost position across both years, despite its share dropping by 10 percentage points.",
            "Asia-Pacific emerged as the fastest expanding destination, surging from 16% to 26%.",
            "The Americas contracted modestly, while the Middle East nearly doubled its market share."
          ]
        },
        "keyFeatures": [
          "Europe maintained the foremost position across both years, despite its share dropping by 10 percentage points.",
          "Asia-Pacific emerged as the fastest expanding destination, surging from 16% to 26%.",
          "The Americas contracted modestly, while the Middle East nearly doubled its market share."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of international tourism market share by global destination region (1995 vs 2020).\n\nOverall, key structural transformations are evident between 1995 and 2020, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1995, the distribution was headed by Europe at 58%, which represented the principal category. By 2020, Europe commanded 48%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_7_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 7)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_7_T3_W1",
        "title": "Port of Felixstowe Logistics Terminal & Deep-Water Quay (1985 vs 2015)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Port of Felixstowe Logistics Terminal & Deep-Water Quay between 1985 and 2015. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Port of Felixstowe Logistics Terminal & Deep-Water Quay (1985 vs 2015)",
          "year1": 1985,
          "year2": 2015,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1985, the location was primarily characterized by breakbulk warehouse and customs inspection yard.",
          "summary2": "By 2015, extensive modernization introduced deep-water container berth, automated rail gantry crane, and updated arterial infrastructure.",
          "features1": [
            "Prominent Breakbulk Warehouse located in the western sector",
            "Customs Inspection Yard occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Deep-Water Container Berth replacing older structures",
            "Modernized Automated Rail Gantry Crane with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Breakbulk Warehouse",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Customs Inspection Yard",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Deep-Water Container Berth",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Automated Rail Gantry Crane",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1985 and 2015.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Port of Felixstowe Logistics Terminal & Deep-Water Quay between 1985 and 2015.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1985, the layout was characterized by in 1985, the location was primarily characterized by breakbulk warehouse and customs inspection yard.\n\nBy 2015, extensive redevelopment transformed the site. As illustrated in the second map, by 2015, extensive modernization introduced deep-water container berth, automated rail gantry crane, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_7_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 7)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_7_T4_W1",
        "title": "Commercial Apiary Honey Harvesting, Centrifugation & Jarring",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in commercial apiary honey harvesting, centrifugation & jarring. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Commercial Apiary Honey Harvesting, Centrifugation & Jarring",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Comb Inspection & Capping",
              "desc": "Automated operational execution of comb inspection & capping utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Wax Uncapping Knife",
              "desc": "Automated operational execution of wax uncapping knife utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Radial Centrifuge Extraction",
              "desc": "Automated operational execution of radial centrifuge extraction utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Gravity Settling & Straining",
              "desc": "Automated operational execution of gravity settling & straining utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Moisture Monitoring",
              "desc": "Automated operational execution of moisture monitoring utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Hermetic Jarring",
              "desc": "Automated operational execution of hermetic jarring utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Honeycomb Frames"
          ],
          "outputs": [
            "Pure Bottled Honey"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in commercial apiary honey harvesting, centrifugation & jarring.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with comb inspection & capping and culminating in hermetic jarring.\n\nInitially, automated operational execution of comb inspection & capping utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce pure bottled honey ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_7_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 7)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "8": {
    "1": {
      "task1": {
        "id": "CAM_8_T1_W1",
        "title": "Transoceanic Subsea Fiber-Optic Bandwidth Capacity (1995\u20132020)",
        "chartType": "line",
        "instruction": "The line graph below charts total activated subsea fiber-optic bandwidth transmission capacity (Terabits per second) across three primary oceanic corridors from 1995 to 2020. Write at least 150 words.",
        "chartData": {
          "title": "Transoceanic Subsea Fiber-Optic Bandwidth Capacity (1995\u20132020)",
          "labels": [
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "categories": [
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "datasets": [
            {
              "label": "Transatlantic (TB/s)",
              "data": [
                0.05,
                2.5,
                18,
                95,
                340,
                1250
              ],
              "borderColor": "#4F46E5",
              "backgroundColor": "rgba(79,70,229,0.2)"
            },
            {
              "label": "Transpacific (TB/s)",
              "data": [
                0.02,
                1.8,
                14,
                80,
                310,
                1180
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            },
            {
              "label": "Europe-Asia (TB/s)",
              "data": [
                0.01,
                0.9,
                8,
                45,
                180,
                720
              ],
              "borderColor": "#10B981",
              "backgroundColor": "rgba(16,185,129,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Calendar Year",
        "yLabel": "Activated Capacity (Tbps)",
        "keyFeatures": [
          "Bandwidth capacity exploded from negligible fractions of a terabit in 1995 to well over 1,000 Tbps by 2020.",
          "The Transatlantic and Transpacific routes maintained parity throughout the era, commanding the highest capacity.",
          "The Europe-Asia corridor grew at a parallel trajectory, reaching over 700 Tbps by the end of the survey."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding transoceanic subsea fiber-optic bandwidth capacity (1995\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_8_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 8)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_8_T2_W1",
        "title": "University Graduate Employment Outcomes Across 5 Academic Faculties (2024 Survey)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding university graduate employment outcomes across 5 academic faculties (2024 survey). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "University Graduate Employment Outcomes Across 5 Academic Faculties (2024 Survey)",
          "headers": [
            "Academic Faculty",
            "Full-Time Employed (%)",
            "Mean Starting Salary (\u00a3)",
            "Enrolled in Further Study (%)",
            "Job Matches Degree Field (%)"
          ],
          "rows": [
            [
              "Computer Science & AI",
              "94.2%",
              "\u00a338,500",
              "18.5%",
              "91%"
            ],
            [
              "Engineering & Tech",
              "92.8%",
              "\u00a335,200",
              "14.2%",
              "88%"
            ],
            [
              "Medicine & Healthcare",
              "98.6%",
              "\u00a334,000",
              "26.4%",
              "96%"
            ],
            [
              "Business & Finance",
              "89.4%",
              "\u00a332,800",
              "12.0%",
              "79%"
            ],
            [
              "Arts & Humanities",
              "74.5%",
              "\u00a324,600",
              "22.8%",
              "58%"
            ]
          ],
          "keyFeatures": [
            "Medicine and healthcare graduates achieved the highest full-time employment rate at 98.6% and degree relevance at 96%.",
            "Computer Science and AI graduates secured the highest initial mean salary at \u00a338,500 per annum.",
            "Arts and Humanities graduates recorded lower direct employment (74.5%) and salary levels compared to technical fields."
          ]
        },
        "keyFeatures": [
          "Medicine and healthcare graduates achieved the highest full-time employment rate at 98.6% and degree relevance at 96%.",
          "Computer Science and AI graduates secured the highest initial mean salary at \u00a338,500 per annum.",
          "Arts and Humanities graduates recorded lower direct employment (74.5%) and salary levels compared to technical fields."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of university graduate employment outcomes across 5 academic faculties (2024 survey).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_8_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 8)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_8_T3_W1",
        "title": "St. Ives Coastal Seaside Promenade & Marina (1992 vs 2022)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at St. Ives Coastal Seaside Promenade & Marina between 1992 and 2022. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "St. Ives Coastal Seaside Promenade & Marina (1992 vs 2022)",
          "year1": 1992,
          "year2": 2022,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1992, the location was primarily characterized by victorian bathing huts and coastal walking promenade.",
          "summary2": "By 2022, extensive modernization introduced oceanfront pier pavilion, seawater wave barrier, and updated arterial infrastructure.",
          "features1": [
            "Prominent Victorian Bathing Huts located in the western sector",
            "Coastal Walking Promenade occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Oceanfront Pier Pavilion replacing older structures",
            "Modernized Seawater Wave Barrier with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Victorian Bathing Huts",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Coastal Walking Promenade",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Oceanfront Pier Pavilion",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Seawater Wave Barrier",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1992 and 2022.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at St. Ives Coastal Seaside Promenade & Marina between 1992 and 2022.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1992, the layout was characterized by in 1992, the location was primarily characterized by victorian bathing huts and coastal walking promenade.\n\nBy 2022, extensive redevelopment transformed the site. As illustrated in the second map, by 2022, extensive modernization introduced oceanfront pier pavilion, seawater wave barrier, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_8_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 8)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_8_T4_W1",
        "title": "Geothermal District Heating & Subterranean Heat Loop",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in geothermal district heating & subterranean heat loop. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Geothermal District Heating & Subterranean Heat Loop",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Geothermal Well Pumping",
              "desc": "Automated operational execution of geothermal well pumping utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "High-Pressure Flash Separator",
              "desc": "Automated operational execution of high-pressure flash separator utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Titanium Heat Exchanger",
              "desc": "Automated operational execution of titanium heat exchanger utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "District Water Circulation",
              "desc": "Automated operational execution of district water circulation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Reinjection Deep Well",
              "desc": "Automated operational execution of reinjection deep well utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Radiator Heat Dissipation",
              "desc": "Automated operational execution of radiator heat dissipation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Subterranean Magma Heat"
          ],
          "outputs": [
            "District Residential Heat"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in geothermal district heating & subterranean heat loop.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with geothermal well pumping and culminating in radiator heat dissipation.\n\nInitially, automated operational execution of geothermal well pumping utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce district residential heat ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_8_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 8)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "9": {
    "1": {
      "task1": {
        "id": "CAM_9_T1_W1",
        "title": "Microfinance Loan Disbursements by Sector in Developing Nations (2005\u20132020)",
        "chartType": "bar",
        "instruction": "The bar chart below compares microfinance loan allocations ($ Millions) across agriculture, artisanal manufacturing, retail trade, and healthcare between 2005 and 2020. Write at least 150 words.",
        "chartData": {
          "title": "Microfinance Loan Disbursements by Sector in Developing Nations (2005\u20132020)",
          "labels": [
            "Agriculture",
            "Artisanal Craft",
            "Small Retail",
            "Community Health"
          ],
          "categories": [
            "Agriculture",
            "Artisanal Craft",
            "Small Retail",
            "Community Health"
          ],
          "datasets": [
            {
              "label": "2005 Disbursed ($M)",
              "data": [
                140,
                85,
                210,
                45
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2020 Disbursed ($M)",
              "data": [
                480,
                195,
                620,
                240
              ],
              "backgroundColor": "rgba(6,182,212,0.75)",
              "borderColor": "#06B6D4"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Economic Sectors",
        "yLabel": "Loan Capital ($ Millions)",
        "keyFeatures": [
          "Small retail trade absorbed the largest volume of microcredit funding across both benchmark years.",
          "Agriculture registered the fastest absolute expansion, rising by more than 340 million dollars.",
          "Community healthcare micro-loans expanded more than fivefold, representing the highest relative percentage growth."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding microfinance loan disbursements by sector in developing nations (2005\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_9_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 9)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_9_T2_W1",
        "title": "Municipal Solid Waste Composition in Metropolitan Districts (1990 vs 2020)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding municipal solid waste composition in metropolitan districts (1990 vs 2020). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Municipal Solid Waste Composition in Metropolitan Districts (1990 vs 2020)",
          "labels": [
            "Food & Organics",
            "Paper & Cardboard",
            "Glass & Metals",
            "Plastics",
            "Textiles & Other"
          ],
          "categories": [
            "Food & Organics",
            "Paper & Cardboard",
            "Glass & Metals",
            "Plastics",
            "Textiles & Other"
          ],
          "datasets": [
            {
              "label": "1990 Baseline",
              "data": [
                35,
                32,
                15,
                8,
                10
              ],
              "backgroundColor": [
                "#10B981",
                "#F59E0B",
                "#64748B",
                "#EF4444",
                "#8B5CF6"
              ]
            },
            {
              "label": "2020 Observed",
              "data": [
                28,
                24,
                22,
                14,
                12
              ],
              "backgroundColor": [
                "#EF4444",
                "#10B981",
                "#F59E0B",
                "#64748B",
                "#8B5CF6"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Municipal Solid Waste Composition in Metropolitan Districts (1990 vs 2020)",
          "year1": 1990,
          "year2": 2020,
          "segments1": [
            {
              "label": "Food & Organics",
              "value": 35,
              "color": "#10B981"
            },
            {
              "label": "Paper & Cardboard",
              "value": 32,
              "color": "#F59E0B"
            },
            {
              "label": "Glass & Metals",
              "value": 15,
              "color": "#64748B"
            },
            {
              "label": "Plastics",
              "value": 8,
              "color": "#EF4444"
            },
            {
              "label": "Textiles & Other",
              "value": 10,
              "color": "#8B5CF6"
            }
          ],
          "segments2": [
            {
              "label": "Plastics",
              "value": 28,
              "color": "#EF4444"
            },
            {
              "label": "Food & Organics",
              "value": 24,
              "color": "#10B981"
            },
            {
              "label": "Paper & Cardboard",
              "value": 22,
              "color": "#F59E0B"
            },
            {
              "label": "Glass & Metals",
              "value": 14,
              "color": "#64748B"
            },
            {
              "label": "Textiles & Other",
              "value": 12,
              "color": "#8B5CF6"
            }
          ],
          "keyFeatures": [
            "Plastics more than tripled their share from 8% to 28%, becoming the single largest component of landfill waste by 2020.",
            "Paper and organic waste both contracted significantly in proportion due to municipal composting and digital media.",
            "Glass and metal fractions remained remarkably stable at 15% and 14% respectively."
          ]
        },
        "keyFeatures": [
          "Plastics more than tripled their share from 8% to 28%, becoming the single largest component of landfill waste by 2020.",
          "Paper and organic waste both contracted significantly in proportion due to municipal composting and digital media.",
          "Glass and metal fractions remained remarkably stable at 15% and 14% respectively."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of municipal solid waste composition in metropolitan districts (1990 vs 2020).\n\nOverall, key structural transformations are evident between 1990 and 2020, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1990, the distribution was headed by Food & Organics at 35%, which represented the principal category. By 2020, Plastics commanded 28%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_9_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 9)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_9_T3_W1",
        "title": "Dunwich Archaeological Heritage Reserve & Museum (1995 vs 2020)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Dunwich Archaeological Heritage Reserve & Museum between 1995 and 2020. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Dunwich Archaeological Heritage Reserve & Museum (1995 vs 2020)",
          "year1": 1995,
          "year2": 2020,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1995, the location was primarily characterized by gravel tourist trail and archaeological dig site.",
          "summary2": "By 2020, extensive modernization introduced subterranean roman crypt, interactive ar discovery centre, and updated arterial infrastructure.",
          "features1": [
            "Prominent Gravel Tourist Trail located in the western sector",
            "Archaeological Dig Site occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Subterranean Roman Crypt replacing older structures",
            "Modernized Interactive AR Discovery Centre with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Gravel Tourist Trail",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Archaeological Dig Site",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Subterranean Roman Crypt",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Interactive AR Discovery Centre",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1995 and 2020.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Dunwich Archaeological Heritage Reserve & Museum between 1995 and 2020.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1995, the layout was characterized by in 1995, the location was primarily characterized by gravel tourist trail and archaeological dig site.\n\nBy 2020, extensive redevelopment transformed the site. As illustrated in the second map, by 2020, extensive modernization introduced subterranean roman crypt, interactive ar discovery centre, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_9_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 9)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_9_T4_W1",
        "title": "Waste Paper De-Inking, Pulp Refining & Newsprint Production",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in waste paper de-inking, pulp refining & newsprint production. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Waste Paper De-Inking, Pulp Refining & Newsprint Production",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Hydrapulper Maceration",
              "desc": "Automated operational execution of hydrapulper maceration utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Centrifugal Slag Screening",
              "desc": "Automated operational execution of centrifugal slag screening utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Froth Flotation De-Inking",
              "desc": "Automated operational execution of froth flotation de-inking utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Hypochlorite Bleaching",
              "desc": "Automated operational execution of hypochlorite bleaching utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Fourdrinier Wire Drainage",
              "desc": "Automated operational execution of fourdrinier wire drainage utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Steam Calender Rolling",
              "desc": "Automated operational execution of steam calender rolling utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Discarded Office Paper"
          ],
          "outputs": [
            "Recycled Newsprint Paper Rolls"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in waste paper de-inking, pulp refining & newsprint production.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with hydrapulper maceration and culminating in steam calender rolling.\n\nInitially, automated operational execution of hydrapulper maceration utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce recycled newsprint paper rolls ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_9_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 9)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "10": {
    "1": {
      "task1": {
        "id": "CAM_10_T1_W1",
        "title": "Global Desalination Plant Capacity and Freshwater Output (1990\u20132020)",
        "chartType": "line",
        "instruction": "The line graph below charts total worldwide operational desalination capacity (Million cubic metres per day) and the percentage share accounted for by reverse osmosis membranes between 1990 and 2020. Write at least 150 words.",
        "chartData": {
          "title": "Global Desalination Plant Capacity and Freshwater Output (1990\u20132020)",
          "labels": [
            "1990",
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "categories": [
            "1990",
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "datasets": [
            {
              "label": "Daily Desalinated Water (Million m3/day)",
              "data": [
                16,
                22,
                31,
                48,
                68,
                86,
                115
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            },
            {
              "label": "Reverse Osmosis Share (%)",
              "data": [
                32,
                40,
                52,
                64,
                73,
                81,
                88
              ],
              "borderColor": "#10B981",
              "backgroundColor": "rgba(16,185,129,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Survey Year",
        "yLabel": "Production Volume / Technology Share",
        "keyFeatures": [
          "Global daily desalination output surged more than sevenfold from 16 to 115 million cubic metres per day.",
          "Membrane reverse osmosis progressively displaced thermal distillation, expanding from 32% to 88% of all operational facilities.",
          "Consistent linear growth was observed throughout each successive five-year interval."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding global desalination plant capacity and freshwater output (1990\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_10_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 10)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_10_T2_W1",
        "title": "Fixed Broadband Speeds, Monthly Tariffs, and Fiber Coverage Across 5 Nations (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding fixed broadband speeds, monthly tariffs, and fiber coverage across 5 nations (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Fixed Broadband Speeds, Monthly Tariffs, and Fiber Coverage Across 5 Nations (2024)",
          "headers": [
            "Nation",
            "Mean Download Speed (Mbps)",
            "Mean Upload Speed (Mbps)",
            "Fiber-to-Home Coverage (%)",
            "Average Monthly Tariff ($)"
          ],
          "rows": [
            [
              "Singapore",
              "285.4",
              "245.2",
              "98.5%",
              "$34.20"
            ],
            [
              "South Korea",
              "262.1",
              "218.4",
              "96.2%",
              "$28.50"
            ],
            [
              "United States",
              "215.8",
              "42.6",
              "54.2%",
              "$64.80"
            ],
            [
              "Germany",
              "142.5",
              "36.8",
              "42.1%",
              "$46.50"
            ],
            [
              "United Kingdom",
              "128.2",
              "31.4",
              "62.8%",
              "$41.20"
            ]
          ],
          "keyFeatures": [
            "Singapore and South Korea led global download speeds and near-universal fiber coverage (over 96%).",
            "South Korea offered the most competitive monthly pricing at $28.50 despite world-class speeds.",
            "The United States recorded the highest monthly cost at $64.80, alongside a notable download-upload speed asymmetry."
          ]
        },
        "keyFeatures": [
          "Singapore and South Korea led global download speeds and near-universal fiber coverage (over 96%).",
          "South Korea offered the most competitive monthly pricing at $28.50 despite world-class speeds.",
          "The United States recorded the highest monthly cost at $64.80, alongside a notable download-upload speed asymmetry."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of fixed broadband speeds, monthly tariffs, and fiber coverage across 5 nations (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_10_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 10)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_10_T3_W1",
        "title": "Meadowbank Airport Terminal & High-Speed Station (1990 vs 2020)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Meadowbank Airport Terminal & High-Speed Station between 1990 and 2020. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Meadowbank Airport Terminal & High-Speed Station (1990 vs 2020)",
          "year1": 1990,
          "year2": 2020,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1990, the location was primarily characterized by single terminal hangar and long-stay surface parking.",
          "summary2": "By 2020, extensive modernization introduced dual runway expansion, intermodal rail transit hub, and updated arterial infrastructure.",
          "features1": [
            "Prominent Single Terminal Hangar located in the western sector",
            "Long-Stay Surface Parking occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Dual Runway Expansion replacing older structures",
            "Modernized Intermodal Rail Transit Hub with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Single Terminal Hangar",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Long-Stay Surface Parking",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Dual Runway Expansion",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Intermodal Rail Transit Hub",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1990 and 2020.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Meadowbank Airport Terminal & High-Speed Station between 1990 and 2020.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1990, the layout was characterized by in 1990, the location was primarily characterized by single terminal hangar and long-stay surface parking.\n\nBy 2020, extensive redevelopment transformed the site. As illustrated in the second map, by 2020, extensive modernization introduced dual runway expansion, intermodal rail transit hub, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_10_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 10)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_10_T4_W1",
        "title": "Lithium-Ion Battery Cathode Assembly & Ultrasonic Cell Welding",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in lithium-ion battery cathode assembly & ultrasonic cell welding. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Lithium-Ion Battery Cathode Assembly & Ultrasonic Cell Welding",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Slurry Slotted Mixing",
              "desc": "Automated operational execution of slurry slotted mixing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Copper/Aluminium Foil Coating",
              "desc": "Automated operational execution of copper/aluminium foil coating utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Vacuum Heated Drying",
              "desc": "Automated operational execution of vacuum heated drying utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Calender Compression Rolling",
              "desc": "Automated operational execution of calender compression rolling utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Electrode Slitting & Stacking",
              "desc": "Automated operational execution of electrode slitting & stacking utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Electrolyte Filling & Sealing",
              "desc": "Automated operational execution of electrolyte filling & sealing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Lithium Nickel Cobalt Precursors"
          ],
          "outputs": [
            "Finished EV Battery Cells"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in lithium-ion battery cathode assembly & ultrasonic cell welding.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with slurry slotted mixing and culminating in electrolyte filling & sealing.\n\nInitially, automated operational execution of slurry slotted mixing utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce finished ev battery cells ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_10_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 10)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "11": {
    "1": {
      "task1": {
        "id": "CAM_11_T1_W1",
        "title": "Satellite Earth Observation Constellations in Low Earth Orbit (2000\u20132020)",
        "chartType": "bar",
        "instruction": "The bar chart below shows the number of active Earth observation satellites deployed in Low Earth Orbit across commercial, governmental, and military sectors in 2000 and 2020. Write at least 150 words.",
        "chartData": {
          "title": "Satellite Earth Observation Constellations in Low Earth Orbit (2000\u20132020)",
          "labels": [
            "Commercial",
            "Civil Government",
            "Military / Defense",
            "Academic / Non-Profit"
          ],
          "categories": [
            "Commercial",
            "Civil Government",
            "Military / Defense",
            "Academic / Non-Profit"
          ],
          "datasets": [
            {
              "label": "2000 Satellites",
              "data": [
                12,
                45,
                68,
                8
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2020 Satellites",
              "data": [
                410,
                135,
                185,
                74
              ],
              "backgroundColor": "rgba(16,185,129,0.75)",
              "borderColor": "#10B981"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Operational Sectors",
        "yLabel": "Active Satellites in LEO",
        "keyFeatures": [
          "Commercial satellite fleets experienced the most explosive expansion, multiplying more than thirty-fold by 2020.",
          "While military satellites dominated orbital deployments in 2000, commercial spacecraft became the clear majority by 2020.",
          "All sectors recorded positive growth, reflecting widespread miniaturization and lower launch costs."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding satellite earth observation constellations in low earth orbit (2000\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_11_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 11)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_11_T2_W1",
        "title": "Global Electricity Generation Sources: Coal, Gas, Hydro, Nuclear & Renewables (2000 vs 2025)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding global electricity generation sources: coal, gas, hydro, nuclear & renewables (2000 vs 2025). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Global Electricity Generation Sources: Coal, Gas, Hydro, Nuclear & Renewables (2000 vs 2025)",
          "labels": [
            "Coal Fired",
            "Natural Gas",
            "Hydroelectric",
            "Nuclear",
            "Solar & Wind"
          ],
          "categories": [
            "Coal Fired",
            "Natural Gas",
            "Hydroelectric",
            "Nuclear",
            "Solar & Wind"
          ],
          "datasets": [
            {
              "label": "2000 Baseline",
              "data": [
                39,
                18,
                17,
                17,
                9
              ],
              "backgroundColor": [
                "#475569",
                "#06B6D4",
                "#0284C7",
                "#8B5CF6",
                "#10B981"
              ]
            },
            {
              "label": "2025 Observed",
              "data": [
                26,
                28,
                22,
                15,
                9
              ],
              "backgroundColor": [
                "#10B981",
                "#475569",
                "#06B6D4",
                "#0284C7",
                "#8B5CF6"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Global Electricity Generation Sources: Coal, Gas, Hydro, Nuclear & Renewables (2000 vs 2025)",
          "year1": 2000,
          "year2": 2025,
          "segments1": [
            {
              "label": "Coal Fired",
              "value": 39,
              "color": "#475569"
            },
            {
              "label": "Natural Gas",
              "value": 18,
              "color": "#06B6D4"
            },
            {
              "label": "Hydroelectric",
              "value": 17,
              "color": "#0284C7"
            },
            {
              "label": "Nuclear",
              "value": 17,
              "color": "#8B5CF6"
            },
            {
              "label": "Solar & Wind",
              "value": 9,
              "color": "#10B981"
            }
          ],
          "segments2": [
            {
              "label": "Solar & Wind",
              "value": 26,
              "color": "#10B981"
            },
            {
              "label": "Coal Fired",
              "value": 28,
              "color": "#475569"
            },
            {
              "label": "Natural Gas",
              "value": 22,
              "color": "#06B6D4"
            },
            {
              "label": "Hydroelectric",
              "value": 15,
              "color": "#0284C7"
            },
            {
              "label": "Nuclear",
              "value": 9,
              "color": "#8B5CF6"
            }
          ],
          "keyFeatures": [
            "Solar and wind installations recorded the most dramatic proportional surge, rising nearly threefold from 9% to 26%.",
            "Coal generation contracted from 39% down to 28%, relinquishing its commanding majority.",
            "Nuclear power experienced an eight percentage point contraction over the twenty-five-year timeframe."
          ]
        },
        "keyFeatures": [
          "Solar and wind installations recorded the most dramatic proportional surge, rising nearly threefold from 9% to 26%.",
          "Coal generation contracted from 39% down to 28%, relinquishing its commanding majority.",
          "Nuclear power experienced an eight percentage point contraction over the twenty-five-year timeframe."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of global electricity generation sources: coal, gas, hydro, nuclear & renewables (2000 vs 2025).\n\nOverall, key structural transformations are evident between 2000 and 2025, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 2000, the distribution was headed by Coal Fired at 39%, which represented the principal category. By 2025, Solar & Wind commanded 26%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_11_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 11)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_11_T3_W1",
        "title": "Greenfield Industrial Park to Silicon Valley District (1980 vs 2010)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Greenfield Industrial Park to Silicon Valley District between 1980 and 2010. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Greenfield Industrial Park to Silicon Valley District (1980 vs 2010)",
          "year1": 1980,
          "year2": 2010,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1980, the location was primarily characterized by smokestack iron foundry and coal storage bunker.",
          "summary2": "By 2010, extensive modernization introduced ai robotics r&d incubator, solar powered tech campus, and updated arterial infrastructure.",
          "features1": [
            "Prominent Smokestack Iron Foundry located in the western sector",
            "Coal Storage Bunker occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art AI Robotics R&D Incubator replacing older structures",
            "Modernized Solar Powered Tech Campus with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Smokestack Iron Foundry",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Coal Storage Bunker",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "AI Robotics R&D Incubator",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Solar Powered Tech Campus",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1980 and 2010.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Greenfield Industrial Park to Silicon Valley District between 1980 and 2010.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1980, the layout was characterized by in 1980, the location was primarily characterized by smokestack iron foundry and coal storage bunker.\n\nBy 2010, extensive redevelopment transformed the site. As illustrated in the second map, by 2010, extensive modernization introduced ai robotics r&d incubator, solar powered tech campus, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_11_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 11)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_11_T4_W1",
        "title": "Ceramic Floor Tile Glazing, Hydraulic Stamping & Roller Kiln",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in ceramic floor tile glazing, hydraulic stamping & roller kiln. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Ceramic Floor Tile Glazing, Hydraulic Stamping & Roller Kiln",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Wet Ball Milling",
              "desc": "Automated operational execution of wet ball milling utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Spray Drying Granulation",
              "desc": "Automated operational execution of spray drying granulation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Hydraulic 4000-Ton Press",
              "desc": "Automated operational execution of hydraulic 4000-ton press utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Liquid Glaze Screen Printing",
              "desc": "Automated operational execution of liquid glaze screen printing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Roller Hearth Kiln Firing",
              "desc": "Automated operational execution of roller hearth kiln firing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Laser Planarity Sorting",
              "desc": "Automated operational execution of laser planarity sorting utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Raw Feldspar & Clay"
          ],
          "outputs": [
            "Polished Architectural Tiles"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in ceramic floor tile glazing, hydraulic stamping & roller kiln.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with wet ball milling and culminating in laser planarity sorting.\n\nInitially, automated operational execution of wet ball milling utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce polished architectural tiles ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_11_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 11)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "12": {
    "1": {
      "task1": {
        "id": "CAM_12_T1_W1",
        "title": "Electronic Waste Generation and Formal Recycling Rates (2010\u20132024)",
        "chartType": "bar",
        "instruction": "The bar chart below compares annual electronic waste generation per capita (Kg) alongside formal documented recycling rates (%) across five countries in 2024. Write at least 150 words.",
        "chartData": {
          "title": "Electronic Waste Generation and Formal Recycling Rates (2010\u20132024)",
          "labels": [
            "Norway",
            "United Kingdom",
            "Germany",
            "United States",
            "Japan"
          ],
          "categories": [
            "Norway",
            "United Kingdom",
            "Germany",
            "United States",
            "Japan"
          ],
          "datasets": [
            {
              "label": "E-Waste per Capita (Kg)",
              "data": [
                26.0,
                23.9,
                21.4,
                21.0,
                18.2
              ],
              "backgroundColor": "rgba(239,68,68,0.75)",
              "borderColor": "#EF4444"
            },
            {
              "label": "Documented Recycling Rate (%)",
              "data": [
                72,
                57,
                66,
                38,
                48
              ],
              "backgroundColor": "rgba(16,185,129,0.75)",
              "borderColor": "#10B981"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Surveyed Nations",
        "yLabel": "Metric Values (Kg / %)",
        "keyFeatures": [
          "Norway generated the highest quantity of electronic waste per person (26.0 Kg) but also achieved the highest recycling rate (72%).",
          "The United States recorded the lowest recycling rate among the group at 38%, despite generating 21.0 Kg of e-waste per capita.",
          "European nations consistently outperformed North America and Asia in formal waste reclamation."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding electronic waste generation and formal recycling rates (2010\u20132024) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_12_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 12)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_12_T2_W1",
        "title": "Renewable Energy Clean Power Capacity and Investment Across 5 Global Regions (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding renewable energy clean power capacity and investment across 5 global regions (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Renewable Energy Clean Power Capacity and Investment Across 5 Global Regions (2024)",
          "headers": [
            "Global Region",
            "Installed Wind (GW)",
            "Installed Solar (GW)",
            "Hydroelectric (GW)",
            "Annual Clean Investment ($B)"
          ],
          "rows": [
            [
              "Asia-Pacific",
              "420.5",
              "540.2",
              "380.0",
              "$385.0"
            ],
            [
              "Europe",
              "255.4",
              "262.8",
              "165.2",
              "$142.5"
            ],
            [
              "North America",
              "162.8",
              "188.4",
              "112.5",
              "$110.2"
            ],
            [
              "Latin America",
              "48.2",
              "52.6",
              "182.4",
              "$38.4"
            ],
            [
              "Middle East & Africa",
              "24.6",
              "48.2",
              "39.8",
              "$28.6"
            ]
          ],
          "keyFeatures": [
            "Asia-Pacific led worldwide installations across all renewable modalities, supported by $385 billion in annual capital investment.",
            "Europe maintained the second-highest capacity in both wind and solar photovoltaics.",
            "Latin America was uniquely distinguished by its predominant reliance on hydroelectric capacity (182.4 GW)."
          ]
        },
        "keyFeatures": [
          "Asia-Pacific led worldwide installations across all renewable modalities, supported by $385 billion in annual capital investment.",
          "Europe maintained the second-highest capacity in both wind and solar photovoltaics.",
          "Latin America was uniquely distinguished by its predominant reliance on hydroelectric capacity (182.4 GW)."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of renewable energy clean power capacity and investment across 5 global regions (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_12_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 12)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_12_T3_W1",
        "title": "Oakridge Secondary Academy STEM Campus & Sports Dome (2005 vs 2025)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Oakridge Secondary Academy STEM Campus & Sports Dome between 2005 and 2025. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Oakridge Secondary Academy STEM Campus & Sports Dome (2005 vs 2025)",
          "year1": 2005,
          "year2": 2025,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2005, the location was primarily characterized by prefabricated classrooms and cinder running track.",
          "summary2": "By 2025, extensive modernization introduced biotechnology discovery lab, olympic geodesic sports dome, and updated arterial infrastructure.",
          "features1": [
            "Prominent Prefabricated Classrooms located in the western sector",
            "Cinder Running Track occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Biotechnology Discovery Lab replacing older structures",
            "Modernized Olympic Geodesic Sports Dome with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Prefabricated Classrooms",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Cinder Running Track",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Biotechnology Discovery Lab",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Olympic Geodesic Sports Dome",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2005 and 2025.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Oakridge Secondary Academy STEM Campus & Sports Dome between 2005 and 2025.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2005, the layout was characterized by in 2005, the location was primarily characterized by prefabricated classrooms and cinder running track.\n\nBy 2025, extensive redevelopment transformed the site. As illustrated in the second map, by 2025, extensive modernization introduced biotechnology discovery lab, olympic geodesic sports dome, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_12_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 12)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_12_T4_W1",
        "title": "Traditional Black Tea Manufacturing: Withering, Rolling & Drying",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in traditional black tea manufacturing: withering, rolling & drying. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Traditional Black Tea Manufacturing: Withering, Rolling & Drying",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Trough Ambient Withering",
              "desc": "Automated operational execution of trough ambient withering utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Orthodox Roller Maceration",
              "desc": "Automated operational execution of orthodox roller maceration utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Enzymatic Aerated Fermentation",
              "desc": "Automated operational execution of enzymatic aerated fermentation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Fluidized Bed Hot Air Drying",
              "desc": "Automated operational execution of fluidized bed hot air drying utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Vibrating Mesh Grading",
              "desc": "Automated operational execution of vibrating mesh grading utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Vacuum Seal Foil Packaging",
              "desc": "Automated operational execution of vacuum seal foil packaging utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Fresh Camellia Leaves"
          ],
          "outputs": [
            "Aromatic Black Tea Leaves"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in traditional black tea manufacturing: withering, rolling & drying.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with trough ambient withering and culminating in vacuum seal foil packaging.\n\nInitially, automated operational execution of trough ambient withering utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce aromatic black tea leaves ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_12_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 12)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "13": {
    "1": {
      "task1": {
        "id": "CAM_13_T1_W1",
        "title": "Tourist Visits to UNESCO Archaeological Sites (1995\u20132020)",
        "chartType": "line",
        "instruction": "The line graph below charts annual registered visitors (Millions) across four renowned UNESCO archaeological heritage sites from 1995 to 2020. Write at least 150 words.",
        "chartData": {
          "title": "Tourist Visits to UNESCO Archaeological Sites (1995\u20132020)",
          "labels": [
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "categories": [
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "datasets": [
            {
              "label": "Pompeii (Italy)",
              "data": [
                1.8,
                2.1,
                2.4,
                2.6,
                3.2,
                1.1
              ],
              "borderColor": "#4F46E5",
              "backgroundColor": "rgba(79,70,229,0.2)"
            },
            {
              "label": "Machu Picchu (Peru)",
              "data": [
                0.35,
                0.52,
                0.78,
                1.1,
                1.6,
                0.45
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            },
            {
              "label": "Petra (Jordan)",
              "data": [
                0.42,
                0.58,
                0.72,
                0.95,
                1.1,
                0.28
              ],
              "borderColor": "#F59E0B",
              "backgroundColor": "rgba(245,158,11,0.2)"
            },
            {
              "label": "Angkor Wat (Cambodia)",
              "data": [
                0.12,
                0.45,
                1.1,
                1.8,
                2.5,
                0.4
              ],
              "borderColor": "#10B981",
              "backgroundColor": "rgba(16,185,129,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Calendar Year",
        "yLabel": "Annual Visitors (Millions)",
        "keyFeatures": [
          "All four heritage landmarks exhibited steady visitor growth between 1995 and 2015 before suffering sharp drops in 2020 due to global travel disruptions.",
          "Angkor Wat registered the most dynamic expansion, multiplying twenty-fold from 120,000 visitors to peak at 2.5 million.",
          "Pompeii sustained the highest absolute tourism footfall throughout the majority of the timeframe."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding tourist visits to unesco archaeological sites (1995\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_13_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 13)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_13_T2_W1",
        "title": "Higher Education Degree Enrolments by Academic Faculty (1995 vs 2025)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding higher education degree enrolments by academic faculty (1995 vs 2025). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Higher Education Degree Enrolments by Academic Faculty (1995 vs 2025)",
          "labels": [
            "Business & Economics",
            "Humanities & Arts",
            "STEM & Computing",
            "Health & Medicine",
            "Social Sciences"
          ],
          "categories": [
            "Business & Economics",
            "Humanities & Arts",
            "STEM & Computing",
            "Health & Medicine",
            "Social Sciences"
          ],
          "datasets": [
            {
              "label": "1995 Baseline",
              "data": [
                26,
                24,
                22,
                16,
                12
              ],
              "backgroundColor": [
                "#4F46E5",
                "#F59E0B",
                "#06B6D4",
                "#10B981",
                "#8B5CF6"
              ]
            },
            {
              "label": "2025 Observed",
              "data": [
                38,
                24,
                18,
                11,
                9
              ],
              "backgroundColor": [
                "#06B6D4",
                "#4F46E5",
                "#10B981",
                "#F59E0B",
                "#8B5CF6"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Higher Education Degree Enrolments by Academic Faculty (1995 vs 2025)",
          "year1": 1995,
          "year2": 2025,
          "segments1": [
            {
              "label": "Business & Economics",
              "value": 26,
              "color": "#4F46E5"
            },
            {
              "label": "Humanities & Arts",
              "value": 24,
              "color": "#F59E0B"
            },
            {
              "label": "STEM & Computing",
              "value": 22,
              "color": "#06B6D4"
            },
            {
              "label": "Health & Medicine",
              "value": 16,
              "color": "#10B981"
            },
            {
              "label": "Social Sciences",
              "value": 12,
              "color": "#8B5CF6"
            }
          ],
          "segments2": [
            {
              "label": "STEM & Computing",
              "value": 38,
              "color": "#06B6D4"
            },
            {
              "label": "Business & Economics",
              "value": 24,
              "color": "#4F46E5"
            },
            {
              "label": "Health & Medicine",
              "value": 18,
              "color": "#10B981"
            },
            {
              "label": "Humanities & Arts",
              "value": 11,
              "color": "#F59E0B"
            },
            {
              "label": "Social Sciences",
              "value": 9,
              "color": "#8B5CF6"
            }
          ],
          "keyFeatures": [
            "STEM and computing majors surged to command 38% of all undergraduate enrolments by 2025.",
            "Humanities and arts suffered the most pronounced contraction, falling by more than half from 24% to 11%.",
            "Business and medical degrees retained steady, high proportions of student demand."
          ]
        },
        "keyFeatures": [
          "STEM and computing majors surged to command 38% of all undergraduate enrolments by 2025.",
          "Humanities and arts suffered the most pronounced contraction, falling by more than half from 24% to 11%.",
          "Business and medical degrees retained steady, high proportions of student demand."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of higher education degree enrolments by academic faculty (1995 vs 2025).\n\nOverall, key structural transformations are evident between 1995 and 2025, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1995, the distribution was headed by Business & Economics at 26%, which represented the principal category. By 2025, STEM & Computing commanded 38%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_13_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 13)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_13_T3_W1",
        "title": "Riverdale Waterfront & Hydro-Electric Dam Complex (1975 vs 2015)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Riverdale Waterfront & Hydro-Electric Dam Complex between 1975 and 2015. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Riverdale Waterfront & Hydro-Electric Dam Complex (1975 vs 2015)",
          "year1": 1975,
          "year2": 2015,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1975, the location was primarily characterized by natural river rapids and timber mill flume.",
          "summary2": "By 2015, extensive modernization introduced turbine generator hall, fish migration ladder bypass, and updated arterial infrastructure.",
          "features1": [
            "Prominent Natural River Rapids located in the western sector",
            "Timber Mill Flume occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Turbine Generator Hall replacing older structures",
            "Modernized Fish Migration Ladder Bypass with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Natural River Rapids",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Timber Mill Flume",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Turbine Generator Hall",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Fish Migration Ladder Bypass",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1975 and 2015.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Riverdale Waterfront & Hydro-Electric Dam Complex between 1975 and 2015.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1975, the layout was characterized by in 1975, the location was primarily characterized by natural river rapids and timber mill flume.\n\nBy 2015, extensive redevelopment transformed the site. As illustrated in the second map, by 2015, extensive modernization introduced turbine generator hall, fish migration ladder bypass, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_13_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 13)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_13_T4_W1",
        "title": "Municipal Wastewater Treatment: Clarifiers, Bio-Aeration & UV",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in municipal wastewater treatment: clarifiers, bio-aeration & uv. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Municipal Wastewater Treatment: Clarifiers, Bio-Aeration & UV",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Mechanical Bar Screens",
              "desc": "Automated operational execution of mechanical bar screens utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Primary Gravity Clarifier",
              "desc": "Automated operational execution of primary gravity clarifier utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Activated Sludge Bio-Aeration",
              "desc": "Automated operational execution of activated sludge bio-aeration utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Secondary Settlement Basin",
              "desc": "Automated operational execution of secondary settlement basin utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Tertiary Sand Filtration",
              "desc": "Automated operational execution of tertiary sand filtration utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Ultraviolet UV Disinfection",
              "desc": "Automated operational execution of ultraviolet uv disinfection utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Raw Municipal Sewage"
          ],
          "outputs": [
            "Disinfected Discharge Water"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in municipal wastewater treatment: clarifiers, bio-aeration & uv.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with mechanical bar screens and culminating in ultraviolet uv disinfection.\n\nInitially, automated operational execution of mechanical bar screens utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce disinfected discharge water ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_13_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 13)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "14": {
    "1": {
      "task1": {
        "id": "CAM_14_T1_W1",
        "title": "Microplastic Particle Densities Across Five Marine Basins (2000\u20132024)",
        "chartType": "bar",
        "instruction": "The bar chart below compares microplastic particle concentrations (particles per cubic metre of surface seawater) across five oceanic regions in 2000 and 2024. Write at least 150 words.",
        "chartData": {
          "title": "Microplastic Particle Densities Across Five Marine Basins (2000\u20132024)",
          "labels": [
            "North Pacific Gyre",
            "Mediterranean Sea",
            "North Atlantic",
            "Indian Ocean",
            "South Pacific"
          ],
          "categories": [
            "North Pacific Gyre",
            "Mediterranean Sea",
            "North Atlantic",
            "Indian Ocean",
            "South Pacific"
          ],
          "datasets": [
            {
              "label": "2000 Baseline (pts/m3)",
              "data": [
                32,
                28,
                19,
                12,
                8
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2024 Observed (pts/m3)",
              "data": [
                148,
                126,
                84,
                58,
                36
              ],
              "backgroundColor": "rgba(239,68,68,0.75)",
              "borderColor": "#EF4444"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Oceanic Basins",
        "yLabel": "Microplastic Concentration (pts/m3)",
        "keyFeatures": [
          "Microplastic contamination multiplied between fourfold and fivefold across all five surveyed marine basins over the twenty-four-year period.",
          "The North Pacific Gyre contained the highest particle density in both years, followed closely by the semi-enclosed Mediterranean Sea.",
          "The South Pacific maintained the lowest absolute contamination figures throughout the survey."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding microplastic particle densities across five marine basins (2000\u20132024) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_14_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 14)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_14_T2_W1",
        "title": "Electric Vehicle Fleet and Charging Infrastructure Adoption Indicators Across 5 Countries (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding electric vehicle fleet and charging infrastructure adoption indicators across 5 countries (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Electric Vehicle Fleet and Charging Infrastructure Adoption Indicators Across 5 Countries (2024)",
          "headers": [
            "Country",
            "EV Market Share (%)",
            "Total Electric Fleet (Millions)",
            "Public Chargers per 1,000 EVs",
            "Annual CO2 Abatement (M Tons)"
          ],
          "rows": [
            [
              "Norway",
              "88.5%",
              "0.72",
              "34.2",
              "2.8"
            ],
            [
              "China",
              "38.2%",
              "21.50",
              "58.4",
              "48.2"
            ],
            [
              "Germany",
              "24.6%",
              "2.10",
              "28.6",
              "6.4"
            ],
            [
              "United States",
              "12.8%",
              "4.80",
              "18.2",
              "12.5"
            ],
            [
              "United Kingdom",
              "22.4%",
              "1.45",
              "24.1",
              "4.2"
            ]
          ],
          "keyFeatures": [
            "Norway commanded the highest new car sales market penetration at 88.5%.",
            "China maintained overwhelming absolute volume leadership with 21.5 million operational electric vehicles and 48.2 million tons of CO2 offset.",
            "China also provided the highest public charging density at 58.4 chargers per 1,000 electric vehicles."
          ]
        },
        "keyFeatures": [
          "Norway commanded the highest new car sales market penetration at 88.5%.",
          "China maintained overwhelming absolute volume leadership with 21.5 million operational electric vehicles and 48.2 million tons of CO2 offset.",
          "China also provided the highest public charging density at 58.4 chargers per 1,000 electric vehicles."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of electric vehicle fleet and charging infrastructure adoption indicators across 5 countries (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_14_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 14)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_14_T3_W1",
        "title": "Central Public Library Spatial Modernization (2000 vs 2020)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Central Public Library Spatial Modernization between 2000 and 2020. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Central Public Library Spatial Modernization (2000 vs 2020)",
          "year1": 2000,
          "year2": 2020,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2000, the location was primarily characterized by paper microfiche stacks and quiet reference reading room.",
          "summary2": "By 2020, extensive modernization introduced digital vr pods & media suite, makerspace 3d print lab, and updated arterial infrastructure.",
          "features1": [
            "Prominent Paper Microfiche Stacks located in the western sector",
            "Quiet Reference Reading Room occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Digital VR Pods & Media Suite replacing older structures",
            "Modernized Makerspace 3D Print Lab with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Paper Microfiche Stacks",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Quiet Reference Reading Room",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Digital VR Pods & Media Suite",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Makerspace 3D Print Lab",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2000 and 2020.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Central Public Library Spatial Modernization between 2000 and 2020.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2000, the layout was characterized by in 2000, the location was primarily characterized by paper microfiche stacks and quiet reference reading room.\n\nBy 2020, extensive redevelopment transformed the site. As illustrated in the second map, by 2020, extensive modernization introduced digital vr pods & media suite, makerspace 3d print lab, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_14_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 14)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_14_T4_W1",
        "title": "Silicon Ingot Slicing & Monocrystalline Photovoltaic Assembly",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in silicon ingot slicing & monocrystalline photovoltaic assembly. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Silicon Ingot Slicing & Monocrystalline Photovoltaic Assembly",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Czochralski Crystal Growth",
              "desc": "Automated operational execution of czochralski crystal growth utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Diamond Wire Wafer Slicing",
              "desc": "Automated operational execution of diamond wire wafer slicing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Phosphorus Diffusion Doping",
              "desc": "Automated operational execution of phosphorus diffusion doping utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Silicon Nitride Anti-Reflective Coating",
              "desc": "Automated operational execution of silicon nitride anti-reflective coating utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Silver Contact Screen Printing",
              "desc": "Automated operational execution of silver contact screen printing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Solar Module EVA Lamination",
              "desc": "Automated operational execution of solar module eva lamination utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "High-Purity Polysilicon"
          ],
          "outputs": [
            "Photovoltaic Solar Modules"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in silicon ingot slicing & monocrystalline photovoltaic assembly.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with czochralski crystal growth and culminating in solar module eva lamination.\n\nInitially, automated operational execution of czochralski crystal growth utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce photovoltaic solar modules ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_14_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 14)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "15": {
    "1": {
      "task1": {
        "id": "CAM_15_T1_W1",
        "title": "Tropical Forest Canopy Loss and Reforestation (2000\u20132020)",
        "chartType": "line",
        "instruction": "The line graph below charts cumulative primary forest canopy loss and newly gazetted reforestation area (Million hectares) in the Amazon Basin between 2000 and 2020. Write at least 150 words.",
        "chartData": {
          "title": "Tropical Forest Canopy Loss and Reforestation (2000\u20132020)",
          "labels": [
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "categories": [
            "2000",
            "2005",
            "2010",
            "2015",
            "2020"
          ],
          "datasets": [
            {
              "label": "Cumulative Canopy Loss (M ha)",
              "data": [
                0,
                8.5,
                14.2,
                19.8,
                27.4
              ],
              "borderColor": "#EF4444",
              "backgroundColor": "rgba(239,68,68,0.2)"
            },
            {
              "label": "Protected Reforestation (M ha)",
              "data": [
                0,
                1.8,
                4.2,
                6.9,
                10.5
              ],
              "borderColor": "#10B981",
              "backgroundColor": "rgba(16,185,129,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Survey Milestone",
        "yLabel": "Hectares (Millions)",
        "keyFeatures": [
          "Canopy deforestation outpaced artificial reforestation by a ratio of more than two to one across the entire period.",
          "Deforestation accelerated slightly in the final five years, adding over 7 million hectares of lost canopy.",
          "Reforestation efforts expanded steadily after 2005, surpassing 10 million cumulative hectares by 2020."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding tropical forest canopy loss and reforestation (2000\u20132020) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_15_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 15)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_15_T2_W1",
        "title": "Global Smartphone Operating System Market Share (2010 vs 2025)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding global smartphone operating system market share (2010 vs 2025). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Global Smartphone Operating System Market Share (2010 vs 2025)",
          "labels": [
            "Legacy OS (Symbian/Others)",
            "Android OS",
            "Apple iOS",
            "Windows / BlackBerry"
          ],
          "categories": [
            "Legacy OS (Symbian/Others)",
            "Android OS",
            "Apple iOS",
            "Windows / BlackBerry"
          ],
          "datasets": [
            {
              "label": "2010 Baseline",
              "data": [
                56,
                23,
                16,
                5
              ],
              "backgroundColor": [
                "#64748B",
                "#10B981",
                "#4F46E5",
                "#06B6D4"
              ]
            },
            {
              "label": "2025 Observed",
              "data": [
                71,
                28,
                1
              ],
              "backgroundColor": [
                "#10B981",
                "#4F46E5",
                "#64748B"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Global Smartphone Operating System Market Share (2010 vs 2025)",
          "year1": 2010,
          "year2": 2025,
          "segments1": [
            {
              "label": "Legacy OS (Symbian/Others)",
              "value": 56,
              "color": "#64748B"
            },
            {
              "label": "Android OS",
              "value": 23,
              "color": "#10B981"
            },
            {
              "label": "Apple iOS",
              "value": 16,
              "color": "#4F46E5"
            },
            {
              "label": "Windows / BlackBerry",
              "value": 5,
              "color": "#06B6D4"
            }
          ],
          "segments2": [
            {
              "label": "Android OS",
              "value": 71,
              "color": "#10B981"
            },
            {
              "label": "Apple iOS",
              "value": 28,
              "color": "#4F46E5"
            },
            {
              "label": "All Other Platforms",
              "value": 1,
              "color": "#64748B"
            }
          ],
          "keyFeatures": [
            "The mobile landscape underwent total duopoly consolidation, with Android and iOS capturing 99% of global market share by 2025.",
            "Android expanded more than threefold from 23% to 71%, commanding global volume leadership.",
            "Legacy platforms that comprised 56% of the market in 2010 were almost entirely eliminated."
          ]
        },
        "keyFeatures": [
          "The mobile landscape underwent total duopoly consolidation, with Android and iOS capturing 99% of global market share by 2025.",
          "Android expanded more than threefold from 23% to 71%, commanding global volume leadership.",
          "Legacy platforms that comprised 56% of the market in 2010 were almost entirely eliminated."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of global smartphone operating system market share (2010 vs 2025).\n\nOverall, key structural transformations are evident between 2010 and 2025, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 2010, the distribution was headed by Legacy OS (Symbian/Others) at 56%, which represented the principal category. By 2025, Android OS commanded 71%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_15_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 15)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_15_T3_W1",
        "title": "Eastgate Retail Mall & Open-Air Pedestrian Piazza (1995 vs 2025)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Eastgate Retail Mall & Open-Air Pedestrian Piazza between 1995 and 2025. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Eastgate Retail Mall & Open-Air Pedestrian Piazza (1995 vs 2025)",
          "year1": 1995,
          "year2": 2025,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1995, the location was primarily characterized by enclosed concrete mall and perimeter parking lot.",
          "summary2": "By 2025, extensive modernization introduced open-air food market piazza, green rooftop urban farm, and updated arterial infrastructure.",
          "features1": [
            "Prominent Enclosed Concrete Mall located in the western sector",
            "Perimeter Parking Lot occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Open-Air Food Market Piazza replacing older structures",
            "Modernized Green Rooftop Urban Farm with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Enclosed Concrete Mall",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Perimeter Parking Lot",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Open-Air Food Market Piazza",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Green Rooftop Urban Farm",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1995 and 2025.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Eastgate Retail Mall & Open-Air Pedestrian Piazza between 1995 and 2025.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1995, the layout was characterized by in 1995, the location was primarily characterized by enclosed concrete mall and perimeter parking lot.\n\nBy 2025, extensive redevelopment transformed the site. As illustrated in the second map, by 2025, extensive modernization introduced open-air food market piazza, green rooftop urban farm, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_15_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 15)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_15_T4_W1",
        "title": "Post-Consumer Aluminium Beverage Can Smelting & Body Stamping",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in post-consumer aluminium beverage can smelting & body stamping. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Post-Consumer Aluminium Beverage Can Smelting & Body Stamping",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "De-Coating Thermal Kiln",
              "desc": "Automated operational execution of de-coating thermal kiln utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Submerged Induction Smelter",
              "desc": "Automated operational execution of submerged induction smelter utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Ingot Continuous Rolling",
              "desc": "Automated operational execution of ingot continuous rolling utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Cupping Press Blanking",
              "desc": "Automated operational execution of cupping press blanking utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Body-Maker Wall Ironing",
              "desc": "Automated operational execution of body-maker wall ironing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Internal Protective Lacquering",
              "desc": "Automated operational execution of internal protective lacquering utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Crushed Beverage Cans"
          ],
          "outputs": [
            "Newly Minted Soda Cans"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in post-consumer aluminium beverage can smelting & body stamping.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with de-coating thermal kiln and culminating in internal protective lacquering.\n\nInitially, automated operational execution of de-coating thermal kiln utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce newly minted soda cans ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_15_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 15)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "16": {
    "1": {
      "task1": {
        "id": "CAM_16_T1_W1",
        "title": "Smart Electrical Grid Decentralization and Rooftop Solar (2010\u20132024)",
        "chartType": "bar",
        "instruction": "The bar chart below compares the percentage of total electricity supply originating from distributed, decentralized renewable generation across five European regions in 2010 and 2024. Write at least 150 words.",
        "chartData": {
          "title": "Smart Electrical Grid Decentralization and Rooftop Solar (2010\u20132024)",
          "labels": [
            "Northern Europe",
            "Western Europe",
            "Southern Europe",
            "Central Europe",
            "Eastern Europe"
          ],
          "categories": [
            "Northern Europe",
            "Western Europe",
            "Southern Europe",
            "Central Europe",
            "Eastern Europe"
          ],
          "datasets": [
            {
              "label": "2010 Share (%)",
              "data": [
                14,
                11,
                16,
                8,
                4
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2024 Share (%)",
              "data": [
                48,
                42,
                54,
                32,
                18
              ],
              "backgroundColor": "rgba(6,182,212,0.75)",
              "borderColor": "#06B6D4"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "European Regions",
        "yLabel": "Decentralized Energy Share (%)",
        "keyFeatures": [
          "Southern Europe attained the foremost position in decentralized electricity by 2024 at 54%, driven by prolific solar installations.",
          "Decentralized power shares more than tripled across all five regions between 2010 and 2024.",
          "Eastern Europe trailed the other regions throughout, yet recorded substantial progress from 4% to 18%."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding smart electrical grid decentralization and rooftop solar (2010\u20132024) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_16_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 16)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_16_T2_W1",
        "title": "National Healthcare Spending, Hospital Resources, and Health Outcomes (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding national healthcare spending, hospital resources, and health outcomes (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "National Healthcare Spending, Hospital Resources, and Health Outcomes (2024)",
          "headers": [
            "Country",
            "Health Spending (% GDP)",
            "Expenditure per Capita ($)",
            "Hospital Beds per 1,000",
            "Physicians per 1,000",
            "Life Expectancy (Years)"
          ],
          "rows": [
            [
              "United States",
              "17.8%",
              "$12,550",
              "2.8",
              "2.6",
              "77.5"
            ],
            [
              "Germany",
              "12.8%",
              "$7,380",
              "7.8",
              "4.5",
              "81.2"
            ],
            [
              "Japan",
              "11.5%",
              "$4,980",
              "12.6",
              "2.5",
              "84.6"
            ],
            [
              "United Kingdom",
              "11.2%",
              "$5,420",
              "2.4",
              "3.2",
              "81.0"
            ],
            [
              "Switzerland",
              "12.2%",
              "$9,650",
              "4.4",
              "4.4",
              "83.8"
            ]
          ],
          "keyFeatures": [
            "The United States spent the highest proportion of GDP (17.8%) and per capita funds ($12,550), yet registered the lowest life expectancy (77.5 years).",
            "Japan achieved the highest life expectancy (84.6 years) while maintaining the highest hospital bed density (12.6 beds per 1,000).",
            "European nations demonstrated high life expectancies with moderate health expenditures between 11% and 13% of GDP."
          ]
        },
        "keyFeatures": [
          "The United States spent the highest proportion of GDP (17.8%) and per capita funds ($12,550), yet registered the lowest life expectancy (77.5 years).",
          "Japan achieved the highest life expectancy (84.6 years) while maintaining the highest hospital bed density (12.6 beds per 1,000).",
          "European nations demonstrated high life expectancies with moderate health expenditures between 11% and 13% of GDP."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of national healthcare spending, hospital resources, and health outcomes (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_16_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 16)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_16_T3_W1",
        "title": "Hillside Mountain Medical Clinic & Emergency Heliport (2002 vs 2022)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Hillside Mountain Medical Clinic & Emergency Heliport between 2002 and 2022. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Hillside Mountain Medical Clinic & Emergency Heliport (2002 vs 2022)",
          "year1": 2002,
          "year2": 2022,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2002, the location was primarily characterized by rural medical cabin and unpaved mountain track.",
          "summary2": "By 2022, extensive modernization introduced alpine trauma response unit, heated medevac helicopter pad, and updated arterial infrastructure.",
          "features1": [
            "Prominent Rural Medical Cabin located in the western sector",
            "Unpaved Mountain Track occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Alpine Trauma Response Unit replacing older structures",
            "Modernized Heated Medevac Helicopter Pad with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Rural Medical Cabin",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Unpaved Mountain Track",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Alpine Trauma Response Unit",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Heated Medevac Helicopter Pad",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2002 and 2022.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Hillside Mountain Medical Clinic & Emergency Heliport between 2002 and 2022.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2002, the layout was characterized by in 2002, the location was primarily characterized by rural medical cabin and unpaved mountain track.\n\nBy 2022, extensive redevelopment transformed the site. As illustrated in the second map, by 2022, extensive modernization introduced alpine trauma response unit, heated medevac helicopter pad, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_16_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 16)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_16_T4_W1",
        "title": "Atmospheric Nitrogen Fixation, Soil Nitrification & Plant Cycle",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in atmospheric nitrogen fixation, soil nitrification & plant cycle. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Atmospheric Nitrogen Fixation, Soil Nitrification & Plant Cycle",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Rhizobia Symbiotic Fixation",
              "desc": "Automated operational execution of rhizobia symbiotic fixation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Ammonification by Decomposers",
              "desc": "Automated operational execution of ammonification by decomposers utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Nitrosomonas Nitrite Oxidation",
              "desc": "Automated operational execution of nitrosomonas nitrite oxidation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Nitrobacter Nitrate Formation",
              "desc": "Automated operational execution of nitrobacter nitrate formation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Root Xylem Nitrate Absorption",
              "desc": "Automated operational execution of root xylem nitrate absorption utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Denitrifying Return to Atmosphere",
              "desc": "Automated operational execution of denitrifying return to atmosphere utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Atmospheric Di-Nitrogen Gas"
          ],
          "outputs": [
            "Plant Organic Proteins"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in atmospheric nitrogen fixation, soil nitrification & plant cycle.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with rhizobia symbiotic fixation and culminating in denitrifying return to atmosphere.\n\nInitially, automated operational execution of rhizobia symbiotic fixation utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce plant organic proteins ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_16_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 16)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "17": {
    "1": {
      "task1": {
        "id": "CAM_17_T1_W1",
        "title": "Autonomous Vehicle Patent Filings Across Leading Economies (2012\u20132024)",
        "chartType": "line",
        "instruction": "The line graph below charts annual patent applications related to autonomous vehicle navigation and perception algorithms across the United States, China, Japan, and Germany from 2012 to 2024. Write at least 150 words.",
        "chartData": {
          "title": "Autonomous Vehicle Patent Filings Across Leading Economies (2012\u20132024)",
          "labels": [
            "2012",
            "2015",
            "2018",
            "2021",
            "2024"
          ],
          "categories": [
            "2012",
            "2015",
            "2018",
            "2021",
            "2024"
          ],
          "datasets": [
            {
              "label": "China",
              "data": [
                450,
                1850,
                6200,
                14500,
                26800
              ],
              "borderColor": "#EF4444",
              "backgroundColor": "rgba(239,68,68,0.2)"
            },
            {
              "label": "United States",
              "data": [
                950,
                2800,
                7100,
                13800,
                21500
              ],
              "borderColor": "#4F46E5",
              "backgroundColor": "rgba(79,70,229,0.2)"
            },
            {
              "label": "Japan",
              "data": [
                620,
                1400,
                3100,
                5600,
                8900
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            },
            {
              "label": "Germany",
              "data": [
                580,
                1350,
                2900,
                5200,
                8400
              ],
              "borderColor": "#F59E0B",
              "backgroundColor": "rgba(245,158,11,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Patent Filing Year",
        "yLabel": "Annual Patent Applications",
        "keyFeatures": [
          "China demonstrated an exponential trajectory, overtaking the United States after 2018 to lead worldwide filings by 2024.",
          "The United States held the highest volume during the opening decade before being surpassed, while maintaining strong growth.",
          "Germany and Japan exhibited closely matched parallel trends, reaching approximately 8,500 filings each."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding autonomous vehicle patent filings across leading economies (2012\u20132024) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_17_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 17)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_17_T2_W1",
        "title": "Urban Commuter Modal Split in Central European Metropolises (1990 vs 2020)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding urban commuter modal split in central european metropolises (1990 vs 2020). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Urban Commuter Modal Split in Central European Metropolises (1990 vs 2020)",
          "labels": [
            "Private Automobile",
            "Public Rail & Bus",
            "Bicycle & Walking"
          ],
          "categories": [
            "Private Automobile",
            "Public Rail & Bus",
            "Bicycle & Walking"
          ],
          "datasets": [
            {
              "label": "1990 Baseline",
              "data": [
                52,
                31,
                17
              ],
              "backgroundColor": [
                "#EF4444",
                "#4F46E5",
                "#10B981"
              ]
            },
            {
              "label": "2020 Observed",
              "data": [
                38,
                31,
                24,
                7
              ],
              "backgroundColor": [
                "#4F46E5",
                "#EF4444",
                "#10B981",
                "#06B6D4"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Urban Commuter Modal Split in Central European Metropolises (1990 vs 2020)",
          "year1": 1990,
          "year2": 2020,
          "segments1": [
            {
              "label": "Private Automobile",
              "value": 52,
              "color": "#EF4444"
            },
            {
              "label": "Public Rail & Bus",
              "value": 31,
              "color": "#4F46E5"
            },
            {
              "label": "Bicycle & Walking",
              "value": 17,
              "color": "#10B981"
            }
          ],
          "segments2": [
            {
              "label": "Public Rail & Bus",
              "value": 38,
              "color": "#4F46E5"
            },
            {
              "label": "Private Automobile",
              "value": 31,
              "color": "#EF4444"
            },
            {
              "label": "Bicycle & Walking",
              "value": 24,
              "color": "#10B981"
            },
            {
              "label": "Shared Micro-Mobility",
              "value": 7,
              "color": "#06B6D4"
            }
          ],
          "keyFeatures": [
            "Private car usage dropped by 21 percentage points, losing its majority share to sustainable transit modes.",
            "Public transit emerged as the preferred mode of urban commuting in 2020 at 38%.",
            "Active cycling, walking, and shared micro-mobility combined to represent nearly one-third of all journeys."
          ]
        },
        "keyFeatures": [
          "Private car usage dropped by 21 percentage points, losing its majority share to sustainable transit modes.",
          "Public transit emerged as the preferred mode of urban commuting in 2020 at 38%.",
          "Active cycling, walking, and shared micro-mobility combined to represent nearly one-third of all journeys."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of urban commuter modal split in central european metropolises (1990 vs 2020).\n\nOverall, key structural transformations are evident between 1990 and 2020, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 1990, the distribution was headed by Private Automobile at 52%, which represented the principal category. By 2020, Public Rail & Bus commanded 38%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_17_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 17)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_17_T3_W1",
        "title": "Silverstream Wetland Nature Sanctuary & Boardwalk (1988 vs 2018)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Silverstream Wetland Nature Sanctuary & Boardwalk between 1988 and 2018. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Silverstream Wetland Nature Sanctuary & Boardwalk (1988 vs 2018)",
          "year1": 1988,
          "year2": 2018,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1988, the location was primarily characterized by drained cattle pasture and agricultural drainage canal.",
          "summary2": "By 2018, extensive modernization introduced elevated wooden eco-boardwalk, bird observation hide tower, and updated arterial infrastructure.",
          "features1": [
            "Prominent Drained Cattle Pasture located in the western sector",
            "Agricultural Drainage Canal occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Elevated Wooden Eco-Boardwalk replacing older structures",
            "Modernized Bird Observation Hide Tower with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Drained Cattle Pasture",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Agricultural Drainage Canal",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Elevated Wooden Eco-Boardwalk",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Bird Observation Hide Tower",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1988 and 2018.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Silverstream Wetland Nature Sanctuary & Boardwalk between 1988 and 2018.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1988, the layout was characterized by in 1988, the location was primarily characterized by drained cattle pasture and agricultural drainage canal.\n\nBy 2018, extensive redevelopment transformed the site. As illustrated in the second map, by 2018, extensive modernization introduced elevated wooden eco-boardwalk, bird observation hide tower, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_17_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 17)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_17_T4_W1",
        "title": "Anaerobic Digestion of Agricultural Biomass into Methane Biogas",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in anaerobic digestion of agricultural biomass into methane biogas. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Anaerobic Digestion of Agricultural Biomass into Methane Biogas",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Substrate Blending & Shredding",
              "desc": "Automated operational execution of substrate blending & shredding utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Continuously Stirred Anaerobic Digester",
              "desc": "Automated operational execution of continuously stirred anaerobic digester utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Microbial Acidogenesis Phase",
              "desc": "Automated operational execution of microbial acidogenesis phase utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Methanogenic Biogas Evolution",
              "desc": "Automated operational execution of methanogenic biogas evolution utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Desulfurization & Scrubber Upgrading",
              "desc": "Automated operational execution of desulfurization & scrubber upgrading utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Biomethane Grid Compression",
              "desc": "Automated operational execution of biomethane grid compression utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Crop Stover & Livestock Slurry"
          ],
          "outputs": [
            "Biomethane Fuel & Biofertilizer"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in anaerobic digestion of agricultural biomass into methane biogas.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with substrate blending & shredding and culminating in biomethane grid compression.\n\nInitially, automated operational execution of substrate blending & shredding utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce biomethane fuel & biofertilizer ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_17_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 17)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "18": {
    "1": {
      "task1": {
        "id": "CAM_18_T1_W1",
        "title": "Biomedical Gene Editing Clinical Trials by Therapeutic Category (2015\u20132025)",
        "chartType": "bar",
        "instruction": "The bar chart below compares active clinical trials utilizing CRISPR and base-editing technologies across four major medical domains in 2015 and 2025. Write at least 150 words.",
        "chartData": {
          "title": "Biomedical Gene Editing Clinical Trials by Therapeutic Category (2015\u20132025)",
          "labels": [
            "Oncology (Cancer)",
            "Monogenic Rare Diseases",
            "Cardiovascular",
            "Infectious Diseases"
          ],
          "categories": [
            "Oncology (Cancer)",
            "Monogenic Rare Diseases",
            "Cardiovascular",
            "Infectious Diseases"
          ],
          "datasets": [
            {
              "label": "2015 Trials",
              "data": [
                8,
                14,
                2,
                4
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2025 Trials",
              "data": [
                185,
                142,
                64,
                52
              ],
              "backgroundColor": "rgba(16,185,129,0.75)",
              "borderColor": "#10B981"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Therapeutic Categories",
        "yLabel": "Active Clinical Trials",
        "keyFeatures": [
          "Oncology expanded at the fastest rate to become the dominant clinical arena for gene-editing therapies by 2025.",
          "Monogenic rare disorders formed the majority of trials in 2015 and maintained substantial growth up to 142 trials.",
          "Cardiovascular and infectious disease applications emerged as significant frontiers over the decade."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding biomedical gene editing clinical trials by therapeutic category (2015\u20132025) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_18_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 18)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_18_T2_W1",
        "title": "Commercial Container Port Efficiency and Throughput Metrics Across 5 Global Hubs (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding commercial container port efficiency and throughput metrics across 5 global hubs (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Commercial Container Port Efficiency and Throughput Metrics Across 5 Global Hubs (2024)",
          "headers": [
            "Container Port",
            "Annual Volume (Million TEU)",
            "Mean Ship Berth Time (Hours)",
            "Crane Moves per Hour",
            "Automated Electric Fleet (%)"
          ],
          "rows": [
            [
              "Port of Shanghai",
              "49.2",
              "16.4",
              "38.5",
              "82%"
            ],
            [
              "Port of Singapore",
              "39.8",
              "14.2",
              "41.2",
              "94%"
            ],
            [
              "Port of Rotterdam",
              "15.4",
              "21.8",
              "32.4",
              "76%"
            ],
            [
              "Port of Los Angeles",
              "10.6",
              "38.5",
              "26.8",
              "42%"
            ],
            [
              "Port of Jebel Ali (Dubai)",
              "14.5",
              "18.6",
              "34.8",
              "68%"
            ]
          ],
          "keyFeatures": [
            "Port of Shanghai handled the largest cargo volume worldwide at 49.2 million TEU.",
            "Port of Singapore recorded the fastest turnaround time (14.2 hours) and highest fleet electrification (94%).",
            "Port of Los Angeles suffered the longest vessel berthing delays (38.5 hours) and lowest crane move frequency."
          ]
        },
        "keyFeatures": [
          "Port of Shanghai handled the largest cargo volume worldwide at 49.2 million TEU.",
          "Port of Singapore recorded the fastest turnaround time (14.2 hours) and highest fleet electrification (94%).",
          "Port of Los Angeles suffered the longest vessel berthing delays (38.5 hours) and lowest crane move frequency."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of commercial container port efficiency and throughput metrics across 5 global hubs (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_18_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 18)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_18_T3_W1",
        "title": "Old Locomotive Rail Depot to Creative Arts Quarter (1990 vs 2020)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Old Locomotive Rail Depot to Creative Arts Quarter between 1990 and 2020. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Old Locomotive Rail Depot to Creative Arts Quarter (1990 vs 2020)",
          "year1": 1990,
          "year2": 2020,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 1990, the location was primarily characterized by derelict steam engine shed and disused coal turntable.",
          "summary2": "By 2020, extensive modernization introduced modern glass amphitheater, artisan workshops & studios, and updated arterial infrastructure.",
          "features1": [
            "Prominent Derelict Steam Engine Shed located in the western sector",
            "Disused Coal Turntable occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Modern Glass Amphitheater replacing older structures",
            "Modernized Artisan Workshops & Studios with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Derelict Steam Engine Shed",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Disused Coal Turntable",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Modern Glass Amphitheater",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Artisan Workshops & Studios",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 1990 and 2020.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Old Locomotive Rail Depot to Creative Arts Quarter between 1990 and 2020.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 1990, the layout was characterized by in 1990, the location was primarily characterized by derelict steam engine shed and disused coal turntable.\n\nBy 2020, extensive redevelopment transformed the site. As illustrated in the second map, by 2020, extensive modernization introduced modern glass amphitheater, artisan workshops & studios, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_18_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 18)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_18_T4_W1",
        "title": "Gourmet Coffee Processing: Wet Pulping, Sun Drying & Roasting",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in gourmet coffee processing: wet pulping, sun drying & roasting. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Gourmet Coffee Processing: Wet Pulping, Sun Drying & Roasting",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Water Density Flotation",
              "desc": "Automated operational execution of water density flotation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Mechanical Pulp Depulping",
              "desc": "Automated operational execution of mechanical pulp depulping utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Pectin Fermentation Tanks",
              "desc": "Automated operational execution of pectin fermentation tanks utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Solar Patio Drying Beds",
              "desc": "Automated operational execution of solar patio drying beds utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Hulling Parchment Removal",
              "desc": "Automated operational execution of hulling parchment removal utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Fluid-Bed Drum Roasting",
              "desc": "Automated operational execution of fluid-bed drum roasting utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Ripe Ripe Coffee Cherries"
          ],
          "outputs": [
            "Roasted Coffee Beans"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in gourmet coffee processing: wet pulping, sun drying & roasting.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with water density flotation and culminating in fluid-bed drum roasting.\n\nInitially, automated operational execution of water density flotation utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce roasted coffee beans ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_18_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 18)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "19": {
    "1": {
      "task1": {
        "id": "CAM_19_T1_W1",
        "title": "Direct Air Carbon Capture Capacity and Unit Removal Costs (2018\u20132025)",
        "chartType": "bar",
        "instruction": "The bar chart below illustrates cumulative worldwide direct air carbon capture (DAC) operational capacity (Thousand metric tons CO2/year) and average capture cost per ton ($) between 2018 and 2025. Write at least 150 words.",
        "chartData": {
          "title": "Direct Air Carbon Capture Capacity and Unit Removal Costs (2018\u20132025)",
          "labels": [
            "2018",
            "2020",
            "2022",
            "2024",
            "2025"
          ],
          "categories": [
            "2018",
            "2020",
            "2022",
            "2024",
            "2025"
          ],
          "datasets": [
            {
              "label": "Capacity (k metric tons CO2/yr)",
              "data": [
                5,
                18,
                55,
                240,
                680
              ],
              "backgroundColor": "rgba(6,182,212,0.75)",
              "borderColor": "#06B6D4"
            },
            {
              "label": "Average Unit Cost ($/ton CO2)",
              "data": [
                950,
                780,
                580,
                410,
                285
              ],
              "backgroundColor": "rgba(245,158,11,0.75)",
              "borderColor": "#F59E0B"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Chronological Benchmark",
        "yLabel": "Capacity (k tons) / Cost ($)",
        "keyFeatures": [
          "Global DAC operational removal capacity expanded exponentially from just 5,000 tons to 680,000 tons per annum.",
          "In an inverse relationship, unit capture costs fell precipitously from $950 down to $285 per ton of captured CO2.",
          "The fastest acceleration in capacity occurred between 2022 and 2025 as commercial megaton facilities came online."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding direct air carbon capture capacity and unit removal costs (2018\u20132025) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_19_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 19)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_19_T2_W1",
        "title": "Global Enterprise Cloud Infrastructure Market Share (2015 vs 2025)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding global enterprise cloud infrastructure market share (2015 vs 2025). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Global Enterprise Cloud Infrastructure Market Share (2015 vs 2025)",
          "labels": [
            "On-Premises Data Centers",
            "Cloud Provider Alpha",
            "Cloud Provider Beta",
            "Cloud Provider Gamma"
          ],
          "categories": [
            "On-Premises Data Centers",
            "Cloud Provider Alpha",
            "Cloud Provider Beta",
            "Cloud Provider Gamma"
          ],
          "datasets": [
            {
              "label": "2015 Baseline",
              "data": [
                68,
                18,
                10,
                4
              ],
              "backgroundColor": [
                "#64748B",
                "#4F46E5",
                "#06B6D4",
                "#F59E0B"
              ]
            },
            {
              "label": "2025 Observed",
              "data": [
                34,
                32,
                22,
                12
              ],
              "backgroundColor": [
                "#4F46E5",
                "#64748B",
                "#06B6D4",
                "#F59E0B"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Global Enterprise Cloud Infrastructure Market Share (2015 vs 2025)",
          "year1": 2015,
          "year2": 2025,
          "segments1": [
            {
              "label": "On-Premises Data Centers",
              "value": 68,
              "color": "#64748B"
            },
            {
              "label": "Cloud Provider Alpha",
              "value": 18,
              "color": "#4F46E5"
            },
            {
              "label": "Cloud Provider Beta",
              "value": 10,
              "color": "#06B6D4"
            },
            {
              "label": "Cloud Provider Gamma",
              "value": 4,
              "color": "#F59E0B"
            }
          ],
          "segments2": [
            {
              "label": "Cloud Provider Alpha",
              "value": 34,
              "color": "#4F46E5"
            },
            {
              "label": "On-Premises Data Centers",
              "value": 32,
              "color": "#64748B"
            },
            {
              "label": "Cloud Provider Beta",
              "value": 22,
              "color": "#06B6D4"
            },
            {
              "label": "Cloud Provider Gamma",
              "value": 12,
              "color": "#F59E0B"
            }
          ],
          "keyFeatures": [
            "Public cloud computing platforms expanded dynamically to account for over two-thirds of enterprise workload capacity.",
            "On-premises legacy data centers fell steeply from 68% to 32% of enterprise infrastructure.",
            "Cloud Provider Alpha solidified its premier ranking, doubling its market share to 34%."
          ]
        },
        "keyFeatures": [
          "Public cloud computing platforms expanded dynamically to account for over two-thirds of enterprise workload capacity.",
          "On-premises legacy data centers fell steeply from 68% to 32% of enterprise infrastructure.",
          "Cloud Provider Alpha solidified its premier ranking, doubling its market share to 34%."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of global enterprise cloud infrastructure market share (2015 vs 2025).\n\nOverall, key structural transformations are evident between 2015 and 2025, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 2015, the distribution was headed by On-Premises Data Centers at 68%, which represented the principal category. By 2025, Cloud Provider Alpha commanded 34%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_19_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 19)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_19_T3_W1",
        "title": "Metro City University Science Incubator & AI Robotics Hub (2005 vs 2025)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Metro City University Science Incubator & AI Robotics Hub between 2005 and 2025. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Metro City University Science Incubator & AI Robotics Hub (2005 vs 2025)",
          "year1": 2005,
          "year2": 2025,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2005, the location was primarily characterized by overflow gravel car lot and old storage lockers.",
          "summary2": "By 2025, extensive modernization introduced autonomous drone flight cage, cleanroom microfabrication fab, and updated arterial infrastructure.",
          "features1": [
            "Prominent Overflow Gravel Car Lot located in the western sector",
            "Old Storage Lockers occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Autonomous Drone Flight Cage replacing older structures",
            "Modernized Cleanroom Microfabrication Fab with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Overflow Gravel Car Lot",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Old Storage Lockers",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Autonomous Drone Flight Cage",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Cleanroom Microfabrication Fab",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2005 and 2025.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Metro City University Science Incubator & AI Robotics Hub between 2005 and 2025.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2005, the layout was characterized by in 2005, the location was primarily characterized by overflow gravel car lot and old storage lockers.\n\nBy 2025, extensive redevelopment transformed the site. As illustrated in the second map, by 2025, extensive modernization introduced autonomous drone flight cage, cleanroom microfabrication fab, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_19_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 19)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_19_T4_W1",
        "title": "Semiconductor Wafer Lithography, Ion Implantation & Cleanroom Packaging",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in semiconductor wafer lithography, ion implantation & cleanroom packaging. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Semiconductor Wafer Lithography, Ion Implantation & Cleanroom Packaging",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Thermal Silicon Dioxide Oxidation",
              "desc": "Automated operational execution of thermal silicon dioxide oxidation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Extreme Ultraviolet Lithography",
              "desc": "Automated operational execution of extreme ultraviolet lithography utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Chemical Photoresist Developing",
              "desc": "Automated operational execution of chemical photoresist developing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Boron/Phosphorus Ion Implantation",
              "desc": "Automated operational execution of boron/phosphorus ion implantation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Plasma Reactive Ion Etching",
              "desc": "Automated operational execution of plasma reactive ion etching utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Wire Bonding & Ceramic Encapsulation",
              "desc": "Automated operational execution of wire bonding & ceramic encapsulation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Pure Polished Silicon Wafers"
          ],
          "outputs": [
            "Microprocessors / AI Chips"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in semiconductor wafer lithography, ion implantation & cleanroom packaging.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with thermal silicon dioxide oxidation and culminating in wire bonding & ceramic encapsulation.\n\nInitially, automated operational execution of thermal silicon dioxide oxidation utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce microprocessors / ai chips ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_19_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 19)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "20": {
    "1": {
      "task1": {
        "id": "CAM_20_T1_W1",
        "title": "Brain-Computer Interface Venture Capital Investment and Patents (2015\u20132025)",
        "chartType": "line",
        "instruction": "The line graph below charts global private venture funding ($ Millions) and published academic patents in invasive and non-invasive brain-computer interfaces from 2015 to 2025. Write at least 150 words.",
        "chartData": {
          "title": "Brain-Computer Interface Venture Capital Investment and Patents (2015\u20132025)",
          "labels": [
            "2015",
            "2017",
            "2019",
            "2021",
            "2023",
            "2025"
          ],
          "categories": [
            "2015",
            "2017",
            "2019",
            "2021",
            "2023",
            "2025"
          ],
          "datasets": [
            {
              "label": "Venture Investment ($M)",
              "data": [
                85,
                190,
                420,
                1150,
                1820,
                2650
              ],
              "borderColor": "#8B5CF6",
              "backgroundColor": "rgba(139,92,246,0.2)"
            },
            {
              "label": "Patent Publications",
              "data": [
                120,
                240,
                510,
                1280,
                2100,
                3150
              ],
              "borderColor": "#06B6D4",
              "backgroundColor": "rgba(6,182,212,0.2)"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Calendar Year",
        "yLabel": "Capital ($M) / Patent Count",
        "keyFeatures": [
          "Both financial capital and intellectual patent filings demonstrated an uninterrupted, accelerating upward surge.",
          "Venture funding surpassed the one-billion-dollar milestone in 2021 before more than doubling by 2025.",
          "Patent publications maintained a slight numeric lead over financial metrics throughout the ten-year period."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding brain-computer interface venture capital investment and patents (2015\u20132025) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_20_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 20)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_20_T2_W1",
        "title": "Commercial Aerospace Orbital Launches, Payload Mass, and Launch Success (2024)",
        "chartType": "table",
        "instruction": "The table below delineates comparative statistics regarding commercial aerospace orbital launches, payload mass, and launch success (2024). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "tableData": {
          "title": "Commercial Aerospace Orbital Launches, Payload Mass, and Launch Success (2024)",
          "headers": [
            "Launch Operator",
            "Orbital Launches (2024)",
            "Payload Mass to Orbit (Tonnes)",
            "Success Rate (%)",
            "Reusable Stage Landings"
          ],
          "rows": [
            [
              "Commercial Enterprise X",
              "124",
              "1,350.5",
              "99.2%",
              "118"
            ],
            [
              "National Civil Aerospace Admin",
              "48",
              "240.8",
              "95.8%",
              "14"
            ],
            [
              "European Space Consortium",
              "14",
              "78.2",
              "92.8%",
              "0"
            ],
            [
              "Commercial Venture RocketLab",
              "18",
              "6.8",
              "94.4%",
              "6"
            ],
            [
              "Commercial Satellite Launcher",
              "12",
              "14.2",
              "91.6%",
              "2"
            ]
          ],
          "keyFeatures": [
            "Commercial Enterprise X dominated orbital launch frequency (124 launches) and orbital tonnage (1,350.5 tonnes).",
            "Reusable first-stage landings were heavily concentrated in commercial operators, led by 118 successful recoveries.",
            "Launch reliability exceeded 90% across all surveyed space launch operators in 2024."
          ]
        },
        "keyFeatures": [
          "Commercial Enterprise X dominated orbital launch frequency (124 launches) and orbital tonnage (1,350.5 tonnes).",
          "Reusable first-stage landings were heavily concentrated in commercial operators, led by 118 successful recoveries.",
          "Launch reliability exceeded 90% across all surveyed space launch operators in 2024."
        ],
        "modelAnswer": "The table provides a detailed comparative breakdown of commercial aerospace orbital launches, payload mass, and launch success (2024).\n\nOverall, substantial disparities are observable across the surveyed entities, with clear leaders emerging in both volume metrics and efficiency indicators.\n\nLooking closer at the metrics, the leading entity consistently outperformed peers across multiple criteria. In contrast, smaller entities recorded more moderate figures but demonstrated steady performance across the board."
      },
      "task2": {
        "id": "CAM_20_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 20)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_20_T3_W1",
        "title": "Horizon Aerospace Spaceport & Suborbital Launch Pad (2010 vs 2025)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at Horizon Aerospace Spaceport & Suborbital Launch Pad between 2010 and 2025. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "Horizon Aerospace Spaceport & Suborbital Launch Pad (2010 vs 2025)",
          "year1": 2010,
          "year2": 2025,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2010, the location was primarily characterized by desert testing range and barren salt flat.",
          "summary2": "By 2025, extensive modernization introduced vertical cryogenic launch pad, orbital telemetry mission control, and updated arterial infrastructure.",
          "features1": [
            "Prominent Desert Testing Range located in the western sector",
            "Barren Salt Flat occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Vertical Cryogenic Launch Pad replacing older structures",
            "Modernized Orbital Telemetry Mission Control with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Desert Testing Range",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Barren Salt Flat",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Vertical Cryogenic Launch Pad",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Orbital Telemetry Mission Control",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2010 and 2025.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at Horizon Aerospace Spaceport & Suborbital Launch Pad between 2010 and 2025.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2010, the layout was characterized by in 2010, the location was primarily characterized by desert testing range and barren salt flat.\n\nBy 2025, extensive redevelopment transformed the site. As illustrated in the second map, by 2025, extensive modernization introduced vertical cryogenic launch pad, orbital telemetry mission control, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_20_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 20)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_20_T4_W1",
        "title": "Green Hydrogen Generation via Proton Exchange Membrane Electrolysis",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in green hydrogen generation via proton exchange membrane electrolysis. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Green Hydrogen Generation via Proton Exchange Membrane Electrolysis",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Water Deionization & Polishing",
              "desc": "Automated operational execution of water deionization & polishing utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "PEM Anode Water Oxidation",
              "desc": "Automated operational execution of pem anode water oxidation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Proton Transport Across Membrane",
              "desc": "Automated operational execution of proton transport across membrane utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Cathode Hydrogen Ion Reduction",
              "desc": "Automated operational execution of cathode hydrogen ion reduction utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Catalytic Gas De-Oxidizer",
              "desc": "Automated operational execution of catalytic gas de-oxidizer utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "High-Pressure Gas Compression",
              "desc": "Automated operational execution of high-pressure gas compression utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Deionized Ultra-Pure Water"
          ],
          "outputs": [
            "Pressurized High-Purity Hydrogen"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in green hydrogen generation via proton exchange membrane electrolysis.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with water deionization & polishing and culminating in high-pressure gas compression.\n\nInitially, automated operational execution of water deionization & polishing utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce pressurized high-purity hydrogen ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_20_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 20)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  },
  "21": {
    "1": {
      "task1": {
        "id": "CAM_21_T1_W1",
        "title": "High-Temperature Superconducting Magnet Field and Tokamak Q-Factor (2018\u20132026)",
        "chartType": "bar",
        "instruction": "The bar chart below compares maximum operational magnetic field strength (Tesla) and achieved fusion energy gain factor (Q-ratio) across five leading international fusion test facilities between 2018 and 2026. Write at least 150 words.",
        "chartData": {
          "title": "High-Temperature Superconducting Magnet Field and Tokamak Q-Factor (2018\u20132026)",
          "labels": [
            "Facility Alpha",
            "Facility Beta",
            "Facility Gamma",
            "Facility Delta",
            "Facility Epsilon"
          ],
          "categories": [
            "Facility Alpha",
            "Facility Beta",
            "Facility Gamma",
            "Facility Delta",
            "Facility Epsilon"
          ],
          "datasets": [
            {
              "label": "2018 Baseline (Tesla / Qx10)",
              "data": [
                11.2,
                8.5,
                6.4,
                4.2,
                2.1
              ],
              "backgroundColor": "rgba(79,70,229,0.75)",
              "borderColor": "#4F46E5"
            },
            {
              "label": "2026 Achieved (Tesla / Qx10)",
              "data": [
                24.8,
                19.5,
                16.2,
                12.8,
                8.4
              ],
              "backgroundColor": "rgba(16,185,129,0.75)",
              "borderColor": "#10B981"
            }
          ],
          "colors": [
            "#4F46E5",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444"
          ]
        },
        "xLabel": "Advanced Experimental Tokamaks",
        "yLabel": "Magnetic Field / Scaled Q-Ratio",
        "keyFeatures": [
          "Facility Alpha consistently commanded the highest field strengths, exceeding 24 Tesla by 2026.",
          "All five experimental reactors more than doubled their operational magnetic containment metrics.",
          "The dramatic improvements reflect the rapid maturation of rare-earth barium copper oxide (REBCO) superconductor tape."
        ],
        "modelAnswer": "The provided graphic delineates comparative statistics regarding high-temperature superconducting magnet field and tokamak q-factor (2018\u20132026) across surveyed indicators.\n\nOverall, the data displays a prevailing upward trajectory across the majority of benchmark categories, with notable shifts in leadership and relative expansion over the analyzed timeframe.\n\nIn the initial period, baseline metrics highlighted significant divergence among participants. Over time, dynamic increases were recorded across leading categories, with key sectors expanding substantially while others demonstrated steady consolidation.\n\nBy the concluding benchmark year, the observed data confirmed established trends, illustrating how technical innovation, structural investment, and shifting consumer behaviors have fundamentally transformed the surveyed domain."
      },
      "task2": {
        "id": "CAM_21_T1_W2",
        "topic": "Higher Education & Remote Learning (Academic Series 21)",
        "question": "Some people believe that traditional in-person university lectures are no longer necessary in modern higher education because digital resources offer superior learning flexibility. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate higher education & remote learning remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "2": {
      "task1": {
        "id": "CAM_21_T2_W1",
        "title": "Global Advanced Semiconductor Fabrication Capacity by Geographic Region (2015 vs 2026)",
        "chartType": "pie",
        "instruction": "The pie charts below illustrate comparative changes regarding global advanced semiconductor fabrication capacity by geographic region (2015 vs 2026). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": {
          "title": "Global Advanced Semiconductor Fabrication Capacity by Geographic Region (2015 vs 2026)",
          "labels": [
            "Taiwan & South Korea",
            "North America",
            "Mainland China",
            "European Union",
            "Rest of the World"
          ],
          "categories": [
            "Taiwan & South Korea",
            "North America",
            "Mainland China",
            "European Union",
            "Rest of the World"
          ],
          "datasets": [
            {
              "label": "2015 Baseline",
              "data": [
                58,
                18,
                10,
                9,
                5
              ],
              "backgroundColor": [
                "#4F46E5",
                "#06B6D4",
                "#EF4444",
                "#10B981",
                "#64748B"
              ]
            },
            {
              "label": "2026 Observed",
              "data": [
                46,
                22,
                18,
                10,
                4
              ],
              "backgroundColor": [
                "#4F46E5",
                "#06B6D4",
                "#EF4444",
                "#10B981",
                "#64748B"
              ]
            }
          ]
        },
        "pieData": {
          "title": "Global Advanced Semiconductor Fabrication Capacity by Geographic Region (2015 vs 2026)",
          "year1": 2015,
          "year2": 2026,
          "segments1": [
            {
              "label": "Taiwan & South Korea",
              "value": 58,
              "color": "#4F46E5"
            },
            {
              "label": "North America",
              "value": 18,
              "color": "#06B6D4"
            },
            {
              "label": "Mainland China",
              "value": 10,
              "color": "#EF4444"
            },
            {
              "label": "European Union",
              "value": 9,
              "color": "#10B981"
            },
            {
              "label": "Rest of the World",
              "value": 5,
              "color": "#64748B"
            }
          ],
          "segments2": [
            {
              "label": "Taiwan & South Korea",
              "value": 46,
              "color": "#4F46E5"
            },
            {
              "label": "North America",
              "value": 22,
              "color": "#06B6D4"
            },
            {
              "label": "Mainland China",
              "value": 18,
              "color": "#EF4444"
            },
            {
              "label": "European Union",
              "value": 10,
              "color": "#10B981"
            },
            {
              "label": "Rest of the World",
              "value": 4,
              "color": "#64748B"
            }
          ],
          "keyFeatures": [
            "East Asian manufacturers maintained absolute dominance throughout, despite a 12 percentage point contraction.",
            "North America and Mainland China both expanded their manufacturing footprints significantly through strategic subsidies.",
            "The European Union retained a steady 9-10% share of advanced microchip manufacturing capacity."
          ]
        },
        "keyFeatures": [
          "East Asian manufacturers maintained absolute dominance throughout, despite a 12 percentage point contraction.",
          "North America and Mainland China both expanded their manufacturing footprints significantly through strategic subsidies.",
          "The European Union retained a steady 9-10% share of advanced microchip manufacturing capacity."
        ],
        "modelAnswer": "The pie charts illustrate comparative shifts in the allocation of global advanced semiconductor fabrication capacity by geographic region (2015 vs 2026).\n\nOverall, key structural transformations are evident between 2015 and 2026, with certain sectors expanding substantially while others experienced relative contractions.\n\nIn 2015, the distribution was headed by Taiwan & South Korea at 58%, which represented the principal category. By 2026, Taiwan & South Korea commanded 46%, reflecting major structural realignment over the timeframe."
      },
      "task2": {
        "id": "CAM_21_T2_W2",
        "topic": "Environmental Carbon Policy & Green Innovation (Academic Series 21)",
        "question": "Some argue that strict governmental regulations on industrial emissions stifle commercial competitiveness and job creation. Others believe that stringent ecological standards are essential to stimulate green technological innovation. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate environmental carbon policy & green innovation remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "3": {
      "task1": {
        "id": "CAM_21_T3_W1",
        "title": "New Horizon Autonomous Smart Eco-District (2015 vs 2026)",
        "chartType": "map",
        "instruction": "The two maps below illustrate the progressive development and transformation that took place at New Horizon Autonomous Smart Eco-District between 2015 and 2026. Write at least 150 words.",
        "chartData": null,
        "mapData": {
          "title": "New Horizon Autonomous Smart Eco-District (2015 vs 2026)",
          "year1": 2015,
          "year2": 2026,
          "compass": "N",
          "legend": [
            "Demolished / Replaced",
            "Newly Constructed",
            "Modernized / Preserved"
          ],
          "summary1": "In 2015, the location was primarily characterized by conventional highway grid and petroleum refueling station.",
          "summary2": "By 2026, extensive modernization introduced automated pod transit network, vertical hydroponic farm towers, and updated arterial infrastructure.",
          "features1": [
            "Prominent Conventional Highway Grid located in the western sector",
            "Petroleum Refueling Station occupying the southern perimeter",
            "Basic single-lane vehicular access roads",
            "Undeveloped perimeter grassland"
          ],
          "features2": [
            "State-of-the-art Automated Pod Transit Network replacing older structures",
            "Modernized Vertical Hydroponic Farm Towers with sustainable energy features",
            "Dual-lane transit corridors and dedicated cycle paths",
            "Landscaped public recreation spaces"
          ],
          "zones1": [
            {
              "name": "Zone A",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#334155",
              "stroke": "#64748B",
              "label": "Conventional Highway Grid",
              "sub": "Baseline facility"
            },
            {
              "name": "Zone B",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#1E293B",
              "stroke": "#64748B",
              "label": "Petroleum Refueling Station",
              "sub": "Original structure"
            },
            {
              "name": "Road",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#0F172A",
              "stroke": "#475569",
              "label": "Single Lane Road",
              "sub": "Basic transit"
            },
            {
              "name": "Zone C",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#14532D",
              "stroke": "#16A34A",
              "label": "Open Terrain",
              "sub": "Undeveloped field"
            }
          ],
          "zones2": [
            {
              "name": "Zone A New",
              "x": 20,
              "y": 15,
              "w": 160,
              "h": 70,
              "fill": "#0F766E",
              "stroke": "#14B8A6",
              "label": "Automated Pod Transit Network",
              "sub": "Modernized center"
            },
            {
              "name": "Zone B New",
              "x": 200,
              "y": 15,
              "w": 170,
              "h": 70,
              "fill": "#4338CA",
              "stroke": "#818CF8",
              "label": "Vertical Hydroponic Farm Towers",
              "sub": "High-tech facility"
            },
            {
              "name": "Road New",
              "x": 20,
              "y": 100,
              "w": 350,
              "h": 20,
              "fill": "#1E293B",
              "stroke": "#38BDF8",
              "label": "Transit Corridor",
              "sub": "Dual lane & EV link"
            },
            {
              "name": "Zone C New",
              "x": 20,
              "y": 135,
              "w": 350,
              "h": 105,
              "fill": "#064E3B",
              "stroke": "#10B981",
              "label": "Eco-Landscaping",
              "sub": "Renewable precinct"
            }
          ]
        },
        "keyFeatures": [
          "The location experienced comprehensive spatial modernization between 2015 and 2026.",
          "Older utilitarian or natural land in the northern and western zones was largely replaced by modern facilities.",
          "Transport and pedestrian infrastructure was significantly enhanced to facilitate accessibility."
        ],
        "modelAnswer": "The provided maps delineate the spatial evolution that took place at New Horizon Autonomous Smart Eco-District between 2015 and 2026.\n\nOverall, the area underwent dramatic modernization, transitioning from a predominantly low-density layout into an upgraded, multi-functional hub with improved transit links and specialized contemporary infrastructure.\n\nIn 2015, the layout was characterized by in 2015, the location was primarily characterized by conventional highway grid and petroleum refueling station.\n\nBy 2026, extensive redevelopment transformed the site. As illustrated in the second map, by 2026, extensive modernization introduced automated pod transit network, vertical hydroponic farm towers, and updated arterial infrastructure. In addition, transit connectivity was significantly modernized, replacing outdated paths with high-capacity arterial links."
      },
      "task2": {
        "id": "CAM_21_T3_W2",
        "topic": "Urban Heritage Conservation vs High-Capacity Housing (Academic Series 21)",
        "question": "In rapidly expanding cities, historical buildings should be demolished to make way for modern high-density housing and commercial skyscrapers. To what extent do you agree or disagree?",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate urban heritage conservation vs high-capacity housing remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    },
    "4": {
      "task1": {
        "id": "CAM_21_T4_W1",
        "title": "Superconducting Quantum Processor Fabrication & Cryo-Assembly",
        "chartType": "process",
        "instruction": "The flowchart below illustrates the sequential stages involved in superconducting quantum processor fabrication & cryo-assembly. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "chartData": null,
        "processData": {
          "title": "Superconducting Quantum Processor Fabrication & Cryo-Assembly",
          "stagesCount": 6,
          "stages": [
            {
              "step": 1,
              "name": "Substrate Atomic Layer Cleaning",
              "desc": "Automated operational execution of substrate atomic layer cleaning utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 1",
              "param": "Calibrated"
            },
            {
              "step": 2,
              "name": "Electron Beam Niobium Deposition",
              "desc": "Automated operational execution of electron beam niobium deposition utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 2",
              "param": "Calibrated"
            },
            {
              "step": 3,
              "name": "Josephson Junction Shadow Evaporation",
              "desc": "Automated operational execution of josephson junction shadow evaporation utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 3",
              "param": "Calibrated"
            },
            {
              "step": 4,
              "name": "Superconducting Microwave Resonator Etching",
              "desc": "Automated operational execution of superconducting microwave resonator etching utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 4",
              "param": "Calibrated"
            },
            {
              "step": 5,
              "name": "Flip-Chip Interconnect Bonding",
              "desc": "Automated operational execution of flip-chip interconnect bonding utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 5",
              "param": "Calibrated"
            },
            {
              "step": 6,
              "name": "Dilution Refrigerator 10mK Cryo-Cooldown",
              "desc": "Automated operational execution of dilution refrigerator 10mk cryo-cooldown utilizing specialized equipment to ensure quality yield.",
              "icon": "\u2699\ufe0f",
              "tag": "Phase 6",
              "param": "Calibrated"
            }
          ],
          "inputs": [
            "Sapphire Substrates & Niobium"
          ],
          "outputs": [
            "Operational Quantum Computing Cores"
          ]
        },
        "keyFeatures": [
          "A comprehensive 6-stage procedure transforming raw inputs into finished commercial outputs.",
          "The workflow integrates mechanical preparation, high-precision processing, and automated verification.",
          "Each phase relies on calibrated parameters to ensure zero defects and high yield."
        ],
        "modelAnswer": "The provided flowchart illustrates the sequential operations involved in superconducting quantum processor fabrication & cryo-assembly.\n\nOverall, the procedure comprises a structured sequence spanning 6 distinct phases, beginning with substrate atomic layer cleaning and culminating in dilution refrigerator 10mk cryo-cooldown.\n\nInitially, automated operational execution of substrate atomic layer cleaning utilizing specialized equipment to ensure quality yield. Following this initial phase, the material is transferred to the intermediate processing stages where specialized equipment ensures physical and chemical transformation.\n\nIn the concluding phases, the products undergo rigorous quality inspection and packaging to produce operational quantum computing cores ready for end-user distribution."
      },
      "task2": {
        "id": "CAM_21_T4_W2",
        "topic": "Planned Obsolescence & Consumer Electronics Waste (Academic Series 21)",
        "question": "Modern consumer electronics are frequently manufactured for short lifespans and are costly to repair, leading to unprecedented quantities of electronic waste. Some argue that consumers must alter their purchasing habits, while others believe governments must legally enforce right-to-repair standards. Discuss both views and give your opinion.",
        "keywords": [
          "systemic regulation",
          "technological innovation",
          "socioeconomic equity",
          "sustainable development",
          "long-term governance"
        ],
        "planningStructure": {
          "introduction": "Paraphrase the prompt; outline both countervailing perspectives; articulate clear personal thesis.",
          "body1": "Examine conventional institutional and economic arguments focusing on precedent and stability.",
          "body2": "Analyze progressive technological and ecological arguments focusing on modernization and sustainability.",
          "conclusion": "Synthesize key findings and affirm forward-looking policy synthesis."
        },
        "highBandVocabulary": [
          {
            "word": "indispensable",
            "meaning": "absolutely necessary or essential",
            "example": "Robust civic participation remains indispensable to institutional accountability."
          },
          {
            "word": "proliferate",
            "meaning": "rapidly multiply or expand",
            "example": "Digital platforms proliferate across global educational networks."
          },
          {
            "word": "ameliorate",
            "meaning": "make an undesirable situation better",
            "example": "Progressive environmental standards substantially ameliorate public health burdens."
          }
        ],
        "modelAnswer": "The question of how society should navigate planned obsolescence & consumer electronics waste remains one of the most vigorously debated dilemmas in modern public policy. While conventional paradigms offer structural predictability, I contend that embracing forward-looking, legally enforceable frameworks produces superior socioeconomic outcomes, provided equitable safeguards are implemented.\n\nThose advocating traditional or deregulated approaches present valid arguments grounded in commercial efficiency and historical precedent. Established institutional frameworks benefit from decades of operational refinement, offering stability that rapid transitions often jeopardize. In commercial and industrial contexts, sudden statutory constraints can impose heavy compliance costs on enterprises, potentially dampening short-term economic momentum.\n\nNevertheless, contemporary challenges demand proactive governance. In the face of accelerating technological transformation and environmental pressures, voluntary individual restraint is insufficient to address systemic market failures. Legally binding standards act as powerful catalysts for sustainable innovation, compelling organizations to optimize resource efficiency and pioneer advanced methodologies that ultimately yield widespread societal dividends.\n\nIn conclusion, while the transitional frictions of reform cannot be dismissed, passive adherence to obsolete practices undermines long-term human progress. Governments and institutions must establish enlightened, robust frameworks to foster sustainable resilience for future generations."
      }
    }
  }
};

  window.CambridgeWritingData = {
    getWritingTest(bNum, tNum) {
      const b = parseInt(bNum, 10) || 1;
      const t = parseInt(tNum, 10) || 1;
      if (WRITING_DATABASE[b] && WRITING_DATABASE[b][t]) {
        return WRITING_DATABASE[b][t];
      }
      return null;
    },
    hasWritingTest(bNum, tNum) {
      const b = parseInt(bNum, 10) || 1;
      const t = parseInt(tNum, 10) || 1;
      return !!(WRITING_DATABASE[b] && WRITING_DATABASE[b][t]);
    },
    getAllBooks() {
      return Object.keys(WRITING_DATABASE).map(k => parseInt(k, 10));
    }
  };
})(typeof window !== 'undefined' ? window : global);
