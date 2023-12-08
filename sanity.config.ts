import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'


export default defineConfig({
  name: 'default',
  title: 'RGP',

  projectId: '036bjsrb',
  dataset: 'production',
  basePath: "/studio",
  apiVersion: "2022-03-07",


  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
