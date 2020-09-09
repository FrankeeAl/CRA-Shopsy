import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../../components/Cards/Item";
import axios from "axios";

interface itemsProps {
  loading: boolean;
  data: [];
  path?: string;
}

function Item(): JSX.Element {
  const location = useLocation();
  const [items, setItems] = useState<itemsProps>({
    loading: true,
    data: [],
    path: "",
  });

  // Overwrite the document.title
  if (location.pathname === "/items") {
    window.document.title = "Shopsy Items";
  }

  useEffect(() => {
    axios
      .get("items.json")
      .then((res) =>
        setItems({
          loading: false,
          data: res.data,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  // Display loading before page render
  if (items.loading) {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="container">
      <div
        className="row row-cols 
      row-cols-xl-4 
      row-cols-lg-3
      row-cols-md-2
      row-cols-sm-2"
      >
        {items.data.map((d: any, index: number) => {
          return (
            <ProductItem
              key={index}
              itemId={d.id}
              index={index}
              name={d.content.name}
              hearts={d.hearts}
              photoUrl={d.content.others.photoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Item;
