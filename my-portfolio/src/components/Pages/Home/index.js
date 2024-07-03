import React, { useState } from 'react'
import './style.css'
import email from '../../common/assets/images/new.png';
import phone from '../../common/assets/images/phone.png';
import whatsapp from '../../common/assets/images/whatsapp.png';


const Home = ({goToContact, setGoToContact}) => {
  const redirectToURL = () => {
    window.open('https://docs.google.com/document/d/1RU4yVmVGCPB16TauP6iRFpC65CQlIR3eCsKdD_ES0lk/edit','_blank');
  };
  const gotoContact =()=>{
    goToContact? setGoToContact(false) : setGoToContact(true)
  }
  return (
    <div className='profileContainer'>
      <div className='profilePhotoContainer'>
        <div>
          <img src="https://media.licdn.com/dms/image/D5603AQHkgdFPGLjaFg/profile-displayphoto-shrink_800_800/0/1697518080463?e=2147483647&v=beta&t=j4ElpyS8ZPHbcJ4VDjJasiK0I4J77OJvaTSq9DoGgRE" className='profileImage' alt="React Image" />
        </div>
      </div>
      <div className='profileDetailsContainer'>
        <div className='personalDtails'>
          <p className='responsiveHomeName1'>ASRITH RAJEEVAN</p>
          <p className='responsiveHomeName2'>Software Engineer</p>

          <div style={{display:'flex', justifyContent:'center', margin:5,}}>
            <img src={email} alt='email' className='contactImg'/>
            <a id='email' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXzDCXkwqSMbnVLhzDVvnRJJRPBVRFQFrqXGfttMjXDKPCGJpZPCxPstQSvJpqhWKPRgB' target="_blank">
            asrithkrr@gmail.com
            </a>
          </div>
          <div style={{display:'flex', justifyContent:'center', margin:5}}>
            <img src={phone} alt='phone' className='contactImg'/>
            <a id='email' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXzDCXkwqSMbnVLhzDVvnRJJRPBVRFQFrqXGfttMjXDKPCGJpZPCxPstQSvJpqhWKPRgB' target="_blank">
              8590406845
            </a>
          </div>
          <div style={{display:'flex', justifyContent:'center', margin:5}}>
            <img src={whatsapp} alt='phone' className='contactImg'/>
            <a id='email' href=' https://wa.me/8078214501' target="_blank">
              8078214501
            </a>
          </div>
          <div className='button-container'>
            <button className="slide_from_left" id='button' onClick={redirectToURL}>Check My CV</button>
            <button className="slide_from_left" id='button' onClick={gotoContact}>Hire Me Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home