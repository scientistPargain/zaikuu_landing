export const metadata = {
  title: "Privacy Policy -- ZaiKuu",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: September 20, 2026</p>
      <div className="prose prose-gray mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="mt-2 text-gray-600">
            ZaiKuu operates the ZaiKuu campus marketplace application. This
            Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our mobile application
            and related services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li><strong>Account Information:</strong> Email address, name, and profile information.</li>
            <li><strong>Order Data:</strong> Order history, delivery addresses, and payment information.</li>
            <li><strong>Device Information:</strong> Device type, operating system, and app version.</li>
            <li><strong>Location Data:</strong> Campus location for delivery, only with permission.</li>
            <li><strong>Communications:</strong> Chat messages between you and vendors.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>To process and fulfill your orders</li>
            <li>To provide real-time order tracking</li>
            <li>To facilitate communication with vendors</li>
            <li>To improve our services and user experience</li>
            <li>To send important updates about your orders</li>
            <li>To ensure platform security and prevent fraud</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing</h2>
          <p className="mt-2 text-gray-600">We share your information only with:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li><strong>Vendors:</strong> Order details necessary to fulfill your orders.</li>
            <li><strong>Service Providers:</strong> Third-party services that help us operate our platform.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Data Retention</h2>
          <p className="mt-2 text-gray-600">
            We retain your personal information for as long as your account is
            active or as needed to provide services. You may request deletion
            of your account or personal data at any time.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>Access and review your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and data</li>
            <li>Opt out of non-essential communications</li>
            <li>Data portability upon request</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Contact</h2>
          <p className="mt-2 text-gray-600">For questions about this Privacy Policy, contact us at:</p>
          <p className="mt-1 text-gray-600"><strong>Email:</strong> privacy@zaikuu.com</p>
        </section>
      </div>
    </div>
  );
}
