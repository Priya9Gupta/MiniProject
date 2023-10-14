import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    //  ......................
    const [currentUser,] = useState(JSON.parse(sessionStorage.getItem('user'))
    );

    const [loggedin, setLoggedin] = useState(currentUser !== null)
       
     const navigate = useNavigate();
    const logout =() => {
        setLoggedin(false);
        sessionStorage.removeItem('user');
        Navigate('/login');
    }
    
    return <AppContext.Provider value={{ loggedin, setLoggedin,currentUser }}>
        {children}

    </AppContext.Provider>
}


const useAppContext = () => {
    return useContext(AppContext)
};


export default useAppContext;