// AddCityForm component to app's component's state so that the user can add cities to the page
import React from "react";

const AddCityForm = () => {

    return (
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )

}

export default AddCityForm;