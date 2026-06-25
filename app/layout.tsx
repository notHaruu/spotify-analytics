import "./globals.css"
import { montserrat } from "@/app/ui/fonts"
import NavItem from "@/components/navitem"
import { ThemeProvider } from "next-themes"
import { QueryClientContext } from "@/components/query-client-context"
import ThemeToggle from "@/components/theme-toggle"
import {
  House,
  User,
  Settings
} from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="antialiased bg-white dark:bg-neutral-900">
          <QueryClientContext>

            <ThemeProvider enableSystem={true} defaultTheme="system" />

            <div className="min-h-screen p-3 bg-gradient-to-t from-green-500 to-lime-400 rounded-2xl">

              <div className="flex min-h-[calc(100vh-24px)] gap-3 items-stretch">

      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= sidebar =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

                <aside className="w-64 shrink-0 bg-white dark:bg-neutral-900 text-white p-4 rounded-xl shadow-lg">
                  <h2 className="text-4xl font-bold mb-6 pb-5 border-b-2 border-neutral-200 dark:border-neutral-700 text-black dark:text-white">
                    Spotify Analytics
                  </h2>

                  <nav className="flex flex-col gap-3 bg-white dark:bg-neutral-900 text-black dark:text-white">
                    <NavItem icon={<House />} href="/dashboard" label="Dashboard (WIP)" />
                    <NavItem icon={<User />} href="/profile" label="Profile" />
                    <NavItem icon={<Settings />} href="/settings" label="Settings (WIP)" />

                    <div className="pt-5 border-t-2 border-neutral-200 dark:border-neutral-700 text-black dark:text-white">
                      <ThemeToggle />
                    </div>
                  </nav>
                </aside>

      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= main content =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

                <main className="flex-1 min-w-0 bg-white text-black dark:text-white bg-neutral-200 dark:bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col overflow-hidden">

                  <div className="w-full max-w-full min-w-0">
                    
                    <div className="break-words [overflow-wrap:anywhere] whitespace-normal">
                      {children}
                    </div>

                  </div>

      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= footer =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

                  <footer className="mt-auto pt-6 text-sm text-gray-500 border-t-2 border-neutral-200 dark:border-neutral-800">
                    © DevelopDoc | 2026
                  </footer>

                </main>

              </div>
            </div>

          </QueryClientContext>
        </div>
      </body>
    </html>
  );
}