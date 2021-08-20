import { gql } from "@apollo/client";
// import { useParams } from "react-router-dom";

// let { episodeID } = useParams();

export const GET_SINGLE_EPISODE_QUERY = gql`
   query {
      episodesByIds(ids: 1) {
         id
         episode
         air_date
         created
         name
      }
   }
`;
