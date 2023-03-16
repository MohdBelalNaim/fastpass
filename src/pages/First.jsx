import React from 'react'
import '../assets/css/style.css'
import banner from '../images/vector-banner.jpg'
import { Link } from 'react-router-dom'
const First = () => {
  return (
    <>
    <section>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 py-5">
                    <div className='fw-bold py-3 accent'>PASSWORD GENERATOR TOOL</div>
                    <div className='fw-bold h1'>Need a Unique, Secure Password ?</div>
                    <div className="py-3 about">
                        Generate, save, and autofill credentials across all your devices with LastPass.
                    </div>
    
                    <div>
                     <Link to="/second" style={{"textDecoration":"none"}}><button className='generatePassword mt-3'>Generate a strong password</button></Link>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                   <img src={banner} className="img-fluid" style={{"width":70+"%"}}/>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container-fluid py-5" style={{"backgroundColor":"#caedf7"}}>
            <div className='row'>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 h2 fw-bold text-center">
                    <div>Instantly generate a secure, random password with the FastPass online tool</div>
                    <div className='second-about mt-3'>
                        Go beyond online generators with FastPass Premium. No matter what device or app you’re using, all your passwords are automatically generated, saved and synced – wherever you go.
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default First
