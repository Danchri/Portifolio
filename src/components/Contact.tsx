const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">#contacts</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-400 mb-8">
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Message me here</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <a href="mailto:dantech1438@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  dantech1438@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">💬</span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  @jaydeepjd
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
