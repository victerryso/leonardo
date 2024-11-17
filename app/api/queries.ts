import { gql } from "@apollo/client";

export const createGetCharactersQuery = (page = 1) => {
  return gql`
    query {
      characters(page: ${page}) {
        info {
          count
          pages
        }
        results {
          id
          image
          name
        }
      }
    }
  `;
};

export const createGetCharacterQuery = (id: string) => {
  return gql`
    query {
      character(id: ${id}) {
        created
        gender
        id
        image
        name
        species
        status
        type
      }
    }
  `;
};
