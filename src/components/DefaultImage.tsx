import Image from 'next/image';
import { useState } from 'react';

interface DefaultImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function DefaultImage({
  src,
  alt,
  className = '',
  width,
  height,
  fill = false,
  sizes,
  priority = false,
}: DefaultImageProps) {
  const [error, setError] = useState(false);

  const defaultImage = '/images/guides/default-guide.jpg';
  const imageProps = {
    src: error ? defaultImage : src,
    alt: alt || 'Default image',
    className: `${className} transition-opacity duration-300`,
    onError: () => setError(true),
    priority,
    sizes,
  };

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={imageProps.src}
          alt={alt || 'Default image'}
          fill
          style={{ objectFit: 'cover' }}
          className={imageProps.className}
          onError={imageProps.onError}
          priority={imageProps.priority}
          sizes={imageProps.sizes}
        />
      </div>
    );
  }

  return (
    <Image
      src={imageProps.src}
      alt={alt || 'Default image'}
      width={width || 300}
      height={height || 200}
      className={imageProps.className}
      onError={imageProps.onError}
      priority={imageProps.priority}
      sizes={imageProps.sizes}
    />
  );
}
