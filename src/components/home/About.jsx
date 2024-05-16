import React from 'react'
import { about } from '../data/Data'
import { Build, CalendarViewMonthSharp, Group, People, PlayArrow, SpatialAudioOffSharp, SportsCricket } from '@mui/icons-material'

const About = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <h6 className="section-title text-start text-primary text-uppercase">
            About Us
          </h6>
          <h1 className="mb-4">
            Welcome to{" "}
            <span className="text-primary text-uppercase">Crickter</span>
          </h1>
          <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {<SportsCricket/>
                        }<Group/>

                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="https://images.pexels.com/photos/9393464/pexels-photo-9393464.jpeg?auto=compress&cs=tinysrgb&w=600"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="https://images.pexels.com/photos/15347613/pexels-photo-15347613/free-photo-of-cricket-player-walking-with-bat.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="https://images.pexels.com/photos/9420724/pexels-photo-9420724.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="https://images.pexels.com/photos/5367483/pexels-photo-5367483.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default About