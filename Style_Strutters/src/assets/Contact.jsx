import React from 'react'

function Contact() {
  return (
    <>
    <div className='md:flex md:flex-row justify-around gap-8 '>
    <div className='md:w-[600px] w-auto h-auto m-6'>
        <h1 className='text-white font-sans font-bold text-3xl p-6'>Connect with Us</h1>
        <p className='text-white font-mono font-normal text-2xl p-6'>
          Fill out the contact form below to get in touch with out team. We're
          here to answer any questions you have about our product marketing
          services and help you achieve your business goals.
        </p>
        </div>
        <div className='flex flex-col md:w-[600px] w-auto  h-auto m-6'>
        <label className='text-white font-medium pt-3 pb-3 text-2xl'>Name</label>
        <input className='text-gray-500 text-2xl p-2'></input>
        <label className='text-white font-medium pt-3 pb-3 text-2xl'>E-mail</label>
        <input className='text-gray-500 text-2xl p-2'></input>
        <label className='text-white font-medium pt-3 pb-3 text-2xl'>Message</label>
        <textarea className='text-gray-500 text-2xl p-2'></textarea>
        <button className='text-xl bg-gray-200 text-[#333] h-12 w-32 m-auto mt-8 mb-[500px]'>Send</button>
      </div>
      </div>
      </>
  );
}

export default Contact