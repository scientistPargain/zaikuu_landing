export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 animate-float" />
        <div className="absolute top-40 right-10 h-48 w-48 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 left-1/3 h-32 w-32 rounded-full bg-white/10 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Live on campus
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gradient-text">ZaiKuu</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 sm:text-2xl max-w-lg">
              Connecting students with local vendors for fresh, affordable
              meals — delivered to your campus.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.zaikuu.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-primary transition-all hover:scale-105 glow"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.651 1.535a1 1 0 010 1.73l-2.651 1.535-2.537-2.537 2.537-2.263zM5.864 2.658L16.8 9.09l-2.302 2.302-8.634-8.734z" />
                </svg>
                Get it on Google Play
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="flex -space-x-2">
                  {[0,1,2].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-white/20 border-2 border-primary" />
                  ))}
                </div>
                <span>500+ students joined</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center reveal reveal-delay-2">
            <div className="relative">
              <div className="flex h-[28rem] w-64 items-center justify-center rounded-[2.5rem] bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <span className="text-sm text-white/60 font-medium">Phone Mockup</span>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-accent/30 backdrop-blur-sm animate-float" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-secondary/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
