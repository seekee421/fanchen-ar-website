import React from 'react';
import { notFound } from 'next/navigation';
import { Layout } from '../../../components/layout';
import { Section, Container, Heading, Paragraph, Card, CardContent } from '../../../components/ui';
import { Breadcrumb } from '../../../components/ui';
import { ImageWithFallback } from '../../../components/ui/ImageWithFallback';

import Link from 'next/link';
import { Metadata } from 'next';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

// 模拟新闻数据（实际项目中应该从数据库或API获取）
const newsData = {
  'ar-industry-trends-2024': {
    id: 1,
    title: '2024年AR行业发展趋势分析',
    excerpt: '深入分析增强现实技术在各行业的应用前景和发展机遇，探讨AR技术的未来发展方向。',
    content: `
      <h2>引言</h2>
      <p>随着5G网络的全面普及、人工智能技术的快速发展以及硬件设备的不断优化，增强现实（AR）技术正迎来前所未有的发展机遇。根据IDC最新发布的《全球增强现实和虚拟现实支出指南》，预计2024年全球AR/VR市场规模将达到728亿美元，其中AR技术占据主导地位。本报告将深入分析AR技术在2024年的发展趋势，为行业从业者和投资者提供前瞻性的洞察。</p>
      
      <h2>市场规模与增长预测</h2>
      
      <h3>全球市场概况</h3>
      <p>据权威市场研究机构统计，2024年全球AR市场规模预计将达到430亿美元，相比2023年增长35.2%。其中，企业级应用占据65%的市场份额，消费级应用占35%。亚太地区将成为增长最快的市场，预计年增长率达到42%，中国市场贡献了其中的60%。</p>
      
      <h3>投资热点分析</h3>
      <p>2024年AR领域的投资将主要集中在以下几个方向：</p>
      <ul>
        <li><strong>硬件技术突破</strong>：光学显示、传感器融合、芯片优化等核心技术</li>
        <li><strong>软件平台建设</strong>：开发工具链、内容管理系统、云端服务平台</li>
        <li><strong>行业解决方案</strong>：垂直领域的深度应用和定制化服务</li>
        <li><strong>生态系统构建</strong>：标准制定、开发者社区、合作伙伴网络</li>
      </ul>
      
      <h2>核心技术发展趋势</h2>
      
      <h3>1. 光学显示技术革新</h3>
      <p>2024年将是AR光学显示技术的重要转折点：</p>
      <ul>
        <li><strong>Micro-OLED技术成熟</strong>：像素密度达到4000PPI以上，功耗降低40%</li>
        <li><strong>光波导技术突破</strong>：视场角扩大至50°以上，透光率提升至85%</li>
        <li><strong>全息显示探索</strong>：基于衍射光学元件的新型显示方案开始商用化</li>
        <li><strong>自适应光学系统</strong>：根据环境光线自动调节显示亮度和对比度</li>
      </ul>
      
      <h3>2. 空间计算能力提升</h3>
      <p>空间感知和理解能力是AR技术的核心，2024年将迎来重大进展：</p>
      <ul>
        <li><strong>SLAM算法优化</strong>：基于深度学习的视觉-惯性SLAM精度提升60%</li>
        <li><strong>3D重建技术</strong>：实时密集重建精度达到毫米级，支持大场景建模</li>
        <li><strong>语义理解增强</strong>：结合计算机视觉和自然语言处理的场景理解</li>
        <li><strong>多模态融合</strong>：视觉、听觉、触觉等多感官信息的协同处理</li>
      </ul>
      
      <h3>3. 人工智能深度集成</h3>
      <p>AI技术与AR的深度融合将带来革命性变化：</p>
      <ul>
        <li><strong>智能内容生成</strong>：基于生成式AI的AR内容自动创建和优化</li>
        <li><strong>个性化交互</strong>：根据用户行为和偏好提供定制化AR体验</li>
        <li><strong>预测性维护</strong>：利用机器学习预测设备故障和维护需求</li>
        <li><strong>自然语言交互</strong>：支持多语言的语音控制和对话式操作</li>
      </ul>
      
      <h2>重点应用领域深度分析</h2>
      
      <h3>1. 工业制造：数字化转型的核心驱动力</h3>
      <p>工业4.0时代，AR技术正成为制造业数字化转型的关键技术：</p>
      
      <h4>智能装配与质检</h4>
      <ul>
        <li><strong>精密装配指导</strong>：毫米级精度的3D装配指引，错误率降低85%</li>
        <li><strong>实时质量检测</strong>：基于计算机视觉的缺陷识别，检测精度达到99.5%</li>
        <li><strong>工艺流程优化</strong>：通过数据分析优化生产流程，效率提升30%</li>
        <li><strong>多工位协同</strong>：支持多个工位的同步作业和信息共享</li>
      </ul>
      
      <h4>设备维护与运营</h4>
      <ul>
        <li><strong>预测性维护</strong>：结合IoT传感器数据，提前预警设备故障</li>
        <li><strong>远程专家支持</strong>：通过AR实现异地专家的实时指导</li>
        <li><strong>维护知识库</strong>：积累和共享维护经验，建立智能知识图谱</li>
        <li><strong>安全培训强化</strong>：沉浸式安全培训，事故率降低70%</li>
      </ul>
      
      <h3>2. 教育培训：学习方式的根本变革</h3>
      <p>AR技术正在重新定义教育和培训的边界：</p>
      
      <h4>K-12教育创新</h4>
      <ul>
        <li><strong>立体化教学</strong>：抽象概念的3D可视化，理解效率提升80%</li>
        <li><strong>互动式实验</strong>：虚拟实验室降低成本90%，安全性大幅提升</li>
        <li><strong>个性化学习</strong>：根据学习进度调整教学内容和难度</li>
        <li><strong>协作学习平台</strong>：支持多人同时参与的虚拟学习环境</li>
      </ul>
      
      <h4>职业技能培训</h4>
      <ul>
        <li><strong>技能认证体系</strong>：标准化的AR技能评估和认证流程</li>
        <li><strong>情景化训练</strong>：真实工作场景的模拟训练环境</li>
        <li><strong>持续学习支持</strong>：工作中的实时指导和知识更新</li>
        <li><strong>跨地域培训</strong>：突破地理限制的远程培训解决方案</li>
      </ul>
      
      <h3>3. 医疗健康：精准医疗的技术支撑</h3>
      <p>AR技术在医疗领域的应用正从辅助工具向核心技术转变：</p>
      
      <h4>精准手术导航</h4>
      <ul>
        <li><strong>术前规划优化</strong>：基于医学影像的3D手术规划和模拟</li>
        <li><strong>实时导航系统</strong>：手术过程中的精确定位和路径指引</li>
        <li><strong>风险评估预警</strong>：实时监测手术风险并提供预警</li>
        <li><strong>远程会诊支持</strong>：专家远程参与手术指导和决策</li>
      </ul>
      
      <h4>康复治疗创新</h4>
      <ul>
        <li><strong>运动康复训练</strong>：个性化的康复训练方案和进度跟踪</li>
        <li><strong>认知功能恢复</strong>：针对脑损伤患者的认知训练游戏</li>
        <li><strong>心理健康干预</strong>：虚拟环境下的心理治疗和情绪调节</li>
        <li><strong>居家康复支持</strong>：远程康复指导和效果评估</li>
      </ul>
      
      <h2>新兴应用场景探索</h2>
      
      <h3>1. 智慧城市建设</h3>
      <p>AR技术正成为智慧城市建设的重要组成部分：</p>
      <ul>
        <li><strong>城市规划可视化</strong>：城市发展规划的3D展示和公众参与</li>
        <li><strong>公共服务增强</strong>：导航、信息查询、应急响应等服务优化</li>
        <li><strong>文化遗产保护</strong>：历史建筑和文物的数字化保护与展示</li>
        <li><strong>环境监测可视化</strong>：空气质量、噪音等环境数据的实时展示</li>
      </ul>
      
      <h3>2. 零售与电商</h3>
      <p>AR技术正在重塑零售业的购物体验：</p>
      <ul>
        <li><strong>虚拟试穿试用</strong>：服装、化妆品、家具等产品的AR试用</li>
        <li><strong>个性化推荐</strong>：基于用户偏好和行为的智能商品推荐</li>
        <li><strong>沉浸式购物</strong>：虚拟商店和品牌体验空间</li>
        <li><strong>社交购物平台</strong>：结合社交媒体的AR购物分享</li>
      </ul>
      
      <h3>3. 汽车与交通</h3>
      <p>AR技术在智能交通领域的应用前景广阔：</p>
      <ul>
        <li><strong>智能驾驶辅助</strong>：HUD显示、导航增强、危险预警</li>
        <li><strong>车辆维修指导</strong>：故障诊断和维修步骤的AR指引</li>
        <li><strong>驾驶培训系统</strong>：安全的虚拟驾驶训练环境</li>
        <li><strong>交通管理优化</strong>：实时交通信息的可视化管理</li>
      </ul>
      
      <h2>技术挑战与解决方案</h2>
      
      <h3>1. 硬件设备挑战</h3>
      <p>当前AR硬件仍面临诸多技术挑战：</p>
      <ul>
        <li><strong>续航能力限制</strong>：通过低功耗芯片和优化算法延长使用时间</li>
        <li><strong>设备重量问题</strong>：采用轻量化材料和集成化设计</li>
        <li><strong>视场角限制</strong>：开发新型光学方案扩大显示范围</li>
        <li><strong>成本控制难题</strong>：规模化生产和技术成熟度提升降低成本</li>
      </ul>
      
      <h3>2. 软件技术瓶颈</h3>
      <p>软件层面的技术挑战同样不容忽视：</p>
      <ul>
        <li><strong>实时渲染性能</strong>：优化渲染算法和GPU利用率</li>
        <li><strong>跟踪精度稳定性</strong>：多传感器融合提升跟踪鲁棒性</li>
        <li><strong>内容制作门槛</strong>：开发易用的内容创作工具和平台</li>
        <li><strong>跨平台兼容性</strong>：建立统一的开发标准和接口</li>
      </ul>
      
      <h3>3. 生态系统建设</h3>
      <p>完善的生态系统是AR产业发展的关键：</p>
      <ul>
        <li><strong>标准化推进</strong>：制定行业标准和技术规范</li>
        <li><strong>开发者培养</strong>：建立完善的开发者教育和支持体系</li>
        <li><strong>内容生态丰富</strong>：鼓励优质AR内容的创作和分发</li>
        <li><strong>产业链协同</strong>：促进上下游企业的合作与协同发展</li>
      </ul>
      
      <h2>市场竞争格局分析</h2>
      
      <h3>1. 国际巨头布局</h3>
      <p>全球科技巨头在AR领域的战略布局：</p>
      <ul>
        <li><strong>苹果公司</strong>：Vision Pro引领消费级AR设备发展方向</li>
        <li><strong>微软</strong>：HoloLens在企业级市场保持领先地位</li>
        <li><strong>谷歌</strong>：ARCore平台生态和云端服务能力</li>
        <li><strong>Meta</strong>：社交AR和元宇宙概念的深度结合</li>
      </ul>
      
      <h3>2. 中国市场机遇</h3>
      <p>中国AR市场呈现出独特的发展特点：</p>
      <ul>
        <li><strong>政策支持力度</strong>：国家层面的产业政策和资金支持</li>
        <li><strong>应用场景丰富</strong>：制造业转型升级带来巨大市场需求</li>
        <li><strong>技术创新活跃</strong>：本土企业在特定领域实现技术突破</li>
        <li><strong>产业链完整</strong>：从硬件制造到软件开发的完整产业链</li>
      </ul>
      
      <h3>3. 创新企业崛起</h3>
      <p>新兴AR企业正在细分领域展现竞争优势：</p>
      <ul>
        <li><strong>垂直领域专精</strong>：专注特定行业的深度解决方案</li>
        <li><strong>技术差异化</strong>：在核心技术环节实现突破创新</li>
        <li><strong>商业模式创新</strong>：探索新的商业模式和盈利方式</li>
        <li><strong>生态合作开放</strong>：通过开放合作构建竞争优势</li>
      </ul>
      
      <h2>投资机会与风险分析</h2>
      
      <h3>1. 投资热点领域</h3>
      <p>2024年AR领域的主要投资机会：</p>
      <ul>
        <li><strong>核心器件</strong>：光学器件、传感器、处理芯片等关键组件</li>
        <li><strong>平台软件</strong>：开发工具、内容管理、云端服务平台</li>
        <li><strong>行业应用</strong>：工业、医疗、教育等垂直领域解决方案</li>
        <li><strong>内容生态</strong>：AR内容创作、分发和运营平台</li>
      </ul>
      
      <h3>2. 风险因素评估</h3>
      <p>投资AR领域需要关注的主要风险：</p>
      <ul>
        <li><strong>技术风险</strong>：核心技术突破的不确定性</li>
        <li><strong>市场风险</strong>：用户接受度和市场推广难度</li>
        <li><strong>竞争风险</strong>：激烈的市场竞争和技术迭代</li>
        <li><strong>政策风险</strong>：相关法规和标准的变化影响</li>
      </ul>
      
      <h2>发展建议与展望</h2>
      
      <h3>1. 对企业的建议</h3>
      <p>AR企业在2024年应重点关注：</p>
      <ul>
        <li><strong>技术创新投入</strong>：加大研发投入，突破核心技术瓶颈</li>
        <li><strong>应用场景深耕</strong>：选择优势领域深度布局和精耕细作</li>
        <li><strong>生态合作共赢</strong>：建立开放的合作伙伴关系</li>
        <li><strong>人才队伍建设</strong>：培养和引进高端技术人才</li>
      </ul>
      
      <h3>2. 对投资者的建议</h3>
      <p>投资者在AR领域的投资策略：</p>
      <ul>
        <li><strong>长期价值投资</strong>：关注具有核心技术和长期价值的企业</li>
        <li><strong>分散投资风险</strong>：在产业链不同环节进行投资布局</li>
        <li><strong>关注政策导向</strong>：把握政策支持带来的投资机遇</li>
        <li><strong>国际视野布局</strong>：关注全球AR产业的发展动态</li>
      </ul>
      
      <h3>3. 对政府的建议</h3>
      <p>政府在推动AR产业发展中的作用：</p>
      <ul>
        <li><strong>政策环境优化</strong>：制定有利于产业发展的政策措施</li>
        <li><strong>基础设施建设</strong>：加强5G网络和云计算基础设施</li>
        <li><strong>标准体系建立</strong>：推动行业标准和技术规范制定</li>
        <li><strong>人才培养支持</strong>：加强AR相关专业教育和人才培养</li>
      </ul>
      
      <h2>结论与展望</h2>
      <p>2024年将是AR技术发展的关键转折点，技术成熟度的提升、应用场景的拓展和生态系统的完善将推动AR产业进入快速发展期。随着硬件性能的持续优化、软件算法的不断进步以及5G、AI等技术的深度融合，AR技术将在更多领域实现规模化应用。</p>
      
      <p>对于武汉凡尘合创而言，我们将继续坚持技术创新驱动，深耕工业制造、教育培训等优势领域，同时积极探索新兴应用场景，为客户提供更加专业、高效的AR解决方案。我们相信，通过持续的技术创新和生态建设，AR技术必将成为推动数字经济发展和产业转型升级的重要力量。</p>
      
      <p>展望未来，AR技术与人工智能、物联网、区块链等新兴技术的融合将创造出更多的应用可能性，为人类社会的数字化转型贡献更大的价值。我们期待与行业伙伴携手合作，共同推动AR技术的发展和应用，开创数字化未来的美好愿景。</p>
    `,
    date: '2024-01-15',
    category: '行业分析',
    author: '技术团队',
    readTime: '8分钟',
    tags: ['AR技术', '行业趋势', '技术发展', '市场分析'],
    image: '/sources/cases/制造业.jpg',
  },
  'industrial-ar-case-study': {
    id: 2,
    title: '工业AR应用案例：智能制造新突破',
    excerpt: '分享我们在工业制造领域的AR应用案例，展示AR技术如何提升生产效率和质量控制。',
    content: `
      <h2>项目背景</h2>
      <p>某大型制造企业面临着生产效率低下、质量控制困难、员工培训成本高等挑战。为了解决这些问题，我们为其定制开发了一套完整的工业AR解决方案。</p>
      
      <h2>解决方案</h2>
      
      <h3>1. AR装配指导系统</h3>
      <p>通过AR技术为工人提供实时的装配指导：</p>
      <ul>
        <li>3D可视化装配步骤</li>
        <li>实时错误检测和提醒</li>
        <li>装配进度跟踪</li>
        <li>质量检查点提示</li>
      </ul>
      
      <h3>2. 设备维护AR系统</h3>
      <p>为设备维护人员提供智能化的维护指导：</p>
      <ul>
        <li>设备状态可视化</li>
        <li>故障诊断辅助</li>
        <li>维护步骤指导</li>
        <li>历史维护记录查询</li>
      </ul>
      
      <h3>3. 员工培训AR平台</h3>
      <p>构建沉浸式的员工培训环境：</p>
      <ul>
        <li>虚拟操作环境</li>
        <li>安全培训模拟</li>
        <li>技能评估系统</li>
        <li>学习进度跟踪</li>
      </ul>
      
      <h2>实施效果</h2>
      
      <h3>生产效率提升</h3>
      <p>通过AR装配指导系统，装配效率提升了35%，装配错误率降低了60%。</p>
      
      <h3>维护成本降低</h3>
      <p>设备维护时间缩短了40%，维护成本降低了25%。</p>
      
      <h3>培训效果改善</h3>
      <p>新员工培训时间缩短了50%，培训效果显著提升。</p>
      
      <h2>技术特点</h2>
      
      <h3>高精度跟踪</h3>
      <p>采用先进的计算机视觉算法，实现毫米级的跟踪精度。</p>
      
      <h3>实时渲染</h3>
      <p>优化的渲染引擎确保AR内容的实时显示和流畅交互。</p>
      
      <h3>云端协作</h3>
      <p>支持多用户协作和远程专家指导。</p>
      
      <h2>未来展望</h2>
      <p>基于这个成功案例，我们将继续深化AR技术在工业制造领域的应用，为更多企业提供智能化的解决方案。</p>
    `,
    date: '2024-01-10',
    category: '案例分享',
    author: '项目团队',
    readTime: '6分钟',
    tags: ['工业AR', '智能制造', '案例研究', '效率提升'],
    image: '/sources/cases/制造业.jpg',
  },
  'education-ar-innovation': {
    id: 3,
    title: '教育AR创新：沉浸式学习体验',
    excerpt: '探索AR技术在教育领域的创新应用，为学生提供更加生动有趣的学习体验。',
    content: `
      <h2>教育AR的重要性</h2>
      <p>传统教育模式面临着学生注意力分散、学习兴趣不高、抽象概念难以理解等挑战。AR技术的引入为教育行业带来了新的解决方案。</p>
      
      <h2>AR教育应用场景</h2>
      
      <h3>1. 科学实验教学</h3>
      <p>通过AR技术创建虚拟实验室：</p>
      <ul>
        <li>化学分子结构可视化</li>
        <li>物理现象模拟演示</li>
        <li>生物器官3D展示</li>
        <li>安全实验环境</li>
      </ul>
      
      <h3>2. 历史文化教育</h3>
      <p>让历史文化"活"起来：</p>
      <ul>
        <li>古建筑3D重现</li>
        <li>历史事件场景还原</li>
        <li>文物互动体验</li>
        <li>文化传承教育</li>
      </ul>
      
      <h3>3. 语言学习</h3>
      <p>创造沉浸式语言环境：</p>
      <ul>
        <li>虚拟对话场景</li>
        <li>文字识别翻译</li>
        <li>发音纠正指导</li>
        <li>文化背景介绍</li>
      </ul>
      
      <h2>技术实现</h2>
      
      <h3>内容制作平台</h3>
      <p>为教师提供简单易用的AR内容制作工具，无需编程基础即可创建AR教学内容。</p>
      
      <h3>多平台支持</h3>
      <p>支持手机、平板、AR眼镜等多种设备，适应不同的教学环境。</p>
      
      <h3>云端资源库</h3>
      <p>建立丰富的AR教育资源库，涵盖各个学科和年级。</p>
      
      <h2>应用效果</h2>
      
      <h3>学习兴趣提升</h3>
      <p>学生对AR教学内容的兴趣度提升了80%以上。</p>
      
      <h3>理解能力增强</h3>
      <p>抽象概念的理解率提升了65%。</p>
      
      <h3>记忆效果改善</h3>
      <p>通过AR技术学习的内容，记忆保持率提升了55%。</p>
      
      <h2>发展挑战</h2>
      
      <h3>技术门槛</h3>
      <p>需要降低AR内容制作的技术门槛，让更多教师能够参与。</p>
      
      <h3>设备成本</h3>
      <p>AR设备的成本仍然较高，需要寻找更加经济适用的解决方案。</p>
      
      <h3>内容标准</h3>
      <p>需要建立统一的AR教育内容标准和评估体系。</p>
      
      <h2>未来展望</h2>
      <p>随着AR技术的不断发展和成本的降低，AR教育将成为未来教育的重要组成部分，为学生提供更加个性化和高效的学习体验。</p>
    `,
    date: '2024-01-05',
    category: '技术创新',
    author: '教育团队',
    readTime: '7分钟',
    tags: ['教育AR', '学习体验', '技术创新', '沉浸式教育'],
    image: '/sources/cases/教育培训.jpg',
  },
  'company-milestone-2023': {
    id: 4,
    title: '凡尘合创2023年度里程碑回顾',
    excerpt: '回顾2023年公司在AR技术研发、项目交付和团队建设方面取得的重要成就。',
    content: `
      <h2>2023年度成就回顾</h2>
      <p>2023年对于凡尘合创来说是具有里程碑意义的一年。我们在AR技术研发、项目交付和团队建设等多个方面都取得了重要突破。</p>
      
      <h2>技术研发突破</h2>
      
      <h3>核心算法优化</h3>
      <p>我们在AR跟踪算法方面取得了重大突破：</p>
      <ul>
        <li>跟踪精度提升40%</li>
        <li>处理速度提升60%</li>
        <li>稳定性显著增强</li>
        <li>功耗降低30%</li>
      </ul>
      
      <h3>平台能力扩展</h3>
      <p>AR开发平台功能全面升级：</p>
      <ul>
        <li>支持更多设备类型</li>
        <li>新增云端协作功能</li>
        <li>优化开发工具链</li>
        <li>增强安全防护机制</li>
      </ul>
      
      <h2>项目交付成果</h2>
      
      <h3>重点项目</h3>
      <p>2023年我们成功交付了多个重要项目：</p>
      <ul>
        <li>工业制造AR解决方案 - 5个项目</li>
        <li>教育培训AR平台 - 8个项目</li>
        <li>医疗健康AR应用 - 3个项目</li>
        <li>零售展示AR系统 - 12个项目</li>
      </ul>
      
      <h3>客户满意度</h3>
      <p>客户反馈数据显示：</p>
      <ul>
        <li>项目按时交付率：98%</li>
        <li>客户满意度：96%</li>
        <li>复购率：85%</li>
        <li>推荐率：92%</li>
      </ul>
      
      <h2>团队建设成就</h2>
      
      <h3>人才引进</h3>
      <p>团队规模持续扩大：</p>
      <ul>
        <li>新增技术人员30名</li>
        <li>引进行业专家5名</li>
        <li>建立实习生培养体系</li>
        <li>完善人才梯队建设</li>
      </ul>
      
      <h3>技能提升</h3>
      <p>员工能力建设成果：</p>
      <ul>
        <li>技术培训覆盖率100%</li>
        <li>认证通过率95%</li>
        <li>内部分享会48场</li>
        <li>外部技术交流20次</li>
      </ul>
      
      <h2>市场拓展</h2>
      
      <h3>业务增长</h3>
      <p>市场表现亮眼：</p>
      <ul>
        <li>营收同比增长150%</li>
        <li>新客户增长80%</li>
        <li>市场份额提升25%</li>
        <li>品牌知名度显著提升</li>
      </ul>
      
      <h3>合作伙伴</h3>
      <p>生态合作不断深化：</p>
      <ul>
        <li>战略合作伙伴15家</li>
        <li>技术合作伙伴25家</li>
        <li>渠道合作伙伴40家</li>
        <li>学术合作机构8家</li>
      </ul>
      
      <h2>展望2024</h2>
      <p>基于2023年的坚实基础，我们对2024年充满信心。我们将继续深耕AR技术，拓展应用场景，为客户创造更大价值。</p>
    `,
    date: '2023-12-30',
    category: '公司动态',
    author: '公司管理层',
    readTime: '8分钟',
    tags: ['公司动态', '年度总结', '里程碑', '成就回顾'],
    image: '/sources/cases/制造业.jpg',
  },
  'ar-retail-transformation': {
    id: 5,
    title: 'AR技术推动零售业数字化转型',
    excerpt: '分析AR技术在零售行业的应用价值，展示虚拟试穿、商品展示等创新解决方案。',
    content: `
      <h2>零售业数字化转型趋势</h2>
      <p>随着消费者购物习惯的改变和技术的快速发展，零售业正在经历前所未有的数字化转型。AR技术作为新兴的交互技术，为零售业带来了全新的可能性。</p>
      
      <h2>AR在零售业的应用场景</h2>
      
      <h3>1. 虚拟试穿体验</h3>
      <p>AR虚拟试穿技术革命性地改变了购物体验：</p>
      <ul>
        <li>服装虚拟试穿</li>
        <li>鞋类尺寸匹配</li>
        <li>眼镜虚拟试戴</li>
        <li>化妆品效果预览</li>
      </ul>
      
      <h3>2. 商品可视化展示</h3>
      <p>突破物理空间限制，提供丰富的商品展示：</p>
      <ul>
        <li>家具摆放预览</li>
        <li>汽车配置展示</li>
        <li>电子产品拆解</li>
        <li>商品细节放大</li>
      </ul>
      
      <h3>3. 智能导购服务</h3>
      <p>AI+AR技术提供个性化购物助手：</p>
      <ul>
        <li>商品信息识别</li>
        <li>价格比较分析</li>
        <li>个性化推荐</li>
        <li>库存实时查询</li>
      </ul>
      
      <h2>技术实现方案</h2>
      
      <h3>移动端AR应用</h3>
      <p>基于智能手机的AR购物应用：</p>
      <ul>
        <li>相机实时渲染</li>
        <li>手势交互控制</li>
        <li>云端数据同步</li>
        <li>社交分享功能</li>
      </ul>
      
      <h3>Web AR解决方案</h3>
      <p>无需下载应用的Web AR体验：</p>
      <ul>
        <li>浏览器原生支持</li>
        <li>跨平台兼容</li>
        <li>快速部署上线</li>
        <li>SEO友好优化</li>
      </ul>
      
      <h3>线下AR设备</h3>
      <p>实体店铺的AR设备部署：</p>
      <ul>
        <li>AR试衣镜</li>
        <li>互动展示屏</li>
        <li>AR导购机器人</li>
        <li>沉浸式体验区</li>
      </ul>
      
      <h2>商业价值分析</h2>
      
      <h3>提升转化率</h3>
      <p>AR技术显著提升购物转化率：</p>
      <ul>
        <li>试穿体验提升购买信心</li>
        <li>减少退货率40%</li>
        <li>增加客户停留时间</li>
        <li>提高复购率35%</li>
      </ul>
      
      <h3>降低运营成本</h3>
      <p>智能化服务减少人力成本：</p>
      <ul>
        <li>自动化导购服务</li>
        <li>减少样品展示成本</li>
        <li>优化库存管理</li>
        <li>提高空间利用率</li>
      </ul>
      
      <h3>增强品牌体验</h3>
      <p>创新技术提升品牌形象：</p>
      <ul>
        <li>科技感购物体验</li>
        <li>个性化服务定制</li>
        <li>社交媒体传播</li>
        <li>品牌差异化竞争</li>
      </ul>
      
      <h2>成功案例分享</h2>
      
      <h3>时尚品牌AR试衣</h3>
      <p>某知名时尚品牌通过AR试衣应用，实现了线上试穿体验，销售额提升了60%。</p>
      
      <h3>家居品牌AR展示</h3>
      <p>家居品牌利用AR技术让客户在家中预览家具摆放效果，订单转化率提升了45%。</p>
      
      <h3>美妆品牌AR试妆</h3>
      <p>美妆品牌推出AR试妆功能，用户参与度提升了200%，品牌知名度显著提升。</p>
      
      <h2>发展趋势展望</h2>
      
      <h3>技术发展方向</h3>
      <p>AR零售技术将朝着更加智能化方向发展：</p>
      <ul>
        <li>AI算法优化</li>
        <li>5G网络支持</li>
        <li>云端渲染技术</li>
        <li>多感官交互</li>
      </ul>
      
      <h3>应用场景扩展</h3>
      <p>AR技术将覆盖更多零售场景：</p>
      <ul>
        <li>全品类商品支持</li>
        <li>全渠道整合</li>
        <li>个性化定制</li>
        <li>社交购物体验</li>
      </ul>
      
      <h2>结语</h2>
      <p>AR技术正在重塑零售业的未来，为消费者带来前所未有的购物体验，为商家创造新的商业价值。随着技术的不断成熟和成本的降低，AR将成为零售业数字化转型的重要驱动力。</p>
    `,
    date: '2023-12-25',
    category: '行业应用',
    author: '零售解决方案团队',
    readTime: '9分钟',
    tags: ['零售AR', '数字化转型', '虚拟试穿', '商业价值'],
    image: '/sources/cases/零售展示.jpg',
  },
  'medical-ar-breakthrough': {
    id: 6,
    title: '医疗AR技术新突破：精准手术导航',
    excerpt: '介绍我们在医疗AR领域的最新技术突破，为外科手术提供精准的AR导航系统。',
    content: `
      <h2>医疗AR技术背景</h2>
      <p>现代医疗技术的发展对手术精度和安全性提出了更高要求。传统的手术导航系统虽然有效，但在实时性、直观性和精确性方面仍有提升空间。AR技术的引入为医疗领域带来了革命性的变化。</p>
      
      <h2>AR手术导航系统</h2>
      
      <h3>核心技术特点</h3>
      <p>我们开发的AR手术导航系统具有以下特点：</p>
      <ul>
        <li>亚毫米级定位精度</li>
        <li>实时图像配准</li>
        <li>多模态数据融合</li>
        <li>低延迟渲染技术</li>
      </ul>
      
      <h3>系统组成</h3>
      <p>完整的AR手术导航系统包括：</p>
      <ul>
        <li>高精度跟踪设备</li>
        <li>AR显示设备</li>
        <li>图像处理工作站</li>
        <li>手术器械跟踪器</li>
      </ul>
      
      <h2>技术创新点</h2>
      
      <h3>1. 实时图像配准算法</h3>
      <p>开发了基于深度学习的实时图像配准算法：</p>
      <ul>
        <li>配准精度提升50%</li>
        <li>处理速度提升3倍</li>
        <li>适应性更强</li>
        <li>鲁棒性显著增强</li>
      </ul>
      
      <h3>2. 多模态数据融合</h3>
      <p>整合多种医学影像数据：</p>
      <ul>
        <li>CT扫描数据</li>
        <li>MRI影像数据</li>
        <li>超声实时图像</li>
        <li>内窥镜视频流</li>
      </ul>
      
      <h3>3. 智能手术规划</h3>
      <p>AI辅助的手术路径规划：</p>
      <ul>
        <li>最优路径计算</li>
        <li>风险评估分析</li>
        <li>并发症预测</li>
        <li>个性化方案定制</li>
      </ul>
      
      <h2>应用场景</h2>
      
      <h3>神经外科手术</h3>
      <p>在脑部手术中的应用：</p>
      <ul>
        <li>肿瘤精确定位</li>
        <li>重要神经保护</li>
        <li>血管结构显示</li>
        <li>手术路径规划</li>
      </ul>
      
      <h3>骨科手术</h3>
      <p>在骨科手术中的优势：</p>
      <ul>
        <li>骨折复位指导</li>
        <li>植入物定位</li>
        <li>关节置换辅助</li>
        <li>脊柱手术导航</li>
      </ul>
      
      <h3>心血管手术</h3>
      <p>在心血管手术中的应用：</p>
      <ul>
        <li>血管结构可视化</li>
        <li>支架植入指导</li>
        <li>搭桥手术辅助</li>
        <li>微创手术支持</li>
      </ul>
      
      <h2>临床验证结果</h2>
      
      <h3>精度验证</h3>
      <p>临床试验数据显示：</p>
      <ul>
        <li>定位精度：0.5mm以内</li>
        <li>角度精度：0.5度以内</li>
        <li>实时性：延迟<20ms</li>
        <li>稳定性：99.8%</li>
      </ul>
      
      <h3>手术效果</h3>
      <p>使用AR导航系统的手术效果：</p>
      <ul>
        <li>手术时间缩短25%</li>
        <li>并发症降低40%</li>
        <li>患者恢复时间缩短30%</li>
        <li>医生满意度95%</li>
      </ul>
      
      <h2>安全保障机制</h2>
      
      <h3>多重验证</h3>
      <p>确保系统安全可靠：</p>
      <ul>
        <li>实时精度监控</li>
        <li>异常情况报警</li>
        <li>备用系统切换</li>
        <li>操作日志记录</li>
      </ul>
      
      <h3>质量控制</h3>
      <p>严格的质量管理体系：</p>
      <ul>
        <li>设备定期校准</li>
        <li>软件版本管理</li>
        <li>操作培训认证</li>
        <li>持续改进机制</li>
      </ul>
      
      <h2>未来发展方向</h2>
      
      <h3>技术升级</h3>
      <p>持续的技术创新：</p>
      <ul>
        <li>AI算法优化</li>
        <li>5G网络应用</li>
        <li>云端协作平台</li>
        <li>远程手术支持</li>
      </ul>
      
      <h3>应用拓展</h3>
      <p>扩展更多医疗场景：</p>
      <ul>
        <li>微创手术</li>
        <li>机器人手术</li>
        <li>远程医疗</li>
        <li>医学教育培训</li>
      </ul>
      
      <h2>结语</h2>
      <p>AR技术在医疗领域的应用前景广阔，我们将继续深耕医疗AR技术，为医生提供更加精准、安全、高效的手术导航解决方案，为患者带来更好的治疗效果。</p>
    `,
    date: '2023-12-20',
    category: '技术突破',
    author: '医疗AR研发团队',
    readTime: '10分钟',
    tags: ['医疗AR', '手术导航', '技术突破', '精准医疗'],
    image: '/sources/cases/医疗健康.jpg',
  },
  'ar-automotive-innovation': {
    id: 7,
    title: 'AR技术赋能汽车行业：智能驾驶新体验',
    excerpt: '探索AR技术在汽车行业的创新应用，从智能导航到维修指导，全面提升驾驶和维护体验。',
    content: `
      <h2>汽车行业数字化转型</h2>
      <p>汽车行业正在经历前所未有的数字化转型，从传统的机械制造向智能化、网联化方向发展。AR技术作为新兴的人机交互技术，为汽车行业带来了全新的应用场景和商业机会。</p>
      
      <h2>AR在汽车行业的应用</h2>
      
      <h3>1. 智能驾驶辅助</h3>
      <p>AR技术提升驾驶安全性和便利性：</p>
      <ul>
        <li>HUD抬头显示系统</li>
        <li>导航信息叠加</li>
        <li>车道偏离提醒</li>
        <li>障碍物识别标注</li>
      </ul>
      
      <h3>2. 维修保养指导</h3>
      <p>AR技术革新汽车维修服务：</p>
      <ul>
        <li>故障诊断可视化</li>
        <li>维修步骤指导</li>
        <li>零部件识别</li>
        <li>远程专家支持</li>
      </ul>
      
      <h3>3. 销售展示体验</h3>
      <p>AR技术改变汽车销售模式：</p>
      <ul>
        <li>虚拟试驾体验</li>
        <li>配置可视化展示</li>
        <li>内饰定制预览</li>
        <li>功能演示说明</li>
      </ul>
      
      <h2>核心技术方案</h2>
      
      <h3>车载AR系统</h3>
      <p>集成在车辆中的AR解决方案：</p>
      <ul>
        <li>高精度GPS定位</li>
        <li>多传感器融合</li>
        <li>实时环境感知</li>
        <li>低延迟渲染引擎</li>
      </ul>
      
      <h3>移动AR应用</h3>
      <p>基于智能设备的AR应用：</p>
      <ul>
        <li>相机实时识别</li>
        <li>云端数据处理</li>
        <li>离线功能支持</li>
        <li>多平台兼容</li>
      </ul>
      
      <h3>AR眼镜解决方案</h3>
      <p>专业级AR设备应用：</p>
      <ul>
        <li>轻量化设计</li>
        <li>长续航能力</li>
        <li>高清显示效果</li>
        <li>语音交互控制</li>
      </ul>
      
      <h2>智能驾驶AR应用</h2>
      
      <h3>AR导航系统</h3>
      <p>下一代车载导航体验：</p>
      <ul>
        <li>实景导航指引</li>
        <li>车道级精准定位</li>
        <li>实时路况显示</li>
        <li>兴趣点信息叠加</li>
      </ul>
      
      <h3>安全辅助功能</h3>
      <p>AR技术提升行车安全：</p>
      <ul>
        <li>盲区监测提醒</li>
        <li>行人识别警告</li>
        <li>车距保持指示</li>
        <li>夜视增强显示</li>
      </ul>
      
      <h3>信息娱乐系统</h3>
      <p>丰富的车内AR体验：</p>
      <ul>
        <li>虚拟仪表盘</li>
        <li>娱乐内容投影</li>
        <li>社交互动功能</li>
        <li>个性化界面定制</li>
      </ul>
      
      <h2>维修服务AR应用</h2>
      
      <h3>智能诊断系统</h3>
      <p>AR技术辅助故障诊断：</p>
      <ul>
        <li>OBD数据可视化</li>
        <li>故障码解释说明</li>
        <li>维修建议推荐</li>
        <li>历史记录查询</li>
      </ul>
      
      <h3>维修指导平台</h3>
      <p>专业的AR维修指导：</p>
      <ul>
        <li>3D拆装动画</li>
        <li>工具使用指导</li>
        <li>安全注意事项</li>
        <li>质量检查标准</li>
      </ul>
      
      <h3>培训教育系统</h3>
      <p>AR技术革新技师培训：</p>
      <ul>
        <li>虚拟实训环境</li>
        <li>技能评估系统</li>
        <li>知识库管理</li>
        <li>认证考试平台</li>
      </ul>
      
      <h2>商业价值分析</h2>
      
      <h3>提升用户体验</h3>
      <p>AR技术显著改善用户体验：</p>
      <ul>
        <li>驾驶安全性提升30%</li>
        <li>导航准确率提升95%</li>
        <li>维修效率提升40%</li>
        <li>客户满意度提升85%</li>
      </ul>
      
      <h3>降低运营成本</h3>
      <p>智能化服务减少成本：</p>
      <ul>
        <li>维修时间缩短35%</li>
        <li>培训成本降低50%</li>
        <li>错误率降低60%</li>
        <li>人力成本优化25%</li>
      </ul>
      
      <h3>创新商业模式</h3>
      <p>AR技术催生新的商业机会：</p>
      <ul>
        <li>订阅式服务模式</li>
        <li>数据增值服务</li>
        <li>生态合作平台</li>
        <li>个性化定制服务</li>
      </ul>
      
      <h2>成功案例展示</h2>
      
      <h3>豪华品牌AR导航</h3>
      <p>某豪华汽车品牌采用我们的AR导航系统，用户满意度提升了45%，品牌科技形象显著提升。</p>
      
      <h3>4S店AR维修</h3>
      <p>连锁4S店部署AR维修指导系统，维修效率提升40%，客户等待时间缩短30%。</p>
      
      <h3>驾校AR培训</h3>
      <p>驾校引入AR培训系统，学员通过率提升25%，培训成本降低35%。</p>
      
      <h2>技术发展趋势</h2>
      
      <h3>硬件技术进步</h3>
      <p>AR硬件技术不断发展：</p>
      <ul>
        <li>显示技术提升</li>
        <li>传感器精度增强</li>
        <li>处理能力提升</li>
        <li>功耗持续降低</li>
      </ul>
      
      <h3>软件算法优化</h3>
      <p>AR软件技术持续创新：</p>
      <ul>
        <li>AI算法集成</li>
        <li>实时渲染优化</li>
        <li>多模态交互</li>
        <li>云边协同计算</li>
      </ul>
      
      <h2>未来发展展望</h2>
      
      <h3>自动驾驶融合</h3>
      <p>AR技术与自动驾驶深度融合：</p>
      <ul>
        <li>感知信息可视化</li>
        <li>决策过程透明化</li>
        <li>人机协作优化</li>
        <li>安全监控增强</li>
      </ul>
      
      <h3>智能网联生态</h3>
      <p>构建完整的智能网联生态：</p>
      <ul>
        <li>车路协同系统</li>
        <li>V2X通信集成</li>
        <li>云端服务平台</li>
        <li>数据价值挖掘</li>
      </ul>
      
      <h2>结语</h2>
      <p>AR技术正在重塑汽车行业的未来，从驾驶体验到维修服务，从销售展示到培训教育，AR技术都展现出巨大的应用潜力。我们将继续深耕汽车AR技术，为行业数字化转型贡献力量。</p>
    `,
    date: '2023-12-15',
    category: '行业应用',
    author: '汽车行业解决方案团队',
    readTime: '11分钟',
    tags: ['汽车AR', '智能驾驶', '维修指导', '行业创新'],
    image: '/sources/cases/汽车行业.jpg',
  },
  'ar-cloud-platform-launch': {
    id: 8,
    title: 'AR云平台正式发布：开启协作新时代',
    excerpt: '凡尘合创AR云平台正式上线，支持多人协作、远程指导和实时数据同步，为企业提供全新的AR解决方案。',
    content: `
      <h2>AR云平台发布背景</h2>
      <p>随着AR技术的快速发展和企业数字化转型的深入推进，传统的单机AR应用已经无法满足现代企业对协作、共享和远程服务的需求。为此，我们正式发布了凡尘合创AR云平台，开启AR协作的新时代。</p>
      
      <h2>平台核心功能</h2>
      
      <h3>1. 多人协作空间</h3>
      <p>突破地理限制的AR协作体验：</p>
      <ul>
        <li>实时多人共享AR场景</li>
        <li>同步操作和交互</li>
        <li>语音视频通信集成</li>
        <li>协作历史记录</li>
      </ul>
      
      <h3>2. 远程专家指导</h3>
      <p>专业的远程技术支持服务：</p>
      <ul>
        <li>专家视角共享</li>
        <li>实时标注指导</li>
        <li>问题诊断辅助</li>
        <li>知识库集成</li>
      </ul>
      
      <h3>3. 云端内容管理</h3>
      <p>统一的AR内容管理平台：</p>
      <ul>
        <li>3D模型库管理</li>
        <li>版本控制系统</li>
        <li>权限管理机制</li>
        <li>内容分发网络</li>
      </ul>
      
      <h2>技术架构设计</h2>
      
      <h3>云原生架构</h3>
      <p>基于现代云原生技术构建：</p>
      <ul>
        <li>微服务架构设计</li>
        <li>容器化部署</li>
        <li>自动扩缩容</li>
        <li>高可用保障</li>
      </ul>
      
      <h3>边缘计算支持</h3>
      <p>优化的边缘计算解决方案：</p>
      <ul>
        <li>就近数据处理</li>
        <li>低延迟渲染</li>
        <li>带宽优化</li>
        <li>离线模式支持</li>
      </ul>
      
      <h3>安全防护体系</h3>
      <p>企业级安全保障机制：</p>
      <ul>
        <li>端到端加密</li>
        <li>身份认证授权</li>
        <li>数据隐私保护</li>
        <li>审计日志记录</li>
      </ul>
      
      <h2>应用场景展示</h2>
      
      <h3>工业制造协作</h3>
      <p>制造业的AR协作应用：</p>
      <ul>
        <li>远程设备维护</li>
        <li>质量检查指导</li>
        <li>技术培训协作</li>
        <li>产品设计评审</li>
      </ul>
      
      <h3>医疗远程会诊</h3>
      <p>医疗领域的协作应用：</p>
      <ul>
        <li>远程手术指导</li>
        <li>医学影像分析</li>
        <li>专家会诊协作</li>
        <li>医学教育培训</li>
      </ul>
      
      <h3>教育培训平台</h3>
      <p>教育行业的协作解决方案：</p>
      <ul>
        <li>远程实验教学</li>
        <li>虚拟课堂体验</li>
        <li>协作项目学习</li>
        <li>技能评估系统</li>
      </ul>
      
      <h2>平台优势特点</h2>
      
      <h3>高性能表现</h3>
      <p>卓越的技术性能指标：</p>
      <ul>
        <li>延迟<50ms</li>
        <li>支持100+并发用户</li>
        <li>99.9%服务可用性</li>
        <li>TB级数据处理能力</li>
      </ul>
      
      <h3>易用性设计</h3>
      <p>用户友好的操作体验：</p>
      <ul>
        <li>直观的用户界面</li>
        <li>一键快速部署</li>
        <li>多平台兼容</li>
        <li>丰富的API接口</li>
      </ul>
      
      <h3>可扩展性</h3>
      <p>灵活的扩展能力：</p>
      <ul>
        <li>模块化组件设计</li>
        <li>插件生态系统</li>
        <li>第三方集成支持</li>
        <li>定制开发服务</li>
      </ul>
      
      <h2>商业模式创新</h2>
      
      <h3>SaaS服务模式</h3>
      <p>灵活的订阅服务模式：</p>
      <ul>
        <li>按需付费</li>
        <li>弹性扩容</li>
        <li>免维护部署</li>
        <li>持续更新升级</li>
      </ul>
      
      <h3>生态合作伙伴</h3>
      <p>开放的生态合作体系：</p>
      <ul>
        <li>技术合作伙伴</li>
        <li>内容提供商</li>
        <li>渠道分销商</li>
        <li>系统集成商</li>
      </ul>
      
      <h3>增值服务</h3>
      <p>丰富的增值服务内容：</p>
      <ul>
        <li>专业咨询服务</li>
        <li>定制开发服务</li>
        <li>培训认证服务</li>
        <li>技术支持服务</li>
      </ul>
      
      <h2>客户成功案例</h2>
      
      <h3>制造业客户</h3>
      <p>某大型制造企业通过AR云平台实现了全球工厂的远程协作，维护效率提升了60%，差旅成本降低了70%。</p>
      
      <h3>医疗机构</h3>
      <p>知名医院利用AR云平台开展远程会诊，专家资源利用率提升了80%，患者满意度显著提升。</p>
      
      <h3>教育机构</h3>
      <p>高等院校采用AR云平台进行远程实验教学，学生参与度提升了90%，教学效果明显改善。</p>
      
      <h2>市场前景分析</h2>
      
      <h3>市场需求增长</h3>
      <p>AR云服务市场快速增长：</p>
      <ul>
        <li>市场规模年增长率50%+</li>
        <li>企业数字化转型驱动</li>
        <li>远程协作需求激增</li>
        <li>5G网络普及加速</li>
      </ul>
      
      <h3>竞争优势</h3>
      <p>我们的核心竞争优势：</p>
      <ul>
        <li>技术领先性</li>
        <li>产品成熟度</li>
        <li>服务专业性</li>
        <li>生态完整性</li>
      </ul>
      
      <h2>发展规划</h2>
      
      <h3>短期目标（1年内）</h3>
      <p>近期发展重点：</p>
      <ul>
        <li>用户规模达到10万+</li>
        <li>覆盖10个重点行业</li>
        <li>建立100+合作伙伴</li>
        <li>完善产品功能</li>
      </ul>
      
      <h3>中期目标（3年内）</h3>
      <p>中期发展规划：</p>
      <ul>
        <li>成为行业领导者</li>
        <li>国际市场拓展</li>
        <li>技术标准制定</li>
        <li>生态体系完善</li>
      </ul>
      
      <h3>长期愿景（5年内）</h3>
      <p>长期发展愿景：</p>
      <ul>
        <li>全球化服务网络</li>
        <li>行业标准引领者</li>
        <li>技术创新驱动者</li>
        <li>生态价值创造者</li>
      </ul>
      
      <h2>结语</h2>
      <p>凡尘合创AR云平台的正式发布标志着我们在AR技术产业化道路上迈出了重要一步。我们将继续致力于技术创新和产品优化，为客户提供更加优质的AR云服务，推动整个行业的数字化转型和升级。</p>
    `,
    date: '2023-12-10',
    category: '产品发布',
    author: '产品团队',
    readTime: '12分钟',
    tags: ['AR云平台', '多人协作', '远程指导', '产品发布'],
    image: '/sources/cases/制造业.jpg',
  },
};

