import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Memes() {
  return (
    <>
      <Head>
        <title>Gubby Memes - Viral Gubby Content & Funny Moments | GubbyGames</title>
        <meta name="description" content="The funniest Gubby memes that went viral! Discover hilarious Gubby content from TikTok, Reddit, and more. Share your favorite Gubby moments!" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 text-gray-800">
        <Header />

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 text-red-800">😂 GUBBY MEMES</h1>
            <p className="text-xl text-center mb-12 text-gray-600">The funniest Gubby content that went viral!</p>

            {/* Featured Memes */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
                <img src="https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=😂+GUBBY+TRANSFORM" alt="Gubby Transform Meme" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold text-red-800 mb-2">When Gubby transforms...</h3>
                <p className="text-gray-600 mb-3">This meme went viral on TikTok with 2M+ views!</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>🔥 2.1M views</span>
                  <span>📱 TikTok</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-xl transition-shadow">
                <img src="https://via.placeholder.com/400x300/FFA500/FFFFFF?text=👻+SURVIVE+STRUGGLE" alt="Survive Struggle Meme" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">Survive the Gubbies be like...</h3>
                <p className="text-gray-600 mb-3">Reddit's favorite Gubby survival moment!</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>🔥 500K upvotes</span>
                  <span>📱 Reddit</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-shadow">
                <img src="https://via.placeholder.com/400x300/FFD700/FFFFFF?text=🔍+FIND+ALL+PAIN" alt="Find All Pain Meme" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Find All Gubbys struggle</h3>
                <p className="text-gray-600 mb-3">The ultimate Gubby collection pain!</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>🔥 300K shares</span>
                  <span>📱 Twitter</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <img src="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=🎮+GUBBY+WORLD+CHAOS" alt="Gubby World Chaos" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold text-purple-800 mb-2">Gubby World chaos</h3>
                <p className="text-gray-600 mb-3">When everyone transforms at once!</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>🔥 1.5M views</span>
                  <span>📱 YouTube</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-shadow">
                <img src="https://via.placeholder.com/400x300/EC4899/FFFFFF?text=😱+GUBBY+JUMPSCARE" alt="Gubby Jumpscare" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold text-pink-800 mb-2">Gubby jumpscare moment</h3>
                <p className="text-gray-600 mb-3">The scariest Gubby encounter ever!</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>🔥 800K reactions</span>
                  <span>📱 Instagram</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
                <img src="https://via.placeholder.com/400x300/10B981/FFFFFF?text=🎉+GUBBY+SUCCESS" alt="Gubby Success" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Finally found all Gubbys!</h3>
                <p className="text-gray-600 mb-3">The satisfaction of completing the collection!</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>🔥 400K likes</span>
                  <span>📱 TikTok</span>
                </div>
              </div>
            </div>

            {/* Meme Categories */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-red-800">📱 MEME CATEGORIES</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">TikTok Memes</h3>
                  <p className="text-gray-600 mb-4">Viral Gubby content from TikTok</p>
                  <a href="/memes/tiktok" className="text-red-600 hover:underline font-semibold">View TikTok Memes →</a>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-4xl mb-4">📺</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-2">Reddit Memes</h3>
                  <p className="text-gray-600 mb-4">Community favorites from Reddit</p>
                  <a href="/memes/reddit" className="text-orange-600 hover:underline font-semibold">View Reddit Memes →</a>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-lg">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">Gaming Memes</h3>
                  <p className="text-gray-600 mb-4">Gubby gaming moments</p>
                  <a href="/memes/gaming" className="text-yellow-600 hover:underline font-semibold">View Gaming Memes →</a>
                </div>
              </div>
            </div>

            {/* Submit Meme */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">🎨 Submit Your Gubby Meme</h3>
              <p className="text-gray-600 mb-6">Share your favorite Gubby moments with the community!</p>
              <button className="btn bg-red-600 hover:bg-red-700 text-white">📤 SUBMIT MEME</button>
            </div>

            <div className="mt-12 text-center">
              <Link href="/" className="btn-secondary">← Back to Home</Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
} 