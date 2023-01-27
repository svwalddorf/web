import client from "#/lib/graphql/client";
import { TAGGED_PEOPLE } from "#/components/person/people.gql";
import { TaggedPeopleQuery, TaggedPeopleQueryVariables } from "#/lib/graphql/generated";
import { PersonCard } from "#/components/person/PersonCard";

type Props = {
  tagId: string | null;
};
export async function TaggedPersons({ tagId }: Props): Promise<JSX.Element | null> {
  if (!tagId) {
    return null;
  }

  const { data } = await client.query<TaggedPeopleQuery, TaggedPeopleQueryVariables>({
    query: TAGGED_PEOPLE,
    variables: { tagId },
  });

  return (
    <>
      {data.peoples?.data.map((person) => {
        if (person.attributes) {
          return <PersonCard key={person.id} person={person.attributes} />;
        }
        return null;
      })}
    </>
  );
}
