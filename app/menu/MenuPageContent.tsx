'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '../../components/Navbar'
import MenuToggle from '../../components/MenuToggle'
import MenuViewer from '../../components/MenuViewer'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function MenuPageContent() {
  const searchParams = useSearchParams()
  const [activeType, setActiveType] = useState<'sale' | 'sucre'>('sale')

  useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'sucre') {
      setActiveType('sucre')
    } else {
      setActiveType('sale')
    }
  }, [searchParams])

  const handleToggle = (type: 'sale' | 'sucre') => {
    setActiveType(type)
    // Update URL
    const url = new URL(window.location.href)
    url.searchParams.set('type', type)
    window.history.pushState({}, '', url.toString())
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <MenuToggle active={activeType} onToggle={handleToggle} />
        <MenuViewer type={activeType} />
      </div>
      <WhatsAppButton />
    </div>
  )
}