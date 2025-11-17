import { useEffect, useState } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        if (!res.ok) throw new Error(`Failed: ${res.status}`)
        const data = await res.json()
        setProjects(data.items || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        {loading ? (
          <p className="text-gray-500">Loading projects...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : projects.length === 0 ? (
          <div className="border border-dashed border-gray-300 rounded-lg p-6 text-gray-600">
            <p>No projects yet. Add some via the API:</p>
            <pre className="mt-2 text-sm bg-gray-50 p-3 rounded overflow-x-auto">POST /api/projects {`{ title, description, tech_stack }`}</pre>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <article key={p.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                {p.image_url && (
                  <img src={p.image_url} alt={p.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.description}</p>
                  {p.tech_stack?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech_stack.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex gap-3">
                    {p.repo_url && <a className="text-sm text-blue-600 hover:underline" href={p.repo_url} target="_blank" rel="noreferrer">Code</a>}
                    {p.demo_url && <a className="text-sm text-blue-600 hover:underline" href={p.demo_url} target="_blank" rel="noreferrer">Live</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
