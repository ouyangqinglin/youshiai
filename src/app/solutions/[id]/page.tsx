'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import PageLayout from '@/components/layout/PageLayout';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=1200&auto=format&fit=crop&q=80',
    title: 'AI 教育解决方案',
    description: '为教育机构提供智能化教学管理和个性化学习体验'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    title: '智能教学系统',
    description: '基于深度学习的智能教学辅助系统'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
    title: '数据分析平台',
    description: '全方位的教学数据分析和可视化平台'
  }
];

const demoVideo = 'https://www.youtube.com/embed/your-video-id';

const features = [
  {
    title: '用户场景',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    darkBgColor: 'dark:bg-blue-500/10',
    darkTextColor: 'dark:text-blue-400',
    items: [
      '学生需要个性化学习辅导',
      '教师需要自动化教学管理工具',
      '教育机构需要智能化运营系统'
    ]
  },
  {
    title: '解决方案',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    darkBgColor: 'dark:bg-emerald-500/10',
    darkTextColor: 'dark:text-emerald-400',
    items: [
      'AI 个性化学习助手',
      '智能题库和作业系统',
      '教学质量分析平台'
    ]
  },
  {
    title: '价值优势',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    darkBgColor: 'dark:bg-purple-500/10',
    darkTextColor: 'dark:text-purple-400',
    items: [
      '提升学习效率30%',
      '减少教师工作负担50%',
      '教学质量提升40%'
    ]
  }
];

export default function SolutionDetailPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section with Swiper */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="aspect-[21/9]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <PageLayout>
                    <div className="flex h-full flex-col justify-end pb-16 sm:pb-20 lg:pb-24">
                      <div className="max-w-3xl">
                        <h1 className="mt-12 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                          {slide.title}
                        </h1>
                        <p className="mt-4 max-w-xl text-base text-gray-200 sm:text-lg lg:text-xl">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </PageLayout>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-16">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-xl bg-muted shadow-lg">
              <iframe
                src={demoVideo}
                title="Solution Demo"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Features Section */}
      <section className="pb-16 lg:pb-20">
        <PageLayout>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="overflow-hidden rounded-2xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <h2 className={`text-xl font-bold ${feature.color}`}>
                  {feature.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className={`flex size-6 shrink-0 items-center justify-center rounded-full ${feature.bgColor} ${feature.darkBgColor} text-sm font-medium ${feature.color} ${feature.darkTextColor}`}>
                        {itemIndex + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageLayout>
      </section>
    </main>
  );
} 