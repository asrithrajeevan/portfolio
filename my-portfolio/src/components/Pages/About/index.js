import React, { useContext, useEffect } from 'react'
import { AppCotext } from '../../common/appContext';
import { Link } from 'react-router-dom';
import './style.css'
import portfolio from '../../common/assets/images/portfolioImg.png';
import AOS from 'aos';
import developer from '../../common/assets/images/developer.png'
import Skills from '../../common/skillset';


const About = () => {
  const {data} = useContext(AppCotext)
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      <div className='Firstcontainer'>
        {/* <Link to='/about'>about</Link>
        <Link to='/home'>home</Link> */}
        <div className='navbarContainer'>
          <div className='navbar' >
            <div data-aos="flip-up" data-aos-duration="1500">
                <ul>
                  <li className='navMenu'>Home</li>
                  <li className='navMenu'>About</li>
                  <li className='navMenu'>Projects</li>
                  <li className='navMenu'>Contact</li>
                </ul>
            </div>
          </div>
        </div>
        <div className='innerContainer'>
          <div className='row1'>
            <div style={{marginTop:120, width:525}}>
              <div data-aos="zoom-in" data-aos-duration="1500" style={{marginBottom:15}}><h1 style={{color:'white',display:'inline'}}>Hi! I am </h1><h1 className='firstLetter' style={{color:'white',display:'inline'}}>Asrith Rjeevan</h1>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1500" className='animated-text'>
                And, I am a <span></span>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1500">
                <p>
                  I graduated in 2022 and have since embarked on a journey in the world of software development. Specializing in Python Django and React Native for mobile applications, I've cultivated a diverse skill set that spans both backend and frontend technologies. My passion for crafting efficient and user-friendly applications drives me to continually expand my expertise and deliver high-quality software solutions."
                </p>
              </div>
              <div className='socialMedia'>
                <div data-aos="zoom-in-down" data-aos-duration="1500">
                  <div className='gmailContainer'>
                    <a id='email' href='https://github.com/asrithrajeevan/' target="_blank">
                      <div className='git'>
                      </div>
                    </a>
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className='gmailContainer'>
                    <a id='email' href='https://www.linkedin.com/in/asrith-rajeevan-35a429253/' target="_blank">
                      <div className='linkedin'>
                      </div>            
                    </a>
                  </div>
                </div>
                <div data-aos="zoom-in-down" data-aos-duration="1500">
                  <div className='gmailContainer'>
                    <a id='email' href='https://wa.me/8590406845' target="_blank">
                      <div className='whatsapp'>
                      </div>            
                    </a>
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className='gmailContainer'>
                    <a id='email' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXzDCXkwqSMbnVLhzDVvnRJJRPBVRFQFrqXGfttMjXDKPCGJpZPCxPstQSvJpqhWKPRgB' target="_blank">
                      <div className='instagram'>
                      </div>              
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='buble'>
              <img src={portfolio} alt='email' style={{width:400, height:300, marginRight:5, objectFit:'contain', display:'flex', position:'relative', top:-65}}/>
            </div>
          </div>
          <div className='row2'>
            <div data-aos="fade-right" data-aos-duration="1500">
              <img src={developer} style={{objectFit:'contain', width:200, height:200}}/>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" style={{width:650, marginLeft:35}}>
              <p style={{lineHeight:0.3, fontSize:12}}>LET ME INTRODUCE MY SELF</p>
              <p style={{color:'aqua', fontSize:30, lineHeight:0.3, fontWeight:'700'}}>About Me</p>
              <p style={{color:'white', fontSize:20, lineHeight:0.3, fontWeight:'600'}}>A Story of Good</p>
              <p>
                I am an experienced developer with a strong foundation in backend technologies such as Python, Django, and Node.js. Additionally, I excel in frontend development using React.js, React Native, HTML, CSS, and Bootstrap. My proficiency extends to database management with SQL, and I have expertise in utilizing cloud-based solutions such as Google Cloud and Firebase. Committed to creating innovative and impactful software, I am constantly honing my skills to stay abreast of industry trends and deliver exceptional results.            
              </p>
            </div>
          </div>
          <div className='row3' data-aos="fade-up" data-aos-duration="1500">
            <div>
              <p style={{color:'aqua', fontSize:30, lineHeight:0.3, fontWeight:'700', textAlign:'center'}}>Skills</p>
              <p style={{color:'white', fontSize:20, lineHeight:0.3, fontWeight:'600', textAlign:'center'}}>Here are some of my skills</p>
            </div>
            <div className='skillContainer'>
              <div className='skillContainer1'>
                <div data-aos="fade-right" data-aos-duration="1500">
                  <Skills name={'frontendContainer'}/>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500">
                  <Skills name={'backendContainer'}/>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                <Skills name={'otherContainer'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About