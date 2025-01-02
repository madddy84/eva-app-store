import json

apps = json.loads('''[
   {
      "id":1,
      "name":"Analytics Pro",
      "icon":"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "shortDescription":"Advanced Business Analytics",
      "fullDescription":"Enterprise-grade analytics platform with real-time data tracking, custom reports, and AI-powered insights.",
      "price":29.99,
      "developer":"DataTech Solutions",
      "rating":4.8,
      "category":"analytics",
      "tags":[
         "Business Intelligence",
         "Data Analytics",
         "Reporting",
         "AI"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"API Reference",
            "url":"#",
            "description":"Complete API documentation"
         },
         {
            "section":"Integration Guide",
            "url":"#",
            "description":"Steps to integrate with existing systems"
         }
      ],
      "faq":[
         {
            "question":"How do I start with Analytics Pro?",
            "answer":"Sign up for a free trial, install our SDK, and follow the quick start guide."
         },
         {
            "question":"What type of support is included?",
            "answer":"24/7 technical support, dedicated account manager, and community forums."
         },
         {
            "question":"Can I export my data?",
            "answer":"Yes, data can be exported in multiple formats including CSV, JSON, and PDF."
         }
      ],
      "reviews":[
         {
            "user":"John M.",
            "rating":5,
            "comment":"Perfect for our business analytics needs!"
         },
         {
            "user":"Sarah K.",
            "rating":4,
            "comment":"Great insights, easy to use."
         }
      ]
   },
   {
      "id":2,
      "name":"Task Manager",
      "icon":"https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
      "shortDescription":"Organize your tasks efficiently",
      "fullDescription":"A comprehensive task management app with project tracking, deadlines, and collaboration features.",
      "price":9.99,
      "developer":"Productivity Inc.",
      "rating":4.5,
      "category":"productivity",
      "tags":[
         "Task Management",
         "Project Tracking",
         "Collaboration"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"User Manual",
            "url":"#",
            "description":"Detailed user manual"
         },
         {
            "section":"FAQ",
            "url":"#",
            "description":"Frequently asked questions"
         }
      ],
      "faq":[
         {
            "question":"How do I create a new task?",
            "answer":"Click on the 'New Task' button and fill in the details."
         },
         {
            "question":"Can I share tasks with my team?",
            "answer":"Yes, you can share tasks and collaborate with your team members."
         }
      ],
      "reviews":[
         {
            "user":"Alice W.",
            "rating":5,
            "comment":"Helps me stay organized and on track!"
         },
         {
            "user":"Bob L.",
            "rating":4,
            "comment":"Great app for managing tasks."
         }
      ]
   },
   {
      "id":3,
      "name":"Fitness Tracker",
      "icon":"https://images.unsplash.com/photo-1517638851339-4c1d2f9f1a97",
      "shortDescription":"Track your fitness goals",
      "fullDescription":"A fitness tracking app with workout plans, progress tracking, and health metrics.",
      "price":14.99,
      "developer":"HealthTech",
      "rating":4.7,
      "category":"health",
      "tags":[
         "Fitness",
         "Health",
         "Workout",
         "Tracking"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Workout Plans",
            "url":"#",
            "description":"Predefined workout plans"
         },
         {
            "section":"Health Metrics",
            "url":"#",
            "description":"Track your health metrics"
         }
      ],
      "faq":[
         {
            "question":"How do I set my fitness goals?",
            "answer":"Go to the 'Goals' section and set your desired fitness goals."
         },
         {
            "question":"Can I sync with my wearable device?",
            "answer":"Yes, the app supports syncing with various wearable devices."
         }
      ],
      "reviews":[
         {
            "user":"Chris P.",
            "rating":5,
            "comment":"Excellent app for tracking my workouts!"
         },
         {
            "user":"Dana S.",
            "rating":4,
            "comment":"Very useful for staying fit."
         }
      ]
   },
   {
      "id":4,
      "name":"Recipe Master",
      "icon":"https://images.unsplash.com/photo-1512058564366-c9e3e1cc1e8d",
      "shortDescription":"Discover and share recipes",
      "fullDescription":"A recipe app with thousands of recipes, meal planning, and grocery list features.",
      "price":4.99,
      "developer":"Culinary Creations",
      "rating":4.6,
      "category":"food",
      "tags":[
         "Recipes",
         "Cooking",
         "Meal Planning",
         "Grocery List"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Recipe Collection",
            "url":"#",
            "description":"Browse our recipe collection"
         },
         {
            "section":"Meal Planning",
            "url":"#",
            "description":"Plan your meals for the week"
         }
      ],
      "faq":[
         {
            "question":"How do I add a new recipe?",
            "answer":"Click on the 'Add Recipe' button and fill in the details."
         },
         {
            "question":"Can I share recipes with friends?",
            "answer":"Yes, you can share your favorite recipes with friends."
         }
      ],
      "reviews":[
         {
            "user":"Emma T.",
            "rating":5,
            "comment":"Love the variety of recipes available!"
         },
         {
            "user":"Frank H.",
            "rating":4,
            "comment":"Great app for meal planning."
         }
      ]
   },
   {
      "id":5,
      "name":"Budget Buddy",
      "icon":"https://images.unsplash.com/photo-1565372914903-9d7e3c731f4a",
      "shortDescription":"Manage your finances",
      "fullDescription":"A personal finance app with budgeting tools, expense tracking, and financial insights.",
      "price":19.99,
      "developer":"Finance Solutions",
      "rating":4.4,
      "category":"finance",
      "tags":[
         "Budgeting",
         "Expense Tracking",
         "Financial Insights"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Budgeting Tools",
            "url":"#",
            "description":"Learn how to use our budgeting tools"
         },
         {
            "section":"Expense Tracking",
            "url":"#",
            "description":"Track your expenses easily"
         }
      ],
      "faq":[
         {
            "question":"How do I create a budget?",
            "answer":"Go to the 'Budget' section and set up your budget."
         },
         {
            "question":"Can I link my bank account?",
            "answer":"Yes, you can securely link your bank account for automatic expense tracking."
         }
      ],
      "reviews":[
         {
            "user":"George R.",
            "rating":5,
            "comment":"Helps me keep my finances in check!"
         },
         {
            "user":"Hannah L.",
            "rating":4,
            "comment":"Very useful for budgeting."
         }
      ]
   },
   {
      "id":6,
      "name":"Language Learner",
      "icon":"https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      "shortDescription":"Learn new languages",
      "fullDescription":"A language learning app with interactive lessons, quizzes, and progress tracking.",
      "price":24.99,
      "developer":"EduTech",
      "rating":4.9,
      "category":"education",
      "tags":[
         "Language Learning",
         "Education",
         "Interactive Lessons"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Lesson Plans",
            "url":"#",
            "description":"Browse our lesson plans"
         },
         {
            "section":"Progress Tracking",
            "url":"#",
            "description":"Track your learning progress"
         }
      ],
      "faq":[
         {
            "question":"How do I start a new language course?",
            "answer":"Go to the 'Courses' section and select a language to start learning."
         },
         {
            "question":"Are there quizzes to test my knowledge?",
            "answer":"Yes, each lesson includes quizzes to test your understanding."
         }
      ],
      "reviews":[
         {
            "user":"Ivy N.",
            "rating":5,
            "comment":"Fantastic app for learning new languages!"
         },
         {
            "user":"Jack O.",
            "rating":4,
            "comment":"Very effective and engaging."
         }
      ]
   },
   {
      "id":7,
      "name":"Photo Editor",
      "icon":"https://images.unsplash.com/photo-1504198458649-3128b932f49b",
      "shortDescription":"Edit your photos like a pro",
      "fullDescription":"A powerful photo editing app with filters, effects, and advanced editing tools.",
      "price":12.99,
      "developer":"Creative Studio",
      "rating":4.3,
      "category":"photography",
      "tags":[
         "Photo Editing",
         "Filters",
         "Effects",
         "Advanced Tools"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Editing Tools",
            "url":"#",
            "description":"Learn how to use our editing tools"
         },
         {
            "section":"Filters and Effects",
            "url":"#",
            "description":"Apply filters and effects to your photos"
         }
      ],
      "faq":[
         {
            "question":"How do I edit a photo?",
            "answer":"Open a photo and use the editing tools to make adjustments."
         },
         {
            "question":"Can I save my edited photos?",
            "answer":"Yes, you can save and share your edited photos."
         }
      ],
      "reviews":[
         {
            "user":"Karen P.",
            "rating":5,
            "comment":"Amazing app for photo editing!"
         },
         {
            "user":"Leo Q.",
            "rating":4,
            "comment":"Great features and easy to use."
         }
      ]
   },
   {
      "id":8,
      "name":"Travel Planner",
      "icon":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "shortDescription":"Plan your trips effortlessly",
      "fullDescription":"A travel planning app with itinerary creation, booking management, and travel guides.",
      "price":7.99,
      "developer":"TravelTech",
      "rating":4.2,
      "category":"travel",
      "tags":[
         "Travel Planning",
         "Itinerary",
         "Booking Management",
         "Travel Guides"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Itinerary Creation",
            "url":"#",
            "description":"Create and manage your travel itinerary"
         },
         {
            "section":"Travel Guides",
            "url":"#",
            "description":"Explore travel guides for various destinations"
         }
      ],
      "faq":[
         {
            "question":"How do I create a travel itinerary?",
            "answer":"Go to the 'Itinerary' section and add your travel plans."
         },
         {
            "question":"Can I manage my bookings?",
            "answer":"Yes, you can manage all your travel bookings in one place."
         }
      ],
      "reviews":[
         {
            "user":"Mia R.",
            "rating":5,
            "comment":"Makes travel planning so easy!"
         },
         {
            "user":"Nate S.",
            "rating":4,
            "comment":"Very helpful for organizing trips."
         }
      ]
   },
   {
      "id":9,
      "name":"Music Streamer",
      "icon":"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      "shortDescription":"Stream your favorite music",
      "fullDescription":"A music streaming app with millions of songs, playlists, and offline listening.",
      "price":11.99,
      "developer":"MusicWorld",
      "rating":4.8,
      "category":"music",
      "tags":[
         "Music Streaming",
         "Playlists",
         "Offline Listening"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Playlists",
            "url":"#",
            "description":"Create and manage your playlists"
         },
         {
            "section":"Offline Listening",
            "url":"#",
            "description":"Download songs for offline listening"
         }
      ],
      "faq":[
         {
            "question":"How do I create a playlist?",
            "answer":"Go to the 'Playlists' section and create a new playlist."
         },
         {
            "question":"Can I listen to music offline?",
            "answer":"Yes, you can download songs for offline listening."
         }
      ],
      "reviews":[
         {
            "user":"Olivia T.",
            "rating":5,
            "comment":"Best music streaming app!"
         },
         {
            "user":"Paul U.",
            "rating":4,
            "comment":"Great selection of songs."
         }
      ]
   },
   {
      "id":10,
      "name":"Weather Watcher",
      "icon":"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "shortDescription":"Stay updated with the weather",
      "fullDescription":"A weather app with real-time updates, forecasts, and severe weather alerts.",
      "price":3.99,
      "developer":"WeatherTech",
      "rating":4.5,
      "category":"weather",
      "tags":[
         "Weather Updates",
         "Forecasts",
         "Severe Weather Alerts"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Weather Forecasts",
            "url":"#",
            "description":"View detailed weather forecasts"
         },
         {
            "section":"Alerts",
            "url":"#",
            "description":"Set up severe weather alerts"
         }
      ],
      "faq":[
         {
            "question":"How do I view the weather forecast?",
            "answer":"Open the app and view the forecast for your location."
         },
         {
            "question":"Can I set up weather alerts?",
            "answer":"Yes, you can set up alerts for severe weather conditions."
         }
      ],
      "reviews":[
         {
            "user":"Quinn V.",
            "rating":5,
            "comment":"Accurate and reliable weather updates!"
         },
         {
            "user":"Rachel W.",
            "rating":4,
            "comment":"Very useful for staying updated with the weather."
         }
      ]
   },
   {
      "id":11,
      "name":"Meditation Guide",
      "icon":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "shortDescription":"Relax and meditate",
      "fullDescription":"A meditation app with guided sessions, relaxation techniques, and progress tracking.",
      "price":8.99,
      "developer":"Wellness Inc.",
      "rating":4.7,
      "category":"health",
      "tags":[
         "Meditation",
         "Relaxation",
         "Guided Sessions",
         "Wellness"
      ],
      "documentation":[
         {
            "section":"Getting Started",
            "url":"#",
            "description":"Quick start guide for new users"
         },
         {
            "section":"Guided Sessions",
            "url":"#",
            "description":"Browse our guided meditation sessions"
         },
         {
            "section":"Relaxation Techniques",
            "url":"#",
            "description":"Learn various relaxation techniques"
         }
      ],
      "faq":[
         {
            "question":"How do I start a meditation session?",
            "answer":"Go to the 'Sessions' section and select a guided session."
         },
         {
            "question":"Can I track my progress?",
            "answer":"Yes, you can track your meditation progress over time."
         }
      ],
      "reviews":[
         {
            "user":"Sam X.",
            "rating":5,
            "comment":"Helps me relax and unwind!"
         },
         {
            "user":"Tina Y.",
            "rating":4,
            "comment":"Great app for meditation."
         }
      ]
   }
]''');



def upgrade(db):
    db.create_collection("apps")
    db.apps.insert_many(apps)
    print("Apps collection created and data inserted")

def downgrade(db):
    db.drop_collection("apps")  