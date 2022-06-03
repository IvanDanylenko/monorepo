import { QueryClient } from 'react-query';
import { fetchClient } from './fetchClient';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      queryFn: ({ queryKey }) =>
        fetchClient.get(queryKey[0] as string).then((res) => res.data.data),
    },
  },
});
