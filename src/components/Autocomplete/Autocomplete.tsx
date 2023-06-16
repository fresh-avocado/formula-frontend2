import React, { useEffect, useState } from "react";
import "./Autocomplete.css";
import useAutocomplete from "@mui/base/useAutocomplete";
import type { Constructor } from "../../utils/types/Constructor";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
} from "rxjs";
import { getConstructorsByQuery } from "../../services/NetworkService";

type AutocompleteProps = {
  onSelect: (selection: Constructor) => void;
};

const searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

const textQueryStream = searchSubject.pipe(
  filter((val: string) => val.length > 1),
  debounceTime(1000),
  distinctUntilChanged()
);

const Autocomplete = (props: AutocompleteProps): JSX.Element => {
  const [constructors, setConstructors] = useState<Constructor[]>([]);

  useEffect(() => {
    const suscription = textQueryStream.subscribe((q) => {
      getConstructorsByQuery(q)
        .then((res) => {
          setConstructors(res);
        })
        .catch(() => {
          setConstructors([{ constructorId: -1, name: "Error" }]);
        });
    });
    return () => {
      suscription.unsubscribe();
    };
  }, []);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete<Constructor>({
    options: constructors,
    getOptionLabel: (option) => option.name,
    filterOptions: (options, _) => options,
    onInputChange: (_, value) => {
      searchSubject.next(value);
    },
    onChange: (_, value) => {
      if (value !== null) {
        props.onSelect(value);
      }
    },
    isOptionEqualToValue(option, value) {
      return option.name === value.name;
    },
  });

  return (
    <>
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
