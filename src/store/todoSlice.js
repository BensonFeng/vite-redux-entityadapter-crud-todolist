import {
  createEntityAdapter,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);

const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState({
    deletedTodos: [],
  }),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo(state, action) {
      state.deletedTodos.push(state.entities[action.payload]);
      todoAdapter.removeOne(state, action);
    },
    clearTodos: todoAdapter.removeAll,
    updateTodo: todoAdapter.updateOne,
  },
});

export const { addTodo, addTodos, deleteTodo, clearTodos, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
