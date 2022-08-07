import * as React from 'react';
import clsx from 'clsx';

import { FOCUS_CLASSES } from 'utils/constants/styles';

const AnchorLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, ...rest }, ref): JSX.Element => (
    <a
      ref={ref}
      className={clsx(
        'px-1',
        'py-0.5',
        'underline',
        'hover:bg-gray-200',
        'hover:rounded-md',
        'focus:rounded-md',
        FOCUS_CLASSES,
        className
      )}
      {...rest}>
      {children}
    </a>
  )
);
AnchorLink.displayName = 'AnchorLink';

export type Props = React.ComponentPropsWithRef<'a'>

export default AnchorLink;
