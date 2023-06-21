import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Button, Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <Projects />
    </>
  );
}
