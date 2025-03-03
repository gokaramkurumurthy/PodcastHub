import { motion } from 'framer-motion';
import { MicrophoneIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function ShowInfoSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-text-primary mb-8">About the Show</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-lighter p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 bg-primary/10 rounded-lg">
                  {stat.icon}
                </span>
                <h3 className="text-lg font-semibold text-text-primary">{stat.label}</h3>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-text-secondary">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-dark-lighter rounded-xl"
        >
          <p className="text-text-secondary leading-relaxed">
            Join us every week as we dive deep into fascinating stories and engage in thought-provoking 
            conversations with experts, innovators, and extraordinary individuals from all walks of life. 
            Our show combines in-depth research with compelling storytelling to bring you unique 
            perspectives on today's most interesting topics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  {
    label: "Episodes",
    value: "250+",
    description: "Weekly episodes since 2020",
    icon: <MicrophoneIcon className="h-5 w-5 text-primary" />
  },
  {
    label: "Released",
    value: "Every Tuesday",
    description: "New episodes weekly",
    icon: <CalendarIcon className="h-5 w-5 text-primary" />
  },
  {
    label: "Listeners",
    value: "2M+",
    description: "Monthly active listeners",
    icon: <ChartBarIcon className="h-5 w-5 text-primary" />
  }
];