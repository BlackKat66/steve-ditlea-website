import Head from "next/head";
import Script from "next/script";

import Nav from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";

import "./styles.css";

export const metadata = {
  title: 'Steve Ditlea Journalist @ Large',
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <body>
        <Nav />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
