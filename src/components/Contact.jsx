import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempErrors = {}
    if (!name.trim()) tempErrors.name = 'Name is required'
    if (!email.trim()) tempErrors.email = 'Email is required'
    setErrors(tempErrors)

    if (Object.keys(tempErrors).length === 0) {
      // Form is valid, you can handle send here
      alert('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <section id='contact' className='py-12'>
      <motion.h2 
        className='text-3xl font-bold glow-underline' 
        initial={{opacity:0, y:10}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}}
      >
        Contact
      </motion.h2>

      <div className='mt-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
        {/* Contact Info */}
        <motion.div 
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon'
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1,y:0}} 
          viewport={{once:true}}
        >
          <div className='text-lg font-semibold text-gray-100'>Get in touch</div>
          <p className='mt-2 text-gray-300'><FaEnvelope className='inline mr-2 text-purple-400' /> dhruv25072006@gmail.com</p>
          <p className='mt-1 text-gray-300'><FaPhone className='inline mr-2 text-purple-400' /> +91 9021889562</p>
          <div className='flex gap-4 mt-4 text-2xl text-neon'>
            <a href='https://github.com/Dhruv007211' target='_blank' rel='noreferrer'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/dhruv-singh-88969a333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noreferrer'><FaLinkedin /></a>
            <a href='https://www.instagram.com/dhruvionx?igsh=MjVhZDJlbTNnejZw' target='_blank' rel='noreferrer'><FaInstagram /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 shadow-neon space-y-3'
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1,y:0}} 
          viewport={{once:true}}
        >
          <input 
            className='w-full p-3 rounded bg-transparent border border-white/10 text-gray-100 placeholder-gray-400' 
            placeholder='Your name' 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          {errors.name && <div className='text-red-500 text-sm'>{errors.name}</div>}

          <input 
            className='w-full p-3 rounded bg-transparent border border-white/10 text-gray-100 placeholder-gray-400' 
            placeholder='Email' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
          {errors.email && <div className='text-red-500 text-sm'>{errors.email}</div>}

          <textarea 
            className='w-full p-3 rounded bg-transparent border border-white/10 text-gray-100 placeholder-gray-400' 
            rows='4' 
            placeholder='Message' 
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button type='submit' className='px-4 py-2 rounded bg-neon text-black font-semibold hover:scale-105 transition-transform duration-300'>Send</button>
        </motion.form>
      </div>
    </section>
  )
}
