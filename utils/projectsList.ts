import { Project } from "@/models/ProjectModel";
import langs from "@/utils/languages.json"
import frameworks from "@/utils/frameworks.json"
import techs from "@/utils/technologies.json"
import { projectIds } from "./projectsContent/projects";

const {Python, JavaScript, Java, Swift, Solidity, CSharp, TypeScript, SQL} = langs
const {React, Django, AntDesign, ASPNET, Next, Bootstrap, SolidJs} = frameworks
const {Blockchain, Ethereum, AWS, ML} = techs
const {FPSBABlockchain, URLShortener,GitHubVentory,InfoSphere } = projectIds

/// *to* attribute is used for *Links* in Project Cards
export const projectsList:Project[] = [
    {
        title:"Privacy-preserving, First-price, Sealed-bid Auction based on Blockchain",
        image:"image",
        techs:[Python, JavaScript, React, Django, Blockchain, Solidity, Ethereum, AntDesign],
        link:"https://github.com/AKEB-asyemmtric-key-each-bidder",
        to: FPSBABlockchain
    },
    {
        title:"CareChanger",
        image:"image",
        techs:[React,JavaScript, AntDesign, AWS, Java,Swift, CSharp, ASPNET],
        link:"https://carechanger.ca/",
        to:"carechanger"
    },
    {
        title:"InfoSphere",
        image:"image",
        techs:[TypeScript, Next, Bootstrap],
        link:"https://news-app-ehsan-home.vercel.app/",
        to:InfoSphere
    },
    {
        title:"URL Shortener Service",
        image:"image",
        techs:[Python, Django, JavaScript, React, SQL],
        link:"https://github.com/Ehsan-Home/URL_shortener",
        to:URLShortener
    },
    {
        title:"GitHubVentory",
        image:"image",
        techs:[SolidJs, TypeScript, Bootstrap],
        link:"https://githubventory.vercel.app/",
        to:GitHubVentory
    },
    {
        title:"iDerm",
        image:"image",
        techs:[Swift, Java, ML],
        link:"https://4mbiotech.com/projectss/",
        to:"iderm"
    },
    {
        title:"Student Collaboration Platform",
        image:"image",
        techs:[Python, Django, React, JavaScript, SQL],
        link:"https://github.com/Ehsan-Home",
        to:"student-collaboration"
    },
]