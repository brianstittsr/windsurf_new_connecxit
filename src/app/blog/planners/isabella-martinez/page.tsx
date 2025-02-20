/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function IsabellaMartinezBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop"
          alt="Isabella Martinez"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Isabella Martinez</h1>
          <p className="text-xl">Winston-Salem's Cultural Celebration Expert</p>
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
              <dd className="text-gray-900">Winston-Salem, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Cultural Celebrations</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">11+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Languages</dt>
              <dd className="text-gray-900">English, Spanish, Portuguese</dd>
            </div>
          </dl>
        </div>

        <h2>Bridging Cultures Through Celebration</h2>
        <p>
          Isabella Martinez&apos;s journey into cultural event planning began
          with her own rich heritage and experience growing up in a
          multicultural family. Born to a Mexican father and Brazilian mother,
          Isabella developed a deep appreciation for how celebrations can bridge
          cultural divides and bring communities together.
        </p>

        <p>
          After completing her Master&apos;s in Cultural Studies at Wake Forest
          University, Isabella worked with various cultural organizations before
          founding Martinez Cultural Events in 2014. &quot;I saw a need for
          event planners who could authentically represent and celebrate
          different cultural traditions while creating inclusive
          experiences,&quot; she explains.
        </p>

        <h2>Cultural Expertise</h2>
        <p>
          Isabella&apos;s strength lies in her ability to blend traditional
          cultural elements with contemporary event planning techniques.
          She&apos;s known for creating celebrations that honor cultural
          authenticity while ensuring accessibility for diverse audiences. Her
          multilingual capabilities and deep understanding of various cultural
          protocols make her uniquely qualified to handle multicultural events.
        </p>

        <h2>Signature Events</h2>
        <ul>
          <li>Winston-Salem International Festival</li>
          <li>Latin American Heritage Celebration Series</li>
          <li>Cross-Cultural Wedding Ceremonies</li>
          <li>Corporate Diversity Celebrations</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Cultural Celebration Tips
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research and respect cultural traditions</li>
            <li>Include authentic cultural elements</li>
            <li>Create inclusive, welcoming environments</li>
            <li>Consider dietary and religious requirements</li>
          </ul>
        </div>

        <h2>The Future of Cultural Events in North Carolina</h2>
        <p>
          Isabella sees North Carolina becoming a hub for multicultural
          celebrations. &quot;Our state&apos;s growing diversity is creating
          beautiful opportunities for cultural exchange and celebration,&quot;
          she notes. &quot;We&apos;re seeing increased interest in events that
          celebrate multiple cultural traditions simultaneously.&quot;
        </p>

        <p>
          She predicts a trend toward more fusion events that honor multiple
          cultural traditions while creating new, shared experiences. &quot;The
          future of cultural celebrations is about finding common ground while
          respecting individual traditions,&quot; she explains.
        </p>

        <h2>Community Impact</h2>
        <p>
          Beyond event planning, Isabella is actively involved in cultural
          education and community building. She regularly conducts workshops on
          cultural sensitivity and celebration planning for other event
          professionals and community organizations.
        </p>

        <h2>Connect with Isabella</h2>
        <p>
          For cultural event planning or consulting services, contact
          Isabella&apos;s team at their Winston-Salem office or through their
          multilingual website. They specialize in cultural celebrations,
          cross-cultural weddings, and diversity events.
        </p>
      </div>
    </article>
  );
}
