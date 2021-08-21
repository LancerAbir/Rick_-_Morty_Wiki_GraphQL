import React, { useState } from "react";
import GetLocations from "../GetLocations";
import Navbar from "../Layout/Navbar";

const LocationsPage = (props) => {
    const locationsPath = props.location.pathname;

    const [searchData, setSearchData] = useState("");

    const ChangeHandler = (e) => {
        setSearchData(e.target.value);
    };

    const handleSubmit = (e) => {
        setSearchData(e.target.value);
        e.preventDefault();
    };
    return (
        <div>
            <Navbar
                ChangeHandler={ChangeHandler}
                searchData={searchData}
                handleSubmit={handleSubmit}
                locationsPath={locationsPath}
            />
            <GetLocations searchData={searchData} />
        </div>
    );
};

export default LocationsPage;
