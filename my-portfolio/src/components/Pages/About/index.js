import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppCotext } from '../../common/appContext';
// import { Link } from 'react-router-dom';
import './style.css'
import portfolio from '../../common/assets/images/portfolioImg.png';
import AOS from 'aos';
import developer from '../../common/assets/images/developer.png'
import SkillContainer from './skillContainer';
import Experience from './experience';
import Projects from './projects';
import Education from './education';
import Contact from './contact';
import {firestore} from '../../common/firebase'
import { collection } from '@firebase/firestore'
import { addDoc, getDocs } from 'firebase/firestore';
// import {firebaseApp} from '../../common/firebase'

const About = ({goToContact}) => {
  const ref = collection(firestore, 'Projects')
  // const collectionRef = collection(firebaseApp.firestore(), 'Projects');

  const [scrollYPosition, setScrollYPosition] = React.useState(0);
  const refRow1 = useRef(null);
  const refRow2 = useRef(null);
  const refRow3 = useRef(null);
  const refRow4 = useRef(null);
  const refRow5 = useRef(null);
  const refRow6 = useRef(null);
  const {data} = useContext(AppCotext)
  useEffect(()=>{
    AOS.init();
  })
  useEffect(() => {
    if (goToContact && mounted.current) {
        refRow6.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }
  },[goToContact]);

  const mounted = useRef(false);

  useEffect(()  => {
    mounted.current = true;
    let data = { 
      name : 'Asrith'
    }
    try {
      addDoc(ref, data)
    } catch (error) {
        console.log('catchErr---->',error);
    }

    // // Read data from Firestore
    // const querySnapshot = getDocs(collectionRef);
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, ' => ', doc.data());
    // });
  }, []);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='topContainer'>
      <div className='navbarContainer' style={{borderTopLeftRadius:scrollYPosition !==0 ? 0:null, borderTopRightRadius:scrollYPosition !==0 ? 0:null}}>
          <div data-aos="flip-up" data-aos-duration="1500">
              <ul>
                <li onClick={()=>refRow1.current?.scrollIntoView({
                  behavior:'smooth'
                })} className='navMenu'>Home</li>
                <li onClick={()=>refRow2.current?.scrollIntoView({
                  behavior:'smooth'
                })} className='navMenu'>About</li>
                <li onClick={()=>refRow3.current?.scrollIntoView({
                  behavior:'smooth'
                })} className='navMenu'>Experience</li>
                <li onClick={()=>refRow4.current?.scrollIntoView({
                  behavior:'smooth'
                })} className='navMenu'>Projects</li>
                <li onClick={()=>refRow5.current?.scrollIntoView({
                  behavior:'smooth'
                })} className='navMenu'>Education</li>
                <li onClick={()=>refRow6.current?.scrollIntoView({
                  behavior:'smooth'
                })} className='navMenu'>Contact</li>
              </ul>
          </div>
        </div>
      <div className='Firstcontainer'>
        <div className='innerContainer'>
          <div ref={refRow1} className='row1'>
            <div className='introduction'>
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
            </div>
            <div className='bubleContainer'>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='buble'>
                <img src={portfolio} alt='email' className='bubleImg' style={{marginRight:5, objectFit:'contain', display:'flex', position:'relative', top:-65}}/>
              </div>
            </div>
          </div>
          {/* socialMediaGrid */}
          <div className='socialMediaGrid'>
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

          {/* About Me */}
          <div ref={refRow2} className='row2'>
            <div data-aos="fade-right" data-aos-duration="1500" style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
              <img src={developer} style={{objectFit:'contain', width:200, height:200}}/>
            </div>
            <div className='intro' data-aos="fade-left" data-aos-duration="1500" >
              <p style={{lineHeight:0.3, fontSize:12}}>LET ME INTRODUCE MY SELF</p>
              <p style={{color:'aqua', fontSize:30, lineHeight:0.3, fontWeight:'700'}}>About Me</p>
              <p style={{color:'white', fontSize:20, lineHeight:0.3, fontWeight:'600'}}>A Story of Good</p>
              <p>
                I am an experienced developer with a strong foundation in backend technologies such as Python, Django, and Node.js. Additionally, I excel in frontend development using React.js, React Native, HTML, CSS, and Bootstrap. My proficiency extends to database management with SQL, and I have expertise in utilizing cloud-based solutions such as Google Cloud and Firebase. Committed to creating innovative and impactful software, I am constantly honing my skills to stay abreast of industry trends and deliver exceptional results.            
              </p>
            </div>
          </div>
          {/* Skill container */}
          <SkillContainer />
          {/* experiance */}
          <div ref={refRow3}>
          <Experience />
          </div>
          {/* Projects */}
          <div ref={refRow4}>            
          <Projects />
          </div>
          {/* Education */}
          <div ref={refRow5}>
          <Education />
          </div>
          {/* contact form */}
          <div ref={refRow6}>
          <Contact />
          </div>        
        </div>
      </div>
    </div>
  )
}

export default About