'use client';


import React from "react";
import { IndexInfo } from "@/types/interfaces";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity.client";
import Link from 'next/link';
import { Scrollchor, AnimateConfig, linear } from 'react-scrollchor';


const defaultAnimate: AnimateConfig = {
  offset: 0,
  duration: 400,
  easing: linear,
};



interface ProjectProps {
    projectinfos: IndexInfo[];
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
                                   
                />
            ))} 
            </>
}

const ProjectIndexItem: React.FC<IndexInfo> = ({projectTitle, projectLink, projectClients, projectServicesList, projectType, projectYear, Collaboration }) => {

    var url = `#${projectLink}`


    return  <div className="Project-Index-Info  grid grid-cols-12">
                    <span className="col-start-1 col-end-5">
                        {projectClients && <PortableText value={projectClients} />}
                    </span>
                    <span className="col-start-5 col-end-12 lg:col-end-10">
                    { projectLink && <Scrollchor className=" border-b border-b-black border-opacity-30 cursor-pointer" to={url}>
                    {projectTitle && projectTitle}
                    </Scrollchor> }
                    {!projectLink && projectTitle}
                    </span>
                    <span className=" col-start-10 col-end-10 hidden lg:block lg:col-start-10 lg:col-end-10 ">
                    {projectType && <PortableText value={projectType} />}
                    </span>
                    <span className=" col-start-12 col-end-12 lg:col-start-11 lg:col-end-11 ">
                    {projectYear && <PortableText value={projectYear} />}
                    </span>
                    <span className="lg:col-start-12 lg:col-end-12 col-start-12 col-end-12 hidden lg:block">
                    {Collaboration && <PortableText value={Collaboration} />}
                    </span>
    </div>
}
 


