export default function NavDots({ sections, activeSection, scrollToSection }) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all ${activeSection === index 
              ? 'bg-blue-600 scale-125' 
              : 'bg-gray-400 hover:bg-gray-600'}`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  )
}