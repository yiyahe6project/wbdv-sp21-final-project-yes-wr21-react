import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="container">
            <h1>Sign In</h1>

            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Alice"/>
                </div>

            </div>
            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="password"
                           type="password"
                           placeholder="abc123!"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    <a href="../profile/profile.template.client.html"
                       className="btn btn-primary btn-block">
                        Sign in
                    </a>
                    <Link to="/" className="btn btn-danger btn-block"> Cancel </Link>
                    <div className="row">
                        <div className="col-6">
                            <a href="">Forgot Password</a>
                        </div>
                        <div className="col-6">
                            <Link to="/register"
                               className="float-right">
                                Sign up
                            </Link>
                        </div>
                    </div>
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

export default Login