import React, { useState } from 'react';

const RotatableImage = ({ src, width }) => {
  const [rotation, setRotation] = useState(0);

  const handleImageClick = () => {
    // Update rotation state by adding 90 degrees (mod 360 to keep within 0-360 range)
    setRotation((rotation + 90) % 360);
  };

  return (
    <img
      src={src}
      width={width}
      alt=""
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={handleImageClick}
    />
  );
};

export default RotatableImage;
