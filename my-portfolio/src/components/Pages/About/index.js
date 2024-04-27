import React, { useContext } from 'react'
import { AppCotext } from '../../common/appContext';
import { Link } from 'react-router-dom';
import './style.css'
import portfolio from '../../common/assets/images/portfolioImg.png';
import git from '../../common/assets/images/gitblack.png';
import linkedin from '../../common/assets/images/linkedinblack.png';
import whatsapp from '../../common/assets/images/whatsappblack.png';
import instagram from '../../common/assets/images/instagramblack.png';

const About = () => {
  const {data} = useContext(AppCotext)
  return (
    <div className='Firstcontainer'>
      {/* <Link to='/about'>about</Link>
      <Link to='/home'>home</Link> */}
      <div className='navbar' style={{borderBottomLeftRadius:25,borderBottomRightRadius:25, position:'absolute', top:15, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <ul>
          <li className='navMenu'>Home</li>
          <li className='navMenu'>About</li>
          <li className='navMenu'>Projects</li>
          <li className='navMenu'>Contact</li>
        </ul>
      </div>
    <div className='innerContainer'>
      <div style={{marginTop:90, padding:15, width:525}}>
        <div style={{marginBottom:15}}><h1 style={{color:'white',display:'inline'}}>Hi! I am </h1><h1 className='firstLetter' style={{color:'white',display:'inline'}}>Asrith Rjeevan</h1></div>
        <div className='animated-text'>
          And, I am a <span></span>
        </div>
        <p>
          I Graduated in 2022 and have since become an experienced developer specializing in Python Django and React Native for mobile applications. With a strong foundation in backend technologies like Python, Django, and Node.js, I also excel in frontend development using React.js, React Native, HTML, CSS, and Bootstrap. My database expertise includes SQL, and I'm proficient in utilizing Google Cloud and Firebase for cloud-based solutions. Passionate about creating efficient and user-friendly applications, I continuously strive to expand my skills and deliver high-quality software solutions.        
        </p>
        <div className='socialMedia'>
          <div className='gmailContainer'>
            <a id='email' href='https://github.com/asrithrajeevan/' target="_blank">
              <div className='git'>
              </div>
            </a>
          </div>
          <div className='gmailContainer'>
            <a id='email' href='https://www.linkedin.com/in/asrith-rajeevan-35a429253/' target="_blank">
            <div className='linkedin'>
            </div>            
            </a>
          </div>
          <div className='gmailContainer'>
            <a id='email' href='https://wa.me/8590406845' target="_blank">
              <div className='whatsapp'>
              </div>            
            </a>
          </div>
          <div className='gmailContainer'>
            <a id='email' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXzDCXkwqSMbnVLhzDVvnRJJRPBVRFQFrqXGfttMjXDKPCGJpZPCxPstQSvJpqhWKPRgB' target="_blank">
            <div className='instagram'>
            </div>              
            </a>
          </div>    
        </div>
      </div>
      <div className='buble'>
        <img src={portfolio} alt='email' style={{width:400, height:300, marginRight:5, objectFit:'contain', display:'flex', position:'relative', top:-65}}/>
      </div>
    </div>
    </div>
  )
}

export default About