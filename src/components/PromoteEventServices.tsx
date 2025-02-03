import Link from 'next/link';

export default function PromoteEventServices() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Promote Your <span className="text-[#ff5722]">Event Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our network of top event professionals and connect with clients looking for your services.
          </p>
          <div className="mt-8">
            <Link
              href="/pro-signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff5722] hover:bg-[#f4511e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff5722]"
            >
              List Your Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
