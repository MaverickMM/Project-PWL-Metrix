import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import '../styles/global.css';
import '../styles/card.css';

// Dynamically import Card with SSR disabled
const Card = dynamic(() => import('../components/Card'), { ssr: false });

const HomePage = () => {

  const cards = [
    {
      title: 'Satu-Satu',
      description: 'Idgitaf',
      thumbnailUrl: 'https://cloud.jpnn.com/photo/arsip/normal/2023/07/27/penyanyi-idgitaf-alias-gita-foto-dok-idgitaf-musik-qhlzi-bhle.jpg',
    },
    {
      title: 'Am I Bothering You?',
      description: 'Reality Club',
      thumbnailUrl: 'https://images.genius.com/a6bf440a6375e6eda773e23c51fad265.440x440x1.jpg',
    },
    {
      title: 'Rayuan Perempuan Gila',
      description: 'Nadin Amizah',
      thumbnailUrl: 'https://i.scdn.co/image/ab67616d0000b2739bbf0358fb086f43ffde5148',
    },
    {
      title: 'Alonica',
      description: 'LANY',
      thumbnailUrl: 'https://i.scdn.co/image/ab67616d0000b273ae478b2a7ba93e68a58d136a',
    },
    {
      title: 'Jiwa Yang Bersedih',
      description: 'Ghea Indrawari',
      thumbnailUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1f/ac/00/1fac0025-c5a5-2c4a-0fd5-a10fb1db003c/cover.jpg/1200x1200bf-60.jpg',
    },
    {
      title: 'August',
      description: 'Taylor Swift',
      thumbnailUrl: 'https://images.genius.com/1509fab32e174cf85ecf7194bf260a93.1000x1000x1.png',
    },
    {
      title: 'bad',
      description: 'wave to earth',
      thumbnailUrl: 'https://i.scdn.co/image/ab67616d0000b273c21555708975ad94b1faf422',
    },
    {
      title: 'Love Me Again',
      description: 'V',
      thumbnailUrl: 'https://images.genius.com/56c8a3c40ef113f3ce588046fa82ed8d.1000x1000x1.png',
    },
  ];

  const cards2 = [
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
            <h1>Top Songs</h1>

            {/* Use .card-container class for consistent layout */}
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

            <div className="card-container">
              {cards2.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  thumbnailUrl={card.thumbnailUrl}
                />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      );
};

export default HomePage;
