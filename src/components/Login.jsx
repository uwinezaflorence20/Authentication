const Login = () => {
  return (
    <div>  <h1 className="text-3xl text-blue-600 mb-8">Log in Here</h1>
      <div className=" bg-yellow-200 rounded-xl border border-red-400 h-[40vh]   w-[60vh] flex justify-center items-center bg-cover text-blue-500">
    
      <form action="">
        <div >
          <p className="text-center text-red-400 text-2xl"> sign in </p>
          <input className="rounded-2xl border w-96 h-8 border-blue-400 bg-pink-300 text-center m-4 " placeholder="enter email" type="email" id="email" />
        </div>
        <div>
          <input className="rounded-2xl border w-96 h-8 border-blue-400 bg-pink-300 text-center m-4 "  placeholder="enter password" type="password" id="password" />
        </div>
        <div className="flex gap-20 justify-center items-center">
          
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <span className="text-center text-black flex justify-center items-center"> Forgot Password</span>
        </div>
        <button className="rounded-2xl border border-blue-400 bg-blue-300 ml-28 my-4   w-44" type="password" id="password"> sign in </button>
       <p className="text-center">Already does not have an account ? <a  className="text-black" href="/Register">sign up</a></p>
        <div>
 {/* <span> New Here?<link to="Register"> Create An Account</link></span>  */}
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;

