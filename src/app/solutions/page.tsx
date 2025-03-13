'use client';

import { useState } from 'react';

import VideoModal from '@/components/solutions/VideoModal';
import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import { solutions } from '@/data/solutions';

export default function SolutionsPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const solution = solutions[0];

  if (!solution) {
    return (
      <PageLayout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">暂无解决方案</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 sm:py-24">
        <PageLayout containerClassName="py-0">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="section-title text-5xl sm:text-7xl">
              {solution.title}
            </h1>
            <p className="section-description">
              {solution.description}
            </p>
            <div className="mt-10 flex gap-6">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Icon name="play" className="size-5" />
                观看演示
              </button>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Scenarios Section */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title">应用场景</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solution.scenarios.map((scenario, index) => (
              <div
                key={index}
                className="card group hover:border-primary/50"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon name={scenario.icon} className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {scenario.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{scenario.description}</p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{scenario.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* Solutions Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <PageLayout>
          <div className="mx-auto max-w-7xl">
            <h2 className="section-title">解决方案</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {solution.solutions.map((item, index) => (
                <div
                  key={index}
                  className="card group hover:border-primary/50"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon name={item.icon} className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <Icon name="check" className="mr-2 size-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Values Section */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title">价值成效</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solution.values.map((value, index) => (
              <div
                key={index}
                className="card group hover:border-primary/50"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-primary">
                    {value.number}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{value.unit}</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={solution.videoUrl}
      />
    </main>
  );
}
