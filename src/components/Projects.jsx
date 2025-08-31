import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { 
    title: 'Apple Inc. 10-Year Sales Trend Analysis', 
    desc: 'Analyzed 10 years of Apple sales data to identify trends, visualize growth, and forecast future sales.', 
    tech: ['Python','Pandas','NumPy','Matplotlib'] 
  },
  { 
    title: 'Retail Sales Data Cleaning and Visualization', 
    desc: 'Performed data cleaning, preprocessing, and visualized retail sales data for actionable insights.', 
    tech: ['Python','NumPy','Pandas','Seaborn','Matplotlib'] 
  },
]

export default function Projects(){
  return (
    <section id='projects' className='py-12'>
      <motion.h2 
        className='text-3xl font-bold glow-underline' 
        initial={{opacity:0,y:10}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}}
      >
        Projects
      </motion.h2>
      <div className='mt-6 grid md:grid-cols-2 gap-6'>
        {projects.map((p,i)=>(
          <motion.article 
            key={i} 
            className='p-5 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/30 border border-white/5'
            initial={{opacity:0, y:10}} 
            whileInView={{opacity:1,y:0}} 
            viewport={{once:true}}
          >
            <div className='font-bold text-gray-100'>{p.title}</div>
            <div className='text-sm text-gray-300 mt-2'>{p.desc}</div>
            <div className='text-xs opacity-80 mt-3'>{p.tech.join(' • ')}</div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
