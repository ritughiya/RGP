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
import jsonp from 'jsonp';

import Link from 'next/link';

export const revalidate = 60; // revalidate this page every 60 seconds


export default async function Home() {
  const project: ProjectType[] = await getProject();
  const profile: ProfileType[] = await getProfile();

  // const [email, setEmail] = useState('');
  // const [loading, setLoading] = useState(false);

  // const onSubmit = (e : any) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const url = 'https://ltd.us17.list-manage.com/subscribe/post?u=12889e1a71932bff10ee0d733&amp;id=cb79513709&amp;f_id=00026ae0f0'; // you can use .env file to replace this
  //   jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, { msg }) => {
  //     alert(msg);
  //     setLoading(false);
  //   });
  // };

  return (
    <div>
       {project.map((data) => (
            <div key={data._id} className=" pl-sm pr-sm font-sans text-opacity-80 tracking-[0.9px] text-sm  border-opacity-30	">
              <Navbar title={data.homeTitle} desc={data.homeDesc} reel={data.homeReelURL} reelposter={data.homeReelposter} />
              {/* <input
            value={email}
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          /> */}
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

