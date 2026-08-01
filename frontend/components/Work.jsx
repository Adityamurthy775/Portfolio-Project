import React from 'react'
import { easeOut, motion } from 'motion/react'

/* ────────────────────────────────────────────────────────────────────────────
 * Animation variants
 * ──────────────────────────────────────────────────────────────────────────── */
const SECTION_REVEAL = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

const STAGGER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

/* ────────────────────────────────────────────────────────────────────────────
 * Internships data
 * Add your internship details here
 * ──────────────────────────────────────────────────────────────────────────── */
const internships = [
  {
    title: 'Data visualization',
    company: 'Excelerate',
    year: '2025',
    summary: 'Completed a Data Visualization Internship at Excelerate Global, where I cleaned and analyzed datasets using Python, Excel, and SQL. Performed exploratory data analysis (EDA) and created interactive dashboards in Looker Studio to present business insights effectively.'
  },
  {
    title: 'Data Analyst',
    company: 'Eduskills/Google',
    year: '2026',
    summary: 'Completed a Google Cloud Data Analytics Internship through AICTE Edunet Foundation, gaining hands-on experience with GCP, Python, Pandas, and SQL. Conducted EDA and developed Looker Studio dashboards to support data-driven decision-making.',
    link: null, // Add URL if applicable
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * Projects data
 * Add your project details here
 * ──────────────────────────────────────────────────────────────────────────── */
const projects = [
  {
    title: 'Trello Clone',
    tech: 'React, Node.js, MongoDB,Javascript',
    year: '2026',
    summary: 'Developed a full-stack Trello-inspired project management application with drag-and-drop task management, customizable boards, lists, and cards. Implemented real-time updates, user authentication, and responsive UI to streamline team collaboration and task tracking.',
    link: 'https://trello-clone-5d5t.onrender.com/', // Add project URL or GitHub link
  },
  {
    title: 'Smart Placement Tracker',
    tech: 'React, Node.js, MongoDB,Javascript',
    year: '2026',
    summary: 'Built a web-based placement management system to help students track job applications, interview progress, and placement statistics. Developed an intuitive dashboard with analytics, status tracking, and role-based access to improve placement monitoring and organization.',
    link: 'https://smart-placement-tracker-ebon.vercel.app',
  },
  {
    title: 'Stock Market Prediction',
    tech: 'FastAPI, Python, React',
    year: '2025',
    summary: 'Developed an AI-powered stock market prediction platform using Python and machine learning to analyze historical market data and forecast stock price trends. Integrated technical indicators, sentiment analysis, and interactive visualizations to provide data-driven investment insights.',
    link: 'https://stock-zen-predict.lovable.app',
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * WorkCard
 * Reusable card component matching the About.jsx CredentialCard design
 * ──────────────────────────────────────────────────────────────────────────── */
function WorkCard({ title, subtitle, year, summary, link, badge }) {
  const Wrapper = link ? 'a' : 'div'
  const wrapperProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Open ${title}`,
      }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className='group relative block rounded-md border border-dashed border-white/25 bg-white/[0.02] px-6 py-6 md:px-7 md:py-7 transition-colors duration-300 ease-out hover:border-orange-700 hover:bg-white/[0.04]'
    >
      {/* Corner brackets */}
      <span className='absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-white/70' />
      <span className='absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-white/70' />
      <span className='absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-white/70' />
      <span className='absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-white/70' />

      <div className='flex items-start justify-between gap-4'>
        <div className='flex-1 min-w-0'>
          {/* Title + subtitle */}
          <h4 className='text-lg md:text-xl font-bold text-white truncate'>
            {title}
          </h4>
          <p className='mt-1 text-xs md:text-sm text-white/60'>{subtitle}</p>

          {/* Year + badge row */}
          <div className='mt-3 flex flex-wrap items-center gap-2'>
            <span className='text-xs uppercase tracking-[0.2em] text-white/50'>
              {year}
            </span>
            {badge && (
              <span className='inline-block rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'>
                {badge}
              </span>
            )}
          </div>

          {/* Summary */}
          <p className='mt-3 text-sm leading-relaxed text-white/80'>
            {summary}
          </p>
        </div>
      </div>

      {/* View Project/Details button */}
      {link && (
        <div className='mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 ease-out group-hover:text-orange-700'>
          View Details
        </div>
      )}
    </Wrapper>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
 * Work
 * Main component rendering internships and projects sections
 * ──────────────────────────────────────────────────────────────────────────── */
function Work() {
  return (
    <section
      id='work'
      className='relative w-full bg-black text-white py-24 md:py-32 overflow-hidden'
    >
      <div className='mx-auto max-w-6xl px-6'>
        {/* Section heading */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          variants={SECTION_REVEAL}
          className='text-center'
        >
          <p className='text-xs uppercase tracking-[0.2em] text-white/50 font-semibold'>
            Work Experience
          </p>
          <h2 className='mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white'>
            Internships & Projects
          </h2>
        </motion.div>

        {/* Internships Section */}
        <div className='mt-16'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={SECTION_REVEAL}
          >
            <h3 className='text-xl md:text-2xl font-semibold text-white mb-8'>
              Internships
            </h3>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.1 }}
            variants={STAGGER}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {internships.map((item) => (
              <motion.div key={item.title} variants={ITEM}>
                <WorkCard
                  title={item.title}
                  subtitle={item.company}
                  year={item.year}
                  summary={item.summary}
                  link={item.link}
                  badge='Internship'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Projects Section */}
        <div className='mt-20'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={SECTION_REVEAL}
          >
            <h3 className='text-xl md:text-2xl font-semibold text-white mb-8'>
              Projects
            </h3>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.1 }}
            variants={STAGGER}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {projects.map((item) => (
              <motion.div key={item.title} variants={ITEM}>
                <WorkCard
                  title={item.title}
                  subtitle={item.tech}
                  year={item.year}
                  summary={item.summary}
                  link={item.link}
                  badge='Project'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
