import React from 'react'
import './style.css'
import integerhouse from '../../../common/assets/images/integerHouse.png'
import inmakes from '../../../common/assets/images/inmakes.png'
import Container from '../../../common/containerBlock'

const Experience = () => {
    const header = {title : 'Experience', description: 'My work experience as a software engineer and working on different companies and projects.'}
    const experiance = [
        {
            img : 'https://media.licdn.com/dms/image/C560BAQFsBsrnwC109Q/company-logo_200_200/0/1630640111935?e=1722470400&v=beta&t=TqJZBq7NLp0IzJOkUnZFnBryI_KmZQEIS2AZLl8Tt6M',
            position : 'Python Fullstack Developer', 
            name: 'INTEGERHOUSE', 
            date:'April 2024 - Currently working here', 
            description: 'Completed over three projects encompassing website development, web applications, and mobile applications utilizing React Native. Proficiently overseeing both backend and frontend technologies concurrently.',
            skill:'Python, Django, Javascript, HTML, CSS, Bootstrap, Reactjs, Json, React Native, Rest APIs, MySql, Firebase, Cloud App Engine, cloud Data Store...'
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZmpaMt2JJHY363Q0eyVvaHV3NzlZ2XeTUvCWEevmKXWcvxkRfM-C_ESkJ1tqJKtTjJU&usqp=CAU',
            position : 'React Native Developer', 
            name: 'Inmakes Learning Hub', 
            date:'Jan 2024 - March 2024(Internship)', 
            description: 'Completed over three projects encompassing website development, web applications, and mobile applications utilizing React Native. Proficiently overseeing both backend and frontend technologies concurrently.',
            skill:'Javascript, HTML, CSS, Bootstrap, Reactjs, Json, React Native, Rest APIs, MySql, Firebase, Xcode, Cloud App Engine, cloud Data Store...'
        },
        {
            img : 'https://media.licdn.com/dms/image/C560BAQFsBsrnwC109Q/company-logo_200_200/0/1630640111935?e=1722470400&v=beta&t=TqJZBq7NLp0IzJOkUnZFnBryI_KmZQEIS2AZLl8Tt6M',
            position : 'Python Developer', 
            name: 'INTEGERHOUSE', 
            date:'March 2022 - Dec 2023', 
            description: 'Completed over three projects encompassing website development, web applications, and mobile applications utilizing React Native. Proficiently overseeing both backend and frontend technologies concurrently.',
            skill:'Python, Django, Javascript, HTML, CSS, Bootstrap, Reactjs, Json, React Native, Rest APIs, MySql, Firebase, Cloud App Engine, cloud Data Store...'
        },
    ]

  return (
    <div className='row4'>
        <Container header={header} experiance={experiance}/>
    </div>
    )
}

export default Experience