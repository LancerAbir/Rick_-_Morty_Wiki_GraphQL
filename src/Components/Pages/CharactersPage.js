import React from "react";
import GetCharacters from "../GetCharacters";
import Navbar from "../Layout/Navbar";

const CharactersPage = () => {
    return (
        <div>
            <Navbar />
            <GetCharacters />
        </div>
    );
};

export default CharactersPage;
