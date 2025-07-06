import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - GubbyGames</title>
        <meta name="description" content="Learn how GubbyGames collects, uses, and protects your information. Read our comprehensive privacy policy and understand your data rights." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <Header />

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-8 text-blue-800">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Visit our website</li>
                    <li>Use our services</li>
                    <li>Contact us for support</li>
                    <li>Subscribe to our updates</li>
                  </ul>
                  <p>We also automatically collect certain information about your device and how you interact with our website, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our services</li>
                    <li>Improve user experience</li>
                    <li>Analyze website usage and trends</li>
                    <li>Communicate with you about updates</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">3. Google Analytics</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics may collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pages visited and time spent</li>
                    <li>Geographic location</li>
                    <li>Device and browser information</li>
                    <li>Traffic sources</li>
                  </ul>
                  <p>You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">4. Cookies</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic</li>
                    <li>Improve website functionality</li>
                  </ul>
                  <p>You can control cookies through your browser settings.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">5. Information Sharing</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With service providers who assist in our operations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">6. Data Security</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">7. Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Lodge a complaint with supervisory authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">8. Children's Privacy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">9. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">10. Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p>Email: privacy@gubbygames.com</p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
} 