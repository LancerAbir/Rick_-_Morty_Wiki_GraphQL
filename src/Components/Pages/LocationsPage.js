import React from "react";
import GetLocations from "../GetLocations";
import Navbar from "../Layout/Navbar";

const LocationsPage = (props) => {
    const locationsPath = props.location.pathname;
    return (
        <div>
            <Navbar locationsPath={locationsPath} />
            <GetLocations />
        </div>
    );
};

export default LocationsPage;
