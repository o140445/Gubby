import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { FAQItem } from "../components/FAQItem";

export default function Home() {
  const faqData = [
    {
      question: "🎮 How do I play Gubby World?",
      answer: "Simply click the 'PLAY NOW' button above to join the game on Roblox! No downloads required - just jump in and start exploring the chaotic world of Gubby."
    },
    {
      question: "💰 Is Gubby World free to play?",
      answer: "Yes! Gubby World is completely free to play on Roblox. You can enjoy all the chaos and fun without spending any money."
    },
    {
      question: "🎯 What's the goal of Gubby World?",
      answer: "There's no specific goal - just have fun! Explore the world, transform into different characters, survive the chaos, and create hilarious moments with other players."
    },
    {
      question: "👥 Can I play with friends?",
      answer: "Absolutely! Gubby World is a multiplayer game where you can play with friends and meet new people. The more players, the more chaotic and fun it gets!"
    },
    {
      question: "🔄 How often is the game updated?",
      answer: "The game is regularly updated with new features, transformations, and chaotic elements. Follow us for the latest updates and announcements!"
    },
    {
      question: "📱 Can I play on mobile?",
      answer: "Yes! Gubby World works on all devices that support Roblox, including mobile phones, tablets, and computers."
    }
  ];

  return (
    <>
      <Head>
        <title>Gubby World - The Funniest Roblox Game | GubbyGames</title>
        <meta
          name="description"
          content="Play Gubby World - the funniest and most chaotic Roblox experience! Transform, explore, and survive the madness. Join millions of players now."
        />
        <meta
          name="keywords"
          content="gubby, gubby world roblox, gubby game, gubby roblox, play gubby online, gubbygames"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gubby World - Roblox Game" />
        <meta
          property="og:description"
          content="Play the funniest and most chaotic Gubby game in Roblox. Join the madness!"
        />
        <meta property="og:image" content="/images/noFilter5.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gubbygames.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/noFilter5.webp" />
        <link rel="canonical" href="https://www.gubbygames.com/" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <Header />

        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-white h-[100vh]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 text-blue-800">
              GUBBY WORLD
            </h1>
            <p className="text-2xl mb-8 font-medium text-gray-700">
              The Funniest & Most Chaotic Roblox Adventure
            </p>

            <div className="mb-12">
              <Carousel
                images={["/images/noFilter5.webp", "/images/noFilter6.webp", "/images/noFilter7.webp"]}
                altTexts={["Explore Gubby World", "Transform & Survive", "Gubby Madness"]}
                autoPlay={true}
                interval={4000}
              />
            </div>

            <Link
              href="https://www.roblox.com/games/122702926589789/gubby-world"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-xl px-10 py-5"
            >
              🎮 PLAY NOW
            </Link>
          </div>
        </section>

        {/* About Gubby World */}
        <section className="py-20 px-4 text-gray-700 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">What is Gubby World?</h2>
            <p className="mb-4 text-lg">
              <strong>Gubby World</strong> is a Roblox game where players transform into hilarious Gubbies and explore a chaotic open world. 
              Loved by fans for its meme-worthy moments and crazy physics, Gubby World has become one of the most viral Roblox experiences online.
            </p>
            <p className="mb-4 text-lg">
              Whether you're looking to survive the Gubbies, find all hidden Gubbys, or just laugh at the best Gubby memes, this site is your ultimate fan hub.
              Play Gubby World today and join thousands of fans worldwide.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">FAQ</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>



        {/* What Players Are Saying */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">💬 What Players Are Saying</h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-200">
                <p className="italic mb-3">“Gubby World is the most chaotic Roblox game I've ever played – and I love it! The transformations are hilarious!”</p>
                <p className="font-semibold text-blue-700">– RobloxPlayer01</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
                <p className="italic mb-3">“I came for the memes, but I stayed for the madness. Gubby is an absolute masterpiece of chaos.”</p>
                <p className="font-semibold text-cyan-700">– GubbyFan247</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg shadow border border-indigo-200">
                <p className="italic mb-3">“This game is pure fun. My friends and I laughed for hours. Easily the funniest Roblox experience.”</p>
                <p className="font-semibold text-indigo-700">– ChaosGamerX</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">More Gubby Games Coming Soon</h2>
            <p className="text-lg text-gray-700 mb-8">We're working on new chaotic games and meme tools!</p>
            <div className="flex justify-center gap-6 text-sm flex-wrap">
              <span className="px-6 py-3 bg-white border border-blue-200 rounded-full shadow-md hover:shadow-lg transition-shadow">🧟‍♂️ Survive the Gubbies</span>
              <span className="px-6 py-3 bg-white border border-blue-200 rounded-full shadow-md hover:shadow-lg transition-shadow">🔍 Find All Gubbys</span>
              <span className="px-6 py-3 bg-white border border-blue-200 rounded-md shadow-md hover:shadow-lg transition-shadow">😂 Meme Generator</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}