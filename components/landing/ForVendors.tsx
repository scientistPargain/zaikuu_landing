const benefits = [
  "Reach hundreds of students on campus",
  "Manage orders with an easy dashboard",
  "Track sales and analytics in real time",
  "Low commission rates for campus vendors",
];

export function ForVendors() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Are you a vendor?
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Join ZaiKuu and reach students on campus. Manage your orders,
              track sales, and grow your business.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF6B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-[#FBF5F0] sm:h-80">
              <span className="text-sm text-gray-400">
                Dashboard Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
