'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Category {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

interface ProductCategoriesProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  className?: string
}

export function ProductCategories({
  categories,
  activeCategory,
  onCategoryChange,
  className
}: ProductCategoriesProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            'group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]',
            'flex flex-col items-center gap-4 text-center border backdrop-blur-sm',
            'hover:shadow-xl hover:-translate-y-1',
            activeCategory === category.id
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl border-blue-500/50 scale-[1.02]'
              : 'bg-white/80 text-gray-700 hover:bg-white border-gray-200/50 hover:border-blue-200 shadow-md'
          )}
        >
          {/* Background Gradient for Active State */}
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeBackground"
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          
          {/* Icon Container */}
          <div className="relative z-10">
            <div className={cn(
              'w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300',
              'shadow-lg group-hover:shadow-xl',
              activeCategory === category.id
                ? 'bg-white/20 text-white backdrop-blur-sm'
                : 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-100 group-hover:to-blue-200'
            )}>
              {category.icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className={cn(
              'font-bold text-lg mb-2 transition-colors duration-300',
              activeCategory === category.id ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'
            )}>
              {category.name}
            </div>
            <div className={cn(
              'text-sm leading-relaxed transition-colors duration-300',
              activeCategory === category.id ? 'text-white/90' : 'text-gray-600 group-hover:text-gray-700'
            )}>
              {category.description}
            </div>
          </div>
          
          {/* Active Indicator Dot */}
          {activeCategory === category.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full shadow-lg z-20"
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-1 left-1" />
            </motion.div>
          )}
          
          {/* Hover Glow Effect */}
          <div className={cn(
            'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
            'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
          )} />
        </motion.button>
      ))}
    </div>
  )
}