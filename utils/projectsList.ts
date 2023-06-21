import { Project } from "@/models/ProjectModel";
import langs from "@/utils/languages.json"
import frameworks from "@/utils/frameworks.json"
import techs from "@/utils/technologies.json"

const {Python, JavaScript, Java, Swift, Solidity, CSharp, TypeScript, SQL} = langs
const {React, Django, AntDesign, ASPNET, Next, Bootstrap, SolidJs} = frameworks
const {Blockchain, Ethereum, AWS, ML} = techs

export const projectsList:Project[] = [
    {
        title:"Privacy-preserving, First-price, Sealed-bid Auction based on Blockchain",
        image:"image",
        techs:[Python, JavaScript, React, Django, Blockchain, Solidity, Ethereum, AntDesign],
        link:"https://github.com/AKEB-asyemmtric-key-each-bidder"
    },
    {
        title:"CareChanger",
        image:"image",
        techs:[React,JavaScript, AntDesign, AWS, Java,Swift, CSharp, ASPNET],
        link:"https://carechanger.ca/"
    },
    {
        title:"InfoSphere",
        image:"image",
        techs:[TypeScript, Next, Bootstrap],
        link:"https://news-app-ehsan-home.vercel.app/"
    },
    {
        title:"URL Shortener Service",
        image:"image",
        techs:[Python, Django, JavaScript, React, SQL],
        link:"https://github.com/Ehsan-Home/URL_shortener"
    },
    {
        title:"GitHubVentory",
        image:"image",
        techs:[SolidJs, TypeScript, Bootstrap],
        link:"https://githubventory.vercel.app/"
    },
    {
        title:"GelDerm",
        image:"image",
        techs:[Swift, Java, ML],
        link:"https://4mbiotech.com/projectss/"
    },
    {
        title:"Student Collaboration Platform",
        image:"image",
        techs:[Python, Django, React, JavaScript, SQL],
        link:"https://github.com/Ehsan-Home"
    },
]