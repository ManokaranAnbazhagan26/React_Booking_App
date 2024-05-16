import React from 'react'
import CommonHeading from '../components/common/CommonHeading'
import { SportsFootballOutlined } from '@mui/icons-material'

const ServicesPage = () => {
  return (
    
      

       
       <div className="container">
      
      <div className="row mt-5" >
      <CommonHeading heading="Services" title="The Key to Unlock a Stress-Free Life" subtitle="PLAYING"/>
       
        <div className="col-md-8 mt-5 mb-5">
        <div>
        <img src="https://d20rwxqzk8p5vr.cloudfront.net/wp-content/uploads/2022/05/pexels-energepiccom-313690-scaled.jpg" width={700} alt="" />
       </div>
          
        </div>
        <div className="col-md-4">

          <h1 className="mt-5">Join Our Courses</h1>

          <a href="">
            <ul className="list-unstyled mt-3" style={{fontSize:"2.2rem",justifyContent:"center"}} >
              <li > Gym</li>
              <li>Yoga</li>
              <li>Cricket</li>
              <li>Running</li>
              <li>FunGames</li>
              <li>PlayingOtherGames</li>

            </ul>
          </a>
         
        </div>
      </div>
    </div>
     
  
  )
}

export default ServicesPage