import { gql } from "@apollo/client";
import { LINK_FRAGMENT } from "./fragments.gql";
import { GlobalQuery } from "./generated";
import { DeepExtractType } from "./types";

export const GLOBAL = gql`
  query Global {
    global {
      data {
        id
        attributes {
          header {
            id
            pageLinks {
              ...LinkFragment
            }
          }
          footer {
            id
            labelLeft
            labelRight
            linkLists {
              id
              title
              links {
                ...LinkFragment
              }
            }
          }
          socialMedias {
            id
            name
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          contact {
            id
            name
            street
            postalCode
            city
            telephone
            telefax
            email
          }
        }
      }
    }
  }
  ${LINK_FRAGMENT}
`;

export type GlobalData = DeepExtractType<
  GlobalQuery,
  ["global", "data", "attributes"]
>;

export type FooterData = Omit<DeepExtractType<GlobalData, ["footer"]>, "id">;

export type ContactData = Omit<DeepExtractType<GlobalData, ["contact"]>, "id">;
