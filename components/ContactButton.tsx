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
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
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
                      <div
                        key={index}
                        className="group relative overflow-hidden bg-gradient-to-r from-red-50 via-red-100 to-pink-50 hover:from-red-100 hover:via-red-200 hover:to-pink-100 p-2.5 rounded-lg border border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div className="flex items-center justify-between relative z-10">
                          {/* Instagram Button */}
                          <a
                            href="https://www.instagram.com/leopard_annaba/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-md flex items-center justify-center mr-2 hover:scale-105 transition-all duration-300 shadow-sm group/instagram"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>

                          {/* Phone Info */}
                          <div className="flex items-center flex-1 mx-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center mr-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                              <span className="text-white font-bold text-xs">
                                📞
                              </span>
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

                          {/* Call Button */}
                          <a
                            href={`tel:${number.replace(/\s/g, '')}`}
                            className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-sm group/call"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        </div>

                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
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