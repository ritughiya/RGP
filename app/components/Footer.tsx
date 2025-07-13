import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { PortableText } from "@portabletext/react";


export default function Footer(props : any) {
  return (
<>
     <div className="text-smmm lg:text-smm text-opacity-80 pt-md lg:pt-xxxll lg:mb-xxxll mb-xxxlll text-left lg:text-center font-sans text-sm tracking-[0.8px] w-full flex flex-col justify-center footerdesc">
              
                   <span className="mb-md">
               Creative strategy, Digital concepts, Digital design & build, UX/UI interaction design, AI workflow integration, Web applications, Headless CMS, Headless e-commerce, Front & back-end development, Experimental development, Version control
              </span>
              <span className="mb-md">
              Stack: HTML, CSS, Javascript, React.js, Vue, Next, Node.js, Wordpress / PHP, Netlify, Shopify and Shopify Plus
              </span>
              <span className="mb-md">
              Previous selected clients: Google, Printed Matter, GOAT, Cory Arcangel, Marian Goodman Gallery, Gabriel Orozco
              </span>
              <span className="" id="capabilities" >
                Email: Info@rgp.ltd
                </span>
              </div>

                </> 
  );
}