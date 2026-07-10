import { useState ,useEffect} from "react";


export default function UseFetch(url,options={}){

    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState(null);


    async function fetchdata(){
        setloading(true);

        try{
            const apidata=await fetch(url,{...options});

            if(!apidata.ok){
                throw new Error(apidata.statusText);
            }

            const result=await apidata.json();

            if(result){
                setdata(result);
                seterror(null);
                setloading(false);
            }
            else{
                setdata(null);
                seterror(null);
                setloading(false);

            }

        }
        catch(error){
            seterror(error);
            setdata(null);
            setloading(false);
        }
       

    }

    useEffect(()=>{

        fetchdata();
        
    },[url])




    return {
        data,
        error,
        loading
    };
}