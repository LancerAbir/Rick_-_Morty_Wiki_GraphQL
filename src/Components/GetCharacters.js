import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

// Import Local Components
import { GET_CHARACTERS_QUERY } from "../GraphQL/Queries";

const GetCharacters = () => {
   const { data } = useQuery(GET_CHARACTERS_QUERY);

   const [charactersData, setCharactersData] = useState([]);

   useEffect(() => {
      setCharactersData(data && data.characters.results);
   }, [data]);
   console.log(charactersData);
   return (
      <div>
         <h2>Get Characters Data</h2>
         <ul>
            {charactersData
               ? charactersData.map((data) => (
                    <>
                       <li key={data.id}>
                          {" "}
                          Characters Id: {data.id} Name: {data.name}{" "}
                       </li>
                       <img src={data.image} alt={data.name} />
                    </>
                 ))
               : "Loading..."}
         </ul>
      </div>
   );
};

export default GetCharacters;
