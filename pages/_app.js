import Head from "next/head";

import "../styles/globals.css";
import "../styles/queries.css";
import "../styles/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css"
        />
        <title>BackgroundScissors</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
