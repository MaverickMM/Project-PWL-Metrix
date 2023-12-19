import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import axios from 'axios';
import '../styles/global.css';
import '../styles/card.css';

interface Song {
  title: string;
  subtitle: string;
  // image: string;
  images: {
    coverart: string;
  };
}

interface HomePageProps {
  shazamTopSongs: Song[];
}

// Dynamically import Card with SSR disabled
const Card = dynamic(() => import('../components/Card'), { ssr: false });

const HomePage: React.FC<HomePageProps> = ({ shazamTopSongs }) => {
  return (
    <div>
      <Header />
      <main>
        <h1>Browse</h1>

        {/* Use .card-container class for consistent layout */}
        <div className="card-container">
          {shazamTopSongs.map((song: Song, index: number) => (
            <Card
              key={index}
              title={song.title}
              description={song.subtitle}
              thumbnailUrl={song.images.coverart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {
      locale: 'en-US',
      pageSize: '20',
      startFrom: '0',
      listId: 'ip-city-chart-1642911'
    },
    headers: {
      'X-RapidAPI-Key': '5a1efbbdf3mshb7909fe3d931d6ap17410fjsn9540b090d835',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data); // Log the entire API response
    const shazamTopSongs: Song[] = response.data.tracks || [];
    return {
      props: {
        shazamTopSongs
      },
      revalidate: 60 * 60, // revalidate every 1 hour
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        shazamTopSongs: [],
      },
    };
  }
}
