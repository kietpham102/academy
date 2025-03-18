import { SignUp } from "@clerk/nextjs";
export async function generateStaticParams() {
  return [{ signUp: [] }]; 
}

export default function Page() {
  return <SignUp />;
}