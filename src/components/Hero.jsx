import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Hero(){
  return (
    <section className='min-h-screen flex flex-col items-center text-center justify-center px-4'>
      {/* Profile Image */}
      <motion.img 
        src='/profile.jpg' 
        alt='Dhruv Singh' 
        className='w-40 h-40 rounded-full border-4 border-neon shadow-neon object-cover' 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.8 }} 
      />

      {/* Name */}
      <motion.h1 
        className='text-4xl md:text-5xl font-extrabold mt-6' 
        initial={{ y:-20, opacity:0 }} 
        animate={{ y:0, opacity:1 }} 
        transition={{ delay:0.2 }}
      >
        Hi, I'm <span className='text-neon'>Dhruv Singh</span>
      </motion.h1>

      {/* Short intro */}
      <motion.p 
        className='mt-3 text-gray-300 max-w-xl'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.4 }}
      >
        Aspiring Data Scientist passionate about Data Analysis, Visualization, and Problem Solving.  
        Strong foundations in Python, Java (DSA & OOP),and C.  
          I also enjoy sports like cricket, fitness, and listening to music in my free time.
      </motion.p>

      {/* Contact & Social Icons */}
      <motion.div 
        className='flex gap-6 mt-6 text-2xl text-neon flex-wrap justify-center'
        initial={{ opacity:0 }} 
        animate={{ opacity:1 }} 
        transition={{ delay:0.6 }}
      >
        <a href='https://github.com/Dhruv007211' target='_blank' rel='noreferrer'>
          <FaGithub className='hover:scale-110 transition duration-200'/>
        </a>
        <a href='https://www.linkedin.com/in/dhruv-singh-88969a333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noreferrer'>
          <FaLinkedin className='hover:scale-110 transition duration-200'/>
        </a>
        <a href='https://www.instagram.com/dhruvionx?igsh=MjVhZDJlbTNnejZw' target='_blank' rel='noreferrer'>
          <FaInstagram className='hover:scale-110 transition duration-200'/>
        </a>
        <a href='tel:+919021889562'>
          <FaPhone className='hover:scale-110 transition duration-200'/>
        </a>
        <a href='mailto:dhruv25072006@gmail.com'>
          <FaEnvelope className='hover:scale-110 transition duration-200'/>
        </a>
      </motion.div>
    </section>
  )
}
