import React, { useState } from 'react';
import { motion, useScroll, useTransform, easeOut } from 'motion/react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Fraud Detection System',
    description: 'Developed a machine learning-based fraud detection system using Python, scikit-learn, and neural networks to identify suspicious transactions with 95% accuracy.',
    tags: ['Python', 'Machine Learning', 'Neural Networks', 'Flask'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'Built a comprehensive e-commerce analytics dashboard with real-time data visualization, user management, and sales reporting features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'Created an intelligent chat assistant using LLM APIs with context awareness, multi-turn conversations, and natural language processing capabilities.',
    tags: ['Python', 'LLMs', 'OpenAI API', 'FastAPI', 'Redis'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Designed and developed this responsive portfolio with advanced animations, WebGL effects, and a modern glassmorphism design.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Motion', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    demoLink: '#',
    repoLink: '#',
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// Project Card Component
function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <motion.h3
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-white"
          >
            {project.title}
          </motion.h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.p
          className="text-gray-300 mb-4 line-clamp-3"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? 'auto' : '3.6rem',
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, backgroundColor: '#7C3AED' }}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.demoLink}
            className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 py-2 text-center font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            Demo
          </a>
          <a
            href={project.repoLink}
            className="flex-1 rounded-lg border border-white/20 py-2 text-center font-medium text-white transition-transform hover:scale-105 active:scale-95 hover:bg-white/10"
          >
            Code
          </a>
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-transparent to-orange-500/0 transition-all duration-500 group-hover:from-purple-500/20 group-hover:to-orange-500/20" />
    </motion.div>
  );
}

function Projects() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-orange-600/10 blur-[100px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A selection of my latest work, featuring machine learning, full-stack
            applications, and creative solutions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
