const steps = [
  {
    number: 1,
    title: "Download the App",
    description: "Get ZaiKuu from Google Play Store -- it's free.",
  },
  {
    number: 2,
    title: "Browse & Order",
    description: "Explore campus vendors and place your order in seconds.",
  },
  {
    number: 3,
    title: "Get Your Delivery",
    description: "Receive fresh food delivered directly to your campus.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#FBF5F0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Three simple steps to get fresh food on campus.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B35] text-xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
