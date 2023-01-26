import { gql } from "@apollo/client";
import { PEOPLE_FRAGMENT } from "#/lib/graphql/fragments.gql";

export const TAGGED_PEOPLE = gql`
  ${PEOPLE_FRAGMENT}
  query TaggedPeople($tagId: ID!) {
    peoples(filters: { tags: { id: { eq: $tagId } } }) {
      data {
        id
        attributes {
          ...People
        }
      }
    }
  }
`;
