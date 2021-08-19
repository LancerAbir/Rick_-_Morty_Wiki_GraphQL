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
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
            </div>
            <h2>Get Episodes Data</h2>
            <ul>
                {episodesData
                    ? episodesData.map((data) => (
                          <li key={data.id}>
                              {" "}
                              Episodes Id: {data.id} Created: {data.created}{" "}
                          </li>
                      ))
                    : "Loading..."}
            </ul>
        </div>
    );
};

export default GetEpisodes;
