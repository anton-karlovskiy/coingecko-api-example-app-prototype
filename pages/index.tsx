import type { NextPage } from 'next';

import { CoingeckoExchangeResponse } from 'types/general.d';

interface Props {
  exchanges: Array<CoingeckoExchangeResponse>;
}

const Home: NextPage<Props> = ({ exchanges }) => {
  console.log('exchanges => ', exchanges);

  return (
    <>Home</>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10');
  const data = await res.json();

  return { props: { exchanges: data } };
}

export default Home;
