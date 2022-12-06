import React from "react";

const Header = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand mb-0 h1" href="#">MyWeather App</span>
            </nav>
            
            <div className="container text-center">
                {props.children}
            </div>
        </>
    )
}

export default Header;