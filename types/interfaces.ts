import { PortableTextBlock } from "sanity";

export interface ProjectInfo {
    id: number,
    projectLink: string,
    projectTitle: string,
    projectClients: PortableTextBlock[],
    projectDescription: PortableTextBlock[],
    projectServices: PortableTextBlock[],
    projectServicesList: PortableTextBlock[],
    projectYear: string,
    Collaboration: string,
    projectType: PortableTextBlock[],
    projectVideo: boolean,
    videoURL: URL,
}
