const BusinessCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="bg-orange-500 rounded-2xl px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Grow Your Event Business with ConnecXit
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
            Join thousands of successful event professionals who trust ConnecXit
            to grow their business. Get more leads, bookings, and revenue.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/pro-signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </a>
            <a
              href="/partner"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCTA;
