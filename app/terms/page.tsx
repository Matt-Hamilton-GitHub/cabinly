import Link from 'next/link'
import { Mountain, ArrowLeft } from 'lucide-react'

export default function Terms() {
  const lastUpdated = 'May 1, 2025'
  const companyName = 'Cabinly'
  const companyEmail = 'legal@cabinly.com'
  const companyAddress = '123 Alpine Way, Zurich, Switzerland'

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Cabinly platform, website, or any of our services (collectively, the "Services"), you confirm that you are at least 18 years of age, have read and understood these Terms of Service, and agree to be legally bound by them. If you are using our Services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these terms.

If you do not agree to these terms, please do not access or use our Services.`
    },
    {
      title: '2. Description of Services',
      content: `Cabinly is an online travel marketplace that connects travellers with handpicked cabin accommodations, local guides, and curated outdoor activities across 120+ destinations worldwide. We act as an intermediary between guests and accommodation providers or activity operators.

Cabinly does not own, operate, manage, or control any of the listed properties or activities. We are not responsible for the conduct of hosts, guides, or guests. All bookings are subject to availability and the individual terms of the respective host or operator.`
    },
    {
      title: '3. User Accounts',
      content: `To access certain features of our Services you must register for an account. When creating an account you agree to:

- Provide accurate, current, and complete information
- Maintain the security of your password and account credentials
- Notify us immediately at ${companyEmail} if you suspect any unauthorized use of your account
- Accept responsibility for all activities that occur under your account

We reserve the right to suspend or terminate accounts that violate these terms, provide false information, or engage in fraudulent activity. You may not create more than one personal account.`
    },
    {
      title: '4. Bookings and Payments',
      content: `When you make a booking through Cabinly, you enter into a direct agreement with the host or operator for that listing. Cabinly facilitates the transaction but is not a party to the agreement between guest and host.

All prices displayed are in USD unless stated otherwise and include applicable service fees. Taxes may apply depending on your jurisdiction and the destination.

Payment is processed securely through our third-party payment partners. By submitting payment information, you authorize us to charge the applicable fees to your chosen payment method.

Cabinly reserves the right to cancel any booking at its discretion where fraud, misrepresentation, or a violation of these terms is suspected. In such cases, a full refund will be issued to the original payment method.`
    },
    {
      title: '5. Cancellation and Refund Policy',
      content: `Our standard cancellation policy is as follows:

- Cancellations made 14 or more days before the trip start date: Full refund
- Cancellations made 7–13 days before the trip start date: 50% refund
- Cancellations made less than 7 days before the trip start date: No refund

Individual listings may have their own cancellation policies which supersede this standard policy. Always review the specific cancellation terms on each listing before booking.

Activities and guided experiences are non-refundable within 48 hours of the scheduled start time unless cancelled by the guide or operator due to weather, safety concerns, or other circumstances beyond their control, in which case a full refund will be issued.

Refunds are processed within 5–10 business days to your original payment method.`
    },
    {
      title: '6. User Conduct',
      content: `By using our Services, you agree not to:

- Violate any applicable local, national, or international laws or regulations
- Use our platform for any fraudulent, deceptive, or harmful purpose
- Attempt to gain unauthorized access to any part of our platform or systems
- Post or transmit any content that is unlawful, defamatory, threatening, obscene, or offensive
- Interfere with the proper functioning of the platform or its infrastructure
- Collect or harvest personal data of other users without their consent
- Impersonate any person or entity or misrepresent your affiliation with any person or entity
- Use automated tools, bots, or scrapers to access or extract data from our platform

Violation of these conduct rules may result in immediate termination of your account and may be reported to relevant authorities.`
    },
    {
      title: '7. Intellectual Property',
      content: `All content on the Cabinly platform, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of Cabinly or its content suppliers and is protected by applicable intellectual property laws.

You are granted a limited, non-exclusive, non-transferable licence to access and use the Services for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our platform without our express written permission.

User-submitted content such as reviews and photos remains the intellectual property of the submitting user, but by submitting such content you grant Cabinly a worldwide, royalty-free, perpetual licence to use, display, and distribute that content in connection with our Services.`
    },
    {
      title: '8. Reviews and User Content',
      content: `Users may submit reviews, ratings, and other content related to their experiences. By submitting content you confirm that:

- The content is accurate and based on your genuine first-hand experience
- The content does not infringe any third-party intellectual property rights
- The content does not contain personal attacks, hate speech, or discriminatory language
- You have the right to grant Cabinly the licence described in Section 7

Cabinly reserves the right to remove any content that violates these guidelines without notice. We do not endorse or verify the accuracy of user-submitted reviews.`
    },
    {
      title: '9. Limitation of Liability',
      content: `To the fullest extent permitted by applicable law, Cabinly and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services, including but not limited to:

- Personal injury or property damage of any nature
- Loss of profits, data, or goodwill
- Cost of substitute goods or services
- Any unauthorized access to or alteration of your transmissions or data

Our total liability to you for any claims arising from your use of the Services shall not exceed the total amount paid by you to Cabinly in the 12 months preceding the event giving rise to the claim.

These limitations apply regardless of the legal theory under which the claim arises, even if Cabinly has been advised of the possibility of such damages.`
    },
    {
      title: '10. Indemnification',
      content: `You agree to indemnify, defend, and hold harmless Cabinly and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses, including reasonable legal fees, arising out of or related to:

- Your use of or access to the Services
- Your violation of these Terms of Service
- Your violation of any rights of another party
- Any content you submit or transmit through the Services`
    },
    {
      title: '11. Third-Party Services',
      content: `Our platform may contain links to or integrations with third-party websites, services, or applications that are not owned or controlled by Cabinly. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party services.

We strongly advise you to review the terms and privacy policies of any third-party services you interact with through our platform. Your use of third-party services is governed by their respective terms and not by these Terms of Service.`
    },
    {
      title: '12. Dispute Resolution',
      content: `Any dispute, controversy, or claim arising out of or relating to these Terms of Service or your use of the Services shall first be subject to good-faith negotiation between the parties. If the dispute cannot be resolved within 30 days of written notice, it shall be submitted to binding arbitration in accordance with the rules of the Swiss Chambers' Arbitration Institution.

The arbitration shall be conducted in English, in Zurich, Switzerland. The arbitral award shall be final and binding and may be enforced in any court of competent jurisdiction.

Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights.`
    },
    {
      title: '13. Governing Law',
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. You consent to the personal jurisdiction of the courts located in Zurich, Switzerland for any disputes not subject to arbitration under Section 12.`
    },
    {
      title: '14. Modifications to Terms',
      content: `Cabinly reserves the right to modify these Terms of Service at any time. When we make material changes, we will notify you by email or through a prominent notice on our platform at least 14 days before the changes take effect.

Your continued use of the Services after the effective date of the revised terms constitutes your acceptance of those terms. If you do not agree to the revised terms, you must discontinue use of the Services and may close your account.`
    },
    {
      title: '15. Termination',
      content: `Cabinly may terminate or suspend your account and access to the Services at any time, with or without cause, and with or without notice, including if we believe you have violated these Terms of Service.

Upon termination, your right to use the Services will immediately cease. All provisions of these terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

You may close your account at any time by contacting us at ${companyEmail}.`
    },
    {
      title: '16. Contact Us',
      content: `If you have any questions about these Terms of Service, please contact us at:

${companyName}
${companyAddress}
Email: ${companyEmail}

We aim to respond to all legal enquiries within 5 business days.`
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-[#0f3d3e] px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg className="w-full h-full" viewBox="0 0 100 100"
            preserveAspectRatio="none">
            <path d="M0 100 L50 20 L100 100 Z" fill="#e8f0ed" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <Link href="/"
            className="inline-flex items-center gap-2 text-[#e8f0ed]/60
            text-xs mb-8 hover:text-[#e8f0ed] transition-colors">
            <Mountain size={14} className="text-[#a8d5d0]" />
            Cabinly
          </Link>
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-3">
            Legal
          </p>
          <h1 className="font-serif text-4xl text-[#e8f0ed] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#e8f0ed]/50 font-light text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro */}
        <div className="bg-[#f8faf9] border border-[#0f3d3e]/08 rounded-2xl
          p-6 mb-12">
          <p className="text-sm text-gray-600 leading-relaxed">
            Please read these Terms of Service carefully before using the
            Cabinly platform. These terms constitute a legally binding agreement
            between you and Cabinly. If you have questions, contact us at{' '}
            <a href={`mailto:${companyEmail}`}
              className="text-[#0f3d3e] font-medium hover:text-[#a8d5d0]
              transition-colors">
              {companyEmail}
            </a>
          </p>
        </div>

        {/* Table of contents */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase
            text-[#a8d5d0] mb-4">
            Contents
          </p>
          <div className="grid sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              
               <a key={s.title}
                href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`}
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
              id={s.title.replace(/\s+/g, '-').toLowerCase()}
              className="scroll-mt-8"
            >
              <h2 className="text-lg font-medium text-[#0f3d3e] mb-3">
                {s.title}
              </h2>
              <div className="h-px bg-[#0f3d3e]/06 mb-4" />
              <p className="text-sm text-gray-500 leading-relaxed
                whitespace-pre-line">
                {s.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#0f3d3e]/08 flex
          items-center justify-between flex-wrap gap-4">
          <Link href="/privacy"
            className="text-sm text-[#0f3d3e] font-medium
            hover:text-[#a8d5d0] transition-colors">
            Privacy Policy →
          </Link>
          <Link href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400
            hover:text-[#0f3d3e] transition-colors">
            <ArrowLeft size={14} />
            Back to Cabinly
          </Link>
        </div>
      </div>
    </div>
  )
}