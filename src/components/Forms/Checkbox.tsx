import * as React from "react";

export interface CheckboxSizesProps {}

export const CheckboxSizes: React.SFC<CheckboxSizesProps> = () => {
  return (
    <div>
      <h5>Available sizes</h5>
      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="materialInline1"
          name="inlineMaterialRadiosExample"
        />
        <label className="form-check-label" htmlFor="materialInline1">
          {" "}
          Small
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="materialInline2"
          name="inlineMaterialRadiosExample"
        />
        <label className="form-check-label" htmlFor="materialInline2">
          {" "}
          Medium{" "}
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="materialInline3"
          name="inlineMaterialRadiosExample"
        />
        <label className="form-check-label" htmlFor="materialInline3">
          {" "}
          Large
        </label>
      </div>
    </div>
  );
};
