import type { Constructor } from "../utils/types/Constructor";
import {
  getConstructorsUrl,
  updateFavConstructorUrl,
} from "../utils/constants/urls";

const getFetcher = async <T>(url: string): Promise<T> => {
  return await fetch(url)
    .then(async (r) => await r.json())
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(`error when fetching ${url}: `, e);
    });
};

const postFetcher = async <T>(url: string, body: unknown): Promise<T> => {
  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then(async (r) => await r.json())
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(`error when fetching ${url}: `, e);
    });
};

export const getConstructorsByQuery = async (
  q: string
): Promise<Constructor[]> => {
  return await getFetcher<Constructor[]>(`${getConstructorsUrl}?q=${q}`);
};

export const updateFav = async (body: {
  constructorId: number;
  fav: boolean;
}): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  await postFetcher<void>(updateFavConstructorUrl, body);
};
