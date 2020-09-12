import React, { useEffect, useState } from "react";
import CarouselLarge from "../../components/Carousel/CarouselLarge";
import axios from "axios";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get("banner.json")
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <CarouselLarge data={banner}/> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 ">
            <h1 className="text-dark">
              Get the latest scoop on what's new and cool!
            </h1>
            <h5 className="text-dark">
              {" "}
              Subscribe to our newsletter and stay up-to-date with style trends,
              pop culture, and cool deals.
            </h5>

            <div className="mt-5">
              <form>
                <div className="form-row">
                  <div className="col-md-8">
                    <div className="md-form form-lg mt-0">
                      <input
                        type="text"
                        id="inputLGEx"
                        className="form-control form-control-lg"
                      />
                      <label htmlFor="inputLGEx">
                        <i className="fas fa-envelope mr-2"></i>
                        Email address
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <button className="btn btn-dark btn-block">
                      submit
                      <i className="fas fa-paper-plane pl-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
