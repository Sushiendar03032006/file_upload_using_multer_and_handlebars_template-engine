import { useReducer } from "react";




const initialState={
    showText:false,
    changeStyle:false
}

 
function reducer(state,action){
    switch (action.type) {
        case "HIDE_TEXT":
            console.log(state,action);
            
           
            
            return {
                ...state,
                showText:false
            }

            
            break;
        
        case "SHOW_TEXT":
            console.log(state,action);
            
            return {
                ...state,
                showText:true
            }
            break;

        case "CHANGE_STYLE":
            console.log(state,action);
            return{
                ...state,
                changeStyle:!state.changeStyle
            }

            break;
    
        default:
            console.log(state,action);
            return state;
            break;
    }
}











export default function UseReducerExample(){

    const [state,dispatch]=  useReducer(reducer, initialState);



    return <div>
        {
            state.showText ? <h1 style={{color:state.changeStyle ? "white":"black",backgroundColor:state.changeStyle?"black":"white"}}>Sushiendar M</h1> : null
        }

        <button onClick={()=>dispatch({type:"HIDE_TEXT"})}>Hide Text</button>

        <button onClick={()=>dispatch({type:"SHOW_TEXT"})}>Show Text</button>

        <button onClick={()=>dispatch({type:"CHANGE_STYLE"})}>Change Style</button>


    </div>
    
}
