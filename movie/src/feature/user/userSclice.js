import { createSlice } from "@reduxjs/toolkit";

const addFavoriteMovie = (favoriteList, movieToAdd) => {

  const isMovieInList = favoriteList.some((movie) => movie.id === movieToAdd.id);

  if (isMovieInList) {
    return favoriteList.filter((movie) => movie.id !== movieToAdd.id);
  }
  return [...favoriteList, { ...movieToAdd }];
};


const initialState = {
  currentUser:'',
  favoriteList:[]
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload;
      
    },
    logout(state, action) {
      state.id = action.payload;
      
    },
    addFavorite(state, action) {
      state.favoriteList = addFavoriteMovie(state.favoriteList, action.payload);
    },

  },
});

export const { login, logout, addFavorite } = user.actions;

export default user.reducer;
