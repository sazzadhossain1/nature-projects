import React from "react";
import "./SinglePhoto.css";

const SinglePhoto = (props) => {
  const { name, price, seller, ratings, img } = props.singlePhoto;
  console.log(name);
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
      <button className="cart-btn"> Add To Cart</button>
    </div>
  );
};

export default SinglePhoto;
