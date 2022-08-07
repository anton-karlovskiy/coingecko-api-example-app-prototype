import type { ReactElement } from 'react';
import type { NextPage } from 'next';

import Layout from 'parts/Layout';
import type { NextPageWithLayout } from 'types/general.d';

const Exchange: NextPage = () => {
  return (
    <>Exchange</>
  );
};

(Exchange as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default Exchange;
