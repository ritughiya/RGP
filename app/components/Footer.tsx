import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { PortableText } from "@portabletext/react";


export default function Footer(props : any) {
  return (
<>
     <div className="text-opacity-80  mt-xxxxl mb-xxxl font-sans text-sm tracking-[0.9px] w-full flex flex-col justify-center">
     <span className="text-center">
                <Link className="cursor-pointer " href="#index">Ritu Ghiya Projects</Link>
              </span>
              <span className="text-center">
                <Link className="cursor-pointer "  href="#profile">info@rgp.ltd</Link>
                </span>
              <span className="text-center">
                <Link className="cursor-pointer " href="#index">@rituqhiya</Link>
              </span>
              </div>

                </> 
  );
}