import Head from "next/head";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}