import React from "react";
import ReactDom from "react-dom";
import "./Search.module.css";
import classes from "./Search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "./../../redux/action";
export interface SearchProps {}

const CLOSEBTN_STYLE: any = {
  position: "absolute",
  top: "0",
  right: "0",
  padding: "50px",
  cursor: "pointer",
};
const Search: React.SFC<SearchProps> = () => {
  const dispatch = useDispatch();

  const toggleSearchHandler = () => {
    dispatch(toggleSearch());
  };

  const toggle = useSelector((state) => state.TOGGLE_SEARCH);
  console.log(toggle);
  //Initialize
  const getPortal: any = document.getElementById("search");

  //Render outside root
  return ReactDom.createPortal(
    <div>
      {toggle && (
        <div className={classes.overlay}>
          <h1 onClick={toggleSearchHandler} style={CLOSEBTN_STYLE}>
            <i className="fas fa-times text-white"></i>
          </h1>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempora at molestiae laboriosam provident ratione beatae illum
              neque exercitationem accusantium.
            </h1>
          </div>
        </div>
      )}
    </div>,
    getPortal
  );
};

export default Search;
