import { podcastCovers } from '../config/images';

export const podcasts = [
  {
    id: 1,
    title: "The Joe Rogan Experience",
    host: "Joe Rogan",
    coverImage: podcastCovers.jre,
    description: "Join Joe Rogan as he explores conversations with the most interesting people on the planet.",
    category: "Society & Culture",
    episodes: [
      {
        id: 101,
        title: "Episode #2001 - Dave Chappelle",
        duration: "2:45:30",
        publishDate: "2024-02-10",
        listens: 15000000,
        audioUrl: "https://example.com/episode1.mp3"
      }
    ]
  },
  {
    id: 2,
    title: "Crime Junkie",
    host: "Ashley Flowers",
    coverImage: podcastCovers.crimeJunkie,
    description: "If you can never get enough true crime, join for weekly true crime stories that will make you feel alive.",
    category: "True Crime",
    episodes: [
      {
        id: 201,
        title: "MURDERED: The Mysterious Case",
        duration: "45:20",
        publishDate: "2024-02-09",
        listens: 8000000,
        audioUrl: "https://example.com/episode2.mp3"
      }
    ]
  },
  {
    id: 3,
    title: "SmartLess",
    host: "Jason Bateman, Will Arnett, Sean Hayes",
    coverImage: podcastCovers.smartLess,
    description: "A podcast that connects and unites people from all walks of life to learn about shared experiences.",
    category: "Comedy",
    episodes: [
      {
        id: 301,
        title: "Bradley Cooper",
        duration: "1:12:20",
        publishDate: "2024-02-08",
        listens: 5000000,
        audioUrl: "https://example.com/episode3.mp3"
      }
    ]
  },
  {
    id: 4,
    title: "How I Built This",
    host: "Guy Raz",
    coverImage: podcastCovers.howIBuiltThis,
    description: "Guy Raz dives into the stories behind some of the world's best known companies.",
    category: "Business",
    episodes: [
      {
        id: 401,
        title: "Airbnb: Brian Chesky",
        duration: "1:05:30",
        publishDate: "2024-02-07",
        listens: 3000000,
        audioUrl: "https://example.com/episode4.mp3"
      }
    ]
  },
  {
    id: 5,
    title: "Hardcore History",
    host: "Dan Carlin",
    coverImage: podcastCovers.hardcoreHistory,
    description: "In-depth analysis of historical events and fascinating stories from the past.",
    category: "Education",
    episodes: [
      {
        id: 501,
        title: "Supernova in the East VI",
        duration: "4:28:00",
        publishDate: "2024-02-06",
        listens: 2500000,
        audioUrl: "https://example.com/episode5.mp3"
      }
    ]
  },
  {
    id: 6,
    title: "Science Friday",
    host: "Ira Flatow",
    coverImage: podcastCovers.scienceFriday,
    description: "Brain fun for curious people: exploring the delights and complexities of science and technology.",
    category: "Technology",
    episodes: [
      {
        id: 601,
        title: "The Future of AI",
        duration: "47:15",
        publishDate: "2024-02-05",
        listens: 1800000,
        audioUrl: "https://example.com/episode6.mp3"
      }
    ]
  }
];

export const categories = [
  "Society & Culture",
  "True Crime",
  "Comedy",
  "News",
  "Sports",
  "Business",
  "Technology",
  "Health & Wellness",
  "Arts",
  "Education"
];

export const trending = [1, 2, 3, 4];