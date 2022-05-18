import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";

function App() {
  const localData = JSON.parse(localStorage.getItem("todos")) || []
  const [todos, setTodos] = useState(localData);

  const savaStore = (data, dataName = "todos") => {
    localStorage.setItem(dataName, JSON.stringify(data))
  } 

  const handleAddTodo = (evt) => {
    if (evt.keyCode === 13) {
      let newTodo = {
        id: uuidv4(),
        title: evt.target.value,
        isComlate: false,
      };

      setTodos([newTodo, ...todos]);
      evt.target.value = "";

      savaStore([newTodo, ...todos])
    }
  };

  return (
    <div className="App">
      <section className="todo">
        <div className="container">
          <h3 className="todo__heading">ToDo-List</h3>

          <div className="todo__wrapper">
            <div className="input-group mb-3 mt-3 todo__input">
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

            <List todos={todos} setTodos={setTodos} savaStore={savaStore} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
