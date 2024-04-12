import { useRouter } from 'next/router';

export const useQueryParams = () => {
  const router = useRouter();

  const queryParams = Object.fromEntries(
    new URLSearchParams(router.asPath.split('?')[1])
  );

  return queryParams;
};