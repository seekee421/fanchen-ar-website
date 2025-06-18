'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../../components/layout';
import { Section, Container, Heading, Paragraph } from '../../components/ui';
import { SEO } from '../../components/seo';

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="服务条款 - 武汉凡尘合创科技"
        description="武汉凡尘合创科技服务条款，了解使用我们服务的条款和条件。"
        keywords="服务条款,使用条款,法律声明,武汉凡尘合创科技"
      />

      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="4xl" className="mb-8 text-center">
                服务条款
              </Heading>
              
              <div className="prose prose-lg max-w-none">
                <Paragraph className="text-gray-600 mb-8 text-center">
                  最后更新时间：2024年1月1日
                </Paragraph>

                <div className="space-y-8">
                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      1. 接受条款
                    </Heading>
                    <Paragraph className="mb-4">
                      欢迎使用武汉凡尘合创科技有限公司（以下简称"我们"、"公司"或"凡尘合创"）提供的服务。
                      通过访问或使用我们的网站、产品和服务，您同意受本服务条款的约束。
                    </Paragraph>
                    <Paragraph>
                      如果您不同意这些条款，请不要使用我们的服务。我们保留随时修改这些条款的权利，
                      修改后的条款将在网站上公布后生效。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      2. 服务描述
                    </Heading>
                    <Paragraph className="mb-4">
                      我们提供增强现实（AR）技术解决方案，包括但不限于：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>AR软件开发和定制</li>
                      <li>AR硬件集成服务</li>
                      <li>技术咨询和培训</li>
                      <li>维护和支持服务</li>
                      <li>相关的技术文档和资源</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      3. 用户责任
                    </Heading>
                    <Heading as="h3" size="xl" className="mb-3">
                      3.1 合法使用
                    </Heading>
                    <Paragraph className="mb-4">
                      您同意仅将我们的服务用于合法目的，并遵守所有适用的法律法规。您不得：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>违反任何法律或法规</li>
                      <li>侵犯他人的知识产权</li>
                      <li>传播恶意软件或病毒</li>
                      <li>进行未经授权的访问或攻击</li>
                      <li>干扰服务的正常运行</li>
                    </ul>
                    
                    <Heading as="h3" size="xl" className="mb-3">
                      3.2 账户安全
                    </Heading>
                    <Paragraph>
                      如果您创建了账户，您有责任维护账户信息的机密性和安全性。
                      您对在您账户下发生的所有活动负责。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      4. 知识产权
                    </Heading>
                    <Heading as="h3" size="xl" className="mb-3">
                      4.1 我们的知识产权
                    </Heading>
                    <Paragraph className="mb-4">
                      我们的服务、软件、技术、内容和商标受知识产权法保护。
                      除非明确授权，您不得复制、修改、分发或创建衍生作品。
                    </Paragraph>
                    
                    <Heading as="h3" size="xl" className="mb-3">
                      4.2 用户内容
                    </Heading>
                    <Paragraph>
                      您保留对提交给我们的内容的所有权，但授予我们使用该内容提供服务的必要权利。
                      您保证您有权提交此类内容。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      5. 服务可用性
                    </Heading>
                    <Paragraph className="mb-4">
                      我们努力确保服务的可用性，但不保证服务将始终可用、不间断或无错误。
                      我们可能因维护、更新或其他原因暂时中断服务。
                    </Paragraph>
                    <Paragraph>
                      我们保留随时修改、暂停或终止服务的权利，恕不另行通知。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      6. 付费服务
                    </Heading>
                    <Heading as="h3" size="xl" className="mb-3">
                      6.1 费用和付款
                    </Heading>
                    <Paragraph className="mb-4">
                      某些服务可能需要付费。费用将在服务描述中明确说明。
                      您同意按照约定的条款支付所有费用。
                    </Paragraph>
                    
                    <Heading as="h3" size="xl" className="mb-3">
                      6.2 退款政策
                    </Heading>
                    <Paragraph>
                      退款政策将根据具体服务类型和合同条款确定。
                      请在购买前仔细阅读相关条款。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      7. 免责声明
                    </Heading>
                    <Paragraph className="mb-4">
                      我们的服务按"现状"提供，不提供任何明示或暗示的保证，包括但不限于：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>适销性保证</li>
                      <li>特定用途适用性保证</li>
                      <li>不侵权保证</li>
                      <li>持续可用性保证</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      8. 责任限制
                    </Heading>
                    <Paragraph className="mb-4">
                      在法律允许的最大范围内，我们不对以下损失承担责任：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>间接、偶然或后果性损失</li>
                      <li>利润损失或业务中断</li>
                      <li>数据丢失或损坏</li>
                      <li>第三方行为造成的损失</li>
                    </ul>
                    <Paragraph>
                      我们的总责任不超过您在过去12个月内支付给我们的费用。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      9. 赔偿
                    </Heading>
                    <Paragraph>
                      您同意就因您违反本条款或使用我们的服务而产生的任何索赔、损失或费用，
                      对我们进行赔偿和免责。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      10. 终止
                    </Heading>
                    <Paragraph className="mb-4">
                      我们可能因以下原因终止您的服务访问权：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>违反本服务条款</li>
                      <li>长期不活跃</li>
                      <li>法律要求</li>
                      <li>服务终止</li>
                    </ul>
                    <Paragraph>
                      终止后，您使用服务的权利将立即停止，但本条款中的相关条款将继续有效。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      11. 争议解决
                    </Heading>
                    <Paragraph className="mb-4">
                      本条款受中华人民共和国法律管辖。因本条款产生的任何争议，
                      双方应首先通过友好协商解决。
                    </Paragraph>
                    <Paragraph>
                      如协商不成，争议应提交至武汉市有管辖权的人民法院解决。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      12. 其他条款
                    </Heading>
                    <Heading as="h3" size="xl" className="mb-3">
                      12.1 完整协议
                    </Heading>
                    <Paragraph className="mb-4">
                      本条款构成您与我们之间关于服务使用的完整协议，
                      取代之前的所有协议和理解。
                    </Paragraph>
                    
                    <Heading as="h3" size="xl" className="mb-3">
                      12.2 可分割性
                    </Heading>
                    <Paragraph className="mb-4">
                      如果本条款的任何部分被认定为无效或不可执行，
                      其余部分仍将保持完全有效。
                    </Paragraph>
                    
                    <Heading as="h3" size="xl" className="mb-3">
                      12.3 不弃权
                    </Heading>
                    <Paragraph>
                      我们未行使或延迟行使任何权利不构成对该权利的放弃。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      13. 联系信息
                    </Heading>
                    <Paragraph className="mb-4">
                      如果您对本服务条款有任何问题，请联系我们：
                    </Paragraph>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Paragraph className="mb-2">
                        <strong>武汉凡尘合创科技有限公司</strong>
                      </Paragraph>
                      <Paragraph className="mb-2">
                        地址：湖北省武汉市洪山区光谷大道3号未来科技城
                      </Paragraph>
                      <Paragraph className="mb-2">
                        电话：027-8811-6621
                      </Paragraph>
                      <Paragraph className="mb-2">
                        邮箱：legal@fanchen-ar.com
                      </Paragraph>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}