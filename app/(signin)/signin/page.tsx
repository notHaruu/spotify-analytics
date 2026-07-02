import SignIn from "@/components/sign-in";
import { ThemeProvider } from "@/components/theme-provider";

export default function HomePage() {
  return (
    <div className="p-5 bg-white dark:bg-neutral-900 theme-transition">
      <div className="p-4 lg:p-20">
        <h1 className="mt-20 text-6xl lg:text-8xl text-center pb-10 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Spotify Analytics</h1>
        <div className="pt-7 flex justify-center scale-120 lg:scale-150">
          <SignIn />
        </div>
      </div>
    </div>
  )
}