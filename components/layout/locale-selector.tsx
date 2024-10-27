'use client';

import {i18nConfig, Locale} from '@/i18n';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

interface Props {
  message: string;
}

const redirectToLocale = (locale: Locale, pathname: string) => {
  // If pathname is not found, return "/" as the redirection path.
  if (!pathname) {
    return '/';
  }

  // Split pathaname as substrings in to an array, using "/" as a pattern.
  const pathParts = pathname.split('/');

  // Set the array index 1 as the locale, this position contains the locale.
  pathParts[1] = locale;

  // Join the locale with "/" to get a valid URL path (/en, /fi etc...).
  const url = pathParts.join('/');

  // Return with locale.
  return url;
};

export default function LocaleSelector({message}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const localeInfo = {
    en: {native: 'English', default: 'English'},
    vi: {native: 'Vietnamese', default: 'Vietnamese'},
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size={'icon'} aria-label={'select language'}>
            <LanguageIcon/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{message}</DropdownMenuLabel>
          {i18nConfig.locales.map((locale, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={redirectToLocale(locale, pathname)}>
                  <li className="flex w-full flex-col items-start justify-center px-3 py-1">
                    <h2 className="text-md font-medium">
                      {localeInfo[locale]?.native}
                    </h2>
                    <p className="text-xs">
                      {localeInfo[locale].default}
                    </p>
                  </li>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function LanguageIcon() {
  return (
    <>
      {/* Trabslation SVG icon, sourced from: https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
        />
      </svg>
    </>
  );
}