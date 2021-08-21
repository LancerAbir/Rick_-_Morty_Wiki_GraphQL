import React from "react";
import GetEpisodes from "../GetEpisodes";
import Navbar from "../Layout/Navbar";

const EpisodesPage = (props) => {
    const episodesPath = props.location.pathname;
    return (
        <div>
            <Navbar episodesPath={episodesPath} />
            <GetEpisodes />
        </div>
    );
};

export default EpisodesPage;
