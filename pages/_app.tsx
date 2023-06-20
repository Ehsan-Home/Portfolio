import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "antd";
import Navbar from "@/components/Navbar";

const { Header, Content, Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ehsan Ghasaei</title>
      </Head>
      <Layout>
        <Navbar />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}
