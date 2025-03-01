"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo/logo-dark.png" alt="Logo" width={150} height={40} className="h-10 w-auto" />
        </Link>
        
        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary-green transition-colors">
            Accueil
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-sm font-medium hover:text-primary-green transition-colors">
                Services <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/consulting-it" className="cursor-pointer">
                  Consulting IT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/data-ia" className="cursor-pointer">
                  Exploitation de données avec l'IA
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/formation" className="cursor-pointer">
                  Formations
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/#approach" className="text-sm font-medium hover:text-primary-green transition-colors">
            Notre Approche
          </Link>
          
          <Link href="/#testimonials" className="text-sm font-medium hover:text-primary-green transition-colors">
            Témoignages
          </Link>
          
          <Link href="/#faq" className="text-sm font-medium hover:text-primary-green transition-colors">
            FAQ
          </Link>
          
          <Link href="/#contact" className="text-sm font-medium hover:text-primary-green transition-colors">
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
              <Image src="/images/logo/logo-dark.png" alt="Logo" width={150} height={40} className="h-10 w-auto" />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-primary-green transition-colors">
                Accueil
              </Link>
              
              <div className="space-y-3">
                <p className="text-sm font-medium">Services</p>
                <div className="pl-4 space-y-2">
                  <Link href="/consulting-it" className="block text-sm hover:text-primary-green transition-colors">
                    Consulting IT
                  </Link>
                  <Link href="/data-ia" className="block text-sm hover:text-primary-green transition-colors">
                    Exploitation de données avec l'IA
                  </Link>
                  <Link href="/formation" className="block text-sm hover:text-primary-green transition-colors">
                    Formations
                  </Link>
                </div>
              </div>
              
              <Link href="/#approach" className="text-sm font-medium hover:text-primary-green transition-colors">
                Notre Approche
              </Link>
              
              <Link href="/#testimonials" className="text-sm font-medium hover:text-primary-green transition-colors">
                Témoignages
              </Link>
              
              <Link href="/#faq" className="text-sm font-medium hover:text-primary-green transition-colors">
                FAQ
              </Link>
              
              <Link href="/#contact" className="text-sm font-medium hover:text-primary-green transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 