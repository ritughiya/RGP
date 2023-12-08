import  projectImages  from  './projectImages'

export default {
    name: 'Projects',
    type: 'document',
      title: 'Projects',
    fields: [
        {
            name: 'projectTitle',
            type: 'string',
            title: 'Title'
          },
          {
            title: 'Is it a video?',
            description: 'If not, images will be displayed on default',
            name: 'projectVideo',
            type: 'boolean'
          },
          {
            title: 'Video URL',
            name: 'videoURL',
            type: 'url'
          },
      {
        name: 'projectImages',
        title: 'Images',
        type: 'array', 
        of: [{type: 'projectImages'}]
      },
      {
        title: 'Is it forthcoming?',
        name: 'projectForthcoming',
        type: 'boolean'
      },
      {
        name: 'projectId',
        type: 'string',
        title: 'Project ID – Automates Jumping to Links'
      }
    ]
  }