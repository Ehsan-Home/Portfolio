import { Card, Divider, Table, Tag, Typography } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "@/styles/readme.module.css";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { Components } from "react-markdown";

const { Title, Text } = Typography;

const readmeComponents: Components = {
  h1: ({ node, ...props }) => (
    <>
      <Title level={2}>{props.children}</Title>
      <Divider />
    </>
  ),
  h2: ({ node, ...props }) => (
    <>
      <Title level={3}>{props.children}</Title>
      <Divider style={{ marginTop: "5px" }} />
    </>
  ),
  h3: ({ node, ...props }) => <Title level={4}>{props.children}</Title>,
  strong: ({ node, ...props }) => <Text strong>{props.children}</Text>,
  code: ({ node, ...props }) =>
    props.inline ? (
      <Text code>{props.children}</Text>
    ) : (
      <div className={styles.code}>{props.children}</div>
    ),
};

const Readme = ({ children }: { children: string }) => {
  return (
    <Card className={styles["mt-50"]}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={readmeComponents}>
        {children}
      </ReactMarkdown>
      <Divider />
      <Link href="/">Back to home</Link>
    </Card>
  );
};

export default Readme;
