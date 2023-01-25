import { DynamicContentData, LeftDynamicContentData, RightDynamicContentData } from "#/lib/graphql/page.gql";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

type Props = {
  inContainer?: boolean;
  contents: (DynamicContentData | null)[];
  leftContent: (LeftDynamicContentData | null)[];
  rightContent: (RightDynamicContentData | null)[];
};

export function Page({ inContainer, leftContent, contents, rightContent }: Props): JSX.Element {
  return (
    <div className={`${inContainer ? "container " : ""}flex flex-row place-content-between`}>
      <div className="">
        {leftContent?.map((content) => {
          if (!content || content.__typename === "Error") {
            return null;
          }
          return <DynamicContent key={content.id} block={content} />;
        })}
      </div>
      <div className="">
        {contents?.map((content) => {
          if (!content || content.__typename === "Error") {
            return null;
          }
          return <DynamicContent key={content.id} block={content} />;
        })}
      </div>
      <div className="">
        {rightContent?.map((content) => {
          if (!content || content.__typename === "Error") {
            return null;
          }
          return <DynamicContent key={content.id} block={content} />;
        })}
      </div>
    </div>
  );
}
