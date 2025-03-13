import type { Solution } from '@/types';

export const solutions: Solution[] = [
  {
    title: '教育行业解决方案',
    icon: 'graduation-cap',
    description:
      '为教育机构提供智能化教学解决方案，提升教学效率和学习效果。通过AI技术，我们帮助教师更好地了解学生的学习情况，为学生提供个性化的学习建议。',
    videoCover: '/videos/education-cover.jpg',
    videoUrl: '/videos/education-demo.mp4',
    scenarios: [
      {
        icon: 'book-open',
        title: '课堂教学',
        description: '实时分析课堂互动，提供教学建议',
        detail: '通过AI技术分析学生的课堂表现，为教师提供教学建议，提高课堂效率。',
      },
      {
        icon: 'users',
        title: '小组讨论',
        description: '智能分组和讨论引导',
        detail: '基于学生特点智能分组，并提供讨论主题和引导建议。',
      },
      {
        icon: 'clipboard-check',
        title: '作业批改',
        description: '自动批改和个性化反馈',
        detail: '利用AI自动批改作业，并为每个学生提供个性化的改进建议。',
      },
    ],
    solutions: [
      {
        icon: 'brain',
        title: '智能教学助手',
        features: ['实时课堂分析', '个性化教学建议', '学情报告生成'],
      },
      {
        icon: 'chart-bar',
        title: '学习分析系统',
        features: ['学习行为追踪', '知识图谱分析', '学习预警提醒'],
      },
      {
        icon: 'users',
        title: '协作学习平台',
        features: ['智能分组系统', '讨论行为分析', '协作效果评估'],
      },
    ],
    values: [
      {
        number: '30%',
        unit: '↑',
        description: '教学效率提升',
      },
      {
        number: '25%',
        unit: '↑',
        description: '学习成绩提高',
      },
      {
        number: '95%',
        unit: '',
        description: '师生使用满意度',
      },
    ],
  },
  // 可以继续添加其他行业的解决方案
];
