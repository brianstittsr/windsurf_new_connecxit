"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faTag } from "@fortawesome/free-solid-svg-icons";

interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  author: {
    name: string;
    imageUrl: string;
    bio: string;
  };
  publishedAt: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "How do I get started with event planning?",
    content: `
      Event planning can be an exciting and rewarding career path that combines creativity, organization, and people skills. For those looking to enter this dynamic field, there are several key areas to focus on as you begin your journey.

      First and foremost, developing essential skills is crucial for success in event planning. The most successful event planners possess strong organizational abilities, excellent communication skills, and meticulous attention to detail. These foundational skills are complemented by problem-solving capabilities, time management expertise, and budget management proficiency. Each of these skills plays a vital role in executing successful events and building a strong reputation in the industry.

      Education and certifications can significantly boost your credibility and expertise. While not always mandatory, certifications such as the Certified Meeting Professional (CMP), Certified Special Events Professional (CSEP), or Certified Event Planning Specialist (CEPS) can demonstrate your commitment to the profession and provide valuable knowledge. These programs often cover essential topics like event design, risk management, and vendor relations.

      Networking is another crucial aspect of building a successful event planning career. The events industry is heavily relationship-driven, and building a strong professional network can open doors to opportunities and resources. Consider joining professional associations, attending industry events, and connecting with vendors and suppliers. Social media platforms can also be valuable tools for following industry leaders and staying current with trends and best practices.

      When starting out, it's advisable to begin with smaller events to build your portfolio and gain hands-on experience. Consider volunteering for local events, planning gatherings for friends and family, or assisting established event planners. Document everything with photos and collect testimonials from satisfied clients. These early experiences will provide valuable learning opportunities and help you develop your unique style and approach to event planning.

      Understanding the business side of event planning is equally important as the creative aspects. This includes developing knowledge of pricing strategies, contract management, insurance requirements, marketing and promotion, and client relations. Success in event planning requires a balance of artistic vision and practical business acumen.

      Remember that building a successful event planning career takes time and patience. Each event you plan is an opportunity to learn and grow, developing your skills and expanding your network. Stay curious, remain open to feedback, and continuously seek ways to improve your craft. With dedication and persistence, you can build a fulfilling career in this dynamic and rewarding field.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
    category: "Event Planning",
    author: {
      name: "Sarah Johnson",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
      bio: "Professional event planner with over 10 years of experience in corporate and social events.",
    },
    publishedAt: "2025-02-01",
  },
  {
    id: 2,
    title: "What are the best venues in the area?",
    content: `
      Selecting the perfect venue is one of the most critical decisions in event planning, as it sets the foundation for the entire event experience. The right venue not only provides the physical space for your event but also contributes significantly to its atmosphere and success. Understanding the different types of venues available and their unique characteristics can help you make an informed decision that aligns with your event's goals and requirements.

      Hotels and conference centers represent one of the most popular venue categories, offering a comprehensive package of amenities and services. These venues typically provide professional staff, built-in catering services, and multiple room options to accommodate various event sizes. One of the major advantages of hotel venues is the convenience they offer for out-of-town guests, who can stay at the same location as the event. The staff at these venues are also experienced in handling various types of events, which can make the planning process smoother.

      Historic buildings and museums offer a unique alternative for those seeking a venue with character and cultural significance. These venues often feature stunning architecture and built-in décor that can reduce the need for additional decorations. They provide natural photo opportunities and can add an element of sophistication and elegance to any event. However, it's important to note that historic venues may have specific preservation requirements or restrictions that need to be considered during planning.

      Outdoor spaces present yet another exciting option, with gardens, parks, beachfront locations, and rooftop venues offering natural beauty and open-air ambiance. These venues can be particularly appealing for events during pleasant weather seasons and can provide stunning backdrops for photography. However, weather contingency plans are essential when considering outdoor venues, and additional rentals like tents, portable restrooms, or climate control equipment may be necessary.

      When evaluating potential venues, several key factors should be carefully considered. Location and accessibility are paramount - the venue should be easily reachable for your guests, with adequate parking facilities and proximity to public transportation when possible. Handicap accessibility is also crucial to ensure all guests can comfortably attend your event. For out-of-town guests, consider the venue's proximity to hotels and local attractions.

      The venue's capacity and layout deserve careful attention as well. The space should comfortably accommodate your guest count while allowing for proper flow between different areas. Consider whether the venue offers flexibility in terms of room configurations and whether there's adequate space for all planned activities. Setup and breakdown time requirements should also be discussed with the venue management to ensure smooth logistics.

      Finally, take stock of the venue's amenities and services. Does the venue provide audio/visual equipment, or will you need to rent it separately? Are there restrictions on catering options? What furniture and décor are included? Understanding these details will help you better plan your budget and logistics. Always request a detailed list of included services and any restrictions or additional fees that may apply.

      Remember that the perfect venue is one that not only meets your practical requirements but also aligns with your event's vision and atmosphere. Take the time to visit multiple venues in person, ask detailed questions, and imagine how your event would flow in each space. Your choice of venue will play a crucial role in creating memorable experiences for your guests.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    category: "Venues",
    author: {
      name: "Michael Chen",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      bio: "Venue coordinator specializing in luxury events and corporate functions.",
    },
    publishedAt: "2025-02-02",
  },
  {
    id: 3,
    title: "How to market your event effectively?",
    content: `
      In today's digital age, effective event marketing requires a sophisticated blend of both digital and traditional marketing strategies. A well-planned marketing campaign can significantly boost attendance, engagement, and overall event success. Understanding how to leverage various marketing channels and create compelling content is key to reaching and attracting your target audience.

      Digital marketing has become the cornerstone of successful event promotion, with social media playing a particularly crucial role. Platforms like Instagram, Facebook, LinkedIn, and Twitter offer powerful tools for reaching potential attendees where they already spend their time. Creating engaging content across these platforms helps build excitement and anticipation for your event. Use event-specific hashtags to track conversations and encourage user-generated content. Behind-the-scenes content can give potential attendees a glimpse into the event planning process and build anticipation. Paid social media advertising can help extend your reach to specifically targeted audiences who are most likely to be interested in your event.

      Email marketing remains one of the most effective tools for event promotion, offering direct communication with potential attendees. Building and maintaining a quality email list is crucial for success in this area. Create compelling newsletters that provide value beyond just event information, such as industry insights or exclusive content. Automated email sequences can help nurture potential attendees through the decision-making process, while personalized communications can make recipients feel more connected to your event. Tracking metrics like open rates and click-through rates can help you refine your email strategy over time.

      Content marketing serves as a powerful way to build authority and generate interest in your event. This can include blog posts about the event theme, video content featuring speakers or previous events, podcast episodes discussing relevant topics, and informative infographics that highlight key event features. All content should be optimized for search engines to improve visibility and attract organic traffic. Regular content updates can keep your event top-of-mind for potential attendees and provide valuable information that helps them make the decision to attend.

      While digital marketing dominates modern event promotion, traditional marketing methods still play a valuable role in a comprehensive marketing strategy. Print materials like posters, flyers, and brochures can be effective, particularly for local events or when targeting specific communities. Professional design is crucial for these materials to ensure they capture attention and effectively communicate your event's value proposition. Strategic placement of these materials in relevant locations can help reach your target audience effectively.

      Partnership marketing can significantly expand your event's reach and credibility. Collaborating with sponsors, cross-promoting with complementary events, and working with local businesses can help you tap into established audiences. Engaging industry influencers can also provide valuable exposure and credibility for your event. Consider developing affiliate programs that incentivize partners to promote your event to their networks.

      Throughout your marketing efforts, it's essential to maintain consistent messaging and branding across all channels while adapting the content format and tone to suit each platform's unique characteristics. Regular monitoring and analysis of your marketing efforts can help you identify what's working and what needs adjustment. Pay attention to metrics like ticket sales, website traffic, social media engagement, and email response rates to optimize your marketing strategy continuously.

      Remember that successful event marketing is not just about promoting the event itself, but about creating a compelling narrative that resonates with your target audience. Focus on communicating the value and unique aspects of your event that set it apart from others. By combining various marketing channels and consistently measuring and adjusting your efforts, you can create an effective marketing campaign that drives attendance and engagement for your event.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1200&auto=format&fit=crop",
    category: "Marketing",
    author: {
      name: "Emily Davis",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      bio: "Digital marketing specialist with expertise in event promotion and social media strategy.",
    },
    publishedAt: "2025-02-03",
  },
];

export default function ArticlePage() {
  const params = useParams();
  const article = articles.find((a) => a.id === Number(params.id));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            Article not found
          </h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 w-full mb-8">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
              <time>{article.publishedAt}</time>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTag} className="w-4 h-4 mr-2" />
              <span>{article.category}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image
                src={article.author.imageUrl}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-4 h-4 mr-2 text-gray-600"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {article.author.name}
                </h3>
              </div>
              <p className="text-gray-600">{article.author.bio}</p>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
