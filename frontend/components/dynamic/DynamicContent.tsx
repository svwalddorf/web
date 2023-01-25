import { Carousel } from "#/components/carousel/Carousel";
import RichText from "#/components/richtext/RichText";
import { DynamicContentData } from "#/lib/graphql/page.gql";
import { Spacing } from "#/components/spacing/Spacing";

type Props = {
  block: DynamicContentData;
};

export function DynamicContent({ block }: Props): JSX.Element {
  switch (block.__typename) {
    case "ComponentBlockCarousel": {
      /* @ts-expect-error Server Component */
      return <Carousel maxItems={block.maxArticles ?? 3} />;
    }
    case "ComponentBlockRichText": {
      return <RichText content={block.content} />;
    }
    case "ComponentSharedSpacing": {
      return <Spacing width={block.width} height={block.height} />;
    }
    case "Error":
      return <div>error in {JSON.stringify(block)}</div>;
  }
}
