export default function Intro() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Frontend Developer | Backend Enthusiast
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            I build exceptional digital experiences with modern technologies.
            Currently focused on creating responsive web applications with React
            and Node.js.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Contact Me
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
              View Projects
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full overflow-hidden border-4 border-blue-200">
            {/* Replace with your image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-4xl">Your Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}