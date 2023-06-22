import { Typography } from "antd";
import styles from "@/styles/sectionTitle.module.css";

const { Title } = Typography;

const SectionTitle = ({ titleName }: { titleName: string }) => {
  return (
    <Title level={2} className={styles.ma_t_100}>
      {titleName}
    </Title>
  );
};

export default SectionTitle;
