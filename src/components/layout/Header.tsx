"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link, usePathname as useI18nPathname } from '@/i18n/navigation';

export function Header() {
  const pathname = useI18nPathname();
  const t = useTranslations('common');
  const locale = useLocale();

  // Fonction pour vérifier si un chemin est actif
  const isActive = (path: string) => {
    if (!pathname) return false;

    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Fonction pour vérifier si on est sur une page de services
  const isServicePage = () => {
    if (!pathname) return false;

    return pathname.startsWith('/consulting-it') ||
           pathname.startsWith('/data-ia') ||
           pathname.startsWith('/formation');
  };

  const activeClass = "text-[#00f65e] font-semibold";
  const inactiveClass = "text-gray-800 dark:text-gray-200 hover:text-[#00f65e] transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 ml-2">
          <Image
            src="/images/logo/new/GREEN-BLACK-C.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 w-auto dark:hidden"
          />
          <Image
            src="/images/logo/new/GREEN-WHITE-C.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 w-auto hidden dark:block"
          />
        </Link>

        {/* Navigation pour desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive('/') ? activeClass : inactiveClass}`}
            >
              {t('navigation.home')}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={`text-sm font-medium ${
                    isServicePage() ? activeClass : inactiveClass
                  }`}
                >
                  {t('navigation.services')} <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
                <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                  <Link
                    href="/consulting-it"
                    className={`cursor-pointer ${isActive('/consulting-it') ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    {t('navigation.consulting_it')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                  <Link
                    href="/data-ia"
                    className={`cursor-pointer ${isActive('/data-ia') ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    {t('navigation.data_ia')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                  <Link
                    href="/formation"
                    className={`cursor-pointer ${isActive('/formation') ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    {t('navigation.training')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className={`text-sm font-medium ${isActive('/contact') ? activeClass : inactiveClass}`}
            >
              {t('navigation.contact')}
            </Link>
          </nav>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
                <span className="sr-only">{t('language.select')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
              <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                <Link href={pathname} locale="fr" className={`cursor-pointer ${locale === 'fr' ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}>
                  {t('language.fr')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                <Link href={pathname} locale="en" className={`cursor-pointer ${locale === 'en' ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}>
                  {t('language.en')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                <Link href={pathname} locale="de" className={`cursor-pointer ${locale === 'de' ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}>
                  {t('language.de')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                <Link href={pathname} locale="es" className={`cursor-pointer ${locale === 'es' ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}>
                  {t('language.es')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </div>

        {/* Menu mobile */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild className="ml-2">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/logo/new/GREEN-BLACK-C.png"
                  alt="Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto dark:hidden"
                />
                <Image
                  src="/images/logo/new/GREEN-WHITE-C.png"
                  alt="Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto hidden dark:block"
                />
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`text-sm font-medium ${isActive('/') ? activeClass : inactiveClass}`}
                >
                  {t('navigation.home')}
                </Link>

                <div className="space-y-3">
                  <p className={`text-sm font-medium ${
                    isServicePage() ? activeClass : 'text-gray-800 dark:text-gray-200'
                  }`}>{t('navigation.services')}</p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/consulting-it"
                      className={`block text-sm ${isActive('/consulting-it') ? activeClass : inactiveClass}`}
                    >
                      {t('navigation.consulting_it')}
                    </Link>
                    <Link
                      href="/data-ia"
                      className={`block text-sm ${isActive('/data-ia') ? activeClass : inactiveClass}`}
                    >
                      {t('navigation.data_ia')}
                    </Link>
                    <Link
                      href="/formation"
                      className={`block text-sm ${isActive('/formation') ? activeClass : inactiveClass}`}
                    >
                      {t('navigation.training')}
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`text-sm font-medium ${isActive('/contact') ? activeClass : inactiveClass}`}
                >
                  {t('navigation.contact')}
                </Link>

                {/* Language Selector Mobile */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{t('language.select')}</p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href={pathname}
                      locale="fr"
                      className={`block text-sm ${locale === 'fr' ? activeClass : inactiveClass}`}
                    >
                      {t('language.fr')}
                    </Link>
                    <Link
                      href={pathname}
                      locale="en"
                      className={`block text-sm ${locale === 'en' ? activeClass : inactiveClass}`}
                    >
                      {t('language.en')}
                    </Link>
                    <Link
                      href={pathname}
                      locale="de"
                      className={`block text-sm ${locale === 'de' ? activeClass : inactiveClass}`}
                    >
                      {t('language.de')}
                    </Link>
                    <Link
                      href={pathname}
                      locale="es"
                      className={`block text-sm ${locale === 'es' ? activeClass : inactiveClass}`}
                    >
                      {t('language.es')}
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
