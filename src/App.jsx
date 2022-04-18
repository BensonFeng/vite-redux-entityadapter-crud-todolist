import "./App.css";
import AddTodo from "./componenets/AddTodo/AddTodo";
import TodoList from "./componenets/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="header">RTK Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
