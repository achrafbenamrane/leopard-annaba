'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="text-center">
          <motion.h1
            className="text-6xl font-bold text-red-800 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Leopard Annaba
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-700 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Smart Digital Menu
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/menu?type=sale">
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-2xl text-xl shadow-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Menu Savory
              </motion.button>
            </Link>
            <Link href="/menu?type=sucre">
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-2xl text-xl shadow-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Menu Sweet
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}