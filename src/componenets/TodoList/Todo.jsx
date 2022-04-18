import React from "react";
import { useDispatch } from "react-redux";
const Todo = ({ text, completed, id }) => {
  const toggle = () => {};
  const deleteItem = () => {};
  return (
    <div className="todo">
      <input type="checkbox" value={completed} onChange={toggle} />
      <span>{text}</span>
      <button onClick={deleteItem}>x</button>
    </div>
  );
};

export default Todo;
