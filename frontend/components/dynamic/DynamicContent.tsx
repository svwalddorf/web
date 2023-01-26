import { Carousel } from "#/components/carousel/Carousel";
import RichText from "#/components/richtext/RichText";
import { Spacing } from "#/components/spacing/Spacing";
import {
  PageHeaderContentsDynamicZone,
  PageLeftContentsDynamicZone,
  PageMainContentsDynamicZone,
  PageRightContentsDynamicZone,
} from "#/lib/graphql/generated";
import { TaggedPersons } from "#/components/person/TaggedPersons";

type Props = {
  component:
    | PageHeaderContentsDynamicZone
    | PageMainContentsDynamicZone
    | PageLeftContentsDynamicZone
    | PageRightContentsDynamicZone;
};

export function DynamicContent({ component }: Props): JSX.Element | null {
  switch (component.__typename) {
    case "ComponentBlockCarousel": {
      /* @ts-expect-error Server Component */
      return <Carousel maxItems={component.maxArticles ?? 3} />;
    }
    case "ComponentBlockRichText": {
      return <RichText content={component.content} />;
    }
    case "ComponentSharedSpacing": {
      return <Spacing width={component.width} height={component.height} />;
    }
    case "ComponentBlockPersons": {
      return <div>{component.person?.data?.attributes?.lastname}</div>;
    }
    case "ComponentBlockTaggedPersons": {
      /* @ts-expect-error Server Component */
      return <TaggedPersons tagId={component.tag?.data?.id ?? null} />;
    }
    case "Error":
      return <div>error in {JSON.stringify(component)}</div>;

    default:
      return null;
  }
}
