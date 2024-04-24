import React from 'react'

const Home = () => {
  return (
    <div className=" bg-pink-300 w-screen h-full rounded-2xl border border-[#440f84] align-middle m-20">
     <div className="mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8" >
        <p className="bg-green-400 rounded-xl border border-[#440f84] w-screen px-4 py-4 ">jone doe</p>
     </div>
     <div className='h-screen w-screen grid-rows-2 flex '>
     <div class="w-40 h-full  px-8">
        <ul>
            <li><a href="#" class="text-white hover:bg-gray-700 block py-2 px-4">Home</a></li>
            <li><a href="#" class="text-white hover:bg-gray-700 block py-2 px-4">About</a></li>
            <li><a href="#" class="text-white hover:bg-gray-700 block py-2 px-4">Services</a></li>
            <li><a href="#" class="text-white hover:bg-gray-700 block py-2 px-4">Contact</a></li>
        </ul>
    </div>
    <div className=" w-full h-screen rounded-3xl border border-[#440f84] mx-8 bg-yellow-200  flex    sm:px-6 lg:px-8" >
        <p></p>
    </div>
    </div>
    </div>
  )
}

export default Home
