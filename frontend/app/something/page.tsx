import { NextPageProps } from "#/lib/types";
import { fetchPageData } from "#/components/page/page.gql";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

export default async function Page(props: NextPageProps): Promise<JSX.Element> {
  const pageData = await fetchPageData(props.params.slug);
  return (
    <div className="mt-16 mx-8 container">
      {pageData?.attributes?.contents?.map((block, index) => {
        if (!block || block.__typename === "Error") {
          return null;
        }
        return <DynamicContent key={block.id} component={block} />;
      })}
    </div>
  );
}
