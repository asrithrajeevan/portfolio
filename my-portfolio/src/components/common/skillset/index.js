import React from 'react'
import './style.css'
// frontend
import react from '../../common/assets/images/react.png'
import html from '../../common/assets/images/html.png'
import bootstrap from '../../common/assets/images/Bootstrap.png'
import js from '../../common/assets/images/js.png'
import css from '../../common/assets/images/css.png'
import redux from '../../common/assets/images/redux.png'
import native from '../../common/assets/images/react.png'
import jquery from '../../common/assets/images/jquery.png'

// backend
import python from '../../common/assets/images/python.png'
import node from '../../common/assets/images/Node.png'
import firebase from '../../common/assets/images/firebase.png'
import mysql from '../../common/assets/images/Mysql_logo.png'
import java from '../../common/assets/images/java.png'
import django from '../../common/assets/images/django.png'
import flask from '../../common/assets/images/flask.png'

// other
import mySqlWorkbench from '../../common/assets/images/mySqlWorkbench.png'
import vscode from '../../common/assets/images/visualVstudio.png'
import Xcode from '../../common/assets/images/Xcode.png'
import AndroidStudio from '../../common/assets/images/AndroidStudio.png'
import jwt from '../../common/assets/images/jwt.png'
import postman from '../../common/assets/images/postman.png'
import gcp from '../../common/assets/images/gcp.png'
import git from '../../common/assets/images/git.png'


const Skills = ({name}) => {
    const frontend = [{name : 'React Js',img:react}, {name:'HTML', img : html}, {name:'Bootstrap', img:bootstrap}, {name:'Java Script', img:js}, {name:'CSS', img:css},{name:'React Native', img : native}, {name:'Redux', img : redux}, {name: 'jQuery', img: jquery}]
    const backend = [{name:'Python', img:python}, {name:'Node Js', img:node}, {name:'Firebase', img:firebase}, {name:'My Sql', img:mysql}, {name:'Java', img:java}, {name:'Django', img:django}, {name:'Flask', img:flask}]
    const other = [{name:'MySql Workbench', img:mySqlWorkbench}, {name:'VS Code Js', img:vscode}, {name:'Xcode', img:Xcode}, {name:'Android Studio', img:AndroidStudio}, {name:'JWT Auth', img:jwt}, {name:'Postman', img:postman}, {name:'Google Cloud Platform', img:gcp},{name:'GitHub', img:git}]
    const mapitem = name === 'frontendContainer'? frontend 
                    :name === 'backendContainer'? backend : other

  return (
    <div className={name}>
        <p style={{color:'grey', fontSize:16, fontWeight:'700', textAlign:'center', margin:5}}>{name==='backendContainer'? 'Backend' : name==='frontendContainer'? 'Frontend':'Others'}</p>
        <div className='skillset'>
        {
            mapitem.map((item)=>{
                return(
                    <div className='skill'>
                        <img src={item.img} style={{objectFit:'contain', width:25, height:25, marginInline:5}} />
                        <p>{item.name}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Skills