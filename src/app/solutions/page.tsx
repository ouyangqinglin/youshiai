'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import { solutions } from '@/data/solutions';

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 sm:py-24 dark:from-primary/20 dark:via-primary/10 dark:to-background">
        <div className="absolute -top-20 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <PageLayout>
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent sm:text-5xl lg:text-6xl"
            >
              解决方案
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground sm:text-xl"
            >
              为企业提供全方位的AI解决方案，助力数字化转型
            </motion.p>
          </div>
        </PageLayout>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-24">
        <PageLayout>
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                  {index % 2 === 0 ? (
                    <>
                      {/* Image Section - Left */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              duration: 0.6,
                              ease: [0.23, 1, 0.32, 1]
                            }
                          }
                        }}
                        className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-muted shadow-lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-8 left-8 right-8">
                          <h2 className="text-3xl font-bold text-white lg:text-4xl">
                            {solution.title}
                          </h2>
                          <p className="mt-2 text-lg text-white/90">
                            {solution.subtitle}
                          </p>
                        </div>
                      </motion.div>

                      {/* Content Section - Right */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              duration: 0.6,
                              delay: 0.2,
                              ease: [0.23, 1, 0.32, 1]
                            }
                          }
                        }}
                        className="flex flex-col justify-center"
                      >
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-foreground">用户场景</h3>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                          {solution.features[0].items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-4">
                              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">
                                <span className="text-sm font-medium">{itemIndex + 1}</span>
                              </div>
                              <span className="text-lg text-muted-foreground">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <Link
                          href={`/solutions/${solution.id}`}
                          className="mt-8 inline-flex w-fit items-center gap-2 text-primary hover:text-primary/90 dark:text-primary/90 dark:hover:text-primary/80"
                        >
                          了解更多
                          <Icon name="arrow-right" className="size-4" />
                        </Link>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Content Section - Left */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              duration: 0.6,
                              delay: 0.2,
                              ease: [0.23, 1, 0.32, 1]
                            }
                          }
                        }}
                        className="flex flex-col justify-center"
                      >
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-foreground">用户场景</h3>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                          {solution.features[0].items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-4">
                              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">
                                <span className="text-sm font-medium">{itemIndex + 1}</span>
                              </div>
                              <span className="text-lg text-muted-foreground">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <Link
                          href={`/solutions/${solution.id}`}
                          className="mt-8 inline-flex w-fit items-center gap-2 text-primary hover:text-primary/90 dark:text-primary/90 dark:hover:text-primary/80"
                        >
                          了解更多
                          <Icon name="arrow-right" className="size-4" />
                        </Link>
                      </motion.div>

                      {/* Image Section - Right */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              duration: 0.6,
                              ease: [0.23, 1, 0.32, 1]
                            }
                          }
                        }}
                        className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-muted shadow-lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-8 left-8 right-8">
                          <h2 className="text-3xl font-bold text-white lg:text-4xl">
                            {solution.title}
                          </h2>
                          <p className="mt-2 text-lg text-white/90">
                            {solution.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
