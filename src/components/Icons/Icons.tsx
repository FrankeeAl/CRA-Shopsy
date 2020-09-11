import * as React from "react";

export interface ChevronLargeLEFTProps {}

export const ChevronLargeLEFT: React.SFC<ChevronLargeLEFTProps> = () => {
  return (
    <>
      <h1 className="display-1 text-dark">
        <i className="fas fa-chevron-left"></i>
      </h1>
    </>
  );
};

export const ChevrolLargeRIGHT: React.SFC<ChevronLargeLEFTProps> = () => {
  return (
    <>
      <h1 className="display-1 text-dark">
        <i className="fas fa-chevron-right"></i>
      </h1>
    </>
  );
};
