const initialPosts = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/48?u=499476",
    name: "John Doe",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    title: "Top 10 Music Albums of 2023",
    content: "Here are the top 10 music albums you should listen to this year.",
    category: "Music",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/48?u=493676",
    name: "Jane Smith",
    time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    title: "Health Benefits of Daily Meditation",
    content: "Meditation is known to improve mental clarity and reduce stress.",
    category: "Health",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/48?u=499606",
    name: "Alice Johnson",
    time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    title: "The Best Movies of the Decade",
    content: "A comprehensive list of the best movies from the past 10 years.",
    category: "Movie",
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
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/48?u=490776",
    name: "Sarah Lee",
    time: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    title: "DIY Home Improvement Tips",
    content: "Learn how to improve your home with these simple DIY tips.",
    category: "DIY",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/48?u=678198",
    name: "Tom Harris",
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    title: "Top Travel Destinations for 2024",
    content: "Here are the must-visit travel destinations for 2024.",
    category: "Travel",
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
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/48?u=888888",
    name: "Michael Brown",
    time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    title: "Understanding Cryptocurrency: A Beginner's Guide",
    content: "A comprehensive introduction to the world of cryptocurrency.",
    category: "Finance",
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
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/48?u=666666",
    name: "David Wilson",
    time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    title: "The Importance of Mental Health Awareness",
    content: "Understanding mental health issues and how to promote awareness.",
    category: "Health",
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
  },
  {
    id: 13,
    avatar: "https://i.pravatar.cc/48?u=333333",
    name: "Sophia Adams",
    time: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
    title: "Home Workout Routines for All Levels",
    content: "No gym? No problem! Try these effective home workout routines.",
    category: "Fitness",
  },
];

export default initialPosts;
