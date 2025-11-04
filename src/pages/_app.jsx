import Head from "next/head";
import "../styles/globals.css"; // keep your global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codiva Systems | Digital Innovation Studio</title>
        <meta
          name="description"
          content="Empowering businesses with next-gen web and AI-driven solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
