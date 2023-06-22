import { Col, Row } from "antd";
import SectionTitle from "./SectionTitle";
import { projectsList } from "@/utils/projectsList";
import ProjectCard from "./ProjectCard";
import styles from "@/styles/commons.module.css";

const Projects = () => {
  return (
    <>
      <SectionTitle titleName="Projects" />
      <Row gutter={[8, 8]}>
        {projectsList.map((project) => (
          <Col
            lg={8}
            md={12}
            sm={24}
            className={styles.w_100}
            key={project.title}
          >
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;
