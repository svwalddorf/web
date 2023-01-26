import { fetchPageData } from "#/lib/graphql/page.gql";
import { Page } from "#/components/page/Page";
import { NextPageProps } from "#/lib/types";

export default async function SubPage(props: NextPageProps): Promise<JSX.Element | null> {
  const pageData = await fetchPageData(props.params.slug);
  if (pageData?.attributes) {
    return <Page data={pageData.attributes} />;
  }
  return null;
}
