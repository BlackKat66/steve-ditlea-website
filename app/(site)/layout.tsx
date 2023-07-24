import Head from "next/head";
import Script from "next/script";

import Nav from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";

import { getHeaderContent } from "@/app/utils";

import "./globals.css";

// Revalidates the cache every 60 seconds, so that new content can be loaded 
// relatively quickly.
export const revalidate = 60;

export const metadata = {
  title: 'Steve Ditlea Journalist @ Large',
  description: "",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerContent = await getHeaderContent();

  // @ts-ignore
  const remoteBannerImage = headerContent[0].fields.bannerImage.fields.file.url;

  const localBannerImage =  "/top-banner2.png"; 

  const bannerImageUrl = remoteBannerImage || localBannerImage as string; 

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet"
          type="text/css" />
        <link href="css/stevestyles.css" rel="stylesheet" />
      </Head>
      <Script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" />
      <Script src="/scripts/theme.js" />
      <body>
        <Nav />
        <Header bannerImageUrl={bannerImageUrl} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
