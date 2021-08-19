import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

// Import Local Components
import { GET_LOCATIONS_QUERY } from "../GraphQL/Queries";

const GetLocations = () => {
   const { data } = useQuery(GET_LOCATIONS_QUERY);

   const [locationsData, setLocationsData] = useState([]);

   useEffect(() => {
      setLocationsData(data && data.locations.results);
   }, [data]);
   console.log(locationsData);

   return (
      <div>
         <h2>Get Locations Data</h2>
         <ul>
            {locationsData
               ? locationsData.map((data) => (
                    <li key={data.id}>
                       {" "}
                       Episodes Id: {data.id} dimension: {data.dimension}{" "}
                    </li>
                 ))
               : "Loading..."}
         </ul>
      </div>
   );
};

export default GetLocations;
