'use client'

import { motion } from 'framer-motion'

interface MenuViewerProps {
  type: 'sale' | 'sucre'
}

export default function MenuViewer({ type }: MenuViewerProps) {
  const images = type === 'sale' ? ['menu1.jpg', 'menu2.jpg'] : ['menu3.jpg', 'menu4.jpg']

  return (
    <motion.div
      className="flex flex-col gap-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      key={type} // Re-animate on type change
    >
      {images.map((img, index) => (
        <motion.div
          key={img}
          className="w-full"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            src={`/menu/${img}`}
            alt={`Menu ${img}`}
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}