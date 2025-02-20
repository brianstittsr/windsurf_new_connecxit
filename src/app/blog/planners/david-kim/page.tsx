/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function DavidKimBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
          alt="David Kim"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">David Kim</h1>
          <p className="text-xl">Durham&apos;s Luxury Event Visionary</p>
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
              <dd className="text-gray-900">Durham, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Luxury Events</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">14+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">
                Average Event Budget
              </dt>
              <dd className="text-gray-900">$100K+</dd>
            </div>
          </dl>
        </div>

        <h2>From Fine Dining to Luxury Events</h2>
        <p>
          David Kim&apos;s journey to becoming Durham&apos;s premier luxury
          event planner began in the world of fine dining. After graduating from
          the Culinary Institute of America and working as a chef at several
          Michelin-starred restaurants, David discovered his true calling was
          creating entire luxury experiences, not just exceptional meals.
        </p>

        <p>
          &quot;I realized that the same principles that make a great dining
          experience – attention to detail, perfect timing, and exceptional
          service – are essential for creating unforgettable luxury
          events,&quot; David explains. This insight led him to establish Kim
          Luxury Events in 2009.
        </p>

        <h2>The Art of Luxury Events</h2>
        <p>
          David&apos;s culinary background gives him a unique perspective on
          luxury event planning. He approaches each event as a multi-sensory
          experience, carefully orchestrating every element from lighting and
          music to scent and taste. His events are known for their impeccable
          attention to detail and unexpected touches of brilliance.
        </p>

        <p>
          &quot;Luxury isn&apos;t just about expensive things,&quot; David
          insists. &quot;It&apos;s about creating moments of pure magic that
          guests will remember forever.&quot; This philosophy has attracted an
          exclusive clientele, including CEOs, professional athletes, and
          international dignitaries.
        </p>

        <h2>Signature Touches</h2>
        <ul>
          <li>Custom-designed sensory experiences</li>
          <li>Collaboration with Michelin-starred chefs</li>
          <li>Unique venue transformations</li>
          <li>Personalized guest journey mapping</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            David&apos;s Luxury Event Principles
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Every detail should tell part of the story</li>
            <li>
              True luxury is about creating unique, personalized experiences
            </li>
            <li>Service should be anticipatory, not just responsive</li>
            <li>
              Innovation must enhance, never distract from, the experience
            </li>
          </ul>
        </div>

        <h2>The Future of Luxury Events in North Carolina</h2>
        <p>
          David sees North Carolina emerging as a luxury event destination.
          &quot;The Triangle area, with its blend of historic charm and modern
          sophistication, is perfect for high-end events,&quot; he notes.
          &quot;We&apos;re seeing increased interest from clients who previously
          might have looked to New York or Miami.&quot;
        </p>

        <p>
          He predicts a trend toward more intimate, highly personalized luxury
          gatherings. &quot;The future of luxury events is about creating deeply
          meaningful experiences for smaller groups rather than just impressive
          displays for large crowds,&quot; he explains.
        </p>

        <h2>Sustainable Luxury</h2>
        <p>
          David is pioneering the concept of sustainable luxury in event
          planning. His team works with local artisans and suppliers, implements
          zero-waste practices, and focuses on creating luxury experiences that
          don't compromise environmental responsibility.
        </p>

        <h2>Notable Achievements</h2>
        <ul>
          <li>Named "Top Luxury Event Planner" by Durham Magazine</li>
          <li>Featured in Luxury Event Quarterly</li>
          <li>Planned events for Fortune 100 executives</li>
          <li>Regular speaker at international luxury event conferences</li>
        </ul>

        <h2>Connect with David</h2>
        <p>
          For luxury event inquiries or consulting services, contact
          David&apos;s team at their Durham office by appointment only. They
          specialize in high-end corporate events, exclusive social gatherings,
          and luxury brand launches.
        </p>
      </div>
    </article>
  );
}
