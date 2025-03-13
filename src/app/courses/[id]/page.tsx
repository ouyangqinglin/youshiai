'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import VideoModal from '@/components/ui/VideoModal';
import { courses } from '@/data/courses';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return null;
  }

  return (
    <main className="flex flex-col">
      {/* Carousel Section */}
      <section className="relative h-[400px] w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {course.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl font-bold">{slide.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
        <PageLayout containerClassName="py-0">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="section-title text-4xl sm:text-5xl">
              {course.title}
            </h1>
            <p className="section-description mt-4">
              {course.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Icon name="play" className="size-5" />
                观看介绍视频
              </button>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Course Info */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="section-title text-2xl">课程特点</h2>
                  <ul className="mt-4 space-y-4">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="check-circle" className="size-6 shrink-0 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="section-title text-2xl">课程大纲</h2>
                  <div className="mt-4 space-y-4">
                    {course.outline.map((section, index) => (
                      <div key={index} className="card group hover:border-primary/50">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                        <ul className="mt-2 space-y-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <Icon name="play-circle" className="size-5 text-primary" />
                              {lesson.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card group hover:border-primary/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon name="clock" className="size-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">课程时长：{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="bar-chart" className="size-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">难度：{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="users" className="size-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">已有 {course.students} 人参加</span>
                  </div>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{course.price}</div>
                    <button className="btn-primary mt-4 w-full">
                      立即报名
                    </button>
                  </div>
                </div>
              </div>

              <div className="card group mt-6 hover:border-primary/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">讲师信息</h3>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{course.instructor.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{course.instructor.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{course.instructor.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={course.videoUrl || ''}
      />
    </main>
  );
}
