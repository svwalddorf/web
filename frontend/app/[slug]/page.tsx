import { fetchPageData } from "#/lib/graphql/page.gql";
import { Page } from "#/components/page/Page";
import { NextPageProps } from "#/lib/types";

export default async function SubPage(props: NextPageProps): Promise<JSX.Element | null> {
  const pageData = await fetchPageData(props.params.slug);
  if (pageData?.attributes) {
    return (
      <Page
        subPages={pageData.attributes.subPages?.data}
        inContainer={pageData.attributes.inContainer}
        contents={pageData.attributes.contents ?? []}
        leftContent={pageData.attributes.leftContent ?? []}
        rightContent={pageData.attributes.rightContent ?? []}
      />
    );
  }
  return null;
}
