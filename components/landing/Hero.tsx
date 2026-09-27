import Image from "next/image";
import { PhoneFrame } from "./PhoneFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#241A14] via-background to-[#0E1220] text-foreground">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-float" />
        <div className="absolute top-40 right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 left-1/3 h-32 w-32 rounded-full bg-secondary/20 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/90 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Live on campus
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Image src="/logo.png" alt="" width={64} height={64} priority className="h-16 w-16 rounded-2xl shadow-lg" />
              <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                ZaiKuu
              </h1>
            </div>
            <p className="mt-6 text-xl text-foreground/80 sm:text-2xl max-w-lg">
              Connecting students with local vendors for fresh, affordable
              meals — delivered to your campus.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.deepanshu_pargain.zaikuu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-primary-dark transition-all hover:scale-105 glow"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.651 1.535a1 1 0 010 1.73l-2.651 1.535-2.537-2.537 2.537-2.263zM5.864 2.658L16.8 9.09l-2.302 2.302-8.634-8.734z" />
                </svg>
                Get it on Google Play
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <div className="flex -space-x-2">
                  {[0,1,2].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-white/15 border-2 border-primary" />
                  ))}
                </div>
                <span>500+ students joined</span>
              </div>
            </div>
            <div className="mt-14 flex justify-center lg:hidden reveal reveal-delay-2">
              <div className="w-full max-w-[260px] sm:max-w-[300px]">
                <PhoneFrame
                  src="/images/phone_ss_1.png"
                  alt="ZaiKuu app home screen"
                  sizes="(min-width: 640px) 300px, 260px"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center reveal reveal-delay-2">
            <div className="relative w-[26rem] pt-4">
              <div className="absolute left-0 top-16 w-40 -rotate-6">
                <PhoneFrame src="/images/phone_ss_2.png" alt="Explore vendors screen" sizes="160px" />
              </div>
              <div className="absolute right-0 top-24 w-40 rotate-6">
                <PhoneFrame src="/images/phone_ss_3.png" alt="Student profile screen" sizes="160px" />
              </div>
              <div className="relative z-10 mx-auto w-64">
                <PhoneFrame src="/images/phone_ss_1.png" alt="ZaiKuu app home screen" sizes="256px" />
                <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-2xl bg-accent/30 backdrop-blur-sm animate-float" />
                <div className="absolute -top-4 -left-4 h-14 w-14 rounded-full bg-secondary/40 backdrop-blur-sm animate-float" style={{ animationDelay: "1.5s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
