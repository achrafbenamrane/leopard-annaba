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
            href="https://www.instagram.com/leopard_pizza_annaba"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center transition-colors hover:scale-105 active:scale-95"
            title="Follow us on Instagram"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}