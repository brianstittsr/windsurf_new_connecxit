/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function SophiaLeeBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop"
          alt="Sophia Lee"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Sophia Lee</h1>
          <p className="text-xl">Wilmington's Tech Conference Innovator</p>
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
              <dd className="text-gray-900">Wilmington, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Tech Conferences</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">9+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Annual Conferences</dt>
              <dd className="text-gray-900">15+</dd>
            </div>
          </dl>
        </div>

        <h2>From Software Engineer to Tech Event Maven</h2>
        <p>
          Sophia Lee's journey to becoming a leading tech conference organizer
          began in the trenches of software development. With a Computer Science
          degree from NC State and five years of experience as a software
          engineer at major tech companies, Sophia understood firsthand the
          importance of well-organized tech conferences.
        </p>

        <p>
          "I attended countless tech conferences that were either too technical
          or not technical enough," Sophia explains. "I saw an opportunity to
          create events that could truly bridge the gap between different tech
          communities." This insight led to the founding of Lee Tech Events in
          2016.
        </p>

        <h2>Tech-Forward Event Planning</h2>
        <p>
          Sophia's technical background gives her a unique advantage in planning
          tech conferences. She understands the needs of both developers and
          business stakeholders, creating events that facilitate meaningful
          knowledge exchange and networking opportunities.
        </p>

        <h2>Signature Events</h2>
        <ul>
          <li>Coastal Tech Summit</li>
          <li>Women in Tech Leadership Conference</li>
          <li>DevOps Deep Dive Series</li>
          <li>StartUp Showcase Weekend</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Tech Conference Best Practices
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Balance technical and business content</li>
            <li>Incorporate hands-on workshops</li>
            <li>Provide networking opportunities</li>
            <li>Ensure reliable tech infrastructure</li>
          </ul>
        </div>

        <h2>The Future of Tech Conferences in North Carolina</h2>
        <p>
          Sophia sees North Carolina emerging as a major tech conference
          destination. "With our growing tech hubs and beautiful coastal
          location, we're perfectly positioned to host world-class tech events,"
          she notes. "The rise of hybrid events has also opened new
          possibilities for reaching global audiences while maintaining local
          impact."
        </p>

        <p>
          She predicts a trend toward more specialized, focused tech
          conferences. "The future isn't just about big general tech
          conferences, but targeted events that dive deep into specific
          technologies or industries," she explains.
        </p>

        <h2>Innovation in Conference Planning</h2>
        <p>
          Sophia has pioneered several innovative conference features, including
          an AI-powered networking system that matches attendees based on their
          interests and goals. She's also developed a hybrid event platform that
          creates seamless experiences for both in-person and virtual attendees.
        </p>

        <h2>Notable Achievements</h2>
        <ul>
          <li>Named "Top 40 Under 40" by NC Tech Association</li>
          <li>Created the largest tech conference series in coastal NC</li>
          <li>Developed proprietary event management software</li>
          <li>Regular speaker on tech event innovation</li>
        </ul>

        <h2>Connect with Sophia</h2>
        <p>
          For tech conference planning or consulting services, reach out to
          Sophia's team at their Wilmington office or through their online
          platform. They specialize in technical conferences, developer events,
          and startup showcases.
        </p>
      </div>
    </article>
  );
}
