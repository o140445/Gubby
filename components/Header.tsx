import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-blue-100">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors flex items-center gap-2">
          <Image src="/images/Gubby.png" alt="GubbyGames Logo" width={30} height={30} className="w-10 h-10"/>
          <span className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">GubbyGames</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm">
          <Link href="/" className="hover:text-blue-600 transition-colors font-semibold text-gray-700">
            HOME
          </Link>
          <Link
            href="https://www.roblox.com/games/122702926589789/gubby-world"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors font-semibold text-gray-700"
          >
            PLAY
          </Link>
          {/* <span className="text-gray-400 font-semibold cursor-not-allowed">MEMES</span>
          <span className="text-gray-400 font-semibold cursor-not-allowed">VIDEOS</span> */}
        </div>
      </nav>
    </header>
  );
}