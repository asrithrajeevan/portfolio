import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className='contactContainer' data-aos="fade-up" data-aos-duration="1500" >
        <div style={{paddingBottom:15}}>
            <p style={{color:'aqua', fontSize:30, lineHeight:0.3, fontWeight:'700', textAlign:'center'}}>Contact</p>
            <p style={{color:'gry', fontSize:18, fontWeight:'600', textAlign:'center'}}>Feel free to reach out to me for any questions or opportunities!</p>
        </div>
        <div style={{margin:35, display:'flex'}}>
            <div className='contactForm'>
                <input type='email' placeholder='Email'/>
                <input type='text' placeholder='Your Name'/>
                <input type='text' placeholder='Subject'/>
                <textarea id="address" placeholder='Message' name="address" rows="4" cols="58"></textarea>
                <div className='ContactSendButton'>Send</div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Contact)