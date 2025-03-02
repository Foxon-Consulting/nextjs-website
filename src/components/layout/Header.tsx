"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Fonction pour vérifier si un chemin est actif
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' && !isScrolled;
    }
    return pathname.startsWith(path);
  };

  // Effet pour détecter le défilement
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      // Détecter si la page a défilé
      setIsScrolled(window.scrollY > 50);
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', handleScroll);
    // Appeler une fois au chargement
    handleScroll();

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const activeClass = "text-[#00f65e] font-semibold";
  const inactiveClass = "hover:text-[#00f65e] transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo/new/GREEN-BLACK-C.png" alt="Logo" width={150} height={40} className="h-10 w-auto" />
        </Link>
        
        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-6">
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
                  isActive('/consulting-it') || isActive('/data-ia') || isActive('/formation') 
                    ? activeClass 
                    : inactiveClass
                }`}
              >
                Services <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link 
                  href="/consulting-it" 
                  className={`cursor-pointer ${isActive('/consulting-it') ? 'text-[#00f65e] font-semibold' : ''}`}
                >
                  Consulting IT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  href="/data-ia" 
                  className={`cursor-pointer ${isActive('/data-ia') ? 'text-[#00f65e] font-semibold' : ''}`}
                >
                  Exploitation de données avec l&apos;IA
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  href="/formation" 
                  className={`cursor-pointer ${isActive('/formation') ? 'text-[#00f65e] font-semibold' : ''}`}
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
        
        {/* Menu mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex justify-center mb-6">
              <Image src="/images/logo/new/GREEN-BLACK-C.png" alt="Logo" width={150} height={40} className="h-10 w-auto" />
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
                  isActive('/consulting-it') || isActive('/data-ia') || isActive('/formation') 
                    ? activeClass 
                    : ''
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
    </header>
  );
} 