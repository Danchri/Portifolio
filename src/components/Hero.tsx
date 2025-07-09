import { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Software Developer',
    'Cybersecurity Researcher',
    'Penetration Tester',
    'Full Stack Engineer',
    'Security Analyst'
  ]

  // Matrix animation characters
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'

  useEffect(() => {
    const currentRole = roles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, currentIndex, isDeleting, roles])

  // Simplified matrix effect with CSS only
  const matrixElements = Array.from({ length: 20 }, (_, i) => i)

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      {/* Simplified Matrix Background */}
      <div className="absolute inset-0 opacity-5">
        {matrixElements.map((i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-pulse"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Terminal-style intro */}
              <div className="space-y-4">
                <div className="text-green-400 font-mono text-sm">
                  <span className="text-white">$</span> whoami
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Hi, I'm <span className="text-green-400">Daniel SDG</span>
                </h1>
                <div className="text-xl lg:text-2xl text-gray-300">
                  I'm a <span className="text-blue-400 font-semibold">{text}</span>
                  <span className="animate-pulse text-green-400">|</span>
                </div>
                <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                  Passionate about securing digital infrastructures and building robust applications.
                  I specialize in penetration testing, vulnerability assessment, and full-stack development.
                </p>
              </div>

              {/* Skills preview */}
              <div className="space-y-3">
                <div className="text-green-400 font-mono text-sm">
                  <span className="text-white">$</span> cat specializations.txt
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                  <div className="text-gray-300">• Ethical Hacking</div>
                  <div className="text-gray-300">• Web Security</div>
                  <div className="text-gray-300">• React/Node.js</div>
                  <div className="text-gray-300">• Network Security</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>View Projects</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>Get In Touch</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Cybersecurity Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Profile Container */}
                <div className="relative w-96 h-96 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-green-500/30 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 rounded-2xl opacity-75 animate-pulse"></div>
                  <div className="absolute inset-1 bg-black rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-black">
                        DS
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Terminal-style info */}
                    <div className="w-full space-y-2 font-mono text-sm">
                      <div className="text-green-400">
                        <span className="text-white">{'>'}</span> status: <span className="text-green-300">online</span>
                      </div>
                      <div className="text-green-400">
                        <span className="text-white">{'>'}</span> role: <span className="text-blue-300">security_researcher</span>
                      </div>
                      <div className="text-green-400">
                        <span className="text-white">{'>'}</span> location: <span className="text-yellow-300">global</span>
                      </div>
                      <div className="text-green-400">
                        <span className="text-white">{'>'}</span> clearance: <span className="text-red-300">classified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="absolute -top-6 -left-6 bg-black border border-green-500 rounded-lg p-3">
                  <div className="text-green-400 text-xs font-mono flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    PENETRATION TESTING
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-black border border-blue-500 rounded-lg p-3">
                  <div className="text-blue-400 text-xs font-mono flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    FULL STACK DEV
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
