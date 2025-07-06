// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    todo: [],
    inProgress: [],
    done: [],
  },
  reducers: {
    addTask: (state, action) => {
      // Add to 'todo' column by default
      state.todo.push(action.payload);
    },
    deleteTask: (state, action) => {
      const { column, id } = action.payload;
      state[column] = state[column].filter(task => task.id !== id);
    },
    moveTask: (state, action) => {
      const { from, to, id } = action.payload;
      const taskToMove = state[from].find(task => task.id === id);
      if (!taskToMove) return;
      state[from] = state[from].filter(task => task.id !== id);
      state[to].push(taskToMove);
    },
    editTask: (state, action) => {
      const { column, id, newTitle } = action.payload;
      const task = state[column].find(task => task.id === id);
      if (task) task.title = newTitle;
    },
  },
});

export const { addTask, deleteTask, moveTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;