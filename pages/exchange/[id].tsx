import Image from 'next/image';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import type { NextPage, GetServerSideProps } from 'next';

import Layout from 'parts/Layout';
import RouterLink from 'components/links/RouterLink';
import { COINGECKO_API_URL } from 'config/links';
import { PAGES } from 'utils/constants/links';
import type { NextPageWithLayout } from 'types/general.d';
import { CoingeckoExchange } from 'types/general.d';

interface Props {
  exchange: CoingeckoExchange;
}

const Dl = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'dl'>) => (
  <dl
    className={clsx(
      'flex',
      'flex-col',
      'sm:items-center',
      'sm:flex-wrap',
      'sm:flex-row',
      'whitespace-nowrap',
      className
    )}
    {...rest} />
);

const Dt = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'dt'>) => (
  <dt
    className={clsx(
      'text-gray-500',
      'whitespace-nowrap',
      className
    )}
    {...rest} />
);

const Dd = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'dd'>) => (
  <dd
    className={clsx(
      'ml-4',
      'sm:ml-2',
      'mt-2',
      'sm:mt-0',
      'mb-4',
      'sm:mb-0',
      'sm:mr-4',
      'font-semibold',
      className
    )}
    {...rest} />
);

const Exchange: NextPage<Props> = ({ exchange }) => {
  return (
    <>
      <RouterLink
        href={PAGES.HOME}
        className={clsx(
          'text-lg',
          'font-semibold'
        )}>
        Go back to Main
      </RouterLink>
      <Dl>
        <Dt>Name:</Dt>
        <Dd>{exchange.name}</Dd>
        <Dt>Country:</Dt>
        <Dd>{exchange.country}</Dd>
        <Dt>Trust rank:</Dt>
        <Dd>{exchange.trust_score_rank}</Dd>
        <Dt>Logo:</Dt>
        <Dd>
          <Image
            src={exchange.image}
            alt='Logo of the exchange'
            height={48}
            width={48} />
        </Dd>
        <Dt>Year of establishment:</Dt>
        <Dd>{exchange.year_established}</Dd>
        <Dt>URL:</Dt>
        <Dd>{exchange.url}</Dd>
        <Dt>Description:</Dt>
        <Dd className='truncate'>{exchange.description}</Dd>
      </Dl>
    </>
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
