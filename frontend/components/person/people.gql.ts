import { gql } from "@apollo/client";
import { ExtractType } from "#/lib/graphql/types";
import { TaggedPeopleQuery } from "#/lib/graphql/generated";

export const TAGGED_PEOPLE = gql`
  query TaggedPeople($tagId: ID!) {
    peoples(filters: { tags: { id: { eq: $tagId } } }) {
      data {
        id
        attributes {
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
                hash
                mime
                name
                provider
                size
              }
            }
          }
        }
      }
    }
  }
`;

export type PeopleData = ExtractType<TaggedPeopleQuery, ["peoples", "data"]>;
export type Person = ExtractType<PeopleData, ["attributes"]>;
