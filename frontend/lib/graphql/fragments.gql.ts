import { gql } from "@apollo/client";

export const LINK_FRAGMENT = gql`
  fragment LinkFragment on ComponentSharedLink {
    id
    href
    text
    target
    icon {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    isDownload
    isExternal
  }
`;

export const PEOPLE_FRAGMENT = gql`
  fragment People on People {
    firstname
    lastname
    description
    email
    telephone
    tags {
      data {
        id
        attributes {
          name
        }
      }
    }
    picture {
      data {
        id
        attributes {
          url
          width
          height
        }
      }
    }
  }
`;
