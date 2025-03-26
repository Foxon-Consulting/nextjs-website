"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Définir notre propre type au lieu d'importer de next-themes/dist/types
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
