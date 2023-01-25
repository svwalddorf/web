import { fetchPageData } from "#/lib/graphql/page.gql";
import { Page } from "#/components/page/Page";

export default async function IndexPage(): Promise<JSX.Element | null> {
  const pageData = await fetchPageData("index");
  if (pageData?.attributes) {
    return (
      <Page
        inContainer={pageData.attributes.inContainer}
        contents={pageData.attributes.contents ?? []}
        leftContent={pageData.attributes.leftContent ?? []}
        rightContent={pageData.attributes.rightContent ?? []}
      />
    );
  }
  return null;
}
