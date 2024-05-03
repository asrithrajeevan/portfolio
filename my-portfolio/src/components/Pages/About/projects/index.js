import React from 'react'
import './style.css'

const Projects = () => {
  return (
    <div className='row5'>
        <div style={{width:'50%'}} data-aos="fade-up" data-aos-duration="1500">
            <p style={{color:'aqua', fontSize:30, fontWeight:'700', textAlign:'center'}}>Projects</p>
            <p style={{color:'grey', fontSize:17, fontWeight:'600', textAlign:'center'}}>I have worked on a wide range of projects. Here are some of my projects.</p>
        </div>
        <div className='projectGridButton' data-aos="fade-up" data-aos-duration="1500">
            <div className='button1'>
            <p style={{color:'grey', fontSize:15, fontWeight:'600', textAlign:'center'}}>All</p>
            </div>
            <div className='button2'>
            <p style={{color:'grey', fontSize:15, fontWeight:'600', textAlign:'center'}}>Web Application</p>
            </div>
            <div className='button3'>
            <p style={{color:'grey', fontSize:15, fontWeight:'600', textAlign:'center'}}>Mobile Application</p>
            </div>
        </div>
        <div className='projectGrid' data-aos="fade-up" data-aos-duration="1500">
            <div className='projectContainer'>
                <img className='projectImage' src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960' style={{width:'90%', height:200, objectFit:'contain'}}/>
            </div>
            <div className='projectContainer'>
                <img className='projectImage' src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960' style={{width:'90%', height:200, objectFit:'contain'}}/>
            </div>
            <div className='projectContainer'>
                <img className='projectImage' src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960' style={{width:'90%', height:200, objectFit:'contain'}}/>
            </div>
            <div className='projectContainer'>
                <img className='projectImage' src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960' style={{width:'90%', height:200, objectFit:'contain'}}/>
            </div>
            <div className='projectContainer'>
                <img className='projectImage' src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960' style={{width:'90%', height:200, objectFit:'contain'}}/>
            </div>
            <div className='projectContainer'>
                <img className='projectImage' src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960' style={{width:'90%', height:200, objectFit:'contain'}}/>
            </div>
        </div>
        
    </div>
    )
}

export default Projects