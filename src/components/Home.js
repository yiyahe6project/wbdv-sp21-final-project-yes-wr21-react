import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h2>Home</h2>
            <Link to="/search">
                Search
            </Link>
        </div>
    )
}

export default Home