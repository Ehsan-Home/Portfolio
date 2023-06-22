import { Card } from "antd";
import { ReactNode } from "react";

const SectionCard = ({ children }: { children: ReactNode }) => {
  return <Card>{children}</Card>;
};

export default SectionCard;
