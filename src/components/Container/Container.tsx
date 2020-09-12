import React from "react";

export interface ContainerProps {}

export const Container: React.SFC<ContainerProps> = (props) => {
  return <div className="container">{props.children}</div>;
};
export const ContainerFluid: React.SFC<ContainerProps> = (props) => {
  return <div className="container-fluid">{props.children}</div>;
};

export const Row: React.SFC<ContainerProps> = (props) => {
  return <div className="row">{props.children}</div>;
};
