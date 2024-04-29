import React from 'react'
import './style.css'
import integerhouse from '../../../common/assets/images/integerHouse.png'
import inmakes from '../../../common/assets/images/inmakes.png'

const Experience = () => {
  return (
    <div className='row4'>
        <div style={{width:'50%'}} data-aos="fade-up" data-aos-duration="1500">
            <p style={{color:'aqua', fontSize:30, fontWeight:'700', textAlign:'center'}}>Experience</p>
            <p style={{color:'grey', fontSize:17, fontWeight:'600', textAlign:'center'}}>My work experience as a software engineer and working on different companies and projects.</p>
        </div>
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" style={{display:'flex', justifyContent:'center'}}>
                <div className='experienceContainer'>
                    <div style={{display:'flex', margin:15, alignItems:'center'}}>
                        <div>
                            <img src={integerhouse} style={{width: 65, height:65, objectFit:'contain'}} alt={'integer'}/>
                        </div>
                        <div>
                            <label style={{color:'grey', fontSize:16, fontWeight:'700', marginInline:10}}>Python Fullstack Developer</label><br/>
                            <label style={{color:'darkorange', fontSize:13, fontWeight:'700', marginInline:10}}>INTEGERHOUSE</label><br/>
                            <label style={{color:'grey', fontSize:10, fontWeight:'700', marginInline:10}}>April 2024 - Currently working here</label>
                        </div>
                    </div>
                    <div style={{margin:15}}>
                        <p style={{lineHeight:1.2, fontSize:12,  fontWeight:'600',color:'gray'}}>Completed over three projects encompassing website development, web applications, and mobile applications utilizing React Native. Proficiently overseeing both backend and frontend technologies concurrently.</p>
                    </div>
                    <div style={{margin:15}}>
                        <label style={{fontSize:14, color:'aqua', fontWeight:'700'}}>Skill:</label>
                        <label style={{fontSize:12, color:'grey'}}> Python, Django, Javascript, HTML, CSS, Bootstrap, Reactjs, Json, React Native, Rest APIs, MySql, Firebase, Cloud App Engine, cloud Data Store...</label>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" style={{display:'flex', justifyContent:'center'}}>
                <div className='experienceContainer'>
                    <div style={{display:'flex', margin:15, alignItems:'center'}}>
                        <div>
                            <img src={inmakes} style={{width: 65, height:65, objectFit:'contain'}} alt={'inmakes'} />
                        </div>
                        <div>
                            <label style={{color:'grey', fontSize:16, fontWeight:'700', marginInline:10}}>React Native Developer</label><br/>
                            <label style={{color:'darkgreen', fontSize:13, fontWeight:'700', marginInline:10}}>Inmakes Learning Hub</label><br/>
                            <label style={{color:'grey', fontSize:10, fontWeight:'700', marginInline:10}}>Jan 2024 - March 2024(Internship)</label>
                        </div>
                    </div>
                    <div style={{margin:15}}>
                        <p style={{lineHeight:1.2, fontSize:12,  fontWeight:'600',color:'gray'}}>Completed over three projects encompassing website development, web applications, and mobile applications utilizing React Native. Proficiently overseeing both backend and frontend technologies concurrently.</p>
                    </div>
                    <div style={{margin:15}}>
                        <label style={{fontSize:14, color:'aqua', fontWeight:'700'}}>Skill:</label>
                        <label style={{fontSize:12, color:'grey'}}> Python, Django, Javascript, HTML, CSS, Bootstrap, Reactjs, Json, React Native, Rest APIs, MySql, Firebase, Cloud App Engine, cloud Data Store...</label>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" style={{display:'flex', justifyContent:'center'}}>
                <div className='experienceContainer'>
                    <div style={{display:'flex', margin:15, alignItems:'center'}}>
                        <div>
                            <img src={integerhouse} style={{width: 65, height:65, objectFit:'contain'}} alt={'integerHouse'}/>
                        </div>
                        <div>
                            <label style={{color:'grey', fontSize:16, fontWeight:'700', marginInline:10}}>Python Developer</label><br/>
                            <label style={{color:'darkorange', fontSize:13, fontWeight:'700', marginInline:10}}>INTEGERHOUSE</label><br/>
                            <label style={{color:'grey', fontSize:10, fontWeight:'700', marginInline:10}}>March 2022 - Dec 2023</label>
                        </div>
                    </div>
                    <div style={{margin:15}}>
                        <p style={{lineHeight:1.2, fontSize:12,  fontWeight:'600',color:'gray'}}>Completed over three projects encompassing website development, web applications, and mobile applications utilizing React Native. Proficiently overseeing both backend and frontend technologies concurrently.</p>
                    </div>
                    <div style={{margin:15}}>
                        <label style={{fontSize:14, color:'aqua', fontWeight:'700'}}>Skill:</label>
                        <label style={{fontSize:12, color:'grey'}}> Python, Django, Javascript, HTML, CSS, Bootstrap, Reactjs, MySql</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experience