import { Typography } from "antd";

const { Title } = Typography;

const SectionTitle: React.FC<{ titleName: string }> = ({ titleName }) => {
  return <Title level={2}>{titleName}</Title>;
};

export default SectionTitle;
