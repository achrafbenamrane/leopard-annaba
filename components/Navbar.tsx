import Link from 'next/link'
import ContactButton from './ContactButton'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Leopard Annaba
        </Link>
        <div className="relative flex gap-3 items-center">
          <ContactButton />
          <a
            href="https://instagram.com/leopard_annaba"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white p-3 rounded-lg shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            title="Follow us on Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C8.396 0 7.996.014 6.79.067c-1.21.054-2.035.244-2.748.52a5.36 5.36 0 00-1.953 1.272A5.36 5.36 0 001.067 3.042C.79 3.755.6 4.58.547 5.79.493 7.006.48 7.396.48 12.017s.014 5.01.067 6.216c.054 1.21.244 2.035.52 2.748a5.36 5.36 0 001.272 1.953 5.36 5.36 0 001.953 1.272c.713.276 1.538.466 2.748.52 1.21.054 1.6.067 4.621.067s3.41-.014 4.621-.067c1.21-.054 2.035-.244 2.748-.52a5.36 5.36 0 001.953-1.272 5.36 5.36 0 001.272-1.953c.276-.713.466-1.538.52-2.748.054-1.21.067-1.6.067-4.621s-.014-3.41-.067-4.621c-.054-1.21-.244-2.035-.52-2.748a5.36 5.36 0 00-1.272-1.953 5.36 5.36 0 00-1.953-1.272c-.713-.276-1.538-.466-2.748-.52C16.238.014 15.848 0 12.227 0h-.21zm0 2.25c3.549 0 3.968.014 5.373.078 1.307.06 2.013.277 2.49.46a2.99 2.99 0 011.12.728 2.99 2.99 0 01.728 1.12c.183.477.4 1.183.46 2.49.064 1.405.078 1.824.078 5.373s-.014 3.968-.078 5.373c-.06 1.307-.277 2.013-.46 2.49a2.99 2.99 0 01-.728 1.12 2.99 2.99 0 01-1.12.728c-.477.183-1.183.4-2.49.46-1.405.064-1.824.078-5.373.078s-3.968-.014-5.373-.078c-1.307-.06-2.013-.277-2.49-.46a2.99 2.99 0 01-1.12-.728 2.99 2.99 0 01-.728-1.12c-.183-.477-.4-1.183-.46-2.49C2.282 15.985 2.268 15.566 2.268 12.017s.014-3.968.078-5.373c.06-1.307.277-2.013.46-2.49a2.99 2.99 0 011.12-.728 2.99 2.99 0 011.12-.728c.477-.183 1.183-.4 2.49-.46 1.405-.064 1.824-.078 5.373-.078z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}