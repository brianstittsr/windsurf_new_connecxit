import { redirect, notFound } from 'next/navigation';
import EventDetailWrapper from '@/components/EventDetailWrapper';
import { getEventById, getRelatedEvents } from '@/data/events';
import { Metadata } from 'next';
import { getServerUser } from '@/lib/auth-server';

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
  const user = await getServerUser();
  const resolvedParams = await params;

  if (!user) {
    redirect('/signin');
  }

  const event = await getEventById(resolvedParams.id);
  if (!event) {
    notFound();
  }

  const relatedEvents = await getRelatedEvents(resolvedParams.id);

  return (
    <EventDetailWrapper 
      event={event} 
      relatedEvents={relatedEvents}
    />
  );
}
