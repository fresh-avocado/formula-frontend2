import useSWR from "swr";
import type { Constructor } from "../utils/types/Constructor";
import { getConstructorsUrl } from "../utils/constants/urls";

const fetcher = async <T>(url: string): Promise<T> => {
  return await fetch(url)
    .then(async (r) => await r.json())
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(`error when fetching ${url}: `, e);
    });
};

export const useConstructors = (): {
  constructors: Constructor[];
  isLoading: boolean;
  error: unknown;
} => {
  const { data, error, isLoading } = useSWR<Constructor[]>(
    getConstructorsUrl,
    fetcher
  );

  return {
    constructors: data ?? [],
    isLoading,
    error,
  };
};
