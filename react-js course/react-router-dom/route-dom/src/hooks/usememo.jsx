import { useMemo, useState } from "react";
import UseFetch from "./usefetch";


export default function UseMemo(){
    const [flag,setflag]=useState(false);

    const {data,loading,error}=UseFetch('https://dummyjson.com/products');

     function filterproductsbyprice(getproducts){
        console.log("running");

        return getproducts?.length > 0 ?  getproducts.filter((singleitem)=>(singleitem.price>70)) : []

    }

    const memoisedproduct=useMemo(()=>(
        filterproductsbyprice(data?.products)
    ),[data?.products]);

    

    return <div>
        <h3 style={{color:flag? "blue" : "black"}}>Usememo</h3>

        <button onClick={()=>setflag(!flag)}>Toggle Flag</button>

        <ul>

        {
            memoisedproduct.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))
        }

        </ul>

    </div>

}