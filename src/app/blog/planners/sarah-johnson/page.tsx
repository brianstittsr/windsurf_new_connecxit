/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function SarahJohnsonBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
          alt="Sarah Johnson"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Sarah Johnson</h1>
          <p className="text-xl">Charlotte's Premier Wedding Specialist</p>
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
              <dd className="text-gray-900">Charlotte, NC</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Specialty</dt>
              <dd className="text-gray-900">Wedding Planning</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Experience</dt>
              <dd className="text-gray-900">15+ Years</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-500">Events Planned</dt>
              <dd className="text-gray-900">500+</dd>
            </div>
          </dl>
        </div>

        <h2>The Journey to Event Planning Excellence</h2>
        <p>
          Sarah Johnson's path to becoming Charlotte's most sought-after wedding
          planner began in an unexpected place: the corporate world of finance.
          After graduating from UNC Charlotte with a business degree, Sarah
          spent five years as a project manager for a major bank. It was during
          this time that she discovered her true passion while planning her
          sister's wedding.
        </p>

        <p>
          "I realized that my organizational skills from the corporate world,
          combined with my creative vision, could create something truly special
          in the wedding industry," Sarah recalls. In 2010, she took a leap of
          faith and founded Sarah Johnson Weddings, which has since grown into
          one of North Carolina's premier wedding planning agencies.
        </p>

        <h2>A Unique Approach to Wedding Planning</h2>
        <p>
          Sarah's background in finance and project management sets her apart in
          the wedding planning industry. She brings a unique blend of meticulous
          attention to detail and creative vision to every event. "I believe
          that a perfect wedding is both a logistical masterpiece and an
          artistic expression," she explains.
        </p>

        <p>
          Her signature approach involves creating detailed project timelines
          while ensuring each wedding reflects the couple's unique story and
          style. This methodology has earned her numerous accolades, including
          being named "Best Wedding Planner in Charlotte" three years running by
          Charlotte Magazine.
        </p>

        <h2>Notable Events and Achievements</h2>
        <ul>
          <li>
            Planned Charlotte's largest destination wedding (350+ guests) at
            Biltmore Estate
          </li>
          <li>
            Featured in Southern Weddings Magazine's "Top 50 Planners in the
            South"
          </li>
          <li>
            Regular contributor to Wedding Wire's professional planning blog
          </li>
          <li>Host of the annual Charlotte Wedding Industry Summit</li>
        </ul>

        <h2>The Future of Wedding Planning in North Carolina</h2>
        <p>
          Sarah sees exciting changes ahead for the wedding industry in North
          Carolina. "We're witnessing a beautiful blend of Southern traditions
          with modern, personalized elements," she notes. "Couples are
          increasingly interested in sustainable practices and incorporating
          local vendors and venues into their celebrations."
        </p>

        <p>
          She predicts that technology will play an even bigger role in future
          weddings, from virtual planning sessions to augmented reality previews
          of venue layouts. However, she emphasizes that the personal touch will
          remain crucial. "While technology enhances our capabilities, the
          emotional connection and understanding of each couple's vision will
          always be at the heart of what we do."
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Quick Tips from Sarah
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Start planning at least 12-18 months before your wedding date
            </li>
            <li>Choose your venue before making any other major decisions</li>
            <li>
              Invest in the elements that matter most to you and your partner
            </li>
            <li>
              Don't forget to enjoy the planning process – it's part of your
              story
            </li>
          </ul>
        </div>

        <h2>Contact Sarah</h2>
        <p>
          For inquiries about wedding planning services or speaking engagements,
          reach out to Sarah and her team through their online booking system or
          visit their studio in uptown Charlotte.
        </p>
      </div>
    </article>
  );
}
