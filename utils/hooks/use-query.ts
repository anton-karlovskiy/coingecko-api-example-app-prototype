import * as React from 'react';
// MEMO: inspired by https://twitter.com/JS_Cheerleader/status/1412969723579359233
// TODO: should type properly
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useQuery = (handler: any, query: any): void => {
  React.useEffect(() => {
    const waitQuery = async () => {
      await Promise.resolve();
      handler(query);
    };

    waitQuery();
  }, [
    handler,
    query
  ]);
};

export default useQuery;
