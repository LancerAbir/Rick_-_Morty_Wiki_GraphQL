import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Local Components
import { GET_CHARACTERS_QUERY } from "../GraphQL/Queries";

const GetCharacters = ({ searchData }) => {
    const [count, setCount] = useState(1);

    const { data, error, loading } = useQuery(GET_CHARACTERS_QUERY, {
        variables: { after: count, search: searchData },
    });

    // const { id } = data.characters.results.id;
    // console.log(id);

    const [charactersData, setCharactersData] = useState([]);

    useEffect(() => {
        setCharactersData(data && data.characters.results);
    }, [data]);

    if (error) return <div> errors</div>;
    if (loading || !data) return <div> loading</div>;
    return (
        <div className="pr-5 pl-5">
            <div className="row">
                <div className="col-md-12 mt-3 text-center">
                    <h2>Get Characters Data </h2>
                </div>
                {charactersData
                    ? charactersData.map((data) => (
                          <div
                              key={data.id}
                              className="col-md-3 col-sm-6 col-12 mb-3 item"
                          >
                              <div className="card item-card card-block">
                                  <img
                                      className="card-img-top image-width"
                                      src={data.image}
                                      alt={data.name}
                                  />
                                  <div className="pl-3 pb-3 pr-3">
                                      <h5 className="card-title  mt-3 mb-3">
                                          {data.name}
                                      </h5>
                                      <p className="card-text">
                                          This is a company that builds
                                          websites, web apps and e-commerce
                                          solutions.
                                      </p>
                                      <Link
                                          to={`/singleCharacter/${data.id}`}
                                          className="btn btn-primary"
                                      >
                                          <p
                                              style={{
                                                  marginRight: "0px",
                                                  marginBottom: "-8px",
                                                  marginTop: "5px",
                                              }}
                                          >
                                              Read More
                                          </p>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      ))
                    : "Loading..."}
                <div className="col-md-12 mt-3 mb-3 text-center">
                    {count > 1 ? (
                        <button
                            onClick={() => {
                                setCount(count - 1);
                            }}
                            className="btn btn-primary mr-3"
                        >
                            Prev Page
                        </button>
                    ) : (
                        ""
                    )}

                    <button
                        onClick={() => {
                            setCount(count + 1);
                        }}
                        className="btn btn-primary"
                    >
                        Next Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetCharacters;
