export const metadata = {
  title: "Privacy Policy -- ZaiKuu",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: September 22, 2026</p>
      <div className="prose prose-gray mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Identity and Contact Information</h2>
          <p className="mt-2 text-gray-600">
            ZaiKuu (&quot;ZaiKuu,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the ZaiKuu campus
            marketplace application (the &quot;App&quot;). For the purposes of applicable data protection laws,
            ZaiKuu is the data controller responsible for your personal data.
          </p>
          <p className="mt-2 text-gray-600">
            If you have questions about this Privacy Policy or wish to exercise your rights, please
            contact us at:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
            <li><strong>Email:</strong> support@zaikuu.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
          <p className="mt-2 text-gray-600">
            We collect information to provide and improve the App. The categories of personal
            information we collect depend on your role and how you interact with the App.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">2.1 Information You Provide Directly</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Student (Buyer) Accounts:</strong> When you create an account, we collect your
              name, email address, phone number, student ID, and delivery addresses. If you register
              using Google OAuth, we receive your name and email address from Google as described in
              Section 8.
            </li>
            <li>
              <strong>Vendor (Seller) Accounts:</strong> When a vendor registers, we collect the
              business name, owner name, email address, phone number, bank or payment account details
              (for payouts), and business address.
            </li>
            <li>
              <strong>Order Information:</strong> When you place an order, we collect order details,
              delivery address, delivery instructions, and any notes you provide.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment card or account details are collected
              directly by our third-party payment processor. We do not store your full payment card
              number, CVV, or similar sensitive payment credentials on our servers.
            </li>
            <li>
              <strong>In-App Chat:</strong> When you communicate with vendors or other users through
              the App, we collect message content, timestamps, and sender and receiver identifiers.
            </li>
            <li>
              <strong>Customer Support:</strong> If you contact us for support, we collect the
              information you provide in your communications.
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">2.2 Information Collected Automatically</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Device Information:</strong> We collect your device type, operating system
              version, unique device identifiers, Google Advertising ID (GAID), Android ID, screen
              resolution, and app version.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about your interactions with the
              App, including pages viewed, features used, timestamps, and navigation patterns.
            </li>
            <li>
              <strong>Log Data:</strong> Our servers automatically record information from your
              device, including your Internet Protocol (IP) address, browser type, referring URLs,
              crash logs, and diagnostic data.
            </li>
            <li>
              <strong>Location Data:</strong> We may collect your approximate location based on your
              IP address for delivery purposes. We do not collect precise GPS location without your
              explicit consent.
            </li>
            <li>
              <strong>Push Notification Tokens:</strong> We collect Firebase Cloud Messaging (FCM)
              tokens to deliver push notifications to your device.
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">2.3 Information from Third Parties</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Google OAuth:</strong> If you sign in using Google, we receive your name and
              email address from your Google account, as authorized by you. See Section 8 for more
              details.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
          <p className="mt-2 text-gray-600">
            We use the information we collect for the following purposes:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Providing and Operating the App:</strong> To create and manage your account,
              process orders, facilitate payments, enable delivery, and provide customer support.
            </li>
            <li>
              <strong>Order Fulfillment:</strong> To share order details with vendors so they can
              prepare and deliver your order, and to provide real-time order status updates.
            </li>
            <li>
              <strong>Communication:</strong> To send you transactional messages (order confirmations,
              delivery updates), respond to your inquiries, and facilitate in-app chat with vendors.
            </li>
            <li>
              <strong>Push Notifications:</strong> To send you order updates, promotions, and other
              notifications you have opted into. You may opt out at any time through your device
              settings.
            </li>
            <li>
              <strong>Analytics and Improvement:</strong> To analyze usage patterns, monitor
              performance, troubleshoot issues, and improve the App and our services.
            </li>
            <li>
              <strong>Security and Fraud Prevention:</strong> To detect, prevent, and address fraud,
              unauthorized access, and other malicious activity; to enforce our Terms of Service.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal
              processes, or enforceable governmental requests.
            </li>
            <li>
              <strong>Vendor Payouts:</strong> To process and send payments to vendors for completed
              orders, including tax-related reporting as required by law.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing and Third Parties</h2>
          <p className="mt-2 text-gray-600">
            We share your personal information with the following categories of recipients:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Vendors:</strong> We share your name, delivery address, order details, and any
              chat messages with the relevant vendor to fulfill your order. Vendors are independent
              data controllers for this information.
            </li>
            <li>
              <strong>Payment Processor:</strong> We share payment information with our third-party
              payment processor to process transactions. The payment processor handles your payment
              card details in accordance with its own privacy policy and PCI-DSS compliance
              requirements.
            </li>
            <li>
              <strong>Supabase:</strong> We use Supabase for database hosting, authentication, and
              backend services. Supabase processes data on our behalf in accordance with its data
              processing agreements.
            </li>
            <li>
              <strong>Google:</strong> We use Google Firebase Cloud Messaging (FCM) to deliver push
              notifications and Google OAuth for authentication. Google processes data in accordance
              with the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a>.
            </li>
            <li>
              <strong>Analytics Providers:</strong> We may share usage data with analytics providers
              who help us understand how the App is used. This data is aggregated and does not
              directly identify you.
            </li>
            <li>
              <strong>Cloud Hosting Providers:</strong> Our application infrastructure is hosted by
              cloud service providers who process data on our behalf to provide hosting and
              infrastructure services.
            </li>
            <li>
              <strong>Law Enforcement and Legal Authorities:</strong> We may disclose your information
              if required by law, regulation, legal process, or governmental request, or where we
              believe disclosure is necessary to protect our rights, your safety, or the safety of
              others.
            </li>
          </ul>
          <p className="mt-2 text-gray-600">
            We do not sell your personal information. We do not share your personal information with
            third parties for their direct marketing purposes without your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Data Retention</h2>
          <p className="mt-2 text-gray-600">
            We retain your personal information for as long as necessary to fulfill the purposes
            described in this Privacy Policy, unless a longer retention period is required or
            permitted by law.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Account Information:</strong> Retained for as long as your account is active.
              When you request account deletion, your account enters a 30-day grace period. During
              this period, your account can be restored by contacting support. After 30 days, your
              account and associated personal data are permanently deleted, except as required to be
              retained by law.
            </li>
            <li>
              <strong>Order and Transaction Records:</strong> Retained for up to seven (7) years
              after the transaction date to comply with tax, accounting, and legal record-keeping
              requirements. After this period, transaction records are anonymized so they can no
              longer be linked to you.
            </li>
            <li>
              <strong>In-App Chat Data:</strong> Retained for as long as your account is active.
              Chat data is permanently deleted when your account is deleted after the 30-day grace
              period.
            </li>
            <li>
              <strong>Push Notification Tokens:</strong> Deleted when you uninstall the App, disable
              push notifications, or when your account is deleted.
            </li>
            <li>
              <strong>Device and Usage Data:</strong> Retained in identifiable form for up to twelve
              (12) months after collection. After this period, data is aggregated or anonymized.
            </li>
            <li>
              <strong>Customer Support Records:</strong> Retained for up to twenty-four (24) months
              after the support interaction is resolved.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Data Security</h2>
          <p className="mt-2 text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. These
            measures include:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Encryption in Transit:</strong> All data transmitted between your device and
              our servers is encrypted using Transport Layer Security (TLS/HTTPS).
            </li>
            <li>
              <strong>Encryption at Rest:</strong> Personal data stored in our databases is encrypted
              at rest using industry-standard encryption algorithms.
            </li>
            <li>
              <strong>Access Controls:</strong> Access to personal data is restricted to authorized
              personnel who need it to perform their duties, subject to strict confidentiality
              obligations.
            </li>
            <li>
              <strong>Row Level Security (RLS):</strong> Our Supabase database enforces Row Level
              Security policies to ensure that users can only access data they are authorized to
              view.
            </li>
            <li>
              <strong>Payment Security:</strong> Payment card data is processed by a PCI-DSS
              compliant payment processor. We do not store full payment card numbers on our servers.
            </li>
          </ul>
          <p className="mt-2 text-gray-600">
            While we strive to protect your personal information, no method of transmission over
            the Internet or electronic storage is 100% secure. We cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">7.1 California Residents (CCPA/CPRA)</h3>
          <p className="mt-2 text-gray-600">
            If you are a California resident, the California Consumer Privacy Act of 2018
            (CCPA), as amended by the California Privacy Rights Act of 2020 (CPRA), grants you
            the following rights:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Right to Know:</strong> You have the right to request that we disclose the
              categories and specific pieces of personal information we have collected about you, the
              categories of sources, the business or commercial purposes for which we collect or sell
              your personal information, and the categories of third parties with whom we share your
              personal information.
            </li>
            <li>
              <strong>Right to Delete:</strong> You have the right to request that we delete personal
              information we have collected from you, subject to certain exceptions.
            </li>
            <li>
              <strong>Right to Correct:</strong> You have the right to request that we correct
              inaccurate personal information we maintain about you.
            </li>
            <li>
              <strong>Right to Opt Out of Sale or Sharing:</strong> We do not sell or share your
              personal information as those terms are defined under the CCPA/CPRA. If this practice
              changes, you will be notified and provided with an opt-out mechanism.
            </li>
            <li>
              <strong>Right to Limit Use of Sensitive Personal Information:</strong> We do not use
              your sensitive personal information for purposes other than those permitted by the
              CCPA/CPRA.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for
              exercising any of your CCPA/CPRA rights.
            </li>
          </ul>
          <p className="mt-2 text-gray-600">
            To exercise your CCPA/CPRA rights, please contact us at{' '}
            <strong>support@zaikuu.com</strong>. We will verify your identity before processing your
            request and respond within forty-five (45) days.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href="#do-not-sell"
              className="block text-blue-600 hover:underline font-medium"
            >
              Do Not Sell or Share My Personal Information
            </a>
            <a
              href="#limit-sensitive"
              className="block text-blue-600 hover:underline font-medium"
            >
              Limit the Use of My Sensitive Personal Information
            </a>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">7.2 European Economic Area / United Kingdom / Switzerland Residents (GDPR)</h3>
          <p className="mt-2 text-gray-600">
            If you are located in the European Economic Area (EEA), the United Kingdom (UK), or
            Switzerland, you have the following rights under the General Data Protection Regulation
            (GDPR) and equivalent local laws:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Right of Access:</strong> You have the right to request a copy of the personal
              information we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> You have the right to request that we correct
              any inaccurate personal information about you.
            </li>
            <li>
              <strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to
              request that we delete your personal information, subject to legal retention
              requirements.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You have the right to request that we
              restrict the processing of your personal information in certain circumstances.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You have the right to request your personal
              information in a structured, commonly used, and machine-readable format.
            </li>
            <li>
              <strong>Right to Object:</strong> You have the right to object to the processing of
              your personal information where we rely on legitimate interests as the legal basis.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process
              personal information, you have the right to withdraw consent at any time.
            </li>
          </ul>
          <p className="mt-2 text-gray-600">
            To exercise your GDPR rights, contact us at <strong>support@zaikuu.com</strong>. We will
            respond within thirty (30) days. You also have the right to lodge a complaint with your
            local data protection authority.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">7.3 How to Exercise Your Rights</h3>
          <p className="mt-2 text-gray-600">
            To exercise any of the rights described above, please email us at{' '}
            <strong>support@zaikuu.com</strong> with a description of your request. We will verify
            your identity to protect your privacy and security. We may ask you to provide information
            to confirm your identity before processing your request. We will respond to your request
            within thirty (30) days. If we need additional time, we will inform you of the extension
            period and the reasons for the delay.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">8. Google OAuth</h2>
          <p className="mt-2 text-gray-600">
            When you choose to sign in with Google, we use Google OAuth to authenticate your
            identity. Through this process, Google provides us with your Google account name and
            email address. We use this information solely to create and manage your ZaiKuu account.
          </p>
          <p className="mt-2 text-gray-600">
            We do not access, collect, or store any other information from your Google account,
            including your Google contacts, calendar, drive files, or any other data associated with
            your Google account.
          </p>
          <p className="mt-2 text-gray-600">
            For more information about how Google handles your data, please refer to the{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">9. Push Notifications</h2>
          <p className="mt-2 text-gray-600">
            We use Firebase Cloud Messaging (FCM) to send push notifications to your device. Push
            notifications may include:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>Order status updates (confirmation, preparation, delivery)</li>
            <li>Delivery confirmations</li>
            <li>Chat messages from vendors</li>
            <li>Promotional offers and announcements (if you have opted in)</li>
            <li>Account security alerts</li>
          </ul>
          <p className="mt-2 text-gray-600">
            To deliver push notifications, we collect an FCM token associated with your device. You
            may opt out of push notifications at any time by disabling notifications in your device
            settings or within the App. Please note that opting out of push notifications may affect
            your ability to receive timely order updates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">10. Children&apos;s Privacy (COPPA)</h2>
          <p className="mt-2 text-gray-600">
            The ZaiKuu App is not directed to children under the age of 13. We do not knowingly
            collect personal information from children under 13. If we become aware that we have
            inadvertently collected personal information from a child under the age of 13, we will
            take steps to delete such information promptly.
          </p>
          <p className="mt-2 text-gray-600">
            By using the App, you represent that you are at least 13 years of age. If you are under
            18, you must have the consent of a parent or legal guardian to use the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">11. Cookies and Tracking Technologies</h2>
          <p className="mt-2 text-gray-600">
            We use cookies and similar tracking technologies to collect information about your
            browsing activity on our web-based landing pages and to improve the App. Cookies are
            small data files stored on your device.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>
              <strong>Essential Cookies:</strong> Required for the App to function properly, such as
              maintaining your session and authentication state.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Used to collect anonymized usage data to help us
              understand how users interact with the App and improve our services.
            </li>
          </ul>
          <p className="mt-2 text-gray-600">
            We honor the Global Privacy Control (GPC) signal. If your browser sends a GPC signal,
            we will treat it as a valid opt-out of the sale or sharing of personal information, as
            required by applicable law.
          </p>
          <p className="mt-2 text-gray-600">
            You can control cookies through your browser settings. Disabling certain cookies may
            affect the functionality of the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">12. Changes to This Privacy Policy</h2>
          <p className="mt-2 text-gray-600">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. When we make material changes, we will
            notify you by:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            <li>Posting the updated Privacy Policy on this page with a revised &quot;Last updated&quot; date</li>
            <li>Sending an in-app notification for material changes</li>
            <li>Sending an email to the address associated with your account for significant changes</li>
          </ul>
          <p className="mt-2 text-gray-600">
            We encourage you to review this Privacy Policy periodically. Your continued use of the
            App after any changes to this Privacy Policy constitutes your acceptance of the updated
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">13. Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us at:
          </p>
          <p className="mt-2 text-gray-600"><strong>Email:</strong> support@zaikuu.com</p>
          <p className="mt-2 text-gray-600">
            We will respond to your inquiry within thirty (30) days.
          </p>
        </section>
      </div>
    </div>
  );
}
