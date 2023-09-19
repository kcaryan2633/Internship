import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <div className='relative'>
      <div className='realtive w-full h-auto'>
        <img className='w-full md:h-[900px] h-auto relative' src='https://th.bing.com/th/id/OIG._NwuVhipeNVtmcCaDFBg?pid=ImgGn'></img>
        <div className='absolute inset-0 w-full h-auto'>
          <h1 className='text-white md:text-6xl text-3xl font-bold   p-6 md:pt-[250px]'>"Walk the Talk of Elegance:<br/>
           Find Your Signature Style"</h1>
           <p className='md:text-3xl text-xl font-medium p-6 text-white'>Try out the best and most comfy product in town.</p>
           <button className=' bg-[#333] text-white font-semibold text-xl md:h-12 md:w-40 w-32 h-10 rounded-md md:m-4 m-2'>Get Started</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header