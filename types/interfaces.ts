import { PortableTextBlock } from "sanity";

export interface ProjectInfo {
    id: number,
    projectTitle: string,
    projectClients: PortableTextBlock[],
    projectDescription: PortableTextBlock[],
    projectServices: PortableTextBlock[],
    projectServicesList: PortableTextBlock[],
    projectType: PortableTextBlock[],
    projectVideo: boolean,
    videoURL: URL,
     projectImages: Array<ImageProp>,
}
