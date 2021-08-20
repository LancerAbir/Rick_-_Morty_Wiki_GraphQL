import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_EPISODE_QUERY } from "../../../GraphQL/Queries";

import { useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar";

const SingleEpisode = () => {
   let { id } = useParams();

   const { loading, error, data } = useQuery(GET_SINGLE_EPISODE_QUERY);

   const [singleData, setSingleData] = useState([]);

   useEffect(() => {
      setSingleData(data && data.episodesByIds);
   }, [data]);
   console.log(singleData);

   return (
      <div>
         <Navbar />
         <div className="pr-5 pl-5">
            <div className="row">
               <div className="col-md-12 mt-3 mb-3 text-center">
                  <h2>Single Episode{id} </h2>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleEpisode;
