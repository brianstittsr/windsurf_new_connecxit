import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import EventDetailWrapper from '@/components/EventDetailWrapper';
import { getEventById, getRelatedEvents } from '@/data/events';
import { Metadata } from 'next';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function EventDetailPage({ params, searchParams }: Props) {
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
