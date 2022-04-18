import {
  createEntityAdapter,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);

const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo: todoAdapter.removeOne,
    clearTodo: todoAdapter.removeAll,
    updateOne: todoAdapter.updateOne,
  },
});

export const { addTodo, addTodos, deleteTodo, clearTodo, updateOne } =
  todoSlice.actions;

export default todoSlice.reducer;
