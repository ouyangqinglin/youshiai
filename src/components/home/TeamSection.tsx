'use client';

import { team } from '@/data/home';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

export default function TeamSection() {
  return (
    <div className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-foregroun text-2xl font-semibold dark:text-white"
      >
        核心团队
      </motion.h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-center">
                <Icon name={member.icon} className="mx-auto mb-3 size-8 text-[#2563EB]" />
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.title}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{member.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
