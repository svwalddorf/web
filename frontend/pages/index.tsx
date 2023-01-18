import client from "../lib/graphql/client";
import { GlobalData, GLOBAL } from "../lib/graphql/global.gql";
import { GetServerSideProps } from "next";
import { GlobalQuery } from "../lib/graphql/generated";
import Layout from "../components/Layout/Layout";

type IndexServerSideProps = {
  global?: GlobalData | null;
};

export const getServerSideProps: GetServerSideProps<
  IndexServerSideProps
> = async () => {
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
