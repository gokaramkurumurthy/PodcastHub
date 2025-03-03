import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function PodcastCard({ podcast, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={podcast.coverImage}
          alt={podcast.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onClick(podcast)}
          className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors"
        >
          <PlayIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">
          {podcast.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Hosted by {podcast.host}
        </p>
        <p className="text-sm text-gray-500 line-clamp-2">
          {podcast.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {podcast.category}
          </span>
          <span className="text-xs text-gray-500">
            {podcast.episodes.length} episodes
          </span>
        </div>
      </div>
    </motion.div>
  );
}