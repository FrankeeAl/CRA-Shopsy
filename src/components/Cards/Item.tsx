import React from "react";
import { Link } from "react-router-dom";
interface ProductItem {
  photoUrl: string;
  index: number;
  itemId: string;
}
const ProductItem: React.FC<ProductItem> = ({ photoUrl, index, itemId }) => {
  return (
    <div className=" mb-4 p-3">
      <div className="card card-cascade narrower">
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
          <h5 className="pink-text pb-2 pt-1">
            <i className="fas fa-utensils"></i> Culinary
          </h5>
          <h4 className="font-weight-bold card-title">
            Cheat day inspirations
          </h4>
          <p className="card-text">Ut enim ad minima veniam</p>
          <button className="btn btn-default">
            <i className="fas fa-shopping-cart mr-1"></i> Add to cart
          </button>
        </div>

        {/* Card footer */}
        <div className="card-footer text-muted text-center">2 days ago</div>
      </div>
    </div>
  );
};

export default ProductItem;
