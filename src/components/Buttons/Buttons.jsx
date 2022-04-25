import React from "react";
import "./Buttons.css";

const Buttons = ({ todos, setTodos }) => {
  return (
    <div className="buttons__wrapper w-50">
      <button className="btn btn-primary btn__all">
        All <span className="btn-number span__all"> 0</span>
      </button>
      <button className="btn btn-primary btn__comp" >
        Completed <span className="btn-number span__comp"> 0</span>
      </button>
      <button className="btn btn-primary btn__uncomp">
        Uncompleted<span className="btn-number span__uncomp"> 0</span>
      </button>
    </div>
  );
};

export default Buttons;
