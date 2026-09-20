export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">ZaiKuu</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Connecting students with local vendors for fresh, affordable
              meals.
            </p>
            <div className="mt-4 flex gap-3">
              {["X", "IG", "FB"].map((social) => (
                <div
                  key={social}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white/70 transition-colors hover:bg-primary hover:text-white cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <ul className="mt-3 space-y-2.5">
              <li>
                <a href="/privacy-policy" className="text-sm text-white/60 transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-white/60 transition-colors hover:text-primary">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Account</h4>
            <ul className="mt-3 space-y-2.5">
              <li>
                <a href="/delete-account" className="text-sm text-white/60 transition-colors hover:text-primary">
                  Delete Account
                </a>
              </li>
              <li>
                <a href="/delete-data" className="text-sm text-white/60 transition-colors hover:text-primary">
                  Delete Data
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="mt-3 text-sm text-white/60">
              Get the latest news and updates.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-primary"
              />
              <button className="rounded-r-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>&copy; {currentYear} ZaiKuu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
