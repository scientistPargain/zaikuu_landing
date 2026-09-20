export const metadata = {
  title: "Terms and Conditions -- ZaiKuu",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: September 20, 2026</p>
      <div className="prose prose-gray mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <p className="mt-2 text-gray-600">
            By accessing or using the ZaiKuu application and services, you
            agree to be bound by these Terms and Conditions. If you do not
            agree, please do not use our Service.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
          <p className="mt-2 text-gray-600">
            ZaiKuu is a campus marketplace platform connecting students with
            local food vendors. Students can browse menus, place orders, track
            deliveries, and communicate with vendors.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. User Accounts</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>You must be at least 18 years old or have parental consent.</li>
            <li>You are responsible for maintaining your account credentials.</li>
            <li>You agree to provide accurate information during registration.</li>
            <li>You are responsible for all activities under your account.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Orders and Payments</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>All orders are subject to availability and vendor acceptance.</li>
            <li>Prices are set by individual vendors.</li>
            <li>Payment is processed through secure third-party providers.</li>
            <li>Refund policies are determined by individual vendors.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
          <p className="mt-2 text-gray-600">
            ZaiKuu acts as an intermediary between students and vendors. We are
            not responsible for the quality, safety, or legality of food items
            offered by vendors.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Changes to Terms</h2>
          <p className="mt-2 text-gray-600">
            We reserve the right to modify these terms at any time. Continued
            use of the Service after changes constitutes acceptance of the
            updated terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Contact</h2>
          <p className="mt-2 text-gray-600">For questions about these Terms, contact us at:</p>
          <p className="mt-1 text-gray-600"><strong>Email:</strong> legal@zaikuu.com</p>
        </section>
      </div>
    </div>
  );
}
