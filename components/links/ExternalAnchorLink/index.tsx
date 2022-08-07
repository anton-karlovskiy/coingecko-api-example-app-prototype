import AnchorLink, {
  Props as AnchorLinkProps
} from 'components/links/AnchorLink';

import clsx from 'clsx';
import ExternalLinkIcon from 'assets/images/icons/external-link.svg';

type Props = AnchorLinkProps

const ExternalAnchorLink = ({ children, className, ...rest }: Props) => {
  return (
    <AnchorLink
      className={clsx(
        'inline-flex',
        'items-center',
        'space-x-0.5',
        className
      )}
      target='_blank'
      rel='noopener noreferrer'
      {...rest}>
      <span>{children}</span>
      <ExternalLinkIcon
        width={24}
        height={24} />
    </AnchorLink>
  );
};

export default ExternalAnchorLink;
