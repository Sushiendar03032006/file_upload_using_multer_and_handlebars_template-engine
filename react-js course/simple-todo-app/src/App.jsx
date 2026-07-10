 import { useState, useEffect } from 'react';
import './App.css';
import styles from "./styles.module.css";
import Todoitem from './compoents/todoitem';
import Tododetails from './compoents/tododetails';
import App1 from './todolist-through-getting-randomly';
import { Skeleton } from '@mui/material';

function App() {
  const [todolist, settodolist] = useState([]);
  const [loading, setloading] = useState(true);
  const [errormsg, seterrormsg] = useState(" ");
  const [opendialog, setopendialog] = useState(false);
  const [showdetails, setshowdetails] = useState(null);

  async function fetchlistoftodos() {
    try {
      setloading(true);
      const apiresponse = await fetch('https://dummyjson.com/todos');
      const result = await apiresponse.json();

      if (result && result.todos && result.todos.length > 0) {
        settodolist(result.todos);
        setloading(false);
        seterrormsg(" ");
      } else {
        settodolist([]);
        setloading(false);
        seterrormsg("No todos found.");
      }
    } catch (e) {
      console.log(e);
      seterrormsg("Some Error Happened ....");
    }
  }

  async function fetchlistofSingletodos(gettodoid) {
    try {
      const apiresponse = await fetch(`https://dummyjson.com/todos/${gettodoid}`);
      const details = await apiresponse.json();
      console.log(details);

      // ❌ WRONG: if(details && details.length > 0)
      // ✅ FIXED: details is an object, not an array
      if (details && details.id) {
        setshowdetails(details);
        setopendialog(true);
      } else {
        setshowdetails(null);
        setopendialog(false);
      }
    } catch (e) {
      console.log(e);
      seterrormsg("Some Error Happened ....");
    }
  }

  useEffect(() => {
    fetchlistoftodos();
  }, []);

  if(loading){

    return <div><Skeleton />
<Skeleton animation="wave" />
<Skeleton animation={false} /></div>

  }

  return (
   
    <div className={styles.bodywrapper}>
      <h1 className={styles.titlename}>Simple Todo List</h1>

      <div className={styles.todowrapper}>
        {todolist.length > 0 &&
          todolist.map((todoitem) => (
            <Todoitem
              fetchlistofSingletodos={fetchlistofSingletodos}
              todo={todoitem}
              key={todoitem.id}
            />
          ))}
      </div>

      <Tododetails
        setopendialog={setopendialog}
        opendialog={opendialog}
        showdetails={showdetails}
        setshowdetails={setshowdetails}
      />
    </div>
  );
}

export default App;

































