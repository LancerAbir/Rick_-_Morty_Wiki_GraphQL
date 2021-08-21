import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Local Components
import { GET_EPISODES_QUERY } from "../GraphQL/Queries";

const GetEpisodes = ({ searchData }) => {
    const [count, setCount] = useState(0);
    const { data, error, loading } = useQuery(GET_EPISODES_QUERY, {
        variables: { after: count, search: searchData },
    });

    const [episodesData, setEpisodesData] = useState([]);

    useEffect(() => {
        setEpisodesData(data && data.episodes.results);
    }, [data]);

    if (error) return <div> errors</div>;
    if (loading || !data) return <div> loading</div>;

    return (
        <div className="pr-5 pl-5">
            <div className="row">
                <div className="col-md-12 mt-3 mb-3 text-center">
                    <h2>Get Episodes Data</h2>
                </div>

                {episodesData
                    ? episodesData.map((data) => (
                          <div
                              key={data.id}
                              className="col-md-3 col-sm-6 col-12 mb-4"
                          >
                              <Link to={`/singleEpisode/${data.id}`}>
                                  <div
                                      style={{
                                          backgroundColor: `#${Math.floor(
                                              Math.random() * 1677729892
                                          ).toString(16)}`,
                                      }}
                                      className="episodesBox"
                                  >
                                      <p
                                          style={{
                                              color: "#fff",
                                              textDecoration: "none",
                                          }}
                                      >
                                          Episodes Name: {data.name}
                                      </p>
                                  </div>
                              </Link>
                          </div>
                      ))
                    : "Loading..."}
                <div className="col-md-12 mt-3 mb-3 text-center">
                    {count > 0 ? (
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

export default GetEpisodes;
