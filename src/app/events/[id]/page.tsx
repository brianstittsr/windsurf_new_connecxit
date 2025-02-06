import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import EventDetailWrapper from '@/components/EventDetailWrapper';
import { getEventById, getRelatedEvents } from '@/data/events';
import { Metadata } from 'next';

type PageParams = {
  id: string;
};

type Props = {
  params: Promise<PageParams>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const event = await getEventById(resolvedParams.id);
  
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

export default async function EventDetailPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  const resolvedParams = await params;

  if (!session) {
    redirect('/api/auth/signin');
  }

  const event = await getEventById(resolvedParams.id);
  if (!event) {
    notFound();
  }

  const relatedEvents = await getRelatedEvents(resolvedParams.id);



  return (
    <div className="min-h-screen bg-white">
      <EventDetailWrapper 
        event={event}
        relatedEvents={relatedEvents}
      />
    </div>
  );
}
