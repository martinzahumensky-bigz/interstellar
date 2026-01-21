import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Interstellar s.r.o.',
  description: 'Privacy Policy for Interstellar s.r.o. and SeekWhy.ai services',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Interstellar s.r.o. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website interstellar.guide and use our services, including SeekWhy.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We may collect information about you in various ways:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, and contact information you provide when contacting us or using our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Payment Information:</strong> When you make purchases, payment processing is handled by third-party payment processors (such as Stripe). We do not store your full payment card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our services (e.g., payment processors, hosting providers).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your
              personal information. However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights (GDPR)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you are located in the European Economic Area, you have certain rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at info@interstellar.guide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website
              and store certain information. You can instruct your browser to refuse all cookies or
              to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services may contain links to third-party websites or services. We are not responsible
              for the privacy practices of these third parties. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p className="text-gray-300">Interstellar s.r.o.</p>
              <p className="text-gray-300">Email: info@interstellar.guide</p>
              <p className="text-gray-300">Slovakia, EU</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
