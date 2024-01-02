// schemas/Homepage.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";
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
      of: [{type: 'block',
      marks: {
          decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Highlight', value: 'highlight' }
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean'
                }
              ]
            },
            ]
      }}]
    },
    {
      name: 'mobileDesc',
      title: 'Description – Mobile',
      type: 'array', 
      of: [{type: 'block',
      marks: {
          decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Highlight', value: 'highlight' }
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean'
                }
              ]
            },
            ]
      }}]    },
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