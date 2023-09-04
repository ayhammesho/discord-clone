import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center  gap-4">
      <h1>THIS IS PROTECTED ROUTE</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
