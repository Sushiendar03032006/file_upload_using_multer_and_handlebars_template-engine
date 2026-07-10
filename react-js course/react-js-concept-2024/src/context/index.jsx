import { useState } from "react";
import { createContext } from "react";


export const GlobalContext=createContext(null);


export default function GlobalState({children}){
    const [theme,settheme]= useState("light");

    const handletheme=()=>{
        settheme(theme==="light"?"dark":"light");
    }

    return <div>

         <GlobalContext.Provider value={{theme,handletheme}}>{children}</GlobalContext.Provider>

    </div>

   
}

