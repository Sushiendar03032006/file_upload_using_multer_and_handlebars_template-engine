import js from "@eslint/js";
import { useEffect } from "react";
import { useForm } from "react-hook-form"


export default function React_hook_Form(){

    const {register,
        reset,
        handleSubmit,
        formState:{errors}
    }=useForm();


    


    // useEffect(()=>{

    //     const saveddata=localStorage.getItem("formstate");

    //     if(saveddata){
    //         reset(JSON.parse(saveddata));
    //     }



    // },[reset])

    
    function onsubmit(data){
       
        console.log(data);

        //  localStorage.setItem("formstate",JSON.stringify(data));

        reset();

      
    }


    return <div>
        <form onSubmit={handleSubmit(onsubmit)}>
            <div>
                <label>Email:</label>
                <input type="email"
                       name="email"
                       {...register("email",{required:true})}/>
            </div>
            {
                errors.email && errors.email.type=="required" ? (
                    <h6 style={{color:"red",fontWeight:"bolder"}}>Email Mandatory</h6>
                ) : null
            }
            <div>
                <label>Passowrd:</label>
                <input type="password"
                       name="password"
                        {...register("password",{required:true,minLength:8})}/>
            </div>
            {
                errors.password && errors.password.type=="required" ? (
                    <h6 style={{color:"red",fontWeight:"bolder"}}>Password Mandatory</h6>
                ) : null
            }
            {
                errors.password && errors.password.type=="minLength" ? (
                    <h6 style={{color:"red",fontWeight:"bolder"}}>Password must be 8 characters</h6>
                ) : null
            }
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}