import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function GubbyWorld() {
  return (
    <>
      <Head>
        <title>Gubby World - Explore the Chaotic Universe | GubbyGames</title>
        <meta name="description" content="Explore Gubby World - the ultimate chaotic Roblox adventure! Transform into different characters, survive the madness, and discover hidden secrets." />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        <Header />

        <section className="text-center py-12 px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Gubby World</h1>
          <p className="text-lg mb-6">Explore, transform, and run wild in this chaotic world.</p>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Gubby+World+Gameplay" 
              alt="Gubby World Gameplay" 
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Game Features</h2>
                <ul className="space-y-2">
                  <li>• Explore vast open worlds</li>
                  <li>• Transform into different characters</li>
                  <li>• Run wild with chaotic gameplay</li>
                  <li>• Multiplayer adventures</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Choose your character</li>
                  <li>Explore the world</li>
                  <li>Collect power-ups</li>
                  <li>Survive the chaos</li>
                </ol>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/" className="btn-secondary mr-4">Back to Home</Link>
              <button className="btn">Play Now</button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
} 