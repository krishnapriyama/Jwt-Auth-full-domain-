/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from 'react';

const ViewUser = () => {

   const [user, SetUser] = useState([])

   const { email, password } = user

   useEffect(() => {
      loaduser();
   },
      []
   )

   const loaduser = async () => {
      const result = await axios.get('http://localhost:4000/view-user')
      SetUser(result.data);
   }

   const deleteuser = async (id) => {
      const result = await axios.get('http://localhost:4000/delete-user/' + id)
         .then((result) => {
            loaduser()
         }).catch((error) => {
            alert(error, "Something went wrong")
         })
   }

   return (

      <div>
         <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand" href="#">AdminSide</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                     <li class="nav-item active">
                        <Link to={`/add-user`} className="nav-link" style={{ textDecoration: "none" }}>ADD USER</Link>
                     </li>
                     <li class="nav-item">
                        <Link to={`/view-user`} className="nav-link" style={{ textDecoration: "none" }}>VIEW USER</Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         <div className='table'>
            <div class="container">
               <h1>Details</h1>
               <table class="table">
                  <tbody>
                     <tr>
                        <th>SL.No</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Edit</th>

                     </tr>
                     {user.map((user, index) => (
                        <tr>
                           <td data-th="Supplier Code">
                              {index + 1}
                           </td>
                           <td data-th="Supplier Code">
                              {user.email}
                           </td>
                           <td data-th="Invoice Number">
                              <Link to='' onClick={() => deleteuser(user._id)}>Delete</Link>
                           </td>
                           <td data-th="Invoice Number">
                              <Link to={`/edit-user/${user._id}`}>Edit</Link>
                           </td>
                        </tr>
                     ))
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default ViewUser