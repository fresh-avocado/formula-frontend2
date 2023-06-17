import React, { useEffect, useState } from "react";
import "./FavoriteConstructors.css";
import type { Constructor } from "../../utils/types/Constructor";
import { getFavConstructors, updateFav } from "../../services/NetworkService";
import { AiFillHeart } from "react-icons/ai";

const FavoriteConstructors = (): JSX.Element => {
  const [favs, setFavs] = useState<Constructor[]>([]);

  useEffect(() => {
    getFavConstructors()
      .then((favConstructors) => {
        setFavs(favConstructors);
      })
      .catch(() => {
        setFavs([]);
      });
  }, []);

  // TODO: make constructor name and fav icon as one standalone component

  const updateFavConstructor = async (body: {
    constructorId: number;
    fav: boolean;
  }): Promise<void> => {
    try {
      await updateFav(body);
      setFavs(
        favs.filter(
          (constructor) => constructor.constructorId !== body.constructorId
        )
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("could not update constructor");
    }
  };

  return (
    <div className="favListContainer">
      {favs.map((constructor) => {
        return (
          <div className="favContainer" key={constructor.constructorId}>
            {constructor.name}
            <AiFillHeart
              className="favIcon"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async (e) => {
                e.stopPropagation();
                await updateFavConstructor({
                  constructorId: constructor.constructorId,
                  fav: false,
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteConstructors;
