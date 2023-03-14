/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";


const EditUser = () => {
   const { id } = useParams()
   const [user, SetUser] = useState((
      {
         email: '',
         password: ''
      }
   ))

   const [message, SetMessage] = useState();
   const { email, password } = user

   useEffect(() => {
      loaduser();
   },
      []
   )

   const loaduser = async () => {
      const result = await axios.get('http://localhost:4000/user/' + id)
      SetUser(result.data);
   }
   const handleChange = ((e) => {
      SetUser({ ...user, [e.target.name]: e.target.value })
   })

   const submitForm = async (e) => {
      e.preventDefault()

      await axios.post('http://localhost:4000/edit-user/' + id, user).then((result) => {
         console.log(result);
         SetMessage("Sucessfully Added")
      }).catch((err) => {
         alert(err, "Something Went Wrong")
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
         

         <div class="container">
            <div><h2 style={{ textAlign: "center" }}>ADD USER</h2></div>
            <div><h1 style={{ textAlign: "center" }}>{message}</h1></div>
            <form onSubmit={e => submitForm(e)}>

               <div class="row">
                  <div class="col-25">
                     <label for="email" style={{ textAlign: "center" }} >Email</label>
                  </div>
                  <div class="col-75">
                     <input type="text" id="email" name="email" value={email} onChange={e => handleChange(e)} />
                  </div>
                  <div class="col-75">
                     <input type="text" id="password" name="password" value={password} onChange={e => handleChange(e)} hidden />
                  </div>
               </div>

               <div class="row">
                  <input type="submit" className='submit' value="Submit" />
               </div>
            </form>
         </div>
      </div>

   )
}

export default EditUser