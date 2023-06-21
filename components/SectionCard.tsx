import { Card } from "antd";
import { ReactNode } from "react";
import styles from "@/styles/sectionCard.module.css";

const SectionCard = ({ children }: { children: ReactNode }) => {
  return <Card className={styles.ma_b_100}>{children}</Card>;
};

export default SectionCard;
