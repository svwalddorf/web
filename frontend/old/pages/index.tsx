import client from "#/lib/graphql/client";
import { HomepageData, GLOBAL } from "#/lib/graphql/global.gql";
import { GetServerSideProps } from "next";
import { GlobalQuery } from "#/lib/graphql/generated";
import Layout from "../Layout/Layout";

type IndexServerSideProps = {
  global?: HomepageData | null;
};

export const getServerSideProps: GetServerSideProps<IndexServerSideProps> = async () => {
  const { data: globalData } = await client.query<GlobalQuery>({
    query: GLOBAL,
  });
  return {
    props: {
      global: globalData.global?.data?.attributes,
    },
  };
};

export default function Index({ global }: IndexServerSideProps) {
  return <Layout global={global}></Layout>;
}
