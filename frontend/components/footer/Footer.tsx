import { ContactData, FooterData, FooterLinkListData } from "#/lib/graphql/homepage.gql";
import Link from "next/link";

export default function Footer({
  labelLeft,
  labelRight,
  linkLists,
  contact,
}: FooterData & { contact?: ContactData | null }): JSX.Element {
  return (
    <footer className="bg-neutral-200 border-t-4 border-svw-blue-default text-sm">
      <div className="container py-8 px-4">
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 justify-between">
          {linkLists?.map((linkList) => (
            <LinkList key={linkList!.id} linkList={linkList!} />
          ))}
          {contact && (
            <div key="contact">
              <ul className="list-none">
                <li className="font-bold">{contact.name}</li>
                <li>{contact.street}</li>
                <li>
                  {contact.postalCode} {contact.city}
                </li>
                <li>{contact.email}</li>
                <li>Telefon {contact.telephone}</li>
                <li>Fax {contact.telefax}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="container px-4 py-2 border-t border-neutral-400 text-neutral-600">
        <div>{labelLeft}</div>
        <div>{labelRight}</div>
      </div>
    </footer>
  );
}

type LinkListProps = { linkList: FooterLinkListData };

function LinkList({ linkList }: LinkListProps): JSX.Element {
  return (
    <div key={linkList.id}>
      <h3 className="font-bold">
        {linkList.titleUrl ? <Link href={linkList.titleUrl}>{linkList.title}</Link> : linkList.title}
      </h3>
      <ul className="list-none">
        {linkList.pageLinks?.data.map((pageLink) => {
          if (pageLink && pageLink.attributes?.slug) {
            return (
              <li key={pageLink.id}>
                <Link href={pageLink.attributes?.slug}>{pageLink.attributes?.title}</Link>
              </li>
            );
          }
        })}
        {linkList.links?.map((link) => {
          if (link) {
            return (
              <li key={link.id}>
                <Link href={link.href} target={`_${link.target ?? "self"}`}>
                  {link.text ?? link.href}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
