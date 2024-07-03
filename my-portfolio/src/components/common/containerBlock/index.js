import React from 'react'
import './style.css'
import integerhouse from '../../common/assets/images/integerHouse.png'
import inmakes from '../../common/assets/images/inmakes.png'

const Container = ({header, experiance}) => {
  return (
    <>
        <div className='headerContainer' data-aos="fade-up" data-aos-duration="1500">
            <p style={{color:'aqua', fontSize:30, fontWeight:'700', textAlign:'center'}}>{header?.title?? ''}</p>
            <p style={{color:'grey', fontSize:17, fontWeight:'600', textAlign:'center'}}>{header?.description?? ''}</p>
        </div>
        <div>
            {
                experiance?.map(item=>{
                    return(
                        <div data-aos="fade-up"  data-aos-duration="1500" style={{display:'flex', justifyContent:'center'}}>
                            <div className='experienceContainer'>
                                <div className='details'>
                                    <div  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                        <img src={item?.img} style={{width: 65, height:65, objectFit:'contain'}} alt={'integer'} />
                                    </div>
                                    <div>
                                        <label className='labelfont' style={{color:'black', fontWeight:'800', marginInline:10}}>{item?.position}</label><br/>
                                        <label style={{color: header?.title ==='Experience'? item?.name === 'INTEGERHOUSE'? 'red':'green' : 'grey', fontSize:13, fontWeight:'700', marginInline:10}}>{item?.name}</label><br/>
                                        <label style={{color:'black', fontSize:10, fontWeight:'700', marginInline:10}}>{item?.date}</label>
                                    </div>
                                </div>
                                <div style={{margin:15}}>
                                    <p style={{lineHeight:1.2, fontSize:12,  fontWeight:'600',color:'black'}}>{item.description}</p>
                                </div>
                                <div style={{margin:15}}>
                                    {item.skill? <label style={{fontSize:14, color:'aqua', fontWeight:'700'}}>Skill:</label> : null}
                                    {item.skill? <label style={{fontSize:12, color:'black'}}> {item.skill}</label> : null}
                                    {item.grade?<><label style={{fontSize:14, color:'aqua', fontWeight:'700'}}>Grade :</label> <span><label style={{fontSize:12, color:'black', fontWeight:'700'}}>{item.grade}</label></span> </>: null}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}

export default Container