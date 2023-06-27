import { idermContent } from "@/utils/projectsContent/iderm";
import { Card } from "antd";
import ReactMarkdown from "react-markdown";

const Iderm = () => {
  return (
    <Card>
      <ReactMarkdown>{idermContent}</ReactMarkdown>
    </Card>
  );
};

export default Iderm;
