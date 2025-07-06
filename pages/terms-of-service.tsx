import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - GubbyGames</title>
        <meta name="description" content="Read GubbyGames terms of service and understand your rights and responsibilities. Learn about our service conditions and user guidelines." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <Header />

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-8 text-blue-800">Terms of Service</h1>
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>By accessing and using GubbyGames ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">2. Description of Service</h2>
                <div className="space-y-4 text-gray-700">
                  <p>GubbyGames provides information about Gubby World and related Roblox games. Our services include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Game information and resources</li>
                    <li>Community content and memes</li>
                    <li>Links to external gaming platforms</li>
                    <li>User-generated content sharing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">3. User Conduct</h2>
                <div className="space-y-4 text-gray-700">
                  <p>You agree not to use the service to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Upload or transmit harmful content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the service</li>
                    <li>Harass, abuse, or harm other users</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">4. Intellectual Property</h2>
                <div className="space-y-4 text-gray-700">
                  <p>The content on GubbyGames, including but not limited to text, graphics, images, logos, and software, is the property of GubbyGames or its content suppliers and is protected by copyright laws.</p>
                  <p>You may not reproduce, distribute, modify, or create derivative works from this content without our express written consent.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">5. External Links</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Our website contains links to external websites, including Roblox. We are not responsible for the content, privacy policies, or practices of any third-party websites. You access these links at your own risk.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">6. User-Generated Content</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you submit content to our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute your content.</p>
                  <p>You represent and warrant that you own or have the necessary rights to the content you submit.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">7. Disclaimers</h2>
                <div className="space-y-4 text-gray-700">
                  <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
                  <p>We do not guarantee that the service will be uninterrupted, secure, or error-free.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">8. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-700">
                  <p>IN NO EVENT SHALL GUBBYGAMES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">9. Indemnification</h2>
                <div className="space-y-4 text-gray-700">
                  <p>You agree to indemnify and hold harmless GubbyGames from any claims, damages, or expenses arising from your use of the service or violation of these terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">10. Termination</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We may terminate or suspend your access to the service immediately, without prior notice, for any reason, including breach of these terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">11. Governing Law</h2>
                <div className="space-y-4 text-gray-700">
                  <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which GubbyGames operates, without regard to its conflict of law provisions.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">12. Changes to Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-blue-700">13. Contact Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about these Terms of Service, please contact us at:</p>
                  <p>Email: legal@gubbygames.com</p>
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