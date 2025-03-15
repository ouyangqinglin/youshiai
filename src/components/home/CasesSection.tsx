'use client';

import { cases } from '@/data/home';

import Card from '../ui/Card';
import Icon from '../ui/Icon';

export default function CasesSection() {
  return (
    <div className="py-12">
      <h3 className="mb-8 text-center text-2xl font-semibold text-foregroun dark:text-white">
        成功案例
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cases.map((case_item) => (
          <Card
            key={case_item.title}
            className="transition-shadow hover:shadow-md dark:bg-gray-900 dark:ring-gray-800"
          >
            <div>
              <Icon name={case_item.icon} className="mb-4 size-8 text-[#2563EB]" />
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                {case_item.title}
              </h4>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {case_item.description}
              </p>
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
        ))}
      </div>
    </div>
  );
}
