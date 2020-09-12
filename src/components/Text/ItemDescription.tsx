import React from "react";

interface OverviewDescriptionProps {}
interface ItemPriceProps {
  price: number;
  discount: number;
}
interface ItemStatsProps {
  hearts: number;
  wishlist?: number;
}
export const OverviewDescription: React.SFC<OverviewDescriptionProps> = () => {
  return (
    <div>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est odit
        alias eos sunt nobis impedit vero eius ullam dolores!
      </h5>
    </div>
  );
};
export const ItemStats: React.SFC<ItemStatsProps> = ({ hearts }) => {
  return (
    <>
      <h6 className="pink-text mr-3">
        <i className="fas fa-heart mr-1"></i>
        {hearts * 3}
      </h6>
      <h6 className="pink-text">
        <i className="fas fa-gift mr-1"></i>
        {hearts * 5}
      </h6>
    </>
  );
};

export const ItemPrice: React.SFC<ItemPriceProps> = ({ price, discount }) => {
  let DISCOUNTED = price * (discount / 100);

  return (
    <>
      <h1 className="mr-3 text-dark text-strong">
        <i className="fas fa-dollar-sign mr-1"></i>
        {DISCOUNTED.toFixed(2)}
      </h1>
      <h3 className="text-dark">
        <i className="fas fa-dollar-sign mr-1"></i>
        <s> {price.toFixed(2)}‬</s>
      </h3>
    </>
  );
};
