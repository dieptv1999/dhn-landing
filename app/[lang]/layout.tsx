import type {Metadata} from "next";
import "../globals.css";
import {i18nConfig, Locale} from '@/i18n';
import { Lexend } from "next/font/google";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/layout/theme-provider";
import React from "react";

export const runtime = "edge";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giải pháp quay video đóng hàng thương mại điện tử",
  description: "Giải pháp quay video đóng hàng thương mại điện tử",
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
    </html>
  );
}
