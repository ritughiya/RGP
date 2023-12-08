'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { PortableText } from "@portabletext/react";
import {urlFor} from "@/sanity/sanity.client";
import Draggable from 'react-draggable'; 


export default function Navbar(props : any) {
  return (
<>
     <div className="fixed bg-white pt-xs pb-xs top-0 z-20 left-0
     text-opacity-80 font-sans text-smm tracking-[0.9px] w-full ">
      <div className="grid grid-cols-12 px-sm">
              <span className="col-span-2 col-start-1	col-end-4	">
              <Link className="cursor-pointer "  href="#home">{props.title}</Link></span>
              <span className="col-start-5 col-end-7">
              <Link className="cursor-pointer border-b border-b-black border-opacity-30 " href="#index">Index</Link>
                </span>
              <span className="col-span-1 col-start-12">
                <Link className="cursor-pointer " href="#index">
                  info@rpg.ltd
                </Link>
              </span>
              </div>
              </div>

              <div   id="home" className="pt-xxl mb-xxxll text-opacity-80 grid grid-cols-12 font-sans text-smm tracking-[0.9px] w-full z-40">
                <div className="col-start-5 col-end-9 homedesc ">
                {props.desc && <PortableText value={props.desc} />}
                                  </div>
                                  
                   <div className="col-start-11 col-end-13 ">
                    
                   {props.reel && 
                    <Draggable bounds={{top: -35}}> 
                   <div className="z-100 cursor-move absolute">
                         <video preload="none"  loop autoPlay muted className="reelvideo" poster={urlFor(props.reelposter && props.reelposter).url()}>
                    <source src={props.reel} type="video/mp4" />
                </video> 
                </div>     
                </Draggable> 
 }
                </div>
                </div>


                </> 
  );
}