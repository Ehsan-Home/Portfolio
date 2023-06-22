import langs from "@/utils/languages.json"
import frameworks from "@/utils/frameworks.json"
import techs from "@/utils/technologies.json"

const {JavaScript, TypeScript, Java, Swift, SQL,  Python, CSharp} = langs
const {React, Next, AntDesign, Bootstrap, Django, SolidJs} = frameworks
const {Blockchain, Ethereum,Firebase,Auth0,AWS,Git,GitHub,GitLab, Docker, NoSQL,RestAPI} = techs


export const mySkills = [
    {
        set:"Front-end",
        skills: [JavaScript, TypeScript, React, Next,AntDesign, Bootstrap, SolidJs]
    },
    {
        set:"Back-end",
        skills:[Python, Django, SQL, CSharp, AWS, Auth0,RestAPI]
    },
    {
        set:"Technologies",
        skills:[Git,GitHub,GitLab,Blockchain,Ethereum, Firebase, Docker, NoSQL]
    },
    {
        set:"Mobile",
        skills:[Java,Swift]
    }
]