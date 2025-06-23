export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}