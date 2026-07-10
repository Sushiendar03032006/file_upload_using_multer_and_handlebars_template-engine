
import './App.css'
import ClassBasedComponents from './components/classbasedcomponents';
import FunctionBasedComponents from './components/functionalbasedcomponents';
import Productitems from './components/products/product-item/product-items';
import Productlist from './components/products'
import Users from './components/users';
import ButtonContext from './components/context-component/buttoncomponent';
import TextContext from './components/context-component/textcomponent';
import UserFormWithCounter from './userreducer';
import UseReducerExample from './userreducer';
import FormhandlingUseReducer from './formhandlingwithusereducer';
import Form_handling from './form';
import Form_Generator from './dynamic form handling/dynamic_form';
import { loginformdata, registerformdata } from './dynamic form handling/formdata';


//  const dummyproductdata=['Product1','Product2','Product3'];

//  const flag=true;

//  var renderdata=null;

// if(flag){
//      renderdata=<h1>Hello React</h1>;
//  }
//  else{
//   renderdata=<h1>Hello world</h1>;
//  }


function App() {

  return (
    <>
      <div>
      
        {/* {
          renderdata
          
        } 
        
        <Productlist listofproducts={dummyproductdata}/>  */}

        <div style={{display:"flex",gap:"420px"}}>

          <Form_Generator title={"Register"} fields={registerformdata}/>


        <Form_Generator title={"Login"} fields={loginformdata}/>

        </div>

      
      
     
      
       
        
      </div>
    
    </>
  )
}

export default App;
