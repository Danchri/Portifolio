const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 relative">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="flex justify-between h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="text-green-400 font-mono text-xs">
              {i % 2 === 0 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <span className="text-white">$</span> cat /about/daniel_sdg.txt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-green-400">{'>'}</span> About Me
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Terminal-style bio */}
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-green-500/30 -m-6 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">daniel_sdg@security:~$</div>
                <div className="w-16"></div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-white">$</span> whoami
                </div>
                <div className="text-gray-300 ml-4">
                  Daniel SDG - Cybersecurity Researcher & Software Developer
                </div>

                <div className="text-green-400">
                  <span className="text-white">$</span> cat mission.txt
                </div>
                <div className="text-gray-300 ml-4 leading-relaxed">
                  Passionate about securing digital infrastructures and building robust applications.
                  I specialize in penetration testing, vulnerability assessment, and developing secure
                  full-stack solutions that protect against emerging cyber threats.
                </div>

                <div className="text-green-400">
                  <span className="text-white">$</span> ls expertise/
                </div>
                <div className="text-gray-300 ml-4 grid grid-cols-2 gap-2">
                  <span>• Ethical Hacking</span>
                  <span>• Web Security</span>
                  <span>• Network Forensics</span>
                  <span>• Threat Analysis</span>
                  <span>• Secure Development</span>
                  <span>• Incident Response</span>
                </div>

                <div className="text-green-400">
                  <span className="text-white">$</span> echo $PHILOSOPHY
                </div>
                <div className="text-blue-400 ml-4 italic">
                  "Security is not a product, but a process. Every line of code is a potential gateway."
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-green-500/30 p-4 rounded-lg text-center hover:border-green-400 transition-colors">
                <div className="text-2xl font-bold text-green-400 font-mono">100+</div>
                <div className="text-gray-400 text-sm">Security Assessments</div>
              </div>
              <div className="bg-gray-900 border border-green-500/30 p-4 rounded-lg text-center hover:border-green-400 transition-colors">
                <div className="text-2xl font-bold text-green-400 font-mono">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg font-medium transition-colors font-mono flex items-center justify-center">
                <span>Download Resume</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded-lg font-medium transition-colors font-mono">
                View Certifications
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-96 h-96 bg-gray-900 rounded-2xl border border-green-500/30 overflow-hidden">

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

              {/* Security Elements */}
              <div className="absolute -top-6 -left-6 bg-black border border-green-500 rounded-lg p-3">
                <div className="text-green-400 text-xs font-mono flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  SECURITY RESEARCHER
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
    </section>
  )
}

export default About
