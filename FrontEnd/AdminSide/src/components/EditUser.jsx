import React from 'react'

const EditUser = ()=>{
   return(


      <><div class="container">
         <div><h2>ADD USER</h2></div>
         <form >

            <div class="row">
               <div class="col-25">
                  <label for="email">Email</label>
               </div>
               <div class="col-75">
                  <input type="text" id="email" name="email" placeholder="xyz@gmail.com" />
               </div>
            </div>

            <div class="row">
               <div class="col-25">
                  <label for="password">Password</label>
               </div>
               <div class="col-75">
                  <input type="text" id="password" name="password" placeholder="******" />
               </div>
            </div>

            <div class="row">
               <input type="submit" className='submit' value="Submit" />
            </div>
         </form>
      </div>
      </>
   )
}

export default EditUser