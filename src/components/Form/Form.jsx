import React from "react";
import "./Form.css"
import { v4 as uuidv4 } from "uuid";


const Form = ({input, setInput, todos, setTodos}) => {

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        setTodos([...todos, {id: uuidv4(), text: input, isComlated:false}])
        setInput("")
    }

  return (
    <form className="todo__form w-50" onSubmit={onFormSubmit}>
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control todo__input"
          name="text"
          placeholder="Type  ..."
          required
          aria-describedby="basic-addon1"
          value={input}
          onChange={onInputChange}
        />
      </div>
      <button className="todo__btn btn btn-primary mb-3" type="submit">
        Add Position
      </button>
    </form>
  );
};

export default Form;
