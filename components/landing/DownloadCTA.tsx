export function DownloadCTA() {
  return (
    <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to order?
        </h2>
        <p className="mt-3 text-lg text-white/90">
          Download ZaiKuu and start ordering fresh food on campus today.
        </p>
        <div className="mt-8">
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
    </section>
  );
}
