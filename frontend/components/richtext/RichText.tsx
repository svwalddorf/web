import ReactMarkdown from "react-markdown";

type Props = {
  content?: string | null;
};
export default function RichText({ content }: Props): JSX.Element | null {
  if (content) {
    return (
      <div className="mx-4">
        <ReactMarkdown skipHtml>{content}</ReactMarkdown>
      </div>
    );
  }
  return null;
}
