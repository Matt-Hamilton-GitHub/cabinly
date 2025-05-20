const places = [
  {
    id: 1,
    name: "Torres del Paine",
    country: "Chile",
    temperature: "5–15°C (41–59°F)",
    best_season: "Nov to Mar",
    img_url: "https://images.unsplash.com/photo-1544142521-ee53646bf7d6",
    place_description: "A stunning national park in Chilean Patagonia, known for its soaring mountains, bright blue icebergs, and golden grasslands.",
    guides: ["Maria Gonzalez", "Lucas Perez", "Sofia Ramirez"],
    seasons: [
      {
        season: "Nov - Mar",
        activities: [
          {
            type: "Trekking & Hiking",
            sub_activity: [
              "W Trek",
              "O Circuit",
              "Day Hikes: Base of the Towers (8–10 hrs)",
              "Mirador Cuernos",
              "Salto Grande to Mirador Lago Nordenskjöld"
            ],
            desc: "Famous route covering the highlights—Torres Base, French Valley, and Grey Glacier."
          },
          {
            type: "Glacier Tours",
            sub_activity: [
              "Grey Glacier boat tour",
              "Kayaking near Grey Lake",
              "Ice hiking on Grey Glacier"
            ],
            desc: "Guided adventures around or on the magnificent Grey Glacier."
          },
          {
            type: "Wildlife Watching",
            sub_activity: [
              "Guanacos in the valleys",
              "Andean condors spotting",
              "Pumas with guided tours"
            ],
            desc: "Best season for observing Patagonian wildlife in natural habitats."
          }
        ]
      }
    ]
  },

    {
    id: 2,
    name: 'Banff National Park',
    country: 'Canada',
    temperature: '5–20°C (41–68°F) in summer, −5–−20°C in winter',
    best_season: 'Jun - Aug (hiking), Dec - Mar (skiing)',
    img_url: 'https://images.unsplash.com/photo-1630618359150-409abae1bced',
    place_description: 'Canada’s first national park with stunning turquoise lakes, jagged mountains, and abundant wildlife.',
    guides: ['Emily Novak', 'Dylan Carter', 'Mason Gray'],
    seasons: [
      {
        season: 'Jun - Aug',
        activities: [
          {
            type: 'Hiking & Trekking',
            sub_activity: ['Lake Louise Trail', 'Plain of Six Glaciers', 'Tunnel Mountain'],
            desc: 'A variety of alpine and lakeside trails surrounded by snow-capped peaks.'
          }
        ]
      },
      {
        season: 'Dec - Mar',
        activities: [
          {
            type: 'Skiing & Snowboarding',
            sub_activity: ['Sunshine Village', 'Lake Louise Ski Resort'],
            desc: 'Top-tier ski resorts offering breathtaking slopes in winter.'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Great Barrier Reef',
    country: 'Australia',
    temperature: '24–30°C (75–86°F)',
    best_season: 'Jun - Oct (dry season)',
    img_url: 'https://images.unsplash.com/photo-1544019165-36780b68659e',
    place_description: 'The world’s largest coral reef system, teeming with life and visible from space.',
    guides: ['Liam Walker', 'Zoe Taylor', 'Cooper Hughes'],
    seasons: [
      {
        season: 'Jun - Oct',
        activities: [
          {
            type: 'Snorkeling & Diving',
            sub_activity: ['Cairns reefs', 'Outer Barrier Reef expeditions'],
            desc: 'Swim among vibrant coral reefs and marine biodiversity.'
          },
          {
            type: 'Boat Tours',
            sub_activity: ['Glass-bottom boat tours', 'Liveaboard cruises'],
            desc: 'Scenic boat tours with educational reef info.'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Petra',
    country: 'Jordan',
    temperature: '15–30°C (59–86°F)',
    best_season: 'March to May, September to November',
    img_url: 'https://images.unsplash.com/photo-1615811648503-479d06197ff3',
    place_description: 'A lost city carved into rock, Petra is one of the New Seven Wonders of the World.',
    guides: ['Yousef Al-Karim', 'Noura Saleh', 'Farah Zidan'],
    seasons: [
      {
        season: 'Mar - May',
        activities: [
          {
            type: 'Cultural Exploration',
            sub_activity: ['Al-Khazneh (The Treasury)', 'The Monastery', 'Royal Tombs'],
            desc: 'Explore ancient Nabataean architecture carved into pink sandstone cliffs.'
          },
          {
            type: 'Hiking',
            sub_activity: ['Back trail to Monastery', 'High Place of Sacrifice'],
            desc: 'Scenic hikes that offer elevated views and ancient ruins.'
          }
        ]
      },
      {
        season: 'Sep - Nov',
        activities: [
          {
            type: 'Cultural Exploration',
            sub_activity: ['Al-Khazneh (The Treasury)', 'The Monastery', 'Royal Tombs'],
            desc: 'Explore ancient Nabataean architecture carved into pink sandstone cliffs.'
          },
          {
            type: 'Hiking',
            sub_activity: ['Back trail to Monastery', 'High Place of Sacrifice'],
            desc: 'Scenic hikes that offer elevated views and ancient ruins.'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Antelope Canyon',
    country: 'USA',
    temperature: '10–30°C (50–86°F)',
    best_season: 'March to October',
    img_url: 'https://images.unsplash.com/photo-1715625382706-1102f34fa0c7',
    place_description: 'A geological marvel in Arizona famous for its narrow passageways and light beams.',
    guides: ['Jake Redbird', 'Samantha Blackhorse', 'Nina Talltree'],
    seasons: [
      {
        season: 'Mar - Oct',
        activities: [
          {
            type: 'Photography Tours',
            sub_activity: ['Upper Canyon light beams', 'Lower Canyon narrows'],
            desc: 'Guided tours to capture surreal colors and sandstone formations.'
          },
          {
            type: 'Hiking',
            sub_activity: ['Short guided hikes within the canyon'],
            desc: 'Easy hikes through narrow, winding canyon walls.'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Mount Kilimanjaro',
    country: 'Tanzania',
    temperature: '−5–20°C (summit to base)',
    best_season: 'January to March, June to October',
    img_url: 'https://images.unsplash.com/photo-1703874567931-ab49447588cd',
    place_description: 'Africa’s highest peak and one of the most accessible major summits in the world.',
    guides: ['Juma Mwinyi', 'Aisha Kimaro', 'David Mbele'],
    seasons: [
      {
        season: 'Jan - Mar',
        activities: [
          {
            type: 'Mountain Climbing',
            sub_activity: ['Machame Route', 'Marangu Route', 'Lemosho Route'],
            desc: 'Ascend Africa’s tallest mountain through diverse ecosystems.'
          }
        ]
      },
      {
        season: 'Jun - Oct',
        activities: [
          {
            type: 'Mountain Climbing',
            sub_activity: ['Machame Route', 'Marangu Route', 'Lemosho Route'],
            desc: 'Ascend Africa’s tallest mountain through diverse ecosystems.'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Kyoto',
    country: 'Japan',
    temperature: '5–30°C (41–86°F)',
    best_season: 'March to May (cherry blossom), October to November (autumn)',
    img_url: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4',
    place_description: 'Ancient capital full of temples, gardens, and geisha culture.',
    guides: ['Haruka Sato', 'Kenji Nakamura', 'Yuki Ishida'],
    seasons: [
      {
        season: 'Mar - May',
        activities: [
          {
            type: 'Cultural & Historical Tours',
            sub_activity: ['Fushimi Inari Shrine', 'Kinkaku-ji', 'Gion district'],
            desc: 'A journey through Japan’s spiritual and cultural heart.'
          },
          {
            type: 'Tea Ceremonies',
            sub_activity: ['Traditional tea rooms in Gion', 'Temple-hosted rituals'],
            desc: 'Experience a serene and authentic tea ceremony.'
          }
        ]
      },
      {
        season: 'Oct - Nov',
        activities: [
          {
            type: 'Cultural & Historical Tours',
            sub_activity: ['Fushimi Inari Shrine', 'Kinkaku-ji', 'Gion district'],
            desc: 'A journey through Japan’s spiritual and cultural heart.'
          },
          {
            type: 'Tea Ceremonies',
            sub_activity: ['Traditional tea rooms in Gion', 'Temple-hosted rituals'],
            desc: 'Experience a serene and authentic tea ceremony.'
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Salar de Uyuni',
    country: 'Bolivia',
    temperature: '−5–20°C (23–68°F)',
    best_season: 'May to October (dry); March–April (wet mirror effect)',
    img_url: 'https://images.unsplash.com/photo-1616276994415-5f7503739dd9',
    place_description: 'An endless white desert that turns into a giant mirror after rain.',
    guides: ['Marco Quispe', 'Andrea Gutierrez', 'Luis Mamani'],
    seasons: [
      {
        season: 'May - Oct',
        activities: [
          {
            type: 'Photography Tours',
            sub_activity: ['Salt flats day tours', 'Stargazing'],
            desc: 'Capture surreal landscapes during dry season.'
          }
        ]
      },
      {
        season: 'Mar - Apr',
        activities: [
          {
            type: 'Mirror Photography',
            sub_activity: ['Flooded salt flats reflections'],
            desc: 'Best time for capturing the iconic mirror effect.'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Santorini',
    country: 'Greece',
    temperature: '15–30°C (59–86°F)',
    best_season: 'May to October',
    img_url: 'https://images.unsplash.com/photo-1696519668780-d8aebc9b95cd',
    place_description: 'Iconic Greek island known for cliffside villages, blue domes, and stunning sunsets.',
    guides: ['Niko Papadopoulos', 'Eleni Kosta', 'Stefanos Markos'],
    seasons: [
      {
        season: 'May - Oct',
        activities: [
          {
            type: 'Sunset Viewing',
            sub_activity: ['Oia village lookout', 'Akrotiri lighthouse'],
            desc: 'World-famous sunsets over whitewashed cliffside towns.'
          },
          {
            type: 'Boat Cruises',
            sub_activity: ['Volcano island tour', 'Hot spring swim'],
            desc: 'Sail across the caldera and explore volcanic wonders.'
          }
        ]
      }
    ]
  },
  {
    id: 10,
    name: 'Queenstown',
    country: 'New Zealand',
    temperature: '−2–22°C (28–72°F)',
    best_season: 'December to February (summer), June to August (ski)',
    img_url: 'https://images.unsplash.com/photo-1586414840734-a570ab4ce4c4',
    place_description: 'The adventure capital of the world set against the Southern Alps and glacial lakes.',
    guides: ['Olivia MacKenzie', 'James Tui', 'Ella Rivers'],
    seasons: [
      {
        season: 'Dec - Feb',
        activities: [
          {
            type: 'Adventure Sports',
            sub_activity: ['Bungee jumping', 'Skydiving', 'Jet boating'],
            desc: 'A global capital of adventure sports.'
          },
          {
            type: 'Scenic Tours',
            sub_activity: ['Lake Wakatipu cruise', 'Milford Sound day trip'],
            desc: 'Explore dramatic fjords and snowcapped landscapes.'
          }
        ]
      },
      {
        season: 'Jun - Aug',
        activities: [
          {
            type: 'Skiing & Snowboarding',
            sub_activity: ['Coronet Peak', 'The Remarkables'],
            desc: 'Excellent ski terrain during New Zealand’s winter.'
          }
        ]
      }
    ]
  }
]

export default places