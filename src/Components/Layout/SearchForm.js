import React from "react";

const SearchForm = ({
    episodesPath,
    charactersPath,
    locationsPath,
    ChangeHandler,
    searchData,
    handleSubmit,
}) => {
    if (episodesPath) {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Episode Data"
                    aria-label="Search"
                />
            </form>
        );
    } else if (charactersPath) {
        return (
            <form
                className="form-inline my-2 my-lg-0"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="characterSearch"
                    placeholder="Search Character Data"
                    aria-label="Search"
                    value={searchData}
                    onChange={(e) => ChangeHandler(e)}
                />
            </form>
        );
    } else if (locationsPath) {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Location Data"
                    aria-label="Search"
                />
            </form>
        );
    } else {
        return false;
    }
};

export default SearchForm;
