import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_EPISODE_QUERY } from "../../../GraphQL/Queries";
import { useParams } from "react-router-dom";

// Import Local Components
import Navbar from "../../Layout/Navbar";

const SingleEpisode = () => {
   let { episodesID } = useParams();

   const { data } = useQuery(GET_SINGLE_EPISODE_QUERY, {
      variables: { id: episodesID },
   });

   const [singleData, setSingleData] = useState([]);
   useEffect(() => {
      setSingleData(data && data.episode);
   }, [data]);

   return (
      <div>
         <Navbar />

         <div className="pr-5 pl-5">
            {singleData ? (
               <div className="row">
                  <div className="col-md-8 offset-md-2 col-sm-12 col-12 margin-30px-bottom xs-margin-20px-bottom mt-5">
                     <div className="services-block-three">
                        <span>
                           <div className="padding-15px-bottom">
                              <i className="fa fa-eercast"></i>
                           </div>
                           <h2>
                              Single Episode - {singleData && singleData.id}
                           </h2>
                           <h4>{singleData && singleData.name}</h4>
                           <p className="xs-font-size13 xs-line-height-22">
                              Created-{singleData && singleData.created}
                           </p>
                           <p className="xs-font-size13 xs-line-height-22">
                              Episode-{singleData && singleData.episode}
                           </p>
                           <p className="xs-font-size13 xs-line-height-22">
                              Air Date is {singleData && singleData.air_date}
                           </p>
                        </span>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="row">
                  <div className="col-md-12 mt-3 mb-3 text-center">
                     <h2>Loading...</h2>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default SingleEpisode;
