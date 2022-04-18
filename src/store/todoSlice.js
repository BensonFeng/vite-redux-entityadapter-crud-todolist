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
  },
});

export const { addTodo, addTodos } = todoSlice.actions;

export default todoSlice.reducer;
