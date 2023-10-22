import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '@/components/Footer';
import '../styles/global.css';
import '../styles/card.css';

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

      const cards3 = [
        {
          title: 'As the World Caves In',
          description: 'Sarah Cothran',
          thumbnailUrl: 'https://i.scdn.co/image/ab67616d0000b2738b065a7bfff7655a18bc18ed',
        },
        {
          title: 'Satu-Satu',
          description: 'Idgitaf',
          thumbnailUrl: 'https://cloud.jpnn.com/photo/arsip/normal/2023/07/27/penyanyi-idgitaf-alias-gita-foto-dok-idgitaf-musik-qhlzi-bhle.jpg',
        },
        {
          title: "Somebody's Pleasure",
          description: 'Aziz Hedra',
          thumbnailUrl: 'https://i.scdn.co/image/ab67616d0000b2730104b1f71c7bd8e6e5ea1fd2',
        },
        {
          title: 'Moonlight',
          description: 'Kali Uchis',
          thumbnailUrl: 'https://images.genius.com/2eb9ce93a389499c7600486814b661c0.1000x1000x1.png',
        },
        {
          title: 'Rayuan Perempuan Gila',
          description: 'Nadin Amizah',
          thumbnailUrl: 'https://i.scdn.co/image/ab67616d0000b2739bbf0358fb086f43ffde5148',
        },
        {
          title: 'Popular (feat. Playboi Carti)',
          description: 'The Weeknd & Madonna',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Zanaka_Cover.jpg/220px-Zanaka_Cover.jpg',
        },
        {
          title: '(It Goes Like) Nanana (Edit)',
          description: 'Peggy Gou',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/7/75/Peggy_Gou_-_%28It_Goes_Like%29_Nanana.png',
        },
        {
          title: 'Jiwa Yang Bersedih',
          description: 'Ghea Indrawari',
          thumbnailUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1f/ac/00/1fac0025-c5a5-2c4a-0fd5-a10fb1db003c/cover.jpg/1200x1200bf-60.jpg',
        },
        {
          title: 'Tattoo',
          description: 'Loreen',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Loreen_-_Tattoo.png',
        },
        {
          title: 'Paint The Town Red',
          description: 'Doja Cat',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Doja_Cat_-_Paint_the_Town_Red.png',
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
              {cards3.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  thumbnailUrl={card.thumbnailUrl}
                />
              ))}
            </div>
          </main>
          <Footer/>
        </div>
      );
};

export default HomePage;