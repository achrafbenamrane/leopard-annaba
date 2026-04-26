import Link from 'next/link'
import ContactButton from './ContactButton'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Leopard Annaba
        </Link>
        <div className="relative">
          <ContactButton />
        </div>
      </div>
    </nav>
  )
}