const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VulnScanner Pro',
      description: 'Advanced vulnerability scanner with automated reporting and threat intelligence integration.',
      technologies: ['Python', 'Nmap', 'SQLite', 'Flask'],
      category: 'Security Tool',
      status: 'Active',
      icon: '🔍',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SecureAuth Portal',
      description: 'Multi-factor authentication system with biometric integration and zero-trust architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      category: 'Web Security',
      status: 'Completed',
      icon: '🔐',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Network Forensics Kit',
      description: 'Comprehensive network traffic analysis tool for incident response and digital forensics.',
      technologies: ['Python', 'Wireshark', 'Scapy', 'PostgreSQL'],
      category: 'Forensics',
      status: 'In Progress',
      icon: '🕵️',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Penetration Testing Framework',
      description: 'Automated penetration testing framework with custom exploit modules and reporting.',
      technologies: ['Python', 'Metasploit', 'Docker', 'Redis'],
      category: 'Pentesting',
      status: 'Active',
      icon: '⚔️',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Threat Intelligence Dashboard',
      description: 'Real-time threat intelligence aggregation and visualization platform.',
      technologies: ['React', 'D3.js', 'Python', 'ElasticSearch'],
      category: 'Intelligence',
      status: 'Completed',
      icon: '📊',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Secure Code Analyzer',
      description: 'Static code analysis tool for identifying security vulnerabilities in source code.',
      technologies: ['Python', 'AST', 'SAST', 'CI/CD'],
      category: 'DevSecOps',
      status: 'Active',
      icon: '🔬',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-400 bg-green-400/10 border-green-400/30'
      case 'Completed':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30'
    }
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-black relative">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-6 h-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="text-green-400 font-mono text-xs animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
              {i % 3 === 0 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <span className="text-white">$</span> ls /projects/security/
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-green-400">{'>'}</span> Security Projects
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of cybersecurity tools and applications I've developed to enhance digital security.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-400 transition-colors duration-200 group"
            >

              {/* Project Header */}
              <div className="p-6 border-b border-green-500/20 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors font-mono">
                        {project.title}
                      </h3>
                      <span className="text-gray-400 text-sm">{project.category}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full border font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-green-500/20 relative z-10">
                <h4 className="text-green-400 text-sm font-semibold mb-3 font-mono">
                  <span className="text-white">$</span> cat tech_stack.txt
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 border border-green-500/20 text-gray-300 text-xs rounded font-mono hover:border-green-400 hover:text-green-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="p-6 relative z-10">
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-green-400 hover:text-white transition-colors text-sm font-mono"
                  >
                    <span>{'>'} Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-green-400 hover:text-white transition-colors text-sm font-mono"
                  >
                    <span>{'>'} Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/danielsdg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-colors duration-300 font-mono"
          >
            <span>{'>'} View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
