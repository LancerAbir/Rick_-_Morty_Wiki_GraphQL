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
   query episode($id: ID!) {
      episode(id: $id) {
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
      charactersByIds(ids: 1) {
         id
         name
         status
         species
         type
         gender
         image
         episode {
            id
            name
            air_date
            episode
            characters {
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
         created
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

export const GET_SINGLE_LOCATIONS_QUERY = gql`
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
