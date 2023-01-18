import { PropsWithChildren } from "react";
import { GlobalData } from "../../lib/graphql/global.gql";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  global?: GlobalData | null;
};
export default function Layout({
  children,
  global,
}: PropsWithChildren<LayoutProps>): JSX.Element {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header>
        <Header />
      </header>
      <main className="mb-auto">main{children}</main>
      <footer>
        <Footer {...global?.footer} contact={global?.contact} />
      </footer>
    </div>
  );
}
