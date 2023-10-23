import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: JSON.parse(localStorage.getItem('users')) || [],
    reducers: {
      addUser: (state, action) => {
        state.push(action.payload);
        localStorage.setItem('users', JSON.stringify(state));
      },
      deleteUser: (state, action) => {
        const idToDelete = action.payload;
        const updatedState = state.filter((user) => user.id !== idToDelete);
        localStorage.setItem('users', JSON.stringify(updatedState));
        return updatedState;
      },
      updateUser: (state, action) => {
        const { id, name, email } = action.payload;
        const user = state.find((user) => user.id === id);
        if (user) {
          user.name = name;
          user.email = email;
          localStorage.setItem('users', JSON.stringify(state));
        }
      },
    },
  });

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
