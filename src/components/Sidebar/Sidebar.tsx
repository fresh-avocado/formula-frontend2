import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SearchConstructor from "../SearchConstructor/SearchConstructor";
import FavoriteConstructors from "../FavoriteConstructors/FavoriteConstructors";

const Sidebar = (): JSX.Element => {
  const [isConstructorSelected, setIsConstructorSelected] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Sidebar rerendered");
  });

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
        {isConstructorSelected && <SearchConstructor />}
        {!isConstructorSelected && <FavoriteConstructors />}
      </div>
    </div>
  );
};

export default Sidebar;
