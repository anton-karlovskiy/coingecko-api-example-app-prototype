import Link, { LinkProps } from 'next/link';

import AnchorLink from 'components/links/AnchorLink';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const RouterLink = ({
  href,
  className,
  children,
  ...rest
}: Props): JSX.Element => (
  <Link
    href={href}
    passHref
    {...rest}>
    <AnchorLink className={className}>{children}</AnchorLink>
  </Link>
);

export type { Props };

export default RouterLink;
