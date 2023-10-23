import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import '../public/styles/global.css';
import '../public/styles/card1.css';

// Dynamically import Card with SSR disabled
const Card = dynamic(() => import('../components/CardDiscover'), { ssr: false });

const Discover = () => {
      const cardData = [
    {
        song_title: 'As the World Caves In',
        song_description: 'Sarah Cothran',
        imageUrl: '/Images/As The World Caves In.jpg',
    },
    {
        song_title: '(It Goes Like) Nanana',
        song_description: 'Peggy Gou',
        imageUrl: '/Images/(It Goes Like) Nanana.jpg',
    },
    {
        song_title: 'Jiwa Yang Bersedih',
        song_description: 'Ghea Indrawari',
        imageUrl: '/Images/Jiwa yang Bersedih.jpg',
    },
    {
        song_title: 'Tattoo',
        song_description: 'Loreen',
        imageUrl: '/Images/Tatto.png',
    },
    {
        song_title: 'Satu-Satu',
        song_description: 'Idgitaf',
        imageUrl: '/Images/Satu-Satu.jpg',
    },
    {
        song_title: 'Moonlight',
        song_description: 'Kali Uchis',
        imageUrl: '/Images/Moonlight.png',
    },
    {
        song_title: 'Somebodys Pleasure',
        song_description: 'Aziz Hedra',
        imageUrl: '/Images/Somebodys Pleasure.jpg',
    },
    {
        song_title: 'Rayuan Perempuan Gila',
        song_description: 'Nadin Amizah',
        imageUrl: '/Images/Rayuan Perempuan Gila.jpg',
    },
    {
        song_title: 'Popular (feat. Playboi Carti)',
        song_description: 'The Weeknd & Madonna',
        imageUrl: '/Images/Popular.jpg',
    },
    {
        song_title: ' Paint The Town Red',
        song_description: 'Doja Cat',
        imageUrl: '/Images/Paint the Town Red.jpg',
    },
];

  return (
        <div>
            <Header />
            <main>
                <br/>
                <hr></hr>
                <h3 className='title'>The most trending tracks in Indonesia this week</h3>
                <br/>
               
                {/* Pass the cardData object as props */}
                <div className="containerAll">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        song_title={card.song_title} 
                        song_description={card.song_description} 
                        imageUrl={card.imageUrl} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Discover;
