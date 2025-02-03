import Hero from '@/components/Hero';
import VendorSearch from '@/components/VendorSearch';
import BusinessCTA from '@/components/BusinessCTA';
import PopularVendorCategories from '@/components/PopularVendorCategories';
import HotEventPlanners from '@/components/HotEventPlanners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <Hero />
        <VendorSearch />
        <PopularVendorCategories />
        <HotEventPlanners />
        <BusinessCTA />
      </main>
      <Footer />
    </div>
  );
}
