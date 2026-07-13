const AboutSection = () => {
    return (
        <section id="about" className=" bg-white">
            <section className="w-full max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 max-w-4xl mx-auto text-center">
                    SwiftForm is a modern business formation and growth partner built for founders who value speed, clarity, and compliance.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Card 1 - Red/Pink */}
                    <div className="bg-red-50 rounded-2xl p-8 text-center">
                        <div className="text-5xl font-bold text-red-600 mb-2">5K+</div>
                        <div className="text-gray-700 font-medium">Businesses Formed</div>
                    </div>

                    {/* Card 2 - Green/Teal */}
                    <div className="bg-teal-50 rounded-2xl p-8 text-center">
                        <div className="text-5xl font-bold text-teal-600 mb-2">48hrs</div>
                        <div className="text-gray-700 font-medium">Average Setup Time</div>
                    </div>

                    {/* Card 3 - Purple with Button */}
                    <div className="bg-purple-50 rounded-2xl p-8 text-center">
                        <div className="text-5xl font-bold text-purple-600 mb-2">99%</div>
                        <div className="text-gray-700 font-medium mb-4">Client Satisfaction Rate</div>
                        <button className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                            Talk to an Advisor
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Card 4 - Orange/Yellow */}
                    <div className="bg-orange-50 rounded-2xl p-8 text-center">
                        <div className="text-5xl font-bold text-orange-600 mb-2">25+</div>
                        <div className="text-gray-700 font-medium">Countries Served</div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Built for Speed</span>
                </div>
            </section>
        </section>
    )
}

export default AboutSection