import Link from "next/link";
import { Mountain, ArrowLeft } from "lucide-react";

export default function Privacy() {
  const lastUpdated = "May 1, 2025";
  const companyName = "Cabinly";
  const companyEmail = "privacy@cabinly.com";
  const companyAddress = "123 Alpine Way, Zurich, Switzerland";

  const sections = [
    {
      title: "1. Who We Are",
      content: `${companyName} ("we", "our", or "us") operates the Cabinly travel marketplace platform. We are committed to protecting your personal data and respecting your privacy rights in accordance with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (FADP).

Our registered address is ${companyAddress}. For all privacy-related enquiries, contact our Data Protection Officer at ${companyEmail}.`,
    },
    {
      title: "2. Data We Collect",
      content: `We collect the following categories of personal data:

Account and Identity Data
- Full name, email address, and password (hashed)
- Profile photo (if provided)
- Date of birth (for age verification where required)

Booking and Transaction Data
- Booking history, trip preferences, and saved places
- Payment information (processed and stored by our payment provider — we do not store full card details)
- Communications with hosts and guides

Usage and Technical Data
- IP address, browser type, and device information
- Pages visited, features used, and time spent on the platform
- Cookies and tracking technologies (see Section 7)

Location Data
- Approximate location inferred from IP address
- Precise location only if you grant permission through your device

User-Generated Content
- Reviews, ratings, and photos you submit
- Messages sent through our platform

We do not knowingly collect personal data from children under the age of 16.`,
    },
    {
      title: "3. How We Use Your Data",
      content: `We use your personal data for the following purposes:

- To provide, operate, and improve our Services
- To process bookings and handle payments
- To communicate with you about your trips and account
- To send you transactional emails (booking confirmations, receipts)
- To send marketing communications (only with your consent)
- To personalise your experience and recommend relevant destinations
- To detect, prevent, and respond to fraud or security incidents
- To comply with our legal obligations
- To enforce our Terms of Service

We process your data on the following legal bases under GDPR:
- Contract performance (processing necessary to fulfil your bookings)
- Legitimate interests (platform security, fraud prevention, service improvement)
- Legal obligation (tax records, regulatory compliance)
- Consent (marketing communications, optional cookies)`,
    },
    {
      title: "4. How We Share Your Data",
      content: `We do not sell your personal data. We may share your data with:

Hosts and Guides
When you make a booking, we share relevant booking details (name, contact information, trip details) with the host or guide. This is necessary to fulfil your booking.

Service Providers
We work with trusted third-party providers who process data on our behalf, including payment processors, cloud hosting providers, email delivery services, and analytics platforms. All providers are bound by data processing agreements and may only use your data as instructed by us.

Legal and Regulatory Authorities
We may disclose your data to law enforcement, regulators, or courts when required by law or when necessary to protect the rights, property, or safety of Cabinly, our users, or the public.

Business Transfers
In the event of a merger, acquisition, or sale of all or part of our business, your data may be transferred to the acquiring entity. We will notify you before your data becomes subject to a different privacy policy.

We do not share your data with third parties for their own marketing purposes.`,
    },
    {
      title: "5. Data Retention",
      content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, and reporting requirements.

- Account data is retained for the duration of your account and for 3 years after closure
- Booking and transaction data is retained for 7 years for tax and legal compliance
- Marketing data is retained until you withdraw consent or unsubscribe
- Technical logs are retained for up to 12 months

When data is no longer required, it is securely deleted or anonymised.`,
    },
    {
      title: "6. Your Rights",
      content: `Depending on your location, you may have the following rights regarding your personal data:

Right of Access — Request a copy of the personal data we hold about you.

Right to Rectification — Request correction of inaccurate or incomplete data.

Right to Erasure — Request deletion of your personal data where we have no legitimate reason to continue processing it.

Right to Restriction — Request that we restrict processing of your data in certain circumstances.

Right to Data Portability — Request a structured, machine-readable copy of your data.

Right to Object — Object to processing based on legitimate interests or for direct marketing purposes.

Right to Withdraw Consent — Withdraw consent at any time where processing is based on consent, without affecting the lawfulness of prior processing.

Right to Lodge a Complaint — Lodge a complaint with your local data protection authority. In Switzerland this is the Federal Data Protection and Information Commissioner (FDPIC).

To exercise any of these rights, contact us at ${companyEmail}. We will respond within 30 days. We may need to verify your identity before processing your request.`,
    },
    {
      title: "7. Cookies",
      content: `We use cookies and similar tracking technologies to operate and improve our Services. Cookies are small text files stored on your device.

We use the following types of cookies:

Strictly Necessary — Required for the platform to function (authentication, security). These cannot be disabled.

Functional — Remember your preferences such as language and currency settings.

Analytics — Help us understand how users interact with our platform using aggregated, anonymised data. We use privacy-respecting analytics tools.

Marketing — Used to deliver relevant advertising where you have consented. These may be set by our advertising partners.

You can manage your cookie preferences through your browser settings or our cookie consent banner. Disabling certain cookies may affect platform functionality.`,
    },
    {
      title: "8. Data Security",
      content: `We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or damage. These include:

- Encryption of data in transit using TLS (HTTPS)
- Encryption of sensitive data at rest
- Hashed and salted password storage
- Access controls and role-based permissions
- Regular security audits and penetration testing
- Incident response procedures

No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. In the event of a data breach that is likely to result in high risk to your rights and freedoms, we will notify you and the relevant supervisory authority as required by law.`,
    },
    {
      title: "9. International Transfers",
      content: `Cabinly operates globally and your data may be transferred to and processed in countries outside your country of residence, including countries that may not provide the same level of data protection as your home country.

Where we transfer data outside the European Economic Area (EEA) or Switzerland, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission, or transfers to countries with an adequacy decision.

You may request a copy of the relevant transfer mechanisms by contacting ${companyEmail}.`,
    },
    {
      title: "10. Third-Party Links",
      content: `Our platform may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party services. We encourage you to review the privacy policies of any third-party services you access through our platform.

We are not responsible for the privacy practices or content of third-party websites.`,
    },
    {
      title: "11. Marketing Communications",
      content: `With your consent, we may send you marketing emails about new destinations, special offers, and platform updates. You can withdraw consent and unsubscribe at any time by:

- Clicking the "Unsubscribe" link in any marketing email
- Updating your notification preferences in your account settings
- Contacting us at ${companyEmail}

Withdrawing consent does not affect transactional communications related to your bookings, which are necessary for the performance of your contract with us.`,
    },
    {
      title: "12. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you by email or through a prominent notice on our platform at least 14 days before the changes take effect.

The date at the top of this policy indicates when it was last revised. Your continued use of the Services after the effective date constitutes your acceptance of the revised policy.`,
    },
    {
      title: "13. Contact Us",
      content: `For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer:

${companyName}
${companyAddress}
Email: ${companyEmail}

We aim to respond to all privacy-related enquiries within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with the relevant supervisory authority in your country.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0f3d3e] px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L50 20 L100 100 Z" fill="#e8f0ed" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#e8f0ed]/60
            text-xs mb-8 hover:text-[#e8f0ed] transition-colors"
          >
            <Mountain size={14} className="text-[#a8d5d0]" />
            Cabinly
          </Link>
          <p
            className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-3"
          >
            Legal
          </p>
          <h1 className="font-serif text-4xl text-[#e8f0ed] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#e8f0ed]/50 font-light text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Intro */}
        <div
          className="bg-[#f8faf9] border border-[#0f3d3e]/08 rounded-2xl
          p-6 mb-12"
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            Your privacy matters to us. This policy explains what data we
            collect, why we collect it, and how you can control it. We comply
            with the GDPR, the Swiss Federal Act on Data Protection (FADP), and
            other applicable privacy laws. Questions? Contact us at{" "}
            <a
              href={`mailto:${companyEmail}`}
              className="text-[#0f3d3e] font-medium hover:text-[#a8d5d0]
              transition-colors"
            >
              {companyEmail}
            </a>
          </p>
        </div>

        {/* Table of contents */}
        <div className="mb-12">
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase
            text-[#a8d5d0] mb-4"
          >
            Contents
          </p>
          <div className="grid sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              <a
                key={s.title}
                href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-[#0f3d3e]
                py-1 transition-colors font-light"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div
              key={s.title}
              id={s.title.replace(/\s+/g, "-").toLowerCase()}
              className="scroll-mt-8"
            >
              <h2 className="text-lg font-medium text-[#0f3d3e] mb-3">
                {s.title}
              </h2>
              <div className="h-px bg-[#0f3d3e]/06 mb-4" />
              <p
                className="text-sm text-gray-500 leading-relaxed
                whitespace-pre-line"
              >
                {s.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-8 border-t border-[#0f3d3e]/08 flex
          items-center justify-between flex-wrap gap-4"
        >
          <Link
            href="/terms"
            className="text-sm text-[#0f3d3e] font-medium
            hover:text-[#a8d5d0] transition-colors"
          >
            Terms of Service →
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400
            hover:text-[#0f3d3e] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Cabinly
          </Link>
        </div>
      </div>
    </div>
  );
}
