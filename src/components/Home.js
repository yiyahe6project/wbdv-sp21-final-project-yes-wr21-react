import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h2>Home</h2>
            <ul>
                <li>
                    <Link to="/Login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/Register">
                        Register
                    </Link>
                </li>
                <li>
                    <Link to="/Search">
                        Search
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home