import React from 'react'
import { Outlet,Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <>
    <div className="bg-pink-200 h-screen rounded-xlg">
        <div className="bg-green-400 text-blue-800 text-2xl border-2 border-blue-800 px-4  p-2 flex flex-end">
          <h1>John Doe</h1>
          <div className="bg-blue-300 rounded-md ml-80 px-2">
          <Link to='/'><button>log Out </button></Link>
          </div>
        </div>
        <div className="bg-pink-300 h-screen flex">
          <div className="text-blue-800 h-screen flex">
            <div
              className="text-blue-800 p-4 h-full border-r"
              style={{ width: "200px" }}
            >
              <nav>
                <div className="flex flex-col p-2 m-2">
                  <ul>
                    <li>
                      <Link to="/Home"
                        className="py-2 px-4 block hover:bg-gray-500 text-xl p-2"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Aboutme"
                        className="py-2 px-4 block hover:bg-gray-500 text-xl p-2"
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Contactme"
                        className="py-2 px-4 block hover:bg-gray-500 text-xl p-2"
                      >
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className=" flex mt-12 rounded-2xl h-[76vh] w-full border-2 border-blue-800 ">
         <Outlet />
          </div>
        </div>
    </div>
    </>
  )
}

export default Homepage
