import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import axios from 'axios';
import '../public/styles/global.css';
import '../public/styles/card1.css';
import { rapidApiKey, rapidApiHost } from '../apiConfig';

// Dynamically import Card with SSR disabled
const Card = dynamic(() => import('../components/CardDiscover'), { ssr: false });

interface CardData {
  song_title: string;
  song_description: string;
  imageUrl: string;
}

interface Country {
  id: string;
  name: string;
  listid: string;
}

const Discover = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('ID'); // Default to Indonesia
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountryName, setSelectedCountryName] = useState<string>(''); // To store the selected country name

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get('https://shazam.p.rapidapi.com/charts/list', {
          headers: {
            'X-RapidAPI-Key': '5a1efbbdf3mshb7909fe3d931d6ap17410fjsn9540b090d835',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
          },
        });

        const countriesData = response.data.countries || [];
        setCountries(countriesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    const fetchShazamData = async () => {
      try {
        const response = await axios.get(`https://shazam.p.rapidapi.com/charts/track`, {
          params: {
            locale: 'en-EN',
            listId: selectedCountry,
            pageSize: '10', // Adjust the pageSize as needed
            startFrom: '0',
          },
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': rapidApiHost
          },
        });

        const tracks = response.data.tracks || [];
        const topSongs: CardData[] = tracks.map((track: any) => ({
          song_title: track.title,
          song_description: track.subtitle,
          imageUrl: track.images.coverart,
        }));
        setCardData(topSongs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShazamData();
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = event.target.value;
    setSelectedCountry(selectedCountryId);

    // Find and set the selected country name based on the selected country id
    const country = countries.find((c) => c.listid === selectedCountryId);
    if (country) {
      setSelectedCountryName(country.name);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <br />
        <hr></hr>
        <h3 className='title'>The most trending tracks in {selectedCountryName} this week</h3>
        <br />

        {/* Country Selector */}
        <label>Select Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.id} value={country.listid}>
              {country.name}
            </option>
          ))}
        </select>

        {/* Display top songs using Card component */}
        <div className="containerAll">
          {cardData.map((card, index) => (
            <Card
              key={index}
              song_title={card.song_title}
              song_description={card.song_description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
