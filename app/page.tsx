// app/page.tsx


import React, { useState } from 'react';
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
import Script from 'next/script';


export const revalidate = 60;

export default async function Home() {
  const project: ProjectType[] = await getProject();
  const profile: ProfileType[] = await getProfile();


  return (
    <>
        <Script id="analytics1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-4QLMD7K8DH`}
      />
  
      <Script id="analytics2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-4QLMD7K8DH');
        `}
      </Script>
    <div>



       {project.map((data) => (
            <div key={data._id} className="lg:px-sm px-md font-sans text-opacity-80 tracking-[0.8px] text-smmm lg:text-smm border-opacity-30	">
              <Navbar title={data.homeTitle} desc={data.homeDesc} mobileDesc={data.mobileDesc} reel={data.homeReelURL} reelgif={data.homeReelGifURL} reelposter={data.homeReelposter} />
              
                <div className="lg:border-t lg:border-b mb-xxll lg:mb-xs ">

              <SelectedProjects projectinfos={data.selectedProjects}/>
              </div>
              <div className="mt-none lg:mt-none lg:border-b pb-xl lg:pb-none lg:border-none">
              <ProjectOverview projectinfos={data.featprojects}/>
              </div>


              <div id="full" className="lg:border-b pt-xxl mb-lg pb-xs hidden lg:block">
                <div className="lg:border-t">
              <ProjectIndex projectinfos={data.indexProjects}/>
              </div>
              </div> 
              <div className="lg:block lg:pb-sm">
              <div className="lg:border-b mb-md">
              <Footer />
              </div>
              </div>
              </div> 

            ))}
    </div>
    </>
  );
} 

