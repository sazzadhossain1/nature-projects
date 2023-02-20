import React from "react";
import "./SinglePhoto.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SinglePhoto = (props) => {
  const { name, price, seller, ratings, img, id } = props.singlePhoto;

  return (
    <div className="single-photo-div-child">
      <img src={img} alt="" className="img-photo" />
      <div className="text-div">
        <div>
          <h4>Name: {name}</h4>
          <h5>Price: {price}</h5>
          <h6>Ratings: {ratings}</h6>
          <h6>Seller: {seller}</h6>
        </div>
      </div>
      <div>
        <button
          className="cart-btn"
          onClick={() => props.handleState(name, id)}
        >
          <div>Add To Cart</div>
          <div className="font">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SinglePhoto;
