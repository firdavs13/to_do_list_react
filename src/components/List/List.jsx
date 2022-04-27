import React from "react";
import "./List.css";

const List = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    let todoText = prompt("Textni ozgartiring", todo.text);

    todos.forEach((itemTodos) => {
      if (itemTodos.id === todo.id) {
        itemTodos.text = todoText;
      }
    });

    setTodos([...todos]);
  };

  const handleComlate = (id) => {
    todos.forEach((itemTodos) => {
      if (itemTodos.id === id) {
        itemTodos.isComlate = !itemTodos.isComlate;
      }
    });

    setTodos([...todos]);
  };

  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.isComlate ? "active" : ''}>
          <div className="alert alert-primary form__alert" role="alert">
            <input
              type="checkbox"
              className="form-check-input form__lisrt-input checkbox-btn"
              onChange={() => handleComlate(todo.id)}
              checked={todo.isComlate}
            />

            <div className="alert-elemet__wrap">
              <div className="buttins_wrap">
                <button
                  className="btn btn-outline-primary edit-btn"
                  onClick={() => handleEdit(todo)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-outline-primary delete-btn"
                  onClick={() => handleDelete(todo)}
                >
                  🗑️
                </button>
              </div>
              <p className="alert__text">{todo.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
