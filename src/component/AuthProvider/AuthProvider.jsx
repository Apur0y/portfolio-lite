import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [light, setLight] = useState(false);
    const handleToggle = () => {
        setLight(!light); 
      };
   
const authInfo = {
    light,
    handleToggle
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
