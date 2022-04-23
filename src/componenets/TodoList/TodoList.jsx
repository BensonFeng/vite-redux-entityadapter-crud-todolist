import { useSelector, useDispatch } from "react-redux";
import { todoSelectors, clearTodos } from "../../store/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const allTodos = useSelector(todoSelectors.selectEntities);
  const todoCount = useSelector(todoSelectors.selectTotal);
  const dispatch = useDispatch();

  const todoList = [];

  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.todo}
        />
      );
    }
  }

  return (
    <div className="todo-list">
      <h3>Your Todos:</h3>
      <h4>Count:{todoCount}</h4>
      <button
        className="delete-btn"
        onClick={() => {
          dispatch(clearTodos());
        }}
      >
        Clear All Todos
      </button>
      <div>{todoList}</div>
    </div>
  );
};

export default TodoList;
