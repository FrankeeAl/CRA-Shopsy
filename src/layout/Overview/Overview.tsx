import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemSuggestions from "../../components/Cards/ItemSuggestions";
import Reviews from "../../components/Review/Review";
import { CarouselOverview } from "../../components/Carousel/Carousel";
import {
  Container,
  ContainerFluid,
  Row,
} from "../../components/Container/Container";
import { CheckboxSizes } from "../../components/Forms/Checkbox";
import {
  ItemPrice,
  OverviewDescription,
  ItemStats,
} from "../../components/Text/ItemDescription";

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

  // @return color of badge according to its discount
  const getSaleDiscount = (value: number) => {
    let typeOfBadge: string = "";

    if (value >= 5 && value < 50) {
      typeOfBadge = "badge-default";
    } else if (value >= 50 && value < 80) {
      typeOfBadge = "badge-warning";
    } else if (value >= 80) {
      typeOfBadge = "badge-danger";
    }

    return typeOfBadge;
  };

  // @title return tsx
  return (
    <Container>
      {/* 
         @title Preview item 
         @data <selectedItem> only
      */}
      <div className="container">
        <div className="row mt-1">
          <div className="col-md-5 ">
            <CarouselOverview
              altImg={selectedItem.content.others.altImg}
              photoUrl={selectedItem.content.others.photoUrl}
            />
          </div>
          <div className="col-md-7">
            <div className="text-left pt-3">
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

              <span
                className={`badge badge-pill ${getSaleDiscount(
                  selectedItem.discount
                )}`}
              >
                {selectedItem.discount}% sale
              </span>

              <div className="d-flex pt-4 align-items-center">
                <ItemPrice
                  discount={selectedItem.discount}
                  price={selectedItem.price}
                />
              </div>

              <div className="d-flex">
                <ItemStats hearts={selectedItem.hearts} />
              </div>

              <div>
                {/* @Description */}
                <div className="pt-3">
                  <OverviewDescription />
                </div>

                {/* @Sizes */}
                <div className="pt-3">
                  <CheckboxSizes />
                </div>
              </div>

              <div className="mt-3">
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

            {/* 
              @title Suggestions 
              @data <category> only
          */}
            <Row>
              <div className="row row-cols-2 row-cols-md-4  justify-content-start w-100">
                {suggestionsData.map((d: any, index: number) => {
                  return (
                    <ItemSuggestions
                      key={index}
                      name={d.content.name}
                      photoUrl={d.content.others.photoUrl}
                      hearts={d.hearts}
                      itemId={d.id}
                      price={d.price}
                    />
                  );
                })}
              </div>
            </Row>
          </div>
        </div>
      </div>

      {/* 
         @title Feedbacks 
         @data <selectedItem> only
      */}
      <ContainerFluid>
        <Row>
          <div className="col-md" />
          <div className="col-md-8">
            <Reviews />
          </div>
          <div className="col-md" />
        </Row>
      </ContainerFluid>
    </Container>
  );
}

export default Overview;
