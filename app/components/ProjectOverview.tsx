'use client';

import React, { useState } from 'react';
import { ProjectInfo } from "@/types/interfaces";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {urlFor} from "@/sanity/sanity.client";


interface ProjectProps {
    projectinfos: ProjectInfo[];
}




export const ProjectOverview: React.FC<ProjectProps> = ({projectinfos}: ProjectProps) => {

    return <>
                {projectinfos && projectinfos.map((item, index) => (
                         <ProjectItem key={index}
                                    projectTitle={item.projectTitle}
                                    projectLink={item.projectLink}
                                    projectClients={item.projectClients}
                                    projectDescription={item.projectDescription}
                                    projectVideoposter={item.projectVideoposter}
                                    videoID = {item.videoID}
                                    projectVideoURL={item.projectVideoURL}
                                    cloudURL={item.cloudURL}
                                    gifURL={item.gifURL}
                                    videomodal1={item.videomodal1}
                                    videomodal2={item.videomodal2}
                                    projectImages={item.projectImages}
                                    projectTheme={item.projectTheme}
                />
                ))} 
                </>
}

const ProjectItem: React.FC<ProjectInfo> = ({ projectTitle, projectLink, projectClients, projectDescription, projectVideoposter, projectVideoURL, cloudURL, gifURL, videoID, projectImages, projectTheme, videomodal1, videomodal2  }) => {

  const [copySuccess, setCopySuccess] = useState('');
  
    const copyToClipBoard = async (copyMe : any) => {
      try {
        await navigator.clipboard.writeText(copyMe);
        setCopySuccess('Copied!');
      } catch (err) {
        setCopySuccess('Failed to copy!');
      }
    };

    const components = {
      marks: { 
      

        link: ({value,children} : {value?:any, children?:any}) => {
          const { blank, href } = value
          return blank ?
            <a href={href} target="_blank" rel="noopener">{children}</a>
            : <a href={href}>{children}</a>
        }
      }
    }


    return <>



<div className="text-smmm lg:text-smm  text-[#000000de] Project-Info py-xxll lg:py-xxxl" id={projectLink}>

<div className="flex flex-col">
{cloudURL && <div className="outer-container">
<div className="inner-container inner-container-gif  relative ">
<div className="transition ease-in-out delay-100  video-overlay absolute z-20 flex flex-col justify-center w-full h-full opacity-0 hover:opacity-100">
{videomodal1 && 
<div>
<button className="transition ease-in-out delay-100  hover:bg-opacity-80 bg-black bg-opacity-60 text-white  tracking-[0.8px]  text-xxs  px-md">
  <PortableText value={videomodal1} components={components}/>
 </button>
 </div>}
 {videomodal2 && 
 <div>
<button className="transition ease-in-out delay-100  hover:bg-opacity-80  bg-black bg-opacity-60 text-white  tracking-[0.8px]  text-xxs  px-md mt-xs" onClick={() => copyToClipBoard(`${videomodal2}`)}>
  Copy Link
 </button>
 </div>}

</div>

<video preload="none" playsInline loop autoPlay muted className="hidden lg:block" >
        <source src={cloudURL} type="video/mp4" />
        <meta itemProp="name" content={projectTitle} />
      </video>

      {gifURL && 
                   <div className="z-100 lg:hidden block">
                        <img alt={projectTitle} src={gifURL} />
                </div>     
                  }


</div>



</div>



}

{projectImages && <div className="outer-container">
      <div className="inner-container relative ">
      <div className="transition ease-in-out delay-100  video-overlay absolute z-20 flex flex-col justify-center w-full h-full opacity-0 hover:opacity-100">
      {videomodal1 && 
      <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80 bg-black bg-opacity-60 text-white  tracking-[0.8px]  text-xxs px-md">
        <PortableText value={videomodal1} components={components}/>
       </button>
       </div>}
       {videomodal2 && 
       <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80  bg-black bg-opacity-60 text-white  tracking-[0.8px]  text-xxs px-md mt-xs" onClick={() => copyToClipBoard(`${videomodal2}`)}>
        Copy Link
       </button>
       </div>}

      </div>

      { projectImages.map((projectImage, index) => (
                <div key={index} >
                  <Image
                      alt={projectTitle}
                      className="proj "
                      src={urlFor(projectImage && projectImage).url()}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ top: '0', left: '0', maxHeight: '420px', width: '100%', height: '50vh', objectFit: 'contain' }} // optional
                    /> 
    </div>
))} 

      </div>
    
   

</div>

}



</div>



                        <div className="text-left projtxt grid grid-cols-12 mt-sm">
                    <div className="lg:col-start-5 col-start-1 col-end-12 standard-lh">
                    {projectClients && <PortableText value={projectClients} />}
                    {projectDescription && <PortableText value={projectDescription} />}
                    </div>
                    </div>
                    </div>



                        </>

}


