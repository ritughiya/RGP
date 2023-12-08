// app/page.tsx

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import {AboutOverview} from "../components/AboutOverview";
import {ProjectOverview} from "../components/ProjectOverview";
import {ImageOverview} from "../components/ImageOverview";



export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <div className="p-1/5 font-sans text-sm tracking-[0.9px]">
       {profile.map((data) => (
            <div key={data._id} className="flex">
              <div className="pr-1/5 fixed w-1/5 flex flex-col gap-[20px] text-opacity-80">
              <span className="">{data.homeTitle}</span>
              <PortableText value={data.homeDesc} />
              <AboutOverview aboutinfos={data.About}/>
              </div>
              <div className="pr-1/5 w-1/5 fixed ml-col2 flex flex-col gap-[20px]">
              <span className="text-opacity-80">Projects</span>
              <ProjectOverview projectinfos={data.Projects}/>
              </div>
               <div className="ml-col3 w-full	">
              <ImageOverview projectinfos={data.Projects}/>
              </div> 
            </div>
            ))}
    </div>
  );
}