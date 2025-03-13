'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import Icon from '@/components/ui/Icon';
import { courses } from '@/data/courses';

const levelLabels = {
  beginner: '入门',
  intermediate: '中级',
  advanced: '高级',
};

export default function CoursesPage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="section-title text-4xl font-bold mb-4">AI课程中心</h1>
          <p className="section-description text-xl max-w-2xl mx-auto">
            从入门到精通，系统学习AI技术，提升职业竞争力
          </p>
        </section>

        {/* Courses Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link 
              key={course.id} 
              href={`/courses/${course.id}`}
              className="card group overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={course.image || '/images/courses/placeholder.jpg'}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{course.description}</p>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {course.duration}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {course.lessons}课时
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-primary">
                    {course.price}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.students}人学习
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA Section */}
        {/* <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <h2 className="section-title text-3xl font-bold mb-4">开启你的AI学习之旅</h2>
          <p className="section-description text-lg mb-6 max-w-2xl mx-auto">
            选择适合你的课程，跟随行业专家学习AI技术，提升职业竞争力
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            咨询课程
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </section> */}
      </div>
    </PageLayout>
  );
}
