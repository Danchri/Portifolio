const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '🌐', color: 'bg-orange-500' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-500' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'Git', icon: '📝', color: 'bg-red-500' },
    { name: 'MySQL', icon: '🗄️', color: 'bg-blue-600' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-600' },
    { name: 'Java', icon: '☕', color: 'bg-red-600' }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">#skills</h2>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className={`w-16 h-16 ${skill.color} rounded-lg flex items-center justify-center text-white text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
