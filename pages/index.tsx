import Navbar from "@/components/Navbar";
import { Button, Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
