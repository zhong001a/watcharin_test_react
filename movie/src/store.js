import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./feature/movie/moviesSlice";
import userSclice from "./feature/user/userSclice";

const store = configureStore({
    reducer: {
        movies: moviesSlice,
        user: userSclice
    },

});


export default store;
