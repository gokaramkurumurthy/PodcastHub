import { memo } from 'react';
import PodcastCard from './PodcastCard';

function PodcastGrid({ podcasts, onPodcastClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          onClick={onPodcastClick}
        />
      ))}
    </div>
  );
}

export default memo(PodcastGrid);