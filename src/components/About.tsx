const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">#about-me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a self-taught frontend developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Resume ↗
            </button>
          </div>

          {/* Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
