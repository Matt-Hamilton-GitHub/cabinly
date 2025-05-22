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
              { id: 1, title: "W Trek", group_capacity: 12 },
              { id: 2, title: "O Circuit", group_capacity: 10 },
              { id: 3, title: "Day Hikes: Base of the Towers (8–10 hrs)", group_capacity: 15 },
              { id: 4, title: "Mirador Cuernos", group_capacity: 20 },
              { id: 5, title: "Salto Grande to Mirador Lago Nordenskjöld", group_capacity: 18 }
            ],
            desc:
              "Famous route covering the highlights—Torres Base, French Valley, and Grey Glacier."
          },
          {
            type: "Glacier Tours",
            sub_activity: [
              { id: 6, title: "Grey Glacier boat tour", group_capacity: 25 },
              { id: 7, title: "Kayaking near Grey Lake", group_capacity: 8 },
              { id: 8, title: "Ice hiking on Grey Glacier", group_capacity: 10 }
            ],
            desc: "Guided adventures around or on the magnificent Grey Glacier."
          },
          {
            type: "Wildlife Watching",
            sub_activity: [
              { id: 9, title: "Guanacos in the valleys", group_capacity: 20 },
              { id: 10, title: "Andean condors spotting", group_capacity: 15 },
              { id: 11, title: "Pumas with guided tours", group_capacity: 6 }
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
        season: "Year-round",
        activities: [
          {
            type: "Snorkeling",
            sub_activity: [
              { id: 12, title: "Turtle Bay snorkeling", group_capacity: 12 },
              { id: 13, title: "Kicker Rock dive", group_capacity: 8 }
            ],
            desc: "Explore the marine life including turtles, sharks, and colorful fish."
          },
          {
            type: "Wildlife Viewing",
            sub_activity: [
              { id: 14, title: "Blue-footed booby nesting", group_capacity: 15 },
              { id: 15, title: "Marine iguana colonies", group_capacity: 20 }
            ],
            desc: "View unique endemic species in their natural habitats."
          },
          {
            type: "Island Hopping",
            sub_activity: [
              { id: 16, title: "Santa Cruz to Isabela", group_capacity: 25 },
              { id: 17, title: "Day trips to uninhabited islands", group_capacity: 18 }
            ],
            desc: "Visit multiple islands for diverse ecosystems and beaches."
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
        season: "May - Sep",
        activities: [
          {
            type: "Safari Tours",
            sub_activity: [
              { id: 18, title: "Big Five drives", group_capacity: 12 },
              { id: 19, title: "Ngorongoro Crater full-day", group_capacity: 10 }
            ],
            desc: "Classic African safaris to spot elephants, lions, rhinos, leopards, and buffalo."
          },
          {
            type: "Cultural Visits",
            sub_activity: [
              { id: 20, title: "Maasai village tour", group_capacity: 15 }
            ],
            desc: "Experience traditional Maasai culture and lifestyle."
          },
          {
            type: "Nature Walks",
            sub_activity: [
              { id: 21, title: "Guided crater rim walk", group_capacity: 8 }
            ],
            desc: "Enjoy breathtaking views and learn about flora and fauna."
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
        season: "Nov - Apr",
        activities: [
          {
            type: "Scenic Cruises",
            sub_activity: [
              { id: 22, title: "Glacier viewing boat tours", group_capacity: 20 },
              { id: 23, title: "Whale watching excursions", group_capacity: 18 }
            ],
            desc: "Sail among icebergs and spot wildlife like whales and seals."
          },
          {
            type: "Kayaking",
            sub_activity: [
              { id: 24, title: "Gentoo penguin colony paddle", group_capacity: 6 }
            ],
            desc: "Paddle near penguins and seals for an intimate wildlife experience."
          },
          {
            type: "Research Station Tours",
            sub_activity: [
              { id: 25, title: "Palmer Station visit", group_capacity: 10 }
            ],
            desc: "Learn about polar science and meet resident researchers."
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
        season: "Jun - Aug",
        activities: [
          {
            type: "Cultural Exploration",
            sub_activity: [
              { id: 26, title: "Bhutanese monastery visits", group_capacity: 10 },
              { id: 27, title: "Thimphu cultural day", group_capacity: 12 }
            ],
            desc: "Dive deep into Bhutan’s heritage with guided tours of temples and museums."
          },
          {
            type: "Mountain Hiking",
            sub_activity: [
              { id: 28, title: "Tiger’s Nest Monastery hike", group_capacity: 8 },
              { id: 29, title: "Phobjikha Valley trails", group_capacity: 6 }
            ],
            desc: "Scenic trails through the Himalayas with stunning views."
          },
          {
            type: "Nature Photography",
            sub_activity: [
              { id: 30, title: "Black-necked crane habitats", group_capacity: 5 }
            ],
            desc: "Perfect for wildlife and landscape photography."
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
        season: "Oct - Apr",
        activities: [
          {
            type: "Scenic Road Trips",
            sub_activity: [
              { id: 35, title: "Ring Road highlights", group_capacity: 8 },
              { id: 36, title: "Golden Circle day trip", group_capacity: 12 }
            ],
            desc: "Drive past volcanoes, waterfalls, and geysers."
          },
          {
            type: "Northern Lights Viewing",
            sub_activity: [
              { id: 37, title: "Aurora hunting night tour", group_capacity: 10 }
            ],
            desc: "Chase the aurora borealis with expert guides."
          },
          {
            type: "Hot Springs Relaxation",
            sub_activity: [
              { id: 38, title: "Blue Lagoon spa visit", group_capacity: 20 }
            ],
            desc: "Soak in geothermal waters surrounded by lava fields."
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
            sub_activity: [
              { id: 42, title: 'Fushimi Inari Shrine', group_capacity: 20 },
              { id: 43, title: 'Kinkaku-ji', group_capacity: 15 },
              { id: 44, title: 'Gion district', group_capacity: 10 }
            ],
            desc: 'A journey through Japan’s spiritual and cultural heart.'
          },
          {
            type: 'Tea Ceremonies',
            sub_activity: [
              { id: 45, title: 'Traditional tea rooms in Gion', group_capacity: 8 },
              { id: 46, title: 'Temple-hosted rituals', group_capacity: 6 }
            ],
            desc: 'Experience a serene and authentic tea ceremony.'
          }
        ]
      },
      {
        season: 'Oct - Nov',
        activities: [
          {
            type: 'Cultural & Historical Tours',
            sub_activity: [
              { id: 42, title: 'Fushimi Inari Shrine', group_capacity: 20 },
              { id: 43, title: 'Kinkaku-ji', group_capacity: 15 },
              { id: 44, title: 'Gion district', group_capacity: 10 }
            ],
            desc: 'A journey through Japan’s spiritual and cultural heart.'
          },
          {
            type: 'Tea Ceremonies',
            sub_activity: [
              { id: 45, title: 'Traditional tea rooms in Gion', group_capacity: 8 },
              { id: 46, title: 'Temple-hosted rituals', group_capacity: 6 }
            ],
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
        season: "Apr - Nov",
        activities: [
          {
            type: "Jungle Treks",
            sub_activity: [
              { id: 39, title: "Amazon canopy walk", group_capacity: 8 },
              { id: 40, title: "Overnight rainforest camping", group_capacity: 6 }
            ],
            desc: "Explore the dense Amazon with expert naturalists."
          },
          {
            type: "River Cruises",
            sub_activity: [
              { id: 41, title: "Wildlife spotting boat tours", group_capacity: 12 }
            ],
            desc: "Navigate the Amazon River to see monkeys, birds, and pink dolphins."
          },
          {
            type: "Tribal Visits",
            sub_activity: [
              { id: 42, title: "Meet local tribes", group_capacity: 10 }
            ],
            desc: "Learn about indigenous cultures and customs."
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
        season: "Apr - Oct",
        activities: [
          {
            type: "Historic Tours",
            sub_activity: [
              { id: 43, title: "Machu Picchu guided hike", group_capacity: 10 },
              { id: 44, title: "Sacred Valley ruins", group_capacity: 12 }
            ],
            desc: "Explore Incan ruins and history with knowledgeable guides."
          },
          {
            type: "Andean Treks",
            sub_activity: [
              { id: 45, title: "Salkantay Trail", group_capacity: 8 },
              { id: 46, title: "Lares Trek", group_capacity: 6 }
            ],
            desc: "Scenic multi-day hikes through the Andes."
          },
          {
            type: "Local Market Visits",
            sub_activity: [
              { id: 47, title: "Pisac and Cusco market tours", group_capacity: 15 }
            ],
            desc: "Experience Peruvian culture through food and crafts."
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
            sub_activity: [
              { id: 48, title: 'Bungee jumping', group_capacity: 10 },
              { id: 49, title: 'Skydiving', group_capacity: 8 },
              { id: 50, title: 'Jet boating', group_capacity: 12 }
            ],
            desc: 'A global capital of adventure sports.'
          },
          {
            type: 'Scenic Tours',
            sub_activity: [
              { id: 51, title: 'Lake Wakatipu cruise', group_capacity: 20 },
              { id: 52, title: 'Milford Sound day trip', group_capacity: 15 }
            ],
            desc: 'Explore dramatic fjords and snowcapped landscapes.'
          }
        ]
      },
      {
        season: 'Jun - Aug',
        activities: [
          {
            type: 'Skiing & Snowboarding',
            sub_activity: [
              { id: 53, title: 'Coronet Peak', group_capacity: 12 },
              { id: 54, title: 'The Remarkables', group_capacity: 10 }
            ],
            desc: 'Excellent ski terrain during New Zealand’s winter.'
          }
        ]
      }
    ]
  }
]

export default places