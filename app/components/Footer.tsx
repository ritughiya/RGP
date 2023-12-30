import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { PortableText } from "@portabletext/react";


export default function Footer(props : any) {
  return (
<>
     <div className="text-opacity-80 px-xxl  mt-xxxxl mb-xxxl font-sans text-sm tracking-[0.9px] w-full flex flex-col justify-center">
     <span className="text-center">
                Ritu Ghiya Projects
              </span>
              <span className="text-center">
              React.js, Next.js, Javascript, Headless, Shopify, Wordpress/PHP
              </span>
              <span className="text-center">
                Email - info@rgp.ltd
                </span>
              </div>

                </> 
  );
}