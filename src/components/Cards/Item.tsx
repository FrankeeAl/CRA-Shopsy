import React from "react";
import { Link } from "react-router-dom";
interface ProductItem {
  photoUrl: string;
  index: number;
  itemId: string;
  name: string;
  hearts: number;
}
const ProductItem: React.FC<ProductItem> = ({
  photoUrl,
  index,
  itemId,
  name,
  hearts,
}) => {
  return (
    <div className=" mb-4 p-3">
      <div className="card">
        {/* Card Image */}
        <div className="view view-cascade overlay">
          <Link to={"/item/" + itemId}>
            <img
              style={{ height: "200px" }}
              className="card-img-top"
              src={photoUrl}
              alt={`${index}`}
            />
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        {/* Card body */}
        <div className="card-body card-body-cascade">
          <p className="card-text text-left">{name}</p>
        </div>

        {/* Card footer */}
        <div className=" card-footer text-muted text-center">
          <div className="d-flex justify-content-around">
            <div className="pink-text">
              <i className="fas fa-heart"></i> {hearts}
            </div>
            <div className="text-primary">
              <i className="fas fa-comments"></i>
            </div>
            <div className="text-default">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
