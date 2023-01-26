import { gql } from "@apollo/client";
import { PageDataQuery } from "#/lib/graphql/generated";
import { ExtractType } from "#/lib/graphql/types";
import client from "#/lib/graphql/client";
import { PEOPLE_FRAGMENT } from "#/lib/graphql/fragments.gql";

export const PAGE_DATA = gql`
  ${PEOPLE_FRAGMENT}
  query PageData($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          headerContents {
            __typename
            ... on ComponentBlockSubPageNavigation {
              id
              flat
            }
            ... on ComponentBlockCarousel {
              id
              maxArticles
            }
          }
          mainContents {
            __typename
            ... on ComponentBlockRichText {
              id
              content
            }
            ... on ComponentSharedSpacing {
              id
              width
              height
            }
            ... on ComponentBlockPersons {
              id
              person {
                data {
                  id
                  attributes {
                    ...People
                  }
                }
              }
            }
            ... on ComponentBlockTaggedPersons {
              id
              tag {
                data {
                  id
                }
              }
            }
          }
          leftContents {
            __typename
            ... on ComponentBlockRichText {
              id
              content
            }
            ... on ComponentSharedSpacing {
              id
              width
              height
            }
            ... on ComponentBlockPersons {
              id
              person {
                data {
                  id
                  attributes {
                    ...People
                  }
                }
              }
            }
            ... on ComponentBlockTaggedPersons {
              id
              tag {
                data {
                  id
                }
              }
            }
          }
          rightContents {
            __typename
            ... on ComponentBlockRichText {
              id
              content
            }
            ... on ComponentSharedSpacing {
              id
              width
              height
            }
            ... on ComponentBlockPersons {
              id
              person {
                data {
                  id
                  attributes {
                    ...People
                  }
                }
              }
            }
            ... on ComponentBlockTaggedPersons {
              id
              tag {
                data {
                  id
                }
              }
            }
          }
          subPages {
            data {
              id
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export type PageEntityData = ExtractType<PageDataQuery, ["pages", "data"]>;
export type PageData = ExtractType<PageEntityData, ["attributes"]>;

export async function fetchPageData(slug: string): Promise<PageEntityData | undefined> {
  const { data } = await client.query<PageDataQuery>({
    query: PAGE_DATA,
    variables: { slug },
  });
  return data.pages?.data?.find((page) => page.attributes?.slug === slug) ?? undefined;
}
