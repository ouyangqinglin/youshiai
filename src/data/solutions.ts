export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
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
}

export const solutions: Solution[] = [
  {
    id: 'llm-deployment',
    title: '大模型微调/部署/优化/推理',
    description: '支持十亿到万亿参数模型部署，适配信创/混合云环境。依托华为云自研AI算力，使用成本降低20%~40%。',
    icon: 'brain',
    features: [
      {
        title: '核心能力',
        items: [
          '支持十亿到万亿参数模型部署',
          '适配信创/混合云环境',
          '依托华为云自研AI算力',
          '使用成本降低20%~40%'
        ]
      },
      {
        title: '适用场景',
        items: [
          '金融风控',
          '医疗数据分析',
          '高合规要求领域',
          '企业需自主掌控模型与数据的核心业务'
        ]
      },
      {
        title: '客户价值',
        items: [
          '7~30天完成部署',
          '提供7×24小时运维支持',
          '实现企业业务系统与大模型的深度集成',
          '助力数智化转型升级'
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
    description: '基于智能体与MCP协议，20+预置工具模块，支持定制化需求开发，高度可扩展，需求匹配度>95%。',
    icon: 'brain',
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
    description: '训练超参组合推荐，预置最佳参数，免配置快速模型调优。模型服务快速调用，应用模版中心插件丰富，效果实时验证测试。',
    icon: 'rocket',
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
