import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import HomePage from './page/HomePage';
import MovieList from './component/MovieList';
import Movie from './page/Movie';
import Favorite from './page/Favorite';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<MovieList />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={"NOT FOUND"} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

