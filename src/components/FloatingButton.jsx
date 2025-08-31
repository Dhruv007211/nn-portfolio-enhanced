import React from 'react'

export default function FloatingButton(){
  return (
    <a href='#contact' className='fixed right-6 bottom-6 w-16 h-16 rounded-full flex items-center justify-center shadow-neon' style={{background:'linear-gradient(135deg,#7c3aed,#06b6d4)', color:'#fff'}} aria-label='Contact'>
      ✉️
    </a>
  )
}
