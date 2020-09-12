import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../../components/Cards/Item";
import axios from "axios";
import { parse } from "path";

interface itemsProps {
  loading: boolean;
  data: [];
}
interface itemCountProps {
  loading?: boolean;
  count: number;
  arrow?: boolean;
}

function Item({ data }): JSX.Element {
  const location = useLocation();
  // Overwrite the document.title
  if (location.pathname === "/items") {
    window.document.title = "Shopsy Items";
  }
  /*
   * Initialize CURRENT_LOAD
   * @from localstorage { currentLoad }
   * @if currentLoad is empty initialize it with 10:string
   * @if currentload is not empty parse currentLoad to int
   */

  let CURRENT_LOAD = localStorage.getItem("currentLoad");
  let CURRENT_LOAD_VALUE: number = 0;

  if (CURRENT_LOAD == null || CURRENT_LOAD == "null") {
    localStorage.setItem("currentLoad", "10");
  } else CURRENT_LOAD_VALUE = parseInt(CURRENT_LOAD);

  const [items, setItems] = useState<itemsProps>({
    loading: true,
    data: [],
  });
  const [loadCount, setLoadCount] = useState<itemCountProps>({
    arrow: true,
    count: CURRENT_LOAD_VALUE,
  });

  function setCurrentLoad() {
    let currentLoad = localStorage.getItem("currentLoad");
    let count = 10;

    if (currentLoad == null || currentLoad == "null") {
      return currentLoad;
    } else {
      count += loadCount.count;

      localStorage.setItem("currentLoad", count.toString());
      setLoadCount({ count: loadCount.count += parseInt(currentLoad) });
      console.log(`COUNT: `, count);
      console.log(`loadCount.count: `, loadCount.count);
    }
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

  const loadMoreHandler = () => {
    setLoadCount({ count: loadCount.count + 10 });
    setCurrentLoad();
  };

  return (
    <div className="container">
      <div
        className="row row-cols 
          row-cols-xl-5 
          row-cols-lg-4
          row-cols-md-2
          row-cols-sm-2"
      >
        {items.data.slice(0, loadCount.count).map((d: any, index: number) => {
          return (
            <ProductItem
              key={index}
              itemId={d.id}
              index={index}
              name={d.content.name}
              hearts={d.hearts}
              photoUrl={d.content.others.photoUrl}
              price={d.price.toFixed(2)}
            />
          );
        })}
      </div>
      {loadCount.count >= items.data.length ? (
        <h6 className="text-muted mb-4">Nothing more to load</h6>
      ) : (
        <h1 className="pointer" onClick={loadMoreHandler}>
          <i className="fas fa-chevron-down mr-1 text-capitalize text-dark"></i>
        </h1>
      )}
    </div>
  );
}

export default Item;
