import React from 'react'

const PricingSection = () => {
    return (
        <section id="pricing" className="bg-[#0a0a0a] text-white py-16 md:py-32 w-full px-4 md:px-12">
            <div className="w-full flex flex-col gap-12 md:gap-16">
                
                {/* Header */}
                <div className="flex flex-col gap-8 max-w-[800px]">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2.5 border border-white/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-[13px] tracking-wide font-medium uppercase text-gray-200">Pricing</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-[56px] font-medium leading-[1.1] tracking-tight text-white">
                        Simple, transparent pricing <span className="text-gray-500">for your digital needs.</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* Basic */}
                    <div className="flex flex-col border border-white/10 rounded-[2rem] p-6 md:p-10 hover:border-white/30 transition-colors">
                        <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                        <p className="text-gray-400 mb-8 text-sm">Perfect for early-stage startups needing a solid digital foundation.</p>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-5xl font-medium">$4,999</span>
                        </div>
                        <ul className="flex flex-col gap-4 mb-12 flex-1">
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> UI/UX Design (Up to 5 Pages)
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Framer Development
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Basic Animations
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> 2 Revision Rounds
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-medium">
                            Get Started
                        </button>
                    </div>

                    {/* Pro */}
                    <div className="flex flex-col bg-white text-black rounded-[2rem] p-6 md:p-10 relative">
                        <div className="absolute -top-4 right-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                            Popular
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                        <p className="text-gray-600 mb-8 text-sm">For growing brands that need a comprehensive digital system.</p>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-5xl font-medium">$9,999</span>
                        </div>
                        <ul className="flex flex-col gap-4 mb-12 flex-1">
                            <li className="flex items-center gap-3 text-gray-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> UI/UX Design (Up to 15 Pages)
                            </li>
                            <li className="flex items-center gap-3 text-gray-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Next.js or Webflow Dev
                            </li>
                            <li className="flex items-center gap-3 text-gray-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Advanced GSAP Animations
                            </li>
                            <li className="flex items-center gap-3 text-gray-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Custom Interactions
                            </li>
                            <li className="flex items-center gap-3 text-gray-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Unlimited Revisions
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium">
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="flex flex-col border border-white/10 rounded-[2rem] p-6 md:p-10 hover:border-white/30 transition-colors">
                        <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                        <p className="text-gray-400 mb-8 text-sm">Custom solutions for industry leaders with complex requirements.</p>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-5xl font-medium">Custom</span>
                        </div>
                        <ul className="flex flex-col gap-4 mb-12 flex-1">
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Unlimited Pages & Scope
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Full Stack Web App
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> App Architecture & Design
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Dedicated Team
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Priority Support
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-medium">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
