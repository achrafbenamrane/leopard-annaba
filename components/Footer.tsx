export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-red-800 text-white p-4 text-center z-50">
      <p className="text-sm">
        Developed by{' '}
        <a
          href="https://benamrane.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          https://benamrane.vercel.app
        </a>
      </p>
    </footer>
  )
}