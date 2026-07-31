import React from 'react'
import LightRays from './LightRays';
import Shuffle from './Shuffle';
import TextType from './TextType';

function Home() {
  const handleShuffleComplete = () => {
    console.log('Shuffle animation complete!');
  };

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
      <div className='max-w-4xl w-full text-center relative z-10'>
        {/* Name with Shuffle animation */}
        <h1>
          <Shuffle
            text="Aditya"
            shuffleDirection="right"
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
            onShuffleComplete={handleShuffleComplete}
          />
        </h1>

        {/* TextType Component */}
        <div className='mt-12'>
          <TextType
            text={["Full Stack Developer", "UI/UX Enthusiast", "Creative Coder"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
            as="span"
            className="text-lg md:text-2xl font-semibold text-white/80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
