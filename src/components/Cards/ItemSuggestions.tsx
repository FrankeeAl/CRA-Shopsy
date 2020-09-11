import React from "react";
import { Link } from "react-router-dom";
interface ItemSuggestionsProps {
  photoUrl: string;
  name: string;
  hearts: number;
  itemId: number | string;
}

const ItemSuggestions: React.SFC<ItemSuggestionsProps> = ({
  photoUrl,
  name,
  hearts,
  itemId,
}) => {
  return (
    <Link to={"/item/" + itemId} className="text-dark">
      <div
        className="d-flex mb-4 p-3 z-depth-1 m-2"
        style={{ borderRadius: "10px" }}
      >
        <img
          style={{ height: "150px" }}
          src={`/${photoUrl}`}
          alt={`#${photoUrl}`}
        />

        <div className="pl-3 text-left position-relative w-100">
          <h5 className="text-left">{name}</h5>
          <h2 className="text-dark mr-3 text-strong">
            <i className="fas fa-dollar-sign mr-1"></i>2349
          </h2>

          <div className="d-flex position-absolute" style={{ bottom: "0" }}>
            <h5 className="text-dark mr-3">
              <i className="fas fa-dollar-sign mr-1"></i>
              <s>2349</s>
            </h5>
            <h5 className="pink-text">
              <i className="fas fa-heart mr-1"></i>
              {hearts}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemSuggestions;
