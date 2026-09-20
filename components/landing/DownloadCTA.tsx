export function DownloadCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-gray-900 to-foreground py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 reveal">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to order?
        </h2>
        <p className="mt-4 text-xl text-white/70">
          Download ZaiKuu and start ordering fresh food on campus today.
        </p>
        <div className="mt-10">
          <a
            href="https://play.google.com/store/apps/details?id=com.zaikuu.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-secondary px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 glow"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.651 1.535a1 1 0 010 1.73l-2.651 1.535-2.537-2.537 2.537-2.263zM5.864 2.658L16.8 9.09l-2.302 2.302-8.634-8.734z" />
            </svg>
            Get it on Google Play
          </a>
        </div>
        <p className="mt-6 text-sm text-white/40">Free to download. No hidden fees.</p>
      </div>
    </section>
  );
}
