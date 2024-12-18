import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Root = () => {

    
      const {light} = useContext(AuthContext)
    
      const lightClass = light ? "bg-white text-black" : "bg-gray-800 text-white"

    return (
        <div className={`${lightClass}`}>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;