import { useEffect ,useState} from "react";





export default function Users(){
  const [userlist,setuserlist]= useState([]);
  const [pending,setpending]= useState(false);


  async function fetchusers(){
    try{
      setpending(true);

      const apiresponse=await fetch('https://dummyjson.com/users');
      const result=await apiresponse.json();

      if(result?.users){
        setpending(false);
        setuserlist(result?.users);
      }
      else{
        setpending(false);
        setuserlist([]);

      }


    }
    catch(e)
    {
      console.log(e);
    }
  }


  useEffect(()=>{
    const timer=setTimeout(() => {
      fetchusers();
      
    }, 1000);

    return ()=>{
      clearTimeout(timer);
      console.log('unmounted');

    }

    


    
  },[])

  

  if(pending){
    return <h1>Fetching Users</h1>
  }




  return <div>
    <h1>Users list</h1>

  
    

   
    
    <ul>
      {
        userlist && userlist.length>0 ? (
          
            userlist.map(useritem=>(
              <li key={useritem?.id}>
                <p>{useritem?.firstName} {useritem?.lastName}</p>

              </li>

            ))
            

         

        ) :  <h1>No user found</h1>
      }
    </ul>
  </div>

}