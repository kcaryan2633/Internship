import React from 'react'
import Home from "./assets/Home"
import { Route,Routes } from 'react-router-dom'
import Contact from './assets/Contact'
import About from './assets/About'
import Products from './assets/Products'
import Navbar from './assets/Navbar'
function App() {
  return (
    <div className='bg-[#333] w-full h-full m-0 p-0'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
    </div>
  )
}

export default App