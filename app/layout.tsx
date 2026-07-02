"use client"

import "./globals.css"
import { montserrat } from "@/app/(app)/ui/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClientContext } from "@/components/query-client-context"
import { SettingsProvider } from "@/lib/settings"

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