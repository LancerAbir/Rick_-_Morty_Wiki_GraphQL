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
         <p>Get Episodes Data</p>
         {episodesData.map((data) => (
            <div> Episodes Date {data.air_date}</div>
         ))}
      </div>
   );
};

export default GetEpisodes;
