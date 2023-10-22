import React from 'react';

interface CardProps{
    title: string;
    description: string;
    thumbnailUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, thumbnailUrl }) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} alt="Thumbnail" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;