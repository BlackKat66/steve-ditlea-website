import { createClient } from 'contentful';

export const contentfulClient = createClient({
  // Remove defaults once deployment isssues are fixed
  space: process.env.CONTENTFUL_SPACE as string || "089jsgdf", 
  accessToken: process.env.CONTENTFUL_TOKEN as string || "83490284092834092384"
});

export const getHomePageCopy = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "homePage",
  });

  return response.items;
};