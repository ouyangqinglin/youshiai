'use client';

import { advantages } from '@/data/home';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon';

export default function AdvantagesSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-primary/5 p-8 dark:bg-primary/10"
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-2xl font-semibold text-foreground"
      >
        核心优势
      </motion.h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage, index) => (
          <motion.div
            key={advantage.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
            viewport={{ once: true }}
            className="group p-4 text-center"
          >
            <div className="transition-all duration-300 group-hover:-translate-y-1">
              <Icon name={advantage.icon} className="mx-auto mb-3 size-8 text-primary" />
              <h4 className="mb-2 font-semibold text-foreground">{advantage.title}</h4>
              <p className="text-sm text-muted-foreground">{advantage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
