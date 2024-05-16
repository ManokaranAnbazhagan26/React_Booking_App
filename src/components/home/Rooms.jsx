import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { facility, roomItems } from '../data/Data'

const Rooms = () => {
  return (
    <>
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading heading="Grounds" title="Cricket is EveryThing" subtitle="PLAY"/>
        <div className="row g-4">
            {
                roomItems.map((val , index)=>(
                    <div className="col-lg-4 col-md-6">
                        <div className="room-item shadow rounded overflow-hidden">

                            <div className="position-relative">
                                <img className="img-fluid" src={val.img} alt="img" />
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4" >{val.price}</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0">{val.name}</h4>
                                    <div className="ps-2">{val.star}</div>
                                    {/* <div>
                                        {
                                            facility.map((item, index)=>(
                                                // <small>{item.quantity}{item.facility}</small>
                                            ))
                                        }
                                    </div> */}
                                    <div className="d-flex justify-content-between">
                                          <a className="btn btn-sm btn-dark rounded py-2 px-4"href="">{val.darkbtn  }</a>
                                          <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">{val.yellowbtn}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
        </div>
        </div>
     </>

        )
}


export default Rooms