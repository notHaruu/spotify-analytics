"use client"

import "@/app/globals.css"
import { montserrat } from "@/app/(app)/ui/fonts"
import NavItem from "@/components/navitem"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClientContext } from "@/components/query-client-context"
import ThemeToggle from "@/components/theme-toggle"
import {
  House,
  User,
  Settings,
  Users,
  LogIn
} from "lucide-react"
import { SettingsProvider } from "@/lib/settings";
import { usePathname } from "next/navigation"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathName = usePathname()
  console.log(pathName)

  if (pathName === "/") {
    
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} bg-white dark:bg-neutral-900 theme-transition`}>
        <SettingsProvider>
          <QueryClientContext>
            <ThemeProvider>
              <div className="antialiased bg-white dark:bg-neutral-900 theme-transition">

                <div className="min-h-screen p-3 bg-gradient-to-t from-green-500 to-lime-400 rounded-2xl">

                  <div className="flex min-h-[calc(100vh-24px)] gap-3 items-stretch">

                    {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= main content =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

                    <main className="flex-1 min-w-0 bg-white text-black dark:text-white bg-neutral-200 dark:bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col overflow-hidden theme-transition">

                      <div className="w-full max-w-full min-w-0 theme-transition">

                        <div className="break-words [overflow-wrap:anywhere] whitespace-normal theme-transition">
                          {children}
                        </div>

                      </div>

                      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= footer =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

                      <footer className="mt-auto pt-6 text-sm border-t-2 text-blue-600 dark:text-blue-500 border-neutral-200 dark:border-neutral-800 theme-transition">
                        © DevelopDoc | 2026
                      </footer>

                    </main>

                  </div>
                </div>

              </div>
            </ThemeProvider>
          </QueryClientContext>
        </SettingsProvider>
      </body>
    </html>
  );
}