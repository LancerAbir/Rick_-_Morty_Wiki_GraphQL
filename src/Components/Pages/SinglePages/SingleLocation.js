import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_LOCATIONS_QUERY } from "../../../GraphQL/Queries";
import { useParams } from "react-router-dom";

// Import Local Components
import Navbar from "../../Layout/Navbar";

const SingleLocation = () => {
   let { locationID } = useParams();

   const { loading, error, data } = useQuery(GET_SINGLE_LOCATIONS_QUERY, {
      variables: { id: locationID },
   });

   const [singleData, setSingleData] = useState([]);
   useEffect(() => {
      setSingleData(data && data.location);
   }, [data]);

   console.log(singleData);

   // if (loading) return "Loading...";
   // if (error) return `Error! ${error.message}`;

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
                              Single Location Data -
                              {singleData && singleData.id}
                           </h2>

                           <h4>{singleData && singleData.name} </h4>
                           <p className="xs-font-size13 xs-line-height-22">
                              Created-{singleData && singleData.created}
                           </p>
                           <p className="xs-font-size13 xs-line-height-22">
                              Gender-{singleData && singleData.dimension}
                           </p>
                           <p className="xs-font-size13 xs-line-height-22">
                              Species-{singleData && singleData.episode}
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

export default SingleLocation;
