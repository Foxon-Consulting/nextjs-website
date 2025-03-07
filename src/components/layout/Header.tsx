"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const pathname = usePathname();

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
              Accueil
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="link" 
                  className={`text-sm font-medium ${
                    isServicePage() ? activeClass : inactiveClass
                  }`}
                >
                  Services <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
                <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                  <Link 
                    href="/consulting-it" 
                    className={`cursor-pointer ${isActive('/consulting-it') ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    Consulting IT
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                  <Link 
                    href="/data-ia" 
                    className={`cursor-pointer ${isActive('/data-ia') ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    Exploitation de données avec l&apos;IA
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                  <Link 
                    href="/formation" 
                    className={`cursor-pointer ${isActive('/formation') ? 'text-[#00f65e] font-semibold' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    Formations
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/contact" 
              className={`text-sm font-medium ${isActive('/contact') ? activeClass : inactiveClass}`}
            >
              Contact
            </Link>
          </nav>
          
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
                  Accueil
                </Link>
                
                <div className="space-y-3">
                  <p className={`text-sm font-medium ${
                    isServicePage() ? activeClass : 'text-gray-800 dark:text-gray-200'
                  }`}>Services</p>
                  <div className="pl-4 space-y-2">
                    <Link 
                      href="/consulting-it" 
                      className={`block text-sm ${isActive('/consulting-it') ? activeClass : inactiveClass}`}
                    >
                      Consulting IT
                    </Link>
                    <Link 
                      href="/data-ia" 
                      className={`block text-sm ${isActive('/data-ia') ? activeClass : inactiveClass}`}
                    >
                      Exploitation de données avec l&apos;IA
                    </Link>
                    <Link 
                      href="/formation" 
                      className={`block text-sm ${isActive('/formation') ? activeClass : inactiveClass}`}
                    >
                      Formations
                    </Link>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className={`text-sm font-medium ${isActive('/contact') ? activeClass : inactiveClass}`}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}