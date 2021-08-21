import React, { useState } from "react";
import GetCharacters from "../GetCharacters";
import Navbar from "../Layout/Navbar";

const CharactersPage = (props) => {
    const charactersPath = props.location.pathname;

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
                charactersPath={charactersPath}
            />
            <GetCharacters searchData={searchData} />
        </div>
    );
};

export default CharactersPage;
