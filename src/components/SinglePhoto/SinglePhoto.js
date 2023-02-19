import React from "react";
import "./SinglePhoto.css";

const SinglePhoto = (props) => {
  const { name, price, seller, ratings, img } = props.singlePhoto;
  console.log(name);
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h4>Name: {name}</h4>
        <h5>Price: {price}</h5>
        <h6>Ratings: {ratings}</h6>
        <h6>Seller: {seller}</h6>
      </div>
    </div>
  );
};

export default SinglePhoto;
