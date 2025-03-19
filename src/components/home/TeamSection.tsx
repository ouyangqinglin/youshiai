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
        className="mb-12 text-center text-3xl font-bold text-foreground dark:text-white"
      >
        核心团队
      </motion.h3>
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[calc(50%-12px)] lg:w-1/5"
          >
            <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center p-4 text-center">
                <Icon name={member.icon} className="mb-3 size-10 text-[#2563EB] transition-transform duration-300 group-hover:scale-110" />
                <h4 className="mb-1 text-base font-bold text-foreground">{member.name}</h4>
                <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">{member.title}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{member.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
