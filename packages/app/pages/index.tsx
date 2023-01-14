import client from "../src/graphql/client";
import { INDEX_DATA } from "./index.gql";
import { IndexDataQuery } from "../src/graphql/generated";
import { Head } from "../src/components/Head/Head";

type IndexServerSideProps = {
  title: string;
  description?: string;
  favicon?: string;
};

export async function getServerSideProps(): Promise<{
  props: IndexServerSideProps;
}> {
  const { data } = await client.query<IndexDataQuery>({
    query: INDEX_DATA,
  });
  const page = data.homepage?.data?.attributes;
  return {
    props: {
      title: page?.title ?? "",
      description: page?.description,
      favicon: page?.favicon?.data?.attributes?.url,
    },
  };
}

export default function Index({
  title,
  favicon,
  description,
}: IndexServerSideProps) {
  return (
    <>
      <Head title={title} favicon={favicon} description={description} />
      <main>{title}</main>
    </>
  );
}
