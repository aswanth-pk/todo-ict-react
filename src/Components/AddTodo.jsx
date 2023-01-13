import React from 'react'
import Navbar from './Navbar'

const AddTodo = () => {
  return (
    <div className="container">
        <Navbar />
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3 p-5">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">UserID</label>
                        <input type="text" className="form-control" name="user-id" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ID</label>
                        <input type="text" className="form-control" name="id" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                        <button className="btn btn-primary">Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo