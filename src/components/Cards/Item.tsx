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
    <div className="mb-4 p-3">
      <div className="">
        {/* Card Image */}
        <div className="view view-cascade overlay">
          <Link to={"/item/" + itemId}>
            <img
              style={{
                height: "220px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
              className="card-img-top"
              src={photoUrl}
              alt={`${index}`}
            />
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        {/* Card body */}
        <div className="p-3" style={{ fontSize: "13px" }}>
          <div className="d-flex">
            <p className="text-dark weight-300 text-left card-text">{name}</p>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <h5 className="text-dark weight-300">
              <i className="fas fa-dollar-sign mr-1"></i>4022
            </h5>
            <div className="d-flex">
              <h5 className="text-orange weight-300 mr-2">
                <i className="fas fa-gift"></i>
              </h5>
              <h5 className="text-dark-2 weight-300">
                <i className="fas fa-shopping-cart"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
