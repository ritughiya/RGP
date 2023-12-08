
export default {
    name: 'featprojects',
    type: 'document',
      title: 'Featured Projects',
    fields: [
        {
            name: 'projectTitle',
            type: 'string',
            title: 'Title'
          },
          {
            title: 'Project Theme',
            name: 'projectTheme',
            type: 'string',
            options: {
              list: [
                {title: 'Light', value: 'light'},
                {title: 'Dark', value: 'dark'}
              ], 
              layout: 'radio' 
            }
          },
          {
            name: 'projectLink',
            type: 'string',
            title: 'Anchor Link - ID'
          },
          {
            name: 'projectClients',
            title: 'Clients',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'projectDescription',
            title: 'Description',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'projectServices',
            title: 'Services',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'projectServicesList',
            title: 'Services - Abbrev for List',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'projectType',
            title: 'Type',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'projectYear',
            title: 'Year',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            name: 'Collaboration',
            title: 'In Collaboration',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            title: 'Is it a video?',
            description: 'If not, images will be displayed on default',
            name: 'projectVideo',
            type: 'boolean'
          },
          {
            title: 'Video File Poster',
            name: 'projectVideoposter',
            type: 'image'
          },
          {
            title: 'Video File',
            name: 'projectVideofile',
            type: 'file'
          },
          {
            title: 'Video URL',
            name: 'videoURL',
            type: 'url'
          },
          {
            title: 'Video Modal 1',
            name: 'videomodal1',
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
            name: 'videomodal2',
            title: 'Video modal 2 LINK',
            type: 'string', 
          },
          {
            name: 'projectImages',
            title: 'Project Images',
            type: 'array', 
            of: [{type: 'image'}]
          }, 
    ]
  }