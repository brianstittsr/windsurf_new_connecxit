/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function MarcusThompsonBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
          alt="Marcus Thompson"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Marcus Thompson</h1>
          <p className="text-xl">Asheville's Sports Event Specialist</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">At a Glance</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="font-medium text-gray-500">Location</dt>
              <dd className="text-gray-900">Asheville, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Sports Events</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">13+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Events Managed</dt>
              <dd className="text-gray-900">200+</dd>
            </div>
          </dl>
        </div>

        <h2>From Pro Athlete to Event Management Expert</h2>
        <p>
          Marcus Thompson's journey into sports event planning began on the field as a former professional soccer player. After a successful career that included playing for several professional teams and the collegiate level at UNC Asheville, Marcus discovered his passion for organizing sports events while coordinating youth soccer camps.
        </p>

        <p>
          "I realized that my experience as an athlete gave me unique insights into what makes sporting events successful," Marcus explains. This led him to establish Thompson Sports Events in 2012, bringing an athlete's perspective to event organization.
        </p>

        <h2>The Athlete's Advantage</h2>
        <p>
          Marcus's background as a professional athlete influences every event he plans. He understands the needs of athletes, spectators, and sponsors from firsthand experience. His events are known for their athlete-centric approach while ensuring an engaging experience for spectators.
        </p>

        <h2>Signature Events</h2>
        <ul>
          <li>Asheville Mountain Marathon</li>
          <li>Blue Ridge Sports Tournament Series</li>
          <li>NC Youth Sports Championship</li>
          <li>Mountain Region College Showcases</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Sports Event Success Principles</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prioritize athlete safety and comfort</li>
            <li>Create engaging spectator experiences</li>
            <li>Implement efficient event operations</li>
            <li>Maintain clear communication channels</li>
          </ul>
        </div>

        <h2>The Future of Sports Events in North Carolina</h2>
        <p>
          Marcus sees North Carolina becoming a major destination for sports events. "Our state's diverse geography and climate make it perfect for year-round sports events," he notes. "From mountain biking in Asheville to coastal marathons, we have unique opportunities for every type of sport."
        </p>

        <p>
          He predicts a trend toward more integrated sports experiences that combine competition with community engagement. "The future of sports events isn't just about the competition – it's about creating memorable experiences for everyone involved," he explains.
        </p>

        <h2>Innovation in Sports Event Management</h2>
        <p>
          Marcus has introduced several innovations to sports event management, including a real-time athlete tracking system and a spectator engagement app. His team also developed sustainable practices for large-scale outdoor sporting events that have become industry standards.
        </p>

        <h2>Notable Achievements</h2>
        <ul>
          <li>Named "Sports Event Organizer of the Year" by NC Sports Commission</li>
          <li>Created the state's largest youth sports tournament series</li>
          <li>Advisory board member for the Asheville Sports Commission</li>
          <li>Developed athlete safety protocols adopted statewide</li>
        </ul>

        <h2>Community Impact</h2>
        <p>
          Beyond professional events, Marcus is deeply committed to youth sports development. His organization runs several programs that provide opportunities for underprivileged youth to participate in organized sports and receive mentoring from professional athletes.
        </p>

        <h2>Connect with Marcus</h2>
        <p>
          For sports event planning or consulting services, contact Marcus's team at their Asheville office or through their website. They specialize in marathons, tournaments, sports festivals, and youth sports events.
        </p>
      </div>
    </article>
  );
}
