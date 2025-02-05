import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Footer from '@/components/Footer';
import EventHero from '@/components/EventHero';
import TopTrendingEvents from '@/components/TopTrendingEvents';
import EventsUnder from '@/components/EventsUnder';
import MoreEvents from '@/components/MoreEvents';

export default async function TicketsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        <EventHero />
        <TopTrendingEvents />
        <EventsUnder />
        <MoreEvents />
      </main>
      <Footer />
    </div>
  );
}
