export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kongu Engineering Coolege",
      year: "2022 - 2026",
      description: "Specialized in Web Technologies and Distributed Systems. Thesis on React Performance Optimization."
    },
    {
      degree: "HSC",
      institution: "The Optimus Public School",
      year: "2021 - 2022",
      description: "Graduated with honors. Coursework included Algorithms, Database Systems, and Web Development."
    },
    {
      degree: "SSLC",
      institution: "The Optimus Public School",
      year: "2019 - 2020",
      description: "Focus on Mathematics and Physics. Participated in programming competitions."
    }
  ]

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Education & <span className="text-blue-600 relative">
            Background
            <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
              <path d="M0 2.5C50 0 150 0 200 2.5" stroke="#3B82F6" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h2>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200 group">
              <div className="absolute w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -left-[11px] top-2 shadow-md transition-all duration-300 group-hover:scale-125 group-hover:shadow-blue-300"></div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg relative overflow-hidden border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="mx-2 text-blue-400">•</span>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{edu.year}</span>
                </div>
                <p className="text-gray-600 mt-3 border-t border-gray-100 pt-3">{edu.description}</p>
                
                {/* Add decorative elements */}
                <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-blue-50 rounded-full opacity-30"></div>
                <div className="absolute right-8 bottom-2 w-4 h-4 bg-blue-100 rounded-full"></div>
              </div>
              
              {/* Add animation trigger on hover */}
              <div className="absolute -left-10 top-3 bg-white p-2 rounded-full shadow-md transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add decorative background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Add custom styles */}
        <style jsx>{`
          @keyframes blob {
            0% { transform: scale(1); }
            33% { transform: scale(1.1); }
            66% { transform: scale(0.9); }
            100% { transform: scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    </section>
  )
}