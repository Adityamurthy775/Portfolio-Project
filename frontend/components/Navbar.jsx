import { useState, useEffect } from 'react';
import BorderGlow from './BorderGlow';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorAngle, setCursorAngle] = useState(0);

  useEffect(() => {
    // Animate the cursor angle continuously
    let animationFrame;
    let angle = 0;

    const animate = () => {
      angle = (angle + 1) % 360;
      setCursorAngle(angle);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='fixed top-0 w-full z-50 px-6 py-4'>
      <div
        className='relative grid isolate border border-white/15 w-full'
        style={{
          background: 'rgba(18, 15, 23, 0.8)',
          borderRadius: '16px',
          transform: 'translate3d(0, 0, 0.01px)',
          boxShadow: 'rgba(0,0,0,0.1) 0 1px 2px, rgba(0,0,0,0.1) 0 2px 4px, rgba(0,0,0,0.1) 0 4px 8px, rgba(0,0,0,0.1) 0 8px 16px, rgba(0,0,0,0.1) 0 16px 32px, rgba(0,0,0,0.1) 0 32px 64px',
        }}
      >
        {/* Animated gradient border */}
        <div
          className='absolute inset-0 rounded-[16px] -z-[1]'
          style={{
            border: '1px solid transparent',
            background: [
              'linear-gradient(rgba(18, 15, 23, 0.8) 0 100%) padding-box',
              'conic-gradient(from ' + cursorAngle + 'deg, #F97316 0%, #7C3AED 33%, #06B6D4 66%, #F97316 100%) border-box',
            ].join(', '),
            transition: 'none',
          }}
        />

        {/* Animated outer glow */}
        <span
          className='absolute pointer-events-none z-[1] rounded-[16px]'
          style={{
            inset: '-60px',
            background: `conic-gradient(from ${cursorAngle}deg, #F97316 0%, #7C3AED 33%, #06B6D4 66%, #F97316 100%)`,
            opacity: 0.3,
            filter: 'blur(20px)',
            transition: 'none',
          }}
        />

        {/* Inner glow fill */}
        <div
          className='absolute inset-0 rounded-[16px] -z-[1]'
          style={{
            background: `conic-gradient(from ${cursorAngle}deg, #F97316 0%, #7C3AED 33%, #06B6D4 66%, #F97316 100%)`,
            opacity: 0.15,
            maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 100%)',
            transition: 'none',
          }}
        />

        <div className='flex items-center justify-between px-8 py-4 relative z-[2]'>
          {/* Left side - Name */}
          <div className='flex items-center'>
            <h1 className='text-2xl md:text-3xl font-bold text-white tracking-widest'>
              Aditya
            </h1>
          </div>

          {/* Desktop Navigation - Center */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-white/80 hover:text-white transition-colors duration-300 font-medium'
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side - Social Links */}
          <div className='flex items-center gap-4'>
            {/* LinkedIn */}
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-white transition-colors duration-300'
              aria-label='LinkedIn'
            >
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>

            {/* Email */}
            <a
              href='mailto:your.email@example.com'
              className='text-white/80 hover:text-white transition-colors duration-300'
              aria-label='Email'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden text-white/80 hover:text-white transition-colors'
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden border-t border-white/10 px-8 py-4 relative z-[2]'>
            <div className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='text-white/80 hover:text-white transition-colors duration-300 font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
