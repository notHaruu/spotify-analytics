"use client"

import "./globals.css"
import { montserrat } from "@/app/(app)/ui/fonts"
import NavItem from "@/components/navitem"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClientContext } from "@/components/query-client-context"
import ThemeToggle from "@/components/theme-toggle"

import { SettingsProvider } from "@/lib/settings";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} bg-white dark:bg-neutral-900 theme-transition`}>
        <SettingsProvider>
          <QueryClientContext>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </QueryClientContext>
        </SettingsProvider>
      </body>
    </html>
  );
}