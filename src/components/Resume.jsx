import React from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
  const resumeLink = '/Dhruv_Singh_Resume.pdf' // public folder me rakha hua PDF

  return (
    <section id='resume' className='py-12'>
      <motion.h2
        className='text-3xl font-bold glow-underline'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      <motion.div
        className='mt-6 flex justify-center'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => window.open(resumeLink, '_blank')}
          className='px-5 py-2 bg-neon text-black font-semibold rounded hover:bg-purple-600 transition-colors duration-200'
        >
          Open Resume
        </button>
      </motion.div>
    </section>
  )
}
