'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cases } from '@/data/cases';
import PageLayout from '@/components/layout/PageLayout';

interface Props {
  params: {
    id: string;
  };
}

export default function CaseDetailPage({ params }: Props) {
  const caseItem = cases.find((c) => c.id === params.id);

  if (!caseItem) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-full w-full"
        >
          <Image
            src={caseItem.coverImage}
            alt={caseItem.title}
            fill
            className="object-cover"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0">
          <PageLayout>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pb-12 pt-20"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                {caseItem.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 max-w-2xl text-lg text-gray-300"
              >
                {caseItem.description}
              </motion.p>
            </motion.div>
          </PageLayout>
        </div>
      </section>

      {/* Client Introduction Section */}
      <section className="py-16">
        <PageLayout>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-card to-card/80 p-8 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl lg:p-12"
          >
            <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent">
              客户简介
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-foreground">
                {caseItem.client?.name || caseItem.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {caseItem.client?.description || caseItem.description}
              </p>
            </div>
          </motion.div>
        </PageLayout>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <PageLayout>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 核心功能 */}
            <div className="flex flex-col space-y-8">
              {caseItem.features.map((featureGroup, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent">
                    {featureGroup.title}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {featureGroup.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 技术细节 */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent">
                  技术细节
                </h2>
                <div className="mt-6 space-y-4">
                  {caseItem.techDetails.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Showcase Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <PageLayout>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">效果展示</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseItem.showcase.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </PageLayout>
      </section>
    </main>
  );
}