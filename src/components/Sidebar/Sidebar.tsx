import React from "react";
import "./Sidebar.css";

// TODO: add eslint with prettier
// TODO: add commitlint
// TODO: add husky commit-msg and pre-commit

const Sidebar = (): JSX.Element => {
  return (
    <div className="sidebarContainer">
      <div className="tabTitles">
        <h3>Constructor</h3>
        <h3>Favoritos</h3>
      </div>
      <div className="tabContent">
        <h1>Tab Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
