import React from "react";

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md"></div>
        <div className="col-md-4">
          <div className="md-form">
            <input type="text" id="form1" className="form-control" />
            <label htmlFor="form1">Email</label>
          </div>
          <div className="md-form">
            <input type="password" id="form1" className="form-control" />
            <label htmlFor="form1">password</label>
          </div>
          <button className="btn btn-primary">login</button>
        </div>
        <div className="col-md"></div>
      </div>
    </div>
  );
};

export default Login;
