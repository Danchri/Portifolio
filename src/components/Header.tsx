const Header = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact Me', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-xl font-bold flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
              <span className="text-white font-bold">J</span>
            </div>
            Jaydeep
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
