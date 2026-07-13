import Link from "next/link"
import { Mail01Icon, TwitterIcon, Linkedin01Icon, Facebook01Icon, ArrowUpRight01Icon } from "hugeicons-react"

const FooterSection = () => {
    return (
        <footer className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <section className="w-full flex  gap-3  pb-16">

                    {/* Newsletter Section */}
                    <section className="mb-16 flex flex-col gap-7">
                        <h3 className="text-4xl font-semibold mb-4">Stay updated with Flexer Labs news</h3>
                        <div className="flex rounded-4xl border border-white w-full gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1  rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                            />
                            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                                <ArrowUpRight01Icon size={20} />
                            </button>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="text-white/60 hover:text-white transition-colors"><Mail01Icon size={20} /></Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors"><TwitterIcon size={20} /></Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin01Icon size={20} /></Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors"><Facebook01Icon size={20} /></Link>
                        </div>
                    </section>

                    {/* Navigation Links */}
                    <section className="grid grid-cols-1 text-xl md:grid-cols-3 gap-12 mb-16">
                        {/* Column 1 */}
                        <ul className="flex h-fit flex-col gap-2 border-l-2 border-white/20 px-6">
                            <li><Link href="/" className="text-white transition-colors">Home</Link></li>
                            <li><Link href="/studio" className="text-white transition-colors">Studio</Link></li>
                            <li><Link href="/projects" className="text-white transition-colors">Projects</Link></li>
                            <li><Link href="/career" className="text-white transition-colors">Career</Link></li>
                            <li><Link href="/blog" className="text-white transition-colors">Blog</Link></li>
                        </ul>
                        {/* Column 2 */}
                        <ul className="flex h-fit flex-col gap-2 border-l-2 border-white/20 px-6">
                            <li><Link href="/career/single" className="text-white transition-colors">Career Single</Link></li>
                            <li><Link href="/projects/single" className="text-white transition-colors">Projects Single</Link></li>
                            <li><Link href="/blog/single" className="text-white transition-colors">Blogs Single</Link></li>
                            <li><Link href="/pricing" className="text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="text-white transition-colors">Contact</Link></li>
                        </ul>
                        {/* Column 3 */}
                        <ul className="flex h-fit  flex-col gap-2 border-l-2 border-white/20 px-6">
                            <li><Link href="/style-guide" className="text-white transition-colors">Style Guide</Link></li>
                            <li><Link href="/changelog" className="text-white transition-colors">Changelog</Link></li>
                            <li><Link href="/license" className="text-white transition-colors">License</Link></li>
                            <li><Link href="/password" className="text-white transition-colors">Password</Link></li>
                            <li><Link href="/404" className="text-white transition-colors">404</Link></li>
                        </ul>
                    </section>
                </section>
                {/* Bottom Section */}
                <section className="border-t border-white/20 pt-8">
                    <h2 className="text-9xl font-bold mb-6 tracking-tight">FLEXER LABS TECH</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">Copyright © 2025 Flexer Labs | Designed By Flexer Labs</p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default FooterSection