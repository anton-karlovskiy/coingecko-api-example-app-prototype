import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from 'react-super-responsive-table';
import clsx from 'clsx';

const SFTable = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'table'>) => (
  <Table
    className={clsx('text-base', className)}
    {...rest} />
);

const SFTbody = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'tbody'>) => (
  <Tbody
    className={clsx(
      'border-t',
      'border-gray-900',
      'divide-y',
      'divide-gray-700',
      'sm:divide-y-0',
      'sm:divide-transparent',
      className
    )}
    {...rest} />
);

const SFTr = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'tr'>) => (
  <Tr
    className={clsx(
      'py-4',
      'sm:py-0',
      'space-y-2',
      'sm:space-y-0',
      className
    )}
    {...rest} />
);

const SFTd = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'td'>) => (
  <Td
    className={clsx(
      'sm:border-b',
      'sm:border-gray-700',
      'sm:h-14',
      className
    )}
    {...rest} />
);

const SFTh = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'th'>) => (
  <Th
    className={clsx(
      'sm:text-gray-900',
      'sm:h-14',
      'text-left',
      'font-semibold',
      className
    )}
    {...rest} />
);

const SFThead = (props: React.ComponentPropsWithoutRef<'thead'>) => (
  <Thead {...props} />
);

export { SFThead, SFTh, SFTd, SFTr, SFTbody };

export default SFTable;
