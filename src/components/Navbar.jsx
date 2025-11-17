import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Test', href: '/test' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">Full‑Stack Developer</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100">
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
