import Image from "next/image"
import Navbar from "./navbar"

const HeroSection = () => {
    return (
        <section className='w-full h-dvh bg-black p-4'>
            {/* Background */}
            <section className="w-full h-full">
                {/* <Navbar /> */}
                <Image src="/assets/hero.jpg" width={1000} height={1000} className="w-full h-full bg-cover rounded-4xl" alt="hero" />

            </section>
            {/* Content */}
            <section className=" absolute top-0 left-0 flex border flex-col  w-full h-screen items-start text-left p-4 justify-end min-h-screen  text-white px-8 py-20">
                {/* <Navbar/> */}
             
                {/* Small text above heading */}
                <section className="flex flex-col">

                    <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">Next-Gen Design Agency</p>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-left max-w-4xl leading-tight mb-6">
                        Next-Gen Design Agency for Growing Brands.
                    </h1>
                </section>

                {/* Subtext */}
                <p className="text-gray-400 text-lg md:text-xl text-left max-w-2xl mb-10">
                    Branding Mobile & Web App Design for Startups and Giants
                </p>

                {/* Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                        View Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        Reach Out
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div> */}

                {/* Bottom items */}
                {/* <div className="flex gap-8 text-gray-400 text-sm">
                    <span>+ Define</span>
                    <span>+ Design</span>
                    <span>+ Development</span>
                </div> */}
            </section>
        </section>
    )
}

export default HeroSection