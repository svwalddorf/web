import { gql } from "@apollo/client";
import { PageDataQuery } from "#/lib/graphql/generated";
import { ExtractType } from "#/lib/graphql/types";
import client from "#/lib/graphql/client";

export const PAGE_DATA = gql`
  query PageData($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
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
          }
        }
      }
    }
  }
`;

export type PageData = ExtractType<PageDataQuery, ["pages", "data"]>;
export type DynamicContentData = ExtractType<PageData, ["attributes", "contents"]>;

export async function fetchPageData(slug: string): Promise<PageData | undefined> {
  const { data } = await client.query<PageDataQuery>({
    query: PAGE_DATA,
    variables: { slug },
  });
  return data.pages?.data?.find((page) => page.attributes?.slug === slug) ?? undefined;
}
