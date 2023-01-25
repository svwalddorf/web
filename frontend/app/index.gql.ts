import { gql } from "@apollo/client";
import client from "#/lib/graphql/client";
import { ExtractType } from "#/lib/graphql/types";
import { IndexPageDataQuery } from "#/lib/graphql/generated";

export const INDEX_PAGE_DATA = gql`
  query IndexPageData {
    pages(filters: { slug: { eq: "index" } }) {
      data {
        id
        attributes {
          title
          slug
          contents {
            __typename
            ... on ComponentBlockCarousel {
              maxArticles
            }
          }
        }
      }
    }
  }
`;

export type IndexPageData = ExtractType<IndexPageDataQuery, ["pages", "data"]>;
export type Block = ExtractType<IndexPageData, ["attributes", "contents"]>;

export async function fetchIndexPageData(): Promise<IndexPageData | undefined> {
  const { data } = await client.query<IndexPageDataQuery>({
    query: INDEX_PAGE_DATA,
  });
  return data.pages?.data?.find((page) => page.attributes?.slug === "index") ?? undefined;
}
