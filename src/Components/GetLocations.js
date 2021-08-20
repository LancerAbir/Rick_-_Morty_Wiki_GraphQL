import { useQuery } from "@apollo/client";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Local Components
import { GET_LOCATIONS_QUERY } from "../GraphQL/Queries";

const GetLocations = () => {
   const { data } = useQuery(GET_LOCATIONS_QUERY);

   const [locationsData, setLocationsData] = useState([]);

   useEffect(() => {
      setLocationsData(data && data.locations.results);
   }, [data]);
   //    console.log(locationsData);

   return (
      <div className="pr-5 pl-5">
         <div className="row">
            <div className="col-md-12 mt-3 text-center">
               <h2>Get Locations Data</h2>
            </div>

            {locationsData
               ? locationsData.map((data) => (
                    <div key={data.id} className="col-md-4 col-lg-4 column">
                       <div className="card gr-1">
                          <div className="txt">
                             <h1>Location Id: {data.id}</h1>
                             <p>Dimension: {data.dimension}</p>
                          </div>
                          <Link to={`/singleLocation/${data.id}`}>more</Link>
                          <div className="ico-card">
                             <i>
                                <FontAwesomeIcon icon={faAtom} />
                             </i>
                          </div>
                       </div>
                    </div>
                 ))
               : "Loading..."}
         </div>
      </div>
   );
};

export default GetLocations;
