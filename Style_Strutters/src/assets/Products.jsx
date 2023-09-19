import React from 'react'
import {AiFillStar} from "react-icons/ai"
function Products() {
  return (
    <div>
      <h1 className="md:text-7xl text-4xl font-bold text-white p-8 text-center">
        Products
      </h1>
      <div className="md:flex md:flex-row  justify-around gap-8">
        <div className="flex flex-col p-2 m-6  md:w-[400px] w-auto bg-cover rounded-lg bg-white shadow-xl shadow-gray-500">
          <img
            className="w-auto h-auto"
            src="https://th.bing.com/th/id/OIG.z56GXkfZJ3subrXr9Id4?pid=ImgGn"
          ></img>
          <h1 className="text-2xl font-semibold text-gray-400 p-3">Shoe1</h1>
          <div className="flex flex-row gap-3 text-gray-400 p-3">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className='text-lg p-3 font-medium text-gray-400'>
            Introducing our 3D Aesthetic Shoe - Where Art Meets Footwear!
            Elevate your fashion game to a whole new dimension with our 3D
            Aesthetic Shoe, a masterpiece that seamlessly blends artistic
            innovation with unbeatable comfort. Crafted for the modern man who
            values style and uniqueness, these shoes are a statement piece for
            those who dare to stand out.
          </p>
        </div>
        <div className="flex flex-col p-2 m-6  md:w-[400px] w-auto bg-cover rounded-lg bg-white shadow-xl shadow-gray-500">
          <img
            className="w-auto h-auto"
            src="https://th.bing.com/th/id/OIG.TD5aiAI0zllYe8VlACYo?pid=ImgGn"
          ></img>
          <h1 className="text-2xl font-semibold text-gray-400 p-3">Shoe2</h1>
          <div className="flex flex-row gap-3 text-gray-400 p-3">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className='text-lg p-3 font-medium text-gray-400'>
            Introducing our 3D Aesthetic Shoe - Where Art Meets Footwear!
            Elevate your fashion game to a whole new dimension with our 3D
            Aesthetic Shoe, a masterpiece that seamlessly blends artistic
            innovation with unbeatable comfort. Crafted for the modern man who
            values style and uniqueness, these shoes are a statement piece for
            those who dare to stand out.
          </p>
        </div>
        <div className="flex flex-col p-2 m-6  md:w-[400px] w-auto bg-cover rounded-lg bg-white shadow-xl shadow-gray-500">
          <img
            className="w-auto h-auto"
            src="https://th.bing.com/th/id/OIG.OVHoo41P8YPV_WvSTPUw?pid=ImgGn"
          ></img>
          <h1 className="text-2xl font-semibold text-gray-400 p-3">Shoe3</h1>
          <div className="flex flex-row gap-3 text-gray-400 p-3">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className='text-lg p-3 font-medium text-gray-400'>
            Introducing our 3D Aesthetic Shoe - Where Art Meets Footwear!
            Elevate your fashion game to a whole new dimension with our 3D
            Aesthetic Shoe, a masterpiece that seamlessly blends artistic
            innovation with unbeatable comfort. Crafted for the modern man who
            values style and uniqueness, these shoes are a statement piece for
            those who dare to stand out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products