import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-green-500 hover:bg-green-400 text-black p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-green-400 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Arrow Icon */}
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Terminal-style tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black border border-green-500 rounded-lg px-3 py-2 text-green-400 font-mono text-xs whitespace-nowrap">
              $ cd /top
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
          </div>
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
