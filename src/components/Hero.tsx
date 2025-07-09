const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm a web designer and
                <br />
                <span className="text-blue-400">front-end developer</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-lg">
                I'm currently dev guy, freelance UI, backend developer, and I'm passionate about creating digital experiences.
              </p>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Scroll down ↓
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-600 rounded-lg p-3">
                <div className="text-green-400 text-sm font-mono">Currently working on Portfolio</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-600 rounded-lg p-3">
                <div className="text-blue-400 text-sm">💡 "Control can sometimes be an illusion, but sometimes you need illusion to gain control."</div>
                <div className="text-gray-400 text-xs mt-1">- Mr. Robot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
