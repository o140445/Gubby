import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
        <section className="text-center py-20 md:py-10 px-4 bg-white h-[100vh]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 text-blue-800">
              GUBBY WORLD
            </h1>
            <p className="text-2xl mb-8 font-medium text-gray-700">
              The Funniest & Most Chaotic Roblox Adventure
            </p>

            <div className="mb-12">
              <img 
                src="/images/noFilter5.webp" 
                alt="Gubby World Gameplay - Explore and Transform" 
                className="md:h-96 h-64 mx-auto rounded-xl shadow-2xl"
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
          <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">What is Gubby World?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Gubby World is a chaotic, funny, and unpredictable Roblox experience where you explore, transform, and try to survive the madness. Built by fans, for fans.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">🎮 Game Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Multiple Transformations:</strong> Transform into various characters with unique abilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Open World Exploration:</strong> Discover hidden areas and secret locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Multiplayer Chaos:</strong> Play with friends and create hilarious moments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Dynamic Events:</strong> Experience random events that change gameplay</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">🏆 Why Players Love It</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Endless Fun:</strong> No two games are ever the same</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Community Driven:</strong> Regular updates based on player feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Family Friendly:</strong> Safe for players of all ages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Free to Play:</strong> No hidden costs or pay-to-win mechanics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Game Features Deep Dive */}
        <section className="py-20 px-4  bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Why Gubby World is Different</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                    <span className="mr-3">🎭</span>
                    Revolutionary Transformation System
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Unlike any other Roblox game, Gubby World features a dynamic transformation system that changes not just your appearance, but your entire gameplay experience. Each transformation comes with unique abilities, movement patterns, and special interactions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 50+ unique character transformations</li>
                    <li>• Each transformation has special abilities</li>
                    <li>• Dynamic physics-based interactions</li>
                    <li>• Unlockable rare transformations</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                    <span className="mr-3">🌍</span>
                    Massive Open World
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Explore a vast, ever-expanding world filled with secrets, hidden areas, and unexpected discoveries. From underground caves to floating islands, every corner of Gubby World holds something new to discover.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Multiple distinct biomes and areas</li>
                    <li>• Hidden passages and secret rooms</li>
                    <li>• Dynamic weather and time systems</li>
                    <li>• Regular world expansions and updates</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                    <span className="mr-3">🎯</span>
                    Community-Driven Development
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Gubby World is built by the community, for the community. Player feedback directly influences game updates, new features, and content additions. Your voice matters in shaping the future of the game.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Weekly community polls and surveys</li>
                    <li>• Player-suggested features implemented</li>
                    <li>• Regular developer-player interactions</li>
                    <li>• Community content creation tools</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                    <span className="mr-3">🚀</span>
                    Advanced Technology
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Built with cutting-edge Roblox technology, Gubby World delivers smooth performance, stunning visuals, and innovative gameplay mechanics that push the boundaries of what's possible in Roblox.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Optimized for all devices and platforms</li>
                    <li>• Advanced physics and animation systems</li>
                    <li>• Real-time multiplayer synchronization</li>
                    <li>• Cloud-based save and progress system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* How to Play */}
        <section className="py-20 px-4  bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">How to Play Gubby World</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-700">Getting Started</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Create Your Account</h4>
                      <p className="text-gray-600">Sign up for a free Roblox account if you don't have one already</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Join the Game</h4>
                      <p className="text-gray-600">Click the "PLAY NOW" button above to enter Gubby World</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Explore & Transform</h4>
                      <p className="text-gray-600">Discover the world and find transformation points</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Have Fun!</h4>
                      <p className="text-gray-600">Enjoy the chaos and make new friends in the community</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-700">Pro Tips</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">🎯 Master Transformations</h4>
                    <p className="text-gray-700">Each transformation has unique abilities. Experiment to find your favorites!</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">👥 Team Up</h4>
                    <p className="text-gray-700">Playing with friends makes the experience even more chaotic and fun!</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🔍 Explore Everything</h4>
                    <p className="text-gray-700">Hidden areas often contain rare transformations and secrets!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
        {/* Player Reviews */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">What Players Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                  <span className="text-sm text-gray-500">5.0/5</span>
                </div>
                <p className="italic mb-3 text-gray-700">"Gubby World is the most chaotic Roblox game I've ever played – and I love it! The transformations are hilarious and the community is amazing."</p>
                <p className="font-semibold text-blue-700">– RobloxPlayer01</p>
                <p className="text-xs text-gray-500">Verified Player</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                  <span className="text-sm text-gray-500">5.0/5</span>
                </div>
                <p className="italic mb-3 text-gray-700">"My kids love this game! It's safe, fun, and keeps them entertained for hours. The developers really care about the community."</p>
                <p className="font-semibold text-blue-700">– GamingMom2024</p>
                <p className="text-xs text-gray-500">Parent</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                  <span className="text-sm text-gray-500">5.0/5</span>
                </div>
                <p className="italic mb-3 text-gray-700">"The best part is that it's completely free! No pay-to-win, no annoying ads. Just pure chaotic fun with friends."</p>
                <p className="font-semibold text-blue-700">– ChaosLover99</p>
                <p className="text-xs text-gray-500">Regular Player</p>
              </div>
            </div>
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