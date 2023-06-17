import React, { useState } from "react";
import "./Sidebar.css";
import FavoriteConstructors from "../FavoriteConstructors/FavoriteConstructors";
import Autocomplete from "../Autocomplete/Autocomplete";
import { type Constructor } from "../../utils/types/Constructor";

type SidebarProps = {
  onConstructorSelect: (selection: Constructor) => void;
};

const Sidebar = (props: SidebarProps): JSX.Element => {
  const [isConstructorSelected, setIsConstructorSelected] = useState(true);

  return (
    <div className="sidebarContainer">
      <div className="tabTitles">
        <h2
          onClick={() => {
            setIsConstructorSelected(true);
          }}
          className={isConstructorSelected ? "selected" : ""}
        >
          Constructor
        </h2>
        <h2
          onClick={() => {
            setIsConstructorSelected(false);
          }}
          className={isConstructorSelected ? "" : "selected"}
        >
          Favoritos
        </h2>
      </div>
      <div className="tabContent">
        {isConstructorSelected && (
          <Autocomplete onSelect={props.onConstructorSelect} />
        )}
        {!isConstructorSelected && (
          <FavoriteConstructors onSelect={props.onConstructorSelect} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
