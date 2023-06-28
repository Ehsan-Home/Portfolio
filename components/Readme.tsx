import { Card, Divider, Tag, Typography } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "@/styles/readme.module.css";
import Link from "next/link";
import remarkGfm from "remark-gfm";

const { Title, Text } = Typography;

const Readme = ({ children }: { children: string }) => {
  return (
    <Card className={styles["mt-50"]}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
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
          h3: ({ node, ...props }) => (
            <>
              <Title level={4}>{props.children}</Title>
              <Divider style={{ marginTop: "5px" }} />
            </>
          ),
          strong: ({ node, ...props }) => <Text strong>{props.children}</Text>,
          code: ({ node, ...props }) => <Text code>{props.children}</Text>,
        }}
      >
        {children}
      </ReactMarkdown>
      <Divider />
      <Link href="/">Back to home</Link>
    </Card>
  );
};

export default Readme;
