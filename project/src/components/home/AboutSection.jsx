import { motion } from 'framer-motion';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { hostImages } from '../../config/images';

export default function AboutSection() {
  return (
    <section className="py-12 bg-dark-card rounded-xl">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <UserGroupIcon className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-text-primary">Meet Your Hosts</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {hosts.map((host) => (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <img
                src={host.image}
                alt={host.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{host.name}</h3>
                <p className="text-text-secondary text-sm">{host.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const hosts = [
  {
    name: "Sarah Johnson",
    image: hostImages.sarahJohnson,
    bio: "Award-winning journalist and storyteller with 15 years of experience in investigative journalism."
  },
  {
    name: "Michael Chen",
    image: hostImages.michaelChen,
    bio: "Former radio host and producer, bringing humor and insight to complex topics."
  }
];

