const BusinessCTA = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Illustration */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Store */}
                  <rect x="150" y="50" width="100" height="120" fill="#E0E7FF" />
                  <rect x="170" y="30" width="60" height="20" fill="#818CF8" />
                  <rect x="160" y="20" width="80" height="10" fill="#818CF8" />
                  
                  {/* Door */}
                  <rect x="180" y="120" width="40" height="50" fill="#1F2937" />
                  
                  {/* People */}
                  <circle cx="160" cy="200" r="15" fill="#818CF8" />
                  <rect x="155" y="170" width="10" height="30" fill="#818CF8" />
                  <rect x="145" y="185" width="30" height="5" fill="#818CF8" />
                  
                  <circle cx="240" cy="200" r="15" fill="#818CF8" />
                  <rect x="235" y="170" width="10" height="30" fill="#818CF8" />
                  <rect x="225" y="185" width="30" height="5" fill="#818CF8" />
                  
                  {/* Checkmark/Success Icon */}
                  <circle cx="280" cy="150" r="20" fill="#0EA5E9" />
                  <path
                    d="M270 150L278 158L290 146"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Open for business.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Whatever work you do, we'll find you the jobs you want.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Become a ThumbStack pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCTA;
