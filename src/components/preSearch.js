import React from 'react'
import Search from "./search";

const preSearch = () => {

    return (
        <div>
            <header className="main-page text-center mt-5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Search/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default preSearch
