import { useState, useCallback } from 'react';
import { podcasts, categories } from '../data/mockData';
import FeaturedCarousel from '../components/home/FeaturedCarousel';
import SearchBar from '../components/home/SearchBar';
import TrendingSection from '../components/home/TrendingSection';
import CategoryFilter from '../components/home/CategoryFilter';
import PodcastGrid from '../components/podcast/PodcastGrid';
import AudioPlayer from '../components/player/AudioPlayer';
import AboutSection from '../components/home/AboutSection';
import ShowInfoSection from '../components/home/ShowInfoSection';

export default function Home() {
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchResults, setSearchResults] = useState(null);

  const filteredPodcasts = selectedCategory === 'All'
    ? podcasts
    : podcasts.filter(podcast => podcast.category === selectedCategory);

  const handlePodcastClick = useCallback((podcast) => {
    setSelectedPodcast({
      title: podcast.title,
      audioUrl: podcast.episodes[0].audioUrl
    });
  }, []);

  const handleSearch = useCallback((query) => {
    const results = podcasts.filter(podcast =>
      podcast.title.toLowerCase().includes(query.toLowerCase()) ||
      podcast.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setSearchResults(null);
  }, []);

  const trendingPodcasts = podcasts.slice(0, 3);

  return (
    <div className="min-h-screen bg-dark pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <FeaturedCarousel podcasts={podcasts} />
        </div>

        <div className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        <TrendingSection podcasts={trendingPodcasts} />

        <AboutSection />

        <ShowInfoSection />

        <div className="mt-12">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <PodcastGrid 
            podcasts={searchResults || filteredPodcasts}
            onPodcastClick={handlePodcastClick}
          />
        </div>
      </div>

      {selectedPodcast && (
        <AudioPlayer
          audioUrl={selectedPodcast.audioUrl}
          title={selectedPodcast.title}
        />
      )}
    </div>
  );
}