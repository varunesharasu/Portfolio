export default function Skills() {
  const skills = [
    {
      category: 'Frontend Development',
      icon: 'FE',
      items: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Tailwind CSS' },
        { name: 'Vite' }
      ]
    },
    {
      category: 'Backend Development',
      icon: 'BE',
      items: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' },
        { name: 'REST APIs' }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: 'TP',
      items: [
        { name: 'Git' },
        { name: 'VS Code' },
        { name: 'Figma' },
        { name: 'Postman' }
      ]
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600 relative">
              Technical Skills
              <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-400 opacity-30 rounded"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4 bg-blue-50 p-3 rounded-full text-blue-600 font-bold flex items-center justify-center w-14 h-14">
                  {skillCategory.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="group flex items-center">
                    <span className="font-medium text-lg text-gray-700 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}