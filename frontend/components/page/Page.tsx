import { DynamicContentData } from "#/lib/graphql/page.gql";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

type Props = {
  contents: (DynamicContentData | null)[];
};

export function Page({ contents }: Props): JSX.Element {
  return (
    <div>
      {contents?.map((block) => {
        if (!block || block.__typename === "Error") {
          return null;
        }
        return <DynamicContent key={block.id} block={block} />;
      })}
    </div>
  );
}
