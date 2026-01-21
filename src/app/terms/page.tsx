import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | Interstellar s.r.o.',
  description: 'Terms of Service for Interstellar s.r.o. and SeekWhy.ai services',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using the services provided by Interstellar s.r.o. (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
              including the website interstellar.guide and SeekWhy.ai platform, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Interstellar s.r.o. provides:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>SaaS software development services</li>
              <li>AI and Agentic AI consulting services</li>
              <li>SeekWhy.ai - an AI-powered research and analysis platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed">
              When you create an account with us, you must provide accurate and complete information.
              You are responsible for safeguarding your account credentials and for all activities
              that occur under your account. You must notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Payments and Billing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For paid services:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>All fees are quoted in the applicable currency and are due as specified.</li>
              <li>Payment processing is handled securely by Stripe. Your payment information is processed directly by Stripe and is subject to their terms and privacy policy.</li>
              <li>Subscription services will automatically renew unless cancelled before the renewal date.</li>
              <li>Refunds are handled on a case-by-case basis according to our refund policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Transmit malicious code or interfere with our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for any illegal or harmful purposes</li>
              <li>Resell or redistribute our services without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of our services, including but not limited to
              text, graphics, logos, and software, are owned by Interstellar s.r.o. and are protected
              by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. User Content</h2>
            <p className="text-gray-300 leading-relaxed">
              You retain ownership of any content you submit to our services. By submitting content,
              you grant us a license to use, process, and display that content as necessary to provide
              our services. You are responsible for ensuring you have the rights to any content you submit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not warrant that our services will be uninterrupted,
              error-free, or completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, Interstellar s.r.o. shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits
              or revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice,
              for any reason, including breach of these Terms. Upon termination, your right to use our
              services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Slovak Republic,
              without regard to its conflict of law provisions. Any disputes shall be resolved in the courts
              of the Slovak Republic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material
              changes by posting the new Terms on this page. Your continued use of our services after
              such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p className="text-gray-300">Interstellar s.r.o.</p>
              <p className="text-gray-300">Email: info@interstellar.guide</p>
              <p className="text-gray-300">Company Registration: ICO 51940299</p>
              <p className="text-gray-300">
                <a
                  href="https://www.orsr.sk/vypis.asp?ID=429326&SID=2&P=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  Commercial Register Entry
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
