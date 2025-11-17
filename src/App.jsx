import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Full‑Stack Developer. Built with React, Tailwind, FastAPI & MongoDB.</p>
          <p className="mt-2">Backend URL: <code className="bg-gray-100 px-1 py-0.5 rounded">{import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}</code></p>
        </div>
      </footer>
    </div>
  )
}

export default App
