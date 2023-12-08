export default {
    name: 'profile',
    type: 'document',
      title: 'Profile',
    fields: [
      {
        name: 'profileDesc',
        title: 'Description',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        name: 'profileClients',
        title: 'Clients & Collaborators',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        name: 'profileSpecializing',
        title: 'Specalizing In',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        name: 'profileContact',
        title: 'Contact',
        type: 'array', 
        of: [{type: 'block'}]
      },
    ]
  }