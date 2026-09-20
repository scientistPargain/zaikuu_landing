export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">ZaiKuu</h3>
            <p className="mt-2 text-sm">
              Connecting students with local vendors for fresh, affordable
              meals.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm transition-colors hover:text-white"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Account</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/delete-account"
                  className="text-sm transition-colors hover:text-white"
                >
                  Delete Account
                </a>
              </li>
              <li>
                <a
                  href="/delete-data"
                  className="text-sm transition-colors hover:text-white"
                >
                  Delete Data
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Download</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.zaikuu.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} ZaiKuu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
