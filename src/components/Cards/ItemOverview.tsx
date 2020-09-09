import React from "react";

interface ItemOverviewProps {
  photoUrl: string;
}

const ItemOverview: React.SFC<ItemOverviewProps> = ({ photoUrl }) => {
  return (
    <div>
      <div className="card card-cascade wider reverse">
        <div className="view view-cascade overlay">
          <img
            style={{ height: "330px", width: "50%" }}
            className="card-img-top"
            src={photoUrl}
            alt="Card image cap"
          />
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>My adventure</strong>
          </h4>
          <h6 className="font-weight-bold indigo-text py-2">Photography</h6>

          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem perspiciatis voluptatum a, quo nobis, non commodi
            quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
            laborum ut beatae ullam suscipit veniam.
          </p>

          <a className="px-2 fa-lg li-ic">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="px-2 fa-lg tw-ic">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="px-2 fa-lg fb-ic">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemOverview;
