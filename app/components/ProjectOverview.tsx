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
                                    projectVideoURL={item.projectVideoURL}
                                    videomodal1={item.videomodal1}
                                    videomodal2={item.videomodal2}
                                    projectImages={item.projectImages}
                                    projectTheme={item.projectTheme}
                />
                ))} 
                </>
}

const ProjectItem: React.FC<ProjectInfo> = ({ projectTitle, projectLink, projectClients, projectDescription, projectVideoposter, projectVideoURL,  projectImages, projectTheme, videomodal1, videomodal2  }) => {

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

{(() => {
    if (projectTheme == "light") {
      return (
  <>
    <div className="Project-Info py-xxl" id={projectLink}>
      <div className="flex flex-col">
    {projectVideoURL && <div className="outer-container">
      <div className="inner-container inner-container-gif  relative ">
      <div className="transition ease-in-out delay-100  video-overlay absolute z-20 flex flex-col justify-center w-full h-full opacity-0 hover:opacity-100">
      {videomodal1 && 
      <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80 bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full px-md">
        <PortableText value={videomodal1} components={components}/>
       </button>
       </div>}
       {videomodal2 && 
       <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80  bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full	 px-md mt-xs" onClick={() => copyToClipBoard(`${videomodal2}`)}>
        Copy Link
       </button>
       </div>}

      </div>

{/* {projectVideoURL && <img loading="lazy" height="40vh" width="auto" src={projectVideoURL} />
}  */}

{projectVideoURL &&  <video preload="none" playsInline loop autoPlay muted className="" poster={urlFor(projectVideoposter && projectVideoposter).url()}>
  <source src={projectVideoURL} type="video/mp4" />
</video>  }

      </div>
    
   

</div>

}

{projectImages && <div className="outer-container">
      <div className="inner-container relative ">
      <div className="transition ease-in-out delay-100  video-overlay absolute z-20 flex flex-col justify-center w-full h-full opacity-0 hover:opacity-100">
      {videomodal1 && 
      <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80 bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full px-md">
        <PortableText value={videomodal1} components={components}/>
       </button>
       </div>}
       {videomodal2 && 
       <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80  bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full	 px-md mt-xs" onClick={() => copyToClipBoard(`${videomodal2}`)}>
        Copy Link
       </button>
       </div>}

      </div>

      { projectImages.map((projectImage, index) => (
                <div key={index} >
                  <Image
                      alt="Image of project."
                      className="proj "
                      src={urlFor(projectImage && projectImage).url()}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ top: '0', left: '0', maxWidth: '900px', maxHeight: '100%', width: 'auto', height: '40vh', objectFit: 'contain' }} // optional
                    /> 
    </div>
))} 

      </div>
    
   

</div>

}



</div>



                        <div className="text-left projtxt grid grid-cols-12 mt-sm">
                    <div className="lg:col-start-5 col-start-1 col-end-12 ">
                    {projectClients && <PortableText value={projectClients} />}
                    {projectDescription && <PortableText value={projectDescription} />}
                    </div>
                    </div>
                    </div>

  </>
      );
    } else {
      return (
        <>

<div className="Project-Info py-xxl" id={projectLink}>
      <div className="flex flex-col">
    {projectVideoURL && <div className="outer-container">
      <div className="inner-container inner-container-gif relative ">
      <div className="transition ease-in-out delay-100  video-overlay absolute z-20 flex flex-col justify-center w-full h-full opacity-0 hover:opacity-100">
      {videomodal1 && 
      <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80 bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full px-md">
        <PortableText value={videomodal1} components={components}/>
       </button>
       </div>}
       {videomodal2 && 
       <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80  bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full	 px-md mt-xs" onClick={() => copyToClipBoard(`${videomodal2}`)}>
        Copy Link
       </button>
       </div>}

      </div>

      {/* {projectVideoURL && <img height="40vh" width="auto" loading="lazy" src={projectVideoURL} />
}  */}

{projectVideoURL &&  <video preload="none" playsInline loop autoPlay muted className="" poster={urlFor(projectVideoposter && projectVideoposter).url()}>
  <source src={projectVideoURL} type="video/mp4" />
</video>  }

      </div>
    
   

</div>

}

{projectImages && <div className="outer-container">
      <div className="inner-container relative ">
      <div className="transition ease-in-out delay-100  video-overlay absolute z-20 flex flex-col justify-center w-full h-full opacity-0 hover:opacity-100">
      {videomodal1 && 
      <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80 bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full px-md">
        <PortableText value={videomodal1} components={components}/>
       </button>
       </div>}
       {videomodal2 && 
       <div>
      <button className="transition ease-in-out delay-100  hover:bg-opacity-80  bg-black bg-opacity-60 text-white  tracking-[0.9px]  text-xxs rounded-full	 px-md mt-xs" onClick={() => copyToClipBoard(`${videomodal2}`)}>
        Copy Link
       </button>
       </div>}

      </div>

      { projectImages.map((projectImage, index) => (
                <div key={index} >
                  <Image
                      alt="Image of project."
                      className="proj"
                      src={urlFor(projectImage && projectImage).url()}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ top: '0', left: '0', maxWidth: '900px', maxHeight: '100%', width: 'auto', height: '40vh', objectFit: 'contain' }} // optional
                    /> 
    </div>
))} 

      </div>
    
   

</div>

}



</div>



                        <div className="text-left projtxt grid grid-cols-12 mt-sm">
                    <div className="lg:col-start-5 col-start-1 col-end-12 ">
                    {projectClients && <PortableText value={projectClients} />}
                    {projectDescription && <PortableText value={projectDescription} />}
                    </div>
                    </div>
                    </div>
                               
                                </>

      );
    }
  })()}



                        </>

}


