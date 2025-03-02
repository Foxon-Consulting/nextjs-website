"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Changer de thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:focus:bg-gray-800 dark:focus:text-white dark:hover:bg-gray-800"
        >
          Clair
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:focus:bg-gray-800 dark:focus:text-white dark:hover:bg-gray-800"
        >
          Sombre
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:focus:bg-gray-800 dark:focus:text-white dark:hover:bg-gray-800"
        >
          Système
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 