import React from 'react'

const ViewUser = ()=>{
   return(
      <div className='table'>
            <div class="container">
               <h1>Details</h1>
               <table class="rwd-table">
                  <tbody>
                     <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                     </tr>
                     <tr>
                        <td data-th="Supplier Code">
                           PAN9999
                        </td>
                        <td data-th="Supplier Name">
                           Pan Providers and Co.
                        </td>
                        <td data-th="Invoice Number">
                           ASDF33433
                        </td>
                     </tr>
                  </tbody>
               </table>
               <h1></h1>
            </div>
         </div>
   )
}

export default ViewUser