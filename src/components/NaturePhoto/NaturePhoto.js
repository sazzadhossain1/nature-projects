import React, { useEffect, useState } from "react";
import PhotoDefinition from "../PhotoDefinition/PhotoDefinition";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import "./NaturePhoto.css";

const NaturePhoto = () => {
  const [photoProduct, setPhotoProduct] = useState([]);
  const [photoCart, setPhotoCart] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setPhotoProduct(data));
  }, []);

  const handleState = (photo, id) => {
    const newCart = [...photoCart, photo];
    setPhotoCart(newCart);
  };
  // console.log(photoCart);

  return (
    <div className="parent-photo-div">
      <div className="single-photo-div">
        {photoProduct.map((singlePhoto) => (
          <SinglePhoto
            singlePhoto={singlePhoto}
            key={singlePhoto.id}
            handleState={handleState}
          ></SinglePhoto>
        ))}
      </div>
      <div>
        <h1>This si select photo: {photoCart.name}</h1>
        {photoCart.map((photoDetails) => (
          <PhotoDefinition
            key={photoDetails.id}
            photoDetails={photoDetails}
          ></PhotoDefinition>
        ))}
      </div>
    </div>
  );
};

export default NaturePhoto;
