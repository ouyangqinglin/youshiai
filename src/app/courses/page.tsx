'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 sm:py-24 dark:from-primary/20 dark:via-primary/10 dark:to-background">
        <div className="absolute -top-20 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <PageLayout>
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent sm:text-5xl lg:text-6xl"
            >
              AI课程中心
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground sm:text-xl"
            >
              从入门到精通，系统学习AI技术，提升职业竞争力
            </motion.p>
          </div>
        </PageLayout>
      </section>

      {/* Courses Section */}
      <section className="py-16 lg:py-24">
        <PageLayout>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-primary/10 dark:hover:shadow-primary/20"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left: Image */}
                  <div className="relative w-full md:w-[400px] aspect-[16/9] md:aspect-auto overflow-hidden">
                    <Image
                      src={course.image || '/images/courses/placeholder.jpg'}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="px-4 py-1.5 text-sm font-medium text-white bg-primary/90 backdrop-blur-md rounded-full shadow-lg"
                      >
                        ¥{course.price.replace('¥', '')}
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="px-4 py-1.5 text-sm font-medium text-white bg-black/50 backdrop-blur-md rounded-full shadow-lg"
                      >
                        {course.level === 'beginner' ? '商业人士' : '开发者'}
                      </motion.span>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col bg-card">
                    {/* Top Tag */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full ring-1 ring-primary/20">
                        热门推荐
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="clock" className="size-4" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-6">
                      <div className="flex items-start gap-3 group/stat">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 group-hover/stat:bg-primary/20 dark:group-hover/stat:bg-primary/30 transition-colors duration-300">
                          <Icon name="book" className="size-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">课程模块</div>
                          <div className="text-sm text-muted-foreground">{course.outline.length}个专题</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group/stat">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 group-hover/stat:bg-primary/20 dark:group-hover/stat:bg-primary/30 transition-colors duration-300">
                          <Icon name="users" className="size-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">目标学员</div>
                          <div className="text-sm text-muted-foreground">4类人群</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group/stat">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 group-hover/stat:bg-primary/20 dark:group-hover/stat:bg-primary/30 transition-colors duration-300">
                          <Icon name="graduation-cap" className="size-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">学习成果</div>
                          <div className="text-sm text-muted-foreground">{course.features.length}项技能</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/courses/${course.id}`}
                      className="mt-8 self-end inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    >
                      查看详情
                      <Icon name="arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
