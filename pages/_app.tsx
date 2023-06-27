import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Col, ConfigProvider, Layout, Row } from "antd";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const { Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ehsan Ghasaei</title>
        <meta name="description" content="Ehsan Ghasaei Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider componentSize="large">
        <Layout>
          {/* <Navbar /> */}
          <Row justify="center">
            <Col span={20}>
              <Content>
                <Component {...pageProps} />
              </Content>
            </Col>
          </Row>

          <Contact />
        </Layout>
      </ConfigProvider>
    </>
  );
}
