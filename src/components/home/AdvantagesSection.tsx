'use client';

import { advantages } from '@/data/home';

import Icon from '../ui/Icon';

export default function AdvantagesSection() {
  return (
    <div className="rounded-2xl bg-[#2563EB]/5 p-8 dark:bg-[#2563EB]/10">
      <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-white">
        核心优势
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <div key={advantage.title} className="p-4 text-center">
            <Icon name={advantage.icon} className="mx-auto mb-3 size-8 text-[#2563EB]" />
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{advantage.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
