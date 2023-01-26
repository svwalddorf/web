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
          inContainer
          contents {
            __typename
            ... on ComponentBlockCarousel {
              id
              maxArticles
            }
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
                    ...Person
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
          leftContent {
            __typename
            ... on ComponentBlockCarousel {
              id
              maxArticles
            }
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
                    ...Person
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
          rightContent {
            __typename
            ... on ComponentBlockCarousel {
              id
              maxArticles
            }
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
                    ...Person
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

export type PageData = ExtractType<PageDataQuery, ["pages", "data"]>;
export type DynamicContentData = ExtractType<PageData, ["attributes", "contents"]>;
export type LeftDynamicContentData = ExtractType<PageData, ["attributes", "leftContent"]>;
export type RightDynamicContentData = ExtractType<PageData, ["attributes", "rightContent"]>;
export type SubPageData = ExtractType<PageData, ["attributes", "subPages", "data"]>;

export async function fetchPageData(slug: string): Promise<PageData | undefined> {
  const { data } = await client.query<PageDataQuery>({
    query: PAGE_DATA,
    variables: { slug },
  });
  return data.pages?.data?.find((page) => page.attributes?.slug === slug) ?? undefined;
}
