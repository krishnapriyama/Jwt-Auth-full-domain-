import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import "react-toastify/dist/ReactToastify.css";
import ViewUser from './pages/ViewUser';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/view-user" element={<ViewUser />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route exact path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
