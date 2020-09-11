import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemSuggestions from "../../components/Cards/ItemSuggestions";
import Reviews from "../../components/Review/Review";
import { CarouselOverview } from "../../components/Carousel/Carousel";

interface itemsProps {
  loading: boolean;
  data: [];
  path?: string;
  selectedItem?: string;
}

function Overview(props: any): JSX.Element {
  const [items, setItems] = useState<itemsProps>({
    loading: true,
    path: "/",
    data: [],
    selectedItem: "",
  });

  // @title when page mounted run this effect
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

  // @title Display loading before page render
  if (items.loading) {
    return <h1>Loading..</h1>;
  }
  // @title Filter data and select 1 only
  // @data <item> and map its object
  const selectedItem: any = items.data.find((x: any) => {
    return x.id === props.match.params.id;
  });
  console.log(`Selected Item AltImg -`, selectedItem.content.others.altImg);

  // @title "Prototype of selectedItem for suggestions"
  // @data <category> and select 1
  const suggestionsData = items.data.filter((d: any) => {
    return d.category === selectedItem.category && d.id !== selectedItem.id;
  });

  // @title "Change title according to its product name"
  // @data <category> name only
  if (selectedItem.id) {
    window.document.title = selectedItem.content.name;
  }

  // @title return tsx
  return (
    <div>
      {/* 
         @title Preview item 
         @data <selectedItem> only
      */}
      <div className="container">
        <div className="row mt-1 justify-content-center">
          <div className="col-md-5">
            <CarouselOverview
              altImg={selectedItem.content.others.altImg}
              photoUrl={selectedItem.content.others.photoUrl}
            />
          </div>
          <div className="col-md-7">
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
                <h1 className="mr-3 text-dark text-strong">
                  <i className="fas fa-dollar-sign mr-1"></i>
                  6,587
                </h1>
                <h3 className="text-dark">
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

              <div className="mt-5">
                <button className="btn btn-orange waves-effect">
                  <i className="fas fa-shopping-cart mr-1"></i>
                  add to cart
                </button>
                <button className="btn btn-outline-orange waves-effect">
                  <i className="fas fa-gift mr-1"></i>
                  add to my wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
         @title Suggestions 
         @data <category> only
      */}
      <div className="container mt-5">
        <div className="row row-cols-3 row-cols-md-3 justify-content-center">
          {suggestionsData.map((d: any, index: number) => {
            return (
              <ItemSuggestions
                key={index}
                name={d.content.name}
                photoUrl={d.content.others.photoUrl}
                hearts={d.hearts}
                itemId={d.id}
              />
            );
          })}
        </div>
      </div>

      {/* 
         @title Feedbacks 
         @data <selectedItem> only
      */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md" />
          <div className="col-md-8">
            <Reviews />
          </div>
          <div className="col-md" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
