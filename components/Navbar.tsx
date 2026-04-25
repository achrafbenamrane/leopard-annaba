import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-red-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Leopard Annaba
        </Link>
        <div className="text-sm">
          Smart Digital Menu
        </div>
      </div>
    </nav>
  )
}