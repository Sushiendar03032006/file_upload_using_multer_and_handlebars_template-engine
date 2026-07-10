import { useEffect } from "react";
import { useState } from "react"



export default function Form_handling(){
    const [formvalue,setformvalue]=useState({
        name:"",
        email:""
    })

    function handleOnchange(event){
        const {name,value}=event.target;


        setformvalue({
            ...formvalue,
            [name]:value
        })
    }

    useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setformvalue(JSON.parse(savedData));
    }
  }, []);

  // 💾 Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formvalue));
  }, [formvalue]); 

    


    function handleSubmit(event){
        event.preventDefault();

        console.log(formvalue.name+" "+formvalue.email);

    }
    return <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
                   name="name"
                   value={formvalue.name}
                   placeholder="Enter name"
                   onChange={handleOnchange}/>
            <input type="email"
                   name="email"
                   value={formvalue.email}
                   placeholder="Enter email"
                   onChange={handleOnchange}/>
            <button type="submit">Click</button>
        </form>

    </div>
}