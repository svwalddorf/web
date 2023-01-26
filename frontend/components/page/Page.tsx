import { PageData } from "#/lib/graphql/page.gql";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

type Props = {
  data: PageData;
};

export function Page(props: Props): JSX.Element {
  const { mainContents, leftContents, rightContents, headerContents } = props.data;
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
      <div>
        <div className="flex flex-row">
          {headerContents?.map((content) => {
            if (!content || content.__typename === "Error") {
              return null;
            }
            return <DynamicContent key={content.id} component={content} />;
          })}
        </div>
        <div className="container flex flex-row place-content-between">
          <div className="">
            {leftContents?.map((content) => {
              if (!content || content.__typename === "Error") {
                return null;
              }
              return <DynamicContent key={content.id} component={content} />;
            })}
          </div>
          <main className="">
            {mainContents?.map((content) => {
              if (!content || content.__typename === "Error") {
                return null;
              }
              return <DynamicContent key={content.id} component={content} />;
            })}
          </main>
          <div className="">
            {rightContents?.map((content) => {
              if (!content || content.__typename === "Error") {
                return null;
              }
              return <DynamicContent key={content.id} component={content} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
