import React from 'react'
import './style.css'
import email from '../../common/assets/images/new.png';
import phone from '../../common/assets/images/phone.png';
import whatsapp from '../../common/assets/images/whatsapp.png';


const Home = () => {
  return (
    <div className='profileContainer'>
      <div className='profilePhotoContainer'>
        <img src="https://media.licdn.com/dms/image/D5603AQHkgdFPGLjaFg/profile-displayphoto-shrink_800_800/0/1697518080463?e=2147483647&v=beta&t=j4ElpyS8ZPHbcJ4VDjJasiK0I4J77OJvaTSq9DoGgRE" className='profileImage' alt="React Image" />
      </div>
      <div className='profileDetailsContainer'>
        <div className='personalDtails'>
          <h2 style={{color:'white'}}>ASRITH RAJEEVAN</h2>
          <div style={{display:'flex', justifyContent:'center', margin:5,}}>
            <img src={email} alt='email' style={{width:15, height:15,marginRight:5}}/>
            <a id='email' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXzDCXkwqSMbnVLhzDVvnRJJRPBVRFQFrqXGfttMjXDKPCGJpZPCxPstQSvJpqhWKPRgB' target="_blank">
              asrithkrr@gmail.com
            </a>
          </div>
          <div style={{display:'flex', justifyContent:'center', margin:5}}>
            <img src={phone} alt='phone' style={{width:15, height:15, marginRight:5}}/>
            <a id='email' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXzDCXkwqSMbnVLhzDVvnRJJRPBVRFQFrqXGfttMjXDKPCGJpZPCxPstQSvJpqhWKPRgB' target="_blank">
              8590406845
            </a>
          </div>
          <div style={{display:'flex', justifyContent:'center', margin:5}}>
            <img src={whatsapp} alt='phone' style={{width:15, height:15, marginRight:5}}/>
            <a id='email' href=' https://wa.me/8078214501' target="_blank">
              8078214501
            </a>
          </div>
          <div className='button-container'>
            <button class="slide_from_left">Download CV</button>
            <button class="slide_from_left">Hire Me Now</button>
          </div>

        </div>
          {/* <div className='buttonContainer' style={{width:250, height:35, backgroundColor:'white', marginTop:20}}>

          </div> */}

      </div>
    </div>
  )
}

export default Home