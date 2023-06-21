import { LanguageModel } from "./LanguageModel";

export interface Project {
    title:string,
    image:string,
    link:string,
    techs:LanguageModel[]
}