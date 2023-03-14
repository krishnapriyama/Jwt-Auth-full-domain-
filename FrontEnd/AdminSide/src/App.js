import React from 'react'
import {useState } from 'react';
import { BrowserRouter, Route, Routes ,useNavigate } from "react-router-dom";
import ViewUser from './components/ViewUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ViewUser />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
