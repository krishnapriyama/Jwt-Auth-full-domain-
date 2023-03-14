/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

export default function Cards() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };



  const [image, setImage] = useState('')

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    //call the api
    const url = 'http://localhost:4000/api/image'

    const formData = new FormData()
    formData.append('image', image)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      toast("Sucessfully Upload", {
        theme: "dark",
      })
        .catch(error => {
          console.log(error);
        })
    })
  }

  return (
    <>
      <div className="body">
        <div class="header">
          <a href="#default" class="logo">CompanyLogo</a>
          <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a onClick={logOut}>LOGOUT</a>
          </div>
        </div>
        <div className="private">
          IMAGE UPLOAD <br />
          <img src={image ? URL.createObjectURL(image) : null} width={150} height={70} />
          <input type="file" onChange={handleChange} /> <br />
          <button className="submit" onClick={handleApi} >SUBMIT</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

