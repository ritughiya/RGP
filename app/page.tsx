// app/page.tsx

import { getProject } from "@/sanity/sanity.query";
import { getProfile } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import {SelectedProjects} from "./components/SelectedProjects";
import {ProjectOverview} from "./components/ProjectOverview";
import {ProjectIndex} from "./components/ProjectIndex";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Link from 'next/link';

export const revalidate = 60; // revalidate this page every 60 seconds


export default async function Home() {
  const project: ProjectType[] = await getProject();
  const profile: ProfileType[] = await getProfile();

  return (
    <div>
       {project.map((data) => (
            <div key={data._id} className=" pl-sm pr-sm font-sans text-opacity-80 tracking-[0.9px] text-sm  border-opacity-30	">
              <Navbar title={data.homeTitle} desc={data.homeDesc} reel={data.homeReelURL} reelposter={data.homeReelposter} />
                <div className="border-t border-b mb-md hidden lg:block">

              <SelectedProjects projectinfos={data.selectedProjects}/>
              </div>
              <div className="">
              <ProjectOverview projectinfos={data.featprojects}/>
              </div>
              <div id="full" className="border-b pt-xxl mb-lg pb-xs hidden lg:block">
                <div className="border-t">
              <ProjectIndex projectinfos={data.indexProjects}/>
              </div>
              </div> 
              </div> 

            ))}
<Footer />
    </div>
  );
} 

