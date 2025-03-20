import React, { useState } from 'react'
import FormInput from './components/FormInput'
import styled from 'styled-components';
import "./components/wrapper.css"




function App() {

  const [toDoInput, setToDoInput] = useState("");
  const [toDos, setTodos] = useState([]);
  console.log(toDos);

  const addTodo = () => {
    event.preventDefault(),
      setTodos([...toDos, toDoInput]);
    setToDoInput("");
  };

  const Wrapper = styled.div`
  cursor: pointer;
   `;

  const deleteTodo = (value) => {
    setTodos(() => {
      return toDos.filter((todo) => todo !== value)
    })
  }


  return (
    <div>
      <FormInput
        toDoInput={toDoInput}
        setToDoInput={setToDoInput}
        addTodo={addTodo} />
      <div className="wrap-style fw-bold todo-list">
        <Wrapper>
          {toDos.map((todo, index) => (
            <div key={index} className='todo-item' onClick={() => deleteTodo(todo)}>
              {todo}
            </div>))}
        </Wrapper>
      </div>

    </div>

  );
}

export default App;