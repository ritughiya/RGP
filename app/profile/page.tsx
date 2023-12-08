// app/page.tsx

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import Navbar from "../components/Navbar";



export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <div className="">
            <Navbar/>
       {profile.map((data) => (
            <div key={data._id}>
              <div  className="p-1 font-sans text-base tracking-[0.9px] fixed w-full flex justify-between">
              {data.profileDesc && <PortableText value={data.profileDesc} />}
              {data.profileClients && <PortableText value={data.profileClients} />}
              {data.profileSpecializing && <PortableText value={data.profileSpecializing} />}
              {data.profileContact && <PortableText value={data.profileContact} />}

              </div>
            
            </div>
            ))}
    </div>
  );
}