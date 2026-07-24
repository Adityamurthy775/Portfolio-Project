import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { TypeAnimation } from "react-type-animation";

function Preloader() {
  const words = ["Design", "Prototype", "Build", "Deploy"];

  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 17);

    return () => clearInterval(timer);
  }, []);

  const index = Math.min(Math.floor(count / 25), 3);
  const word = words[index];

  return (
    <motion.div
      className="fixed inset-0 bg-black overflow-hidden"
      initial={{ y: 0 }}
      animate={
        count === 100? {y: "-100%",filter: "blur(10px)",scale: 1.05,}: {y: 0,}}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (count === 100) {
          navigate("/home");
        }
      }}
    >
      {/* Counter */}
      <motion.h1
        key={count}
        initial={{ opacity: 0.5, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="absolute top-10 right-10 text-8xl font-light text-white"
      >
        {`${String(count).padStart(2, "0")}%`}
      </motion.h1>

      {/* Large Background Word */}
      <motion.h1
        key={`${word}-bg`}
        className="absolute inset-0 flex items-center justify-center text-[12rem] font-bold uppercase text-white/5 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {word}
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        key={word}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-16 left-10"
      >
        <TypeAnimation
          sequence={[word]}
          speed={70}
          repeat={0}
          cursor={true}
          className="text-white text-6xl font-light"
        />
      </motion.div>


    </motion.div>
  );
}

export default Preloader;
