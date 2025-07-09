const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'This is my personal website that showcases my skills and projects.',
      image: '🖥️',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Projects',
      description: 'Web app that helps people find and book local services.',
      image: '📱',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'CrypTrack',
      description: 'Crypto Tracker CLI Project is a command-line application that allows users to track cryptocurrency prices.',
      image: '₿',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">#projects</h2>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">View all ~~~</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gray-800 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">HTML CSS JavaScript</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Live &lt;~&gt;
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Github &gt;=
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
