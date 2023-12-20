// pages/SearchResultsPage.tsx
import { useRouter } from 'next/router';
import TrackCard from '../components/TrackCard';

const SearchResultsPage = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  // Use searchTerm to fetch search results (you might want to use useEffect here)

  // Dummy searchResults for demonstration
  const searchResults = [
    // ... (your search results)
  ];

  return (
    <div>
      <h1>Search Results for "{searchTerm}"</h1>
      {searchResults.map((result) => (
        <TrackCard
          key={result.id}
          title={result.title}
          subtitle={result.subtitle}
          image={result.image}
          url={result.url}
        />
      ))}
    </div>
  );
};

export default SearchResultsPage;
