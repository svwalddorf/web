import { ContactData, FooterData } from "../../lib/graphql/global.gql";

export default function Footer({
  labelLeft,
  labelRight,
  linkLists,
  contact,
}: FooterData & { contact?: ContactData | null }): JSX.Element {
  return (
    <div className="bg-svw-blue-default">
      <div className="container grid grid-flow-col auto-cols-max gap-20">
        {linkLists?.map((linkList) => (
          <div key={linkList?.id}>
            <h3 className="font-bold">{linkList?.title}</h3>
            <ul className="list-none">
              {linkList?.links?.map((link) => (
                <li key={link?.id}>
                  <a href={link?.href} target={`_${link?.target ?? "self"}`}>
                    {link?.text ?? link?.href}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
  );
}
