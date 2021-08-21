import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Local Components
import { GET_LOCATIONS_QUERY } from "../GraphQL/Queries";

const GetLocations = ({ searchData }) => {
    const [count, setCount] = useState(0);
    const { data, error, loading } = useQuery(GET_LOCATIONS_QUERY, {
        variables: { after: count, search: searchData },
    });

    const [locationsData, setLocationsData] = useState([]);

    useEffect(() => {
        setLocationsData(data && data.locations.results);
    }, [data]);

    if (error) return <div> errors</div>;
    if (loading || !data) return <div> loading</div>;

    return (
        <div className="pr-5 pl-5">
            <div className="row">
                <div className="col-md-12 mt-3 text-center">
                    <h2>Get Locations Data</h2>
                </div>

                {locationsData
                    ? locationsData.map((data) => (
                          <div
                              key={data.id}
                              className="col-md-4 col-lg-4 column"
                          >
                              <div className="card gr-1">
                                  <div className="txt">
                                      <h1>Location Id: {data.id}</h1>
                                      <p>Name: {data && data.name}</p>
                                  </div>
                                  <Link to={`/singleLocation/${data.id}`}>
                                      more
                                  </Link>
                                  <div className="ico-card">
                                      <i></i>
                                  </div>
                              </div>
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

export default GetLocations;
