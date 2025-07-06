import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 text-center py-4 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4">
          <div className="flex justify-center space-x-6 text-xs">

          <p>© 2025 GubbyGames · All rights reserved.</p>
          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 transition-colors">
            Terms of Service
          </Link>
        </div>
          <p className="mt-2 text-xs text-gray-500">Built with ❤️ for the Gubby community</p>
        </div>
        
     
      </div>
    </footer>
  );
}