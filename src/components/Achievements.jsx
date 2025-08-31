import React from 'react'
import { motion } from 'framer-motion'

const achievements = [
  { title: 'DSA Proficiency (Java)', detail: 'Strong problem solving & OOP, solved 40+ problems on LeetCode & 10+ problems GeeksforGeeks' },
  { title: 'Multiple DS Projects', detail: 'Handled and preprocessed datasets: cleaned, transformed, and managed data effectively'  },
  { title: 'Data Visualization', detail: 'Built dashboards & visual reports' },
  { title: 'Competition Participation', detail: 'Participated in Anand ICE Ideathon' },
]

export default function Achievements(){
  return (
    <section id='achievements' className='py-12'>
      <motion.h2 
        className='text-3xl font-bold glow-underline' 
        initial={{opacity:0,y:10}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}}
      >
        Achievements
      </motion.h2>
      <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {achievements.map((a,i)=>(
          <motion.div 
            key={i} 
            className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon' 
            initial={{scale:0.98}} 
            whileInView={{scale:1}} 
            viewport={{once:true}}
          >
            <div className='font-semibold text-gray-100'>{a.title}</div>
            <div className='text-sm text-gray-300 mt-2'>{a.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
