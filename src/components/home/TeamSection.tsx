'use client';

import { team } from '@/data/home';

import Card from '../ui/Card';
import Icon from '../ui/Icon';

export default function TeamSection() {
  return (
    <div className="mb-16">
      <h3 className="mb-8 text-center text-foregroun text-2xl font-semibold dark:text-white">
        核心团队
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <Card
            key={member.name}
            className="transition-shadow hover:shadow-md"
          >
            <div className="text-center">
              <Icon name={member.icon} className="mx-auto mb-3 size-8 text-[#2563EB]" />
              <h4 className="font-semibold text-foreground">{member.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.title}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{member.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
