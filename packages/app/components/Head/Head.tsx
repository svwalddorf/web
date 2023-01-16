import NextHead from "next/head";

type HeadProps = {
  title: string;
  description?: string;
  favicon?: string;
};

export function Head({ title, favicon, description }: HeadProps): JSX.Element {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description ?? undefined} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${favicon}`}
      />
    </NextHead>
  );
}
