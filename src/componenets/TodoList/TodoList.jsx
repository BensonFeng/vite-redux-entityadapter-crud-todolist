import { useSelector, useDispatch } from "react-redux";
import { todoSelectors } from "../../store/todoSlice";

const TodoList = () => {
  return (
    <div className="todo-list">
      <h3>Your Todos:</h3>
      <h4>Count:</h4>
      <button className="delete-btn"> Clear All Todos</button>
    </div>
  );
};

export default TodoList;
