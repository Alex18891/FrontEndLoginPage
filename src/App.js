import  React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cont from './pages/cont';
import Login from './pages/Login';
import Signup from './pages/signup';
import Forgotpass from './pages/forgotpass';
import Userdetail from './pages/userDetails';
import Movie from './pages/movie';
import ReviewMovie from './pages/Reviewmovie';

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Cont/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />
          <Route path="/userDetails" element={<Userdetail/>} />
          <Route path="/movie" element={<Movie/>} />
          <Route path="/reviewmovie" element={<ReviewMovie/>} />
        </Routes>
  );
}