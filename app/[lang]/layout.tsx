import type {Metadata} from "next";
import "../globals.css";
import {i18nConfig, Locale} from '@/i18n';
import { Lexend } from "next/font/google";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/layout/theme-provider";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

export const runtime = "edge";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://donghangnhanh.vn`),
  title: "Giải pháp quay video đóng hàng thương mại điện tử",
  description: "Giải pháp quay video đóng hàng thương mại điện tử",
  icons: {
    icon: '/favicon.ico?v=2'
  },
  abstract: 'Giải pháp quay video đóng hàng TMĐT',
  classification: 'Giải pháp quay video đóng hàng TMĐT',
  authors: {
    name: 'donghangnhanh.vn',
    url: 'https://donghangnhanh.vn'
  },
  generator: 'donghangnhanh.vn',
  referrer: "no-referrer-when-downgrade",
  robots: 'index,follow',
  keywords: 'Đóng hàng, thương mại điện tử, quay video, lưu trữ online, khiếu nại, shopee, lazada, tiktok, temu',
  openGraph: {
    title: 'Giải pháp quay video đóng hàng thương mại điện tử',
    description: "Giải pháp quay video đóng hàng thương mại điện tử",
    images: {
      url: 'https://donghangnhanh.vn/preview.jpeg',
      width: 600,
      height: 315
    }
  },
  twitter: {},
  alternates: {
    canonical: 'https://donghangnhanh.vn',
    languages: {
      'en-us': 'https://donghangnhanh.vn/en',
      'vi-vn': 'https://donghangnhanh.vn/vi',
    },
  },
  category: 'video, TMĐT',
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default function RootLayout({
                                     children,
                                     params,
                                   }: Props) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
    <body className={cn("min-h-screen bg-background", lexend.className)}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    </body>
    <GoogleAnalytics gaId="G-D9BYZ06Q34" />
    </html>
  );
}
