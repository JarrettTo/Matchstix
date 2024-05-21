import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />;
  </>)
}

export default MyApp;
