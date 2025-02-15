import { createClient } from "contentful";
import type { ProductSkeleton } from "./contentfulApi.d";

//Add .env
const getClient = async () => {
  if (!process.env.VITE_CONTENTFUL_SPACE_KEY || !process.env.VITE_CONTENTFUL_ACCESS_TOKEN || !process.env.VITE_CONTENTFUL_HOST) {
    throw new Error('Missing required Contentful environment variables');
  }

  const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_KEY,
    accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    host: process.env.VITE_CONTENTFUL_HOST,
  });

  return client;
};

export const getProducts = async () => {
  try {
    const client = await getClient();
    const entries = await client.getEntries<ProductSkeleton>({
      content_type: "product",
      select: ["fields"],
    });
    return entries;
  } catch (error) {
    console.log("Error fetching data: ", error);
    return undefined;
  }
};
