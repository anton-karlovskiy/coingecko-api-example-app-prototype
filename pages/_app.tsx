import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';
import 'components/UI/SFTable/super-responsive-table-style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Exchanges</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
