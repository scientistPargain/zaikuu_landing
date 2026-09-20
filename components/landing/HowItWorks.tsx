const steps = [
  {
    number: 1,
    title: "Download the App",
    description: "Get ZaiKuu from Google Play Store — it's free.",
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
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center reveal">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Three simple steps to get fresh food on campus.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connector line - desktop */}
          <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="grid gap-12 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className={`relative reveal reveal-delay-${i + 1} text-center`}>
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white shadow-lg shadow-primary/30">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
