import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id='about' className='py-12 relative'>
      {/* Section Heading */}
      <motion.h2
        className='text-3xl font-bold glow-underline text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        className='mt-6 text-gray-300 max-w-4xl mx-auto text-justify'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I am an aspiring Data Scientist with a strong passion for turning messy and complex data into meaningful insights. 
        My expertise lies in data analysis, manipulation, and visualization using Python (Pandas, NumPy, Matplotlib, Seaborn), 
        along with solid foundations in Java (DSA & OOP) and C. I enjoy exploring new technologies and solving challenging problems.
      </motion.p>

      {/* Personal Interests */}
      <motion.div
        className='mt-8 max-w-4xl mx-auto text-gray-300 space-y-3 text-justify'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>
          Outside of technology, I am an active sports enthusiast. I enjoy playing cricket, spending time on fitness routines, 
          and maintaining a healthy lifestyle. Music is another passion of mine, and I often listen to it to stay motivated 
          and focused. 
        </p>
        
          I also like exploring new technical domains and learning new tools in Data Science, which keeps me curious and constantly improving.
        
        <p>
          I believe that balancing personal growth and technical learning makes me productive, creative, and motivated in both professional and personal life.
        </p>
      </motion.div>

      {/* Optional Floating Background Effects */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='w-6 h-6 bg-purple-500 rounded-full absolute'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], x: [0, 10, -10, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
    </section>
  )
}
