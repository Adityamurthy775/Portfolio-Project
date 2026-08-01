import React from 'react'
import { motion } from 'motion/react'
import LightRays from './LightRays';
import Shuffle from './Shuffle';
import TextType from './TextType';
import Navbar from './Navbar';
import About from './About';
import ScrollIndicator from './ScrollIndicator';
import Work from './Work';
import Footer from './Footer'

function Home() {
  const scrollToAbout = (e) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-col text-white relative'>
      {/* Navbar pinned to the top */}
      <div className='relative z-10 w-full'>
        <Navbar/>
      </div>

      {/* Hero Section */}
      <div className='relative min-h-screen flex flex-col text-white px-6 overflow-hidden'>
        {/* LightRays Background */}
        <div className='absolute inset-0 z-0'>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black/60' />

        {/* Content */}
        <div className='flex-1 flex items-center justify-center max-w-7xl w-full mx-auto text-center relative z-10'>
          <div className='flex flex-col items-center w-full'>
            {/* Eyebrow Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-white text-4xl md:text-3xl uppercase tracking-[0.3em] mb-6'
            >
              Welcome to my portfolio
            </motion.p>

            {/* Name with Shuffle animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className='text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tight'>
                <Shuffle
                  text="Aditya Murthi"
                  shuffleDirection="left"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  tag="span"
                  textAlign="center"
                />
              </h1>
            </motion.div>

            {/* TextType Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='mt-8'
            >
              <TextType
                text={["Full Stack Developer", "Data Scientist", "ML Engineer", "Data Analyst"]}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                loop={true}
                as="span"
                className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-400"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className='mt-8 max-w-2xl'
            >
              <p className='text-white/70 text-base md:text-lg leading-relaxed'>
                I'm a 3rd-Year Computer Science Student at{' '}
                <span className='text-white font-medium'>Anurag University</span>{' '}
                passionate about building intuitive web applications, exploring artificial intelligence, and transforming data into intelligent solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='mt-10 flex flex-wrap items-center justify-center gap-4'
            >
              <button
                onClick={scrollToAbout}
                className='px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer'
              >
                Explore My Work
              </button>
              <a
                href='mailto:adityamurthi570@gmail.com'
                className='px-6 py-3 border border-white/30 text-white font-semibold rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors duration-300'
              >
                Get In Touch
              </a>
            </motion.div>


          </div>
        </div>

        {/* Scroll Indicator */}
        <div>
          <ScrollIndicator/>
        </div>
      </div>

      <About/>
      <Work/>
      <div id='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
