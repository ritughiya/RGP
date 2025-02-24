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

  return (
<>
     <div className="hidden lg:block fixed bg-white pt-xs pb-xs top-0 z-50 left-0 text-opacity-80 font-sans text-smm tracking-[0.8px] w-full " id="#content">
      <div className="grid grid-cols-12 px-sm">
              <span className="col-start-1	col-end-3	">
              <Scrollchor className="cursor-pointer bolder text-[#000000de]"  to="#home">{props.title}</Scrollchor></span>
              <span className="col-start-5 col-end-6 hidden lg:inline-block ">
              <Scrollchor className="cursor-pointer bolder text-[#00000070]" to="#full">Index</Scrollchor>
                </span>
                <span className="col-start-10 col-end-10 hidden lg:inline-block ">
              <Scrollchor className="cursor-pointer bolder text-[#00000070]" to="#capabilities">Capabilities</Scrollchor>
                </span>
              </div>
              </div>

            

                  <div className="reelcol pt-smm lg:pt-xxxlll pb-lg lg:pb-none right-0 pr-0 lg:pr-xs lg:absolute">
              {props.reel && 
                    <Draggable bounds={{top: -35, bottom:300}}> 
                   <div className="z-100 cursor-move lg:block hidden">
                         <video  playsInline loop autoPlay muted className="reelvideo" poster={urlFor(props.reelposter && props.reelposter).url()}>
                    <source src={props.reel} type="video/mp4" />
                </video> 
                </div>     
                </Draggable> 
                  }

                {props.reelgif && 
                   <div className="z-100 lg:hidden block">
                        <img src={props.reelgif} />
                </div>     
                  }

                  </div>

              <div   id="home" className="lg:pt-xxxl lg:pb-0 pt-0 pb-xl mb-0  lg:mb-xxxlll text-opacity-80 font-sans text-smmm lg:text-smm tracking-[0.8px] w-full z-40 ">
                <div className="flex flex-col text-left lg:text-center homedesc text-[#000000de]">
                  <div className="lg:block hidden">
                {props.desc && <PortableText value={props.desc} components={components}/>}
                

                </div>

                <div className="lg:hidden block">
                {props.mobileDesc && <PortableText value={props.mobileDesc} components={components}/>}
                </div>

                <div className="mt-none mb-sm">
                Sign up for a pdf from Ritu Ghiya Projects.
                </div>

                <div className="simple">
                <SimpleForm/>
                </div>
                                  </div>

                    

                </div>

              




                </> 
  );
}