import React from "react";
import Login from './../../pages/login';
import Signup from './../../pages/signup';
import Dashboard from './../../pages/dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
        <Routes>
        <Route path='/dashboard:id' element={<Dashboard/>} ></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
        </Routes>
    </Router>
  );
}

