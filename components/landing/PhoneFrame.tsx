import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1800}
      height={3200}
      sizes={sizes}
      loading="eager"
      className="h-auto w-full"
    />
  );
}
