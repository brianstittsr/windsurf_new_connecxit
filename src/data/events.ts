export interface Event {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  description: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
  };
  organizer: {
    name: string;
    image: string;
    followers: number;
    description: string;
    totalEvents: number;
    isFollowing: boolean;
  };
  ticketInfo: {
    type: string;
    price: string;
    minQuantity?: number;
    maxQuantity?: number;
  };
  duration: string;
  videoUrl: string;
  tags: string[];
}

export interface TrendingEvent extends Event {
  rank: number;
}

export interface RelatedEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: {
    venue?: string;
    city: string;
    state: string;
  };
  price: string;
  imageUrl: string;
  organizer: {
    name: string;
    followers: number;
  };
}

export const moreEvents: Event[] = [
  {
    id: "wise-women-leo-full-moon",
    title: "Wise∞Women Leo Full Moon Interdependence Activation",
    subtitle: "Spiritual Workshop",
    date: "Wed, Feb 12",
    time: "5:00 PM EST",
    location: {
      name: "Joy Whisperer/Astrologer Aliah Selah",
      address: "123 Main St, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop",
    organizer: {
      name: "Joy Whisperer/Astrologer Aliah Selah",
      followers: 562,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Professional Astrologer and Joy Whisperer",
      totalEvents: 15,
      isFollowing: false,
    },
    description: "Join us for a transformative Leo Full Moon experience",
    duration: "2 hours",
    videoUrl: "",
    tags: ["Astrology", "Wellness", "Spiritual"],
  },
  {
    id: "google-ads-2025",
    title: "Unlock the Power of Google Ads in 2025: Maximize Your...",
    subtitle: "Digital Marketing Workshop",
    date: "Thu, Feb 13",
    time: "12:00 PM EST",
    location: {
      name: "SEO Training Courses by BSM",
      address: "456 Digital Ave, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "Webinar",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
    organizer: {
      name: "SEO Training Courses by BSM",
      followers: 1300,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Leading Digital Marketing Training Provider",
      totalEvents: 45,
      isFollowing: false,
    },
    description: "Master Google Ads in this comprehensive webinar",
    duration: "1.5 hours",
    videoUrl: "",
    tags: ["Marketing", "Digital", "Business"],
  },
  {
    id: "charlotte-brewsology-2025",
    title: "2025 Charlotte Brewsology",
    subtitle: "Science & Beer Festival",
    date: "Sat, Feb 22",
    time: "6:00 PM",
    location: {
      name: "Discovery Place",
      address: "301 N Tryon St, Charlotte, NC",
    },
    ticketInfo: {
      price: "From $45.00",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&auto=format&fit=crop",
    organizer: {
      name: "Discovery Place",
      followers: 15600,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Science Museum and Event Venue",
      totalEvents: 120,
      isFollowing: false,
    },
    description: "Explore the science of brewing at this unique event",
    duration: "4 hours",
    videoUrl: "",
    tags: ["Science", "Beer", "Entertainment"],
  },
  {
    id: "charlotte-ballet-cinderella",
    title: "Charlotte Ballet: Cinderella",
    subtitle: "Classical Ballet Performance",
    date: "Fri, Mar 8",
    time: "7:30 PM",
    location: {
      name: "Belk Theater",
      address: "130 N Tryon St, Charlotte, NC",
    },
    ticketInfo: {
      price: "From $25.00",
      type: "Reserved Seating",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1516741567831-3c135244163d?w=800&auto=format&fit=crop",
    organizer: {
      name: "Charlotte Ballet",
      followers: 8900,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Professional Ballet Company",
      totalEvents: 35,
      isFollowing: false,
    },
    description:
      "Experience the magic of Cinderella performed by Charlotte Ballet",
    duration: "2.5 hours",
    videoUrl: "",
    tags: ["Dance", "Ballet", "Arts"],
  },
  {
    id: "charlotte-wine-fest",
    title: "Charlotte Wine and Food Festival",
    subtitle: "Food & Wine Festival",
    date: "Sat, Apr 20",
    time: "2:00 PM",
    location: {
      name: "Truist Field",
      address: "324 S Mint St, Charlotte, NC",
    },
    ticketInfo: {
      price: "From $65.00",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop",
    organizer: {
      name: "Charlotte Wine & Food",
      followers: 4500,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Premier Food and Wine Event Organizer",
      totalEvents: 25,
      isFollowing: false,
    },
    description: "Savor the finest wines and culinary delights",
    duration: "5 hours",
    videoUrl: "",
    tags: ["Food", "Wine", "Festival"],
  },
];

export const eventsUnder: Event[] = [
  {
    id: "detours-storyslam",
    title: "Detours StorySLAM",
    subtitle: "Live Storytelling Event",
    date: "Thursday",
    time: "7:30 PM",
    location: {
      name: "Motorco Music Hall",
      address: "723 Rigsbee Ave, Durham, NC",
    },
    ticketInfo: {
      price: "From $14.64",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&auto=format&fit=crop",
    organizer: {
      name: "The Monti",
      followers: 245,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Live Storytelling Organization",
      totalEvents: 12,
      isFollowing: false,
    },
    description: "Join us for an evening of live storytelling",
    duration: "2 hours",
    videoUrl: "",
    tags: ["Entertainment", "Stories", "Live Events"],
  },
  {
    id: "charlotte-vintage-market",
    title: "Charlotte Vintage Market",
    subtitle: "Vintage Shopping Event",
    date: "Saturday",
    time: "10:00 AM",
    location: {
      name: "Camp North End",
      address: "1824 Statesville Ave, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1531751519425-e6c4d0d79f8c?w=800&auto=format&fit=crop",
    organizer: {
      name: "Charlotte Vintage",
      followers: 795,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Vintage Market Organizer",
      totalEvents: 24,
      isFollowing: false,
    },
    description:
      "Shop unique vintage finds at Charlottes largest vintage market",
    duration: "6 hours",
    videoUrl: "",
    tags: ["Shopping", "Vintage", "Market"],
  },
  {
    id: "wine-and-design",
    title: "Wine & Design: Paint Night",
    subtitle: "Paint & Sip Workshop",
    date: "Friday",
    time: "6:00 PM",
    location: {
      name: "Wine & Design Charlotte",
      address: "1419 East Blvd, Charlotte, NC",
    },
    ticketInfo: {
      price: "$25.00",
      type: "Workshop",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&auto=format&fit=crop",
    organizer: {
      name: "Wine & Design",
      followers: 1200,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Paint and Sip Studio",
      totalEvents: 156,
      isFollowing: false,
    },
    description: "Enjoy a relaxing evening of painting and wine",
    duration: "2 hours",
    videoUrl: "",
    tags: ["Art", "Wine", "Workshop"],
  },
  {
    id: "trivia-night",
    title: "Trivia Night at Wooden Robot",
    subtitle: "Pub Quiz Night",
    date: "Wednesday",
    time: "7:00 PM",
    location: {
      name: "Wooden Robot Brewery",
      address: "1440 S Tryon St #110, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=800&auto=format&fit=crop",
    organizer: {
      name: "Wooden Robot",
      followers: 3500,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Local Craft Brewery",
      totalEvents: 52,
      isFollowing: false,
    },
    description: "Test your knowledge at our weekly trivia night",
    duration: "2 hours",
    videoUrl: "",
    tags: ["Entertainment", "Beer", "Trivia"],
  },
  {
    id: "comedy-open-mic",
    title: "Comedy Open Mic Night",
    subtitle: "Stand-up Comedy Event",
    date: "Monday",
    time: "8:00 PM",
    location: {
      name: "The Comedy Zone",
      address: "900 NC Music Factory Blvd, Charlotte, NC",
    },
    ticketInfo: {
      price: "$10.00",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1585422544771-75e335288cf2?w=800&auto=format&fit=crop",
    organizer: {
      name: "The Comedy Zone",
      followers: 4200,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Premier Comedy Club",
      totalEvents: 365,
      isFollowing: false,
    },
    description: "Laugh out loud at Charlotte's best comedy open mic",
    duration: "3 hours",
    videoUrl: "",
    tags: ["Comedy", "Entertainment", "Live Events"],
  },
];

export const trendingEvents: TrendingEvent[] = [
  {
    id: "charlotte-job-fair-2025",
    rank: 1,
    title: "Charlotte Job Fair February 5, 2025 - Charlotte Career Fair",
    subtitle: "Career Fairs & Hiring Events",
    date: "Tomorrow",
    time: "11:00 AM",
    location: {
      name: "Hilton Charlotte University Place",
      address: "8629 JM Keynes Dr, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    organizer: {
      name: "BestHire Career Fairs",
      followers: 37900,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Leading Career Fair Organizer",
      totalEvents: 250,
      isFollowing: false,
    },
    description: "Connect with top employers at Charlotte's premier job fair",
    duration: "4 hours",
    videoUrl: "",
    tags: ["Career", "Job Fair", "Professional"],
  },
  {
    id: "kevonstage-back-pew-tour",
    rank: 2,
    title: "KevOnStage Back Pew Tour FAYETTEVILLE",
    subtitle: "Comedy Tour",
    date: "Friday",
    time: "7:30 PM",
    location: {
      name: "John D Fuller Sr. Recreational/Athletic Complex",
      address: "6627 Old Bunce Rd, Fayetteville, NC",
    },
    ticketInfo: {
      price: "From $41.86",
      type: "Reserved Seating",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1585422544771-75e335288cf2?w=800&auto=format&fit=crop",
    organizer: {
      name: "KevOnStage",
      followers: 5000,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Comedian and Content Creator",
      totalEvents: 45,
      isFollowing: false,
    },
    description: "Join KevOnStage for a night of hilarious comedy",
    duration: "2 hours",
    videoUrl: "",
    tags: ["Comedy", "Tour", "Entertainment"],
  },
  {
    id: "kate-bowler-life-after-perfect",
    rank: 3,
    title: "Kate Bowler: Life After Perfect",
    subtitle: "Author Talk & Book Signing",
    date: "Thu, Feb 15",
    time: "7:00 PM EST",
    location: {
      name: "Park Road Books",
      address: "4139 Park Rd, Charlotte, NC",
    },
    ticketInfo: {
      price: "From $28.00",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
    organizer: {
      name: "Park Road Books",
      followers: 2890,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Independent Bookstore",
      totalEvents: 120,
      isFollowing: false,
    },
    description: "Join author Kate Bowler for a discussion of her new book",
    duration: "1.5 hours",
    videoUrl: "",
    tags: ["Books", "Author Talk", "Literature"],
  },
  {
    id: "wise-women-leo-full-moon",
    rank: 4,
    title: "Wise∞Women Leo Full Moon Interdependence Activation",
    subtitle: "Spiritual Workshop",
    date: "Wed, Feb 12",
    time: "5:00 PM EST",
    location: {
      name: "Joy Whisperer/Astrologer Aliah Selah",
      address: "789 Spirit Way, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "General Admission",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop",
    organizer: {
      name: "Joy Whisperer/Astrologer Aliah Selah",
      followers: 562,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Professional Astrologer and Joy Whisperer",
      totalEvents: 15,
      isFollowing: false,
    },
    description: "Experience a transformative Leo Full Moon workshop",
    duration: "2 hours",
    videoUrl: "",
    tags: ["Spiritual", "Astrology", "Workshop"],
  },
  {
    id: "google-ads-2025",
    rank: 5,
    title:
      "Unlock the Power of Google Ads in 2025: Maximize Your Digital Marketing ROI",
    subtitle: "Digital Marketing Workshop",
    date: "Thu, Feb 13",
    time: "12:00 PM EST",
    location: {
      name: "SEO Training Courses by BSM",
      address: "456 Digital Ave, Charlotte, NC",
    },
    ticketInfo: {
      price: "Free",
      type: "Webinar",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
    organizer: {
      name: "SEO Training Courses by BSM",
      followers: 1300,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      description: "Leading Digital Marketing Training Provider",
      totalEvents: 45,
      isFollowing: false,
    },
    description: "Master Google Ads in this comprehensive webinar",
    duration: "1.5 hours",
    videoUrl: "",
    tags: ["Marketing", "Digital", "Business"],
  },
];

export const events: Record<string, Event> = {
  "kate-bowler-life-after-perfect": {
    id: "kate-bowler-life-after-perfect",
    title: "Kate Bowler: Life After Perfect",
    subtitle: "Author Talk & Book Signing",
    backgroundImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
    description:
      "Join New York Times bestselling author Kate Bowler for an evening of honest conversation about life, faith, and finding peace in the midst of uncertainty. Kate will share insights from her journey and new book, discussing how to embrace life's imperfections and find meaning in the midst of life's challenges.",
    date: "Thu, Feb 15",
    time: "7:00 PM EST",
    location: {
      name: "Park Road Books",
      address: "4139 Park Rd, Charlotte, NC 28209",
    },
    organizer: {
      name: "Park Road Books",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&auto=format&fit=crop",
      followers: 2890,
      description:
        "Charlotte's premier independent bookstore, hosting author events and fostering community through literature since 1977.",
      totalEvents: 156,
      isFollowing: false,
    },
    ticketInfo: {
      type: "General Admission",
      price: "From $28.00",
      minQuantity: 1,
      maxQuantity: 8,
    },
    duration: "1.5 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: [
      "Author Event",
      "Book Signing",
      "Spirituality",
      "Self-Help",
      "Memoir",
    ],
  },
  "wise-women-leo-full-moon": {
    id: "wise-women-leo-full-moon",
    title: "Wise∞Women Leo Full Moon Interdependence Activation",
    subtitle: "Spiritual & Wellness",
    backgroundImage:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop",
    description:
      "Join us for a transformative evening of lunar magic and spiritual connection. This special gathering focuses on the powerful Leo Full Moon energy, exploring themes of interdependence, self-expression, and collective consciousness.",
    date: "Wed, Feb 12",
    time: "5:00 PM EST",
    location: {
      name: "Joy Whisperer/Astrologer Aliah Selah",
      address: "123 Spiritual Way, Charlotte, NC 28202",
    },
    organizer: {
      name: "Joy Whisperer/Astrologer Aliah Selah",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
      followers: 562,
      description:
        "Dedicated to spiritual growth and conscious living through astrology and mindfulness practices.",
      totalEvents: 45,
      isFollowing: false,
    },
    ticketInfo: {
      type: "General Admission",
      price: "Free",
      minQuantity: 1,
      maxQuantity: 4,
    },
    duration: "2 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Spiritual", "Wellness", "Astrology", "Full Moon", "Meditation"],
  },
  "google-ads-2025": {
    id: "google-ads-2025",
    title:
      "Unlock the Power of Google Ads in 2025: Maximize Your Digital Marketing ROI",
    subtitle: "Business & Professional",
    backgroundImage:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
    description:
      "Learn the latest strategies and best practices for Google Ads in 2025. This comprehensive workshop will cover advanced targeting, automation features, and optimization techniques to help you achieve better results from your digital marketing campaigns.",
    date: "Thu, Feb 13",
    time: "12:00 PM EST",
    location: {
      name: "SEO Training Courses by BSM",
      address: "456 Digital Drive, Charlotte, NC 28203",
    },
    organizer: {
      name: "SEO Training Courses by BSM",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
      followers: 1300,
      description:
        "Leading provider of digital marketing education and certification programs.",
      totalEvents: 250,
      isFollowing: false,
    },
    ticketInfo: {
      type: "Workshop Access",
      price: "Free",
      minQuantity: 1,
      maxQuantity: 2,
    },
    duration: "2 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: [
      "Digital Marketing",
      "Google Ads",
      "SEO",
      "Professional Development",
      "Workshop",
    ],
  },
  "charlotte-job-fair-2025": {
    id: "charlotte-job-fair-2025",
    title: "Charlotte Job Fair February 5, 2025 - Charlotte Career Fair",
    subtitle: "Career Fairs & Hiring Events",
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    description:
      "Looking for a job in Charlotte? Join us at the highly anticipated Charlotte Job Fair! Meet with top hiring companies in Charlotte and explore exciting career opportunities. Best Hire Career Fairs has a proven track record of connecting talented professionals with leading employers.",
    date: "Tomorrow",
    time: "11:00 AM",
    location: {
      name: "Hilton Charlotte University Place",
      address: "8629 J M Keynes Drive Charlotte, NC 28262",
    },
    organizer: {
      name: "BestHire Career Fairs",
      image:
        "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=200&auto=format&fit=crop",
      followers: 37900,
      description:
        "Best Hire Career Fairs has a proven track record of organizing exceptional hiring events nationwide for the past seven years.",
      totalEvents: 324,
      isFollowing: false,
    },
    ticketInfo: {
      type: "General Admission",
      price: "Free",
      minQuantity: 1,
      maxQuantity: 4,
    },
    duration: "3 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: [
      "Career Fair",
      "Job Fair",
      "Charlotte",
      "North Carolina",
      "Employment",
      "Hiring",
    ],
  },
  "kevonstage-back-pew-tour": {
    id: "kevonstage-back-pew-tour",
    title: "KevOnStage Back Pew Tour FAYETTEVILLE",
    subtitle: "Comedy Tour",
    backgroundImage:
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=800&auto=format&fit=crop",
    description:
      "Join KevOnStage for a night of laughter and entertainment on his Back Pew Tour! Known for his hilarious takes on church culture and everyday life, KevOnStage brings his unique brand of comedy to Fayetteville.",
    date: "Friday",
    time: "7:30 PM",
    location: {
      name: "John D Fuller Sr. Recreational/Athletic Complex",
      address: "6627 Old Bunce Road, Fayetteville, NC 28314",
    },
    organizer: {
      name: "KevOnStage",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
      followers: 5000,
      description:
        "KevOnStage is a comedian, actor, and content creator known for his viral videos and stand-up comedy.",
      totalEvents: 156,
      isFollowing: false,
    },
    ticketInfo: {
      type: "General Admission",
      price: "From $41.86",
      minQuantity: 1,
      maxQuantity: 6,
    },
    duration: "2 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Comedy", "Stand-up", "Tour", "Entertainment", "Live Show"],
  },
  "charlotte-vintage-market": {
    id: "charlotte-vintage-market",
    title: "The Charlotte Vintage Market at Queen Park Social",
    subtitle: "Shopping & Markets",
    backgroundImage:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop",
    description:
      "Discover unique vintage treasures at The Charlotte Vintage Market! Browse through a carefully curated selection of vintage clothing, accessories, home decor, and more. Meet local vendors and fellow vintage enthusiasts in a fun, social atmosphere.",
    date: "Saturday",
    time: "12:00 PM",
    location: {
      name: "Queen Park Social",
      address: "Yancey Road, Charlotte, NC",
    },
    organizer: {
      name: "Charlotte Vintage Market",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
      followers: 795,
      description:
        "Charlotte Vintage Market organizes regular vintage shopping events featuring local vendors and unique finds.",
      totalEvents: 48,
      isFollowing: false,
    },
    ticketInfo: {
      type: "General Admission",
      price: "Free",
      minQuantity: 1,
      maxQuantity: 4,
    },
    duration: "6 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Vintage", "Shopping", "Market", "Social", "Charlotte"],
  },
  "detours-storyslam": {
    id: "detours-storyslam",
    title: "Detours StorySLAM",
    subtitle: "Storytelling Event",
    backgroundImage:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&auto=format&fit=crop",
    description:
      "Experience an evening of live storytelling at Detours StorySLAM! Listen to true stories told live, without notes, about life's detours and unexpected journeys. Want to share your story? Put your name in the hat!",
    date: "Thursday",
    time: "7:30 PM",
    location: {
      name: "Motorco Music Hall",
      address: "723 Rigsbee Ave, Durham, NC 27701",
    },
    organizer: {
      name: "The Monti",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&auto=format&fit=crop",
      followers: 245,
      description:
        "The Monti produces live storytelling events throughout North Carolina, creating community through shared experiences.",
      totalEvents: 89,
      isFollowing: false,
    },
    ticketInfo: {
      type: "General Admission",
      price: "From $14.64",
    },
    duration: "2.5 hours",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Storytelling", "Live Event", "Performance", "Arts", "Durham"],
  },
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  // Check main events object first
  if (events[id]) {
    return events[id];
  }

  // Check trending events
  const trendingEvent = trendingEvents.find((e) => e.id === id);
  if (trendingEvent) {
    // Pick only Event fields
    return {
      id: trendingEvent.id,
      title: trendingEvent.title,
      subtitle: trendingEvent.subtitle,
      backgroundImage: trendingEvent.backgroundImage,
      description: trendingEvent.description,
      date: trendingEvent.date,
      time: trendingEvent.time,
      location: trendingEvent.location,
      organizer: trendingEvent.organizer,
      ticketInfo: trendingEvent.ticketInfo,
      duration: trendingEvent.duration,
      videoUrl: trendingEvent.videoUrl,
      tags: trendingEvent.tags,
    };
  }

  // Check events under $30
  const underEvent = eventsUnder.find((e) => e.id === id);
  if (underEvent) {
    return underEvent;
  }

  // Check more events
  const moreEvent = moreEvents.find((e) => e.id === id);
  if (moreEvent) {
    return moreEvent;
  }

  return undefined;
};

export const getRelatedEvents = async (
  eventId: string,
): Promise<RelatedEvent[]> => {
  const currentEvent = events[eventId];
  if (!currentEvent) return [];

  return Object.values(events)
    .filter((event) => event.id !== eventId)
    .map((event) => ({
      id: event.id,
      title: event.title,
      date: event.date,
      time: event.time,
      location: {
        city: event.location.name.split(",")[0],
        state: "NC",
      },
      price: event.ticketInfo.price,
      imageUrl: event.backgroundImage,
      organizer: {
        name: event.organizer.name,
        followers: event.organizer.followers,
      },
    }))
    .slice(0, 3);
};
