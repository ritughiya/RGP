import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'


export default defineConfig({
  name: 'default',
  title: 'RGP',

  projectId: '036bjsrb',
  dataset: 'production',
  basePath: "/studio",
  apiVersion: "2024-02-14",


  plugins: [deskTool(), visionTool(), media(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
