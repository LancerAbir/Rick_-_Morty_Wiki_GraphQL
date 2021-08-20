import { gql } from "@apollo/client";

export const GET_EPISODES_QUERY = gql`
   query {
      episodes {
         results {
            id
            name
            air_date
            episode
            created
         }
      }
   }
`;

export const GET_SINGLE_EPISODE_QUERY = gql`
   query EpisodesByIds($id: String!) {
      episodesByIds(ids: $id) {
         id
         episode
         air_date
         created
         name
      }
   }
`;

export const GET_CHARACTERS_QUERY = gql`
   query {
      characters {
         results {
            id
            name
            status
            species
            type
            gender
            image
            created
         }
      }
   }
`;

export const GET_SINGLE_CHARACTERS_QUERY = gql`
   query {
      characters {
         results {
            id
            name
            status
            species
            type
            gender
            image
            created
         }
      }
   }
`;

export const GET_LOCATIONS_QUERY = gql`
   query {
      locations {
         results {
            id
            name
            type
            dimension
            created
         }
      }
   }
`;