// 相关新闻推荐
const relatedNews = [
  {
    id: 4,
    slug: 'company-milestone-2023',
    title: '凡尘合创2023年度里程碑回顾',
    category: '公司动态',
    date: '2023-12-30',
  },
  {
    id: 5,
    slug: 'ar-retail-transformation',
    title: 'AR技术推动零售业数字化转型',
    category: '行业应用',
    date: '2023-12-25',
  },
  {
    id: 6,
    slug: 'medical-ar-breakthrough',
    title: '医疗AR技术新突破：精准手术导航',
    category: '技术突破',
    date: '2023-12-20',
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const news = newsData[resolvedParams.slug as keyof typeof newsData];
  
  if (!news) {
    return {
      title: '新闻不存在',
      description: '您访问的新闻页面不存在',
    };
  }

  return {
    title: news.title,
    description: news.excerpt,
    keywords: news.tags.join(','),
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
      type: 'article',
      publishedTime: news.date,
      authors: [news.author],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const news = newsData[resolvedParams.slug as keyof typeof newsData];

  if (!news) {
    notFound();
  }

  // 获取相关新闻（同类别的其他新闻）
  const relatedNews = Object.entries(newsData)
    .filter(([slug, item]) => item.category === news.category && item.id !== news.id)
    .slice(0, 3)
    .map(([slug, item]) => ({ ...item, slug }));

  // 结构化数据（mock，可后续替换）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.title,
    "description": news.excerpt,
    "image": news.image || '',
    "datePublished": news.date,
    "author": {
      "@type": "Organization",
      "name": "武汉凡尘合创科技"
    },
    "articleSection": news.category,
    "keywords": news.tags.join(', ')
  };

  return (
    <Layout>
      <EnhancedSEO
        title={`${news.title} - 新闻资讯`}
        description={news.excerpt}
        keywords={news.tags.join(', ')}
        canonical={`/news/${resolvedParams.slug}`}
        structuredData={structuredData}
      />
      {/* 面包屑导航 */}
      <Section className="bg-gray-900 py-4">
        <Container>
          <Breadcrumb
            className="text-gray-300"
            items={[
              { label: '首页', href: '/' },
              { label: '新闻资讯', href: '/news' },
              { label: news.title, href: `/news/${resolvedParams.slug}` },
            ]}
          />
        </Container>
      </Section>

      {/* 文章头部 */}
      <Section className="bg-gray-900 text-white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* 文章配图 */}
            {news.image && (
              <div className="relative mb-6">
                <ImageWithFallback 
                  src={news.image} 
                  alt={news.title} 
                  className="rounded-xl w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{news.category}</span>
                <span>·</span>
                <span>{new Date(news.date).toLocaleDateString('zh-CN')}</span>
                <span>·</span>
                <span>{news.readTime}</span>
              </div>
              {/* 返回新闻列表按钮 */}
              <Link href="/news" className="text-primary hover:text-primary-light text-sm transition-colors">
                ← 返回新闻列表
              </Link>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">{news.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {news.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                  {tag}
                </span>
              ))}
            </div>
            <div className="prose prose-lg prose-invert max-w-none mb-8" dangerouslySetInnerHTML={{ __html: news.content }} />
            {/* 分享按钮组 */}
            <div className="flex gap-4 mt-8 mb-8">
              <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 text-gray-300 transition-colors" title="分享到微信">微信</button>
              <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 text-gray-300 transition-colors" title="分享到微博">微博</button>
              <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 text-gray-300 transition-colors" title="复制链接">复制链接</button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 相关新闻推荐 */}
      <Section className="bg-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="2xl" className="mb-8 text-white">
              相关新闻
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((item, index) => (
                <div key={item.id}>
                  <Link href={`/news/${item.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-900 border border-gray-700">
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium border border-primary/30">
                            {item.category}
                          </span>
                        </div>
                        <Heading as="h3" size="md" className="mb-3 group-hover:text-primary transition-colors text-white">
                          {item.title}
                        </Heading>
                        <div className="text-sm text-gray-400">
                          {new Date(item.date).toLocaleDateString('zh-CN')}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 返回列表 */}
      <Section className="bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/news">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                ← 返回新闻列表
              </button>
            </Link>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// 生成静态路径（可选，用于静态生成）
export async function generateStaticParams() {
  return Object.keys(newsData).map((slug) => ({
    slug,
  }));
}