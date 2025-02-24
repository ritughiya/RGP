'use client';


import React from "react";
import { SelectInfo } from "@/types/interfaces";
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
                    <span className="col-start-1 col-end-5 hidden lg:block">
                        {projectClients && <PortableText value={projectClients} />}
                    </span>
                    <span className="col-start-1 lg:col-start-5 col-end-11 lg:col-end-10">
                        
                    { projectLink && 
                    <div className="flex">
                    <Scrollchor className="underline cursor-pointer" to={url}>


                    {projectTitle && projectTitle}
                    </Scrollchor>      
                    <div className="flex lg:hidden">                 
                    &nbsp;for&nbsp; <PortableText value={projectClients} /></div>   
                       </div> }
                    {!projectLink && projectTitle}
                    </span>
                    <span className=" col-start-10 col-end-10 hidden lg:block lg:col-start-10 lg:col-end-10 ">
                    {projectType && <PortableText value={projectType} />}
                    </span>
                    <span className="lg:text-left text-right col-start-11 col-end-13 lg:col-start-11 lg:col-end-11 text-[#00000070]  ">
                    {projectYear && <PortableText value={projectYear} />}
                    </span>
                    <span className="lg:col-start-12 lg:col-end-12 col-start-12 col-end-12 text-[#00000070] hidden lg:block">
                    {Collaboration && <PortableText value={Collaboration} />}
                    </span>
                    </div>

}
 


