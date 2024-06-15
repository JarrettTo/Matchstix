import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap" rel="stylesheet"></link>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://tally.so/widgets/embed.js" async></script>
      <meta property="og:title" content="Matchstix - Find your next go-to." />
      <meta property="og:description" content="Bored at home? Don't worry we gotchu. We use AI to curate and find hangouts and events that'll match your personality and preferences. Wtf are you waiting for? Let's go touch some grass." />
      <meta property="og:image" content="https://matchstix.ph/hero/5.jpg" />
      <meta property="og:url" content="https://matchstix.ph" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Matchstix - Find your next go-to." />
      <meta name="twitter:description" content="Bored at home? Don't worry we gotchu. We use AI to curate and find hangouts and events that'll match your personality and preferences. Wtf are you waiting for? Let's go touch some grass." />
      <meta name="twitter:image" content="https://matchstix.ph/hero/5.jpg" />
      <title>Matchstix - Find your next hangout and event</title>
      <meta name="description" content="Bored at home? Don't worry we gotchu. We use AI to curate and find hangouts and events that'll match your personality and preferences. Wtf are you waiting for? Let's go touch some grass." />
    </Head>
    
    <Component {...pageProps} />;
  </>)
}

export default MyApp;
