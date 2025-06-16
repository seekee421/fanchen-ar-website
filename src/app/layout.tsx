// 删除重复的 Metadata 导入声明
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { PerformanceProvider } from '@/components/providers/PerformanceProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fanchen-ar.com'),
  title: {
    default: '武汉凡尘合创科技 - 专业AR解决方案提供商',
    template: '%s - 武汉凡尘合创科技有限公司',
  },
  description: '武汉凡尘合创科技有限公司是一家专注于增强现实(AR)技术的创新型科技公司，为工业制造、教育培训、零售电商、医疗健康等行业提供专业的AR解决方案，推动企业数字化转型。',
  keywords: 'AR技术,增强现实,AR解决方案,工业AR,教育AR,零售AR,医疗AR,武汉AR公司,数字化转型',
  authors: [{ name: '武汉凡尘合创科技有限公司' }],
  creator: '武汉凡尘合创科技有限公司',
  publisher: '武汉凡尘合创科技有限公司',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.fanchen-ar.com',
    siteName: '武汉凡尘合创科技有限公司',
    title: '武汉凡尘合创科技 - 专业AR解决方案提供商',
    description: '武汉凡尘合创科技有限公司是一家专注于增强现实(AR)技术的创新型科技公司，为工业制造、教育培训、零售电商、医疗健康等行业提供专业的AR解决方案，推动企业数字化转型。',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '武汉凡尘合创科技 - 专业AR解决方案提供商',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '武汉凡尘合创科技 - 专业AR解决方案提供商',
    description: '武汉凡尘合创科技有限公司是一家专注于增强现实(AR)技术的创新型科技公司，为工业制造、教育培训、零售电商、医疗健康等行业提供专业的AR解决方案，推动企业数字化转型。',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PerformanceProvider>
          {children}
        </PerformanceProvider>
      </body>
    </html>
  );
}
