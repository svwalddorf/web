import {
  DynamicContentData,
  LeftDynamicContentData,
  RightDynamicContentData,
  SubPageData,
} from "#/lib/graphql/page.gql";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

type Props = {
  subPages?: SubPageData[] | null;
  inContainer?: boolean | null;
  contents: (DynamicContentData | null)[];
  leftContent: (LeftDynamicContentData | null)[];
  rightContent: (RightDynamicContentData | null)[];
};

export function Page({ subPages, inContainer, leftContent, contents, rightContent }: Props): JSX.Element {
  return (
    <>
      {/*showSubPageNavigation && (
        <div className="mt-8  border-b border-neutral-300">
          <div className="container flex place-content-end pl-4">
            {subPages?.map((subPage) => (
              <div key={subPage.attributes?.slug} className="px-3">
                {subPage.attributes?.title}
              </div>
            ))}
          </div>
        </div>
      )*/}
      <div className={`${inContainer ? "container " : ""}flex flex-row place-content-between`}>
        <div className="">
          {leftContent?.map((content) => {
            if (!content || content.__typename === "Error") {
              return null;
            }
            return <DynamicContent key={content.id} block={content} />;
          })}
        </div>
        <main className="">
          {contents?.map((content) => {
            if (!content || content.__typename === "Error") {
              return null;
            }
            return <DynamicContent key={content.id} block={content} />;
          })}
        </main>
        <div className="">
          {rightContent?.map((content) => {
            if (!content || content.__typename === "Error") {
              return null;
            }
            return <DynamicContent key={content.id} block={content} />;
          })}
        </div>
      </div>
    </>
  );
}
