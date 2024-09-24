import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [user, setUser] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    const users = {
      id: Date.now(),
      text,
    };
    setUser([...user, users]);
    setText('');
  }
  const handleDelete = (id) => {
    setUser(user.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="container justify-center w-96 md (768px) mx-auto">
        <div className="flex gap-7 items-center">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a new task' className='bg-slate-950 text-white w-80 border-2 rounded-md border-indigo-600 h-10' type="text" />
          <button onClick={handleClick} className='h-10 w-10 back bg-purple-500 rounded-md text-xl pb-1 text-slate-100' >+</button>
        </div>

        <h1 className='text-white mt-12'>Tasks</h1>

        <div className="wrapper container mx-auto bg-slate-950">
          {
            user.length > 0 && user.map((value) => {
              return (
                <div key={value.id} className="text-white bg-slate-900 p-4 m-2 rounded shadow-md flex justify-between items-center">
                  <h2>{value.text}</h2>
                  <button onClick={() => handleDelete(value.id)} className="bg-red-500 text-white rounded px-2" >Delete</button>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
