'use client';

import { advantages } from '@/data/home';

import Icon from '../ui/Icon';

export default function AdvantagesSection() {
  return (
    <div className="rounded-2xl bg-primary/5 p-8 dark:bg-primary/10">
      <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
        核心优势
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <div key={advantage.title} className="p-4 text-center">
            <Icon name={advantage.icon} className="mx-auto mb-3 size-8 text-primary" />
            <h4 className="mb-2 font-semibold text-foreground">{advantage.title}</h4>
            <p className="text-sm text-muted-foreground">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
