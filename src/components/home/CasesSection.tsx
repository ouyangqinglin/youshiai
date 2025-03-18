'use client';

import { cases } from '@/data/home';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Link from 'next/link';

export default function CasesSection() {
  return (
    <div className="py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-2xl font-semibold text-foregroun dark:text-white"
      >
        成功案例
      </motion.h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cases.map((case_item, index) => (
          <motion.div
            key={case_item.title}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
            viewport={{ once: true }}
          >
            <Link href={`/cases/${case_item.id}`}>
              <Card className="flex h-[280px] flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-900 dark:ring-gray-800">
                <div className="flex h-full flex-col">
                  <div className="mb-auto">
                    <Icon name={case_item.icon} className="mb-4 size-8 text-[#2563EB]" />
                    <h4 className="mb-2 text-lg font-semibold text-foreground line-clamp-1">
                      {case_item.title}
                    </h4>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {case_item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {case_item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full bg-[#2563EB]/5 px-3 py-1 text-sm text-[#2563EB] transition-colors hover:bg-[#2563EB]/10 dark:bg-[#2563EB]/20 dark:text-[#2563EB]/90"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
