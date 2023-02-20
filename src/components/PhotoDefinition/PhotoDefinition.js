import React from "react";

const PhotoDefinition = (props) => {
  const { photoDetails } = props;
  return (
    <div>
      <h5>Photo Name: {photoDetails}</h5>
    </div>
  );
};

export default PhotoDefinition;
