import { useLocation, useParams } from "react-router-dom";
import UseFetch from "../../hooks/usefetch";
import UseWindowResize from "../../hooks/windowresize";

function RecipeList() {
    const {userid,postid}=useParams();

    const location=useLocation();

     console.log(location);

     const {data,loading,error} = UseFetch('https://dummyjson.com/recipes');

     const windowvalue=UseWindowResize();


     if(loading){
        return <div>
            <h1>Fetching data wait...</h1>
        </div>
     }

    

    

   
    return <div>

        <h1>Current Height:{windowvalue.height} and  Current Width:{windowvalue.width} </h1>

        {
            data?.recipes?.length > 0? data?.recipes.map((recipeitem)=>(
                <div>

                    <h6>{recipeitem.image}</h6>
                    
                
                </div>
            )):null


        }
       
       
       
       


        



     
    </div>
    
}

export default RecipeList;