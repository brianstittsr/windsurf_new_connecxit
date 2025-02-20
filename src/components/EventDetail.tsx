"use client";

import { useState } from "react";
import EventDetailHero from "@/components/EventDetailHero";
import EventDetailLogistics from "@/components/EventDetailLogistics";
import EventDetailDescription from "@/components/EventDetailDescription";
import EventDetailVideo from "@/components/EventDetailVideo";
import EventDetailEventTags from "@/components/EventDetailEventTags";
import EventDetailOrganizedBy from "@/components/EventDetailOrganizedBy";
import EventDetailMoreEventsFromThisOrganizer from "@/components/EventDetailMoreEventsFromThisOrganizer";

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

interface EventDetailProps {
  event: Event;
  relatedEvents: RelatedEvent[];
}

export default function EventDetail({
  event,
  relatedEvents,
}: EventDetailProps) {
  const [tags, setTags] = useState<string[]>(event.tags || []);
  const [isFollowing, setIsFollowing] = useState(event.organizer.isFollowing);

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleFollow = (following: boolean) => {
    setIsFollowing(following);
  };

  return (
    <main className="flex-grow">
      <EventDetailHero
        title={event.title}
        subtitle={event.subtitle}
        backgroundImage={event.backgroundImage}
      />
      <EventDetailLogistics
        title={event.title}
        description={event.description}
        date={event.date}
        time={event.time}
        location={event.location}
        organizer={event.organizer}
        ticketInfo={event.ticketInfo}
        duration={event.duration}
      />
      <EventDetailDescription
        title={`ABOUT THIS ${event.title}`}
        description={event.description}
      />
      <EventDetailVideo initialVideoUrl={event.videoUrl} title={event.title} />
      <EventDetailEventTags
        initialTags={tags}
        onTagsChange={handleTagsChange}
      />
      <EventDetailOrganizedBy
        organizer={{ ...event.organizer, isFollowing }}
        onFollow={handleFollow}
      />
      <EventDetailMoreEventsFromThisOrganizer events={relatedEvents} />
    </main>
  );
}
