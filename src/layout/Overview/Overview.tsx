import React, { useEffect, useState } from "react";
import ProductItem from "../../components/Cards/Item";
import axios from "axios";

interface itemsProps {
  loading: boolean;
  data: [];
}

function Overview(props: any): JSX.Element {
  const [items, setItems] = useState<itemsProps>({
    loading: true,
    data: [],
  });

  //On page mounted run this effect
  useEffect(() => {
    axios
      .get("/items.json")
      .then((res) => {
        setItems({
          loading: false,
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Display loading before page render
  if (items.loading) {
    return <h1>Loading..</h1>;
  }
  // Filter data and select 1 only
  const selectedItem: any = items.data.find((x: any) => {
    return x.id === props.match.params.id;
  });
  console.log(selectedItem);

  //Return
  return (
    <div>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-6 z-depth-3">
            <div className="m-3">
              {items.loading ? (
                <h1>Page is loading</h1>
              ) : (
                <img
                  style={{ height: "500px" }}
                  src={`/${selectedItem.content.others.photoUrl}`}
                  className="img-fluid"
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-left pl-3 pt-3">
              <h6 className="text-capitalize text-muted">
                {selectedItem.gender === "men" ? (
                  <div>
                    <i className="fas fa-mars mr-1"></i>
                    {selectedItem.gender} / {selectedItem.category}
                  </div>
                ) : (
                  <div>
                    <i className="fas fa-venus mr-1"></i>
                    {selectedItem.gender} / {selectedItem.category}
                  </div>
                )}
              </h6>
              <h3 className="text-capitalize mb-2">
                {selectedItem.content.name}
              </h3>
              <div className="d-flex">
                <h5 className="pink-text mr-3">
                  <i className="fas fa-heart mr-1"></i>
                  {selectedItem.hearts}
                </h5>

                <h5 className="pink-text">
                  <i className="fas fa-gift mr-1"></i>
                  {selectedItem.hearts}
                </h5>
              </div>
              <h1 className="display-3">
                <i className="fas fa-dollar-sign mr-1"></i>
                6587
              </h1>
              <button className="btn btn-outline-primary">
                <i className="fas fa-shopping-cart mr-1"></i>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
