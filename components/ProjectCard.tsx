import { Project } from "@/models/ProjectModel";
import { Card, Space, Tag, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Title } = Typography;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      cover={null}
      actions={[
        <Link href={project.link} key={project.link}>
          Link
        </Link>,
      ]}
    >
      <Title level={5}>{project.title}</Title>
      <Space wrap direction="horizontal">
        {project.techs.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </Space>
    </Card>
  );
};

export default ProjectCard;
