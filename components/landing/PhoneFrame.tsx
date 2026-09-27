import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[3rem] border border-white/10 bg-[#050505] p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] bg-black">
        <Image src={src} alt={alt} fill sizes={sizes} loading="eager" className="object-cover" />
      </div>
    </div>
  );
}
