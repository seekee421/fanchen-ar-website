'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Factory, GraduationCap, ShoppingBag, Heart, Building, Building2 } from 'lucide-react';

interface ProductCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductCategories({
  categories,
  activeCategory,
  onCategoryChange,
}: ProductCategoriesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          variant={activeCategory === '全部' ? 'primary' : 'outline'}
          onClick={() => onCategoryChange('全部')}
          className="min-w-[100px]"
        >
          全部产品
        </Button>
      </motion.div>
      
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
        >
          <Button
            variant={activeCategory === category ? 'primary' : 'outline'}
            onClick={() => onCategoryChange(category)}
            className="min-w-[100px]"
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

// 产品分类图标映射
export const categoryIcons: Record<string, React.ReactNode> = {
  '工业制造': <Factory className="w-6 h-6 text-blue-600" />,
  '教育培训': <GraduationCap className="w-6 h-6 text-green-600" />,
  '零售电商': <ShoppingBag className="w-6 h-6 text-purple-600" />,
  '医疗健康': <Heart className="w-6 h-6 text-red-600" />,
  '文旅娱乐': <Building className="w-6 h-6 text-orange-600" />,
  '房地产': <Building2 className="w-6 h-6 text-indigo-600" />,
};

// 产品分类描述
export const categoryDescriptions: Record<string, string> = {
  '工业制造': '为制造业提供智能化AR解决方案，提升生产效率和质量',
  '教育培训': '创新教学方式，让学习更加生动有趣和高效',
  '零售电商': '革新购物体验，提升客户满意度和转化率',
  '医疗健康': '辅助医疗诊断和治疗，提高医疗服务质量',
  '文旅娱乐': '丰富文化体验，传承历史文化价值',
  '房地产': '创新展示方式，提升销售效率和客户体验',
};