import React from 'react';
import imageData from './ImageData';

const ChallengeXi = () => {
  return (
    <div>
      {imageData.map((data) => (
        <img src={data.imagePath} alt={data.name} key={data.id} />
      ))}
    </div>
  );
};

export default ChallengeXi;
