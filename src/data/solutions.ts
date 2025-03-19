export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  features: {
    title: string;
    items: string[];
  }[];
  capabilities: {
    title: string;
    description: string;
  }[];
  cases?: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
    }[];
  }[];
  slides?: {
    title: string;
    description: string;
    image: string;
  }[];
  demoVideo?: string;
}

export const solutions: Solution[] = [
  {
    id: 'medicine',
    title: '智能AI医美平台',
    subtitle: '智能医美解决方案，提升医美服务效率与精准度',
    description: '支持十亿到万亿参数模型部署，适配信创/混合云环境。依托华为云自研AI算力，使用成本降低20%~40%。',
    icon: 'brain',
    image: '/images/cases/case-jinda.avif',
    slides: [
      {
        title: '智能医美诊断系统',
        description: '基于AI技术的智能诊断，为医生提供专业建议支持',
        image: '/images/cases/case-jinda.avif'
      },
    ],
    demoVideo: 'https://www.youtube.com/embed/az9tHuOzOfA',
    features: [
      {
        title: '用户场景',
        items: [
          '线下医美机构面诊服务',
          '治疗方案制定与转化',
          '客户离店后的持续管理'
        ]
      },
      {
        title: '解决方案',
        items: [
          'AI多模态分析Agent',
          '智能方案推荐Agent',
          '医美知识问答Agent',
          '动态数据分析Agent'
        ]
      },
      {
        title: '客户价值',
        items: [
          '成为首家实现“检测-方案-管理”全链路智能化的服务商',
          '平均客单价提升35%，复购率增长22%，市占率突破50%',
          '人力成本降低47%，客户接待量提升2倍  - 用户满意度达98%，纠纷率下降62%'
        ]
      }
    ],
    capabilities: [
      {
        title: '模型部署',
        description: '支持多种规模的大模型部署，从十亿到万亿参数，满足不同业务需求。'
      },
      {
        title: '环境适配',
        description: '全面支持信创环境，支持混合云部署，确保系统安全性和可扩展性。'
      },
      {
        title: '性能优化',
        description: '通过自研AI算力优化，显著降低使用成本，提升系统效率。'
      }
    ]
  },
  {
    id: 'enterprise-llm',
    title: '企业级大模型应用定制化开发',
    subtitle: '定制化企业级大模型解决方案，满足企业特定需求',
    description: '基于智能体与MCP协议，20+预置工具模块，支持定制化需求开发，高度可扩展，需求匹配度>95%。',
    icon: 'brain',
    image: '/images/solutions/enterprise-llm.avif',
    slides: [
      {
        title: '企业级大模型定制开发',
        description: '基于企业需求的定制化大模型开发与部署',
        image: '/images/solutions/solutions-slide-2.avif'
      },
    ],
    demoVideo: 'https://www.youtube.com/embed/az9tHuOzOfA',
    features: [
      {
        title: '核心能力',
        items: [
          '基于智能体与MCP协议',
          '20+预置工具模块',
          '支持定制化需求开发',
          '高度可扩展',
          '需求匹配度>95%'
        ]
      },
      {
        title: '交付标准',
        items: [
          '简单场景：1~4周上线',
          '复杂系统：4~12周交付',
          '提供私有化数据训练',
          '确保输出精准度'
        ]
      }
    ],
    capabilities: [
      {
        title: '工具集成',
        description: '集成浏览器控制器、计算机控制器、深度搜索、编码引擎、沙箱环境等20+预置工具模块。'
      },
      {
        title: '定制开发',
        description: '支持高度定制化开发，确保解决方案与企业需求高度匹配。'
      }
    ],
    cases: [
      {
        title: '银行合同智能审核系统',
        description: '实现合同智能审核，显著提升效率和准确性。',
        metrics: [
          { label: '错误率下降', value: '90%' },
          { label: '人力成本节省', value: '200万/年' }
        ]
      },
      {
        title: '医美皮肤与头皮分析治疗系统',
        description: '提供精准的皮肤和头皮分析，优化治疗方案。',
        metrics: [
          { label: '分析精准率提升', value: '65%' },
          { label: '医美产品销量增加', value: '43%' }
        ]
      },
      {
        title: '智慧教育个性化学习系统',
        description: '实现个性化学习体验，提升学习效果。',
        metrics: [
          { label: '学习兴趣提升', value: '200%' },
          { label: '学习效率提升', value: '32%' }
        ]
      }
    ]
  },
  {
    id: 'lightweight-ai',
    title: '轻量级AI应用快速开发',
    subtitle: '快速构建轻量级AI应用，加速业务创新',
    description: '训练超参组合推荐，预置最佳参数，免配置快速模型调优。模型服务快速调用，应用模版中心插件丰富，效果实时验证测试。',
    icon: 'rocket',
    image: '/images/solutions/lightweight-ai.avif',
    slides: [
      {
        title: '快速开发平台',
        description: '预置参数与模板，实现快速应用开发',
        image: '/images/solutions/solutions-slide-3.avif'
      }
    ],
    demoVideo: 'https://www.youtube.com/embed/az9tHuOzOfA',
    features: [
      {
        title: '核心能力',
        items: [
          '训练超参组合推荐',
          '预置最佳参数',
          '免配置快速模型调优',
          '模型服务快速调用',
          '应用模版中心插件丰富',
          '效果实时验证测试'
        ]
      },
      {
        title: '适用场景',
        items: [
          '数字人',
          '智能客服',
          '知识库',
          '市场营销',
          '文案策划',
          '智慧销售'
        ]
      },
      {
        title: '客户价值',
        items: [
          '大幅缩短开发周期',
          '极速实现应用落地',
          '支持与企业现有系统无缝集成',
          '提供丰富API接口',
          '便于后续功能扩展和业务升级'
        ]
      }
    ],
    capabilities: [
      {
        title: '快速开发',
        description: '提供预置参数和模板，大幅缩短开发周期，实现快速应用落地。'
      },
      {
        title: '系统集成',
        description: '支持与企业现有系统无缝集成，提供丰富的API接口。'
      },
      {
        title: '效果验证',
        description: '提供实时验证测试功能，确保应用效果符合预期。'
      }
    ]
  }
];
