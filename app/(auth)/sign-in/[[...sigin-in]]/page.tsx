import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="  flex h-screen w-full items-center justify-center bg-[#a55233]">
      <SignIn />
    </main>
  );
}
