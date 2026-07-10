import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addnewproduct, fetchdata } from "./api";
import { useState } from "react";



export default function ReactQuery(){
    const queryclient=useQueryClient();

const [producttitle,setproducttitle]= useState("");

const {data:productlist,isLoading}=useQuery({
    queryKey:["productlist"],
    queryFn:()=>fetchdata()
})

const {mutateAsync:handleaddnewproductmutation}=useMutation({
    mutationFn: addnewproduct,

    onSuccess: ()=>{
        queryclient.invalidateQueries(["productlist"])
    }

})

if(isLoading){
    return  <div>
        <h1>Loading please wait</h1>

    </div> 
    
}

async function handleaddnewproduct(producttitle){
    await  handleaddnewproductmutation(producttitle)

    setproducttitle(" ");

}
    return <div>
        <input type="text"
            value={producttitle}
            onChange={(event)=>{
                setproducttitle(event.target.value)

            }}/>

        <button onClick={()=>handleaddnewproduct(producttitle)}
           disabled={producttitle.trim()===""}
           type="button">
            Click
           </button>


        <h1>React Query</h1>

        <ul>
            {
                productlist ? (
                    productlist.map((item)=>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))

                ) : <h1>No product found</h1>
            }
        </ul>

    </div>
}