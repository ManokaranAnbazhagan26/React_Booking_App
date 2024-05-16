import React from 'react'

const Book = () => {
  return (
    <>
    <div
      className="container-fluid booking pb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="bg-white shadow" style={{ padding: "35px" }}>
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-3">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Team Name"
                      data-target="#date1"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="date" id="date2" data-target-input="nearest">
                  <select className="form-select">
                    <option selected>Batting</option>
                    <option value="1">Batting 1</option>
                    <option value="2">Batting 2</option>
                    <option value="3">Batting 3</option>
                    <option value="4">Batting 4</option>
                    <option value="5">Batting 5</option>
                  </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <select className="form-select">
                    <option selected>bowling</option>
                    <option value="1">bowling 1</option>
                    <option value="2">bowling 2</option>
                    <option value="3">bowling 3</option>
                    <option value="4">bowling 4</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-select">
                    <option selected>All-Rounter</option>
                    <option value="1">All-Rounter 1</option>
                    <option value="2">All-Rounter 2</option>
                    <option value="3">All-Rounter 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Book