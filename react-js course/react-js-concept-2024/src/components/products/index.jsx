
import { useState } from "react";
import Productitems from "./product-item/product-items";
import "./style.css";






function Productlist({listofproducts}){

    const initialstate=false;

    const [flag,setflag]=useState(initialstate);

    const handletoggle= ()=>{
        setflag(!flag);
    }


    return (
        <div>
            {
                flag ?    <h1 className="title">E-Commerce</h1>  : <h1>Hello world</h1>
            }
            
          


            <button onClick={handletoggle}>Toggle</button>



   

           
            {
                 listofproducts.map((item,index)=>(
                    <Productitems key={index} productitem={item}/>
                 ))

            }
           

        </div>
    );
}

export default Productlist;