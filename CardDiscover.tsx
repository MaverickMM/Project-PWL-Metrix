import React from 'react';

interface CardProps {
  song_title: string;
  song_description: string;
  imageUrl: string;
}

const CardDiscover: React.FC<CardProps> = ({ song_title, song_description, imageUrl }) => {
  return (
    <div className="container">
      <img src={imageUrl} alt={song_title} className="image" />
      <div className="content">
        <h2 className="song-title">{song_title}</h2>
        <p className="song-description">{song_description}</p>
      </div>
    </div>
  );
};

export default CardDiscover;