'use client';

import { useState } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import { aiModels, features } from '@/data/ai-hub';

export default function AIHubPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 sm:py-24">
        <PageLayout containerClassName="py-0">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="section-title text-5xl sm:text-7xl">
              AI Hub
            </h1>
            <p className="section-description">
              探索我们的AI模型中心，体验最先进的大语言模型。我们提供多个主流模型，满足您的不同需求。
            </p>
          </div>
        </PageLayout>
      </section>

      {/* Features Section */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title text-4xl sm:text-5xl">
            核心特性
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group hover:border-primary/50"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon name={feature.icon} className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* Models Section */}
      <PageLayout className="bg-gray-50/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title text-4xl sm:text-5xl">
            可用模型
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {aiModels.map((model) => (
              <div
                key={model.id}
                className={`card group transition-all ${
                  selectedModel === model.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon name={model.icon} className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {model.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{model.provider}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedModel(model.id)}
                    className={`btn-secondary ${
                      selectedModel === model.id
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : ''
                    }`}
                  >
                    {selectedModel === model.id ? '已选择' : '选择'}
                  </button>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* CTA Section */}
      {/* <section className="bg-gradient-to-b from-primary to-primary/90 dark:from-primary/90 dark:to-primary">
        <PageLayout containerClassName="py-24" showBackground={false}>
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-16">
            <div className="absolute left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="section-title text-white">
                开始使用 AI Hub
              </h2>
              <p className="section-description text-white/80">
                选择您需要的模型，开始构建AI驱动的应用。
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/register"
                  className="btn-primary bg-white text-primary hover:bg-white/90"
                >
                  免费注册
                </a>
                <a
                  href="/docs"
                  className="btn-secondary bg-white/10 text-white hover:bg-white/20"
                >
                  查看文档
                </a>
              </div>
            </div>
          </div>
        </PageLayout>
      </section> */}
    </main>
  );
}
