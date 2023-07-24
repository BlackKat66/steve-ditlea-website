import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_TOKEN as string
});

export const getArticles = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "articles",
  });

  return response.items;
};

export const getHomePageCopy = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "homePage",
  });

  return response.items;
};

export const getPhotos = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "photos",
  });

  return response.items;
};

// This doesn't seem to work with the current Next.js setup, likely because we're
// loading the banner image for the header in the generic page layout component. 
export const getHeaderContent = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "headerContent",
  });

  return response.items;
};