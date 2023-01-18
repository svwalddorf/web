export default function Header(): JSX.Element {
  return (
    <>
      <SmallScreenNavigation />
      <LargeScreenNavigation />
    </>
  );
}

function SmallScreenNavigation(): JSX.Element {
  return <div className="md:hidden">not yet implemented</div>;
}

function LargeScreenNavigation(): JSX.Element {
  return (
    <div className="hidden md:block bg-svw-blue-default">
      <div className="container flex flex-row">
        <div className="flex-none">logo</div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-row place-content-end">
            <a>cta 1</a>
            <a>cta 2</a>
          </div>
          <div className="flex flex-row place-content-end">
            <a>nav items 1</a>
            <a>nav items 1</a>
          </div>
        </div>
      </div>
    </div>
  );
}
