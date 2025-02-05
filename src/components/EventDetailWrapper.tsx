'use client';

import EventDetail from './EventDetail';

interface Event {
  title: string;
  subtitle: string;
  backgroundImage: string;
  description: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
  };
  organizer: {
    name: string;
    image: string;
    followers: number;
    description: string;
    totalEvents: number;
    isFollowing: boolean;
  };
  ticketInfo: {
    type: string;
    price: string;
  };
  duration: string;
  videoUrl: string;
  tags: string[];
}

interface RelatedEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: {
    venue?: string;
    city: string;
    state: string;
  };
  price: string;
  imageUrl: string;
  organizer: {
    name: string;
    followers: number;
  };
}

interface EventDetailWrapperProps {
  event: Event;
  relatedEvents: RelatedEvent[];
}

export default function EventDetailWrapper({ event, relatedEvents }: EventDetailWrapperProps) {
  return <EventDetail event={event} relatedEvents={relatedEvents} />;
}
