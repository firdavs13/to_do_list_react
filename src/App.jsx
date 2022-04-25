import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <section className="todo">
        <div className="container">
          <div className="todo__wrapper w-100">
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
            />
            <List todos={todos} setTodos={setTodos}/>
            <Buttons todos={todos} setTodos={setTodos}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
