import { useContext, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const { light, handleToggle } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const handleLight = () => {
    handleToggle();
  };

  const lightClass = light ? "bg-white text-black" : "bg-gray-800 text-white";

  return (
    <div id="navbar" className={`${lightClass} border-b-2 sticky -top-3 z-30`}>
      <div className={`${lightClass} navbar w-11/12 mx-auto py-2 flex justify-between items-center`}>
        
        {/* Name at the start */}
        <div className="hidden md:flex">
          <a className="btn btn-ghost text-2xl font-semibold">Apu Roy</a>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu  size={30} />
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`absolute top-14 left-0 rounded-lg shadow-md md:shadow-none md:bg-transparent md:static md:flex md:items-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:gap-12 text-xl px-4 py-4 md:py-0 md:px-1">
            <li><a href="#about" className="block py-2 md:py-0">About</a></li>
            <li><a href="#skills" className="block py-2 md:py-0">Skills</a></li>
            <li><a href="#my-projects" className="block py-2 md:py-0">Projects</a></li>
            <li><a href="#education" className="block py-2 md:py-0">Education</a></li>
          </ul>
        </div>

        {/* Toggle button and Resume Download at the end */}
        <div className="flex items-center space-x-4">
          <button
            className="hover:bg-blue-200 p-3 rounded-full transition duration-300"
            onClick={handleLight}
          >
            {light ? <MdDarkMode size={24} /> : <CiLight size={24} />}
          </button>
          <a
            href="/Apu Roy Web Developer.pdf"
            download="Apu Roy Web Developer.pdf"
            className="btn btn-primary text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
