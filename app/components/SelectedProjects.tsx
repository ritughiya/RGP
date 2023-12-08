'use client';


import React from "react";
import { SelectInfo } from "@/types/interfaces";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity.client";
import Link from 'next/link';



interface ProjectProps {
    projectinfos: SelectInfo[];
}


export const SelectedProjects: React.FC<ProjectProps> = ({projectinfos}: ProjectProps) => {

    return <>
            {projectinfos && projectinfos.map((item, index) => (
                         <SelectedProjectItem key={index}
                                    projectTitle={item.projectTitle}
                                    projectClients={item.projectClients}
                                    projectServicesList={item.projectServicesList}
                                    projectYear={item.projectYear}
                                    Collaboration={item.Collaboration}
                                    projectType={item.projectType}
                                    projectLink={item.projectLink}
                                    projectTheme={item.projectTheme}
                                   
                />
            ))} 
    </>
}

const SelectedProjectItem: React.FC<SelectInfo> = ({projectTitle, projectClients, projectServicesList, projectType, projectLink, projectTheme, projectYear, Collaboration }) => {

    var url = `#${projectLink}`


    return     <div className="Selected-Project-Info  grid grid-cols-12">
                    <span className="col-start-1 col-end-5">
                        {projectClients && <PortableText value={projectClients} />}
                    </span>
                    <span className="col-start-5 col-end-9">
                    { projectLink && <Link className=" border-b border-b-black border-opacity-30 cursor-pointer" href={url}>
                    {projectTitle && projectTitle}
                    </Link> }
                    {!projectLink && projectTitle}
                    </span>
                    <span className=" col-start-10 col-end-10">
                    {projectType && <PortableText value={projectType} />}
                    </span>
                    <span className=" col-start-11 col-end-11 ">
                    {projectYear && <PortableText value={projectYear} />}
                    </span>
                    <span className=" col-start-12 col-end-12 ">
                    {Collaboration && <PortableText value={Collaboration} />}
                    </span>
                    </div>

}
 


