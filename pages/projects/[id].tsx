import Readme from "@/components/Readme";
import { ReadmeModel } from "@/models/ReadmeModel";
import { client } from "@/utils/axios/axios";
import { projectIds } from "@/utils/projectsContent/projects";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(projectIds).map((projectId) => {
    return {
      params: {
        id: projectId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = params?.id?.toString();
  const res = await client.get(`repos/Ehsan-Home/${projectId}/readme`);
  if (res.request.error) {
    return {
      notFound: true,
    };
  }
  const readmeInBase64: ReadmeModel = res.data;
  const readme = atob(readmeInBase64.content);

  return {
    props: { content: readme },
    revalidate: 10 * 60,
  };
};

const Projects = ({ content }: ReadmeModel) => {
  return <Readme isFromGitHub={true}>{content}</Readme>;
};

export default Projects;
