import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Local Components
import { GET_CHARACTERS_QUERY } from "../GraphQL/Queries";

const GetCharacters = () => {
    const { data } = useQuery(GET_CHARACTERS_QUERY);

    const [charactersData, setCharactersData] = useState([]);

    useEffect(() => {
        setCharactersData(data && data.characters.results);
    }, [data]);
    console.log(charactersData);
    return (
        <div className="pr-5 pl-5">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h2>Get Characters Data</h2>
                </div>
                {charactersData
                    ? charactersData.map((data) => (
                          <div key={data.id} className="col-md-3 mb-4">
                              <div className="card" style={{ width: "18rem" }}>
                                  <img
                                      className="card-img-top"
                                      src={data.image}
                                      alt={data.name}
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">
                                          {data.name}
                                      </h5>
                                      <p className="card-text">
                                          Some quick example text to build on
                                          the card title and make up the bulk of
                                          the card's content.
                                      </p>
                                      <Link to="#" className="btn btn-primary">
                                          Go somewhere
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      ))
                    : "Loading..."}
            </div>
        </div>
    );
};

export default GetCharacters;
