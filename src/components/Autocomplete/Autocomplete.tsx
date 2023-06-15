import React from "react";
import "./Autocomplete.css";
import useAutocomplete from "@mui/base/useAutocomplete";
import type { Constructor } from "../../utils/types/Constructor";
import { useConstructors } from "../../services/NetworkService";

type AutocompleteProps = {
  onSelect: (selection: unknown) => void;
};

const Autocomplete = (props: AutocompleteProps): JSX.Element => {
  const { constructors, isLoading } = useConstructors();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete<Constructor>({
    options: isLoading
      ? [{ constructorId: -1, name: "Loading..." }]
      : constructors,
    getOptionLabel: (option) => option.name,
    // TODO: descomentar cuando el back implemente los filtros
    // filterOptions: (options, _) => options,
    onChange: (_, value) => {
      if (value !== null) {
        props.onSelect(value);
      }
    },
  });

  return (
    <>
      <h1>Autocomplete</h1>
      <div className="autocompleteContainer">
        <div {...getRootProps()}>
          <input placeholder="Buscar constructor..." {...getInputProps()} />
        </div>
        {groupedOptions.length > 0 && (
          <ul {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li
                key={(option as Constructor).constructorId}
                {...getOptionProps({ option: option as Constructor, index })}
              >
                {(option as Constructor).name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Autocomplete;
