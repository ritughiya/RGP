'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { PortableText } from "@portabletext/react";
import {urlFor} from "@/sanity/sanity.client";
import Draggable from 'react-draggable'; 
import { Scrollchor, AnimateConfig, linear } from 'react-scrollchor';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://ltd.us17.list-manage.com/subscribe/post?u=12889e1a71932bff10ee0d733&amp;id=cb79513709&amp;f_id=00026ae0f0";


const defaultAnimate: AnimateConfig = {
  offset: 0,
  duration: 400,
  easing: linear,
};

const SimpleForm = () => <MailchimpSubscribe url={url}/>

export default function Navbar(props : any) {
  return (
<>
     <div className="hidden lg:block fixed bg-white pt-xs pb-xs top-0 z-50 left-0 text-opacity-80 font-sans text-smm tracking-[0.9px] w-full " id="#content">
      <div className="grid grid-cols-12 px-sm">
              <span className="col-start-1	col-end-3	">
              <Scrollchor className="cursor-pointer font-semibold"  to="#home">{props.title}</Scrollchor></span>
              <span className="col-start-5 col-end-7 hidden lg:inline-block ">
              <Scrollchor className="cursor-pointer lighter" to="#full">Index</Scrollchor>
                </span>
              <span className="col-span-1 col-start-10 lg:col-start-12">
              <Link className="cursor-pointer" href="mailto:info@rgp.ltd?subject=Inquiry from Website">info@rpg.ltd</Link>
              </span>
              </div>
              </div>
              
              <div className="reelcol lg:pt-xxl pt-none right-0 pr-0 lg:pr-xs lg:absolute">
              {props.reel && 
              <Draggable  bounds={{top: -35}}>
                    {/* <Draggable bounds={{top: -35, bottom:300}}>  */}
                   <div className="z-100 cursor-move hidden lg:block">
                         <video  playsInline loop autoPlay muted className="reelvideo" >
                    <source src={props.reel} type="video/mp4" />
                </video> 
                </div>     
                </Draggable> 
                  }


                  </div>

              <div   id="home" className="lg:pt-xxl pt-lg  lg:mb-xxxl text-opacity-80 font-sans text-smm tracking-[0.9px] w-full z-40 lg:pb-xl pb-none">
                <div className="flex flex-col text-left lg:text-center homedesc">
                  <div className="lg:block hidden">
                {props.desc && <PortableText value={props.desc} />}
                </div>

                <div className="lg:hidden block">
                {props.mobileDesc && <PortableText value={props.mobileDesc} />}
                </div>

                <div className="mt-none lg:mt-lg mb-sm">
                Sign up for a full pdf from Ritu Ghiya Projects.
                </div>

                <div className="simple">
                <SimpleForm/>
                </div>
                                  </div>

                    

                </div>

              




                </> 
  );
}