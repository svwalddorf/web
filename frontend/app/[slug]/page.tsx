export default function Page({ params }: any): JSX.Element {
  return <div className="mt-16 mx-8 container">sub page: {JSON.stringify(params)}</div>;
}
