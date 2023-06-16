import React from "react";
import "./SearchConstructor.css";
import Autocomplete from "../Autocomplete/Autocomplete";
import type { Constructor } from "../../utils/types/Constructor";

const SearchConstructor = (): JSX.Element => {
  const constructorSelected = (constructor: Constructor): void => {
    // eslint-disable-next-line no-console
    console.log("constructor selected: ", constructor);
  };

  return (
    <div className="searchConstructorContainer">
      <Autocomplete
        onSelect={(selection) => {
          constructorSelected(selection);
        }}
      />
    </div>
  );
};

export default SearchConstructor;
