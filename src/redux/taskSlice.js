import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    editTask: (state, action) => {
      const { index, newText } = action.payload;
      state[index] = newText;
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;