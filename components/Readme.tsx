import { Card, Divider } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "@/styles/readme.module.css";
import Link from "next/link";

const Readme = ({ children }: { children: string }) => {
  return (
    <Card className={styles["mt-50"]}>
      <ReactMarkdown>{children}</ReactMarkdown>
      <Divider />
      <Link href="/">Back to home</Link>
    </Card>
  );
};

export default Readme;
