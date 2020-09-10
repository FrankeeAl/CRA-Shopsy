import * as React from "react";

export interface ReviewsProps {}

const Reviews: React.SFC<ReviewsProps> = () => {
  return (
    <div className="p-5">
      <ul className="list-unstyled">
        <li className="media">
          <img
            className="d-flex mr-3"
            src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg"
            alt="Generic placeholder image"
          />
          <div className="media-body">
            <h6 className="mt-0 mb-2 font-weight-bold text-left">Anna Smith</h6>
            <div className="text-left">
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
            </div>
            <p className="text-left">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. ipsum dolor sit amet consectetur
              adipisicing elit. Enim quaerat deserunt temporibus eveniet quis,
              provident minima inventore rerum,{" "}
            </p>
          </div>
        </li>

        <li className="media ">
          <img
            className="d-flex mr-3"
            src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg"
            alt="Generic placeholder image"
          />
          <div className="media-body">
            <h6 className="mt-0 mb-2 font-weight-bold text-left">Tom Brown</h6>
            <div className="text-left">
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star grey-text"> </i>
            </div>
            <p className="text-left">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin.
            </p>
          </div>
        </li>
        <li className="media">
          <img
            className="d-flex mr-3"
            src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg"
            alt="Generic placeholder image"
          />
          <div className="media-body ">
            <h6 className="mt-0 mb-2 font-weight-bold text-left">
              Natalie Doe
            </h6>
            <div className="text-left">
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star text-warning"> </i>
              <i className="fas fa-star grey-text"> </i>
              <i className="fas fa-star grey-text"> </i>
            </div>
            <p className="text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              quaerat deserunt temporibus eveniet quis, provident minima
              inventore rerum, molestiae expedita laboriosam quos cum. Omnis
              molestiae amet facilis vero, libero quam impedit, debitis aperiam
              soluta quae consequatur minima recusandae enim dolorem aut earum
              minus assumenda odio in. Distinctio ex quos doloremque at,
              tempora, eaque voluptatibus libero deleniti dicta magnam obcaecati
              quod eveniet sit laudantium impedit. Non dicta dolorum ipsam
              reprehenderit? Dicta maiores facilis quod et fuga culpa molestiae
              animi libero fugit. Animi amet odio, expedita repudiandae
              voluptates voluptate nisi excepturi recusandae?
            </p>
          </div>
        </li>
      </ul>
      <div className="md-form">
        <textarea
          id="form7"
          className="md-textarea form-control"
          rows={5}
        ></textarea>
        <label htmlFor="form7">Enter feedback</label>
      </div>
      <div className="text-left">
        <button className="btn btn-default">add comment</button>
      </div>
    </div>
  );
};

export default Reviews;
