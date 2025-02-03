'use client';

import PageLayout from '@/components/PageLayout';

interface PageProps {
  title: string;
  description: string;
}

const PageTemplate = ({ title, description }: PageProps) => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
          
          {/* Add more content specific to each page here */}
          <div className="mt-8">
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PageTemplate;
