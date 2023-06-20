import { Col, Row, Typography } from "antd";
import styles from "@/styles/hero.module.css";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <Row gutter={8} align="middle" className={styles.heroHeight}>
      <Col span={18}>
        <Title level={2}>Hey, I&apos;m Ehsan 👋🏻</Title>
        <Paragraph>This is the paragraph</Paragraph>
      </Col>
      <Col span={6}>
        <Image
          src="/images/profile.jpeg"
          width={200}
          height={200}
          alt="profile-image"
        />
      </Col>
    </Row>
  );
};

export default Hero;
