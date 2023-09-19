import React from 'react'

function About() {
  return (
    <div>
          <h1 className='md:text-6xl text-4xl font-bold text-white p-8 text-center'>ABOUT US</h1>
      <div className='md:flex md:flex-row mt-8 border-solid-2 border-white border-b-2 flex-wrap justify-around gap-6'>
        <img
          className="md:w-[600px] md:h-[600px] w-auto h-auto rounded-full p-2"
          src="https://th.bing.com/th/id/OIG.Cc4Hj9QXrqX60eKrp5lg?pid=ImgGn"
        ></img>
        <p className="text-white  md:text-3xl text-xl font-semibold font-sans p-4">
          Welcome to StyleStrutters, your go-to destination for premium men's<br/>
          footwear. Established with a passion for quality and style, we're here<br/>
          to help you put your best foot forward.
        </p>
        </div>
        <div className='md:flex md:flex-row flex-wrap mt-8 justify-around gap-6'>
        <img className="md:w-[600px] md:h-[600px] w-auto h-auto rounded-full p-2" src="https://th.bing.com/th/id/OIG.KqyzBWe9RtK_Q0pvN4y_?pid=ImgGn"></img>
        <p className="text-white md:text-3xl text-xl font-semibold font-sans p-4">
          Our Story At StyleStrutters, we believe that a great pair of shoes
          <br />
          can elevate your confidence and complete your look. Our journey began
          <br />
          with a simple idea – to provide men with meticulously crafted,
          <br />
          stylish, and comfortable shoes that stand the test of time.
        </p>
        </div>
    </div>
  );
}

export default About