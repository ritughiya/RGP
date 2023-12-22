// schemas/Homepage.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";
import  about  from  './profile'
import  projects  from  './projects'
import  featprojects  from  './featprojects'


const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: BiUser,
  fields: [
    {
      name: "homeTitle",
      title: "Title",
      type: "string",
    },
    {
      name: 'homeDesc',
      title: 'Description',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'mobileDesc',
      title: 'Description – Mobile',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'homeReel',
      title: 'Reel',
      type: 'cloudinary.asset'
    },
    {
      name: 'homeReelposter',
      title: 'Reel Poster',
      type: 'image'
    },
    {
      name: 'selectedProjects',
      title: 'Selected Projects',
      type: 'array', 
      of: [
        {
         type: 'reference',
         to: { type: 'featprojects'},
        }
      ],
    },
    {
      name: 'featprojects',
      title: 'Featured Projects',
      type: 'array', 
      of: [
        {
         type: 'reference',
         to: { type: 'featprojects'},
        }
      ],
    },
    {
      name: 'indexProjects',
      title: 'Projects Index',
      type: 'array', 
      of: [
        {
         type: 'reference',
         to: { type: 'featprojects'},
        }
      ], 
    },
 ],
};

export default homepage;