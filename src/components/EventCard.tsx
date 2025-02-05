import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  price?: string;
}

export default function EventCard({ id, title, date, location, imageUrl, price }: EventCardProps) {
  return (
    <Link href={`/events/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 line-clamp-2">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{date}</p>
          <p className="mt-1 text-sm text-gray-500">{location}</p>
          {price && (
            <p className="mt-2 text-sm font-medium text-green-600">{price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
