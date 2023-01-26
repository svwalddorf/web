import client from "#/lib/graphql/client";
import { TAGGED_PEOPLE } from "#/components/person/people.gql";
import { TaggedPeopleQuery, TaggedPeopleQueryVariables } from "#/lib/graphql/generated";

type Props = {
  tagId: string | null;
};
export async function TaggedPerson({ tagId }: Props): Promise<JSX.Element | null> {
  if (!tagId) {
    return null;
  }

  const { data } = await client.query<TaggedPeopleQuery, TaggedPeopleQueryVariables>({
    query: TAGGED_PEOPLE,
    variables: { tagId },
  });

  return (
    <p>
      tagId: {tagId}, data: {JSON.stringify(data.peoples?.data)}
    </p>
  );
}
