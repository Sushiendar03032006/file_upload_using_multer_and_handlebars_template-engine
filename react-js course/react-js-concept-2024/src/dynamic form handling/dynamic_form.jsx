import { useState } from "react";


export default function Form_Generator({title,fields}){

    const initialstate={};

    fields.forEach(field=> {
        initialstate[field.name]=""
        
    });

    const [formvalue,setformvalue]=useState(initialstate); 

    function handleOnchange(event){
        const {name,value}=event.target;
        setformvalue({
            ...formvalue,
            [name]:value
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        alert(JSON.stringify(formvalue,null,2));
        
    }

    function renderfield(field){
        const commonprops={
            name:field.name,
            id:field.name,
            value:formvalue[field.name],
            placeholder:field.placeholder,
            onChange: handleOnchange
        };

        if(field.type==="option"){
            return <select {...commonprops}>
                <option value="" disabled selected>---Select---</option>
                {
                    field.options.map((opt)=>(
                        <option key={opt} value={opt}>{opt}</option>
                    ))
                }
            </select>
        }

        else if(field.type==="textarea"){
            return <textarea {...commonprops} rows="5" cols="21"></textarea>
        }

        else if(field.type==="password"){
            return <input {...commonprops} type="password"/>
        }

        else if(field.type==="email"){
            return <input {...commonprops} type="email"/>
        }

        else{
            return <input {...commonprops} type="text"/>
        }

    }

  


    return <div>
        <h1>{title} form</h1>
        <form onSubmit={handleSubmit}>
        {
            fields.map((field,index)=>(
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.name+" : "}</label>
                    {
                        renderfield(field)

                    }
                </div>
                

            ))
        }
        <button type="submit">{title}</button>
        
        </form>
    </div>
}