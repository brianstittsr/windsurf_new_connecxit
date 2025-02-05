/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function MichaelChenBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
          alt="Michael Chen"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Michael Chen</h1>
          <p className="text-xl">Raleigh's Corporate Event Innovation Leader</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">At a Glance</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="font-medium text-gray-500">Location</dt>
              <dd className="text-gray-900">Raleigh, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Corporate Events</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">12+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Annual Events</dt>
              <dd className="text-gray-900">50+</dd>
            </div>
          </dl>
        </div>

        <h2>From Tech to Events: A Story of Innovation</h2>
        <p>
          Michael Chen's journey into corporate event planning began in Silicon Valley, where he worked as a product manager for a leading tech company. His experience organizing product launches and tech conferences revealed his natural talent for event coordination and sparked a passion that would reshape his career.
        </p>

        <p>
          After relocating to Raleigh's thriving tech hub in 2011, Michael founded Chen Corporate Events, bringing Silicon Valley's innovative approach to North Carolina's business events scene. "I saw an opportunity to blend traditional corporate events with the dynamic, interactive elements I experienced in the tech world," he explains.
        </p>

        <h2>Revolutionizing Corporate Events</h2>
        <p>
          Michael's tech background influences every event he plans. He's known for incorporating cutting-edge technology into traditional corporate gatherings, from using AR for product demonstrations to implementing AI-powered networking solutions. His events are designed to be both professionally productive and genuinely engaging.
        </p>

        <p>
          "Corporate events shouldn't be boring," Michael insists. "They should inspire innovation, facilitate meaningful connections, and drive business growth." This philosophy has attracted clients ranging from Research Triangle startups to Fortune 500 companies.
        </p>

        <h2>Notable Achievements</h2>
        <ul>
          <li>Organized the annual Triangle Tech Summit (1000+ attendees)</li>
          <li>Pioneered hybrid event solutions during the pandemic</li>
          <li>Named "Top Business Event Planner" by Triangle Business Journal</li>
          <li>Advisory board member for the Raleigh Convention Center</li>
        </ul>

        <h2>The Evolution of Corporate Events in NC</h2>
        <p>
          Michael sees North Carolina's corporate event landscape evolving rapidly. "The Triangle's growth as a tech hub is transforming how companies approach events," he observes. "We're seeing increased demand for events that combine professional development with meaningful networking opportunities."
        </p>

        <p>
          Looking ahead, he predicts a shift toward more personalized, data-driven events. "The future of corporate events lies in creating customized experiences that align with both company objectives and attendee preferences. We're using data analytics to understand participant behavior and optimize event design."
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Michael's Event Planning Principles</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technology should enhance, not overshadow, human connection</li>
            <li>Every event should have clear, measurable objectives</li>
            <li>Sustainability should be a priority in event planning</li>
            <li>Create opportunities for spontaneous networking</li>
          </ul>
        </div>

        <h2>Sustainability Focus</h2>
        <p>
          Michael is also leading the charge in sustainable corporate events. His company has implemented a comprehensive green events program, which includes digital-first communications, partnerships with local sustainable vendors, and waste reduction strategies.
        </p>

        <h2>Connect with Michael</h2>
        <p>
          For corporate event inquiries or consulting services, contact Michael's team at their downtown Raleigh office or through their online booking platform. They specialize in conferences, product launches, corporate retreats, and team-building events.
        </p>
      </div>
    </article>
  );
}
