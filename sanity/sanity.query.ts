// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProject() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      _id,
      homeTitle,
      "homeReelURL": homeReel.asset->url,
      homeReelposter,
      homeDesc,
      mobileDesc,
      selectedProjects[]->,
      featprojects[]->{
        projectTitle,
        projectTheme,
        projectLink,
        projectClients,
        projectDescription,
        projectServices,
        projectServicesList,
        projectType,
        projectVideo,
        "projectVideoURL": projectVideofile.asset->url,
        projectVideoposter,
        videoURL,
        projectImages,
        videomodal1,
        videomodal2
      },
      indexProjects[]-> 
    }`
  );
}

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      profileDesc,
      profileClients,
      profileSpecializing,
      profileContact }`
  );
}