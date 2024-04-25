import React from 'react'

const Head = () => {
  return (
    <div className='bg-green-300 rounded-lg  flex gap-96 p-4 m-2 border-2  border-blue-300 '>
        <div className='font-bold text-xl flex pl-5 text-blue-700 ml-20' >
      <h1>Jane Doe</h1> 
       </div>
       <div>
        <button className="rounded-md bg-emerald-800 w-20 h-10"><a href="/Login">Login</a></button>
        <button className="rounded-md bg-emerald-800 w-20 h-10"><a href="/Register">sign in </a></button>
       </div>
    </div>
  )
}

export default Head
