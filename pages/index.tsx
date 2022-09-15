import * as React from 'react';
import type { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import type { ReactElement } from 'react';
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
// ray test touch <
import useQuery from 'utils/hooks/use-query';
import {
  PAGES,
  ROUTE_PARAMS
} from 'utils/constants/links';
// ray test touch >
import { CoingeckoExchange } from 'types/general.d';
import type { NextPageWithLayout } from 'types/general.d';

// ray test touch <
const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_PAGE_LIMIT = EXCHANGE_COUNT;
// ray test touch >

const Home: NextPage = () => {
  // ray test touch <
  const router = useRouter();

  useQuery(
    async (routerQuery: any) => {
      if (!routerQuery[ROUTE_PARAMS.PAGE_INDEX] && !routerQuery[ROUTE_PARAMS.PAGE_LIMIT]) {
        Router.replace({
          query: {
            [ROUTE_PARAMS.PAGE_INDEX]: DEFAULT_PAGE_INDEX,
            [ROUTE_PARAMS.PAGE_LIMIT]: DEFAULT_PAGE_LIMIT
          }
        });
      }
    },
    router.query
  );

  const pageIndex = Number(router.query[ROUTE_PARAMS.PAGE_INDEX] || DEFAULT_PAGE_INDEX);
  const pageLimit = Number(router.query[ROUTE_PARAMS.PAGE_LIMIT] || DEFAULT_PAGE_LIMIT);

  const [exchanges, setExchanges] = React.useState<Array<CoingeckoExchange>>();
  React.useEffect(() => {
    (async () => {
      try {
        // TODO: add loading UX using `react-query`
        const response = await fetch(`${COINGECKO_API_URL}/exchanges?per_page=${pageLimit}&page=${pageIndex}`);
        const theExchanges = await response.json();
        setExchanges(theExchanges);
      } catch (error) {
        // TODO: add error handling UX using `react-error-boundary`
        console.error('[Home]', error);
      }
    })();
  }, [pageIndex, pageLimit]);

  console.log('pageIndex => ', pageIndex);
  console.log('pageLimit => ', pageLimit);

  const handlePageIndexIncrement = () => {
    Router.replace({
      query: {
        ...router.query,
        [ROUTE_PARAMS.PAGE_INDEX]: pageIndex + 1
      }
    });
  };
  // ray test touch >

  return (
    <>
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
          {exchanges?.map((item: CoingeckoExchange) => {
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
      <button onClick={handlePageIndexIncrement}>Next</button>
    </>
  );
};

(Home as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default Home;
