import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import type { NextPage, GetServerSideProps } from 'next';

import Layout from 'parts/Layout';
import { COINGECKO_API_URL } from 'config/links';
import type { NextPageWithLayout } from 'types/general.d';
import { CoingeckoExchange } from 'types/general.d';

interface Props {
  exchange: CoingeckoExchange;
}

const Exchange: NextPage<Props> = ({ exchange }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log('exchange => ', exchange);

  return (
    <>{id}</>
  );
};

(Exchange as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params === undefined) {
    throw new Error('Something went wrong!');
  }

  const res = await fetch(`${COINGECKO_API_URL}/exchanges/${params.id}`);
  const data = await res.json();

  return {
    props: {
      exchange: {
        ...data,
        id: params.id
      }
    }
  };
};

export default Exchange;
