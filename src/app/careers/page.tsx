'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../../components/layout';
import { Section, Container, Heading, Paragraph, Button, Card, CardContent } from '../../components/ui';
import { SEO } from '../../components/seo';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: '全部职位' },
    { id: 'tech', name: '技术研发' },
    { id: 'product', name: '产品设计' },
    { id: 'sales', name: '销售市场' },
    { id: 'operation', name: '运营管理' },
  ];

  const positions = [
    {
      id: 1,
      title: 'AR算法工程师',
      department: 'tech',
      location: '武汉',
      type: '全职',
      experience: '3-5年',
      salary: '20-35K',
      description: '负责AR核心算法的研发和优化，包括SLAM、物体识别、手势追踪等技术。',
      requirements: [
        '计算机视觉、机器学习相关专业硕士及以上学历',
        '熟悉OpenCV、PCL等计算机视觉库',
        '有SLAM、物体检测、跟踪算法开发经验',
        '熟悉C++、Python编程语言',
        '有AR/VR项目经验者优先'
      ],
      responsibilities: [
        '负责AR核心算法的设计和实现',
        '优化算法性能，提升用户体验',
        '跟踪前沿技术，推动技术创新',
        '与产品团队协作，将算法集成到产品中'
      ]
    },
    {
      id: 2,
      title: 'Unity开发工程师',
      department: 'tech',
      location: '武汉',
      type: '全职',
      experience: '2-4年',
      salary: '15-25K',
      description: '负责AR应用的Unity开发，实现丰富的交互效果和用户体验。',
      requirements: [
        '计算机相关专业本科及以上学历',
        '2年以上Unity开发经验',
        '熟悉C#编程语言',
        '了解AR/VR开发流程',
        '有移动端开发经验者优先'
      ],
      responsibilities: [
        '负责AR应用的Unity开发',
        '实现用户交互功能和视觉效果',
        '优化应用性能和用户体验',
        '参与技术方案设计和评审'
      ]
    },
    {
      id: 3,
      title: '产品经理',
      department: 'product',
      location: '武汉',
      type: '全职',
      experience: '3-5年',
      salary: '18-30K',
      description: '负责AR产品的规划和设计，推动产品从概念到落地的全流程。',
      requirements: [
        '产品管理、计算机相关专业本科及以上学历',
        '3年以上产品经理经验',
        '有AR/VR或新兴技术产品经验',
        '优秀的沟通协调能力',
        '敏锐的市场洞察力'
      ],
      responsibilities: [
        '负责AR产品的需求分析和规划',
        '制定产品发展路线图',
        '协调技术、设计、运营等团队',
        '跟踪产品数据，持续优化产品'
      ]
    },
    {
      id: 4,
      title: 'UI/UX设计师',
      department: 'product',
      location: '武汉',
      type: '全职',
      experience: '2-4年',
      salary: '12-20K',
      description: '负责AR产品的用户界面和交互设计，创造优秀的用户体验。',
      requirements: [
        '设计相关专业本科及以上学历',
        '2年以上UI/UX设计经验',
        '熟练使用Figma、Sketch等设计工具',
        '有AR/VR界面设计经验者优先',
        '良好的审美能力和创新思维'
      ],
      responsibilities: [
        '负责AR产品的界面设计',
        '设计用户交互流程和体验',
        '制作设计规范和组件库',
        '与开发团队协作实现设计效果'
      ]
    },
    {
      id: 5,
      title: '销售经理',
      department: 'sales',
      location: '武汉',
      type: '全职',
      experience: '3-5年',
      salary: '15-25K + 提成',
      description: '负责AR解决方案的销售工作，开拓新客户，维护老客户关系。',
      requirements: [
        '市场营销、商务相关专业本科及以上学历',
        '3年以上B2B销售经验',
        '有技术产品销售经验者优先',
        '优秀的沟通表达能力',
        '强烈的目标导向和抗压能力'
      ],
      responsibilities: [
        '负责AR产品的销售推广',
        '开发新客户，维护客户关系',
        '参与商务谈判和合同签署',
        '收集市场反馈，协助产品改进'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: '具有竞争力的薪酬',
      description: '行业领先的薪资水平，年终奖金，股权激励'
    },
    {
      icon: '🏥',
      title: '完善的福利保障',
      description: '五险一金，补充医疗保险，年度体检'
    },
    {
      icon: '📚',
      title: '学习成长机会',
      description: '技术培训，会议学习，职业发展规划'
    },
    {
      icon: '🏖️',
      title: '灵活的工作环境',
      description: '弹性工作时间，远程办公，团建活动'
    },
    {
      icon: '🚀',
      title: '创新的工作氛围',
      description: '扁平化管理，开放的沟通，鼓励创新'
    },
    {
      icon: '🌟',
      title: '广阔的发展空间',
      description: '快速成长的公司，多元化的职业路径'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? positions 
    : positions.filter(position => position.department === selectedDepartment);

  return (
    <Layout>
      <SEO
        title="加入我们 - 武汉凡尘合创科技"
        description="加入武汉凡尘合创科技，与我们一起推动AR技术的发展，创造更美好的未来。我们提供具有竞争力的薪酬和广阔的发展空间。"
        keywords="武汉AR公司招聘,AR工程师招聘,Unity开发工程师,产品经理招聘,UI设计师招聘"
      />

      {/* Hero Section */}
      <Section padding="xl" className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="4xl" className="mb-6">
                加入我们，共创AR未来
              </Heading>
              <Paragraph size="xl" className="mb-8 text-gray-600">
                在武汉凡尘合创科技，我们致力于推动增强现实技术的发展，为各行各业提供创新的AR解决方案。
                加入我们的团队，与顶尖的技术专家一起工作，在快速发展的AR行业中实现您的职业梦想。
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  查看职位
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  了解公司文化
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Company Culture */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" size="3xl" className="mb-4">
                为什么选择我们
              </Heading>
              <Paragraph size="lg" color="secondary" className="max-w-2xl mx-auto">
                我们提供优秀的工作环境和发展机会，让每一位员工都能在这里实现自己的价值。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <Heading as="h3" size="lg" className="mb-3">
                      {benefit.title}
                    </Heading>
                    <Paragraph className="text-gray-600">
                      {benefit.description}
                    </Paragraph>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Job Positions */}
      <Section variant="secondary" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" size="3xl" className="mb-4">
                开放职位
              </Heading>
              <Paragraph size="lg" color="secondary" className="max-w-2xl mx-auto">
                我们正在寻找有才华、有激情的人才加入我们的团队。
              </Paragraph>
            </motion.div>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDepartment === dept.id ? 'primary' : 'outline'}
                onClick={() => setSelectedDepartment(dept.id)}
                className="px-6"
              >
                {dept.name}
              </Button>
            ))}
          </div>

          {/* Job List */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <Heading as="h3" size="xl">
                            {position.title}
                          </Heading>
                          <div className="flex gap-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                              {position.location}
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                              {position.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span>经验要求: {position.experience}</span>
                          <span>薪资范围: {position.salary}</span>
                        </div>
                        <Paragraph className="text-gray-600">
                          {position.description}
                        </Paragraph>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button className="w-full lg:w-auto">
                          申请职位
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                      <div>
                        <Heading as="h4" size="sm" className="mb-3 text-gray-800">
                          岗位要求
                        </Heading>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-primary mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Heading as="h4" size="sm" className="mb-3 text-gray-800">
                          工作职责
                        </Heading>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-primary mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" size="3xl" className="mb-4">
                没有找到合适的职位？
              </Heading>
              <Paragraph size="lg" className="mb-8 text-gray-600">
                我们始终欢迎优秀的人才加入我们的团队。即使暂时没有合适的职位，
                也欢迎您发送简历给我们，我们会在有合适机会时第一时间联系您。
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  发送简历
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  联系HR
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}