import React, { useEffect, useState } from 'react'
import './style.css'
import { allProjectsDone } from './projectDetails'
// import imgpath from ''


const Projects = () => {
    const [project, setProject]=useState()
    const [currentProject, setCurrentProject]=useState('')

    useEffect(() => {
        setProject(allProjectsDone)
    },[]);

    const projectSetUp = (name) =>{
        setCurrentProject(name)
    }
    const redirectToURL = (projectLink) => {
        window.open(projectLink,'_blank');
      };
    const ProjectWeb = () => {
        return(
            <>
                {project?.webApps?.map(item=>{
                    return(
                        <div className='projectContainer' >
                            <div className='imageContainer'>
                                <img className='projectImage' src={require('../../../common/assets/images/'+item.img)} style={{width:'90%', height:'90%', objectFit:'contain'}}/>
                            </div>
                            <div className='technologiesContaier'>
                                <p style={{color:'white', textAlign:'center', lineHeight:0.5, fontSize:12, fontWeight:'800'}}>Technologies used</p>
                                <div className='technologies'>

                                    {item.skills.map(item=>{
                                        return(
                                            <>
                                                <div style={{margin:3, borderRadius:5, backgroundColor:'rgb(36, 36, 36)',padding:2, display:'flex',justifyContent:'center'}}>
                                                    <label style={{fontSize:10, color:'white'}}>{item}</label>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div style={{margin:10}}>
                                    <div className='projectLink' style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                                        <p style={{lineHeight:0.6, color:'aqua', fontWeight:'700'}}>{item.name}</p>
                                        <div style={{display:'flex'}}>
                                            <div onClick={()=>redirectToURL(item.link)} className='buttonhover' style={{background:'rgb(36, 36, 36)', paddingBlock:4, paddingInline:10, borderRadius:10, margin:5, alignItems:'center',justifyContent:'center', display:'flex', cursor:'pointer'}}>
                                                <label style={{color:'white', fontSize:10, fontWeight:'600', cursor:'pointer'}}>git</label>
                                            </div>
                                            <div className='buttonhover' style={{background:'rgb(36, 36, 36)', paddingBlock:4, paddingInline:10, borderRadius:10, margin:5, alignItems:'center',justifyContent:'center', display:'flex',cursor:'pointer'}}>
                                                <label style={{color:'white', fontSize:10, fontWeight:'600', cursor:'pointer'}}>live</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{lineHeight:1.4, color:'grey', fontSize:11}}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
    const ProjectMobile =()=> {
        return(
            <>
                {project?.mobileApps?.map(item=>{
                    return(
                        <div className='projectContainer'  >
                            <div className='imageContainer'>
                                <img className='projectImage' src={require('../../../common/assets/images/'+item.img)} style={{width:'90%', height:'90%', objectFit:'contain'}}/>
                            </div>
                            <div className='technologiesContaier'>
                                <p style={{color:'white', textAlign:'center', lineHeight:0.5, fontSize:12, fontWeight:'800'}}>Technologies used</p>
                                <div className='technologies'>

                                    {item.skills.map(item=>{
                                        return(
                                            <>
                                                <div style={{margin:3, borderRadius:5, backgroundColor:'rgb(36, 36, 36)',padding:2, display:'flex',justifyContent:'center'}}>
                                                    <label style={{fontSize:10, color:'white'}}>{item}</label>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div style={{margin:10}}>
                                    <div className='projectLink' style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                                        <p style={{lineHeight:0.6, color:'aqua', fontWeight:'700'}}>{item.name}</p>
                                        <div style={{display:'flex'}}>
                                            <div onClick={()=>redirectToURL(item.link)} className='buttonhover' style={{background:'rgb(36, 36, 36)', paddingBlock:4,cursor:'pointer', paddingInline:10, borderRadius:10, margin:5, alignItems:'center',justifyContent:'center', display:'flex'}}>
                                                <label style={{color:'white', fontSize:10, fontWeight:'600', cursor:'pointer'}}>git</label>
                                            </div>
                                            <div className='buttonhover' style={{background:'rgb(36, 36, 36)', paddingBlock:4,cursor:'pointer', paddingInline:10, borderRadius:10, margin:5, alignItems:'center',justifyContent:'center', display:'flex'}}>
                                                <label style={{color:'white', fontSize:10, fontWeight:'600', cursor:'pointer'}}>live</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{lineHeight:1.4, color:'grey', fontSize:11}}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
  return (
    <div className='row5'>
        <div style={{width:'50%'}} data-aos="fade-up" data-aos-duration="1500">
            <p style={{color:'aqua', fontSize:30, fontWeight:'700', textAlign:'center'}}>Projects</p>
            <p style={{color:'grey', fontSize:17, fontWeight:'600', textAlign:'center'}}>I have worked on a wide range of projects. Here are some of my projects.</p>
        </div>
        <div className='projectGridButton' data-aos="fade-up" data-aos-duration="1500">
            <div className='button1' onClick={()=>projectSetUp('button1')}>
                <p style={{color:'grey', fontSize:15, fontWeight:'600', textAlign:'center'}}>All</p>
            </div>
            <div className='button2' onClick={()=>projectSetUp('button2')}>
                <p style={{color:'grey', fontSize:15, fontWeight:'600', textAlign:'center'}}>Web Application</p>
            </div>
            <div className='button3' onClick={()=>projectSetUp('button3')}>
                <p style={{color:'grey', fontSize:15, fontWeight:'600', textAlign:'center'}}>Mobile Application</p>
            </div>
        </div>
        <div className='projectGrid' data-aos="fade-up" data-aos-duration="1500">
            {currentProject === 'button2'?
                <ProjectWeb/>
            :
            currentProject === 'button3'? 
                <ProjectMobile/>
            :
            <>
                <ProjectWeb/>
                <ProjectMobile/>
            </>
            }

        </div>
        
    </div>
    )
}

export default React.memo(Projects)