import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import clsx from 'clsx';

import Layout from 'parts/Layout';
import RouterLink from 'components/links/RouterLink';
import ExternalAnchorLink from 'components/links/ExternalAnchorLink';
import SFTable, {
  SFThead,
  SFTr,
  SFTh,
  SFTbody,
  SFTd
} from 'components/UI/SFTable';
import { EXCHANGE_COUNT } from 'config/general';
import { COINGECKO_API_URL } from 'config/links';
import { PAGES } from 'utils/constants/links';
import { CoingeckoExchange } from 'types/general.d';
import type { NextPageWithLayout } from 'types/general.d';

interface Props {
  exchanges: Array<CoingeckoExchange>;
}

const Home: NextPage<Props> = ({ exchanges }) => {
  return (
    <SFTable>
      <SFThead>
        <SFTr>
          <SFTh>
            Name
          </SFTh>
          <SFTh>
            Country
          </SFTh>
          <SFTh>
            URL
          </SFTh>
          <SFTh>
            Logo
          </SFTh>
          <SFTh>
            Trust rank
          </SFTh>
          <SFTh>
            Link
          </SFTh>
        </SFTr>
      </SFThead>
      <SFTbody>
        {exchanges.map((item: CoingeckoExchange) => {
          return (
            <SFTr key={item.id}>
              <SFTd>
                {item.name}
              </SFTd>
              <SFTd>
                {item.country}
              </SFTd>
              <SFTd>
                <ExternalAnchorLink href={item.url}>
                  {item.name}
                </ExternalAnchorLink>
              </SFTd>
              <SFTd>
                <div
                  className={clsx(
                    'flex',
                    'items-center'
                  )}>
                  <Image
                    src={item.image}
                    alt='Logo of the exchange'
                    height={48}
                    width={48} />
                </div>
              </SFTd>
              <SFTd className='text-center'>
                {item.trust_score_rank}
              </SFTd>
              <SFTd>
                <RouterLink href={`${PAGES.EXCHANGE}/${item.id}`}>
                  Details
                </RouterLink>
              </SFTd>
            </SFTr>
          );
        })}
      </SFTbody>
    </SFTable>
  );
};

(Home as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  const res = await fetch(`${COINGECKO_API_URL}/exchanges?per_page=${EXCHANGE_COUNT}`);
  const data = await res.json();

  return { props: { exchanges: data } };
}

export default Home;
