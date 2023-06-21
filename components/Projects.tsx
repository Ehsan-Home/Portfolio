import { Col, Row } from "antd";
import SectionTitle from "./SectionTitle";
import { projectsList } from "@/utils/projectsList";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <SectionTitle titleName="Projects" />
      <Row gutter={[8, 8]}>
        {projectsList.map((project) => (
          <Col lg={8} md={12} sm={24} key={project.title}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;
