import client from "#/lib/graphql/client";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import { ArticleCard } from "#/components/articles/ArticleCard";

const DEFAULT_PAGE_SIZE = 10;

type Props = {
  pageSize: number;
};
export async function Articles({ pageSize = DEFAULT_PAGE_SIZE }: Props): Promise<JSX.Element> {
  const { data } = await client.query<ArticlesQuery, ArticlesQueryVariables>({
    query: ARTICLES_QUERY,
    variables: { page: 1, pageSize: pageSize },
  });
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.articles?.data.map((article) => {
        if (article.attributes) {
          return <ArticleCard key={article.id} article={article.attributes} />;
        }
      })}
    </div>
  );
}
