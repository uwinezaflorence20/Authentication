import React from 'react'
const Register = () => {
  return (
    <div className=" bg-green-300 ml-80 rounded-xl border border-red-400 h-[100vh] w-[100vh] flex justify-center items-center bg-cover text-white">
      <div>  <h1 className="text-3xl text-blue-600 mb-8">Create your Account</h1>
        <div className="  bg-yellow-200 rounded-xl border border-red-400 h-[40vh]  w-[60vh] flex justify-center items-center bg-cover text-blue-500">
      
        <form action="">
          <div >
            
            <input className=" mt-16 rounded-2xl border w-96 h-8 border-blue-400 text-center bg-pink-300 m-4 " type="email" id="email " placeholder="enter email" />
          </div>
          <div>
            <input className="rounded-2xl border w-96 h-8 border-blue-400 text-center bg-pink-300 m-4 " type="password" id="password" placeholder="password" required />
          </div>
          <div>
            <input className="rounded-2xl border w-96 h-8 border-blue-400 text-center bg-pink-300 m-4 " type="password" id="password"  placeholder="comfirm password" required/>
          </div>
          <div className="flex gap-20 justify-center items-center">
          
          </div>
          <button className="rounded-2xl border border-blue-400 mx-32 bg-blue-300 m-4  w-44" type="password" id="password"> Register </button>
         <p className="text-center mb-8">Already Have an Account? <a href="/" className="text-black">sign in</a></p>
          <div>
   {/* <span> New Here?<link to="Register"> Create An Account</link></span>  */}
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register
