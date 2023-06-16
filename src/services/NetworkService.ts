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

export const getConstructorsByQuery = async (
  q: string
): Promise<Constructor[]> => {
  return await fetcher<Constructor[]>(`${getConstructorsUrl}?q=${q}`);
};
