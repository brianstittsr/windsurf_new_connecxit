import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import EventDetailWrapper from '@/components/EventDetailWrapper';
import { getEventById, getRelatedEvents } from '@/data/events';


type Props = {
  params: { id: string }
}

export default async function EventDetailPage({ params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const event = getEventById(params.id);
  if (!event) {
    notFound();
  }

  const relatedEvents = getRelatedEvents(params.id);



  return (
    <div className="min-h-screen bg-white">
      <EventDetailWrapper 
        event={event}
        relatedEvents={relatedEvents}
      />
    </div>
  );
}
