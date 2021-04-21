import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h2>Home</h2>
            <ul>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        Search
                    </Link>
                </li>
                <li>
                    <Link to="/admin">
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home