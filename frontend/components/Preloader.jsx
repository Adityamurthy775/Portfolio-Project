import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { TypeAnimation } from "react-type-animation";
import Strands from "./Strands";

const WORDS = ["Design", "Prototype", "Build", "Deploy"];

function Preloader() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // Count to 100
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 17);
    return () => clearInterval(timer);
  }, []);

  // When counter finishes, navigate to home
  useEffect(() => {
    if (count === 100) {
      const timer = setTimeout(() => navigate("/home"), 1000);
      return () => clearTimeout(timer);
    }
  }, [count, navigate]);

  const word = WORDS[Math.min(Math.floor(count / 25), WORDS.length - 1)];

  return (
    <motion.div
      className="fixed inset-0 bg-black overflow-hidden"
      initial={{ y: 0 }}
      animate={
        count === 100 ? { y: "-100%", filter: "blur(10px)" } : { y: 0 }
      }
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Counter */}
      <motion.h1
        key={count}
        initial={{ opacity: 0.5, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="absolute top-10 right-10 text-white text-8xl md:text-9xl lg:text-10xl font-semibold"

      >
        {`${String(count).padStart(2, "0")}%`}
      </motion.h1>

      {/* Strands Animation - Preloader Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Strands
            colors={["#F97316","#7C3AED","#06B6D4"]}
            count={3}
            speed={0.5}
            amplitude={1}
            waviness={1}
            thickness={0.7}
            glow={2.6}
            taper={3}
            spread={1}
            intensity={0.6}
            saturation={1.5}
            opacity={1}
            scale={1.5}
            glass={false}
            refraction={1}
            dispersion={1}
            glassSize={1}
            hueShift={0}
          />
        </div>
      </div>

      {/* Typing Animation */}
      <motion.div
        key={word}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-16 left-10 z-10"
      >
        <TypeAnimation
          sequence={[word]}
          speed={70}
          repeat={0}
          cursor={true}
          className="text-white text-8xl md:text-9xl lg:text-10xl font-semibold"
        />
      </motion.div>
    </motion.div>
  );
}

export default Preloader;
