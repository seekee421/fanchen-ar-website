import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '../../../components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { PageBreadcrumb } from '@/components/ui/Breadcrumb';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';


// 案例详细数据
const casesData = {
  'automotive-ar-assembly': {
    id: 'automotive-ar-assembly',
    title: '某汽车制造厂AR装配指导系统',
    subtitle: '智能制造的数字化转型典范',
    client: '知名汽车制造商',
    category: '工业制造',
    year: '2023',
    duration: '6个月',
    teamSize: '12人',
    budget: '¥500万',
    image: '🚗',
    tags: ['AR眼镜', '装配指导', '质量控制', '培训系统', '智能制造'],
    gallery: [
      '/images/cases/automotive-1.jpg',
      '/images/cases/automotive-2.jpg',
      '/images/cases/automotive-3.jpg',
      '/images/cases/automotive-4.jpg'
    ],
    overview: {
      description: '为某知名汽车制造商开发的AR装配指导系统，通过AR眼镜为生产线工人提供实时装配指导，显著提升了装配效率和产品质量，成为智能制造领域的标杆项目。',
      challenge: '该汽车制造厂面临着传统装配流程效率低下、新员工培训周期长、装配错误率高等问题。传统的纸质手册和视频培训无法满足复杂装配工艺的需求，急需数字化解决方案。',
      objectives: [
        '提升装配效率和质量',
        '缩短新员工培训时间',
        '降低装配错误率',
        '实现装配过程数字化管理'
      ]
    },
    solution: {
      approach: '我们采用了基于AR的智能装配指导系统，结合计算机视觉、人工智能和工业物联网技术，为工人提供沉浸式的装配体验。',
      features: [
        {
          title: '实时装配指导',
          description: '通过AR眼镜实时显示装配步骤、零件信息和操作要点',
          icon: '👁️'
        },
        {
          title: '智能质量检测',
          description: '自动识别装配质量问题，实时提醒和纠错',
          icon: '🔍'
        },
        {
          title: '语音交互控制',
          description: '支持语音命令控制，解放双手提升操作效率',
          icon: '🎤'
        },
        {
          title: '数据分析报告',
          description: '收集装配数据，生成效率和质量分析报告',
          icon: '📊'
        },
        {
          title: '远程专家支持',
          description: '支持远程专家实时指导和问题解决',
          icon: '🤝'
        },
        {
          title: '培训模拟系统',
          description: '新员工可通过AR系统进行安全的装配培训',
          icon: '🎓'
        }
      ],
      technology: {
        hardware: ['Microsoft HoloLens 2', '工业级平板电脑', '高精度摄像头', '传感器网络'],
        software: ['自研AR引擎', 'Unity 3D', 'Azure云服务', 'AI视觉识别'],
        integration: ['MES系统集成', 'ERP系统对接', 'PLM数据同步', 'IoT设备连接']
      }
    },
    implementation: {
      phases: [
        {
          phase: '第一阶段',
          title: '需求调研与方案设计',
          duration: '4周',
          activities: [
            '深入生产线调研现状',
            '分析装配工艺流程',
            '制定技术方案',
            '确定项目范围和目标'
          ]
        },
        {
          phase: '第二阶段',
          title: '原型开发与验证',
          duration: '8周',
          activities: [
            '开发AR装配指导原型',
            '构建3D装配模型',
            '实现基础交互功能',
            '进行小规模测试验证'
          ]
        },
        {
          phase: '第三阶段',
          title: '系统开发与集成',
          duration: '12周',
          activities: [
            '完整系统功能开发',
            '与现有系统集成',
            '性能优化和测试',
            '用户培训和文档编写'
          ]
        },
        {
          phase: '第四阶段',
          title: '部署上线与优化',
          duration: '4周',
          activities: [
            '生产环境部署',
            '全员培训和推广',
            '系统监控和调优',
            '持续改进和维护'
          ]
        }
      ],
      challenges: [
        {
          challenge: '复杂工业环境适配',
          solution: '针对工业环境的光照、噪音、振动等因素进行专门优化'
        },
        {
          challenge: '高精度定位要求',
          solution: '采用多传感器融合技术，实现毫米级定位精度'
        },
        {
          challenge: '系统集成复杂性',
          solution: '开发标准化接口，确保与现有系统无缝集成'
        }
      ]
    },
    results: {
      metrics: [
        { metric: '装配效率', improvement: '+35%', description: '平均装配时间显著缩短' },
        { metric: '错误率', improvement: '-60%', description: '装配错误大幅减少' },
        { metric: '培训时间', improvement: '-50%', description: '新员工培训周期缩短' },
        { metric: '成本节省', improvement: '¥200万/年', description: '年度运营成本节省' }
      ],
      benefits: [
        '显著提升生产效率和产品质量',
        '大幅缩短新员工培训周期',
        '实现装配过程数字化管理',
        '降低人工成本和错误率',
        '提升员工工作满意度'
      ],
      testimonial: {
        quote: '这套AR装配指导系统完全改变了我们的生产方式，不仅提升了效率，更重要的是让我们的工人能够更快速地掌握复杂的装配技能。',
        author: '张总',
        position: '生产总监',
        company: '某汽车制造商'
      }
    },
    relatedCases: ['medical-ar-education', 'luxury-ar-tryon']
  },
  
  'medical-ar-education': {
    id: 'medical-ar-education',
    title: '医学院AR解剖教学平台',
    subtitle: '革新医学教育的数字化教学平台',
    client: '某知名医学院',
    category: '教育培训',
    year: '2023',
    duration: '8个月',
    teamSize: '15人',
    budget: '¥800万',
    image: '🏥',
    tags: ['教育AR', '3D建模', '医学教学', '交互设计', '沉浸式学习'],
    gallery: [
      '/images/cases/medical-1.jpg',
      '/images/cases/medical-2.jpg',
      '/images/cases/medical-3.jpg',
      '/images/cases/medical-4.jpg'
    ],
    overview: {
      description: '为某知名医学院开发的AR解剖教学平台，学生可以通过AR设备观察和操作3D人体模型，提供沉浸式的学习体验，革新传统医学教育模式。',
      challenge: '传统解剖教学依赖实体标本，成本高昂，学生实践机会有限，难以反复观察学习，且存在安全和伦理问题。',
      objectives: [
        '提供沉浸式学习体验',
        '降低教学成本',
        '提升学习效果',
        '解决标本资源稀缺问题'
      ]
    },
    solution: {
      approach: '结合AR技术和3D建模，为医学教育提供沉浸式、交互式的学习体验，革新传统教学模式。',
      features: [
        {
          title: '3D人体模型',
          description: '高精度3D人体解剖模型，支持多层次观察',
          icon: '🫀'
        },
        {
          title: '交互式学习',
          description: '学生可以自由操作和探索解剖结构',
          icon: '👆'
        },
        {
          title: '多人协作',
          description: '支持多名学生同时学习和讨论',
          icon: '👥'
        },
        {
          title: '学习进度跟踪',
          description: '记录学习进度，提供个性化学习建议',
          icon: '📈'
        },
        {
          title: '病理模拟',
          description: '模拟各种病理状态，丰富教学内容',
          icon: '🔬'
        },
        {
          title: '考试评估',
          description: '内置考试系统，实时评估学习效果',
          icon: '📝'
        }
      ],
      technology: {
        hardware: ['AR眼镜', '平板电脑', '手势识别设备', '投影设备'],
        software: ['3D建模引擎', 'AR渲染系统', '学习管理系统', '数据分析平台'],
        integration: ['教务系统集成', '成绩管理对接', '课程资源同步', '学习数据统计']
      }
    },
    implementation: {
      phases: [
        {
          phase: '第一阶段',
          title: '需求分析与内容设计',
          duration: '6周',
          activities: [
            '深入了解教学需求',
            '设计课程内容结构',
            '制定技术实施方案',
            '确定项目里程碑'
          ]
        },
        {
          phase: '第二阶段',
          title: '3D模型构建',
          duration: '10周',
          activities: [
            '构建高精度3D人体模型',
            '开发交互功能',
            '实现多层次展示',
            '添加病理模拟功能'
          ]
        },
        {
          phase: '第三阶段',
          title: '平台开发与集成',
          duration: '8周',
          activities: [
            '开发学习管理系统',
            '集成AR渲染引擎',
            '实现多人协作功能',
            '开发考试评估模块'
          ]
        },
        {
          phase: '第四阶段',
          title: '测试部署与培训',
          duration: '4周',
          activities: [
            '系统测试和优化',
            '教师培训和指导',
            '学生试用和反馈',
            '正式部署上线'
          ]
        }
      ],
      challenges: [
        {
          challenge: '高精度3D建模',
          solution: '采用医学级精度建模，确保解剖结构准确性'
        },
        {
          challenge: '多人协作同步',
          solution: '开发实时同步技术，支持多用户协作学习'
        },
        {
          challenge: '教学内容适配',
          solution: '与医学专家合作，确保内容的专业性和准确性'
        }
      ]
    },
    results: {
      metrics: [
        { metric: '学习效率', improvement: '+40%', description: '学生学习效率显著提升' },
        { metric: '学生满意度', improvement: '95%', description: '学生对新教学方式高度认可' },
        { metric: '教学成本', improvement: '-30%', description: '相比传统教学成本大幅降低' },
        { metric: '覆盖学生', improvement: '2000+', description: '已覆盖超过2000名学生' }
      ],
      benefits: [
        '提供沉浸式学习体验',
        '解决标本资源稀缺问题',
        '支持反复学习和练习',
        '降低教学成本',
        '提升教学质量和效果'
      ],
      testimonial: {
        quote: 'AR解剖教学平台让我们的学生能够更直观地理解人体结构，学习效果比传统方式提升了很多，这是医学教育的一次革命性突破。',
        author: '李教授',
        position: '解剖学系主任',
        company: '某知名医学院'
      }
    },
    relatedCases: ['automotive-ar-assembly', 'cardiac-surgery-ar']
  },
  
  'luxury-ar-tryon': {
    id: 'luxury-ar-tryon',
    title: '奢侈品牌AR虚拟试穿体验',
    subtitle: '重新定义奢侈品购物体验',
    client: '国际奢侈品牌',
    category: '零售电商',
    year: '2024',
    duration: '4个月',
    teamSize: '10人',
    budget: '¥300万',
    image: '👗',
    tags: ['虚拟试穿', '人体追踪', '实时渲染', '移动AR', '电商'],
    gallery: [
      '/images/cases/luxury-1.jpg',
      '/images/cases/luxury-2.jpg',
      '/images/cases/luxury-3.jpg',
      '/images/cases/luxury-4.jpg'
    ],
    overview: {
      description: '为国际奢侈品牌开发AR虚拟试穿应用，顾客可以通过手机或平板设备虚拟试穿商品，提升购物体验，增强品牌互动。',
      challenge: '线上购物无法试穿体验，退货率高，顾客购买决策困难，品牌体验感不足，特别是奢侈品需要更高的购买确信度。',
      objectives: [
        '提升线上购物体验',
        '降低退货率',
        '增强品牌互动',
        '提高转化率'
      ]
    },
    solution: {
      approach: '开发高精度人体追踪和服装渲染技术，实现真实的虚拟试穿效果，支持多角度查看和社交分享。',
      features: [
        {
          title: '精准人体追踪',
          description: '高精度人体姿态识别和尺寸测量',
          icon: '📏'
        },
        {
          title: '真实渲染效果',
          description: '逼真的服装材质和光影效果渲染',
          icon: '✨'
        },
        {
          title: '多角度查看',
          description: '360度全方位查看试穿效果',
          icon: '🔄'
        },
        {
          title: '社交分享',
          description: '一键分享试穿照片到社交媒体',
          icon: '📱'
        },
        {
          title: '尺码推荐',
          description: 'AI智能推荐最适合的尺码',
          icon: '🎯'
        },
        {
          title: '搭配建议',
          description: '智能推荐搭配商品和配饰',
          icon: '👔'
        }
      ],
      technology: {
        hardware: ['智能手机', '平板电脑', '高清摄像头', '传感器'],
        software: ['计算机视觉', '3D渲染引擎', 'AI推荐算法', '云端处理'],
        integration: ['电商平台集成', '库存系统对接', '支付系统连接', '客服系统集成']
      }
    },
    implementation: {
      phases: [
        {
          phase: '第一阶段',
          title: '技术调研与原型开发',
          duration: '4周',
          activities: [
            '人体追踪技术调研',
            '服装渲染算法开发',
            '基础原型构建',
            '可行性验证测试'
          ]
        },
        {
          phase: '第二阶段',
          title: '核心功能开发',
          duration: '6周',
          activities: [
            '精准追踪算法优化',
            '真实渲染效果实现',
            '多角度查看功能',
            'AI尺码推荐开发'
          ]
        },
        {
          phase: '第三阶段',
          title: '应用集成与优化',
          duration: '4周',
          activities: [
            '电商平台集成',
            '社交分享功能',
            '性能优化调试',
            '用户体验优化'
          ]
        },
        {
          phase: '第四阶段',
          title: '测试上线与推广',
          duration: '2周',
          activities: [
            '全面测试验证',
            '正式发布上线',
            '用户培训指导',
            '营销推广支持'
          ]
        }
      ],
      challenges: [
        {
          challenge: '服装材质真实感',
          solution: '开发先进的物理渲染引擎，模拟真实的布料质感'
        },
        {
          challenge: '不同体型适配',
          solution: '构建多样化的人体模型库，支持各种体型'
        },
        {
          challenge: '实时性能要求',
          solution: '优化算法和云端处理，确保流畅的用户体验'
        }
      ]
    },
    results: {
      metrics: [
        { metric: '转化率', improvement: '+25%', description: '购买转化率显著提升' },
        { metric: '退货率', improvement: '-40%', description: '退货率大幅降低' },
        { metric: '用户停留时间', improvement: '+60%', description: '用户在应用内停留时间增加' },
        { metric: '社交分享', improvement: '+300%', description: '社交媒体分享量激增' }
      ],
      benefits: [
        '显著提升线上购物体验',
        '大幅降低退货率和成本',
        '增强品牌互动和粘性',
        '提高客户满意度',
        '扩大品牌社交影响力'
      ],
      testimonial: {
        quote: 'AR虚拟试穿技术让我们的客户能够在家中就体验到店内试穿的感觉，这不仅提升了销售转化率，更重要的是增强了品牌的科技感和时尚感。',
        author: 'Sarah Johnson',
        position: '数字营销总监',
        company: '国际奢侈品牌'
      }
    },
    relatedCases: ['real-estate-ar', 'automotive-ar-assembly']
  },
  
  'cardiac-surgery-ar': {
    id: 'cardiac-surgery-ar',
    title: '心脏手术AR导航系统',
    subtitle: '精准医疗的技术突破',
    client: '三甲医院',
    category: '医疗健康',
    year: '2023',
    duration: '12个月',
    teamSize: '18人',
    budget: '¥1200万',
    image: '❤️',
    tags: ['医疗AR', '手术导航', '3D重建', '实时追踪', '精准医疗'],
    gallery: [
      '/images/cases/cardiac-1.jpg',
      '/images/cases/cardiac-2.jpg',
      '/images/cases/cardiac-3.jpg',
      '/images/cases/cardiac-4.jpg'
    ],
    overview: {
      description: '为心脏外科开发AR手术导航系统，将患者CT/MRI数据转换为3D模型，辅助医生进行精准手术，提升手术成功率。',
      challenge: '复杂心脏手术风险高，传统影像资料难以提供立体空间感，手术规划和执行存在挑战，需要更精准的导航技术。',
      objectives: [
        '提升手术精准度',
        '缩短手术时间',
        '降低手术风险',
        '改善患者预后'
      ]
    },
    solution: {
      approach: '集成医学影像处理、3D重建、实时追踪等技术，为医生提供精准的手术导航和可视化辅助。',
      features: [
        {
          title: '3D影像重建',
          description: '将CT/MRI数据转换为高精度3D模型',
          icon: '🧠'
        },
        {
          title: '实时手术导航',
          description: '实时显示手术器械位置和路径',
          icon: '🎯'
        },
        {
          title: '风险区域标识',
          description: '高亮显示重要血管和神经',
          icon: '⚠️'
        },
        {
          title: '手术规划',
          description: '术前3D规划和模拟演练',
          icon: '📋'
        },
        {
          title: '多模态融合',
          description: '融合多种影像数据提供全面信息',
          icon: '🔬'
        },
        {
          title: '远程会诊',
          description: '支持远程专家实时指导',
          icon: '🌐'
        }
      ],
      technology: {
        hardware: ['AR眼镜', '手术显示器', '追踪设备', '高精度摄像头'],
        software: ['医学影像处理', '3D重建算法', 'AR渲染引擎', '实时追踪系统'],
        integration: ['PACS系统集成', 'HIS系统对接', '手术设备连接', '数据安全保护']
      }
    },
    implementation: {
      phases: [
        {
          phase: '第一阶段',
          title: '需求分析与技术调研',
          duration: '8周',
          activities: [
            '深入了解手术流程和需求',
            '医学影像数据格式分析',
            'AR技术可行性评估',
            '制定技术实施方案'
          ]
        },
        {
          phase: '第二阶段',
          title: '核心算法开发',
          duration: '16周',
          activities: [
            '3D重建算法开发',
            '实时追踪系统构建',
            '手术导航功能实现',
            '安全性验证测试'
          ]
        },
        {
          phase: '第三阶段',
          title: '系统集成与测试',
          duration: '12周',
          activities: [
            '医院系统集成对接',
            '手术室环境适配',
            '医生培训和反馈',
            '系统性能优化'
          ]
        },
        {
          phase: '第四阶段',
          title: '临床验证与部署',
          duration: '12周',
          activities: [
            '临床试验和验证',
            '监管审批配合',
            '正式部署上线',
            '持续监控和改进'
          ]
        }
      ],
      challenges: [
        {
          challenge: '医学级精度要求',
          solution: '采用亚毫米级精度算法，确保手术安全'
        },
        {
          challenge: '实时性能要求',
          solution: '优化算法和硬件配置，实现实时响应'
        },
        {
          challenge: '医疗安全合规',
          solution: '严格遵循医疗器械标准和数据安全规范'
        }
      ]
    },
    results: {
      metrics: [
        { metric: '手术精度', improvement: '+30%', description: '手术精准度显著提升' },
        { metric: '手术时间', improvement: '-20%', description: '平均手术时间缩短' },
        { metric: '并发症', improvement: '-15%', description: '术后并发症减少' },
        { metric: '医生满意度', improvement: '98%', description: '医生对系统高度认可' }
      ],
      benefits: [
        '显著提升手术精准度和安全性',
        '缩短手术时间，提高效率',
        '降低手术风险和并发症',
        '改善患者预后和康复',
        '提升医院技术水平和声誉'
      ],
      testimonial: {
        quote: 'AR手术导航系统让我们能够更精准地进行复杂心脏手术，不仅提升了手术成功率，也让我们对手术过程更有信心。这是医疗技术的重大突破。',
        author: '王主任',
        position: '心外科主任',
        company: '三甲医院'
      }
    },
    relatedCases: ['medical-ar-education', 'automotive-ar-assembly']
  },
  
  'forbidden-city-ar': {
    id: 'forbidden-city-ar',
    title: '故宫博物院AR文物展示',
    subtitle: '传统文化的数字化传承',
    client: '故宫博物院',
    category: '文旅娱乐',
    year: '2022',
    duration: '10个月',
    teamSize: '20人',
    budget: '¥1000万',
    image: '🏛️',
    tags: ['文旅AR', '文物识别', '历史重现', '文化传承', '博物馆'],
    gallery: [
      '/images/cases/forbidden-1.jpg',
      '/images/cases/forbidden-2.jpg',
      '/images/cases/forbidden-3.jpg',
      '/images/cases/forbidden-4.jpg'
    ],
    overview: {
      description: '为故宫博物院开发AR文物展示系统，游客可以通过AR设备了解文物历史、制作工艺和文化背景，提升文化传播效果。',
      challenge: '传统展览形式单一，文物信息传达有限，游客参与度不高，文化传承效果有待提升，需要创新的展示方式。',
      objectives: [
        '提升游客参观体验',
        '增强文化传播效果',
        '保护珍贵文物',
        '推广传统文化'
      ]
    },
    solution: {
      approach: '开发AR文物识别和展示系统，提供多媒体讲解、历史重现、互动体验等功能，让文物"活"起来。',
      features: [
        {
          title: '文物识别',
          description: '自动识别文物并显示相关信息',
          icon: '🔍'
        },
        {
          title: '历史重现',
          description: 'AR技术重现文物的历史场景',
          icon: '⏰'
        },
        {
          title: '多媒体讲解',
          description: '丰富的音频、视频、3D内容',
          icon: '🎬'
        },
        {
          title: '互动体验',
          description: '游客可以与虚拟文物互动',
          icon: '👆'
        },
        {
          title: '个性化导览',
          description: '根据兴趣推荐参观路线',
          icon: '🗺️'
        },
        {
          title: '文化教育',
          description: '深度文化知识和历史背景',
          icon: '📚'
        }
      ],
      technology: {
        hardware: ['AR眼镜', '智能手机', '平板电脑', '定位设备'],
        software: ['图像识别', 'AR渲染引擎', '内容管理系统', '导览系统'],
        integration: ['票务系统集成', '游客管理对接', '内容更新系统', '数据统计分析']
      }
    },
    implementation: {
      phases: [
        {
          phase: '第一阶段',
          title: '文物数字化与内容制作',
          duration: '12周',
          activities: [
            '文物3D扫描和建模',
            '历史资料收集整理',
            '多媒体内容制作',
            '专家内容审核'
          ]
        },
        {
          phase: '第二阶段',
          title: 'AR系统开发',
          duration: '16周',
          activities: [
            '文物识别算法开发',
            'AR展示功能实现',
            '导览系统构建',
            '用户界面设计'
          ]
        },
        {
          phase: '第三阶段',
          title: '系统集成与测试',
          duration: '8周',
          activities: [
            '现场环境适配',
            '系统集成测试',
            '游客试用反馈',
            '性能优化调整'
          ]
        },
        {
          phase: '第四阶段',
          title: '部署运营与推广',
          duration: '4周',
          activities: [
            '正式部署上线',
            '工作人员培训',
            '营销推广活动',
            '运营数据监控'
          ]
        }
      ],
      challenges: [
        {
          challenge: '文物保护要求',
          solution: '采用非接触式技术，确保文物安全'
        },
        {
          challenge: '复杂光照环境',
          solution: '开发适应性强的识别算法'
        },
        {
          challenge: '大量游客并发',
          solution: '优化系统架构，支持高并发访问'
        }
      ]
    },
    results: {
      metrics: [
        { metric: '游客满意度', improvement: '+45%', description: '游客对参观体验满意度提升' },
        { metric: '参观时长', improvement: '+50%', description: '平均参观时间显著增加' },
        { metric: '文化传播', improvement: '显著', description: '文化传播效果明显提升' },
        { metric: '获得表彰', improvement: '文旅部', description: '获得国家文旅部门表彰' }
      ],
      benefits: [
        '显著提升游客参观体验',
        '增强文化传播和教育效果',
        '保护珍贵文物免受损害',
        '推广传统文化和历史知识',
        '提升博物馆数字化水平'
      ],
      testimonial: {
        quote: 'AR文物展示系统让我们的文物真正"活"了起来，游客不仅能看到文物，还能了解背后的历史故事，这对文化传承具有重要意义。',
        author: '陈馆长',
        position: '展览部主任',
        company: '故宫博物院'
      }
    },
    relatedCases: ['medical-ar-education', 'real-estate-ar']
  },
  
  'real-estate-ar': {
    id: 'real-estate-ar',
    title: '房地产AR样板间展示',
    subtitle: '重新定义房产销售体验',
    client: '知名地产开发商',
    category: '零售电商',
    year: '2024',
    duration: '5个月',
    teamSize: '12人',
    budget: '¥400万',
    image: '🏠',
    tags: ['房产AR', '3D展示', '虚拟样板间', '装修预览', '销售工具'],
    gallery: [
      '/images/cases/realestate-1.jpg',
      '/images/cases/realestate-2.jpg',
      '/images/cases/realestate-3.jpg',
      '/images/cases/realestate-4.jpg'
    ],
    overview: {
      description: '为知名地产开发商开发AR样板间展示系统，购房者可以虚拟参观不同户型和装修方案，提升销售效率和客户体验。',
      challenge: '实体样板间成本高，展示户型有限，客户难以想象实际居住效果，销售转化率低，需要创新的展示方式。',
      objectives: [
        '降低样板间成本',
        '展示更多户型方案',
        '提升客户体验',
        '提高销售转化率'
      ]
    },
    solution: {
      approach: '构建高精度3D户型模型，支持实时装修预览、家具摆放、光照模拟等功能，为客户提供沉浸式看房体验。',
      features: [
        {
          title: '3D户型展示',
          description: '高精度3D户型模型，真实还原空间感',
          icon: '🏗️'
        },
        {
          title: '装修预览',
          description: '实时切换不同装修风格和方案',
          icon: '🎨'
        },
        {
          title: '家具摆放',
          description: '自由摆放和调整家具布局',
          icon: '🛋️'
        },
        {
          title: '光照模拟',
          description: '模拟不同时间的自然光照效果',
          icon: '☀️'
        },
        {
          title: '尺寸测量',
          description: '精确测量房间和家具尺寸',
          icon: '📏'
        },
        {
          title: '方案保存',
          description: '保存和分享个性化设计方案',
          icon: '💾'
        }
      ],
      technology: {
        hardware: ['AR眼镜', '平板电脑', '智能手机', '投影设备'],
        software: ['3D建模引擎', 'AR渲染系统', '物理引擎', '云端存储'],
        integration: ['CRM系统集成', '销售管理对接', '客户数据同步', '营销系统连接']
      }
    },
    implementation: {
      phases: [
        {
          phase: '第一阶段',
          title: '户型建模与内容制作',
          duration: '6周',
          activities: [
            '户型图纸数字化',
            '3D模型精确建模',
            '装修方案设计',
            '家具模型库构建'
          ]
        },
        {
          phase: '第二阶段',
          title: 'AR系统开发',
          duration: '8周',
          activities: [
            'AR展示功能开发',
            '交互操作实现',
            '光照渲染优化',
            '性能调优测试'
          ]
        },
        {
          phase: '第三阶段',
          title: '系统集成与优化',
          duration: '4周',
          activities: [
            'CRM系统集成',
            '销售流程对接',
            '用户体验优化',
            '销售培训指导'
          ]
        },
        {
          phase: '第四阶段',
          title: '部署推广与运营',
          duration: '2周',
          activities: [
            '销售中心部署',
            '销售团队培训',
            '客户体验优化',
            '效果数据监控'
          ]
        }
      ],
      challenges: [
        {
          challenge: '真实感渲染',
          solution: '采用先进的渲染技术，确保视觉效果逼真'
        },
        {
          challenge: '实时交互性能',
          solution: '优化算法和硬件配置，保证流畅体验'
        },
        {
          challenge: '个性化需求',
          solution: '提供丰富的定制选项和灵活的配置'
        }
      ]
    },
    results: {
      metrics: [
        { metric: '销售转化率', improvement: '+30%', description: '购房转化率显著提升' },
        { metric: '客户满意度', improvement: '92%', description: '客户对看房体验高度满意' },
        { metric: '展示成本', improvement: '-50%', description: '相比实体样板间成本大幅降低' },
        { metric: '销售周期', improvement: '-25%', description: '平均销售周期明显缩短' }
      ],
      benefits: [
        '大幅降低样板间建设成本',
        '展示更多户型和装修方案',
        '提升客户看房体验',
        '加快销售决策过程',
        '增强品牌科技形象'
      ],
      testimonial: {
        quote: 'AR样板间展示系统让我们能够以更低的成本展示更多的户型方案，客户的体验感和满意度都有了显著提升，销售效果超出预期。',
        author: '刘总',
        position: '销售总监',
        company: '知名地产开发商'
      }
    },
    relatedCases: ['luxury-ar-tryon', 'forbidden-city-ar']
  }
};

