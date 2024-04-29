import React from 'react'
import '../style.css'
import Skills from '../../../common/skillset'

const SkillContainer = () => {
  return (
    <div className='row3'>
      <div data-aos="fade-up" data-aos-duration="1500" style={{paddingBottom:15}}>
        <p style={{color:'aqua', fontSize:30, lineHeight:0.3, fontWeight:'700', textAlign:'center'}}>Skills</p>
        <p style={{color:'white', fontSize:20, lineHeight:0.3, fontWeight:'600', textAlign:'center'}}>Here are some of my skills</p>
      </div>
      <div>
        <div className='skillContainer' style={{display:'flex', justifyContent:'space-between'}}>
          <div data-aos="fade-right" data-aos-duration="1500" style={{display:'flex', justifyContent:'center'}}>
            <Skills name={'frontendContainer'}/>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" style={{display:'flex', justifyContent:'center'}}>
            <Skills name={'backendContainer'}/>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" style={{display:'flex', justifyContent:'center', marginBottom:25}}>
          <Skills name={'otherContainer'}/>
        </div>
      </div>
    </div>

  )
}

export default SkillContainer