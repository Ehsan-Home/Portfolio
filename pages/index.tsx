import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Button type="primary">Click me</Button>
    </>
  );
}
