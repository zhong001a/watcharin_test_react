import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allMovies: [],
  filteredMovies: [],
  searchTerm: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
      state.filteredMovies = action.payload;
    },
    setFilteredMovies: (state, action) => {
      state.filteredMovies = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setAllMovies, setFilteredMovies, setSearchTerm } = moviesSlice.actions;

export const selectAllMovies = (state) => state.movies.allMovies;
export const selectFilteredMovies = (state) => state.movies.filteredMovies;
export const selectSearchTerm = (state) => state.movies.searchTerm;

export default moviesSlice.reducer;
