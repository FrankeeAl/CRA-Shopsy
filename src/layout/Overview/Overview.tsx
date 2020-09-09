import React, { useEffect, useState } from "react";
import axios from "axios";

interface itemsProps {
  loading: boolean;
  data: [];
  path?: string;
}

function Overview(props: any): JSX.Element {
  const [items, setItems] = useState<itemsProps>({
    loading: true,
    path: "/",
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
  // Set document.title to item name
  if (selectedItem.id) {
    window.document.title = selectedItem.content.name;
  }

  //Return
  return (
    <div>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-6 border">
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
              <span className="badge badge-pill badge-danger mr-2">
                Best seller
              </span>
              <span className="badge badge-pill badge-success">50% sale</span>
              <div className="d-flex pt-4 align-items-center">
                <h1 className="mr-3">
                  <i className="fas fa-dollar-sign mr-1"></i>
                  6,587
                </h1>
                <h3 className="text-muted">
                  <i className="fas fa-dollar-sign mr-1"></i>
                  <s>3,293.5‬</s>
                </h3>
              </div>

              <div className="d-flex">
                <h6 className="pink-text mr-3">
                  <i className="fas fa-heart mr-1"></i>
                  {selectedItem.hearts}
                </h6>

                <h6 className="pink-text">
                  <i className="fas fa-gift mr-1"></i>
                  {selectedItem.hearts}
                </h6>
              </div>

              <div>
                <h5 className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam est odit alias eos sunt nobis impedit vero eius ullam
                  dolores!
                </h5>

                <div className="pt-3">
                  <h5>Available sizes</h5>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="materialInline1"
                      name="inlineMaterialRadiosExample"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="materialInline1"
                    >
                      Small
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="materialInline2"
                      name="inlineMaterialRadiosExample"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="materialInline2"
                    >
                      Medium
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="materialInline3"
                      name="inlineMaterialRadiosExample"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="materialInline3"
                    >
                      Large
                    </label>
                  </div>
                </div>
              </div>

              <button className="btn btn-outline-primary mt-5">
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
