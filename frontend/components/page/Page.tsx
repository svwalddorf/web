import { PageData } from "#/lib/graphql/page.gql";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

type Props = {
  data: PageData;
};

export function Page(props: Props): JSX.Element {
  const { mainContents, leftContents, rightContents, headerContents } = props.data;
  return (
    <>
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
    </>
  );
}
