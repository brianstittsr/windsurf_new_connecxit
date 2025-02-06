import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import EventDetailWrapper from '@/components/EventDetailWrapper';
import { getEventById, getRelatedEvents } from '@/data/events';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const event = await getEventById(params.id);
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage(
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const event = await getEventById(params.id);
  if (!event) {
    notFound();
  }

  const relatedEvents = await getRelatedEvents(params.id);



  return (
    <div className="min-h-screen bg-white">
      <EventDetailWrapper 
        event={event}
        relatedEvents={relatedEvents}
      />
    </div>
  );
}
