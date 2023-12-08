'use client';


import React from "react";
import ProjectInfo from "@/types/interfaces";
import { PortableText } from "@portabletext/react";
import ImageInfo from "@/types/interfaces";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity.client";
import Link from 'next/link';



interface ProjectProps {
    projectinfos: ProjectInfo[];
}


export const ProjectIndex: React.FC<ProjectProps> = ({projectinfos}: ProjectProps) => {

    return <>
    {projectinfos && projectinfos.map((item, index) => (
                 <ProjectIndexItem key={index}
                                    projectLink={item.projectLink}
                                    projectTitle={item.projectTitle}
                                    projectClients={item.projectClients}
                                    projectServicesList={item.projectServicesList}
                                    projectYear={item.projectYear}
                                    Collaboration={item.Collaboration}
                                    projectType={item.projectType}
                                   >
                </ProjectIndexItem>
            ))} 
            </>
}

const ProjectIndexItem: React.FC<ProjectInfo> = ({projectTitle, projectLink, projectClients, projectServicesList, projectType, projectYear, Collaboration }) => {

    var url = `#${projectLink}`


    return  <div className="Project-Index-Info  grid grid-cols-12">
 <span className="col-start-1 col-end-5">
                        {projectClients && <PortableText value={projectClients} />}
                    </span>
                    <span className="col-start-5 col-end-9">
                    { projectLink && <Link className=" border-b cursor-pointer" href={url}>
                    {projectTitle && projectTitle}
                    </Link> }
                    {!projectLink && projectTitle}
                    </span>
                    <span className=" col-start-10 col-end-10 ">
                    {projectType && <PortableText value={projectType} />}
                    </span>
                    <span className=" col-start-11 col-end-11">
                    {projectYear && <PortableText value={projectYear} />}
                    </span>
                    <span className=" col-start-12 col-end-12">
                    {Collaboration && <PortableText value={Collaboration} />}
                    </span>
    </div>
}
 


