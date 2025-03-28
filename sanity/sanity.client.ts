// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'

const config: ClientConfig = {
  projectId: "036bjsrb",
  dataset: "production",
  apiVersion: "2025-03-25",
  useCdn: false,
};

const client = createClient(config);

export default client;

export const urlFor = (source : any ) => createImageUrlBuilder(client).image(source);
