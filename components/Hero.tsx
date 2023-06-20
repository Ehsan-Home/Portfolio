import { Col, Row, Typography } from "antd";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import profilePic from "@/public/images/profile.jpeg";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <Row gutter={8} align="middle" className={styles.heroHeight}>
      <Col lg={18} md={18} sm={24}>
        <Title level={2}>Hey, I&apos;m Ehsan 👋🏻</Title>
        <Paragraph type="secondary">
          Welcome to my page! I&apos;m a software engineer, and I usually code
          in React and Python.
        </Paragraph>
      </Col>
      <Col lg={6} md={6} sm={24}>
        <Image className={styles.image} src={profilePic} alt="profile-image" />
      </Col>
    </Row>
  );
};

export default Hero;
