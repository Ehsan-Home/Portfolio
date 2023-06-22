import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Col, Layout, Row } from "antd";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import styles from "@/styles/footer.module.css";

const { Content, Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ehsan Ghasaei</title>
      </Head>
      <Layout>
        <Navbar />
        <Row justify="center">
          <Col span={20}>
            <Content>
              <Component {...pageProps} />
            </Content>
          </Col>
        </Row>

        <Contact />
      </Layout>
    </>
  );
}
