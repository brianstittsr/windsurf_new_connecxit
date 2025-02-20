import Image from "next/image";
import { useState } from "react";

interface DefaultImageProps {
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  firstName?: string;
  lastName?: string;
  size?: number;
}

export default function DefaultImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  firstName,
  lastName,
  size,
}: DefaultImageProps) {
  const [error, setError] = useState(false);

  // If firstName and lastName are provided, show initials
  if (firstName || lastName) {
    const initials =
      `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();

    return (
      <div
        className={`flex items-center justify-center bg-[#ff5722] text-white rounded-full ${className}`}
        style={{ width: size || width || 40, height: size || height || 40 }}
      >
        <span className="text-sm font-medium">{initials}</span>
      </div>
    );
  }

  const defaultImage = "/images/avatars/default-avatar.jpg";
  const imageProps = {
    src: error ? defaultImage : src || defaultImage,
    alt: alt || "Default image",
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
          alt={alt || "Default image"}
          fill
          style={{ objectFit: "cover" }}
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
      {...imageProps}
      width={width || size || 40}
      height={height || size || 40}
      alt="Profile"
    />
  );
}
