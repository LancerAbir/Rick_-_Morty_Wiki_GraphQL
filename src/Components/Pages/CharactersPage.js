import React from "react";
import GetCharacters from "../GetCharacters";
import Navbar from "../Layout/Navbar";

const CharactersPage = (props) => {
    const charactersPath = props.location.pathname;
    return (
        <div>
            <Navbar charactersPath={charactersPath} />
            <GetCharacters />
        </div>
    );
};

export default CharactersPage;
