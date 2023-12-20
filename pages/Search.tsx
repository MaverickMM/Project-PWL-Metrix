// pages/index.tsx

import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import Card from '../components/Card'; // Adjust the path based on your project structure
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/card.css';
import styles from '../styles/search.module.css';


interface SearchResult {
  title: string;
  description: string;
  thumbnailUrl: string;
}

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const searchOptions = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    headers: {
      'X-RapidAPI-Key': '23dc7a4524mshd5b2461fce0e074p110c76jsn8c9eb8a3bdca',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    },
    params: {
      term: '',
      locale: 'en-US',
      offset: '0',
      limit: '5'
    }
  };

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length > 2) {
      searchOptions.params.term = term;

      try {
        const searchResponse = await axios.request(searchOptions);
        setSearchResults(searchResponse.data.tracks.hits.map((hit: any) => ({
          title: hit.track.title,
          description: hit.track.subtitle,
          thumbnailUrl: hit.track.images.coverart
        })));
      } catch (error) {
        console.error(error);
      }
    } else {
      // Clear results if the search term is less than 3 characters
      setSearchResults([]);
    }
  };

  return (
    <div>
    <Header />
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className={styles.searchBar}
      />
      <div className="card-container">
        {searchResults.map((result, index) => (
          <Card
            key={index}
            title={result.title}
            description={result.description}
            thumbnailUrl={result.thumbnailUrl}
          />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Search;
