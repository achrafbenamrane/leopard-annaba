'use client'

import { motion } from 'framer-motion'

interface MenuToggleProps {
  active: 'sale' | 'sucre'
  onToggle: (type: 'sale' | 'sucre') => void
}

export default function MenuToggle({ active, onToggle }: MenuToggleProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white rounded-full p-1 shadow-lg">
        <div className="flex">
          <motion.button
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors ${
              active === 'sale' ? 'bg-red-600 text-white' : 'text-gray-600'
            }`}
            onClick={() => onToggle('sale')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Savory
          </motion.button>
          <motion.button
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors ${
              active === 'sucre' ? 'bg-red-600 text-white' : 'text-gray-600'
            }`}
            onClick={() => onToggle('sucre')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sweet
          </motion.button>
        </div>
      </div>
    </div>
  )
}