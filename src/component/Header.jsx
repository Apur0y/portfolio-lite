import { useContext, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Header = () => {


  const {light,handleToggle} =useContext(AuthContext)

  const handleLight=()=>{
    handleToggle()
  }


  const lightClass = light ? "bg-white" : "bg-gray-800 text-white"

  return (
    <div className={`${lightClass} border-b-2`}>
      <div className={`${lightClass} navbar  w-11/12 mx-auto py-5`}>
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">Apu Roy</a>
        </div>
        <div className="flex-none ">
          <div>
            <button className="hover:bg-blue-200 p-3 rounded-full" onClick={handleLight}>
           {light ?  <MdDarkMode /> : <CiLight /> }
            </button>
            
          </div>
          <ul className="menu menu-horizontal text-xl px-1 lg:mr-24">
            <li className="lg:mr-6">
              <Link>Blog</Link>
            </li>
            <li>
              <details>
                <summary>Contacts</summary>
                <ul className=" rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
