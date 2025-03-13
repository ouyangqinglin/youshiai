import type { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'ai-business',
    title: 'AI商业落地课',
    description: '系统学习AI商业应用的核心要素，从逻辑思维到实际落地，全方位提升AI商业实践能力。',
    icon: 'briefcase',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60',
    duration: '8周',
    level: 'beginner',
    price: '¥1999',
    students: 680,
    lessons: 32,
    features: ['AI逻辑思维', '商业思维', '认知决策', 'AI场景赋能', 'AI实操落地'],
    instructor: {
      name: '陈教授',
      title: 'AI商业顾问',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60',
      bio: '前阿里巴巴AI商业化负责人，具有12年AI商业实践经验。',
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60',
        title: 'AI商业思维',
      },
      {
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60',
        title: 'AI场景应用',
      }
    ],
    outline: [
      {
        title: '第一周：AI商业思维',
        lessons: [
          {
            title: '1.1 AI逻辑思维',
            duration: '60分钟',
            description: '掌握AI应用的逻辑思维方法'
          },
          {
            title: '1.2 商业思维',
            duration: '60分钟',
            description: '学习AI商业化的关键要素'
          }
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'ai-dev-tools',
    title: '开发者AI工具提效课',
    description: '全面提升开发效率的AI工具应用课程，覆盖从需求分析到测试部署的全流程。',
    icon: 'tool',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630be2e?w=800&auto=format&fit=crop&q=60',
    duration: '10周',
    level: 'intermediate',
    price: '¥2499',
    students: 520,
    lessons: 40,
    features: ['软件工程基础', '项目管理基础', 'AI代码编写', 'AI测试用例', 'AI需求编写', 'AI PPT制作'],
    instructor: {
      name: '林工程师',
      title: '高级开发工程师',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60',
      bio: '前谷歌工程师，专注AI开发工具研究。',
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630be2e?w=800&auto=format&fit=crop&q=60',
        title: 'AI开发工具',
      }
    ],
    outline: [
      {
        title: '第一周：开发基础',
        lessons: [
          {
            title: '1.1 软件工程基础',
            duration: '90分钟',
            description: '掌握软件开发的基本原理'
          }
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'fullstack-bootcamp',
    title: '全栈应用开发训练营',
    description: '从前端到后端的全面技术培训，打造全能型开发工程师。',
    icon: 'code',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    duration: '16周',
    level: 'advanced',
    price: '¥4999',
    students: 320,
    lessons: 64,
    features: ['Web端技术实战', 'APP端技术实战', '小程序技术实战', '后端技术实战', '端到端全站开发'],
    instructor: {
      name: '张全栈',
      title: '全栈开发专家',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=60',
      bio: '十年全栈开发经验，精通前后端技术。',
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
        title: '全栈开发',
      }
    ],
    outline: [
      {
        title: '第一周：前端基础',
        lessons: [
          {
            title: '1.1 Web开发基础',
            duration: '90分钟',
            description: '学习现代Web开发技术'
          }
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'ai-dev-engineer',
    title: 'AI应用开发工程师训练营',
    description: '系统学习AI应用开发，从基础理论到实战项目，培养专业AI开发工程师。',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    duration: '20周',
    level: 'intermediate',
    price: '¥5999',
    students: 280,
    lessons: 80,
    features: ['大模型技术基础', 'RAG框架', 'AI Agent开发', '多模态应用开发', '实战项目开发'],
    instructor: {
      name: '王博士',
      title: 'AI开发专家',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60',
      bio: '前百度AI研究员，专注大模型应用开发。',
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
        title: 'AI应用开发',
      }
    ],
    outline: [
      {
        title: '第一周：大模型基础',
        lessons: [
          {
            title: '1.1 大模型技术基础',
            duration: '120分钟',
            description: '学习大模型的核心概念和应用'
          }
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'ai-architect',
    title: '专家级AI应用架构师训练营',
    description: '深入学习企业级AI解决方案架构，培养高端AI架构师人才。',
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    duration: '24周',
    level: 'expert',
    price: '¥9999',
    students: 150,
    lessons: 96,
    features: ['大模型API实战', '企业级解决方案', 'RAG详解与实战', '大模型部署与训练', '企业级项目实战'],
    instructor: {
      name: '李架构师',
      title: '首席架构师',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60',
      bio: '20年架构经验，专注企业AI架构设计。',
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
        title: 'AI架构设计',
      }
    ],
    outline: [
      {
        title: '第一周：架构基础',
        lessons: [
          {
            title: '1.1 企业架构设计',
            duration: '120分钟',
            description: '学习企业级AI架构设计方法'
          }
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];
