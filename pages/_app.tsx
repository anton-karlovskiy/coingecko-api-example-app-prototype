import Head from 'next/head';

import type { AppPropsWithLayout } from 'types/general.d';
import 'styles/globals.css';
import 'components/UI/SFTable/super-responsive-table-style.css';

function MyApp({
  Component,
  pageProps
}: AppPropsWithLayout) {
  // MEMO: inspired by https://nextjs.org/docs/basic-features/layouts#per-page-layouts
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <>
      <Head>
        <title>Exchanges</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width' />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
