import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar({ dark, setDark }){
  return (
    <nav className='fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5'>
      <div className='max-w-5xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-black font-bold'>NN</div>
          <div>
            <div className='text-sm font-semibold'>Dhruv Singh</div>
            <div className='text-xs opacity-70'>Data Science • ML</div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <a href='#projects' className='text-sm hover:underline hidden md:inline'>Projects</a>
          <a href='#skills' className='text-sm hover:underline hidden md:inline'>Skills</a>
          <a href='#achievements' className='text-sm hover:underline hidden md:inline'>Achievements</a>
          <a href='#contact' className='text-sm hover:underline'>Contact</a>
          <button onClick={() => setDark(!dark)} className='p-2 rounded-md border border-white/10'>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  )
}
