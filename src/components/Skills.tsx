const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: '🛡️',
      skills: [
        { name: 'Penetration Testing', level: 95, icon: '🔍' },
        { name: 'Vulnerability Assessment', level: 90, icon: '🎯' },
        { name: 'Network Security', level: 85, icon: '🌐' },
        { name: 'Ethical Hacking', level: 92, icon: '👨‍💻' },
        { name: 'Threat Analysis', level: 88, icon: '⚠️' }
      ]
    },
    {
      title: 'Development',
      icon: '💻',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'JavaScript', level: 92, icon: '⚡' },
        { name: 'TypeScript', level: 80, icon: '📘' }
      ]
    },
    {
      title: 'Security Tools',
      icon: '🔧',
      skills: [
        { name: 'Metasploit', level: 85, icon: '🎯' },
        { name: 'Burp Suite', level: 90, icon: '🔍' },
        { name: 'Nmap', level: 88, icon: '🌐' },
        { name: 'Wireshark', level: 82, icon: '📡' },
        { name: 'Kali Linux', level: 95, icon: '🐉' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 relative">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 gap-4 h-full">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="text-green-400 font-mono text-xs animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
              {i % 2 === 0 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <span className="text-white">$</span> cat /skills/expertise.json
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-green-400">{'>'}</span> Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my cybersecurity expertise and development skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-black border border-green-500/30 rounded-lg p-6 hover:border-green-400 transition-colors duration-200"
            >

              {/* Category Header */}
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-green-400 font-mono">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-green-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 bg-gray-900 border border-green-500/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-green-400 mb-6 text-center font-mono">
            <span className="text-white">$</span> ls /certifications/
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'CEH', 'OSCP', 'CISSP', 'CompTIA Security+', 'GCIH', 'CySA+',
              'GPEN', 'GSEC', 'AWS Security', 'Azure Security', 'OWASP', 'ISO 27001'
            ].map((cert) => (
              <div
                key={cert}
                className="bg-gray-800 border border-green-500/20 px-3 py-2 rounded-lg text-center text-sm text-gray-300 hover:text-green-400 hover:border-green-400 transition-all duration-300 cursor-default font-mono"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
