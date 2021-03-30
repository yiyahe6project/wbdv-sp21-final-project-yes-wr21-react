import React from 'react'
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <div className="container">
            <h1>Personal Profile</h1>

            <div className="alert alert-danger" role="alert">
                Something went wrong!
            </div>

            <div className="alert alert-success" role="alert">
                Update Successfully!
            </div>

            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text"
                           readOnly
                           className="form-control"
                           id="username"
                           autoComplete="off"
                           value="alice"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           id="password"
                           type="password"
                           placeholder="Example: abc123!"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="verify_password" className="col-sm-2 col-form-label">
                    Verify
                </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           id="verify_password"
                           type="password"
                           placeholder="Example: abc123!"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">
                    Phone
                </label>
                <div className="col-sm-10">
                    <input type="tel"
                           className="form-control"
                           id="phone"
                           placeholder="(857)-123-8577"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email"
                           className="form-control"
                           title="Please enter a valid email"
                           placeholder="alice@wonderland"
                           id="email"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="role" className="col-sm-2 col-form-label">
                    Role
                </label>
                <div className="col-sm-10">
                    <select id="role" className="form-control">
                        <option>Faculty</option>
                        <option>Student</option>
                        <option>Staff</option>
                    </select>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="dob" className="col-sm-2 col-form-label">
                    DOB
                </label>
                <div className="col-sm-10">
                    <input type="date"
                           className="form-control"
                           title="Please enter your DOB"
                           id="dob"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    {/*todo:
                    what to do if successfully updated?
                    */}
                    <Link to="/Search" className="btn btn-success btn-block">
                        Update
                    </Link>
                    <Link to="/" className="btn btn-danger btn-block">
                        Log out
                    </Link>
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-sm-10">
                    <Link to="/">
                        <i className="fa fa-home"/> Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile