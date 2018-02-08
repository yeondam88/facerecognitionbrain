import React from "react";

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {imageURL && (
          <img src={imageURL} alt="face" width="500px" height="auto" />
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;
