import SignIn from "@/components/sign-in";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="p-5 bg-white dark:bg-neutral-900">
      <div className="p-4 lg:p-20">
        <h1 className="mt-20 text-6xl lg:text-8xl text-center pb-10 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Spotify Analytics</h1>
        <div className="pt-7 flex justify-center scale-120 lg:scale-150">
          <SignIn />
        </div>
        {/* <div className="flex flex-col items-center justify-center pt-30">
          <h2 className="text-2xl text-neutral-700">Powered by</h2>
          <Image
            src="/developdoc.png"
            alt="Spotify" width={400}
            height={400}
          />
        </div> */}
      </div>
    </div>
  )
}