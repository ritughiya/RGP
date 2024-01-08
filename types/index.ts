// types/index.ts

import { PortableTextBlock } from "sanity";
import { IndexInfo } from "./interfaces";
import { SelectInfo } from "./interfaces";
import { ProjectInfo } from "./interfaces";


export type ProjectType = {
  _id: string,
  homeTitle: string,
  mobileDesc: string,
  homeDesc: string,
  homeReel: File,
  homeReelURL: URL,
  homeReelGifURL: URL,
  homeReelposter: HTMLImageElement,
  selectedProjects: SelectInfo[],
  featprojects: ProjectInfo[],
  indexProjects: IndexInfo[],
};

export type ProfileType = {
  _id: string,
  profileDesc: PortableTextBlock[],
  profileClients: PortableTextBlock[],
  profileSpecializing: PortableTextBlock[],
  profileContact: PortableTextBlock[],
};