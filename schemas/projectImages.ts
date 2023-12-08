export default {
    name: 'projectImages',
    type: 'document',
      title: 'Project Images',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image'
          },
          {
            title: 'Size',
            name: 'size',
            type: 'string',
            options: {
              list: [
                {title: 'Small', value: 'small'},
                {title: 'Medium', value: 'medium'},
                {title: 'Large', value: 'large'},
              ], 
            }
          },
      {
        name: 'caption',
        title: 'Caption',
        type: 'array', 
        of: [{type: 'block'}]
      },
    ]
  }