import React from "react";
import ReactDom from "react-dom";
import "./Search.module.css";
import classes from "./Search.module.css";

export interface SearchProps {}

const Search: React.SFC<SearchProps> = () => {
  //Initialize
  const getPortal: any = document.getElementById("search");

  //Render outside root
  return ReactDom.createPortal(
    <div className={classes.overlay}>
      <div className={classes.overlayContent}>
        <div className="md-form">
          <input
            type="text"
            id="form1"
            className="form-control text-white"
            autoComplete="off"
          />
          <label htmlFor="form1" className="text-white">
            Search here
          </label>
        </div>

        <h1 className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora at
          molestiae laboriosam provident ratione beatae illum neque
          exercitationem accusantium.
        </h1>
      </div>
    </div>,
    getPortal
  );
};

export default Search;
