import { motion } from 'framer-motion';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import PodcastCard from '../podcast/PodcastCard';

export default function TrendingSection({ podcasts }) {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-6">
        <ChartBarIcon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-white-900">Trending Now</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => (
          <motion.div
            key={podcast.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PodcastCard podcast={podcast} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}