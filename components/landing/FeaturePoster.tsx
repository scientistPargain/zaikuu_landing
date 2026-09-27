import Image from "next/image";

export function FeaturePoster() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal overflow-hidden rounded-3xl border border-border">
          <Image
            src="/images/zaikuu_feature_graphic.png"
            alt="ZaiKuu — Your campus food, simplified"
            width={1794}
            height={876}
            sizes="(min-width: 1280px) 1216px, calc(100vw - 32px)"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
