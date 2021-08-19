import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

// Import Local Components
import { GET_EPISODES_QUERY } from "../GraphQL/Queries";

const GetEpisodes = () => {
   const { error, loading, data } = useQuery(GET_EPISODES_QUERY);

   const [episodesData, setEpisodesData] = useState([]);

   useEffect(() => {
      setEpisodesData(data && data.episodes.results);
   }, [data]);
   console.log(episodesData);
   return (
      <div>
         <h2>Get Episodes Data</h2>
         <ul>
            {episodesData &&
               episodesData.map((data) => (
                  <li key={data.id}>
                     {" "}
                     Episodes Id: {data.id} Created: {data.created}{" "}
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default GetEpisodes;
