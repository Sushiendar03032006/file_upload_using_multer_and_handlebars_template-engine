import { useRef } from "react"


export default function UseRef() {
    const countref=useRef();
    const divref=useRef();
    const inputref=useRef();

    function handlecount(){
        countref.current++;
        console.log(countref);

        inputref.current.focus();

        divref.current.style.color="red";

        setTimeout(()=>{
            divref.current.style.color="green";

            setTimeout(()=>{
                divref.current.style.color="maroon";

            },2000)

        },2000)
    }


    return <div>
        <button onClick={handlecount}>Count</button>
        <br>
        </br>

        <input type="text" ref={inputref}/>


         <div ref={divref}>Sushiendar</div>
     
    </div>
    
}