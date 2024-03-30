
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, settodos] = useState([]);
  const [title, settitle] = useState('');
  const [desc, setdecs] = useState('');

  function addtodo(todo) {
    settodos([...todos, todo]);
    settitle('');
    setdecs('');
  }
  return (
    <>
      <div>
        <input type="text" placeholder='enter the taks' value={title} onChange={(e) => { settitle(e.target.value) }} />
        <input type="text" placeholder='enter the description' value={desc} onChange={(e) => { setdecs(e.target.value) }} />
        <button onClick={() => { addtodo({ title: title, desc: desc }) }}>addtask</button>
      </div>

      <h1>To do list </h1>
      <div className='todolist'>
        {
          todos.map(function(item){
            return<>
            <div className='title'>{item.title}</div>
            <p className='desc'>{item.desc}</p>
            </>
          })
        }
      </div>



    </>
  )
}


export default App
