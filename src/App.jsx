import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

export default function App(){
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const pref = localStorage.getItem('ds_theme')
    if(pref) setDark(pref === 'dark')
  },[])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('ds_theme', dark ? 'dark' : 'light')
  },[dark])

  return (
    <div className='min-h-screen'>
      <Navbar dark={dark} setDark={setDark} />
      <main className='max-w-5xl mx-auto px-4 pt-24 space-y-28'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />  
        <Contact />
        <Footer />
      </main>
      <FloatingButton />
    </div>
  )
}
