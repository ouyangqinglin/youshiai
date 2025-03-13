'use client';

import { team } from '@/data/home';

import Card from '../ui/Card';
import Icon from '../ui/Icon';

export default function TeamSection() {
  return (
    <div className="mb-16">
      <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-white">
        核心团队
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <Card
            key={member.name}
            className="bg-white ring-1 ring-gray-200 transition-shadow hover:shadow-md dark:bg-gray-900 dark:ring-gray-800"
          >
            <div className="text-center">
              <Icon name={member.icon} className="mx-auto mb-3 size-8 text-[#2563EB]" />
              <h4 className="font-semibold text-gray-900 dark:text-white">{member.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.title}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{member.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
