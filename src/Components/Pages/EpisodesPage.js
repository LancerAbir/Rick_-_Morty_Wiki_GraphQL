import React, { useState } from "react";
import GetEpisodes from "../GetEpisodes";
import Navbar from "../Layout/Navbar";

const EpisodesPage = (props) => {
    const episodesPath = props.location.pathname;

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
                episodesPath={episodesPath}
            />

            <GetEpisodes searchData={searchData} />
        </div>
    );
};

export default EpisodesPage;
