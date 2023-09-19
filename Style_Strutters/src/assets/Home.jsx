import React from 'react'
import Header from "./Header"
import Products from "./Products"
import Contact from "./Contact"
import About from './About'
import Assurances from './Assurances'
function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Products/>
      <Assurances/>
      <Contact/>
    </div>
  )
}

export default Home