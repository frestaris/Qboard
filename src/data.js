const initialPosts = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/48?u=499476",
    name: "John Doe",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    title: "Top 10 Music Albums of 2023",
    content: "Here are the top 10 music albums you should listen to this year.",
    category: "Music",
    likes: 150,
    comments: [
      {
        author: "User1",
        content: "Great post!",
        time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      },
      {
        author: "User2",
        content: "I totally agree with this.",
        time: new Date(Date.now() - 58 * 60 * 1000).toISOString(),
      },
      {
        author: "User3",
        content: "Can’t wait to check them out!",
        time: new Date(Date.now() - 57 * 60 * 1000).toISOString(),
      },
    ],
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/48?u=493676",
    name: "Jane Smith",
    time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    title: "Health Benefits of Daily Meditation",
    content: "Meditation is known to improve mental clarity and reduce stress.",
    category: "Health",
    likes: 30,
    comments: [
      {
        author: "User4",
        content: "This is really insightful!",
        time: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
      },
      {
        author: "User5",
        content: "I meditate every day; it helps a lot!",
        time: new Date(Date.now() - 29 * 60 * 1000).toISOString(),
      },
    ],
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/48?u=499606",
    name: "Alice Johnson",
    time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    title: "The Best Movies of the Decade",
    content: "A comprehensive list of the best movies from the past 10 years.",
    category: "Movie",
    likes: 100,
    comments: [
      {
        author: "User6",
        content: "I love this list!",
        time: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
      },
      {
        author: "User7",
        content: "Where's my favorite movie?",
        time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      },
      {
        author: "User8",
        content: "I disagree with some choices, but overall a great list!",
        time: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
      },
    ],
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/48?u=189476",
    name: "Mark Anthony",
    time: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    title: "Latest Gaming Trends in 2024",
    content:
      "A look at the upcoming trends and games to watch out for in 2024.",
    category: "Gaming",
    likes: 75,
    comments: [
      {
        author: "User9",
        content: "Excited for the new releases!",
        time: new Date().toISOString(),
      },
      {
        author: "User10",
        content: "I hope they focus on gameplay this time.",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/48?u=490776",
    name: "Sarah Lee",
    time: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    title: "DIY Home Improvement Tips",
    content: "Learn how to improve your home with these simple DIY tips.",
    category: "DIY",
    likes: 50,
    comments: [
      {
        author: "User11",
        content: "These tips are really helpful!",
        time: new Date().toISOString(),
      },
      {
        author: "User12",
        content: "I tried one of these and it worked!",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/48?u=678198",
    name: "Tom Harris",
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    title: "Top Travel Destinations for 2024",
    content: "Here are the must-visit travel destinations for 2024.",
    category: "Travel",
    likes: 20,
    comments: [
      {
        author: "User13",
        content: "Saving this for later!",
        time: new Date().toISOString(),
      },
      {
        author: "User14",
        content: "Looks amazing! I'm going to book a trip.",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/48?u=999999",
    name: "Emily Clark",
    time: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    title: "Best Practices for Remote Work",
    content:
      "Explore effective strategies to boost productivity while working remotely.",
    category: "Business",
    likes: 10,
    comments: [
      {
        author: "User15",
        content: "Very useful tips!",
        time: new Date().toISOString(),
      },
      {
        author: "User16",
        content: "I'll try these methods.",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/48?u=888888",
    name: "Michael Brown",
    time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    title: "Understanding Cryptocurrency: A Beginner's Guide",
    content: "A comprehensive introduction to the world of cryptocurrency.",
    category: "Finance",
    likes: 5,
    comments: [
      {
        author: "User17",
        content: "I'm still confused about this.",
        time: new Date().toISOString(),
      },
      {
        author: "User18",
        content: "Thanks for breaking it down!",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/48?u=777777",
    name: "Jessica Taylor",
    time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    title: "Traveling on a Budget: Tips and Tricks",
    content:
      "Learn how to travel without breaking the bank with these helpful tips.",
    category: "Travel",
    likes: 80,
    comments: [
      {
        author: "User19",
        content: "I need these tips for my upcoming trip!",
        time: new Date().toISOString(),
      },
      {
        author: "User20",
        content: "Great advice!",
        time: new Date().toISOString(),
      },
      {
        author: "User21",
        content: "I wish I knew this earlier.",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/48?u=666666",
    name: "David Wilson",
    time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    title: "The Importance of Mental Health Awareness",
    content: "Understanding mental health issues and how to promote awareness.",
    category: "Health",
    likes: 60,
    comments: [
      {
        author: "User22",
        content: "Such an important topic!",
        time: new Date().toISOString(),
      },
      {
        author: "User23",
        content: "I completely agree with this.",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 11,
    avatar: "https://i.pravatar.cc/48?u=555555",
    name: "Laura White",
    time: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
    title: "Top 5 Trends in Technology for 2024",
    content:
      "Discover the latest technological advancements shaping the future.",
    category: "Technology",
    likes: 90,
    comments: [
      {
        author: "User24",
        content: "Can't wait to see these trends in action!",
        time: new Date().toISOString(),
      },
      {
        author: "User25",
        content: "Interesting insights!",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 12,
    avatar: "https://i.pravatar.cc/48?u=444444",
    name: "James Green",
    time: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    title: "The Benefits of a Plant-Based Diet",
    content:
      "Learn about the health benefits of switching to a plant-based diet.",
    category: "Food",
    likes: 40,
    comments: [
      {
        author: "User26",
        content: "I've been thinking of making the switch!",
        time: new Date().toISOString(),
      },
      {
        author: "User27",
        content: "Great information!",
        time: new Date().toISOString(),
      },
    ],
  },
  {
    id: 13,
    avatar: "https://i.pravatar.cc/48?u=333333",
    name: "Sophia Adams",
    time: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
    title: "Home Workout Routines for All Levels",
    content: "No gym? No problem! Try these effective home workout routines.",
    category: "Fitness",
    likes: 25,
    comments: [
      {
        author: "User28",
        content: "Perfect for my busy schedule!",
        time: new Date().toISOString(),
      },
      {
        author: "User29",
        content: "I love these routines!",
        time: new Date().toISOString(),
      },
    ],
  },
];

export default initialPosts;