interface CaseDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseDetail({ params }: CaseDetailProps) {
  const { slug } = await params;
  const caseData = casesData[slug as keyof typeof casesData];

  if (!caseData) {
    notFound();
  }

  // 结构化数据（mock，可后续替换）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": caseData.title,
    "description": caseData.overview.description,
    "image": caseData.gallery?.[0] || '',
    "industry": caseData.category,
    "datePublished": caseData.year,
    "provider": {
      "@type": "Organization",
      "name": "武汉凡尘合创科技"
    },
    "review": caseData.results?.testimonial ? {
      "@type": "Review",
      "reviewBody": caseData.results.testimonial.quote,
      "author": {
        "@type": "Person",
        "name": caseData.results.testimonial.author
      }
    } : undefined
  };

  return (
    <Layout>
      <EnhancedSEO
        title={`${caseData.title} - 成功案例`}
        description={caseData.overview.description}
        keywords={caseData.tags.join(', ')}
        canonical={`/cases/${slug}`}
        structuredData={structuredData}
      />

      {/* Breadcrumb */}
      <Section padding="sm" className="bg-gray-50">
        <Container>
          <PageBreadcrumb />
        </Container>
      </Section>

      {/* Hero Section */}
      <Section padding="xl" className="bg-gradient-to-br from-primary to-primary-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-white/80 text-sm mb-2">{caseData.category}</div>
              <Heading as="h1" size="3xl" className="text-white mb-4">
                {caseData.title}
              </Heading>
              <Paragraph size="lg" className="text-white/90 mb-6">
                {caseData.subtitle}
              </Paragraph>
              <div className="flex flex-wrap gap-2 mb-6">
                {caseData.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* 返回案例列表按钮 */}
              <div className="mt-8">
                <Link href="/cases" className="inline-block text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg border border-white/20 transition-colors">
                  ← 返回案例列表
                </Link>
            </div>
            </div>
            <div>
              {/* 主图或图片轮播（暂用第一张图片） */}
              {caseData.gallery && caseData.gallery.length > 0 ? (
                <img
                  src={caseData.gallery[0]}
                  alt={caseData.title}
                  className="rounded-xl shadow-lg w-full object-cover aspect-video border-4 border-white/20"
                />
              ) : (
              <div className="text-8xl text-center mb-6">{caseData.image}</div>
              )}
            </div>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '项目周期', value: caseData.duration },
                { label: '团队规模', value: caseData.teamSize },
                { label: '项目预算', value: caseData.budget },
                { label: '项目分类', value: caseData.category }
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="text-white/60 text-sm">{item.label}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Overview */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div>
                <Heading as="h2" size="2xl" className="mb-6">
                  项目概述
                </Heading>
                <Paragraph size="lg" className="mb-6">
                  {caseData.overview.description}
                </Paragraph>
                
                <div className="mb-8">
                  <Heading as="h3" size="lg" className="mb-4">
                    面临挑战
                  </Heading>
                  <Paragraph className="text-gray-800">
                    {caseData.overview.challenge}
                  </Paragraph>
                </div>
                
                <div>
                  <Heading as="h3" size="lg" className="mb-4">
                    项目目标
                  </Heading>
                  <ul className="space-y-2">
                    {caseData.overview.objectives.map((objective, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div>
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4">
                      项目信息
                    </Heading>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-700">客户</div>
                        <div className="font-semibold">{caseData.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-700">行业</div>
                        <div className="font-semibold">{caseData.category}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-700">项目时间</div>
                        <div className="font-semibold">{caseData.year}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-700">项目周期</div>
                        <div className="font-semibold">{caseData.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-700">团队规模</div>
                        <div className="font-semibold">{caseData.teamSize}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <Heading as="h4" size="md" className="mb-3">
                        技术标签
                      </Heading>
                      <div className="flex flex-wrap gap-2">
                        {caseData.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section padding="xl" className="bg-gray-50">
        <Container>
          <div>
            <Heading as="h2" size="2xl" className="text-center mb-12">
              解决方案
            </Heading>
            
            <div className="mb-12">
              <Paragraph size="lg" className="text-center max-w-3xl mx-auto">
                {caseData.solution?.approach}
              </Paragraph>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(caseData.solution?.features || []).map((feature, index) => (
                <div key={index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <Heading as="h3" size="md" className="mb-3">
                        {feature.title}
                      </Heading>
                      <Paragraph size="sm" className="text-gray-800">
                        {feature.description}
                      </Paragraph>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4">
                      硬件设备
                    </Heading>
                    <ul className="space-y-2">
                      {(caseData.solution?.technology?.hardware || []).map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4">
                      软件技术
                    </Heading>
                    <ul className="space-y-2">
                      {(caseData.solution?.technology?.software || []).map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4">
                      系统集成
                    </Heading>
                    <ul className="space-y-2">
                      {(caseData.solution?.technology?.integration || []).map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Implementation */}
      <Section padding="xl">
        <Container>
          <div>
            <Heading as="h2" size="2xl" className="text-center mb-12">
              实施过程
            </Heading>
            
            <div className="space-y-8 mb-12">
              {(caseData.implementation?.phases || []).map((phase, index) => (
                <div key={index}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <Heading as="h3" size="lg">
                              {phase.title}
                            </Heading>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                              {phase.duration}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                <span className="text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div>
              <Heading as="h3" size="xl" className="mb-6">
                关键挑战与解决
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(caseData.implementation?.challenges || []).map((item, index) => (
                  <div key={index}>
                    <Card>
                      <CardContent className="p-6">
                        <Heading as="h4" size="md" className="mb-3 text-red-600">
                          挑战：{item.challenge}
                        </Heading>
                        <Paragraph size="sm" className="text-gray-800">
                          <strong>解决方案：</strong>{item.solution}
                        </Paragraph>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section padding="xl" className="bg-gradient-to-br from-primary to-primary-dark">
        <Container>
          <div>
            <Heading as="h2" size="2xl" className="text-center mb-12 text-white">
              项目成果
            </Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {(caseData.results?.metrics || []).map((metric, index) => (
                <div key={index}>
                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        {metric.improvement}
                      </div>
                      <div className="text-white/80 font-semibold mb-2">
                        {metric.metric}
                      </div>
                      <div className="text-white/60 text-sm">
                        {metric.description}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4 text-white">
                      项目收益
                    </Heading>
                    <ul className="space-y-3">
                      {(caseData.results?.benefits || []).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-white/90">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4 text-white">
                      客户评价
                    </Heading>
                    <blockquote className="text-white/90 italic mb-4">
                      "{caseData.results?.testimonial?.quote}"
                    </blockquote>
                    <div className="text-white/80">
                      <div className="font-semibold">{caseData.results?.testimonial?.author}</div>
                      <div className="text-sm">
                        {caseData.results?.testimonial?.position} · {caseData.results?.testimonial?.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Cases */}
      <Section padding="xl">
        <Container>
          <div>
            <Heading as="h2" size="2xl" className="text-center mb-12">
              相关案例
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(caseData.relatedCases || []).map((relatedId: string) => {
                const relatedCase = casesData[relatedId as keyof typeof casesData];
                if (!relatedCase) return null;
                
                return (
                  <div key={relatedId}>
                    <Link href={`/cases/${relatedId}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="text-4xl mb-4">{relatedCase.image}</div>
                          <Heading as="h3" size="md" className="mb-2">
                            {relatedCase.title}
                          </Heading>
                          <Paragraph size="sm" className="text-gray-800 mb-4">
                            {relatedCase.subtitle}
                          </Paragraph>
                          <div className="flex items-center justify-between text-sm text-gray-700">
                            <span>{relatedCase.category}</span>
                            <span>{relatedCase.year}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="xl" className="bg-gray-50">
        <Container>
          <div className="text-center">
            <Heading as="h2" size="2xl" className="mb-4">
              准备开始您的项目？
            </Heading>
            <Paragraph size="lg" className="mb-8 max-w-2xl mx-auto">
              联系我们的专家团队，获取定制化的AR解决方案和技术咨询。
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  免费咨询
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/cases">
                  查看更多案例
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// 生成静态路径
export async function generateStaticParams() {
  return Object.keys(casesData).map((slug) => ({
    slug,
  }));
}