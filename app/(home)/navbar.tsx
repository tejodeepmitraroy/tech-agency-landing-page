"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full items-center justify-between px-6 md:px-12 py-6 text-white absolute top-0 left-0 z-30">
        {/* Logo */}
        <div className="flex items-center gap-2.5 relative z-50">
          <div className="grid grid-cols-3 gap-[3px] w-[26px] h-[26px]">
              {/* Simple Stodio logo recreation with dots */}
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full opacity-0"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#e53935] rounded-full opacity-0"></div>
          </div>
          <span className={`text-[28px] font-medium tracking-tight transition-colors ${isSidebarOpen ? 'text-black' : 'text-white'}`}>
            Stodio<sup className="text-[10px] font-light ml-0.5">&reg;</sup>
          </span>
        </div>

        {/* Navigation Links - Hidden on all screens since we have a sidebar now, or keep on large screens */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
          <a href="#" className="text-[#e53935] transition-colors">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Studio</a>
          <a href="#" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors">
            Project
            <span className="bg-[#e53935] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">05</span>
          </a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
            Pages
            <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Careers</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`relative z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full transition-colors ${isSidebarOpen ? 'bg-black/5 hover:bg-black/10' : 'bg-white hover:bg-gray-100'}`}
        >
          <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isSidebarOpen ? 'bg-black rotate-45 translate-y-[5px]' : 'bg-black -translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isSidebarOpen ? 'bg-black opacity-0' : 'bg-black'}`}></span>
          <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isSidebarOpen ? 'bg-black -rotate-45 -translate-y-[5px]' : 'bg-black translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Floating Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar Content */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] md:w-[400px] bg-white z-40 p-12 flex flex-col justify-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-8 text-black">
          <div className="flex flex-col gap-4 text-4xl font-medium tracking-tight">
            <a href="#" className="hover:text-[#e53935] transition-colors">Home</a>
            <a href="#" className="hover:text-[#e53935] transition-colors">Studio</a>
            <a href="#" className="hover:text-[#e53935] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#e53935] transition-colors">Pages</a>
            <a href="#" className="hover:text-[#e53935] transition-colors">Careers</a>
            <a href="#" className="hover:text-[#e53935] transition-colors">Contact</a>
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col gap-4">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Get in touch</p>
            <a href="mailto:hello@stodio.com" className="text-xl font-medium hover:text-[#e53935] transition-colors">hello@stodio.com</a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e53935] hover:text-white transition-colors">In</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e53935] hover:text-white transition-colors">Tw</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e53935] hover:text-white transition-colors">Ig</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

