import React from "react";
import { Link } from "react-router-dom";
interface ItemSuggestionsProps {
  photoUrl: string;
  name: string;
  hearts: number;
  itemId: number | string;
  price: number;
}

const ItemSuggestions: React.SFC<ItemSuggestionsProps> = ({
  photoUrl,
  name,
  hearts,
  itemId,
  price,
}) => {
  return (
    <Link to={"/item/" + itemId} className="text-dark ">
      <div className="m-2 ">
        <div className="view overlay pointer">
          <img
            className="card-img-top"
            style={{
              height: "200px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            src={`/${photoUrl}`}
            alt={`#${photoUrl}`}
          />
          <div className="mask rgba-white-slight"></div>
        </div>
        <div className="card-body text-left" style={{ paddingTop: "10px" }}>
          <div className="d-flex justify-content-between">
            <p
              style={{ fontSize: "14px" }}
              className="card-text text-dark weight-300"
            >
              <i className="fas fa-dollar-sign mr-1"></i>
              <strong>{price}</strong>
            </p>
            <p
              style={{ fontSize: "14px" }}
              className="card-text pink-text weight-300"
            >
              <i className="fas fa-heart mr-1"></i>
              <strong>{hearts}</strong>
            </p>
          </div>
          <p
            style={{ fontSize: "13px", marginTop: "-20px" }}
            className="card-text text-dark weight-300"
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemSuggestions;
