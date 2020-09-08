import React, { useEffect, useState } from "react";
import ProductItem from "../../components/Cards/Item";
import axios from "axios";

interface ItemProps {}

function Item(): JSX.Element {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("items.json")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("[Item] typeof items ->", typeof items);
  console.log("[Item] items ->", items);

  return (
    <div className="container">
      <div className="row row-cols row-cols-md-5">
        {items.map((d: any, index: number) => {
          return (
            <ProductItem
              key={index}
              itemId={d.id}
              index={index}
              photoUrl={d.content.others.photoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Item;
