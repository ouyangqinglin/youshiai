'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import Card from '@/components/ui/Card';
import { aiModels, features } from '@/data/ai-hub';

export default function AIHubPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <main className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-24 dark:from-primary/10 dark:via-background dark:to-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10"
        />
        <PageLayout containerClassName="py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-title text-5xl sm:text-7xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
            >
              AI Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="section-description text-muted-foreground dark:text-gray-400"
            >
              探索我们的AI模型中心，体验最先进的大语言模型。我们提供多个主流模型，满足您的不同需求。
            </motion.p>
          </motion.div>
        </PageLayout>
      </section>

      {/* Features Section */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-4xl sm:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
          >
            核心特性
          </motion.h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                  icon={
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/80 transition-colors group-hover:bg-primary/[0.02] dark:bg-gray-900 dark:group-hover:bg-primary/10">
                      <Icon name={feature.icon} className="size-6 text-primary dark:text-primary/80" />
                    </div>
                  }
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* Models Section */}
      <PageLayout className="bg-primary/[0.02] dark:bg-black/20">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-4xl sm:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
          >
            可用模型
          </motion.h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {aiModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`group overflow-hidden transition-all hover:-translate-y-1 ${
                    selectedModel === model.id
                      ? 'border-primary shadow-lg dark:border-primary/40'
                      : 'hover:border-primary/20 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-white/80 transition-colors group-hover:bg-primary/[0.02] dark:bg-gray-900 dark:group-hover:bg-primary/10">
                        <Icon name={model.icon} className="size-6 text-primary dark:text-primary/80" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {model.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{model.provider}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedModel(model.id)}
                      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-black ${
                        selectedModel === model.id
                          ? 'bg-primary text-white hover:bg-primary/90 dark:bg-primary/80 dark:hover:bg-primary/70'
                          : 'bg-white text-primary hover:bg-primary/[0.05] dark:bg-black/60 dark:text-primary/80 dark:hover:bg-primary/20'
                      }`}
                    >
                      {selectedModel === model.id ? '已选择' : '选择'}
                    </motion.button>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{model.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </PageLayout>
    </main>
  );
}