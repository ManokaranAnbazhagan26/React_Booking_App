import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { socialIcons, team } from '../data/Data'

const Team = () => {
  return (
    <>
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading
          heading="Our Team"
          subtitle="Explore Our"
          title="Teams"
        />
        <div className="row g-4">
        {team.map((val, index) => (
            <div className="col-lg-3 col-md-6 wow fadeInUp">
                <div className="rounded shadow overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={val.image} alt="img" />
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            {
                                socialIcons.slice(0,3).map((val,index)=>{
                                    <a className="btn btn-square btn-primary mx-1" href="">{val.icon}</a>
                                })
                            }
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{val.name}</h5>
                    <small>{val.designation}</small>
                    </div>
                </div>
            </div>
        ))}
          </div>
          </div>
          </div>
          </>
  )
}

export default Team