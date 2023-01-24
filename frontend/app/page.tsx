import { fetchIndexPageData } from "#/app/index.gql";
import { BlockManager } from "#/components/BlockManager";

export default async function IndexPage(props: any): Promise<JSX.Element> {
  const indexPageData = await fetchIndexPageData();
  return (
    <div className="bg-neutral-100">
      {indexPageData?.attributes?.contents?.map((block) => (
        <BlockManager block={block} />
      ))}
      <div className="pt-16 mx-8 container">
        <p>index page</p>
        <p>params: {JSON.stringify(props)}</p>
        <p>data: {JSON.stringify(indexPageData)}</p>
      </div>
    </div>
  );
}
