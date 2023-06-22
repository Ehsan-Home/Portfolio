import { Col, Row } from "antd";
import { GithubFilled, LinkedinFilled, YoutubeFilled } from "@ant-design/icons";
import Link from "next/link";
import styles from "@/styles/footer.module.css";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <Row
        justify="center"
        align="top"
        className={styles.height_100}
        gutter={[8, 16]}
      >
        <Col span={24}>Ehsan Ghasaei @{currentYear}</Col>
        <Col span={24}>ehsan.ghasaei@gmail.com</Col>
        <Col span={1}>
          <Link
            href="https://github.com/Ehsan-Home"
            className={styles.text_white}
          >
            <GithubFilled className={styles.icon_font} />
          </Link>
        </Col>
        <Col span={1}>
          <Link
            href="https://www.linkedin.com/in/ehsanghasaei/"
            className={styles.text_white}
          >
            <LinkedinFilled className={styles.icon_font} />
          </Link>
        </Col>
        <Col span={1}>
          <Link
            href="https://www.youtube.com/channel/UCDZDIwdAJFY3G2rbz676kxw"
            className={styles.text_white}
          >
            <YoutubeFilled className={styles.icon_font} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
