import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
// Import Local Components
import { GET_EPISODES_QUERY } from "../GraphQL/Queries";

const GetEpisodes = () => {
    const { data } = useQuery(GET_EPISODES_QUERY);

    const [episodesData, setEpisodesData] = useState([]);

    useEffect(() => {
        setEpisodesData(data && data.episodes.results);
    }, [data]);
    console.log(episodesData);
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
                              Episodes Id: {data.id} Created: {data.created}{" "}
                          </div>
                      ))
                    : "Loading..."}
            </div>
        </div>
    );
};

export default GetEpisodes;
