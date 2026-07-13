import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex sticky border top-0 items-center justify-between px-8 py-6  text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L2 7l8 5 8-5-8-5zM2 17l8 5 8-5M2 12l8 5 8-5" />
          </svg>
        </div>
        <span className="text-xl font-semibold">Stodio</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Studio</a>
        <a href="#" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          Project
          <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">05</span>
        </a>
        <a href="#" className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
          Pages
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Careers</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
      </div>

      {/* CTA Button */}
      <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Book A Intro
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar
