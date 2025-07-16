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

  // {
  //   name: '薛瑶',
  //   title: '联合创始人财务总监',
  //   description: '资深财务专家',
  //   icon: 'i-lucide-cpu',
  // },
  {
    name: '欧阳清林',
    title: '创始人兼CEO',
    description: '全栈工程师',
    icon: 'i-lucide-user-circle',
  },
  {
    name: '欧阳欣',
    title: '首席科学家&CTO',
    description: '香港大学硕士&金融专家',
    icon: 'i-lucide-graduation-cap',
  },
  {
    name: '欧阳翼',
    title: '产品专家',
    description: '资深资金产品专家',
    icon: 'i-lucide-code',
  },
  {
    name: '邱升新',
    title: '首席知识官',
    description: '金融行业顾问专家',
    icon: 'i-lucide-cpu',
  }
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
    title: '智能AI医美平台',
    description: '为智能创新科技提供医美领域的私有化部署方案，使用LoRA框架进行监督微调，结合企业领域数据提升模型表现。',
    icon: 'stethoscope',
    coverImage: '/images/cases/case-jinda.avif',
    showcase: [
      {
        image: '/images/cases/medical-res-1.avif',
        title: '智能诊断系统',
        description: '基于AI的医美诊断和分析系统'
      },
      {
        image: '/images/cases/medical-res-2.avif',
        title: '专业医生团队',
        description: '经验丰富的医美专家提供服务'
      },
      {
        image: '/images/cases/medical-res-3.avif',
        title: '先进医疗设备',
        description: '配备顶级医美设备和工具'
      }
    ],
    metrics: [
      '专注汽车、家电、消费电子等领域',
      '结合企业领域数据提升模型表现',
      '实现皮肤检测报告生成与专业咨询问答'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '医美领域的私有化部署方案',
          '面向医美机构开发的智能皮肤的多agent系统',
          '支持私有化部署',
          '实现皮肤检测报告生成与专业咨询问答服务'
        ]
      }
    ],
    techDetails: [
      '使用LoRA框架对预训练模型进行监督微调（SFT）',
      '采用vLLM、DeepSpeed等推理加速框架',
      '应用FP16/INT8模型量化技术',
      '基于Docker和Kubernetes进行模型服务的容器化部署',
      '实施严格的安全策略和权限控制'
    ],
    results: {
      title: '项目成果',
      description: '成功服务50+医美机构，用户满意度达98%，显著提升了医美咨询效率和准确性。'
    }
  },
  {
    id: 'energy-ai',
    title: '百酷新能源AI充电宝',
    description: '为深圳市百酷新能源提供智能充电解决方案，实现多语言交互、智能导航等功能。',
    icon: 'battery-charging',
    coverImage: '/images/cases/case-energy.avif',
    showcase: [
      {
        image: '/images/cases/energy-res-1.avif',
        title: '智能充电系统',
        description: '自动识别设备类型，智能调节充电参数'
      },
      {
        image: '/images/cases/energy-res-2.avif',
        title: '多语言交互',
        description: '支持多国语言实时翻译和交互'
      },
      {
        image: '/images/cases/energy-res-3.avif',
        title: '导航服务',
        description: '智能规划最优充电站路线'
      }
    ],
    metrics: [
      '实时多语言翻译功能',
      '上下文感知对话能力',
      '智能行程规划服务'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '多语言实时翻译',
          '智能路线规划',
          '充电站导航',
          '用户行为分析'
        ]
      }
    ],
    techDetails: [
      '基于Transformer的多语言翻译模型',
      '实时位置服务和路径优化算法',
      '用户行为数据分析和预测',
      '云边协同计算架构',
      '5G网络优化传输'
    ],
    results: {
      title: '项目成果',
      description: '覆盖全国200+城市，服务设备超50万台，系统可用性达99.9%。'
    }
  },
  {
    id: 'clothes-ai',
    title: 'AI驱动的虚拟试衣体验',
    description: '提供AI驱动的在线试衣平台，实现实时穿搭效果展示，支持个性化推荐。',
    icon: 'shirt',
    coverImage: '/images/cases/case-clothes.avif',
    showcase: [
      {
        image: '/images/cases/clothes-res-1.avif',
        title: '虚拟试衣',
        description: '实时生成穿搭效果'
      },
      {
        image: '/images/cases/clothes-res-2.avif',
        title: '个性推荐',
        description: '基于用户喜好的智能搭配'
      },
      {
        image: '/images/cases/clothes-res-3.avif',
        title: '3D展示',
        description: '多角度展示服装效果'
      }
    ],
    metrics: [
      '支持用户照片上传',
      '精准的服饰与用户图像匹配',
      '生成动态展示视频'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '实时虚拟试衣',
          '个性化穿搭推荐',
          '3D服装展示',
          '社交分享功能'
        ]
      }
    ],
    techDetails: [
      '基于GAN的图像生成技术',
      '3D服装建模和渲染',
      '人体姿态估计算法',
      '基于深度学习的风格迁移',
      '实时渲染优化'
    ],
    results: {
      title: '项目成果',
      description: '累计服务超1000万用户，合作品牌200+，用户评分4.9分。'
    }
  },
  {
    id: 'education-ai',
    title: 'AI宝宝英语单词学习神器',
    description: '宝宝启蒙英语单词学习神器基于Coze平台配置，旨在为孩子们提供个性化的英语学习体验',
    icon: 'book-open',
    coverImage: '/images/cases/case-education.avif',
    showcase: [
      {
        image: '/images/cases/education-res-1.avif',
        title: '趣味学习',
        description: '生动有趣的英语学习体验'
      },
      {
        image: '/images/cases/education-res-2.avif',
        title: '智能互动',
        description: '个性化的学习进度跟踪'
      },
      {
        image: '/images/cases/education-res-3.avif',
        title: '成果展示',
        description: '直观的学习效果反馈'
      }
    ],
    metrics: [
      '支持用户照片上传',
      '精准的服饰与用户图像匹配',
      '生成动态展示视频'
    ],
    features: [
      {
        title: '核心功能',
        items: [
          '输入处理系统',
          '提示词工程系统',
          '对话管理引擎',
          '响应生成系统'
        ]
      }
    ],
    techDetails: [
      '数据持久化',
      '上下文感知的提示词生成',
      '多层级提示词系统',
      '动态提示词组合'
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
      '欧阳AI帮助我们将客服响应时间缩短了80%，客户满意度显著提升。通过智能化升级，我们的运营效率得到了质的飞跃。',
    user: {
      avatar: '/avatars/user1.jpg',
      name: '张经理',
      description: '某大型制造企业',
    },
  },
  {
    quote:
      '通过欧阳AI的智能风控解决方案，我们的风险识别准确率提升至95%，极大地提高了业务处理效率。',
    user: {
      avatar: '/avatars/user2.jpg',
      name: '李总监',
      description: '某金融科技公司',
    },
  },
];
