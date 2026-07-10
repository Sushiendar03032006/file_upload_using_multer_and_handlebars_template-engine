import { useContext } from "react"
import { GlobalContext } from "../../context"


export default function ButtonContext(){

    const {handletheme}= useContext(GlobalContext);


    return <div>
        <button onClick={handletheme}>Click</button>
    </div>


}