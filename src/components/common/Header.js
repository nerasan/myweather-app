import React from "react";

const Header = (props) => {

    return (
        <>
        <h2>MyWeather App Header</h2>
        <div className="container text-center">
            {props.children}
        </div>
        </>
    )
}

export default Header;