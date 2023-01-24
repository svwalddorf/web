import { Block } from "#/app/index.gql";
import { Carousel } from "#/components/carousel/Carousel";

type Props = {
  block: Block | null;
};
export function BlockManager({ block }: Props): JSX.Element | null {
  if (!block) return null;

  switch (block.__typename) {
    case "ComponentBlockCarousel": {
      /* @ts-expect-error Server Component */
      return <Carousel maxItems={block.maxArticles ?? 3} />;
    }
    case "Error":
      return <div>error in {JSON.stringify(block)}</div>;
  }
}
