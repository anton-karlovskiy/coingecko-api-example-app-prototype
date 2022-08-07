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
  return (
    <dl>
      <dt>Name</dt>
      <dd>{exchange.name}</dd>
      <dt>Country</dt>
      <dd>{exchange.country}</dd>
      <dt>Trust rank</dt>
      <dd>{exchange.trust_score_rank}</dd>
      <dt>Logo</dt>
      <dd>{exchange.image}</dd>
      <dt>Year of establishment</dt>
      <dd>{exchange.year_established}</dd>
      <dt>URL</dt>
      <dd>{exchange.url}</dd>
      <dt>Description</dt>
      <dd>{exchange.description}</dd>
    </dl>
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
