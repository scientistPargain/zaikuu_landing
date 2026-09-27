import { PhoneFrame } from "./PhoneFrame";

const benefits = [
  "Reach hundreds of students on campus",
  "Manage orders with an easy dashboard",
  "Track sales and analytics in real time",
  "Low commission rates for campus vendors",
];

const stats = [
  { value: "500+", label: "Active Students" },
  { value: "50+", label: "Campus Vendors" },
  { value: "4.8", label: "App Rating" },
];

export function ForVendors() {
  return (
    <section className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Are you a vendor?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join ZaiKuu and reach students on campus. Manage your orders,
              track sales, and grow your business.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center reveal reveal-delay-2">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative w-[300px] sm:w-[360px]">
              <PhoneFrame
                src="/images/phone_ss_5.png"
                alt="ZaiKuu vendor dashboard screen"
                sizes="(min-width: 640px) 360px, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
