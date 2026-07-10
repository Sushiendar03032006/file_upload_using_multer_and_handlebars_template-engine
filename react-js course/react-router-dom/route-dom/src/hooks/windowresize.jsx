import { useState,useEffect } from "react";


export default function UseWindowResize(){

    const [windowvalue,setwindowvalue]=useState({
        width:"",
        height:""
    })

    function handleresize(){
        setwindowvalue({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        handleresize();

        window.addEventListener("resize",handleresize);

        return ()=>{
              window.removeEventListener("resize",handleresize)
        }

    })

    return windowvalue;
}