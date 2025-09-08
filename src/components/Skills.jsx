import React from 'react'
import { motion } from 'framer-motion'

// Categories
const programming = ['Python', 'Java', 'C']
const coreCS = ['Data Structures & Algorithms (DSA)', 'Object Oriented Programming (OOP)', 'Problem Solving']
const libraries = ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
const dataHandling = ['Data Manipulation', 'Data Visualization', 'Data Analysis']
const tools = ['MS Excel','VS-Code','Jupyter NoteBook']

export default function Skills() {
  const renderList = (arr) =>
    arr.map((item, i) => (
      <li key={i} className='text-gray-300 text-sm'>{item}</li> // light text
    ))

  return (
    <section id='skills' className='py-12'>
      <motion.h2
        className='text-3xl font-bold glow-underline text-center'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className='mt-6 grid md:grid-cols-3 gap-6'>
        {/* Programming Skills */}
        <motion.div
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon'
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className='font-bold text-gray-100 mb-3'>Programming Skills</h3> {/* dark bold heading */}
          <ul className='space-y-2'>{renderList(programming)}</ul>
        </motion.div>

        {/* Core CS */}
        <motion.div
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon'
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className='font-bold text-gray-100 mb-3'>Core Computer Science</h3>
          <ul className='space-y-2'>{renderList(coreCS)}</ul>
        </motion.div>

        {/* Libraries */}
        <motion.div
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon'
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className='font-bold text-gray-100 mb-3'>Libraries & Frameworks</h3>
          <ul className='space-y-2'>{renderList(libraries)}</ul>
        </motion.div>

        {/* Data Handling */}
        <motion.div
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon'
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className='font-bold text-gray-100 mb-3'>Data Handling & Analysis</h3>
          <ul className='space-y-2'>{renderList(dataHandling)}</ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon'
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className='font-bold text-gray-100 mb-3'>Tools</h3>
          <ul className='space-y-2'>{renderList(tools)}</ul>
        </motion.div>
      </div>
    </section>
  )
}
