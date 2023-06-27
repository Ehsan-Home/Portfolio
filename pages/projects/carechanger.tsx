import { CareChangerContent } from "@/utils/projectsContent/carechanger";
import { Card } from "antd";
import ReactMarkdown from "react-markdown";

const CareChanger = () => {
  return (
    <Card>
      <ReactMarkdown>{CareChangerContent}</ReactMarkdown>
    </Card>
  );
};

export default CareChanger;
