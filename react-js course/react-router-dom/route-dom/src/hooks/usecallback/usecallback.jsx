import { useCallback } from "react";
import { useState } from "react"
import Counter from "./counter";


export default function UseCallback(){

    const [countvalueone,setcountvalueone]=useState(0);

    const [countvaluetwo,setcountvaluetwo]=useState(0);

    const memoisedone=useCallback(()=>(setcountvalueone(countvalueone+1)),[countvalueone])

    const memoisedtwo=useCallback(()=>(setcountvaluetwo(countvaluetwo+1)),[countvaluetwo])

    return <div>
      

        <Counter countvalue={countvalueone} onclick={memoisedone}/>

        <Counter countvalue={countvaluetwo} onclick={memoisedtwo}/>

    </div>
    
}