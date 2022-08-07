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
    className={clsx(
      'text-base',
      className
    )}
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
      'text-gray-900',
      'font-semibold',
      'sm:h-14',
      'text-left',
      className
    )}
    {...rest} />
);

const SFThead = (props: React.ComponentPropsWithoutRef<'thead'>) => (
  <Thead {...props} />
);

export { SFThead, SFTh, SFTd, SFTr, SFTbody };

export default SFTable;
