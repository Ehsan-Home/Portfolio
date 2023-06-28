import { Card } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "@/styles/readme.module.css";

const Readme = ({ children }: { children: string }) => {
  return (
    <Card className={styles["mt-50"]}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Card>
  );
};

export default Readme;
