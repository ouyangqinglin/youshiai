'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { solutions } from '@/data/solutions';
import PageLayout from '@/components/layout/PageLayout';

interface Props {
  params: {
    id: string;
  };
}

export default function SolutionDetailPage({ params }: Props) {
  const solution = solutions.find((s) => s.id === params.id);

  if (!solution) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section with Swiper */}
      {solution.slides && solution.slides.length > 0 && (
        <section className="relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="aspect-[21/9]"
          >
            {solution.slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  >
                    <PageLayout>
                      <div className="flex h-full flex-col justify-end pb-16 sm:pb-20 lg:pb-24">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="max-w-3xl"
                        >
                          <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mt-12 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                          >
                            {slide.title}
                          </motion.h1>
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-4 max-w-xl text-base text-gray-200 sm:text-lg lg:text-xl"
                          >
                            {slide.description}
                          </motion.p>
                        </motion.div>
                      </div>
                    </PageLayout>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Video Section */}
      {solution.demoVideo && (
        <section className="py-12 lg:py-16">
          <PageLayout>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <div className="aspect-video overflow-hidden rounded-xl bg-muted shadow-lg">
                <iframe
                  src={solution.demoVideo}
                  title="Solution Demo"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </PageLayout>
        </section>
      )}

      {/* Features Section */}
      <section className="pb-16 lg:pb-20">
        <PageLayout>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-xl font-bold text-transparent">
                  {feature.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                        <span className="text-sm font-medium">{itemIndex + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </PageLayout>
      </section>

      {/* Cases Section */}
      {solution.cases && solution.cases.length > 0 && (
        <section className="bg-muted/50 pb-16 lg:pb-20">
          <PageLayout>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 text-2xl font-bold text-foreground"
            >
              客户案例
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {solution.cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-lg font-bold text-transparent">
                    {caseItem.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{caseItem.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {caseItem.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-xl font-bold text-primary">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </PageLayout>
        </section>
      )}
    </main>
  );
} 