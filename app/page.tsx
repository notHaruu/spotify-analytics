import SignIn from "@/components/sign-in";

export default async function HomePage() {
  
  return (
    <div className="p-10">
      <h1 className="text-7xl pb-5 mb-10 font-bold border-b-2 border-neutral-700">Homepage</h1>
      <SignIn />   
    </div>
  )
}