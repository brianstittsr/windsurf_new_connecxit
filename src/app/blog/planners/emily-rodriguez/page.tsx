/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function EmilyRodriguezBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
          alt="Emily Rodriguez"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Emily Rodriguez</h1>
          <p className="text-xl">Greensboro's Social Gathering Expert</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">At a Glance</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="font-medium text-gray-500">Location</dt>
              <dd className="text-gray-900">Greensboro, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Social Gatherings</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">10+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Events Planned</dt>
              <dd className="text-gray-900">300+</dd>
            </div>
          </dl>
        </div>

        <h2>From Community Organizer to Event Planning Maven</h2>
        <p>
          Emily Rodriguez discovered her passion for event planning through her work as a community organizer in Greensboro. After graduating from UNCG with a degree in Communications, she spent several years working with local nonprofits, where she honed her skills in bringing people together for meaningful causes.
        </p>

        <p>
          &quot;I realized that every successful community initiative centered around bringing people together in engaging ways,&quot; Emily reflects. This insight led her to establish Rodriguez Social Events in 2013, focusing on creating memorable social gatherings that strengthen community bonds.
        </p>

        <h2>A Community-Centered Approach</h2>
        <p>
          Emily&apos;s background in community organizing influences her unique approach to event planning. She specializes in creating gatherings that feel both intimate and inclusive, regardless of size. Her events are known for their ability to bring diverse groups together and create lasting connections.
        </p>

        <p>
          &quot;Social events should do more than entertain – they should create meaningful connections and memories,&quot; she explains. This philosophy has made her the go-to planner for everything from milestone celebrations to community festivals.
        </p>

        <h2>Signature Events</h2>
        <ul>
          <li>Annual Greensboro Food and Culture Festival</li>
          <li>Quarterly networking events for young professionals</li>
          <li>Multi-cultural celebration series</li>
          <li>Community fundraising galas</li>
        </ul>

        <h2>Innovation in Social Events</h2>
        <p>
          Emily is known for her innovative approach to social gatherings. She pioneered the concept of "connection stations" at events – dedicated spaces designed to facilitate meaningful interactions between guests. Her events often incorporate interactive elements that break down social barriers and encourage genuine connections.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Emily&apos;s Event Success Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create multiple opportunities for genuine interaction</li>
            <li>Include elements that reflect the local community</li>
            <li>Design spaces that encourage conversation</li>
            <li>Incorporate local culture and traditions</li>
          </ul>
        </div>

        <h2>The Future of Social Events in North Carolina</h2>
        <p>
          Emily sees exciting changes ahead for social events in North Carolina. &quot;We&apos;re witnessing a beautiful evolution where traditional Southern hospitality meets modern social dynamics,&quot; she notes. &quot;People are craving more meaningful connections in our increasingly digital world.&quot;
        </p>

        <p>
          She predicts a trend toward more purposeful gatherings that combine celebration with community impact. "The future of social events lies in creating experiences that not only bring joy to attendees but also contribute positively to our communities," she explains.
        </p>

        <h2>Cultural Integration</h2>
        <p>
          One of Emily&apos;s passions is incorporating diverse cultural elements into her events. She works closely with local cultural organizations and artists to create authentic, inclusive experiences that celebrate North Carolina&apos;s growing diversity.
        </p>

        <h2>Connect with Emily</h2>
        <p>
          For social event planning inquiries or community event consultation, reach out to Emily&apos;s team at their Greensboro office or through their website. They specialize in milestone celebrations, community gatherings, and cultural events.
        </p>
      </div>
    </article>
  );
}
