import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import EventDetailWrapper from '@/components/EventDetailWrapper';
import { getEventById, getRelatedEvents } from '@/data/events';
import { Metadata } from 'next';

type Params = { id: string };

type Props = {
  params: Params;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams(): Promise<Params[]> {
  return [
    { id: 'kate-bowler-life-after-perfect' },
    { id: 'charlotte-job-fair-2025' },
    { id: 'detours-storyslam' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function EventDetailPage({ params }: Props) {
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
