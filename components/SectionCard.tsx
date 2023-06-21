import { Card } from "antd";
import { ReactNode } from "react";

// const func: T1 = (name: T1) => {
//   return name + "   ";
// };

const SectionCard = ({ children }: { children: ReactNode }) => {
  return <Card>{children}</Card>;
};

export default SectionCard;
