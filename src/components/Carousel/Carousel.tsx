import React from "react";

interface CarouselOverviewProps {
  photoUrl: string;
  altImg: [];
}

export const CarouselOverview: React.SFC<CarouselOverviewProps> = ({
  photoUrl,
  altImg,
}) => {
  return (
    <div
      id="carousel-thumb"
      className="
        justify-content-center
        carousel slide carousel-fade carousel-thumbnails pt-3"
      data-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              style={{ height: "400px" }}
              src={`/${photoUrl}`}
              alt="First slide"
            />
          </div>
        </div>

        {altImg.map((d: any, index) => {
          console.log(d);
          return (
            <div className="carousel-item" key={index}>
              <img
                className="d-block w-100"
                style={{ height: "400px" }}
                src={`/${d}`}
                alt="Second slide"
              />
            </div>
          );
        })}
      </div>

      <a
        className="carousel-control-prev"
        href="#carousel-thumb"
        role="button"
        data-slide="prev"
      >
        <h1 className="text-dark">
          <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </h1>
        <span className="sr-only">Previous</span>
      </a>

      <a
        className="carousel-control-next"
        href="#carousel-thumb"
        role="button"
        data-slide="next"
      >
        <h1 className="text-dark">
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </h1>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
