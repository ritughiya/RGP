// types/index.ts

import { PortableTextBlock } from "sanity";
import { ProjectInfo } from "./interfaces";


export type ProjectType = {
  _id: string,
  homeTitle: string,
  homeDesc: string,
  homeReel: File,
  homeReelposter: HTMLImageElement,
  selectedProjects: ProjectInfo[],
  featprojects: ProjectInfo[],
  indexProjects: ProjectInfo[],
};

export type ProfileType = {
  _id: string,
  profileDesc: PortableTextBlock[],
  profileClients: PortableTextBlock[],
  profileSpecializing: PortableTextBlock[],
  profileContact: PortableTextBlock[],
};