import React from "react";

interface CarouselLargeProps {
  data: any;
}

const CarouselLarge: React.SFC<CarouselLargeProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map((d: any, index: number) => {
            return (
              <>
                <div
                  className={`view carousel-item ${index === 0 && "active"}`}
                  key={index}
                >
                  <img className="d-block w-100" src={d} alt="First slide" />
                  <div className="mask rgba-orange-strong"></div>
                  <div className="mask pattern-9 flex-center waves-effect waves-light"></div>
                </div>
                <div className="mask pattern-9"></div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>Secondary text</p>
                </div>
              </>
            );
          })}
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselLarge;
