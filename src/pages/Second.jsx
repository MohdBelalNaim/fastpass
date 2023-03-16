import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import highFive from '../images/high-five.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import copy from "copy-to-clipboard";  

const Second = () => {

  const [pass,setPass]=useState("")

  const copyPass=()=>{
    copy(pass)
    toast.success("Password copied to clipboard!")
  }
  const generatePass=()=>{
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    var passwordLength = 12;

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
      setPass(password)
    }
  }

  useEffect(()=>{
    generatePass()
  },[])
  return (
    <div className="container-fluid">
      <ToastContainer position='bottom-right'/>
      <div className="row">
        <div className="col-lg-4">&nbsp;</div>
        <div className="col-lg-4">
          <div className="shadow second-container px-3 py-3 rounded animate__animated animate__bounceIn">
            <div className='second-title'>Here's your strong password!</div>
            <div className='text-center'>
              <img src={highFive} className="high img-fluid" />
            </div>
            <div className='pass-container border rounded px-2 py-2'>
              {pass}
            </div>
            <button className='form-control mt-3 copy py-2' onClick={()=>copyPass()}> <i className='bi bi-clipboard px-2'></i> Copy to clipboard</button>
            <div className='text-center mt-3'>
              <Link to="/" style={{'color':'black','textDecoration':'none'}}><i className='bi bi-arrow-left px-2'></i> Go Back</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4">&nbsp;</div>
      </div>
    </div>
  )
}

export default Second
