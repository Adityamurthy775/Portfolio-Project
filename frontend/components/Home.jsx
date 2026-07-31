import React from 'react'
import LightRays from './LightRays';
import TextType from './TextType';

function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center text-white px-6 relative overflow-hidden'>
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

      {/* Content */}
      <div className='max-w-4xl w-full text-center relative -top-50'>
        {/* Name with typing animation */}
        <h1 className='text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-widest'>
          <TextType
            text={["Aditya"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            as="span"
          />
        </h1>
      </div>
    </div>
  );
}

export default Home;
