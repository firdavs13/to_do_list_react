import React from "react";
import "./List.css";

const List = ({ todos, setTodos }) => {
  const handleComplate = (todo) => {
    todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, isComlated: !item.isComlated };
      }
      return item;
    });
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="alert alert-primary form__alert" role="alert">
            <input
              type="checkbox"
              className="form-check-input form__lisrt-input checkbox-btn"
              onClick={() => handleComplate(todo)}
            />
            <div className="alert-elemet__wrap">
              <button
                className="btn btn-outline-primary delete-btn"
                onClick={() => handleDelete(todo)}
              >
                🗑️
              </button>
              <p className="alert__text">
                {todo.text}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
