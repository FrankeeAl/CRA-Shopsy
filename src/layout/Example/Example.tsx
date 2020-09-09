import React from "react";
import { useHistory } from "react-router-dom";
export interface ExampleProps {}

const Example: React.SFC<ExampleProps> = () => {
  const history = useHistory();
  const pushHandler = () => {
    history.push(`/dashboard/profie`);
  };
  return (
    <div>
      <h1>Redirect</h1>
      <button className="btn btn-default" onClick={pushHandler}>
        PUSH
      </button>
    </div>
  );
};

export default Example;
