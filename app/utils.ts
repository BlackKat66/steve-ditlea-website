import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_TOKEN as string
});

export const getHomePageCopy = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "homePage",
  });

  return response.items;
};