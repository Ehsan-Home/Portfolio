import { Card } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Readme = ({ children }: { children: string }) => {
  return (
    <Card>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Card>
  );
};

export default Readme;
