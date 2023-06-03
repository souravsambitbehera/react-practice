import React from 'react';
import imageData from './ImageData';

const ChallengeXi = () => {
  return (
    <div>
      {imageData.map((data) => (
        <img src={data.imagePath} alt={data.name} key={data.id} width="200px" height="200px" />
      ))}
    </div>
  );
};

export default ChallengeXi;
