export default function Education() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2020 - 2022",
      description: "Specialized in Web Technologies and Distributed Systems. Thesis on React Performance Optimization."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2016 - 2020",
      description: "Graduated with honors. Coursework included Algorithms, Database Systems, and Web Development."
    },
    {
      degree: "High School Diploma",
      institution: "Science High School",
      year: "2012 - 2016",
      description: "Focus on Mathematics and Physics. Participated in programming competitions."
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Education & <span className="text-blue-600">Background</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1"></div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <span>{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.year}</span>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}