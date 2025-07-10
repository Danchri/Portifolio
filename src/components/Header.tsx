import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-green-500/30">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-lg sm:text-xl font-bold flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded mr-3 flex items-center justify-center">
              <span className="text-black font-bold text-xs">DS</span>
            </div>
            <span className="text-green-400">Daniel SDG</span>
            <span className="text-gray-400 text-xs sm:text-sm ml-2 font-mono hidden sm:inline">.sec</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-medium font-mono"
              >
                <span className="text-green-400">{'>'}</span> {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-400 hover:text-white transition-colors p-2"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="pt-4 pb-2 border-t border-green-500/30 mt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 py-2 font-mono"
                  onClick={closeMenu}
                >
                  <span className="text-green-400">{'>'}</span> {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
