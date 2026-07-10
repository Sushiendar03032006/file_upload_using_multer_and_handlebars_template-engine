import React, { useState } from 'react';

function App1() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleInputChange}
        style={{ padding: '10px', width: '70%' }}
      />

      <button onClick={handleAddTask} style={{ padding: '10px' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todoList.map((item, index) => (
          <li
            key={index}
            style={{
              background: '#f2f2f2',
              margin: '10px 0',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: '5px'
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ background: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
            >
              Completed ✅
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App1;
