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
