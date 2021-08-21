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
    query ($id: ID!) {
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
    query ($after: Int, $search: String) {
        characters(page: $after, filter: { name: $search }) {
            info {
                count
            }
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

export const GET_CHARACTERS_PAGINATION_QUERY = gql`
    query {
        characters(page: 2) {
            info {
                count
            }
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
    query ($id: ID!) {
        character(id: $id) {
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
    query ($id: ID!) {
        location(id: $id) {
            id
            name
            type
            dimension
            created
            residents {
                id
                name
                status
                species
                type
                gender
                created
            }
        }
    }
`;
