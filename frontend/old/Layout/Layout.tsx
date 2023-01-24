import { PropsWithChildren } from "react";
import { HomepageData } from "#/lib/graphql/global.gql";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

type LayoutProps = {
  global?: HomepageData | null;
};
export default function Layout({ children, global }: PropsWithChildren<LayoutProps>): JSX.Element {
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
