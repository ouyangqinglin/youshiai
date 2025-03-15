import type { Advantage, Case, Feature, TeamMember, Testimonial } from '@/types';

export const features: Feature[] = [
  {
    icon: 'i-lucide-brain-circuit',
    title: '多模型集成',
    description: '支持 ChatGPT、Gemini、Claude 等多个顶级大语言模型，一站式体验不同模型特点',
  },
  {
    icon: 'i-lucide-settings',
    title: '场景化解决方案',
    description: '针对教育、金融、制造等不同行业场景定制化AI应用方案，快速实现业务智能化升级',
  },
  {
    icon: 'i-lucide-shield-check',
    title: '安全可靠',
    description: '企业级数据安全保障，完善的隐私保护机制，确保数据安全与业务合规',
  },
  {
    icon: 'i-lucide-trending-up',
    title: '持续优化',
    description: '定期更新模型能力，持续优化用户体验，提供7*24小时技术支持',
  },
];

export const team: TeamMember[] = [
  {
    name: '何文强',
    title: '创始人兼CEO',
    description: '前腾讯架构师',
    icon: 'i-lucide-user-circle',
  },
  {
    name: '强锋',
    title: '首席科学家&CTO',
    description: '清华大学与香港中文大学FMBA',
    icon: 'i-lucide-graduation-cap',
  },
  {
    name: '巫烨',
    title: '联合创始人',
    description: '资深架构师',
    icon: 'i-lucide-code',
  },
  {
    name: '阳明',
    title: '技术架构师',
    description: '前小米云原生架构师',
    icon: 'i-lucide-cpu',
  },
];

export const advantages: Advantage[] = [
  {
    title: '质量过硬',
    description: '需求匹配度超90%，案例可复用率超80%，交付系统故障率<0.1%',
    icon: 'i-lucide-award',
  },
  {
    title: '高性价比',
    description: '模型压缩技术+算力优化，综合成本降低30%~50%，按效果付费',
    icon: 'i-lucide-trending-down',
  },
  {
    title: '交付迅速',
    description: '90%需求7天内出方案，私有化落地最快3周',
    icon: 'i-lucide-rocket',
  },
  {
    title: '服务妥帖',
    description: '与客户联合打磨方案，提供长期陪伴和技术升级',
    icon: 'i-lucide-handshake',
  },
];

export const cases: Case[] = [
  {
    id: 'medical-ai',
    title: '金大智能AI医美平台',
    description:
      '客户为金大智能创新科技有限公司，专注于汽车、家电、消费电子、医疗及农业设备领域。提供医美领域的私有化部署方案，使用LoRA框架进行监督微调，结合企业领域数据提升模型表现。实现皮肤检测报告生成与专业咨询问答服务。',
    icon: 'medical',
    metrics: ['10万+用户', '98%准确率', '50+医美机构'],
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
    features: [
      {
        title: '核心功能',
        items: [
          '智能皮肤检测',
          '个性化医美方案',
          '专业咨询问答'
        ]
      }
    ],
    techDetails: [
      'LoRA微调框架',
      'AI图像分析',
      '知识库问答系统'
    ],
    results: {
      title: '项目成果',
      description: '成功服务50+医美机构，用户满意度达98%，显著提升了医美咨询效率和准确性。'
    }
  },
  {
    id: 'energy-ai',
    title: '百酷新能源AI充电宝',
    description:
      '为百酷新能源科技有限公司开发智能充电系统，实现多语言对话和智能充电管理。采用轻量级模型部署方案，优化终端设备性能。',
    icon: 'energy',
    metrics: ['200+城市', '50万+设备', '99.9%可用性'],
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    features: [
      {
        title: '核心功能',
        items: [
          '多语言交互系统',
          '智能充电管理',
          '实时监控分析'
        ]
      }
    ],
    techDetails: [
      '轻量级模型部署',
      '多语言NLP',
      '实时数据分析'
    ],
    results: {
      title: '项目成果',
      description: '覆盖全国200+城市，服务设备超50万台，系统可用性达99.9%。'
    }
  },
  {
    id: 'virtual-clothing',
    title: 'AI驱动的虚拟试衣体验',
    description:
      '为某知名服装品牌开发AI虚拟试衣系统，通过深度学习技术实现精准的服装效果展示和个性化推荐。',
    icon: 'clothing',
    metrics: ['1000万+用户', '4.9分好评', '200+品牌'],
    coverImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&auto=format&fit=crop&q=80',
    features: [
      {
        title: '核心功能',
        items: [
          '虚拟试衣体验',
          '个性化推荐',
          '智能尺码建议'
        ]
      }
    ],
    techDetails: [
      '计算机视觉',
      '深度学习',
      '推荐算法'
    ],
    results: {
      title: '项目成果',
      description: '累计服务超1000万用户，合作品牌200+，用户评分4.9分。'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '有识AI帮助我们将客服响应时间缩短了80%，客户满意度显著提升。通过智能化升级，我们的运营效率得到了质的飞跃。',
    user: {
      avatar: '/avatars/user1.jpg',
      name: '张经理',
      description: '某大型制造企业',
    },
  },
  {
    quote:
      '通过有识AI的智能风控解决方案，我们的风险识别准确率提升至95%，极大地提高了业务处理效率。',
    user: {
      avatar: '/avatars/user2.jpg',
      name: '李总监',
      description: '某金融科技公司',
    },
  },
];
