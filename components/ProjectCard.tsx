import { Project } from "@/models/ProjectModel";
import { Card, Space, Tag, Typography } from "antd";
import Link from "next/link";
import styles from "@/styles/projectCard.module.css";

const { Title } = Typography;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      // style={{ height: "100%", width: "100%" }}
      actions={[
        <Link href={project.link} key={project.link}>
          Link
        </Link>,
        <Link href={`/projects/${project.to}`} key={project.to}>
          More
        </Link>,
      ]}
      title={
        <Title level={5} className={`${styles.wrap} ${styles.mt_10}`}>
          {project.title}
        </Title>
      }
    >
      <Space wrap direction="horizontal">
        {project.techs.map((tech) => (
          <Tag key={tech.name} color={tech.color}>
            {tech.name}
          </Tag>
        ))}
      </Space>
    </Card>
  );
};

export default ProjectCard;
