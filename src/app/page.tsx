import Hero from "@/components/Hero";
import VendorSearch from "@/components/VendorSearch";
import BusinessCTA from "@/components/BusinessCTA";
import PopularVendorCategories from "@/components/PopularVendorCategories";
import RecentQuestions from "@/components/RecentQuestions";
import HotEventPlanners from "@/components/HotEventPlanners";
import ProjectGuides from "@/components/ProjectGuides";
import PromoteEventServices from "@/components/PromoteEventServices";
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

        {/* Recent Questions Section */}
        <section className="bg-gray-50">
          <RecentQuestions />
        </section>

        {/* Hot Event Planners Section */}
        <section className="bg-white">
          <HotEventPlanners />
        </section>

        {/* Project Guides Section */}
        <section className="bg-gray-50">
          <ProjectGuides />
        </section>

        {/* Promote Event Services Section */}
        <PromoteEventServices />

        {/* Business CTA Section */}
        <section>
          <BusinessCTA />
        </section>
      </main>
    </div>
  );
}
