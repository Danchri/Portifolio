import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const roles = [
    'Software Developer',
    'Cybersecurity Researcher',
    'Penetration Tester',
    'Full Stack Engineer',
    'Security Analyst'
  ]

  // Terminal commands
  const commands = {
    help: () => [
      'Available commands:',
      '  help        - Show this help message',
      '  about       - Display information about Daniel SDG',
      '  skills      - List technical skills and expertise',
      '  projects    - Show recent projects',
      '  contacts    - Display contact information',
      '  experience  - Show work experience',
      '  clear       - Clear terminal screen',
      '  whoami      - Display current user info',
      '  status      - Show system status'
    ],
    about: () => [
      'Daniel SDG - Cybersecurity Researcher & Software Developer',
      '',
      'Passionate about securing digital infrastructures and building',
      'robust applications. Specializing in penetration testing,',
      'vulnerability assessment, and secure full-stack development.',
      '',
      'Location: Global (Remote)',
      'Clearance: Classified',
      'Status: Available for consulting'
    ],
    skills: () => [
      'Technical Skills:',
      '',
      'Cybersecurity:',
      '  • Penetration Testing (95%)',
      '  • Vulnerability Assessment (90%)',
      '  • Network Security (85%)',
      '  • Ethical Hacking (92%)',
      '',
      'Development:',
      '  • React.js (90%)',
      '  • Node.js (85%)',
      '  • Python (88%)',
      '  • JavaScript (92%)',
      '',
      'Security Tools:',
      '  • Metasploit, Burp Suite, Nmap, Wireshark, Kali Linux'
    ],
    projects: () => [
      'Recent Projects:',
      '',
      '1. VulnScanner Pro',
      '   Advanced vulnerability scanner with automated reporting',
      '   Tech: Python, Nmap, SQLite, Flask',
      '',
      '2. SecureAuth Portal',
      '   Multi-factor authentication system with biometric integration',
      '   Tech: React, Node.js, MongoDB, JWT',
      '',
      '3. Network Forensics Kit',
      '   Network traffic analysis tool for incident response',
      '   Tech: Python, Wireshark, Scapy, PostgreSQL',
      '',
      'Type "github" to view source code repositories'
    ],
    contacts: () => [
      'Contact Information:',
      '',
      'Email (Secure): daniel.sdg@protonmail.com',
      'LinkedIn: linkedin.com/in/danielsdg',
      'GitHub: github.com/danielsdg',
      'Signal: Available upon request',
      '',
      'Response Time: Usually within 24 hours',
      'Availability: Open for cybersecurity consulting',
      'Encryption: PGP key available upon request'
    ],
    experience: () => [
      'Professional Experience:',
      '',
      'Senior Security Researcher (2020-Present)',
      '  • Conducted 100+ security assessments',
      '  • Identified critical vulnerabilities in enterprise systems',
      '  • Developed custom penetration testing tools',
      '',
      'Full Stack Developer (2018-2020)',
      '  • Built secure web applications',
      '  • Implemented security best practices',
      '  • Led security code reviews',
      '',
      'Certifications: CEH, OSCP, CISSP, CompTIA Security+'
    ],
    whoami: () => [
      'daniel_sdg@security:~$ whoami',
      'Daniel SDG',
      'Role: Cybersecurity Researcher & Software Developer',
      'Clearance Level: Maximum',
      'Security Status: Active'
    ],
    status: () => [
      'System Status:',
      '● Security Level: MAXIMUM',
      '● Encryption: ACTIVE',
      '● Firewall: ENABLED',
      '● VPN: CONNECTED',
      '● Intrusion Detection: MONITORING',
      '● Last Security Scan: 2 minutes ago',
      '● Threat Level: GREEN'
    ],
    clear: () => 'CLEAR',
    github: () => [
      'Opening GitHub profile...',
      'URL: https://github.com/danielsdg',
      'Repositories: 50+ public repos',
      'Focus: Security tools and web applications'
    ]
  }



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

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const newHistory = [...terminalHistory, `$ ${cmd}`]

    if (command === '') {
      setTerminalHistory([...newHistory, ''])
      return
    }

    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands]()
      if (output === 'CLEAR') {
        setTerminalHistory([])
      } else {
        setTerminalHistory([...newHistory, ...output, ''])
      }
    } else {
      setTerminalHistory([...newHistory, `Command not found: ${cmd}`, 'Type "help" for available commands', ''])
    }

    // Add to command history
    if (cmd.trim() !== '') {
      setCommandHistory(prev => [...prev, cmd])
    }
    setHistoryIndex(-1)
    setCurrentCommand('')
  }

  // Handle key press in terminal
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentCommand('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentCommand(commandHistory[newIndex])
        }
      }
    }
  }

  // Focus terminal input when terminal is clicked
  const focusTerminal = () => {
    inputRef.current?.focus()
  }

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  // Initialize terminal with welcome message
  useEffect(() => {
    setTerminalHistory([
      'Welcome to Daniel SDG Security Terminal v2.1.0',
      'Type "help" for available commands',
      ''
    ])
  }, [])

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

            {/* Right Content - Terminal Navigation */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Interactive Terminal Container */}
                <div
                  className="w-96 h-96 bg-black rounded-lg border border-green-500/50 overflow-hidden shadow-2xl cursor-text"
                  onClick={focusTerminal}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-green-500/30">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-green-400 text-sm font-mono">daniel_sdg@security:~$</div>
                    <div className="w-16"></div>
                  </div>

                  {/* Terminal Content */}
                  <div
                    ref={terminalRef}
                    className="p-4 h-80 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800"
                  >
                    {/* Terminal History */}
                    <div className="space-y-1">
                      {terminalHistory.map((line, index) => (
                        <div key={index} className="text-gray-300">
                          {line.startsWith('$') ? (
                            <span className="text-green-400">{line}</span>
                          ) : line.startsWith('●') ? (
                            <span className="text-green-400">{line}</span>
                          ) : line.includes('not found') ? (
                            <span className="text-red-400">{line}</span>
                          ) : line.includes('Available commands') || line.includes(':') ? (
                            <span className="text-blue-400">{line}</span>
                          ) : (
                            <span>{line}</span>
                          )}
                        </div>
                      ))}

                      {/* Current Input Line */}
                      <div className="flex items-center text-green-400">
                        <span className="text-white mr-2">$</span>
                        <input
                          ref={inputRef}
                          type="text"
                          value={currentCommand}
                          onChange={(e) => setCurrentCommand(e.target.value)}
                          onKeyDown={handleKeyPress}
                          className="bg-transparent border-none outline-none text-green-400 font-mono flex-1 caret-green-400"
                          placeholder="Type 'help' for commands..."
                          autoFocus
                        />
                        <span className="animate-pulse">_</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Security Indicators */}
                <div className="absolute -top-4 -right-4 bg-black border border-green-500 rounded-lg p-2">
                  <div className="text-green-400 text-xs font-mono flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    SECURE
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-black border border-blue-500 rounded-lg p-2">
                  <div className="text-blue-400 text-xs font-mono flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    ONLINE
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
