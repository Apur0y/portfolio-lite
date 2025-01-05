import { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Header = () => {
  const { light, handleToggle } = useContext(AuthContext);

  const handleLight = () => {
    handleToggle();
  };

  const lightClass = light ? "bg-white" : "bg-gray-800 text-white";

  return (
    <div id="navbar" className={`${lightClass} border-b-2 sticky -top-3 z-30`}>
      <div className={`${lightClass} navbar w-11/12 mx-auto py-2 flex justify-between items-center`}>
        {/* Name at the start */}
        <div className="flex-1 hidden md:flex">
          <a className="btn btn-ghost text-2xl font-semibold">Apu Roy</a>
        </div>

        {/* Links at the center */}
        <div className="">
          <ul className=" menu-horizontal justify-center text-xl px-1 py-4 gap-5 md:space-x-6">
           
            <li>
             <a href="#my-projects">Projects</a>
            </li>
            <li>
             <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>

        {/* Toggle button and Resume Download at the end */}
        <div className="flex items-center md:space-x-4">
          <button
            className="hover:bg-blue-200 p-3 rounded-full transition duration-300"
            onClick={handleLight}
          >
            {light ? <MdDarkMode /> : <CiLight />}
          </button>
          <a
            href="/Apu Roy_MERN Stack Resume.pdf" // Path to the resume file in the public folder
            download="Apu Roy_MERN Stack Resume.pdf" // Optional custom file name for the download
            className=" btn btn-primary text-white "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
