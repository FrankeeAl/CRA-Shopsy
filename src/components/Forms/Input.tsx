import React from "react";

export interface InlineInputProps {}

export const InlineInput: React.SFC<InlineInputProps> = () => {
  return (
    <div className=" ml-auto">
      <form className="form-inline">
        <div className="input-group ">
          <input
            type="text"
            style={{ width: "400px" }}
            className="form-control form-control-sm border-none"
            id="inlineFormInputGroupUsername2"
            placeholder="Search here"
          />
          <div className="input-group-prepend">
            <div className="input-group-text bg-dark border-none">
              <i className="fas fa-search text-dark-3"></i>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
