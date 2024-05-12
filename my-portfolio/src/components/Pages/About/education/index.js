import React from 'react'
import integerhouse from '../../../common/assets/images/integerHouse.png'
import inmakes from '../../../common/assets/images/inmakes.png'
import Container from '../../../common/containerBlock'

const Education = () => {
    const header = {title : 'Education', description: 'My education has been a journey of self-discovery and growth. My educational details are as follows.'}
    const experiance = [
        {
            img : 'https://images.shiksha.com/mediadata/images/1590642185phpRSOpNM.jpeg',
            position : 'Bachelor of Commerce With Computer Application', 
            name: 'Deva Matha Art\'s and Sceince Collage, Paisakkary, Kannur', 
            date:'Jan 2019 - March 2022', 
            grade: '74%',
            description: 'I have completed my Graduation at Deva Matha Art\'s and Sceince Collage, which is located at Paisakkary, Kannur, Kerala. where i studied commerce with computer application',
        },
        {
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUfOIXtFRu4A2w2_LIuC-uGLGhXa4ugazVLX3ywd-3g&s',
            position : 'Commerce with Computer Application', 
            name: 'Government Higher Secondary School Nedungome, Kannur', 
            date:'Jan 2018 - March 2019', 
            grade: '75%',
            description: 'I have completed my higher secondary(12th) education at Government Higher Secondary School, which is located at Nedungome, Kannur. where i studied commerce with computer application',
        },
        {
            img : 'https://lh3.googleusercontent.com/p/AF1QipOZtVsrjFQkrdBGlrwCCC8yygTrRNQm3mf0IFlX=s1360-w1360-h1020',
            position : 'SSLC', 
            name: 'Deva Matha High School , Paisakkary', 
            date:'March 2017',
            grade: '82%',
            description: 'I Have completed my SSC (10th) at Deva Matha High School. Which is located at Paisakkary,Kannur, Kerala.',
        },
    ]

  return (
    <div className='row4'>
        <Container header={header} experiance={experiance}/>
    </div>
    )
}

export default React.memo(Education)