import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactMethods = [
    {
      icon: '🔐',
      title: 'Secure Email',
      description: 'PGP encrypted communication',
      contact: 'daniel.sdg@protonmail.com',
      link: 'mailto:dantech1438@gmail.com',
      status: 'Encrypted'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Professional network',
      contact: 'linkedin.com/in/danielsdg',
      link: 'https://linkedin.com/in/danielsdg',
      status: 'Verified'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'Security research & code',
      contact: 'github.com/danielsdg',
      link: 'https://github.com/danchri',
      status: 'Active'
    },
    {
      icon: '🔒',
      title: 'Signal',
      description: 'End-to-end encrypted messaging',
      contact: '+254790554926',
      link: '#',
      status: 'Secure'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-black relative">
      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-6 gap-8 h-full">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="text-green-400 font-mono text-xs">
              {i % 4 === 0 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-green-400 font-mono text-sm mb-4">
              <span className="text-white">$</span> cat /contact/secure_channels.txt
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-green-400">{'>'}</span> Secure Contact
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on cybersecurity projects or need security consultation? Let's establish a secure communication channel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
                  <span className="text-green-400">{'>'}</span> Establish Connection
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Specializing in cybersecurity consulting, penetration testing, and secure application development.
                  Let's discuss how we can strengthen your digital security posture.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-gray-900 border border-green-500/30 rounded-lg hover:border-green-400 transition-colors duration-200"
                  >

                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors font-mono">
                          {method.title}
                        </h4>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded font-mono">
                          {method.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{method.description}</p>
                      <p className="text-green-400 text-sm font-mono">{method.contact}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  Current Status
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">✅ Available for freelance projects</p>
                  <p className="text-gray-400">✅ Open to new opportunities</p>
                  <p className="text-gray-400">⚡ Usually responds within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                  <p className="text-green-400 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                  <p className="text-red-400 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Something went wrong. Please try again or contact me directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
