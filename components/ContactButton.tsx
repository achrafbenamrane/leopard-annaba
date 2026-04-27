'use client'

import { useState, useEffect } from 'react'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen && typeof window !== 'undefined') {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  const phoneNumbers = [
    '07 90339310',
    '05 62369769',
    '06 74448850'
  ]

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-700 hover:bg-red-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center transition-colors hover:scale-105 active:scale-95"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl p-3 max-w-xs w-full mx-4 shadow-2xl border border-gray-100 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full -mr-10 -mt-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full -ml-8 -mb-8 opacity-30"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-3">
                <h2 className="text-lg font-bold text-gray-800 mb-1 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <p className="text-gray-600 text-xs leading-tight">
                  Ready to order? Call us!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-2">
                {/* Phone Numbers Section */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 bg-red-100 rounded-md flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-800">Phone Numbers</h3>
                  </div>

                  <div className="grid gap-1.5">
                    {phoneNumbers.map((number, index) => (
                      <a
                        key={index}
                        href={`tel:${number.replace(/\s/g, '')}`}
                        className="group relative overflow-hidden bg-gradient-to-r from-red-50 via-red-100 to-pink-50 hover:from-red-100 hover:via-red-200 hover:to-pink-100 p-2.5 rounded-lg border border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center">
                            <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center mr-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-800 group-hover:text-red-800 transition-colors">
                                {number}
                              </div>
                              <div className="text-xs text-gray-600 group-hover:text-red-600 transition-colors">
                                Tap to call
                              </div>
                            </div>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>

                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-3 pt-2 border-t border-gray-200">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 px-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 flex items-center justify-center group text-sm"
                >
                  <svg className="w-3 h-3 mr-1.5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}