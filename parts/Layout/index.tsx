import clsx from 'clsx';

type Props = React.ComponentPropsWithRef<'div'>;

const Layout = ({
  className,
  ...rest
}: Props) => (
  <div
    className={clsx(
      'container',
      'mx-auto',
      'px-5',
      'py-10',
      className
    )}
    {...rest} />
);

export default Layout;
