import { gql } from "@apollo/client";

export const INDEX_DATA = gql`
  query IndexData {
    homepage {
      data {
        id
        attributes {
          title
          description
          favicon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
