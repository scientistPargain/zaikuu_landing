export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#FF8A65] to-[#FFB74D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              ZaiKuu
            </h1>
            <p className="mt-4 text-lg text-white/90 sm:text-xl">
              Connecting students with local vendors for fresh, affordable
              meals
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.zaikuu.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.651 1.535a1 1 0 010 1.73l-2.651 1.535-2.537-2.537 2.537-2.263zM5.864 2.658L16.8 9.09l-2.302 2.302-8.634-8.734z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center">
            <div className="flex h-80 w-56 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm sm:h-96 sm:w-64">
              <span className="text-sm text-white/60">Phone Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
