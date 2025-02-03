import Hero from '@/components/Hero';
import VendorSearch from '@/components/VendorSearch';
import BusinessCTA from '@/components/BusinessCTA';
import PopularVendorCategories from '@/components/PopularVendorCategories';
import HotEventPlanners from '@/components/HotEventPlanners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="space-y-24">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Search Section */}
        <section className="bg-gray-50">
          <VendorSearch />
        </section>

        {/* Popular Categories Section */}
        <section>
          <PopularVendorCategories />
        </section>

        {/* Hot Event Planners Section */}
        <section className="bg-gray-50">
          <HotEventPlanners />
        </section>

        {/* Business CTA Section */}
        <section>
          <BusinessCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
