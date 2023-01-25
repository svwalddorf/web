import { fetchPageData } from "#/lib/graphql/page.gql";
import { NextPageProps } from "#/lib/types";
import { Page } from "#/components/page/Page";

export default async function IndexPage(): Promise<JSX.Element | null> {
  const pageData = await fetchPageData("index");
  if (pageData?.attributes?.contents) {
    return <Page contents={pageData.attributes.contents} />;
  }
  return null;
}
