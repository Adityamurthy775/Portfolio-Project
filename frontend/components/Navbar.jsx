import React from 'react'

function Navbar() {
  const links = ['About', 'Work']
  const sectionIds = {
    About: 'about',
    Work: 'work',
  }

  const handleNavClick = (label, event) => {
    event.preventDefault()
    const targetId = sectionIds[label] || label.toLowerCase()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className='mx-auto mt-6 flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md'>
      {/* Logo */}
      <a
        href='#'
        className='group flex items-center gap-3 shrink-0'
      >
        <span className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-sm font-black text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-105'>
          AM
        </span>
        <span className='hidden sm:inline text-base font-semibold tracking-wide'>
          Aditya Murthi
        </span>
      </a>

      {/* Email pill */}
      <a
        href='mailto:adityamurthi570@gmail.com'
        className='group hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 ease- hover:border-orange-700 hover:bg-white hover:text-orange-700'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-4 w-4 transition-colors duration-300 ease-out group-hover:text-orange-700'
        >
          <rect x='3' y='5' width='18' height='14' rx='2' />
          <path d='m3 7 9 6 9-6' />
        </svg>
        <span>adityamurthi570@gmail.com</span>
      </a>

      {/* Nav links */}
      <ul className='flex items-center gap-2 list-none'>
        {links.map((label) => (
          <li key={label}>
            <button
              onClick={(event) => handleNavClick(label, event)}
              className='group relative overflow-hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:border-orange-700 active:scale-95'
            >
              <span className='absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0' />
              <span className='relative z-10 transition-colors duration-300 ease-out group-hover:text-orange-700'>
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
