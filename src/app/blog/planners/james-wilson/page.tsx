/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function JamesWilsonBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
          alt="James Wilson"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">James Wilson</h1>
          <p className="text-xl">Cary's Festival Planning Pioneer</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            At a Glance
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="font-medium text-gray-500">Location</dt>
              <dd className="text-gray-900">Cary, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Festival Planning</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">16+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Annual Festivals</dt>
              <dd className="text-gray-900">20+</dd>
            </div>
          </dl>
        </div>

        <h2>From Music to Festival Management</h2>
        <p>
          James Wilson&apos;s path to festival planning began on stage, not
          behind the scenes. As a former musician who toured with several indie
          bands, James gained firsthand experience of what makes festivals
          successful – and what makes them fail. This unique perspective would
          later become the foundation of his approach to festival planning.
        </p>

        <p>
          &quot;After years of performing at festivals across the country, I
          realized there was an opportunity to create better experiences for
          both artists and attendees,&quot; James recalls. In 2009, he founded
          Wilson Festival Productions in Cary, bringing a performer&apos;s
          insight to event organization.
        </p>

        <h2>A Revolutionary Approach</h2>
        <p>
          James&apos;s background as a performer influences every festival he
          plans. He&apos;s known for creating events that balance the needs of
          performers, vendors, and attendees while maintaining a smooth
          operational flow. His festivals are recognized for their exceptional
          organization and attention to the attendee experience.
        </p>

        <h2>Signature Festivals</h2>
        <ul>
          <li>Cary Summer Music Festival</li>
          <li>Triangle Food & Wine Celebration</li>
          <li>NC Makers Market Festival</li>
          <li>Downtown Arts Festival Series</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Festival Planning Essentials
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create multiple engagement points throughout the venue</li>
            <li>Design intuitive traffic flow patterns</li>
            <li>Implement robust contingency plans</li>
            <li>Focus on attendee comfort and convenience</li>
          </ul>
        </div>

        <h2>The Future of Festivals in North Carolina</h2>
        <p>
          James sees exciting developments ahead for North Carolina&apos;s
          festival scene. &quot;Our state&apos;s diverse culture and growing
          population are creating opportunities for more specialized and unique
          festival concepts,&quot; he notes. &quot;We&apos;re moving beyond
          traditional music and food festivals to create more immersive, themed
          experiences.&quot;
        </p>

        <p>
          He predicts a trend toward more sustainable, technology-enhanced
          festivals that maintain a strong community focus. &quot;The future of
          festivals lies in creating experiences that are both locally relevant
          and globally inspired,&quot; he explains.
        </p>

        <h2>Innovation in Festival Planning</h2>
        <p>
          James has pioneered several innovations in festival management,
          including a mobile app for real-time crowd flow monitoring and a
          vendor management system that's become an industry standard. His team
          also developed sustainable practices that have reduced festival waste
          by over 60%.
        </p>

        <h2>Notable Achievements</h2>
        <ul>
          <li>Winner of "Best Festival Series" by NC Events Magazine</li>
          <li>Created the state's first zero-waste festival model</li>
          <li>Advisory board member for the NC Festival Association</li>
          <li>Author of "The Festival Planning Handbook"</li>
        </ul>

        <h2>Connect with James</h2>
        <p>
          For festival planning consultation or to discuss event opportunities,
          contact James and his team at their Cary office. They specialize in
          music festivals, cultural celebrations, food and beverage events, and
          artisan markets.
        </p>
      </div>
    </article>
  );
}
