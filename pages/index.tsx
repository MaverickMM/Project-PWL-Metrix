import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/global.css';
// import '../styles/card.css';

const HomePage = () => {
    const cards = [
        {
          title: 'Paint The Town Red',
          description: 'Doja Cat',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Doja_Cat_-_Paint_the_Town_Red.png',
        },
        {
          title: '(It Goes Like) Nanana (Edit)',
          description: 'Peggy Gou',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/7/75/Peggy_Gou_-_%28It_Goes_Like%29_Nanana.png',
        },
        {
          title: 'Strangers',
          description: 'Kenya Grace',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Kenya_Grace_-_Strangers.png',
        },
        {
          title: 'Tattoo',
          description: 'Loreen',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Loreen_-_Tattoo.png',
        },
        {
          title: 'Vampire',
          description: 'Olivia Rodrigo',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png',
        },
        {
          title: 'Makeba',
          description: 'Jain',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Zanaka_Cover.jpg/220px-Zanaka_Cover.jpg',
        },
        {
          title: 'What Was I Made For?',
          description: 'Billie Ellish',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/5/54/Billie_Eilish_-_What_Was_I_Made_For%3F.png',
        },
        {
          title: 'City Boys',
          description: 'Burna Boy',
          thumbnailUrl: 'https://mzeeki.com/public/images/songs/40443121092023071236.jpg',
        },
        {
          title: 'Tango',
          description: 'Adam North',
          thumbnailUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5b/d8/95/5bd895fe-6428-0933-7d5c-552399528f64/artwork.jpg/400x400bb.jpg',
        },
        {
          title: 'Calm Down',
          description: 'Rema',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Rema_-_Calm_Down.png',
        },
      ];
    
      return (
        <div>
          <Header />
          <main>
            <h1>Browse</h1>
            <div className="card-container">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  thumbnailUrl={card.thumbnailUrl}
                />
              ))}
            </div>
            <h1></h1>
            <div className="card-container">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  thumbnailUrl={card.thumbnailUrl}
                />
              ))}
            </div>
          </main>
        </div>
      );
};

export default HomePage;