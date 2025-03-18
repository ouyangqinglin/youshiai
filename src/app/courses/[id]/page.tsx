'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
    <main className="flex min-h-screen flex-col bg-background">
      {/* Carousel Section */}
      <section className="relative h-[500px] w-full lg:h-[600px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {course.slides.map((slide, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-8 text-white lg:p-12"
                >
                  <h2 className="text-3xl font-bold lg:text-4xl">{slide.title}</h2>
                  {slide.description && (
                    <p className="mt-4 max-w-2xl text-lg text-gray-200">{slide.description}</p>
                  )}
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="relative -mt-20 overflow-hidden py-12 sm:py-16">
        <PageLayout containerClassName="py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-card to-card/80 p-8 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl lg:max-w-4xl lg:p-12"
          >
            <h1 className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {course.description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-4"
            >
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <Icon name="play" className="size-5" />
                观看介绍视频
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-primary to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </motion.div>
          </motion.div>
        </PageLayout>
      </section>

      {/* Course Info */}
      <PageLayout>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Course Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl lg:p-8"
                >
                  <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent">
                    课程特点
                  </h2>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {course.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="rounded-full bg-primary p-1">
                          <Icon name="check-circle" className="size-5 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Course Outline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl lg:p-8"
                >
                  <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent">
                    课程大纲
                  </h2>
                  <div className="mt-6 space-y-4">
                    {course.outline.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group overflow-hidden rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-1"
                      >
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                            {index + 1}
                          </span>
                          {section.title}
                        </h3>
                        <ul className="mt-4 grid gap-3">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <motion.li
                              key={lessonIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: lessonIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <Icon name="play-circle" className="size-5 text-primary" />
                              {lesson.title}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sticky top-20 overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl lg:p-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Icon name="clock" className="size-5" />
                    <span>课程时长：{course.duration}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Icon name="bar-chart" className="size-5" />
                    <span>难度：{course.level}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Icon name="users" className="size-5" />
                    <span>已有 {course.students} 人参加</span>
                  </motion.div>
                  <div className="my-6 h-px bg-border" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-foreground">{course.price}</div>
                    <button className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                      立即报名
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Instructor Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl lg:p-8"
              >
                <h3 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-lg font-semibold text-transparent">
                  讲师信息
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 flex items-center gap-4"
                >
                  <div className="relative size-16 overflow-hidden rounded-full">
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{course.instructor.name}</div>
                    <div className="text-sm text-muted-foreground">{course.instructor.title}</div>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {course.instructor.bio}
                </motion.p>
              </motion.div>
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
