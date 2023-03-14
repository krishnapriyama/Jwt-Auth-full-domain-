import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
   const [user, SetUser] = useState((
      {
         email: '',
         password: ''
      }
   ))

   const { email, password } = user

   const handleChange = ((e) => {
      SetUser({ ...user, [e.target.name]: e.target.value })
   })

   const submitForm = async (e) => {
      e.preventDefault()

      await axios.post('http://localhost:4000/add-user', user).then((result) => {
         console.log(result);
      }).catch((err) => {
         alert(err)
      })
   }



   return (
      <div class="container">
         <div><h2>ADD USER</h2></div>
         <form onSubmit={e => submitForm(e)}>

            <div class="row">
               <div class="col-25">
                  <label for="email">Email</label>
               </div>
               <div class="col-75">
                  <input type="text" id="email" name="email" placeholder="xyz@gmail.com" value={email} onChange={e => handleChange(e)} />
               </div>
            </div>

            <div class="row">
               <div class="col-25">
                  <label for="password">Password</label>
               </div>
               <div class="col-75">
                  <input type="text" id="password" name="password" placeholder="******" value={password} onChange={e => handleChange(e)} />
               </div>
            </div>

            <div class="row">
               <input type="submit" className='submit' value="Submit" />
            </div>
         </form>
      </div>
   )
}

export default AddUser