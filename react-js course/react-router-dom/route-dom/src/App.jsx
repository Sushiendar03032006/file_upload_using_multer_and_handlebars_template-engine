
import './App.css'
import { Routes,Route, useNavigate,Link, useRoutes } from 'react-router-dom'
import RecipeList from './pages/recipes'
import CommentsList from './pages/comments'
import Page_not_found from './pages/page-not-found'
import Layout from './outlet-layout/layout'
import React_hook_Form from './hooks/react-hook-form'
import UseRef from './hooks/useRef'
import UseFetch from './hooks/usefetch'
import UseMemo from './hooks/usememo'
import UseCallback from './hooks/usecallback/usecallback'
import ReactQuery from './hooks/react query'

function App() {


  const navigate=useNavigate();

  

  function CustomRoutes(){
    const element=useRoutes([
      {
        path:"home",
        element:<Layout/>,
        children:[
          {
            path:"comments",
            element:<CommentsList/>

          },
          {
            path:"recipes",
            element:<RecipeList/>
          }

        ]
      },
      {

         path:"*",
        element:<Page_not_found/>
       
      },

      {
        path:"hook-form",
        element:<React_hook_Form/>
      },

      {
        path:"useref",
        element:<UseRef/>
      },
      {
        path:"usememo",
        element:<UseMemo/>
      },
      {
        path:"usecallback",
        element:<UseCallback/>
      },
      {
        path:"reactquery",
        element:<ReactQuery/>
      }

    ]);
    return element;
  }




  return (
    
    
    
      <div>
        
          {/* <Link to="/home/comments" style={{textDecoration:"none",color:"black"}}>
               Comment Page button
          </Link>
        </div>
        <button onClick={()=>navigate("home/recipes")}>Recipe-page-button</button>
         */}
        {/* <Routes>
          <Route path="/recipes/:userid/post/:postid" element={<RecipeList/>}/>
          <Route path="/comments" element={<CommentsList/>}/>
          <Route path="*" element={<Page_not_found/>}/>
        </Routes> */}
{/* 
        {/* <Routes>
        
            <Route path="/home" element={<Layout/>}>
              <Route path="recipes/:userid/post/:postid" element={<RecipeList/>}/>
              <Route path="comments" element={<CommentsList/>}/>
            </Route>
           <Route path="*" element={<Page_not_found/>}/>
        </Routes> */} 

         <CustomRoutes/>
        

     
      </div>

  )
}

export default App
