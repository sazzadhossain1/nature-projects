import React, { useEffect, useState } from "react";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import "./NaturePhoto.css";

const NaturePhoto = () => {
  const [photoProduct, setPhotoProduct] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setPhotoProduct(data));
  }, []);
  return (
    <div className="parent-photo-div">
      <div className="single-photo-div">
        {photoProduct.map((singlePhoto) => (
          <SinglePhoto
            singlePhoto={singlePhoto}
            key={singlePhoto.id}
          ></SinglePhoto>
        ))}
      </div>
      <div>
        <h1>This si select photo</h1>
      </div>
    </div>
  );
};

export default NaturePhoto;
