import { mySkills } from "@/utils/mySkills";
import SectionCard from "./SectionCard";
import SectionTitle from "./SectionTitle";
import { Divider, Space, Tag, Typography } from "antd";

const { Title } = Typography;

const Skills = () => {
  return (
    <>
      <SectionTitle titleName="Skills" />
      <SectionCard>
        {mySkills.map((mySkill) => (
          <div key={mySkill.set}>
            <Title level={4}>{mySkill.set}</Title>
            {/* <Divider orientation="left">{mySkill.set}</Divider> */}
            <Space wrap direction="horizontal">
              {mySkill.skills.map((skill) => (
                <Tag key={skill.name} color={skill.color}>
                  {skill.name}
                </Tag>
              ))}
            </Space>
            <Divider />
          </div>
        ))}
      </SectionCard>
    </>
  );
};

export default Skills;
