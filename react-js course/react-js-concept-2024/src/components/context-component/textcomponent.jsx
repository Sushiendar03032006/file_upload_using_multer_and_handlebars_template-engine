import { useContext } from "react"
import { GlobalContext } from "../../context"


export default function TextContext(){

    const {theme}= useContext(GlobalContext);


    return <div>
        <h1 
        style={{color:theme==="light"?"red":"black",fontSize:theme==="light"?"30px":"40px"}}>Sushiendar</h1>
    </div>


}