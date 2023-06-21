import { Avatar, List, Space, Tag } from "antd";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import uvicImage from "@/public/images/uvic.png";
import iutImage from "@/public/images/iut.svg";

const data = [
  {
    title: "University of Victoria (UVIC)",
    titleLink: "https://www.uvic.ca/",
    program: "Master of Engineering (M.Eng)",
    GPA: "3.66 / 4.0",
    avatar: uvicImage,
    project:
      "First-price, Privacy-preserving, Sealed-bid Auction System based on Blockchain",
    projectLink: "https://dspace.library.uvic.ca/handle/1828/14292",
    time: "2019 - 2022",
  },
  {
    title: "Isfahan University of Technology (IUT)",
    titleLink: "https://english.iut.ac.ir/",
    program: "Bachelor of Science (B.Sc)",
    GPA: "3.6 / 4.0",
    avatar: iutImage,
    project: "Care Rental System based on Blockchain",
    projectLink: null,
    time: "2013 - 2018",
  },
];

const Education = () => {
  return (
    <>
      <SectionTitle titleName="Education" />
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item extra={<div>{item.time}</div>}>
            <List.Item.Meta
              avatar={
                <Avatar
                  size="large"
                  src={<Image src={item.avatar} alt="uvic-image" />}
                />
              }
              title={<Link href={item.titleLink}>{item.title}</Link>}
              description={
                <Space direction="vertical">
                  {item.program}
                  <div>
                    Project:{" "}
                    {item.projectLink ? (
                      <Link href={item.projectLink}>{item.project}</Link>
                    ) : (
                      item.project
                    )}
                  </div>
                  <Tag>GPA: {item.GPA}</Tag>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Education;
