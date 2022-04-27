import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setTodos(todoStore)
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos]);
  

  const handleAddTodo = (evt) => {
    if (evt.keyCode === 13) {
      let newTodo = {
        id: uuidv4(),
        text: evt.target.value,
        isComlate: false,
      };

      setTodos([newTodo, ...todos]);
      evt.target.value = "";
    }
  };

  return (
    <div className="App">
      <section className="todo">
        <div className="container">
          <h3 className="todo__heading">ToDo-List</h3>

          <div className="todo__wrapper">
            <div className="input-group mb-3 mt-3 w-50">
              <input
                type="text"
                className="form-control todo__input"
                name="text"
                placeholder="Type Todo ..."
                required
                aria-describedby="basic-addon1"
                onKeyUp={handleAddTodo}
              />
            </div>

            <List todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
