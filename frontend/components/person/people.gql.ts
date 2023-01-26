import { gql } from "@apollo/client";
import { PEOPLE_FRAGMENT } from "#/lib/graphql/fragments.gql";
import { ExtractType } from "#/lib/graphql/types";
import { TaggedPeopleQuery } from "#/lib/graphql/generated";

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

export type PeopleData = ExtractType<TaggedPeopleQuery, ["peoples", "data"]>;
export type Person = ExtractType<PeopleData, ["attributes"]>;
