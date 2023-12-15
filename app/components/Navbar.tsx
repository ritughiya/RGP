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


// use the render prop and your custom form
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div className="customform">
//         <SimpleForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "#00000030", marginBottom: "10px"  }}>sending...</div>}
//         {status === "error" && <div style={{ color: "#00000030", marginBottom: "10px"  }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "#00000030", marginBottom: "10px" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )

export default function Navbar(props : any) {
  return (
<>
     <div className="fixed bg-white pt-xs pb-xs top-0 z-50 left-0 text-opacity-80 font-sans text-smm tracking-[0.9px] w-full " id="#content">
      <div className="grid grid-cols-12 px-sm">
              <span className="col-start-1	col-end-3	">
              <Scrollchor className="cursor-pointer "  to="#home">{props.title}</Scrollchor></span>
              <span className="col-start-5 col-end-7 hidden lg:inline-block ">
              <Scrollchor className="cursor-pointer border-b border-b-black border-opacity-30 " to="#full">Index</Scrollchor>
                </span>
              <span className="col-span-1 col-start-11 lg:col-start-12">
              <Link className="cursor-pointer" href="mailto:info@rgp.ltd?subject=Inquiry from Website">info@rpg.ltd</Link>
              </span>
              </div>
              </div>
              
              <div className="reelcol pt-xl lg:pt-xxxl right-0 pr-0 lg:pr-xs lg:absolute">
              {props.reel && 
                    <Draggable bounds={{top: -35, bottom:300}}> 
                   <div className="z-100 cursor-move hidden lg:block">
                         <video  playsInline loop autoPlay muted className="reelvideo" poster={urlFor(props.reelposter && props.reelposter).url()}>
                    <source src={props.reel} type="video/mp4" />
                </video> 
                </div>     
                </Draggable> 
                  }

            {props.reel && 
                   <div className=" z-100 block lg:hidden">
                         <video preload="none"  playsInline loop autoPlay muted className="reelvideo" poster={urlFor(props.reelposter && props.reelposter).url()}>
                    <source src={props.reel} type="video/mp4" />
                </video> 
                </div>     
                  }
                  </div>

              <div   id="home" className="pt-md lg:pt-xxxl lg:mb-xxxxxl text-opacity-80 font-sans text-smm tracking-[0.9px] w-full z-40 pb-xxxl border-b lg:border-0">
                <div className="flex flex-col text-center homedesc">
                {props.desc && <PortableText value={props.desc} />}

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