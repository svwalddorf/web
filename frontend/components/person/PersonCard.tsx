import { Person } from "#/components/person/people.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import Link from "next/link";

type Props = {
  person: Person;
};
export function PersonCard({ person }: Props): JSX.Element {
  const picture = person.picture?.data?.attributes;
  return (
    <div className="mt-16 flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <Image
          className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={getFullAssetUrl(picture?.url ?? "")}
          alt=""
          width={picture?.width ?? 0}
          height={picture?.height ?? 0}
        />
        <div className="w-96 p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {person.firstname} {person.lastname}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {person.tags?.data.map(
              (tag, index, array) => `${tag.attributes?.name}${array.length - 1 !== index ? ", " : ""}`
            )}
          </p>
          {person.description && <p className="text-gray-700 text-base mb-4">{person.description}</p>}
          <div className="grid grid-cols-[auto_auto]">
            {person.email && (
              <>
                <p className="text-gray-600 text-sm">E-Mail</p>
                <p className="text-gray-600 text-sm font-bold text-svw-blue-default">
                  <Link href={`mailto:${person.email}`}>{person.email}</Link>
                </p>
              </>
            )}

            {person.email && (
              <>
                <p className="text-gray-600 text-sm">Telefon</p>
                <p className="text-gray-600 text-sm font-bold text-svw-blue-default">
                  <Link href={`tel:${person.telephone}`}>{person.telephone}</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
