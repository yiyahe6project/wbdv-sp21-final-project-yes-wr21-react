import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import Search from "./search";
import userService from "../services/user-service";
import "./Home.css"

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory()
    useEffect(() => {
        userService.profile()
            .then((user) => setLoggedIn(true))
    }, [])
    return(
        <div>
            <nav class="navbar navbar-light bg-light static-top">
                <div class="container">
                    <a class="navbar-brand" href=""><h2>YES WR 21</h2></a>
                    <div>
                        <a className="btn btn-primary mr-4" href="/login">Login</a>
                        <a className="btn btn-primary mr-4" href="/register">Register</a>
                        <a className="btn btn-primary mr-4" href="/profile">Profile</a>
                        {loggedIn &&
                        <>
                            <a onClick={() => {
                                userService.logout()
                                setLoggedIn(false)
                                history.push('/')
                                alert("successfully logout!")
                            }}
                               className="btn btn-danger" >Logout</a>
                        </>}
                    </div>
                </div>
            </nav>

            <header className="main-page text-center mt-5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        {/*<div className="col-xl-9 mx-auto"><h1 class="mb-4">Find your favorite drinks!</h1></div>*/}
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Search/>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Home