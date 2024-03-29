import { ImageProps } from "next/image";
import { PortableTextBlock } from "sanity";

export interface IndexInfo {
    projectLink: string,
    projectTitle: string,
    projectClients: PortableTextBlock[],
    projectServicesList: PortableTextBlock[],
    projectYear: PortableTextBlock[],
    Collaboration: PortableTextBlock[],
    projectType: PortableTextBlock[],
}

export interface SelectInfo {
    projectLink: string,
    projectTitle: string,
    projectClients: PortableTextBlock[],
    projectServicesList: PortableTextBlock[],
    projectYear: PortableTextBlock[],
    Collaboration: PortableTextBlock[],
    projectType: PortableTextBlock[],
    projectTheme: string
}


export interface ProjectInfo {
    projectLink: string,
    projectTitle: string,
    projectClients: PortableTextBlock[],
    projectDescription: PortableTextBlock[],
    projectVideoposter: HTMLImageElement,
    videoID: string,
    projectVideoURL: string,
    cloudURL: string,
    gifURL: string,
    videomodal1: PortableTextBlock[],
    videomodal2: string,
    projectImages: Array<ImageProps>,
    projectTheme: string,
}
