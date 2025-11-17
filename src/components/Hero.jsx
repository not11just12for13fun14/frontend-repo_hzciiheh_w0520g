function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            I build modern, scalable full‑stack apps.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            From fast APIs to polished UIs, I deliver end‑to‑end solutions with a strong focus on DX and maintainability.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-800">
              Contact Me
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Preferred stack: React, Tailwind, FastAPI, MongoDB
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-white shadow-xl border border-gray-200 grid place-items-center">
            <div className="text-center p-8">
              <p className="text-5xl">🚀</p>
              <p className="mt-3 font-medium text-gray-700">Production‑ready, developer‑friendly.</p>
              <p className="text-sm text-gray-500">Typed APIs, clean components, and robust data models.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
